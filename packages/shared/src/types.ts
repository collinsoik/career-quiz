// ==========================================
// Core Types for Pathfinder
// Interactive Career Exploration Game
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
  builder: number;    // Realistic — hands-on, mechanical
  investigator: number; // Investigative — analytical, curious
  creator: number;    // Artistic — creative, expressive
  connector: number;  // Social — helping, teaching
  leader: number;     // Enterprising — persuading, managing
  organizer: number;  // Conventional — systematic, detailed
}

export type InterestCategory = keyof InterestScores;

export const INTEREST_CATEGORIES: { key: InterestCategory; label: string; description: string; color: string }[] = [
  { key: "builder", label: "Builder", description: "Hands-on, making & fixing things", color: "#F97316" },
  { key: "investigator", label: "Investigator", description: "Analyzing, researching & discovering", color: "#3B82F6" },
  { key: "creator", label: "Creator", description: "Designing, imagining & expressing", color: "#A855F7" },
  { key: "connector", label: "Connector", description: "Helping, teaching & supporting others", color: "#EC4899" },
  { key: "leader", label: "Leader", description: "Leading, persuading & managing", color: "#EAB308" },
  { key: "organizer", label: "Organizer", description: "Planning, organizing & tracking details", color: "#22C55E" },
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
  builder: number;      // 0-100
  investigator: number;
  creator: number;
  connector: number;
  leader: number;
  organizer: number;
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
