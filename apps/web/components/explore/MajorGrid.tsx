"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { MajorArticle } from "@pathfinder/shared";
import MajorCard from "./MajorCard";

interface MajorGridProps {
  majors: MajorArticle[];
}

export default function MajorGrid({ majors }: MajorGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <AnimatePresence mode="popLayout">
        {majors.map((major, idx) => (
          <motion.div
            key={major.id}
            layout
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <MajorCard major={major} index={idx} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
