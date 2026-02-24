"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface DayTimelineProps {
  typicalDay: string;
  color: string;
}

export default function DayTimeline({ typicalDay, color }: DayTimelineProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-surface-secondary border border-border-primary rounded-xl overflow-hidden"
    >
      <div className="flex">
        <div className="w-1 shrink-0" style={{ backgroundColor: color }} />
        <div className="p-5">
          <p className="text-text-secondary leading-relaxed">{typicalDay}</p>
        </div>
      </div>
    </motion.div>
  );
}
