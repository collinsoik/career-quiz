#!/usr/bin/env node
/**
 * Load test: Simulates 60 concurrent students playing through the quiz.
 *
 * Usage:
 *   node load-test.js                          # test against localhost:3007
 *   node load-test.js https://pathfinder-api.collinsoik.dev   # test against production
 *   node load-test.js http://localhost:3007 80  # 80 students
 */

const { io } = require("socket.io-client");

const SERVER_URL = process.argv[2] || "http://localhost:3007";
const NUM_STUDENTS = parseInt(process.argv[3] || "60", 10);
const MIN_CHOICE_DELAY = 300;   // ms between choices (simulates reading)
const MAX_CHOICE_DELAY = 2000;

// ── Event constants (must match shared/events.ts) ──
const CLIENT_EVENTS = {
  ROOM_CREATE: "room:create",
  ROOM_JOIN: "room:join",
  GAME_START: "game:start",
  CHOICE_SUBMIT: "choice:submit",
  SURVEY_SUBMIT: "survey:submit",
};
const SERVER_EVENTS = {
  ROOM_STATE: "room:state",
  GAME_STARTED: "game:started",
  PLAYER_STATE: "player:state",
  PLAYER_RESULTS: "player:results",
  GAME_ALL_COMPLETED: "game:all-completed",
};

// ── Stats tracking ──
const stats = {
  connected: 0,
  joined: 0,
  choicesSubmitted: 0,
  choicesAcked: 0,
  choicesFailed: 0,
  completed: 0,
  resultsReceived: 0,
  surveysSubmitted: 0,
  disconnects: 0,
  reconnects: 0,
  errors: [],
  startTime: 0,
};

