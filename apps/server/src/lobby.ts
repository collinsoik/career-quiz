import { Server, Socket } from "socket.io";
import type { ResultsLobby, SubmittedResult, ResultsSubmitPayload } from "@pathfinder/shared";
import { CLIENT_EVENTS, SERVER_EVENTS } from "@pathfinder/shared";
import { saveLobbySubmission, saveSession, saveSurveyResponse } from "./db";

// In-memory lobby store
export const lobbies = new Map<string, ResultsLobby>();

function generateLobbyCode(): string {
  let code: string;
  do {
    code = String(Math.floor(1000 + Math.random() * 9000));
  } while (lobbies.has(code));
  return code;
}

export function handleLobbyEvents(io: Server, socket: Socket): void {
  // Teacher creates a results lobby
  socket.on(
    CLIENT_EVENTS.LOBBY_CREATE,
    (_data: unknown, callback: (response: { success: boolean; code?: string; error?: string }) => void) => {
      try {
        const code = generateLobbyCode();
        const lobby: ResultsLobby = {
          code,
          hostId: socket.id!,
          submissions: [],
          createdAt: Date.now(),
        };

        lobbies.set(code, lobby);
        socket.join(`lobby:${code}`);

        // Create a session in the DB for this lobby
        saveSession(code);

        console.log(`Lobby created: ${code} by ${socket.id}`);

        // Send state to the host
        socket.emit(SERVER_EVENTS.LOBBY_STATE, { lobby });

        callback({ success: true, code });
      } catch (err) {
        console.error("Failed to create lobby:", err);
        callback({ success: false, error: "Failed to create lobby" });
      }
    }
  );

  // Student submits their results
  socket.on(
    CLIENT_EVENTS.RESULTS_SUBMIT,
    (data: ResultsSubmitPayload, callback: (response: { success: boolean; error?: string }) => void) => {
      try {
        const { lobbyCode, displayName, profile, topCategories, careers, surveyAnswers } = data;

        // Validate lobby exists
        const lobby = lobbies.get(lobbyCode);
        if (!lobby) {
          callback({ success: false, error: "Lobby not found. Check the code and try again." });
          return;
        }

        // Validate input
        if (!displayName || typeof displayName !== "string" || displayName.trim().length === 0) {
          callback({ success: false, error: "Invalid name" });
          return;
        }

        if (!profile || !topCategories || !careers) {
          callback({ success: false, error: "Invalid results data" });
          return;
        }

        const submission: SubmittedResult = {
          displayName: displayName.trim().slice(0, 30),
          profile,
          topCategories,
          careers,
          surveyAnswers: surveyAnswers || null,
          submittedAt: Date.now(),
        };

        lobby.submissions.push(submission);

        // Persist to DB
        const sessionId = `session-${lobbyCode}`;
        saveLobbySubmission(sessionId, submission);

        if (surveyAnswers) {
          saveSurveyResponse(sessionId, submission.displayName, surveyAnswers);
        }

        // Broadcast to the teacher's dashboard
        io.to(`lobby:${lobbyCode}`).emit(SERVER_EVENTS.LOBBY_SUBMISSION, { submission });

        console.log(`Result submitted to lobby ${lobbyCode} by ${displayName}`);

        callback({ success: true });
      } catch (err) {
        console.error("Failed to submit results:", err);
        callback({ success: false, error: "Server error" });
      }
    }
  );
}
