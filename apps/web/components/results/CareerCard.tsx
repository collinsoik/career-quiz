"use client";

import Link from "next/link";
import type { Career } from "@pathfinder/shared";

interface CareerCardProps {
  career: Career;
  rank: number;
}

export default function CareerCard({ career, rank }: CareerCardProps) {
  return (
    <Link
      href={`/explore/${career.clusterId}/${career.id}`}
      className="card flex items-start gap-4 animate-slide-in-right hover:ring-2 hover:ring-accent/40 transition-shadow cursor-pointer"
      style={{ animationDelay: `${rank * 100}ms` }}
    >
      {/* Rank */}
      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-surface-tertiary flex items-center justify-center">
        <span className="text-sm font-bold text-text-tertiary">#{rank}</span>
      </div>

      {/* Icon */}
      <div className="flex-shrink-0 text-2xl">{career.icon}</div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <h3 className="text-base font-semibold text-text-primary">{career.title}</h3>
        <p className="text-sm text-text-secondary mt-1 leading-relaxed">
          {career.description}
        </p>
        <div className="flex gap-2 mt-2">
          <span
            className="text-xs font-medium px-2 py-0.5 rounded-full"
            style={{
              backgroundColor: career.clusterColor + "20",
              color: career.clusterColor,
            }}
          >
            {career.clusterName}
          </span>
        </div>
      </div>
    </Link>
  );
}
