"use client";

import { motion } from "framer-motion";

interface ImpactCalloutsProps {
  realWorldImpact: string;
  color: string;
}

export default function ImpactCallouts({ realWorldImpact, color }: ImpactCalloutsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-surface-secondary border border-border-primary rounded-xl p-5"
    >
      <p className="text-text-secondary leading-relaxed">{realWorldImpact}</p>
    </motion.div>
  );
}
