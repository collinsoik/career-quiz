"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { CAREER_CLUSTERS } from "@pathfinder/shared";

export default function ClusterDetailPage() {
  const params = useParams();
  const clusterId = params.clusterId as string;
  const cluster = CAREER_CLUSTERS.find((c) => c.id === clusterId);

  if (!cluster) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-text-secondary mb-4">Cluster not found</p>
          <Link href="/explore" className="btn-primary">Back to Explore</Link>
        </div>
      </main>
    );
  }

  const totalCareers = cluster.pathways.reduce((s, p) => s + p.careers.length, 0);

  return (
    <main className="min-h-screen px-4 py-8 relative overflow-hidden">
      {/* Background glow in cluster color */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-3xl opacity-10"
        style={{ backgroundColor: cluster.color }}
      />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-text-tertiary mb-6">
          <Link href="/explore" className="hover:text-text-secondary transition-colors">
            Explore
          </Link>
          <span>/</span>
          <span className="text-text-primary">{cluster.name}</span>
        </div>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-3">
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl"
              style={{ backgroundColor: cluster.color + "20" }}
            >
              {cluster.emoji}
            </div>
            <div>
              <h1 className="text-2xl md:text-4xl font-extrabold text-text-primary">
                {cluster.name}
              </h1>
              <p className="text-text-secondary">
                {cluster.pathways.length} pathways · {totalCareers} careers
              </p>
            </div>
          </div>
          <p className="text-lg text-text-secondary max-w-2xl">
            {cluster.description}
          </p>
        </div>

        {/* Pathways */}
        <div className="space-y-8">
          {cluster.pathways.map((pathway) => (
            <div key={pathway.id}>
              <h2
                className="text-lg font-semibold text-text-primary mb-4 flex items-center gap-2"
              >
                <div
                  className="w-1 h-6 rounded-full"
                  style={{ backgroundColor: cluster.color }}
                />
                {pathway.name}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {pathway.careers.map((career) => (
                  <Link
                    key={career.id}
                    href={`/explore/${cluster.id}/${career.id}`}
                    className="card hover:scale-[1.02] transition-all duration-200 group"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-2xl flex-shrink-0">{career.emoji}</span>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-semibold text-text-primary group-hover:text-accent-primary transition-colors">
                          {career.title}
                        </h3>
                        <p className="text-xs text-text-secondary mt-1 line-clamp-2">
                          {career.hook}
                        </p>
                        <div className="flex items-center gap-3 mt-2">
                          <span
                            className="text-xs font-medium px-1.5 py-0.5 rounded"
                            style={{
                              backgroundColor: career.growth === "high" ? "#22C55E20" : career.growth === "declining" ? "#EF444420" : "#64748B20",
                              color: career.growth === "high" ? "#22C55E" : career.growth === "declining" ? "#EF4444" : "#94A3B8",
                            }}
                          >
                            {career.growth === "high" ? "↑ High growth" : career.growth === "moderate" ? "→ Moderate" : career.growth === "stable" ? "— Stable" : "↓ Declining"}
                          </span>
                          <span className="text-xs text-text-disabled">
                            ${(career.salaryRange.entry / 1000).toFixed(0)}k–${(career.salaryRange.experienced / 1000).toFixed(0)}k
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-12 pb-8 space-y-3">
          <Link href="/explore" className="btn-ghost text-sm">
            ← All Career Fields
          </Link>
        </div>
      </div>
    </main>
  );
}
