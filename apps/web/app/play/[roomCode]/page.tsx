"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { connectSocket, getSocket } from "@/lib/socket";
import { useGameStore } from "@/lib/game-store";
import {
  CLIENT_EVENTS,
  SERVER_EVENTS,
} from "@pathfinder/shared";
import type { ClientScenario, PlayerResults, PlayerStatePayload } from "@pathfinder/shared";
import ScenarioIntro from "@/components/game/ScenarioIntro";
import DecisionCard from "@/components/game/DecisionCard";
import ProgressBar from "@/components/game/ProgressBar";

export default function PlayPage() {
  const params = useParams();
  const router = useRouter();
  const roomCode = params.roomCode as string;

  const {
    scenarios,
    currentScenario,
    currentDecision,
    completed,
    playerId,
    setScenarios,
    advancePosition,
    setResults,
    setPhase,
  } = useGameStore();

  const [showIntro, setShowIntro] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastScenarioIndex, setLastScenarioIndex] = useState(0);

  // Connect and listen for events
  useEffect(() => {
    const socket = connectSocket();

    // If we don't have scenarios yet (e.g. page refresh), redirect to landing
    if (scenarios.length === 0) {
      // Try to listen for game:started in case we're reconnecting
      socket.on(SERVER_EVENTS.GAME_STARTED, (data: { scenarios: ClientScenario[] }) => {
        setScenarios(data.scenarios);
      });

      // If no scenarios after a short delay, go home
      const timeout = setTimeout(() => {
        if (useGameStore.getState().scenarios.length === 0) {
          router.push("/");
        }
      }, 3000);

      return () => {
        clearTimeout(timeout);
        socket.off(SERVER_EVENTS.GAME_STARTED);
      };
    }

    socket.on(SERVER_EVENTS.PLAYER_STATE, (data: PlayerStatePayload) => {
      advancePosition(data.currentScenario, data.currentDecision, data.completed);
      setIsSubmitting(false);
    });

    socket.on(SERVER_EVENTS.PLAYER_RESULTS, (data: PlayerResults) => {
      setResults(data);
      router.push(`/results/${roomCode}`);
    });

    return () => {
      socket.off(SERVER_EVENTS.PLAYER_STATE);
      socket.off(SERVER_EVENTS.PLAYER_RESULTS);
    };
  }, [scenarios.length, roomCode, router, setScenarios, advancePosition, setResults, setPhase]);

  // Show scenario intro when entering a new scenario
  useEffect(() => {
    if (currentScenario !== lastScenarioIndex) {
      setShowIntro(true);
      setLastScenarioIndex(currentScenario);
    }
  }, [currentScenario, lastScenarioIndex]);

  if (scenarios.length === 0) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-text-secondary">Loading scenarios...</p>
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
    if (isSubmitting) return;
    setIsSubmitting(true);

    const socket = getSocket();
    socket.emit(CLIENT_EVENTS.CHOICE_SUBMIT, {
      decisionId: decision.id,
      choiceId,
    });
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
          isSubmitting={isSubmitting}
        />
      </div>
    </main>
  );
}
