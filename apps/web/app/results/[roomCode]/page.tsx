"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { getSocket } from "@/lib/socket";
import { useGameStore } from "@/lib/game-store";
import Link from "next/link";
import { CLIENT_EVENTS, SERVER_EVENTS, INTEREST_CATEGORIES } from "@pathfinder/shared";
import type { PlayerResults } from "@pathfinder/shared";
import InterestRadar from "@/components/results/InterestRadar";
import CareerCard from "@/components/results/CareerCard";

export default function ResultsPage() {
  const params = useParams();
  const router = useRouter();
  const roomCode = params.roomCode as string;

  const { results, setResults } = useGameStore();
  const [shared, setShared] = useState(false);
  const [showCareers, setShowCareers] = useState(false);

  // Listen for results if we don't have them yet
  useEffect(() => {
    if (results) {
      // Stagger reveal: show careers after radar chart
      const timer = setTimeout(() => setShowCareers(true), 800);
      return () => clearTimeout(timer);
    }

    const socket = getSocket();
    socket.on(SERVER_EVENTS.PLAYER_RESULTS, (data: PlayerResults) => {
      setResults(data);
    });

    // If no results after 15 seconds, go home
    const timeout = setTimeout(() => {
      if (!useGameStore.getState().results) {
        router.push("/");
      }
    }, 15000);

    return () => {
      socket.off(SERVER_EVENTS.PLAYER_RESULTS);
      clearTimeout(timeout);
    };
  }, [results, setResults, router]);

  if (!results) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-text-secondary">Loading your results...</p>
      </main>
    );
  }

  function handleShare() {
    const socket = getSocket();
    const newShared = !shared;
    setShared(newShared);
    socket.emit(CLIENT_EVENTS.RESULTS_SHARE, { share: newShared });
  }

  const topCategory = results.topCategories[0];
  const categoryInfo = INTEREST_CATEGORIES.find((c) => c.key === topCategory?.key);

  return (
    <main className="min-h-screen px-4 py-8 relative overflow-hidden">
      {/* Background glow in top category color */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-3xl opacity-10"
        style={{ backgroundColor: categoryInfo?.color || "#7C5CFC" }}
      />

      <div className="max-w-2xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-2">
            Your Results
          </h1>
          <p className="text-text-secondary">
            {results.displayName}, here&apos;s what your choices reveal
          </p>
        </div>

        {/* Top Interest */}
        <div className="text-center mb-8 animate-bounce-in">
          <p className="text-sm text-text-tertiary mb-2 uppercase tracking-wider">
            Your strongest interest
          </p>
          <div
            className="inline-block px-8 py-4 rounded-xl border-2"
            style={{
              borderColor: categoryInfo?.color || "#7C5CFC",
              backgroundColor: (categoryInfo?.color || "#7C5CFC") + "15",
            }}
          >
            <p
              className="text-2xl font-bold"
              style={{ color: categoryInfo?.color || "#7C5CFC" }}
            >
              {topCategory?.label}
            </p>
            <p className="text-sm text-text-secondary mt-1">
              {categoryInfo?.description}
            </p>
          </div>
        </div>

        {/* Radar Chart */}
        <div className="card-elevated mb-8 animate-fade-in">
          <h2 className="text-sm font-semibold text-text-secondary mb-4 uppercase tracking-wider text-center">
            Interest Profile
          </h2>
          <InterestRadar profile={results.profile} />
        </div>

        {/* Career Matches */}
        {showCareers && (
          <div className="mb-8 animate-slide-up">
            <h2 className="text-sm font-semibold text-text-secondary mb-4 uppercase tracking-wider text-center">
              Top Career Matches
            </h2>
            <div className="space-y-3">
              {results.careers.map((career, idx) => (
                <CareerCard key={career.id} career={career} rank={idx + 1} />
              ))}
            </div>
          </div>
        )}

        {/* Explore More */}
        {showCareers && (
          <div className="text-center mb-8 animate-fade-in">
            <p className="text-sm text-text-secondary mb-3">
              Want to explore more?
            </p>
            <Link href="/explore" className="btn-ghost text-sm">
              Browse All 24 STEM Majors →
            </Link>
          </div>
        )}

        {/* Share Controls */}
        <div className="card-elevated text-center mb-8 animate-fade-in">
          <p className="text-sm text-text-secondary mb-4">
            Want to share your results with your teacher?
          </p>
          <button
            onClick={handleShare}
            className={shared ? "btn-ghost" : "btn-primary"}
          >
            {shared ? "Shared with Teacher" : "Share with Teacher"}
          </button>
          <p className="text-xs text-text-disabled mt-3">
            {shared
              ? "Your teacher can see your results. Click to unshare."
              : "Your results are private by default."}
          </p>
        </div>

        {/* All Categories Breakdown */}
        <div className="card-elevated mb-8 animate-fade-in">
          <h2 className="text-sm font-semibold text-text-secondary mb-4 uppercase tracking-wider">
            Full Breakdown
          </h2>
          <div className="space-y-3">
            {results.topCategories.map((cat) => {
              const info = INTEREST_CATEGORIES.find((c) => c.key === cat.key);
              return (
                <div key={cat.key} className="flex items-center gap-3">
                  <span className="text-sm font-medium text-text-primary w-28">
                    {cat.label}
                  </span>
                  <div className="flex-1 h-3 bg-surface-tertiary rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: `${cat.score}%`,
                        backgroundColor: info?.color || "#7C5CFC",
                      }}
                    />
                  </div>
                  <span className="text-xs text-text-tertiary font-mono w-10 text-right">
                    {cat.score}%
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Play Again */}
        <div className="text-center pb-8">
          <button
            onClick={() => router.push("/")}
            className="btn-ghost"
          >
            Back to Home
          </button>
        </div>
      </div>
    </main>
  );
}
