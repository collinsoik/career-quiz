import initSqlJs, { Database } from "sql.js";
import fs from "fs";
import { writeFile, rename } from "fs/promises";
import path from "path";
import type { SubmittedResult, SurveyAnswers } from "@pathfinder/shared";

const DB_PATH =
  process.env.DB_PATH || path.join(__dirname, "..", "data", "pathfinder.db");

let db: Database;

export async function initDb(): Promise<void> {
  const dir = path.dirname(DB_PATH);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const SQL = await initSqlJs();

  // Delete old DB to start fresh with new schema
  if (fs.existsSync(DB_PATH)) {
    const buffer = fs.readFileSync(DB_PATH);
    const oldDb = new SQL.Database(buffer);
    // Check if old schema (has health_biomedical_score column)
    try {
      oldDb.exec("SELECT health_biomedical_score FROM player_results LIMIT 0");
      // Old schema detected — start fresh
      oldDb.close();
      fs.unlinkSync(DB_PATH);
      db = new SQL.Database();
    } catch {
      // New schema or no table yet — reuse
      db = oldDb;
    }
  } else {
    db = new SQL.Database();
  }

  // Sessions table — one per lobby
  db.run(`
    CREATE TABLE IF NOT EXISTS sessions (
      id TEXT PRIMARY KEY,
      room_code TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      ended_at DATETIME
    );
  `);

  // Player results — one per submitted student per session (8 dimensions)
  db.run(`
    CREATE TABLE IF NOT EXISTS player_results (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      session_id TEXT REFERENCES sessions(id),
      display_name TEXT,
      health_helping_score REAL DEFAULT 0,
      science_discovery_score REAL DEFAULT 0,
      tech_computing_score REAL DEFAULT 0,
      engineering_design_score REAL DEFAULT 0,
      building_making_score REAL DEFAULT 0,
      creative_expression_score REAL DEFAULT 0,
      business_leadership_score REAL DEFAULT 0,
      justice_community_score REAL DEFAULT 0,
      top_careers TEXT,
      submitted_at DATETIME
    );
  `);

  // Post-activity survey responses
  db.run(`
    CREATE TABLE IF NOT EXISTS survey_responses (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      session_id TEXT REFERENCES sessions(id),
      display_name TEXT,
      enjoyment INTEGER,
      learned TEXT,
      would_explore TEXT,
      overall INTEGER,
      submitted_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
  `);

  persistDb();
}

let persistTimer: ReturnType<typeof setTimeout> | null = null;

function persistDb(): void {
  // Debounce writes — batch rapid operations into a single disk write
  if (persistTimer) return;
  persistTimer = setTimeout(async () => {
    persistTimer = null;
    try {
      const data = db.export();
      const buffer = Buffer.from(data);
      const tmpPath = DB_PATH + ".tmp";
      await writeFile(tmpPath, buffer);
      await rename(tmpPath, DB_PATH); // atomic rename
    } catch (err) {
      console.error("Failed to persist database:", err);
    }
  }, 500);
}

/** Flush any pending writes immediately (call on shutdown). */
export function flushDb(): void {
  if (persistTimer) {
    clearTimeout(persistTimer);
    persistTimer = null;
    try {
      const data = db.export();
      const buffer = Buffer.from(data);
      fs.writeFileSync(DB_PATH, buffer);
    } catch (err) {
      console.error("Failed to persist database:", err);
    }
  }
}

export function saveSession(roomCode: string): string {
  const sessionId = `session-${roomCode}`;
  db.run(
    "INSERT OR IGNORE INTO sessions (id, room_code, created_at) VALUES (?, ?, ?)",
    [sessionId, roomCode, new Date().toISOString()]
  );
  persistDb();
  return sessionId;
}

export function saveLobbySubmission(
  sessionId: string,
  submission: SubmittedResult
): void {
  db.run(
    `INSERT INTO player_results
      (session_id, display_name, health_helping_score, science_discovery_score, tech_computing_score, engineering_design_score, building_making_score, creative_expression_score, business_leadership_score, justice_community_score, top_careers, submitted_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
    [
      sessionId,
      submission.displayName,
      submission.profile.healthHelping || 0,
      submission.profile.scienceDiscovery || 0,
      submission.profile.techComputing || 0,
      submission.profile.engineeringDesign || 0,
      submission.profile.buildingMaking || 0,
      submission.profile.creativeExpression || 0,
      submission.profile.businessLeadership || 0,
      submission.profile.justiceCommunity || 0,
      JSON.stringify(submission.careers.map((c) => c.title)),
      new Date().toISOString(),
    ]
  );
  persistDb();
}

export function saveSurveyResponse(
  sessionId: string,
  displayName: string,
  answers: SurveyAnswers
): void {
  db.run(
    `INSERT INTO survey_responses
      (session_id, display_name, enjoyment, learned, would_explore, overall, submitted_at)
      VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [
      sessionId,
      displayName,
      answers.enjoyment,
      answers.learned,
      answers.wouldExplore,
      answers.overall,
      new Date().toISOString(),
    ]
  );
  persistDb();
}

export function getDb(): Database {
  return db;
}
