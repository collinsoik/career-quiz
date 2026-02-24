"use client";

import React from "react";
import { INTEREST_CATEGORIES } from "@pathfinder/shared";
import type { PlayerResults } from "@pathfinder/shared";

interface CompletedStudent {
  playerId: string;
  displayName: string;
  topCategory: string;
  results?: PlayerResults;
}

interface StudentResultsProps {
  students: CompletedStudent[];
}

function StudentResults({ students }: StudentResultsProps) {
  return (
    <div className="card-elevated">
      <h2 className="text-sm font-semibold text-text-secondary mb-4 uppercase tracking-wider">
        Completed Explorers ({students.length})
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {students.map((student) => {
          const catInfo = INTEREST_CATEGORIES.find((c) => c.label === student.topCategory);

          return (
            <div
              key={student.playerId}
              className="bg-surface-tertiary rounded-lg p-4 border border-border-primary animate-fade-in"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-text-primary">
                  {student.displayName}
                </span>
                <span className="text-lg">{"\u{1F389}"}</span>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className="text-xs font-medium px-2 py-0.5 rounded-full"
                  style={{
                    backgroundColor: (catInfo?.color || "#7C5CFC") + "20",
                    color: catInfo?.color || "#7C5CFC",
                  }}
                >
                  {student.topCategory}
                </span>
                {student.results && (
                  <span className="text-xs text-text-tertiary">
                    {student.results.careers[0]?.title}
                  </span>
                )}
              </div>
              {student.results && (
                <div className="mt-3 flex gap-1">
                  {student.results.topCategories.slice(0, 6).map((cat) => {
                    const info = INTEREST_CATEGORIES.find((c) => c.key === cat.key);
                    return (
                      <div
                        key={cat.key}
                        className="flex-1 h-1.5 rounded-full"
                        style={{
                          backgroundColor: info?.color || "#7C5CFC",
                          opacity: cat.score / 100,
                        }}
                        title={`${cat.label}: ${cat.score}%`}
                      />
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default React.memo(StudentResults);
