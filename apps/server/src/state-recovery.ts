import { writeFile, readFile, unlink, rename } from "fs/promises";
import { readFileSync, existsSync, writeFileSync } from "fs";
import path from "path";

const DB_PATH =
  process.env.DB_PATH || path.join(__dirname, "..", "data", "pathfinder.db");
const STATE_PATH = path.join(path.dirname(DB_PATH), "game-state.json");

let stateTimer: ReturnType<typeof setTimeout> | null = null;

export function persistGameState(
  rooms: Map<string, any>,
  gameStates: Map<string, any>
): void {
  if (stateTimer) return; // debounce
  stateTimer = setTimeout(async () => {
    stateTimer = null;
    try {
      const state = {
        rooms: Object.fromEntries(rooms),
        gameStates: Object.fromEntries(gameStates),
        timestamp: Date.now(),
      };
      const tmpPath = STATE_PATH + ".tmp";
      await writeFile(tmpPath, JSON.stringify(state));
      await rename(tmpPath, STATE_PATH); // atomic rename
    } catch (err) {
      console.error("Failed to persist game state:", err);
    }
  }, 2000);
}

export function recoverGameState(): {
  rooms: Record<string, any>;
  gameStates: Record<string, any>;
  timestamp: number;
} | null {
  try {
    if (!existsSync(STATE_PATH)) return null;
    const data = readFileSync(STATE_PATH, "utf-8");
    const state = JSON.parse(data);
    // Only recover if state is less than 1 hour old
    if (Date.now() - state.timestamp > 3600000) return null;
    return state;
  } catch {
    return null;
  }
}

export async function clearGameState(): Promise<void> {
  try {
    await unlink(STATE_PATH);
  } catch {}
}

export function flushGameState(
  rooms: Map<string, any>,
  gameStates: Map<string, any>
): void {
  if (stateTimer) {
    clearTimeout(stateTimer);
    stateTimer = null;
  }
  try {
    const state = {
      rooms: Object.fromEntries(rooms),
      gameStates: Object.fromEntries(gameStates),
      timestamp: Date.now(),
    };
    writeFileSync(STATE_PATH, JSON.stringify(state));
  } catch (err) {
    console.error("Failed to flush game state:", err);
  }
}
