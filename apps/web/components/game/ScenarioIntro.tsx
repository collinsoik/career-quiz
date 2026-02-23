"use client";

import type { ClientScenario } from "@pathfinder/shared";

interface ScenarioIntroProps {
  scenario: ClientScenario;
  scenarioNumber: number;
  totalScenarios: number;
  onContinue: () => void;
}

export default function ScenarioIntro({
  scenario,
  scenarioNumber,
  totalScenarios,
  onContinue,
}: ScenarioIntroProps) {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-primary/10 rounded-full blur-3xl" />

      <div className="max-w-xl w-full relative z-10 animate-fade-in">
        {/* Scenario badge */}
        <div className="text-center mb-6">
          <span className="badge-purple">
            Scenario {scenarioNumber} of {totalScenarios}
          </span>
        </div>

        {/* Icon + Title */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">{scenario.icon}</div>
          <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-3">
            {scenario.title}
          </h1>
          <p className="text-text-secondary text-lg">
            {scenario.description}
          </p>
        </div>

        {/* Narrative */}
        <div className="card-elevated mb-8">
          <p className="text-text-primary leading-relaxed text-base">
            {scenario.narrative}
          </p>
        </div>

        {/* Decision count */}
        <p className="text-center text-sm text-text-tertiary mb-6">
          {scenario.decisions.length} decisions ahead
        </p>

        {/* Continue button */}
        <div className="text-center">
          <button onClick={onContinue} className="btn-primary px-10 py-3 text-base">
            Let&apos;s Go
          </button>
        </div>
      </div>
    </main>
  );
}
