"use client";

import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

interface SalaryChartProps {
  salary: { entry: string; mid: string; experienced: string };
  color: string;
}

function parseSalary(s: string): number {
  return parseInt(s.replace(/[^0-9]/g, ""), 10);
}

export default function SalaryChart({ salary, color }: SalaryChartProps) {
  const entry = parseSalary(salary.entry);
  const mid = parseSalary(salary.mid);
  const experienced = parseSalary(salary.experienced);
  const max = experienced;

  const stages = [
    { label: "Entry Level", value: entry, raw: salary.entry },
    { label: "Mid Career", value: mid, raw: salary.mid },
    { label: "Experienced", value: experienced, raw: salary.experienced },
  ];

  return (
    <div className="space-y-4">
      {stages.map((stage, idx) => {
        const pct = (stage.value / max) * 100;
        return (
          <motion.div
            key={stage.label}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.15 }}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm text-text-secondary">{stage.label}</span>
              <span className="text-sm font-bold" style={{ color }}>
                <AnimatedCounter value={stage.value} prefix="$" suffix="" duration={1200} />
              </span>
            </div>
            <div className="h-3 bg-surface-tertiary rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ backgroundColor: color }}
                initial={{ width: 0 }}
                whileInView={{ width: `${pct}%` }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.15 + 0.2, ease: "easeOut" }}
              />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
