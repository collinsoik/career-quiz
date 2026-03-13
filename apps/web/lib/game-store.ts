import { create } from "zustand";
import type {
  Scenario,
  InterestScores,
  PlayerResults,
} from "@pathfinder/shared";
import { SCENARIOS, calculateResults } from "@pathfinder/shared";

interface GameStore {
  // State
  playerName: string;
  scenarios: Scenario[];
  currentScenario: number;
  currentDecision: number;
  completed: boolean;
  scores: InterestScores;
  results: PlayerResults | null;
  submitted: boolean;
  error: string | null;

  // Actions
  setPlayerName: (name: string) => void;
  advanceAndScore: (choiceWeights: Partial<InterestScores>) => void;
  calculateResults: () => void;
  setSubmitted: (submitted: boolean) => void;
  setError: (error: string | null) => void;
  reset: () => void;
}

const emptyScores: InterestScores = {
  healthHelping: 0,
  scienceDiscovery: 0,
  techComputing: 0,
  engineeringDesign: 0,
  buildingMaking: 0,
  creativeExpression: 0,
  businessLeadership: 0,
  justiceCommunity: 0,
};

const initialState = {
  playerName: "",
  scenarios: SCENARIOS,
  currentScenario: 0,
  currentDecision: 0,
  completed: false,
  scores: { ...emptyScores },
  results: null as PlayerResults | null,
  submitted: false,
  error: null as string | null,
};

export const useGameStore = create<GameStore>((set, get) => ({
  ...initialState,

  setPlayerName: (playerName) => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("pathfinder-name", playerName);
    }
    set({ playerName });
  },

  advanceAndScore: (choiceWeights) => {
    const state = get();
    // Apply weights to scores
    const newScores = { ...state.scores };
    for (const [key, value] of Object.entries(choiceWeights)) {
      if (value) {
        newScores[key as keyof InterestScores] += value;
      }
    }

    // Advance position
    const scenario = state.scenarios[state.currentScenario];
    const isLastDecision = state.currentDecision >= scenario.decisions.length - 1;
    const isLastScenario = state.currentScenario >= state.scenarios.length - 1;

    if (isLastDecision && isLastScenario) {
      // Quiz complete
      set({
        scores: newScores,
        currentDecision: state.currentDecision + 1,
        completed: true,
      });
    } else if (isLastDecision) {
      // Move to next scenario
      set({
        scores: newScores,
        currentScenario: state.currentScenario + 1,
        currentDecision: 0,
      });
    } else {
      // Move to next decision in current scenario
      set({
        scores: newScores,
        currentDecision: state.currentDecision + 1,
      });
    }
  },

  calculateResults: () => {
    const state = get();
    const results = calculateResults(state.scores, state.playerName);
    set({ results });
  },

  setSubmitted: (submitted) => set({ submitted }),
  setError: (error) => set({ error }),
  reset: () => set({ ...initialState, scores: { ...emptyScores } }),
}));
