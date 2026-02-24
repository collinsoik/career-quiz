"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

interface WorkplaceCarouselProps {
  workplaces: string[];
  color: string;
}

export default function WorkplaceCarousel({ workplaces, color }: WorkplaceCarouselProps) {
  const constraintRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={constraintRef} className="overflow-hidden">
      <motion.div
        drag="x"
        dragConstraints={constraintRef}
        className="flex gap-3 cursor-grab active:cursor-grabbing"
      >
        {workplaces.map((place, idx) => (
          <motion.div
            key={place}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: idx * 0.08 }}
            whileHover={{ y: -4 }}
            className="shrink-0 bg-surface-secondary border border-border-primary rounded-lg px-5 py-4 min-w-[180px]"
          >
            <p className="text-sm font-medium text-text-primary whitespace-nowrap">{place}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
