"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { connectSocket, disconnectSocket } from "@/lib/socket";
import { CLIENT_EVENTS, SERVER_EVENTS } from "@pathfinder/shared";

export default function TeacherPage() {
  const router = useRouter();
  const [isCreating, setIsCreating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    disconnectSocket();
  }, []);

  function handleCreate() {
    setIsCreating(true);
    setError(null);

    const socket = connectSocket();

    const timeout = setTimeout(() => {
      setError("Could not connect to game server. Please try again.");
      setIsCreating(false);
    }, 8000);

    const onConnectError = (err: Error) => {
      clearTimeout(timeout);
      setError(`Connection failed: ${err.message}`);
      setIsCreating(false);
      socket.off("connect_error", onConnectError);
    };
    socket.on("connect_error", onConnectError);

    const doCreate = () => {
      socket.off("connect_error", onConnectError);
      socket.emit(
        CLIENT_EVENTS.LOBBY_CREATE,
        {},
        (response: { success: boolean; code?: string; error?: string }) => {
          clearTimeout(timeout);
          if (response.success && response.code) {
            router.push(`/dashboard/${response.code}`);
          } else {
            setError(response.error || "Failed to create lobby");
            setIsCreating(false);
          }
        }
      );
    };

    if (socket.connected) {
      doCreate();
    } else {
      socket.once("connect", doCreate);
    }
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-accent-green/10 rounded-full blur-3xl" />

      {/* Header */}
      <div className="absolute top-6 left-6">
        <Link
          href="/"
          className="text-sm text-text-tertiary hover:text-accent-primary transition-colors"
        >
          &larr; Back
        </Link>
      </div>

      <div className="max-w-lg w-full relative z-10">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-text-primary mb-3">
            Teacher Dashboard
          </h1>
          <p className="text-text-secondary leading-relaxed">
            Create a results lobby for your class. Students play the quiz on their own,
            then submit their results using your lobby code.
          </p>
        </div>

        {error && (
          <div className="card border-accent-red/50 bg-accent-red-light mb-6 text-center">
            <p className="text-sm text-accent-red">{error}</p>
          </div>
        )}

        {/* Info cards */}
        <div className="grid grid-cols-2 gap-4 mb-10">
          <div className="card text-center">
            <div className="text-2xl mb-2">&#x1F3DD;&#xFE0F; &#x1F3D7;&#xFE0F; &#x1F680; &#x1F575;&#xFE0F;</div>
            <p className="text-sm font-semibold text-text-primary">4 Scenarios</p>
            <p className="text-xs text-text-tertiary mt-1">Island, City, Space, Mystery</p>
          </div>
          <div className="card text-center">
            <div className="text-2xl mb-2">&#x23F1;&#xFE0F;</div>
            <p className="text-sm font-semibold text-text-primary">15-20 Minutes</p>
            <p className="text-xs text-text-tertiary mt-1">Self-paced, no rush</p>
          </div>
          <div className="card text-center">
            <div className="text-2xl mb-2">&#x1F4CA;</div>
            <p className="text-sm font-semibold text-text-primary">Results Dashboard</p>
            <p className="text-xs text-text-tertiary mt-1">See class results in real-time</p>
          </div>
          <div className="card text-center">
            <div className="text-2xl mb-2">&#x1F512;</div>
            <p className="text-sm font-semibold text-text-primary">Student Choice</p>
            <p className="text-xs text-text-tertiary mt-1">Students opt in to share</p>
          </div>
        </div>

        {/* Create Button */}
        <div className="text-center">
          <button
            onClick={handleCreate}
            disabled={isCreating}
            className="btn-green px-12 py-4 text-lg"
          >
            {isCreating ? "Creating..." : "Create Results Lobby"}
          </button>
        </div>
      </div>
    </main>
  );
}
