import initSqlJs, { Database } from "sql.js";
import fs from "fs";
import path from "path";
import type { InterestScores } from "@pathfinder/shared";

const DB_PATH =
  process.env.DB_PATH || path.join(__dirname, "..", "data", "pathfinder.db");

let db: Database;

export async function initDb(): Promise<void> {
  const dir = path.dirname(DB_PATH);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const SQL = await initSqlJs();

  if (fs.existsSync(DB_PATH)) {
    const buffer = fs.readFileSync(DB_PATH);
    db = new SQL.Database(buffer);
  } else {
    db = new SQL.Database();
  }

  // Sessions table — one per room
  db.run(`
    CREATE TABLE IF NOT EXISTS sessions (
      id TEXT PRIMARY KEY,
      room_code TEXT,
      player_count INTEGER DEFAULT 0,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      ended_at DATETIME
    );
  `);

  // Player results — one per player per session
  db.run(`
    CREATE TABLE IF NOT EXISTS player_results (
      id TEXT PRIMARY KEY,
      session_id TEXT REFERENCES sessions(id),
      display_name TEXT,
      builder_score REAL DEFAULT 0,
      investigator_score REAL DEFAULT 0,
      creator_score REAL DEFAULT 0,
      connector_score REAL DEFAULT 0,
      leader_score REAL DEFAULT 0,
      organizer_score REAL DEFAULT 0,
      top_careers TEXT,
      shared_with_teacher INTEGER DEFAULT 0,
      completed_at DATETIME
    );
  `);

  // Individual choices — for class stats
  db.run(`
    CREATE TABLE IF NOT EXISTS choices (
      id TEXT PRIMARY KEY,
      session_id TEXT REFERENCES sessions(id),
      player_id TEXT,
      decision_id TEXT,
      choice_id TEXT,
      submitted_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);

  persistDb();
}

function persistDb(): void {
  try {
    const data = db.export();
    const buffer = Buffer.from(data);
    fs.writeFileSync(DB_PATH, buffer);
  } catch (err) {
    console.error("Failed to persist database:", err);
  }
}

export function saveSession(roomCode: string, playerCount: number): string {
  const sessionId = `session-${roomCode}-${Date.now()}`;
  db.run(
    "INSERT INTO sessions (id, room_code, player_count, created_at) VALUES (?, ?, ?, ?)",
    [sessionId, roomCode, playerCount, new Date().toISOString()]
  );
  persistDb();
  return sessionId;
}

export function savePlayerResult(
  sessionId: string,
  playerId: string,
  displayName: string,
  scores: InterestScores,
  topCareers: string[],
  sharedWithTeacher: boolean
): void {
  db.run(
    `INSERT OR REPLACE INTO player_results
      (id, session_id, display_name, builder_score, investigator_score, creator_score, connector_score, leader_score, organizer_score, top_careers, shared_with_teacher, completed_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      `${sessionId}-${playerId}`,
      sessionId,
      displayName,
      scores.builder || 0,
      scores.investigator || 0,
      scores.creator || 0,
      scores.connector || 0,
      scores.leader || 0,
      scores.organizer || 0,
      JSON.stringify(topCareers),
      sharedWithTeacher ? 1 : 0,
      new Date().toISOString(),
    ]
  );
  persistDb();
}

export function saveChoice(
  sessionId: string,
  playerId: string,
  decisionId: string,
  choiceId: string
): void {
  const id = `${sessionId}-${playerId}-${decisionId}`;
  db.run(
    "INSERT OR REPLACE INTO choices (id, session_id, player_id, decision_id, choice_id, submitted_at) VALUES (?, ?, ?, ?, ?, ?)",
    [id, sessionId, playerId, decisionId, choiceId, new Date().toISOString()]
  );
  persistDb();
}

export function getDb(): Database {
  return db;
}
