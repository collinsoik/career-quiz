"use client";

import { useState, useEffect, useCallback } from "react";
import type { Decision } from "@pathfinder/shared";

interface DecisionCardProps {
  decision: Decision;
  scenarioTitle: string;
  decisionNumber: number;
  totalDecisions: number;
  onChoiceSelect: (choiceId: string) => void;
  isSubmitting: boolean;
}

export default function DecisionCard({
  decision,
  scenarioTitle,
  decisionNumber,
  totalDecisions,
  onChoiceSelect,
  isSubmitting,
}: DecisionCardProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  function handleSelect(choiceId: string) {
    if (isSubmitting) return;
    setSelectedId(choiceId);
    onChoiceSelect(choiceId);
  }

  // Keyboard shortcuts: A/B/C/D to select, Enter to confirm
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (isSubmitting) return;

      const key = e.key.toLowerCase();
      // A=0, B=1, C=2, D=3
      const idx = key.charCodeAt(0) - 97; // 'a' = 97
      if (idx >= 0 && idx < decision.choices.length) {
        e.preventDefault();
        setSelectedId(decision.choices[idx].id);
      }

      if (e.key === "Enter" && selectedId) {
        e.preventDefault();
        onChoiceSelect(selectedId);
      }
    },
    [isSubmitting, decision.choices, selectedId, onChoiceSelect]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Reset selection when decision changes
  useEffect(() => {
    setSelectedId(null);
  }, [decision.id]);

  return (
    <div className="max-w-2xl w-full animate-slide-up">
      {/* Decision header */}
      <div className="text-center mb-2">
        <span className="text-xs text-text-tertiary font-medium uppercase tracking-wider">
          {scenarioTitle} &middot; Decision {decisionNumber}/{totalDecisions}
        </span>
      </div>

      {/* Context */}
      {decision.context && (
        <div className="bg-surface-tertiary border border-border-primary rounded-lg px-5 py-3 mb-6">
          <p className="text-sm text-text-secondary italic leading-relaxed">
            {decision.context}
          </p>
        </div>
      )}

      {/* Prompt */}
      <h2 className="text-xl md:text-2xl font-bold text-text-primary text-center mb-8 leading-snug">
        {decision.prompt}
      </h2>

      {/* Choices */}
      <div className="space-y-3">
        {decision.choices.map((choice, idx) => {
          const isSelected = selectedId === choice.id;
          const letter = String.fromCharCode(65 + idx); // A, B, C, D

          return (
            <button
              key={choice.id}
              onClick={() => handleSelect(choice.id)}
              disabled={isSubmitting}
              className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all duration-200 group ${
                isSelected
                  ? "border-accent-primary bg-accent-primary-light shadow-glow"
                  : "border-border-primary bg-surface-secondary hover:border-accent-primary/50 hover:bg-surface-tertiary"
              } ${isSubmitting && !isSelected ? "opacity-50" : ""}`}
            >
              <div className="flex items-start gap-4">
                <span
                  className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm ${
                    isSelected
                      ? "bg-accent-primary text-white"
                      : "bg-surface-tertiary text-text-tertiary group-hover:text-text-secondary"
                  }`}
                >
                  {letter}
                </span>
                <span
                  className={`text-base leading-relaxed ${
                    isSelected ? "text-text-primary font-medium" : "text-text-secondary"
                  }`}
                >
                  {choice.text}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Keyboard hint */}
      <p className="text-center text-xs text-text-tertiary mt-4">
        Press <kbd className="px-1.5 py-0.5 rounded bg-surface-tertiary border border-border-primary font-mono text-text-secondary">A</kbd>–<kbd className="px-1.5 py-0.5 rounded bg-surface-tertiary border border-border-primary font-mono text-text-secondary">{String.fromCharCode(64 + decision.choices.length)}</kbd> then <kbd className="px-1.5 py-0.5 rounded bg-surface-tertiary border border-border-primary font-mono text-text-secondary">Enter</kbd>, or click
      </p>
    </div>
  );
}
