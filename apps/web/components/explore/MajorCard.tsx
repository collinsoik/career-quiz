"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { MajorArticle } from "@pathfinder/shared";
import { STEM_FIELDS } from "@pathfinder/shared";
import FieldBadge from "./FieldBadge";

interface MajorCardProps {
  major: MajorArticle;
  index: number;
}

export default function MajorCard({ major, index }: MajorCardProps) {
  const field = STEM_FIELDS.find((f) => f.id === major.fieldId);
  const color = field?.color || "#7C5CFC";

  const trendLabel = major.growthOutlook.trend === "high" ? "High Growth" : major.growthOutlook.trend === "moderate" ? "Growing" : "Stable";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
    >
      <Link href={`/explore/${major.id}`} className="block group">
        <div
          className="bg-surface-secondary border border-border-primary rounded-xl overflow-hidden shadow-soft transition-all duration-200 group-hover:shadow-elevated group-hover:-translate-y-1"
        >
          {/* Colored top border */}
          <div className="h-1" style={{ backgroundColor: color }} />

          <div className="p-5">
            {/* Icon + Title */}
            <div className="flex items-start gap-3 mb-3">
              <span className="text-3xl">{major.icon}</span>
              <div className="min-w-0 flex-1">
                <h3 className="text-base font-semibold text-text-primary group-hover:text-white transition-colors leading-tight">
                  {major.title}
                </h3>
              </div>
            </div>

            {/* Hook */}
            <p className="text-sm text-text-secondary mb-4 line-clamp-2 leading-relaxed">
              {major.hook}
            </p>

            {/* Bottom row */}
            <div className="flex items-center justify-between gap-2">
              <FieldBadge fieldId={major.fieldId} />
              <div className="flex items-center gap-3 text-xs text-text-tertiary">
                <span
                  className="flex items-center gap-1"
                  style={{ color: major.growthOutlook.trend === "high" ? "#4ADE80" : major.growthOutlook.trend === "moderate" ? "#FBBF24" : "#9B9BAF" }}
                >
                  {major.growthOutlook.trend === "high" ? "↑" : major.growthOutlook.trend === "moderate" ? "→" : "—"}
                  {trendLabel}
                </span>
                <span>{major.salary.mid}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
