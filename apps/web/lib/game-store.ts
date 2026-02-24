import { create } from "zustand";
import type {
  Room,
  GamePhase,
  ClientScenario,
  PlayerResults,
  NormalizedProfile,
  FeedItem,
  ClassStats,
} from "@pathfinder/shared";

interface GameStore {
  // State
  room: Room | null;
  playerId: string | null;
  phase: GamePhase;
  scenarios: ClientScenario[];
  currentScenario: number;
  currentDecision: number;
  completed: boolean;
  results: PlayerResults | null;
  feedItems: FeedItem[];
  classStats: ClassStats | null;
  error: string | null;

  // Actions
  setRoom: (room: Room) => void;
  setPlayerId: (playerId: string) => void;
  hydrateFromSession: () => void;
  setPhase: (phase: GamePhase) => void;
  setScenarios: (scenarios: ClientScenario[]) => void;
  advancePosition: (scenario: number, decision: number, completed: boolean) => void;
  setResults: (results: PlayerResults) => void;
  addFeedItem: (item: FeedItem) => void;
  setClassStats: (stats: ClassStats) => void;
  setError: (error: string | null) => void;
  reset: () => void;
}

const initialState = {
  room: null as Room | null,
  playerId: null as string | null,
  phase: "lobby" as GamePhase,
  scenarios: [] as ClientScenario[],
  currentScenario: 0,
  currentDecision: 0,
  completed: false,
  results: null as PlayerResults | null,
  feedItems: [] as FeedItem[],
  classStats: null as ClassStats | null,
  error: null as string | null,
};

export const useGameStore = create<GameStore>((set) => ({
  ...initialState,

  setRoom: (room) => set({ room, phase: room.phase }),
  setPlayerId: (playerId) => {
    if (playerId && typeof window !== "undefined") {
      sessionStorage.setItem("pathfinder-playerId", playerId);
    }
    set({ playerId });
  },
  hydrateFromSession: () => {
    if (typeof window !== "undefined") {
      const savedPlayerId = sessionStorage.getItem("pathfinder-playerId");
      if (savedPlayerId) {
        set({ playerId: savedPlayerId });
      }
    }
  },
  setPhase: (phase) => set({ phase }),
  setScenarios: (scenarios) => set({ scenarios }),
  advancePosition: (currentScenario, currentDecision, completed) =>
    set({ currentScenario, currentDecision, completed }),
  setResults: (results) => set({ results }),
  addFeedItem: (item) =>
    set((state) => ({
      feedItems: [...state.feedItems.slice(-49), item],
    })),
  setClassStats: (classStats) => set({ classStats }),
  setError: (error) => set({ error }),
  reset: () => set(initialState),
}));
