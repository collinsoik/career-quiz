"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { MAJOR_ARTICLES } from "@pathfinder/shared";
import CategoryFilter from "@/components/explore/CategoryFilter";
import MajorGrid from "@/components/explore/MajorGrid";

export default function ExplorePage() {
  const [activeField, setActiveField] = useState<string | null>(null);

  const filtered = useMemo(() => {
    if (!activeField) return MAJOR_ARTICLES;
    return MAJOR_ARTICLES.filter((m) => m.fieldId === activeField);
  }, [activeField]);

  return (
    <main className="min-h-screen px-4 py-8 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="text-sm text-text-tertiary hover:text-text-secondary transition-colors mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-3xl md:text-5xl font-extrabold text-text-primary mb-3 tracking-tight">
            Explore STEM Majors
          </h1>
          <p className="text-text-secondary text-lg max-w-xl mx-auto">
            Discover 24 STEM fields and find the one that fits you. Tap any card to learn more.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="sticky top-0 z-20 bg-surface-primary/80 backdrop-blur-lg py-4 mb-6 -mx-4 px-4">
          <CategoryFilter activeField={activeField} onSelect={setActiveField} />
        </div>

        {/* Grid */}
        <MajorGrid majors={filtered} />

        {/* Footer CTA */}
        <div className="text-center mt-12 pb-8">
          <p className="text-text-secondary mb-4">
            Ready to find which STEM field fits you best?
          </p>
          <Link href="/" className="btn-primary px-8 py-3 text-base">
            Take the Quiz
          </Link>
        </div>
      </div>
    </main>
  );
}
