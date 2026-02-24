import { Server, Socket } from "socket.io";
import {
  Room,
  Player,
  InterestScores,
  CLIENT_EVENTS,
  SERVER_EVENTS,
  RoomJoinPayload,
} from "@pathfinder/shared";
import { persistGameState } from "./state-recovery";

// In-memory room store
const rooms = new Map<string, Room>();

function generateRoomCode(): string {
  const num = Math.floor(1000 + Math.random() * 9000);
  return `${num}`;
}

function createUniqueCode(): string {
  let code: string;
  do {
    code = generateRoomCode();
  } while (rooms.has(code));
  return code;
}

export function getRoom(code: string): Room | undefined {
  return rooms.get(code);
}

const MAX_PLAYERS = 100;

function emptyScores(): InterestScores {
  return { healthBiomedical: 0, lifeEcology: 0, computing: 0, chemistryMaterials: 0, designBuild: 0, earthEnergy: 0 };
}

// Debounced room-state broadcaster to avoid flooding clients on rapid join/disconnect
const roomBroadcastTimers = new Map<string, NodeJS.Timeout>();

function broadcastRoomState(io: Server, roomCode: string) {
  if (roomBroadcastTimers.has(roomCode)) return; // already scheduled
  roomBroadcastTimers.set(roomCode, setTimeout(() => {
    roomBroadcastTimers.delete(roomCode);
    const room = rooms.get(roomCode);
    if (room) {
      // Strip scores from broadcast
      const sanitized = {
        ...room,
        players: Object.fromEntries(
          Object.entries(room.players).map(([id, p]) => [id, { ...p, scores: undefined }])
        ),
      };
      io.to(roomCode).emit(SERVER_EVENTS.ROOM_STATE, sanitized);
    }
  }, 200));
}

export function handleRoomEvents(io: Server, socket: Socket): void {
  // room:create — Host creates a new room
  socket.on(CLIENT_EVENTS.ROOM_CREATE, (_payload: unknown, callback) => {
    const code = createUniqueCode();

    const hostPlayer: Player = {
      id: socket.id,
      displayName: "Host",
      isHost: true,
      connected: true,
      currentScenario: 0,
      currentDecision: 0,
      completed: false,
      scores: emptyScores(),
    };

    const room: Room = {
      code,
      hostId: socket.id,
      players: { [socket.id]: hostPlayer },
      phase: "lobby",
      createdAt: Date.now(),
    };

    rooms.set(code, room);

    // Leave any previous rooms
    for (const existingRoom of socket.rooms) {
      if (existingRoom !== socket.id) {
        socket.leave(existingRoom);
      }
    }
    socket.join(code);
    (socket as any).roomCode = code;
    (socket as any).playerId = socket.id;

    callback?.({ success: true, roomCode: code, room });

    // Persist game state for crash recovery
    const { gameStates } = require("./game");
    persistGameState(rooms, gameStates);
  });

  // room:join — Player joins an existing room
  socket.on(CLIENT_EVENTS.ROOM_JOIN, (payload: RoomJoinPayload, callback) => {
    // Input validation
    if (!payload?.playerName || typeof payload.playerName !== "string" || payload.playerName.length > 30) {
      return callback?.({ success: false, error: "Invalid player name" });
    }
    if (!payload?.roomCode || typeof payload.roomCode !== "string" || !/^\d{4}$/.test(payload.roomCode)) {
      return callback?.({ success: false, error: "Invalid room code" });
    }
    payload.playerName = payload.playerName.trim().slice(0, 30);

    const room = rooms.get(payload.roomCode);

    if (!room) {
      callback?.({ success: false, error: "Room not found" });
      socket.emit(SERVER_EVENTS.ROOM_ERROR, {
        message: "Room not found",
        code: "ROOM_NOT_FOUND",
      });
      return;
    }

    if (room.phase !== "lobby") {
      callback?.({ success: false, error: "Game already in progress" });
      socket.emit(SERVER_EVENTS.ROOM_ERROR, {
        message: "Game already in progress",
        code: "GAME_IN_PROGRESS",
      });
      return;
    }

    if (Object.keys(room.players).length >= MAX_PLAYERS) {
      callback?.({ success: false, error: "Room is full" });
      return;
    }

    const player: Player = {
      id: socket.id,
      displayName: payload.playerName,
      isHost: false,
      connected: true,
      currentScenario: 0,
      currentDecision: 0,
      completed: false,
      scores: emptyScores(),
    };

    room.players[socket.id] = player;

    // Leave any previous rooms
    for (const existingRoom of socket.rooms) {
      if (existingRoom !== socket.id) {
        socket.leave(existingRoom);
      }
    }
    socket.join(payload.roomCode);
    (socket as any).roomCode = payload.roomCode;
    (socket as any).playerId = socket.id;

    // Send full room state to joining player
    callback?.({ success: true, room, playerId: socket.id });

    // Broadcast to everyone else
    socket.to(payload.roomCode).emit(SERVER_EVENTS.ROOM_PLAYER_JOINED, {
      player: { id: player.id, displayName: player.displayName },
    });

    // Send updated room state to all (debounced)
    broadcastRoomState(io, payload.roomCode);

    // Persist game state for crash recovery
    const { gameStates } = require("./game");
    persistGameState(rooms, gameStates);
  });

  // room:rejoin — Reconnecting client re-associates with their room
  socket.on(
    CLIENT_EVENTS.ROOM_REJOIN,
    (payload: { roomCode: string; playerId: string }, callback) => {
      const room = rooms.get(payload.roomCode);
      if (!room) {
        callback?.({ success: false, error: "Room not found" });
        return;
      }

      const oldPlayerId = payload.playerId;
      const newSocketId = socket.id;

      const player = room.players[oldPlayerId];
      if (!player) {
        callback?.({ success: false, error: "Player not found in room" });
        return;
      }

      // Update player entry with new socket ID
      if (oldPlayerId !== newSocketId) {
        player.id = newSocketId;
        player.connected = true;
        delete room.players[oldPlayerId];
        room.players[newSocketId] = player;

        if (room.hostId === oldPlayerId) {
          room.hostId = newSocketId;
        }
      } else {
        player.connected = true;
      }

      // Leave any previous rooms
      for (const existingRoom of socket.rooms) {
        if (existingRoom !== socket.id) {
          socket.leave(existingRoom);
        }
      }
      socket.join(payload.roomCode);
      (socket as any).roomCode = payload.roomCode;
      (socket as any).playerId = newSocketId;

      callback?.({ success: true, room, playerId: newSocketId });
      broadcastRoomState(io, payload.roomCode);
    }
  );

  // Handle disconnection
  socket.on("disconnect", () => {
    const roomCode = (socket as any).roomCode;
    if (!roomCode) return;

    const room = rooms.get(roomCode);
    if (!room) return;

    const player = room.players[socket.id];
    if (player) {
      player.connected = false;
      io.to(roomCode).emit(SERVER_EVENTS.ROOM_PLAYER_LEFT, {
        playerId: socket.id,
      });
      broadcastRoomState(io, roomCode);

      // Persist game state for crash recovery
      const { gameStates } = require("./game");
      persistGameState(rooms, gameStates);
    }
  });
}

export { rooms };
