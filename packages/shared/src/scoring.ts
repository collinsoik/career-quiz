import {
  InterestScores,
  NormalizedProfile,
  PlayerResults,
  Career,
  CareerCluster,
  INTEREST_CATEGORIES,
  CLUSTER_DIMENSION_MAP,
} from "./types";
import { CAREER_CLUSTERS } from "./categories";

/**
 * Normalize raw interest scores to 0-100 scale relative to the player's highest category.
 */
export function normalizeProfile(scores: InterestScores): NormalizedProfile {
  const maxScore = Math.max(
    scores.healthHelping,
    scores.scienceDiscovery,
    scores.techComputing,
    scores.engineeringDesign,
    scores.buildingMaking,
    scores.creativeExpression,
    scores.businessLeadership,
    scores.justiceCommunity,
    1 // avoid division by zero
  );

  return {
    healthHelping: Math.round((scores.healthHelping / maxScore) * 100),
    scienceDiscovery: Math.round((scores.scienceDiscovery / maxScore) * 100),
    techComputing: Math.round((scores.techComputing / maxScore) * 100),
    engineeringDesign: Math.round((scores.engineeringDesign / maxScore) * 100),
    buildingMaking: Math.round((scores.buildingMaking / maxScore) * 100),
    creativeExpression: Math.round((scores.creativeExpression / maxScore) * 100),
    businessLeadership: Math.round((scores.businessLeadership / maxScore) * 100),
    justiceCommunity: Math.round((scores.justiceCommunity / maxScore) * 100),
  };
}

/**
 * Score a cluster based on the player's profile by averaging its mapped dimension scores.
 */
function scoreCluster(cluster: CareerCluster, profile: NormalizedProfile): number {
  const dims = CLUSTER_DIMENSION_MAP[cluster.id];
  if (!dims || dims.length === 0) return 0;
  return dims.reduce((sum, dim) => sum + profile[dim], 0) / dims.length;
}

/**
 * Match top clusters based on player's interest profile.
 * Returns clusters sorted by relevance score.
 */
export function matchClusters(profile: NormalizedProfile): { cluster: CareerCluster; score: number }[] {
  return CAREER_CLUSTERS
    .map((cluster) => ({ cluster, score: scoreCluster(cluster, profile) }))
    .sort((a, b) => b.score - a.score);
}

/**
 * Match careers based on player's interest profile.
 * Scores clusters by their mapped dimensions, then picks top careers
 * from the highest-scoring clusters with diversity.
 */
export function matchCareers(profile: NormalizedProfile): Career[] {
  const rankedClusters = matchClusters(profile);

  // Flatten all careers with their cluster score
  const allCareers: { career: Career; score: number }[] = [];

  for (const { cluster, score } of rankedClusters) {
    for (const pathway of cluster.pathways) {
      for (const entry of pathway.careers) {
        allCareers.push({
          career: {
            id: entry.id,
            title: entry.title,
            description: entry.hook,
            icon: entry.emoji,
            clusterId: cluster.id,
            clusterName: cluster.name,
            clusterColor: cluster.color,
          },
          score,
        });
      }
    }
  }

  // Sort by score descending
  allCareers.sort((a, b) => b.score - a.score);

  // Pick top 5 with diversity: max 2 per cluster
  const result: Career[] = [];
  const clusterCounts: Record<string, number> = {};

  for (const { career } of allCareers) {
    if (result.length >= 5) break;
    const count = clusterCounts[career.clusterId] || 0;
    if (count < 2) {
      result.push(career);
      clusterCounts[career.clusterId] = count + 1;
    }
  }

  // Fill if needed
  if (result.length < 5) {
    for (const { career } of allCareers) {
      if (result.length >= 5) break;
      if (!result.some((r) => r.id === career.id)) {
        result.push(career);
      }
    }
  }

  return result;
}

/**
 * Calculate complete results for a player given their accumulated scores.
 */
export function calculateResults(scores: InterestScores, displayName: string): PlayerResults {
  const profile = normalizeProfile(scores);

  // Get sorted categories
  const sortedCategories = INTEREST_CATEGORIES.map((cat) => ({
    key: cat.key,
    label: cat.label,
    score: profile[cat.key],
  })).sort((a, b) => b.score - a.score);

  const careers = matchCareers(profile);

  return {
    displayName,
    profile,
    topCategories: sortedCategories,
    careers,
  };
}
