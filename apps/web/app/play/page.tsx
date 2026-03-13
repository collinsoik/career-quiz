"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useGameStore } from "@/lib/game-store";
import type { Scenario, InterestScores } from "@pathfinder/shared";
import ScenarioIntro from "@/components/game/ScenarioIntro";
import DecisionCard from "@/components/game/DecisionCard";
import ProgressBar from "@/components/game/ProgressBar";

export default function PlayPage() {
  const router = useRouter();

  const {
    playerName,
    scenarios,
    currentScenario,
    currentDecision,
    completed,
    advanceAndScore,
    calculateResults,
  } = useGameStore();

  const [showIntro, setShowIntro] = useState(true);
  const [lastScenarioIndex, setLastScenarioIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Redirect to home if no name set
  useEffect(() => {
    // Check sessionStorage as fallback
    if (!playerName) {
      const saved = typeof window !== "undefined" ? sessionStorage.getItem("pathfinder-name") : null;
      if (saved) {
        useGameStore.getState().setPlayerName(saved);
      } else {
        router.push("/");
      }
    }
  }, [playerName, router]);

  // Handle quiz completion
  useEffect(() => {
    if (completed) {
      calculateResults();
      router.push("/results");
    }
  }, [completed, calculateResults, router]);

  // Show scenario intro when entering a new scenario
  useEffect(() => {
    if (currentScenario !== lastScenarioIndex) {
      setShowIntro(true);
      setLastScenarioIndex(currentScenario);
    }
  }, [currentScenario, lastScenarioIndex]);

  if (!playerName || scenarios.length === 0) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-text-secondary">Loading...</p>
      </main>
    );
  }

  if (completed) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-2xl text-text-primary font-bold mb-2">All done!</p>
          <p className="text-text-secondary">Calculating your results...</p>
        </div>
      </main>
    );
  }

  const scenario = scenarios[currentScenario];
  const decision = scenario?.decisions[currentDecision];

  if (!scenario || !decision) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-text-secondary">Loading...</p>
      </main>
    );
  }

  // Calculate total progress
  let totalDecisionsBefore = 0;
  for (let i = 0; i < currentScenario; i++) {
    totalDecisionsBefore += scenarios[i].decisions.length;
  }
  const totalDecisions = scenarios.reduce((s, sc) => s + sc.decisions.length, 0);
  const currentProgress = totalDecisionsBefore + currentDecision;

  function handleChoiceSelect(choiceId: string) {
    if (isAnimating) return;
    setIsAnimating(true);

    // Find the choice and its weights
    const choice = decision.choices.find((c) => c.id === choiceId);
    if (!choice) return;

    // Small delay for visual feedback
    setTimeout(() => {
      advanceAndScore(choice.weights);
      setIsAnimating(false);
    }, 300);
  }

  if (showIntro) {
    return (
      <ScenarioIntro
        scenario={scenario}
        scenarioNumber={currentScenario + 1}
        totalScenarios={scenarios.length}
        onContinue={() => setShowIntro(false)}
      />
    );
  }

  return (
    <main className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-accent-primary/5 to-transparent" />

      {/* Progress bar */}
      <ProgressBar
        current={currentProgress}
        total={totalDecisions}
        scenarioTitle={scenario.title}
        scenarioIcon={scenario.icon}
      />

      {/* Decision */}
      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <DecisionCard
          decision={decision}
          scenarioTitle={scenario.title}
          decisionNumber={currentDecision + 1}
          totalDecisions={scenario.decisions.length}
          onChoiceSelect={handleChoiceSelect}
          isSubmitting={isAnimating}
        />
      </div>
    </main>
  );
}
