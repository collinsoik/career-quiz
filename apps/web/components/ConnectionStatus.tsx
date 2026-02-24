"use client";

import { useEffect, useState } from "react";
import { getSocket } from "@/lib/socket";

export default function ConnectionStatus() {
  const [status, setStatus] = useState<"connected" | "disconnected" | "reconnecting">("connected");

  useEffect(() => {
    const socket = getSocket();
    if (!socket) return;

    const onDisconnect = () => setStatus("disconnected");
    const onReconnectAttempt = () => setStatus("reconnecting");
    const onConnect = () => setStatus("connected");

    socket.on("disconnect", onDisconnect);
    socket.io.on("reconnect_attempt", onReconnectAttempt);
    socket.on("connect", onConnect);

    // Set initial status
    setStatus(socket.connected ? "connected" : "disconnected");

    return () => {
      socket.off("disconnect", onDisconnect);
      socket.io.off("reconnect_attempt", onReconnectAttempt);
      socket.off("connect", onConnect);
    };
  }, []);

  if (status === "connected") return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 px-4 py-2 text-center text-sm font-medium animate-in slide-in-from-top"
      style={{
        backgroundColor: status === "reconnecting" ? "#f59e0b" : "#ef4444",
        color: "white",
      }}
    >
      {status === "reconnecting"
        ? "Reconnecting..."
        : "Connection lost. Trying to reconnect..."}
    </div>
  );
}
