"use client";

import Link from "next/link";
import { CAREER_CLUSTERS } from "@pathfinder/shared";

export default function ExplorePage() {
  const totalCareers = CAREER_CLUSTERS.reduce(
    (sum, c) => sum + c.pathways.reduce((s, p) => s + p.careers.length, 0),
    0
  );

  return (
    <main className="min-h-screen px-4 py-8 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-10">
          <Link href="/" className="text-sm text-text-tertiary hover:text-text-secondary transition-colors mb-4 inline-block">
            ← Back to Home
          </Link>
          <h1 className="text-3xl md:text-5xl font-extrabold text-text-primary mb-3 tracking-tight">
            Explore Career Paths
          </h1>
          <p className="text-text-secondary text-lg max-w-xl mx-auto">
            {totalCareers} careers across {CAREER_CLUSTERS.length} fields. Tap any area to discover what you could become.
          </p>
        </div>

        {/* Cluster Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {CAREER_CLUSTERS.map((cluster) => {
            const careerCount = cluster.pathways.reduce(
              (s, p) => s + p.careers.length, 0
            );
            return (
              <Link
                key={cluster.id}
                href={`/explore/${cluster.id}`}
                className="card hover:scale-[1.02] transition-all duration-200 group"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                    style={{ backgroundColor: cluster.color + "20" }}
                  >
                    {cluster.emoji}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-base font-semibold text-text-primary group-hover:text-accent-primary transition-colors">
                      {cluster.name}
                    </h2>
                    <p className="text-sm text-text-secondary mt-1 line-clamp-2">
                      {cluster.description}
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                      <span className="text-xs text-text-tertiary">
                        {cluster.pathways.length} pathways
                      </span>
                      <span className="text-xs text-text-disabled">•</span>
                      <span className="text-xs text-text-tertiary">
                        {careerCount} careers
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-12 pb-8">
          <p className="text-text-secondary mb-4">
            Not sure where to start? Let us help you discover your interests.
          </p>
          <Link href="/" className="btn-primary px-8 py-3 text-base">
            Take the Quiz
          </Link>
        </div>
      </div>
    </main>
  );
}
