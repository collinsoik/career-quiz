"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { connectSocket, getSocket, disconnectSocket } from "@/lib/socket";
import { SERVER_EVENTS, INTEREST_CATEGORIES } from "@pathfinder/shared";
import type { SubmittedResult, ResultsLobby, InterestCategory } from "@pathfinder/shared";
import StudentResults from "@/components/dashboard/StudentResults";

export default function DashboardPage() {
  const params = useParams();
  const router = useRouter();
  const roomCode = params.roomCode as string;

  const [submissions, setSubmissions] = useState<SubmittedResult[]>([]);
  const [connected, setConnected] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const socket = connectSocket();

    socket.on("connect", () => {
      setConnected(true);
    });

    socket.on("disconnect", () => {
      setConnected(false);
    });

    // Full state sync on connect/reconnect
    socket.on(SERVER_EVENTS.LOBBY_STATE, (data: { lobby: ResultsLobby }) => {
      setSubmissions(data.lobby.submissions);
    });

    // New submission
    socket.on(SERVER_EVENTS.LOBBY_SUBMISSION, (data: { submission: SubmittedResult }) => {
      setSubmissions((prev) => [...prev, data.submission]);
    });

    socket.on(SERVER_EVENTS.LOBBY_ERROR, (data: { message: string }) => {
      setError(data.message);
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off(SERVER_EVENTS.LOBBY_STATE);
      socket.off(SERVER_EVENTS.LOBBY_SUBMISSION);
      socket.off(SERVER_EVENTS.LOBBY_ERROR);
      disconnectSocket();
    };
  }, []);

  // Compute category distribution from submissions
  const categoryDistribution: Record<string, number> = {};
  for (const sub of submissions) {
    if (sub.topCategories.length > 0) {
      const topKey = sub.topCategories[0].key;
      categoryDistribution[topKey] = (categoryDistribution[topKey] || 0) + 1;
    }
  }

  // Convert submissions to format StudentResults expects
  const completedStudents = submissions.map((sub, idx) => ({
    playerId: `sub-${idx}`,
    displayName: sub.displayName,
    topCategory: sub.topCategories[0]?.label || "Unknown",
    results: {
      displayName: sub.displayName,
      profile: sub.profile,
      topCategories: sub.topCategories,
      careers: sub.careers,
    },
  }));

  return (
    <main className="min-h-screen p-4 md:p-6 lg:p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Results Dashboard</h1>
          <p className="text-sm text-text-tertiary">
            Lobby Code: <span className="font-mono text-accent-primary text-lg">{roomCode}</span>
            <span className={`ml-3 inline-block w-2 h-2 rounded-full ${connected ? "bg-accent-green" : "bg-accent-red"}`} />
            <span className="ml-1 text-xs">{connected ? "Connected" : "Disconnected"}</span>
          </p>
          <p className="text-xs text-text-tertiary mt-1">
            Students enter this code on their results page to submit
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-text-secondary">
            {submissions.length} submitted
          </span>
        </div>
      </div>

      {error && (
        <div className="card border-accent-red/50 bg-accent-red-light mb-6 text-center">
          <p className="text-sm text-accent-red">{error}</p>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Stats + Students */}
        <div className="lg:col-span-2 space-y-6">
          {/* Summary Stats */}
          <div className="card-elevated">
            <h2 className="text-sm font-semibold text-text-secondary mb-4 uppercase tracking-wider">
              Overview
            </h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-surface-tertiary rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-text-primary">{submissions.length}</p>
                <p className="text-xs text-text-tertiary mt-1">Submissions</p>
              </div>
              <div className="bg-surface-tertiary rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-text-primary">
                  {Object.keys(categoryDistribution).length}
                </p>
                <p className="text-xs text-text-tertiary mt-1">Categories Represented</p>
              </div>
              <div className="bg-surface-tertiary rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-text-primary">
                  {submissions.filter((s) => s.surveyAnswers).length}
                </p>
                <p className="text-xs text-text-tertiary mt-1">Survey Responses</p>
              </div>
            </div>
          </div>

          {/* Interest Distribution */}
          {submissions.length > 0 && (
            <div className="card-elevated">
              <h2 className="text-sm font-semibold text-text-secondary mb-4 uppercase tracking-wider">
                Interest Distribution
              </h2>
              <p className="text-xs text-text-tertiary mb-4">
                Top interest category per submitted student
              </p>
              <div className="space-y-3">
                {INTEREST_CATEGORIES.map((cat) => {
                  const count = categoryDistribution[cat.key as InterestCategory] || 0;
                  const percent = submissions.length > 0 ? Math.round((count / submissions.length) * 100) : 0;

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
          )}

          {/* Completed Students */}
          {completedStudents.length > 0 && (
            <StudentResults students={completedStudents} />
          )}
        </div>

        {/* Right: Instructions + Survey Summary */}
        <div className="lg:col-span-1 space-y-6">
          {/* Instructions Card */}
          <div className="card-elevated sticky top-6">
            <h2 className="text-sm font-semibold text-text-secondary mb-4 uppercase tracking-wider">
              How It Works
            </h2>
            <ol className="space-y-3 text-sm text-text-secondary">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-primary/20 text-accent-primary flex items-center justify-center text-xs font-bold">1</span>
                <span>Students go to the home page and start the quiz</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-primary/20 text-accent-primary flex items-center justify-center text-xs font-bold">2</span>
                <span>They play through all 4 scenarios at their own pace</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-primary/20 text-accent-primary flex items-center justify-center text-xs font-bold">3</span>
                <span>On their results page, they enter lobby code <strong className="font-mono text-accent-primary">{roomCode}</strong></span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-primary/20 text-accent-primary flex items-center justify-center text-xs font-bold">4</span>
                <span>Their results appear here automatically</span>
              </li>
            </ol>
          </div>

          {/* Survey Summary */}
          {submissions.some((s) => s.surveyAnswers) && (
            <div className="card-elevated">
              <h2 className="text-sm font-semibold text-text-secondary mb-4 uppercase tracking-wider">
                Survey Highlights
              </h2>
              {(() => {
                const surveyed = submissions.filter((s) => s.surveyAnswers);
                const avgEnjoyment = surveyed.reduce((sum, s) => sum + (s.surveyAnswers?.enjoyment || 0), 0) / (surveyed.length || 1);
                const avgOverall = surveyed.reduce((sum, s) => sum + (s.surveyAnswers?.overall || 0), 0) / (surveyed.length || 1);
                return (
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-text-secondary">Avg Enjoyment</span>
                      <span className="text-sm font-bold text-text-primary">{avgEnjoyment.toFixed(1)}/5</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-text-secondary">Avg Overall</span>
                      <span className="text-sm font-bold text-text-primary">{avgOverall.toFixed(1)}/5</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-text-secondary">Responses</span>
                      <span className="text-sm font-bold text-text-primary">{surveyed.length}</span>
                    </div>
                  </div>
                );
              })()}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
