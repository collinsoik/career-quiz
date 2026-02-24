import { Server, Socket } from "socket.io";
import {
  CLIENT_EVENTS,
  SERVER_EVENTS,
  ChoiceSubmitPayload,
  ResultsSharePayload,
  SCENARIOS,
  TOTAL_DECISIONS,
  FeedItem,
  ClassStats,
  InterestCategory,
  ClientScenario,
} from "@pathfinder/shared";
import { getRoom, rooms } from "./rooms";
import { calculateResults } from "./scoring";
import { saveSession, saveChoice, savePlayerResult } from "./db";

// Per-room game state (kept separate from Room to avoid bloating broadcasts)
interface RoomGameState {
  sessionId: string;
  feedItems: FeedItem[];
  choiceCounts: Record<string, Record<string, number>>; // decisionId -> choiceId -> count
  completedResults: Record<string, ReturnType<typeof calculateResults>>; // playerId -> results
}

const gameStates = new Map<string, RoomGameState>();

// Pre-built lookup map: decisionId -> Decision (with weights)
const decisionMap = new Map<string, (typeof SCENARIOS)[number]["decisions"][number]>();
for (const scenario of SCENARIOS) {
  for (const decision of scenario.decisions) {
    decisionMap.set(decision.id, decision);
  }
}

// Strip weights from scenarios before sending to clients
function getClientScenarios(): ClientScenario[] {
  return SCENARIOS.map((s) => ({
    id: s.id,
    title: s.title,
    icon: s.icon,
    description: s.description,
    narrative: s.narrative,
    decisions: s.decisions.map((d) => ({
      id: d.id,
      prompt: d.prompt,
      context: d.context,
      choices: d.choices.map((c) => ({
        id: c.id,
        text: c.text,
      })),
    })),
  }));
}

