"use client";

import { motion } from "framer-motion";
import { STEM_FIELDS } from "@pathfinder/shared";

interface CategoryFilterProps {
  activeField: string | null;
  onSelect: (fieldId: string | null) => void;
}

export default function CategoryFilter({ activeField, onSelect }: CategoryFilterProps) {
  const allOption = { id: null, name: "All", color: "#7C5CFC", icon: "🔬" };
  const options = [allOption, ...STEM_FIELDS.map((f) => ({ ...f, id: f.id as string | null }))];

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {options.map((option) => {
        const isActive = activeField === option.id;
        return (
          <motion.button
            key={option.id ?? "all"}
            onClick={() => onSelect(option.id)}
            className="relative inline-flex items-center gap-1.5 text-sm font-medium px-4 py-2 rounded-full border transition-colors"
            style={{
              borderColor: isActive ? option.color : "rgba(58, 58, 80, 0.5)",
              backgroundColor: isActive ? option.color + "20" : "transparent",
              color: isActive ? option.color : "#9B9BAF",
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>{option.icon}</span>
            <span>{option.name}</span>
            {isActive && (
              <motion.div
                layoutId="activeFilter"
                className="absolute inset-0 rounded-full border-2"
                style={{ borderColor: option.color }}
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </motion.button>
        );
      })}
    </div>
  );
}
