"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useGameStore } from "@/lib/game-store";
import { connectSocket, disconnectSocket } from "@/lib/socket";
import Link from "next/link";
import { CLIENT_EVENTS, SERVER_EVENTS, INTEREST_CATEGORIES } from "@pathfinder/shared";
import type { SurveyAnswers } from "@pathfinder/shared";
import InterestRadar from "@/components/results/InterestRadar";
import CareerCard from "@/components/results/CareerCard";
import PostActivitySurvey from "@/components/survey/PostActivitySurvey";

export default function ResultsPage() {
  const router = useRouter();

  const { results, playerName } = useGameStore();
  const [showCareers, setShowCareers] = useState(false);
  const [showSurvey, setShowSurvey] = useState(false);
  const [surveyDone, setSurveyDone] = useState(false);
  const [surveyAnswers, setSurveyAnswers] = useState<SurveyAnswers | null>(null);

  // Submit to teacher state
  const [lobbyCode, setLobbyCode] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Redirect home if no results
  useEffect(() => {
    if (!results) {
      // Try recalculating if we have a name in session
      const saved = typeof window !== "undefined" ? sessionStorage.getItem("pathfinder-name") : null;
      if (!saved) {
        router.push("/");
        return;
      }
    }

    // Stagger reveal
    const timer = setTimeout(() => setShowCareers(true), 800);
    const surveyTimer = setTimeout(() => setShowSurvey(true), 1800);
    return () => {
      clearTimeout(timer);
      clearTimeout(surveyTimer);
    };
  }, [results, router]);

  if (!results) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-text-secondary">Loading your results...</p>
      </main>
    );
  }

  function handleLobbyCodeChange(value: string) {
    const cleaned = value.replace(/[^0-9]/g, "");
    if (cleaned.length <= 4) {
      setLobbyCode(cleaned);
    }
    setSubmitError(null);
  }

  function handleSubmitToTeacher() {
    if (lobbyCode.length !== 4 || !results || isSubmitting) return;
    setIsSubmitting(true);
    setSubmitError(null);

    const socket = connectSocket();

    const timeout = setTimeout(() => {
      setSubmitError("Could not connect to server. Please try again.");
      setIsSubmitting(false);
      disconnectSocket();
    }, 8000);

    const onConnectError = (err: Error) => {
      clearTimeout(timeout);
      setSubmitError(`Connection failed: ${err.message}`);
      setIsSubmitting(false);
      socket.off("connect_error", onConnectError);
    };
    socket.on("connect_error", onConnectError);

    // Wait for connection then submit
    const doSubmit = () => {
      socket.off("connect_error", onConnectError);
      socket.emit(
        CLIENT_EVENTS.RESULTS_SUBMIT,
        {
          lobbyCode: lobbyCode.trim(),
          displayName: results.displayName,
          profile: results.profile,
          topCategories: results.topCategories,
          careers: results.careers,
          surveyAnswers: surveyAnswers,
        },
        (response: { success: boolean; error?: string }) => {
          clearTimeout(timeout);
          if (response.success) {
            setSubmitSuccess(true);
          } else {
            setSubmitError(response.error || "Failed to submit results");
          }
          setIsSubmitting(false);
          disconnectSocket();
        }
      );
    };

    if (socket.connected) {
      doSubmit();
    } else {
      socket.once("connect", doSubmit);
    }
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
              Explore All Career Paths →
            </Link>
          </div>
        )}

        {/* Post-Activity Survey */}
        {showSurvey && !surveyDone && (
          <div className="mb-8 animate-slide-up">
            <PostActivitySurvey
              onComplete={(answers) => {
                setSurveyAnswers(answers);
                setSurveyDone(true);
              }}
            />
          </div>
        )}

        {surveyDone && (
          <div className="card-elevated text-center mb-8 animate-survey-complete">
            <p className="text-2xl mb-2">&#x1F389;</p>
            <p className="text-sm font-semibold text-text-primary">Thanks for your feedback!</p>
            <p className="text-xs text-text-tertiary mt-1">Your responses help us improve.</p>
          </div>
        )}

        {/* Submit to Teacher */}
        <div className="card-elevated text-center mb-8 animate-fade-in">
          {submitSuccess ? (
            <>
              <p className="text-2xl mb-2">&#x2705;</p>
              <p className="text-sm font-semibold text-text-primary">
                Results submitted to your teacher!
              </p>
              <p className="text-xs text-text-tertiary mt-1">
                They can now see your results on their dashboard.
              </p>
            </>
          ) : (
            <>
              <p className="text-sm text-text-secondary mb-4">
                Has your teacher shared a lobby code? Submit your results so they can see them.
              </p>
              <div className="flex items-center justify-center gap-3 mb-3">
                <input
                  type="text"
                  inputMode="numeric"
                  value={lobbyCode}
                  onChange={(e) => handleLobbyCodeChange(e.target.value)}
                  placeholder="1234"
                  maxLength={4}
                  className="input font-mono tracking-[0.3em] text-center text-xl w-32"
                />
                <button
                  onClick={handleSubmitToTeacher}
                  disabled={lobbyCode.length !== 4 || isSubmitting}
                  className="btn-primary"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </div>
              {submitError && (
                <p className="text-xs text-accent-red mt-2">{submitError}</p>
              )}
              <p className="text-xs text-text-disabled mt-3">
                Your results are private unless you choose to submit them.
              </p>
            </>
          )}
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
                  <span className="text-sm font-medium text-text-primary w-40 shrink-0">
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
                  <span className="text-sm text-text-tertiary font-mono w-12 text-right">
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
