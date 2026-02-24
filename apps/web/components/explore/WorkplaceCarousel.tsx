"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

interface WorkplaceCarouselProps {
  workplaces: string[];
  color: string;
}

export default function WorkplaceCarousel({ workplaces, color }: WorkplaceCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [dragLeft, setDragLeft] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    const measure = () => {
      const overflow = content.scrollWidth - container.clientWidth;
      setDragLeft(overflow > 0 ? -overflow : 0);
    };

    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(container);
    return () => ro.disconnect();
  }, [workplaces]);

  return (
    <div ref={containerRef} className="overflow-hidden">
      <motion.div
        ref={contentRef}
        drag="x"
        dragConstraints={{ left: dragLeft, right: 0 }}
        className="flex gap-3 cursor-grab active:cursor-grabbing w-max"
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
