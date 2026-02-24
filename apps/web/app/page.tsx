"use client";

import { useState, useEffect, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useGameStore } from "@/lib/game-store";
import { disconnectSocket } from "@/lib/socket";

export default function LandingPage() {
  const router = useRouter();
  const [roomCode, setRoomCode] = useState("");
  const [playerName, setPlayerName] = useState("");
  const [isJoining, setIsJoining] = useState(false);

  useEffect(() => {
    useGameStore.getState().reset();
    disconnectSocket();
  }, []);

  function handleRoomCodeChange(value: string) {
    const cleaned = value.replace(/[^0-9]/g, "");
    if (cleaned.length <= 4) {
      setRoomCode(cleaned);
    }
  }

  function handleJoin(e: FormEvent) {
    e.preventDefault();
    if (roomCode.trim().length !== 4 || !playerName.trim()) return;
    setIsJoining(true);
    const encodedName = encodeURIComponent(playerName.trim());
    router.push(`/lobby/${roomCode.trim()}?name=${encodedName}`);
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

      {/* Join Card */}
      <div className="w-full max-w-sm relative z-10">
        <div className="card-elevated">
          <h2 className="text-lg font-semibold text-text-primary mb-6 text-center">
            Join Session
          </h2>
          <form onSubmit={handleJoin} className="space-y-4">
            <div>
              <label className="text-sm font-medium text-text-secondary block mb-2">
                Room Code
              </label>
              <input
                type="text"
                inputMode="numeric"
                value={roomCode}
                onChange={(e) => handleRoomCodeChange(e.target.value)}
                placeholder="1234"
                maxLength={4}
                className="input font-mono tracking-[0.3em] text-center text-xl"
              />
            </div>
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
              />
            </div>
            <button
              type="submit"
              disabled={roomCode.trim().length !== 4 || !playerName.trim() || isJoining}
              className="w-full btn-primary py-3 text-base"
            >
              {isJoining ? "Joining..." : "Join"}
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12 text-center relative z-10 space-y-4">
        <Link href="/explore" className="btn-ghost text-sm">
          Explore STEM Majors →
        </Link>
        <p className="text-xs text-text-disabled">
          An interactive STEM major exploration game for classrooms
        </p>
      </div>
    </main>
  );
}
