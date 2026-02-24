"use client";

import React from "react";
import { INTEREST_CATEGORIES } from "@pathfinder/shared";
import type { ClassStats, InterestCategory } from "@pathfinder/shared";

interface ChoiceDistributionProps {
  stats: ClassStats;
}

function ChoiceDistribution({ stats }: ChoiceDistributionProps) {
  const totalCompleted = stats.completedPlayers || 1;

  return (
    <div className="card-elevated">
      <h2 className="text-sm font-semibold text-text-secondary mb-4 uppercase tracking-wider">
        Interest Distribution
      </h2>
      <p className="text-xs text-text-tertiary mb-4">
        Top interest category per completed student
      </p>

      <div className="space-y-3">
        {INTEREST_CATEGORIES.map((cat) => {
          const count = stats.categoryDistribution[cat.key as InterestCategory] || 0;
          const percent = Math.round((count / totalCompleted) * 100);

          return (
            <div key={cat.key} className="flex items-center gap-3">
              <span className="text-sm font-medium text-text-primary w-28 flex-shrink-0">
                {cat.label}
              </span>
              <div className="flex-1 h-6 bg-surface-tertiary rounded-full overflow-hidden relative">
                <div
                  className="h-full rounded-full transition-all duration-700"
                  style={{
                    width: `${Math.max(percent, 2)}%`,
                    backgroundColor: cat.color,
                    opacity: 0.8,
                  }}
                />
                {count > 0 && (
                  <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white drop-shadow-sm">
                    {count}
                  </span>
                )}
              </div>
              <span className="text-xs text-text-tertiary w-10 text-right font-mono">
                {percent}%
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default React.memo(ChoiceDistribution);
