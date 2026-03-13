// ==========================================
// Socket.IO Event Constants
// ==========================================

// Client -> Server Events
export const CLIENT_EVENTS = {
  LOBBY_CREATE: "lobby:create",
  RESULTS_SUBMIT: "results:submit",
} as const;

// Server -> Client Events
export const SERVER_EVENTS = {
  LOBBY_CREATED: "lobby:created",
  LOBBY_SUBMISSION: "lobby:submission",
  LOBBY_STATE: "lobby:state",
  LOBBY_ERROR: "lobby:error",
} as const;

// ── Event Payload Types ───────────────────

export interface ResultsSubmitPayload {
  lobbyCode: string;
  displayName: string;
  profile: import("./types").NormalizedProfile;
  topCategories: { key: import("./types").InterestCategory; label: string; score: number }[];
  careers: import("./types").Career[];
  surveyAnswers?: import("./types").SurveyAnswers | null;
}

export interface LobbyCreatedPayload {
  code: string;
}

export interface LobbySubmissionPayload {
  submission: import("./types").SubmittedResult;
}

export interface LobbyStatePayload {
  lobby: import("./types").ResultsLobby;
}

export interface LobbyErrorPayload {
  message: string;
}
