"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ArticleSectionProps {
  title: string;
  children: ReactNode;
  delay?: number;
}

export default function ArticleSection({ title, children, delay = 0 }: ArticleSectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className="mb-10"
    >
      <h2 className="text-lg font-bold text-text-primary mb-4 uppercase tracking-wider">
        {title}
      </h2>
      {children}
    </motion.section>
  );
}
