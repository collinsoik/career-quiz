import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { handleRoomEvents, rooms } from "./rooms";
import { handleGameEvents, gameStates } from "./game";
import { initDb, flushDb } from "./db";
import { recoverGameState, flushGameState } from "./state-recovery";

const app = express();
const httpServer = createServer(app);

const CORS_ORIGIN = process.env.CORS_ORIGIN || "http://localhost:3000";
const allowedOrigins = CORS_ORIGIN.split(",").map((s) => s.trim());

const io = new Server(httpServer, {
  cors: {
    origin: allowedOrigins.length === 1 ? allowedOrigins[0] : allowedOrigins,
    methods: ["GET", "POST"],
  },
  connectionStateRecovery: { maxDisconnectionDuration: 60000 },
  pingTimeout: 10000,
  pingInterval: 15000,
});

// Reject new connections when server is at capacity
io.use((socket, next) => {
  if (io.engine.clientsCount > 200) return next(new Error("server full"));
  next();
});

process.on("unhandledRejection", (reason) => {
  console.error("Unhandled rejection:", reason);
});
process.on("uncaughtException", (err) => {
  console.error("Uncaught exception:", err);
  flushDb();
  flushGameState(rooms, gameStates);
  process.exit(1);
});

// Health check endpoint
app.get("/health", (_req, res) => {
  res.json({ status: "ok", game: "pathfinder", timestamp: Date.now() });
});

// Socket.IO connection handling
io.on("connection", (socket) => {
  console.log(`Client connected: ${socket.id}`);

  handleRoomEvents(io, socket);
  handleGameEvents(io, socket);

  socket.on("disconnect", () => {
    console.log(`Client disconnected: ${socket.id}`);
  });
});

const PORT = process.env.PORT || 3001;

async function start() {
  await initDb();

  // Recover game state from a previous crash if available
  const recovered = recoverGameState();
  if (recovered) {
    console.log(`Recovering ${Object.keys(recovered.rooms).length} rooms from crash`);
    for (const [code, room] of Object.entries(recovered.rooms)) {
      rooms.set(code, room as any);
    }
    for (const [code, state] of Object.entries(recovered.gameStates)) {
      gameStates.set(code, state as any);
    }
  }

  httpServer.listen(PORT, () => {
    console.log(`Pathfinder game server running on port ${PORT}`);
  });
}

start().catch((err) => {
  console.error("Failed to start server:", err);
  process.exit(1);
});

// Flush pending DB writes and game state on shutdown
process.on("SIGINT", () => { flushDb(); flushGameState(rooms, gameStates); process.exit(0); });
process.on("SIGTERM", () => { flushDb(); flushGameState(rooms, gameStates); process.exit(0); });

export { io };
