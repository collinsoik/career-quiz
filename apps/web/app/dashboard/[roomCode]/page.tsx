"use client";

import { useEffect, useRef, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { connectSocket, getSocket } from "@/lib/socket";
import { useGameStore } from "@/lib/game-store";
import { SERVER_EVENTS, INTEREST_CATEGORIES } from "@pathfinder/shared";
import type { FeedItem, ClassStats, PlayerResults, ClientScenario } from "@pathfinder/shared";
import ClassFeed from "@/components/dashboard/ClassFeed";
import ProgressTracker from "@/components/dashboard/ProgressTracker";
import ChoiceDistribution from "@/components/dashboard/ChoiceDistribution";
import StudentResults from "@/components/dashboard/StudentResults";

interface CompletedStudent {
  playerId: string;
  displayName: string;
  topCategory: string;
  results?: PlayerResults;
}

export default function DashboardPage() {
  const params = useParams();
  const router = useRouter();
  const roomCode = params.roomCode as string;

  const { feedItems, classStats, addFeedItem, setClassStats, scenarios, setScenarios } = useGameStore();
  const [completedStudents, setCompletedStudents] = useState<CompletedStudent[]>([]);
  const [allCompleted, setAllCompleted] = useState(false);

  // Throttle CLASS_STATS updates to avoid excessive re-renders with 60-80 students
  const classStatsThrottleRef = useRef<NodeJS.Timeout | null>(null);
  const pendingStatsRef = useRef<ClassStats | null>(null);

  useEffect(() => {
    const socket = connectSocket();

    // Listen for game started if we missed it
    socket.on(SERVER_EVENTS.GAME_STARTED, (data: { scenarios: ClientScenario[] }) => {
      setScenarios(data.scenarios);
    });

    socket.on(SERVER_EVENTS.FEED_UPDATE, (item: FeedItem) => {
      addFeedItem(item);
    });

    socket.on(SERVER_EVENTS.CLASS_STATS, (stats: ClassStats) => {
      pendingStatsRef.current = stats;
      if (!classStatsThrottleRef.current) {
        classStatsThrottleRef.current = setTimeout(() => {
          classStatsThrottleRef.current = null;
          if (pendingStatsRef.current) {
            setClassStats(pendingStatsRef.current);
            pendingStatsRef.current = null;
          }
        }, 1000);
      }
    });

    socket.on(SERVER_EVENTS.PLAYER_COMPLETED, (data: CompletedStudent) => {
      setCompletedStudents((prev) => {
        const exists = prev.find((s) => s.playerId === data.playerId);
        if (exists) {
          return prev.map((s) => (s.playerId === data.playerId ? data : s));
        }
        return [...prev, data];
      });
    });

    socket.on(SERVER_EVENTS.GAME_ALL_COMPLETED, () => {
      setAllCompleted(true);
    });

    return () => {
      socket.off(SERVER_EVENTS.GAME_STARTED);
      socket.off(SERVER_EVENTS.FEED_UPDATE);
      socket.off(SERVER_EVENTS.CLASS_STATS);
      socket.off(SERVER_EVENTS.PLAYER_COMPLETED);
      socket.off(SERVER_EVENTS.GAME_ALL_COMPLETED);
      if (classStatsThrottleRef.current) {
        clearTimeout(classStatsThrottleRef.current);
        classStatsThrottleRef.current = null;
      }
    };
  }, [addFeedItem, setClassStats, setScenarios]);

  return (
    <main className="min-h-screen p-4 md:p-6 lg:p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-text-primary">Class Dashboard</h1>
          <p className="text-sm text-text-tertiary">
            Room <span className="font-mono text-accent-primary">{roomCode}</span>
            {allCompleted && (
              <span className="ml-3 badge-green">All Complete!</span>
            )}
          </p>
        </div>
        <div className="flex items-center gap-3">
          {classStats && (
            <span className="text-sm text-text-secondary">
              {classStats.completedPlayers}/{classStats.totalPlayers} finished
            </span>
          )}
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Progress + Distribution */}
        <div className="lg:col-span-2 space-y-6">
          {/* Progress Overview */}
          <ProgressTracker stats={classStats} />

          {/* Interest Distribution */}
          {classStats && classStats.completedPlayers > 0 && (
            <ChoiceDistribution stats={classStats} />
          )}

          {/* Completed Students */}
          {completedStudents.length > 0 && (
            <StudentResults students={completedStudents} />
          )}
        </div>

        {/* Right: Live Feed */}
        <div className="lg:col-span-1">
          <ClassFeed items={feedItems} />
        </div>
      </div>
    </main>
  );
}
