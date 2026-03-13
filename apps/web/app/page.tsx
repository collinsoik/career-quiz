"use client";

import { useState, useEffect, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useGameStore } from "@/lib/game-store";

export default function LandingPage() {
  const router = useRouter();
  const [playerName, setPlayerName] = useState("");

  useEffect(() => {
    useGameStore.getState().reset();
  }, []);

  function handleStart(e: FormEvent) {
    e.preventDefault();
    if (!playerName.trim()) return;
    useGameStore.getState().setPlayerName(playerName.trim());
    router.push("/play");
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl" />

      {/* Title */}
      <div className="text-center mb-12 relative z-10">
        <h1 className="text-5xl md:text-7xl font-extrabold text-text-primary mb-3 tracking-tight">
          Pathfinder
        </h1>
        <p className="text-lg text-text-secondary">
          Discover your future. No boring quizzes.
        </p>
      </div>

      {/* Start Card */}
      <div className="w-full max-w-sm relative z-10">
        <div className="card-elevated">
          <h2 className="text-lg font-semibold text-text-primary mb-6 text-center">
            Get Started
          </h2>
          <form onSubmit={handleStart} className="space-y-4">
            <div>
              <label className="text-sm font-medium text-text-secondary block mb-2">
                Your Name
              </label>
              <input
                type="text"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                placeholder="Enter your name"
                maxLength={20}
                className="input"
                autoFocus
              />
            </div>
            <button
              type="submit"
              disabled={!playerName.trim()}
              className="w-full btn-primary py-3 text-base"
            >
              Start Quiz
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12 text-center relative z-10 space-y-4">
        <Link href="/explore" className="btn-ghost text-sm">
          Explore Career Paths →
        </Link>
        <p className="text-xs text-text-disabled">
          An interactive career exploration game for classrooms
        </p>
      </div>
    </main>
  );
}
