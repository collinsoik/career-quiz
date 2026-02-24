"use client";

import { motion } from "framer-motion";
import type { MajorArticle } from "@pathfinder/shared";
import QuickStatBox from "./QuickStatBox";

interface HeroSectionProps {
  major: MajorArticle;
  color: string;
}

export default function HeroSection({ major, color }: HeroSectionProps) {
  return (
    <div className="mb-10">
      {/* Icon + Title */}
      <div className="text-center mb-6">
        <motion.div
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", bounce: 0.5, duration: 0.8 }}
          className="text-6xl mb-4 inline-block"
        >
          {major.icon}
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl md:text-4xl font-bold text-text-primary mb-3"
        >
          {major.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-text-secondary text-lg max-w-xl mx-auto leading-relaxed"
        >
          {major.hook}
        </motion.p>
      </div>

      {/* Quick Stats */}
      <div className="flex gap-3 max-w-lg mx-auto">
        <QuickStatBox label="Mid Salary" value={major.salary.mid} color={color} delay={0.4} />
        <QuickStatBox label="Growth" value={major.growthOutlook.percentage} color={color} delay={0.5} />
        <QuickStatBox label="Entry Salary" value={major.salary.entry} color={color} delay={0.6} />
      </div>
    </div>
  );
}
