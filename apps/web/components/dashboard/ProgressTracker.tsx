"use client";

import React from "react";
import type { ClassStats } from "@pathfinder/shared";

interface ProgressTrackerProps {
  stats: ClassStats | null;
}

function ProgressTracker({ stats }: ProgressTrackerProps) {
  if (!stats) {
    return (
      <div className="card-elevated">
        <h2 className="text-sm font-semibold text-text-secondary mb-4 uppercase tracking-wider">
          Class Progress
        </h2>
        <div className="flex items-center justify-center py-8">
          <p className="text-text-disabled text-sm">Waiting for students to start...</p>
        </div>
      </div>
    );
  }

  const percent = Math.round(stats.averageProgress);

  return (
    <div className="card-elevated">
      <h2 className="text-sm font-semibold text-text-secondary mb-4 uppercase tracking-wider">
        Class Progress
      </h2>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-surface-tertiary rounded-lg p-4 text-center">
          <p className="text-2xl font-bold text-accent-primary">{stats.totalPlayers}</p>
          <p className="text-xs text-text-tertiary mt-1">Explorers</p>
        </div>
        <div className="bg-surface-tertiary rounded-lg p-4 text-center">
          <p className="text-2xl font-bold text-accent-green">{stats.completedPlayers}</p>
          <p className="text-xs text-text-tertiary mt-1">Finished</p>
        </div>
        <div className="bg-surface-tertiary rounded-lg p-4 text-center">
          <p className="text-2xl font-bold text-accent-yellow">{percent}%</p>
          <p className="text-xs text-text-tertiary mt-1">Avg Progress</p>
        </div>
      </div>

      {/* Progress bar */}
      <div>
        <div className="flex justify-between text-xs text-text-tertiary mb-2">
          <span>Overall Progress</span>
          <span>{percent}%</span>
        </div>
        <div className="w-full h-3 bg-surface-tertiary rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-accent-primary to-accent-green rounded-full transition-all duration-500"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>
    </div>
  );
}

export default React.memo(ProgressTracker);
