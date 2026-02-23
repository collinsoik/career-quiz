"use client";

import { useState, useEffect } from "react";
import { useParams, useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { connectSocket, getSocket } from "@/lib/socket";
import { useGameStore } from "@/lib/game-store";
import { CLIENT_EVENTS, SERVER_EVENTS } from "@pathfinder/shared";
import type { Room, ClientScenario } from "@pathfinder/shared";

export default function LobbyPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const roomCode = params.roomCode as string;
  const playerName = searchParams.get("name");

  const { room, playerId, setRoom, setPlayerId, setScenarios, setPhase } = useGameStore();
  const [dots, setDots] = useState("");
  const [startError, setStartError] = useState<string | null>(null);
  const [isStarting, setIsStarting] = useState(false);

  const isHost = room?.hostId === playerId;

  // Animate waiting dots
  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 600);
    return () => clearInterval(interval);
  }, []);

  // Connect and join room
  useEffect(() => {
    const socket = connectSocket();

    if (playerName && !playerId) {
      socket.emit(
        CLIENT_EVENTS.ROOM_JOIN,
        { roomCode, playerName },
        (response: { success: boolean; room?: Room; playerId?: string; error?: string }) => {
          if (response.success && response.room) {
            setRoom(response.room);
            setPlayerId(response.playerId || socket.id!);
          }
        }
      );
    } else if (playerId) {
      socket.emit(
        CLIENT_EVENTS.ROOM_REJOIN,
        { roomCode, playerId },
        (response: { success: boolean; room?: Room; playerId?: string; error?: string }) => {
          if (response.success && response.room) {
            setRoom(response.room);
            if (response.playerId) setPlayerId(response.playerId);
          } else {
            useGameStore.getState().reset();
            router.push("/");
          }
        }
      );
    } else if (!playerName) {
      router.push("/");
      return;
    }

    // Handle reconnection
    const onReconnect = () => {
      const currentPlayerId = useGameStore.getState().playerId;
      if (currentPlayerId) {
        socket.emit(
          CLIENT_EVENTS.ROOM_REJOIN,
          { roomCode, playerId: currentPlayerId },
          (response: { success: boolean; room?: Room; playerId?: string }) => {
            if (response.success && response.room) {
              setRoom(response.room);
              if (response.playerId) setPlayerId(response.playerId);
            }
          }
        );
      }
    };
    socket.on("connect", onReconnect);

    socket.on(SERVER_EVENTS.ROOM_STATE, (roomData: Room) => {
      setRoom(roomData);
    });

    socket.on(SERVER_EVENTS.GAME_STARTED, (data: { scenarios: ClientScenario[] }) => {
      setScenarios(data.scenarios);
      setPhase("playing");
      if (isHost) {
        router.push(`/dashboard/${roomCode}`);
      } else {
        router.push(`/play/${roomCode}`);
      }
    });

    return () => {
      socket.off("connect", onReconnect);
      socket.off(SERVER_EVENTS.ROOM_STATE);
      socket.off(SERVER_EVENTS.GAME_STARTED);
    };
  }, [roomCode, playerName, playerId, setRoom, setPlayerId, setScenarios, setPhase, router, isHost]);

  const players = room?.players || {};
  const students = Object.values(players).filter((p) => !p.isHost);
  const totalPlayers = students.length;

  function handleStart() {
    setStartError(null);
    setIsStarting(true);

    const socket = getSocket();
    const timeout = setTimeout(() => {
      setStartError("Server did not respond. Please try again.");
      setIsStarting(false);
    }, 8000);

    socket.emit(CLIENT_EVENTS.GAME_START, null, (response: { success: boolean; error?: string }) => {
      clearTimeout(timeout);
      if (!response.success) {
        setStartError(response.error || "Failed to start game");
        setIsStarting(false);
      }
    });
  }

  const canStart = totalPlayers >= 1;

  return (
    <main className="min-h-screen flex flex-col p-6 md:p-10 relative overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent-primary/5 rounded-full blur-3xl" />

      {/* Header */}
      <div className="flex items-center justify-between mb-6 relative z-10">
        <Link
          href="/"
          className="text-sm text-text-tertiary hover:text-accent-primary transition-colors"
        >
          &larr; Leave
        </Link>
        <h1 className="text-2xl font-bold text-text-primary">Lobby</h1>
        <div className="w-16" />
      </div>

      {/* Room Code */}
      <div className="text-center mb-10 relative z-10">
        <p className="text-sm text-text-tertiary mb-3">Room Code</p>
        <div className="inline-block border border-border-secondary rounded-xl px-10 py-5 bg-surface-secondary shadow-glow">
          <span className="font-mono text-5xl font-bold text-accent-primary tracking-[0.3em]">
            {roomCode}
          </span>
        </div>
        <p className="text-xs text-text-disabled mt-3">
          Share this code with your students
        </p>
      </div>

      {/* Player List */}
      <div className="max-w-2xl mx-auto w-full mb-10 flex-1 relative z-10">
        <div className="card-elevated">
          <h2 className="text-sm font-semibold text-text-secondary mb-4 uppercase tracking-wider">
            Explorers ({totalPlayers})
          </h2>
          {students.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {students.map((student) => (
                <div
                  key={student.id}
                  className="flex items-center gap-3 bg-surface-tertiary px-4 py-3 rounded-lg border border-border-primary animate-fade-in"
                >
                  <div
                    className={`w-2.5 h-2.5 rounded-full ${
                      student.connected ? "bg-accent-green animate-pulse" : "bg-text-disabled"
                    }`}
                  />
                  <span className="text-sm text-text-primary font-medium truncate">
                    {student.displayName}
                  </span>
                  {student.id === playerId && (
                    <span className="text-xs font-semibold text-accent-primary ml-auto">
                      You
                    </span>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center py-12">
              <p className="text-text-disabled text-sm">Waiting for explorers to join{dots}</p>
            </div>
          )}
        </div>
      </div>

      {/* Action Bar */}
      <div className="text-center relative z-10 space-y-4">
        {isHost ? (
          <div>
            {startError && (
              <p className="text-sm text-accent-red mb-3">{startError}</p>
            )}
            <button
              onClick={handleStart}
              disabled={!canStart || isStarting}
              className="btn-green px-12 py-4 text-lg"
            >
              {isStarting ? "Starting..." : "Start Game"}
            </button>
            {!canStart && (
              <p className="text-xs text-text-disabled mt-3">
                Need at least 1 explorer to start
              </p>
            )}
          </div>
        ) : (
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
            <p className="text-sm text-text-secondary font-medium">
              Waiting for host to start{dots}
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
