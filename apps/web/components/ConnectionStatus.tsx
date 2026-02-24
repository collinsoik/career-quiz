"use client";

import { useEffect, useState, useRef } from "react";
import { peekSocket } from "@/lib/socket";

export default function ConnectionStatus() {
  const [status, setStatus] = useState<"connected" | "disconnected" | "reconnecting">("connected");
  const hasConnectedRef = useRef(false);

  useEffect(() => {
    // Poll for socket existence — it may not exist yet on the landing page
    const interval = setInterval(() => {
      const socket = peekSocket();
      if (!socket) return;

      // Once we find a socket, attach listeners and stop polling
      clearInterval(interval);

      const onConnect = () => {
        hasConnectedRef.current = true;
        setStatus("connected");
      };
      const onDisconnect = () => {
        // Only show banner if we successfully connected at least once
        if (hasConnectedRef.current) {
          setStatus("disconnected");
        }
      };
      const onReconnectAttempt = () => {
        if (hasConnectedRef.current) {
          setStatus("reconnecting");
        }
      };

      socket.on("connect", onConnect);
      socket.on("disconnect", onDisconnect);
      socket.io.on("reconnect_attempt", onReconnectAttempt);

      // If already connected when we find it
      if (socket.connected) {
        hasConnectedRef.current = true;
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  if (status === "connected") return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 px-4 py-2 text-center text-sm font-medium"
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
