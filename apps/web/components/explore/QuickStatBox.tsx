"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

interface QuickStatBoxProps {
  label: string;
  value: string;
  color: string;
  delay?: number;
}

function parseValue(value: string): { prefix: string; num: number; suffix: string } {
  // Handle "$106,000" → prefix="$", num=106000, suffix=""
  // Handle "7%" → prefix="", num=7, suffix="%"
  // Handle "$85K" → prefix="$", num=85, suffix="K"
  const match = value.match(/^([^0-9]*)([0-9,]+)(.*)$/);
  if (!match) return { prefix: "", num: 0, suffix: value };
  return {
    prefix: match[1],
    num: parseInt(match[2].replace(/,/g, ""), 10),
    suffix: match[3],
  };
}

export default function QuickStatBox({ label, value, color, delay = 0 }: QuickStatBoxProps) {
  const parsed = parseValue(value);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay }}
      className="bg-surface-tertiary border border-border-primary rounded-lg p-4 text-center flex-1 min-w-[100px]"
    >
      <p className="text-2xl font-bold mb-1" style={{ color }}>
        <AnimatedCounter value={parsed.num} prefix={parsed.prefix} suffix={parsed.suffix} />
      </p>
      <p className="text-xs text-text-tertiary uppercase tracking-wider">{label}</p>
    </motion.div>
  );
}
