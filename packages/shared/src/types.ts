// ==========================================
// Core Types for Pathfinder
// Interactive STEM Major Exploration Game
// ==========================================

export interface Player {
  id: string;
  displayName: string;
  isHost: boolean;
  connected: boolean;
  // Game progress
  currentScenario: number; // index into scenarios array
  currentDecision: number; // index within current scenario
  completed: boolean;
  // Interest scores (accumulated during play)
  scores: InterestScores;
}

export interface InterestScores {
  healthBiomedical: number;   // Health-tech, genetics, molecular biology
  lifeEcology: number;        // Living systems, fieldwork, wildlife
  computing: number;           // Code, data, digital systems
  chemistryMaterials: number;  // Matter, molecules, materials
  designBuild: number;         // Designing and building physical things
  earthEnergy: number;         // Planet-scale systems, energy, climate
}

export type InterestCategory = keyof InterestScores;

export const INTEREST_CATEGORIES: { key: InterestCategory; label: string; description: string; color: string }[] = [
  { key: "healthBiomedical", label: "Health & Biomedical", description: "Health-tech, genetics & molecular biology", color: "#EC4899" },
  { key: "lifeEcology", label: "Life & Ecology", description: "Living systems, fieldwork & wildlife", color: "#22C55E" },
  { key: "computing", label: "Computing & Software", description: "Code, data & digital systems", color: "#3B82F6" },
  { key: "chemistryMaterials", label: "Chemistry & Materials", description: "Matter, molecules & materials", color: "#F97316" },
  { key: "designBuild", label: "Design & Build", description: "Designing & building physical things", color: "#A855F7" },
  { key: "earthEnergy", label: "Earth & Energy", description: "Planet-scale systems, energy & climate", color: "#EAB308" },
];

// ── Room & Game State ─────────────────────

export interface Room {
  code: string;
  hostId: string;
  players: Record<string, Player>;
  phase: GamePhase;
  createdAt: number;
}

export type GamePhase = "lobby" | "playing" | "results";

// ── Scenario & Decision Types ─────────────

export interface Choice {
  id: string;
  text: string;
  weights: Partial<InterestScores>;
}

export interface Decision {
  id: string;
  prompt: string;
  context?: string;
  choices: Choice[];
}

export interface Scenario {
  id: string;
  title: string;
  icon: string; // emoji
  description: string;
  narrative: string; // intro text shown before decisions
  decisions: Decision[];
}

// Client-safe version (weights stripped)
export interface ClientChoice {
  id: string;
  text: string;
}

export interface ClientDecision {
  id: string;
  prompt: string;
  context?: string;
  choices: ClientChoice[];
}

export interface ClientScenario {
  id: string;
  title: string;
  icon: string;
  description: string;
  narrative: string;
  decisions: ClientDecision[];
}

// ── Career Matching ───────────────────────

export interface Career {
  id: string;
  title: string;
  description: string;
  icon: string;
  primaryCategory: InterestCategory;
  secondaryCategory: InterestCategory;
}

// ── Results ───────────────────────────────

export interface NormalizedProfile {
  healthBiomedical: number;   // 0-100
  lifeEcology: number;
  computing: number;
  chemistryMaterials: number;
  designBuild: number;
  earthEnergy: number;
}

export interface PlayerResults {
  playerId: string;
  displayName: string;
  profile: NormalizedProfile;
  topCategories: { key: InterestCategory; label: string; score: number }[];
  careers: Career[];
  sharedWithTeacher: boolean;
}

// ── Feed Items (teacher dashboard) ────────

export interface FeedItem {
  id: string;
  type: "join" | "choice" | "milestone" | "completion" | "stat";
  text: string;
  timestamp: number;
}

export interface ClassStats {
  totalPlayers: number;
  completedPlayers: number;
  averageProgress: number; // 0-100
  categoryDistribution: Record<InterestCategory, number>; // count of players with this as top
  popularChoices: { decisionId: string; choiceId: string; choiceText: string; count: number }[];
}
