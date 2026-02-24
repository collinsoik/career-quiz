"use client";

import { motion } from "framer-motion";

interface CoursePillsProps {
  courses: string[];
  color: string;
}

export default function CoursePills({ courses, color }: CoursePillsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {courses.map((course, idx) => (
        <motion.span
          key={course}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: idx * 0.05 }}
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center text-sm font-medium px-3 py-1.5 rounded-full border cursor-default"
          style={{
            borderColor: color + "40",
            backgroundColor: color + "10",
            color: color,
          }}
        >
          {course}
        </motion.span>
      ))}
    </div>
  );
}
