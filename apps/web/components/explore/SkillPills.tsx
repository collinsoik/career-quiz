"use client";

import { motion } from "framer-motion";

interface SkillPillsProps {
  skills: { technical: string[]; soft: string[] };
  color: string;
}

export default function SkillPills({ skills, color }: SkillPillsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h3 className="text-sm font-semibold text-text-tertiary uppercase tracking-wider mb-3">
          Technical Skills
        </h3>
        <div className="flex flex-wrap gap-2">
          {skills.technical.map((skill, idx) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.06 }}
              className="text-sm font-medium px-3 py-1.5 rounded-full"
              style={{
                backgroundColor: color + "15",
                color: color,
              }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-sm font-semibold text-text-tertiary uppercase tracking-wider mb-3">
          Soft Skills
        </h3>
        <div className="flex flex-wrap gap-2">
          {skills.soft.map((skill, idx) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.06 }}
              className="text-sm font-medium px-3 py-1.5 rounded-full bg-surface-tertiary text-text-secondary"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
}
