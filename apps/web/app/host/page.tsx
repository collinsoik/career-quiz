"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HostRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/teacher");
  }, [router]);

  return (
    <main className="min-h-screen flex items-center justify-center">
      <p className="text-text-secondary">Redirecting...</p>
    </main>
  );
}
