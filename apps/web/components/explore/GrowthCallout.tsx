"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

interface GrowthCalloutProps {
  growthOutlook: { percentage: string; description: string; trend: "high" | "moderate" | "stable" };
  color: string;
}

export default function GrowthCallout({ growthOutlook, color }: GrowthCalloutProps) {
  const pctNum = parseInt(growthOutlook.percentage.replace(/[^0-9]/g, ""), 10);
  const trendColor =
    growthOutlook.trend === "high" ? "#4ADE80" :
    growthOutlook.trend === "moderate" ? "#FBBF24" : "#9B9BAF";
  const trendLabel =
    growthOutlook.trend === "high" ? "High Demand" :
    growthOutlook.trend === "moderate" ? "Growing" : "Stable";

  return (
    <div className="flex flex-col sm:flex-row items-center gap-6">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
        className="text-center"
      >
        <p className="text-5xl font-bold" style={{ color }}>
          <AnimatedCounter value={pctNum} suffix="%" duration={1500} />
        </p>
        <p className="text-xs text-text-tertiary mt-1">Projected Growth (10yr)</p>
      </motion.div>

      <div className="flex-1">
        <div className="flex items-center gap-2 mb-2">
          <span
            className="inline-flex items-center gap-1 text-sm font-semibold px-3 py-1 rounded-full"
            style={{
              backgroundColor: trendColor + "20",
              color: trendColor,
            }}
          >
            {growthOutlook.trend === "high" ? "↑" : growthOutlook.trend === "moderate" ? "→" : "—"}
            {trendLabel}
          </span>
        </div>
        <p className="text-text-secondary text-sm leading-relaxed">{growthOutlook.description}</p>
      </div>
    </div>
  );
}
