// ==========================================
// Socket.IO Event Constants
// ==========================================

// Client -> Server Events
export const CLIENT_EVENTS = {
  ROOM_CREATE: "room:create",
  ROOM_JOIN: "room:join",
  ROOM_REJOIN: "room:rejoin",
  GAME_START: "game:start",
  CHOICE_SUBMIT: "choice:submit",
  RESULTS_SHARE: "results:share",
  SURVEY_SUBMIT: "survey:submit",
} as const;

// Server -> Client Events
export const SERVER_EVENTS = {
  ROOM_STATE: "room:state",
  ROOM_PLAYER_JOINED: "room:player-joined",
  ROOM_PLAYER_LEFT: "room:player-left",
  ROOM_ERROR: "room:error",
  GAME_STARTED: "game:started",
  PLAYER_STATE: "player:state",
  PLAYER_RESULTS: "player:results",
  FEED_UPDATE: "feed:update",
  CLASS_STATS: "class:stats",
  PLAYER_COMPLETED: "player:completed",
  GAME_ALL_COMPLETED: "game:all-completed",
} as const;

// ── Event Payload Types ───────────────────

export interface RoomJoinPayload {
  roomCode: string;
  playerName: string;
}

export interface ChoiceSubmitPayload {
  decisionId: string;
  choiceId: string;
}

export interface ResultsSharePayload {
  share: boolean;
}

export interface SurveySubmitPayload {
  enjoyment: number | null;
  learned: string | null;
  wouldExplore: string | null;
  overall: number | null;
}

// Server payloads
export interface RoomPlayerJoinedPayload {
  player: {
    id: string;
    displayName: string;
  };
}

export interface RoomErrorPayload {
  message: string;
  code?: string;
}

export interface PlayerStatePayload {
  currentScenario: number;
  currentDecision: number;
  completed: boolean;
}