function addFeedItem(
  roomCode: string,
  type: FeedItem["type"],
  text: string
): FeedItem | null {
  const gs = gameStates.get(roomCode);
  if (!gs) return null;

  const item: FeedItem = {
    id: `feed-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
    type,
    text,
    timestamp: Date.now(),
  };
  gs.feedItems.push(item);

  // Keep only last 50 items
  if (gs.feedItems.length > 50) {
    gs.feedItems = gs.feedItems.slice(-50);
  }

  return item;
}

function computeClassStats(roomCode: string): ClassStats | null {
  const room = getRoom(roomCode);
  const gs = gameStates.get(roomCode);
  if (!room || !gs) return null;

  const students = Object.values(room.players).filter((p) => !p.isHost);
  const totalPlayers = students.length;
  const completedPlayers = students.filter((p) => p.completed).length;

  // Calculate average progress
  let totalProgress = 0;
  for (const student of students) {
    let decisionsCompleted = 0;
    for (let i = 0; i < student.currentScenario; i++) {
      decisionsCompleted += SCENARIOS[i].decisions.length;
    }
    decisionsCompleted += student.currentDecision;
    totalProgress += (decisionsCompleted / TOTAL_DECISIONS) * 100;
  }
  const averageProgress = totalPlayers > 0 ? totalProgress / totalPlayers : 0;

  // Category distribution (among completed players)
  const categoryDistribution: Record<InterestCategory, number> = {
    healthBiomedical: 0, lifeEcology: 0, computing: 0,
    chemistryMaterials: 0, designBuild: 0, earthEnergy: 0,
  };

  for (const result of Object.values(gs.completedResults)) {
    if (result.topCategories.length > 0) {
      categoryDistribution[result.topCategories[0].key]++;
    }
  }

  // Popular choices
  const popularChoices: ClassStats["popularChoices"] = [];
  for (const [decisionId, choices] of Object.entries(gs.choiceCounts)) {
    const decision = decisionMap.get(decisionId);
    for (const [choiceId, count] of Object.entries(choices)) {
      let choiceText = choiceId;
      if (decision) {
        const choice = decision.choices.find((c) => c.id === choiceId);
        if (choice) choiceText = choice.text;
      }
      popularChoices.push({ decisionId, choiceId, choiceText, count });
    }
  }
  popularChoices.sort((a, b) => b.count - a.count);

  return {
    totalPlayers,
    completedPlayers,
    averageProgress,
    categoryDistribution,
    popularChoices: popularChoices.slice(0, 10),
  };
}

export function handleGameEvents(io: Server, socket: Socket): void {
  // game:start — Host starts the game
  socket.on(CLIENT_EVENTS.GAME_START, (_payload: unknown, callback) => {
    const roomCode = (socket as any).roomCode;
    const room = roomCode ? getRoom(roomCode) : undefined;

    if (!room) {
      callback?.({ success: false, error: "Room not found" });
      return;
    }

    if (room.hostId !== socket.id) {
      callback?.({ success: false, error: "Only the host can start the game" });
      return;
    }

    const students = Object.values(room.players).filter((p) => !p.isHost);
    if (students.length < 1) {
      callback?.({ success: false, error: "Need at least 1 player to start" });
      return;
    }

    // Transition to playing
    room.phase = "playing";

    // Initialize game state
    const sessionId = saveSession(roomCode, students.length);
    gameStates.set(roomCode, {
      sessionId,
      feedItems: [],
      choiceCounts: {},
      completedResults: {},
    });

    // Send client-safe scenarios to all players
    const clientScenarios = getClientScenarios();
    io.to(roomCode).emit(SERVER_EVENTS.GAME_STARTED, { scenarios: clientScenarios });

    // Send initial feed item to host
    const feedItem = addFeedItem(roomCode, "milestone", `Game started with ${students.length} explorer${students.length === 1 ? "" : "s"}!`);
    if (feedItem) {
      socket.emit(SERVER_EVENTS.FEED_UPDATE, feedItem);
    }

    callback?.({ success: true });
  });

  // choice:submit — Player submits a choice for a decision
  socket.on(CLIENT_EVENTS.CHOICE_SUBMIT, (payload: ChoiceSubmitPayload) => {
    const roomCode = (socket as any).roomCode;
    const room = roomCode ? getRoom(roomCode) : undefined;
    if (!room || room.phase !== "playing") return;

    const player = room.players[socket.id];
    if (!player || player.isHost || player.completed) return;

    const { decisionId, choiceId } = payload;

    // Find the decision and choice via lookup map (server-side, with weights)
    let foundChoice: { weights: Record<string, number> } | null = null;
    let foundDecisionPrompt = "";
    let foundChoiceText = "";
    const lookupDecision = decisionMap.get(decisionId);
    if (lookupDecision) {
      foundDecisionPrompt = lookupDecision.prompt;
      const choice = lookupDecision.choices.find((c) => c.id === choiceId);
      if (choice) {
        foundChoice = choice;
        foundChoiceText = choice.text;
      }
    }

    if (!foundChoice) return;

    // Apply weights to player scores
    for (const [category, weight] of Object.entries(foundChoice.weights)) {
      if (category in player.scores) {
        (player.scores as any)[category] += weight;
      }
    }

    // Track choice in game state
    const gs = gameStates.get(roomCode);
    if (gs) {
      if (!gs.choiceCounts[decisionId]) {
        gs.choiceCounts[decisionId] = {};
      }
      gs.choiceCounts[decisionId][choiceId] =
        (gs.choiceCounts[decisionId][choiceId] || 0) + 1;

      // Save to DB
      saveChoice(gs.sessionId, socket.id, decisionId, choiceId);
    }

    // Advance player position
    const currentScenario = SCENARIOS[player.currentScenario];
    if (currentScenario) {
      if (player.currentDecision + 1 < currentScenario.decisions.length) {
        // Next decision in same scenario
        player.currentDecision++;
      } else if (player.currentScenario + 1 < SCENARIOS.length) {
        // Next scenario
        player.currentScenario++;
        player.currentDecision = 0;
      } else {
        // All done!
        player.completed = true;
      }
    }

    // Send updated player state to this player
    socket.emit(SERVER_EVENTS.PLAYER_STATE, {
      currentScenario: player.currentScenario,
      currentDecision: player.currentDecision,
      completed: player.completed,
    });

    // Generate feed items for host
    if (gs) {
      const hostSocket = room.hostId;

      // Choice-based feed commentary
      const totalForDecision = Object.values(gs.choiceCounts[decisionId] || {}).reduce((s, c) => s + c, 0);
      const choiceCount = gs.choiceCounts[decisionId]?.[choiceId] || 0;

      // Fun commentary when patterns emerge
      if (totalForDecision >= 3 && choiceCount === 1) {
        const feedItem = addFeedItem(roomCode, "choice", `${player.displayName} is the only one who chose to "${foundChoiceText.toLowerCase().slice(0, 60)}..."`);
        if (feedItem) io.to(hostSocket).emit(SERVER_EVENTS.FEED_UPDATE, feedItem);
      } else if (choiceCount >= 3 && totalForDecision >= 4) {
        const pct = Math.round((choiceCount / totalForDecision) * 100);
        const feedItem = addFeedItem(roomCode, "stat", `${pct}% of explorers chose the same thing!`);
        if (feedItem) io.to(hostSocket).emit(SERVER_EVENTS.FEED_UPDATE, feedItem);
      }

      // Milestone commentary
      if (player.currentScenario > 0 && player.currentDecision === 0 && !player.completed) {
        const newScenario = SCENARIOS[player.currentScenario];
        const feedItem = addFeedItem(roomCode, "milestone", `${player.displayName} just started "${newScenario.title}" ${newScenario.icon}`);
        if (feedItem) io.to(hostSocket).emit(SERVER_EVENTS.FEED_UPDATE, feedItem);
      }

      // Completion
      if (player.completed) {
        const results = calculateResults(player);
        gs.completedResults[socket.id] = results;

        // Save to DB
        savePlayerResult(
          gs.sessionId,
          socket.id,
          player.displayName,
          player.scores,
          results.careers.map((c) => c.title),
          false
        );

        // Send results to the player
        socket.emit(SERVER_EVENTS.PLAYER_RESULTS, results);

        // Notify host
        const feedItem = addFeedItem(roomCode, "completion", `${player.displayName} finished! Top interest: ${results.topCategories[0]?.label || "?"}`);
        if (feedItem) io.to(hostSocket).emit(SERVER_EVENTS.FEED_UPDATE, feedItem);

        io.to(hostSocket).emit(SERVER_EVENTS.PLAYER_COMPLETED, {
          playerId: socket.id,
          displayName: player.displayName,
          topCategory: results.topCategories[0]?.label || "?",
        });

        // Check if all students are done
        const students = Object.values(room.players).filter((p) => !p.isHost);
        const allDone = students.every((p) => p.completed);
        if (allDone) {
          room.phase = "results";
          const feedItem2 = addFeedItem(roomCode, "milestone", "Everyone has finished! Results are in.");
          if (feedItem2) io.to(hostSocket).emit(SERVER_EVENTS.FEED_UPDATE, feedItem2);
          io.to(roomCode).emit(SERVER_EVENTS.GAME_ALL_COMPLETED);
        }
      }

      // Send updated class stats to host
      const stats = computeClassStats(roomCode);
      if (stats) {
        io.to(hostSocket).emit(SERVER_EVENTS.CLASS_STATS, stats);
      }
    }
  });

  // results:share — Player opts in/out of sharing with teacher
  socket.on(CLIENT_EVENTS.RESULTS_SHARE, (payload: ResultsSharePayload) => {
    const roomCode = (socket as any).roomCode;
    const room = roomCode ? getRoom(roomCode) : undefined;
    if (!room) return;

    const gs = gameStates.get(roomCode);
    if (!gs) return;

    const results = gs.completedResults[socket.id];
    if (!results) return;

    results.sharedWithTeacher = payload.share;

    // Update DB
    const player = room.players[socket.id];
    if (player) {
      savePlayerResult(
        gs.sessionId,
        socket.id,
        player.displayName,
        player.scores,
        results.careers.map((c) => c.title),
        payload.share
      );
    }

    // Notify host of shared results
    if (payload.share) {
      io.to(room.hostId).emit(SERVER_EVENTS.PLAYER_COMPLETED, {
        playerId: socket.id,
        displayName: player?.displayName || "Unknown",
        topCategory: results.topCategories[0]?.label || "?",
        results: results,
      });
    }
  });
}
