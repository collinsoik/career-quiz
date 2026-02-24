import {
  Player,
  InterestScores,
  NormalizedProfile,
  PlayerResults,
  Career,
  INTEREST_CATEGORIES,
  CAREERS,
} from "@pathfinder/shared";

/**
 * Normalize raw interest scores to 0-100 scale relative to the player's highest category.
 */
function normalizeProfile(scores: InterestScores): NormalizedProfile {
  const maxScore = Math.max(
    scores.healthBiomedical,
    scores.lifeEcology,
    scores.computing,
    scores.chemistryMaterials,
    scores.designBuild,
    scores.earthEnergy,
    1 // avoid division by zero
  );

  return {
    healthBiomedical: Math.round((scores.healthBiomedical / maxScore) * 100),
    lifeEcology: Math.round((scores.lifeEcology / maxScore) * 100),
    computing: Math.round((scores.computing / maxScore) * 100),
    chemistryMaterials: Math.round((scores.chemistryMaterials / maxScore) * 100),
    designBuild: Math.round((scores.designBuild / maxScore) * 100),
    earthEnergy: Math.round((scores.earthEnergy / maxScore) * 100),
  };
}

/**
 * Match careers based on player's interest profile.
 * Score each career by combining its primary and secondary category scores.
 * Return top 5 with category diversity.
 */
function matchCareers(profile: NormalizedProfile): Career[] {
  // Score each career
  const scored = CAREERS.map((career) => {
    const primaryScore = profile[career.primaryCategory] * 2;
    const secondaryScore = profile[career.secondaryCategory];
    return { career, score: primaryScore + secondaryScore };
  });

  // Sort by score descending
  scored.sort((a, b) => b.score - a.score);

  // Pick top 5 with diversity: don't let one primary category dominate
  const result: Career[] = [];
  const categoryCounts: Record<string, number> = {};

  for (const { career } of scored) {
    if (result.length >= 5) break;
    const count = categoryCounts[career.primaryCategory] || 0;
    if (count < 2) {
      result.push(career);
      categoryCounts[career.primaryCategory] = count + 1;
    }
  }

  // If we don't have 5 yet (unlikely), fill from remaining
  if (result.length < 5) {
    for (const { career } of scored) {
      if (result.length >= 5) break;
      if (!result.includes(career)) {
        result.push(career);
      }
    }
  }

  return result;
}

/**
 * Calculate complete results for a player.
 */
export function calculateResults(player: Player): PlayerResults {
  const profile = normalizeProfile(player.scores);

  // Get sorted categories
  const sortedCategories = INTEREST_CATEGORIES.map((cat) => ({
    key: cat.key,
    label: cat.label,
    score: profile[cat.key],
  })).sort((a, b) => b.score - a.score);

  const careers = matchCareers(profile);

  return {
    playerId: player.id,
    displayName: player.displayName,
    profile,
    topCategories: sortedCategories,
    careers,
    sharedWithTeacher: false,
  };
}