function randomDelay() {
  return MIN_CHOICE_DELAY + Math.random() * (MAX_CHOICE_DELAY - MIN_CHOICE_DELAY);
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function log(msg) {
  const elapsed = ((Date.now() - stats.startTime) / 1000).toFixed(1);
  console.log(`[${elapsed}s] ${msg}`);
}

function printStats() {
  console.log("\n══════════════════════════════════════");
  console.log("  LOAD TEST RESULTS");
  console.log("══════════════════════════════════════");
  console.log(`  Students:          ${NUM_STUDENTS}`);
  console.log(`  Connected:         ${stats.connected}`);
  console.log(`  Joined room:       ${stats.joined}`);
  console.log(`  Choices submitted: ${stats.choicesSubmitted}`);
  console.log(`  Choices acked:     ${stats.choicesAcked}`);
  console.log(`  Choices failed:    ${stats.choicesFailed}`);
  console.log(`  Completed quiz:    ${stats.completed}`);
  console.log(`  Results received:  ${stats.resultsReceived}`);
  console.log(`  Surveys submitted: ${stats.surveysSubmitted}`);
  console.log(`  Disconnects:       ${stats.disconnects}`);
  console.log(`  Reconnects:        ${stats.reconnects}`);
  console.log(`  Errors:            ${stats.errors.length}`);
  const elapsed = ((Date.now() - stats.startTime) / 1000).toFixed(1);
  console.log(`  Total time:        ${elapsed}s`);
  console.log("══════════════════════════════════════");
  if (stats.errors.length > 0) {
    console.log("\nErrors:");
    stats.errors.slice(0, 10).forEach((e, i) => console.log(`  ${i + 1}. ${e}`));
    if (stats.errors.length > 10) console.log(`  ... and ${stats.errors.length - 10} more`);
  }

  // Pass/fail
  const passed =
    stats.connected === NUM_STUDENTS &&
    stats.joined === NUM_STUDENTS &&
    stats.completed === NUM_STUDENTS &&
    stats.resultsReceived === NUM_STUDENTS &&
    stats.surveysSubmitted === NUM_STUDENTS &&
    stats.choicesFailed === 0 &&
    stats.errors.length === 0;

  console.log(`\n${passed ? "PASS" : "FAIL"}\n`);
  process.exit(passed ? 0 : 1);
}

// ── Create host and get room code ──
async function createRoom() {
  return new Promise((resolve, reject) => {
    const host = io(SERVER_URL, {
      transports: ["websocket"],
      reconnection: false,
    });

    host.on("connect", () => {
      log("Host connected");
      host.emit(CLIENT_EVENTS.ROOM_CREATE, null, (response) => {
        if (!response.success) {
          reject(new Error("Failed to create room: " + JSON.stringify(response)));
          return;
        }
        log(`Room created: ${response.roomCode}`);
        resolve({ host, roomCode: response.roomCode });
      });
    });

    host.on("connect_error", (err) => {
      reject(new Error(`Host connect error: ${err.message}`));
    });

    setTimeout(() => reject(new Error("Host connection timeout")), 10000);
  });
}

// ── Simulate a single student ──
async function simulateStudent(roomCode, studentIndex, scenarios) {
  const name = `Student_${String(studentIndex + 1).padStart(3, "0")}`;

  return new Promise((resolve) => {
    const socket = io(SERVER_URL, {
      transports: ["websocket"],
      reconnection: true,
      reconnectionAttempts: 10,
      reconnectionDelay: 500,
      reconnectionDelayMax: 3000,
      randomizationFactor: 0.5,
    });

    let playerId = null;
    let resolved = false;

    function finish() {
      if (!resolved) {
        resolved = true;
        socket.disconnect();
        resolve();
      }
    }

    // Timeout: if student doesn't complete in 120s, something is wrong
    const timeout = setTimeout(() => {
      if (!resolved) {
        stats.errors.push(`${name}: timed out after 120s`);
        finish();
      }
    }, 120000);

    socket.on("connect", () => {
      stats.connected++;
    });

    socket.on("disconnect", () => {
      if (!resolved) stats.disconnects++;
    });

    socket.io.on("reconnect", () => {
      stats.reconnects++;
    });

    socket.on("connect_error", (err) => {
      stats.errors.push(`${name}: connect error - ${err.message}`);
    });

    // Join room
    socket.on("connect", () => {
      if (playerId) return; // already joined, this is a reconnect

      socket.emit(
        CLIENT_EVENTS.ROOM_JOIN,
        { roomCode, playerName: name },
        (response) => {
          if (!response.success) {
            stats.errors.push(`${name}: join failed - ${response.error}`);
            finish();
            return;
          }
          playerId = response.playerId || socket.id;
          stats.joined++;
        }
      );
    });

    // Play through all decisions when game starts
    socket.on(SERVER_EVENTS.GAME_STARTED, async (data) => {
      const clientScenarios = data.scenarios;
      if (!clientScenarios || clientScenarios.length === 0) {
        stats.errors.push(`${name}: received empty scenarios`);
        finish();
        return;
      }

      // Play through each scenario and decision
      for (let si = 0; si < clientScenarios.length; si++) {
        const scenario = clientScenarios[si];
        for (let di = 0; di < scenario.decisions.length; di++) {
          const decision = scenario.decisions[di];
          // Pick a random choice
          const choice = decision.choices[Math.floor(Math.random() * decision.choices.length)];

          // Wait a random delay to simulate reading
          await sleep(randomDelay());

          // Register PLAYER_STATE listener BEFORE emitting to avoid race condition
          const statePromise = new Promise((stateResolve) => {
            const stateTimeout = setTimeout(() => {
              socket.off(SERVER_EVENTS.PLAYER_STATE, onState);
              stats.errors.push(`${name}: PLAYER_STATE timeout after ${decision.id}`);
              stateResolve();
            }, 10000);

            function onState(stateData) {
              clearTimeout(stateTimeout);
              if (stateData.completed) {
                stats.completed++;
              }
              stateResolve();
            }
            socket.once(SERVER_EVENTS.PLAYER_STATE, onState);
          });

          // Submit choice with ack
          await new Promise((ackResolve) => {
            const ackTimeout = setTimeout(() => {
              stats.choicesFailed++;
              stats.errors.push(`${name}: ack timeout on ${decision.id}`);
              ackResolve(false);
            }, 10000);

            socket.emit(
              CLIENT_EVENTS.CHOICE_SUBMIT,
              { decisionId: decision.id, choiceId: choice.id },
              (response) => {
                clearTimeout(ackTimeout);
                if (response && response.success) {
                  stats.choicesAcked++;
                  ackResolve(true);
                } else {
                  stats.choicesFailed++;
                  stats.errors.push(`${name}: choice rejected for ${decision.id}`);
                  ackResolve(false);
                }
              }
            );
            stats.choicesSubmitted++;
          });

          // Wait for PLAYER_STATE before submitting next choice
          await statePromise;
        }
      }
    });

    // Listen for results
    socket.on(SERVER_EVENTS.PLAYER_RESULTS, async (results) => {
      stats.resultsReceived++;
      clearTimeout(timeout);
      log(`${name} finished! Top: ${results.topCategories?.[0]?.label || "?"}`);

      // Submit survey after a short delay (simulates user filling it out)
      await sleep(200 + Math.random() * 800);
      const enjoymentOptions = [1, 2, 3, 4, 5];
      const learnedOptions = ["Yes!", "Maybe", "Not really"];
      const exploreOptions = ["Definitely", "Maybe some", "Probably not"];
      socket.emit(CLIENT_EVENTS.SURVEY_SUBMIT, {
        enjoyment: enjoymentOptions[Math.floor(Math.random() * enjoymentOptions.length)],
        learned: learnedOptions[Math.floor(Math.random() * learnedOptions.length)],
        wouldExplore: exploreOptions[Math.floor(Math.random() * exploreOptions.length)],
        overall: enjoymentOptions[Math.floor(Math.random() * enjoymentOptions.length)],
      });
      stats.surveysSubmitted++;

      // Small delay to let the emit flush before disconnecting
      await sleep(100);
      finish();
    });
  });
}

// ── Main ──
async function main() {
  console.log(`\nLoad Test: ${NUM_STUDENTS} students → ${SERVER_URL}\n`);
  stats.startTime = Date.now();

  // Step 1: Create room
  let host, roomCode;
  try {
    ({ host, roomCode } = await createRoom());
  } catch (err) {
    console.error("Failed to create room:", err.message);
    process.exit(1);
  }

  // Step 2: Connect all students (staggered over 3 seconds to simulate classroom)
  log(`Connecting ${NUM_STUDENTS} students...`);
  const studentPromises = [];
  for (let i = 0; i < NUM_STUDENTS; i++) {
    studentPromises.push(simulateStudent(roomCode, i, null));
    // Stagger connections: ~50ms apart
    await sleep(50);
  }

  // Wait for all students to join
  log("Waiting for all students to join...");
  await sleep(3000);
  log(`${stats.joined}/${NUM_STUDENTS} students joined`);

  if (stats.joined < NUM_STUDENTS) {
    log(`WARNING: Only ${stats.joined} students joined. Continuing anyway...`);
  }

  // Step 3: Start the game
  log("Host starting game...");
  await new Promise((resolve, reject) => {
    host.emit(CLIENT_EVENTS.GAME_START, null, (response) => {
      if (!response.success) {
        reject(new Error("Failed to start game: " + response.error));
        return;
      }
      log("Game started!");
      resolve();
    });
  });

  // Step 4: Wait for all students to finish
  log("Students playing...");

  // Print progress every 5 seconds
  const progressInterval = setInterval(() => {
    log(`Progress: ${stats.completed}/${NUM_STUDENTS} completed, ${stats.choicesSubmitted} choices submitted, ${stats.choicesAcked} acked, ${stats.errors.length} errors`);
  }, 5000);

  // Wait for all student promises to resolve
  await Promise.all(studentPromises);
  clearInterval(progressInterval);

  // Step 5: Print results
  host.disconnect();
  printStats();
}

main().catch((err) => {
  console.error("Load test crashed:", err);
  process.exit(1);
});
