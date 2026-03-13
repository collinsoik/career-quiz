"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { CAREER_CLUSTERS } from "@pathfinder/shared";

export default function CareerDetailPage() {
  const params = useParams();
  const clusterId = params.clusterId as string;
  const careerId = params.careerId as string;

  const cluster = CAREER_CLUSTERS.find((c) => c.id === clusterId);
  if (!cluster) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-text-secondary mb-4">Not found</p>
          <Link href="/explore" className="btn-primary">Back to Explore</Link>
        </div>
      </main>
    );
  }

  let career = null;
  let pathwayName = "";
  for (const pathway of cluster.pathways) {
    const found = pathway.careers.find((c) => c.id === careerId);
    if (found) {
      career = found;
      pathwayName = pathway.name;
      break;
    }
  }

  if (!career) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-text-secondary mb-4">Career not found</p>
          <Link href={`/explore/${clusterId}`} className="btn-primary">Back to {cluster.name}</Link>
        </div>
      </main>
    );
  }

  const salaryEntry = career.salaryRange.entry;
  const salaryExp = career.salaryRange.experienced;

  const growthLabel =
    career.growth === "high" ? "High Growth (8%+ projected)"
    : career.growth === "moderate" ? "Moderate Growth (4-7%)"
    : career.growth === "stable" ? "Stable (1-3%)"
    : "Declining";

  const growthColor =
    career.growth === "high" ? "#22C55E"
    : career.growth === "moderate" ? "#3B82F6"
    : career.growth === "stable" ? "#F59E0B"
    : "#EF4444";

  return (
    <main className="min-h-screen px-4 py-8 relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-3xl opacity-10"
        style={{ backgroundColor: cluster.color }}
      />

      <div className="max-w-2xl mx-auto relative z-10">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-text-tertiary mb-6 flex-wrap">
          <Link href="/explore" className="hover:text-text-secondary transition-colors">
            Explore
          </Link>
          <span>/</span>
          <Link href={`/explore/${clusterId}`} className="hover:text-text-secondary transition-colors">
            {cluster.name}
          </Link>
          <span>/</span>
          <span className="text-text-primary">{career.title}</span>
        </div>

        {/* Hero */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">{career.emoji}</div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-text-primary mb-2">
            {career.title}
          </h1>
          <p className="text-lg text-text-secondary max-w-lg mx-auto">
            {career.hook}
          </p>
          <div className="flex items-center justify-center gap-3 mt-4">
            <span
              className="text-xs font-medium px-2.5 py-1 rounded-full"
              style={{ backgroundColor: cluster.color + "20", color: cluster.color }}
            >
              {cluster.name}
            </span>
            <span className="text-xs text-text-disabled">
              {pathwayName}
            </span>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          <div className="card text-center">
            <p className="text-xs text-text-tertiary uppercase tracking-wider mb-1">Education</p>
            <p className="text-sm font-semibold text-text-primary">{career.education}</p>
          </div>
          <div className="card text-center">
            <p className="text-xs text-text-tertiary uppercase tracking-wider mb-1">Salary Range</p>
            <p className="text-sm font-semibold text-text-primary">
              ${(salaryEntry / 1000).toFixed(0)}k – ${(salaryExp / 1000).toFixed(0)}k
            </p>
          </div>
          <div className="card text-center">
            <p className="text-xs text-text-tertiary uppercase tracking-wider mb-1">Job Growth</p>
            <p className="text-sm font-semibold" style={{ color: growthColor }}>
              {growthLabel}
            </p>
          </div>
        </div>

        {/* Salary Visualization */}
        <div className="card-elevated mb-8">
          <h2 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4">
            Salary Range
          </h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-text-secondary">Entry Level</span>
                <span className="font-semibold text-text-primary">
                  ${salaryEntry.toLocaleString()}
                </span>
              </div>
              <div className="h-3 bg-surface-tertiary rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: `${(salaryEntry / salaryExp) * 100}%`,
                    backgroundColor: cluster.color,
                    opacity: 0.6,
                  }}
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-text-secondary">Experienced</span>
                <span className="font-semibold text-text-primary">
                  ${salaryExp.toLocaleString()}
                </span>
              </div>
              <div className="h-3 bg-surface-tertiary rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full"
                  style={{
                    width: "100%",
                    backgroundColor: cluster.color,
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pb-8">
          <Link href={`/explore/${clusterId}`} className="btn-ghost text-sm">
            ← More in {cluster.name}
          </Link>
          <Link href="/" className="btn-primary text-sm">
            Take the Quiz
          </Link>
        </div>
      </div>
    </main>
  );
}
