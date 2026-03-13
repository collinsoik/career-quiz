// ==========================================
// Core Types for Pathfinder
// Interactive Career Exploration Game
// ==========================================

export interface InterestScores {
  healthHelping: number;      // Healthcare, education, helping others
  scienceDiscovery: number;   // Research, experiments, understanding the world
  techComputing: number;      // Code, data, digital innovation
  engineeringDesign: number;  // Design, build & improve systems
  buildingMaking: number;     // Hands-on work, trades & manufacturing
  creativeExpression: number; // Art, music, writing & media
  businessLeadership: number; // Management, finance & entrepreneurship
  justiceCommunity: number;   // Law, public service & community
}

export type InterestCategory = keyof InterestScores;

export const INTEREST_CATEGORIES: { key: InterestCategory; label: string; description: string; color: string }[] = [
  { key: "healthHelping", label: "Health & Helping", description: "Healthcare, education & helping others", color: "#EC4899" },
  { key: "scienceDiscovery", label: "Science & Discovery", description: "Research, experiments & understanding the world", color: "#8B5CF6" },
  { key: "techComputing", label: "Tech & Computing", description: "Code, data & digital innovation", color: "#3B82F6" },
  { key: "engineeringDesign", label: "Engineering & Design", description: "Design, build & improve systems", color: "#F59E0B" },
  { key: "buildingMaking", label: "Building & Making", description: "Hands-on work, trades & manufacturing", color: "#F97316" },
  { key: "creativeExpression", label: "Creative & Expressive", description: "Art, music, writing & media", color: "#E91E63" },
  { key: "businessLeadership", label: "Business & Leadership", description: "Management, finance & entrepreneurship", color: "#22C55E" },
  { key: "justiceCommunity", label: "Justice & Community", description: "Law, public service & community work", color: "#64748B" },
];

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

// ── Career Tree ─────────────────────────

export interface CareerEntry {
  id: string;
  title: string;
  hook: string;
  emoji: string;
  salaryRange: { entry: number; experienced: number };
  growth: "high" | "moderate" | "stable" | "declining";
  education: string;
}

export interface Pathway {
  id: string;
  name: string;
  careers: CareerEntry[];
}

export interface CareerCluster {
  id: string;
  name: string;
  emoji: string;
  color: string;
  description: string;
  pathways: Pathway[];
}

// ── Career Matching (for results) ───────

export interface Career {
  id: string;
  title: string;
  description: string;
  icon: string;
  clusterId: string;
  clusterName: string;
  clusterColor: string;
}

// ── Results ───────────────────────────────

export interface NormalizedProfile {
  healthHelping: number;      // 0-100
  scienceDiscovery: number;
  techComputing: number;
  engineeringDesign: number;
  buildingMaking: number;
  creativeExpression: number;
  businessLeadership: number;
  justiceCommunity: number;
}

export interface PlayerResults {
  displayName: string;
  profile: NormalizedProfile;
  topCategories: { key: InterestCategory; label: string; score: number }[];
  careers: Career[];
}

// ── Results Lobby ─────────────────────────

export interface SubmittedResult {
  displayName: string;
  profile: NormalizedProfile;
  topCategories: { key: InterestCategory; label: string; score: number }[];
  careers: Career[];
  surveyAnswers?: SurveyAnswers | null;
  submittedAt: number;
}

export interface SurveyAnswers {
  enjoyment: number | null;
  learned: string | null;
  wouldExplore: string | null;
  overall: number | null;
}

export interface ResultsLobby {
  code: string;
  hostId: string;
  submissions: SubmittedResult[];
  createdAt: number;
}

// ── Cluster-to-Dimension Mapping ─────────

export const CLUSTER_DIMENSION_MAP: Record<string, InterestCategory[]> = {
  tech: ["techComputing"],
  health: ["healthHelping"],
  engineering: ["engineeringDesign"],
  science: ["scienceDiscovery"],
  creative: ["creativeExpression"],
  business: ["businessLeadership"],
  trades: ["buildingMaking"],
  law: ["justiceCommunity"],
  education: ["healthHelping"],
  "health-human": ["healthHelping"],
  agriculture: ["justiceCommunity"],
  hospitality: ["businessLeadership"],
  communications: ["creativeExpression"],
  manufacturing: ["buildingMaking"],
};
