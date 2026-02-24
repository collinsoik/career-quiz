"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { MajorArticle } from "@pathfinder/shared";

interface MajorNavFooterProps {
  prev: MajorArticle | null;
  next: MajorArticle | null;
}

export default function MajorNavFooter({ prev, next }: MajorNavFooterProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-12 mb-8"
    >
      {/* Take the Quiz CTA */}
      <div className="text-center mb-8">
        <Link href="/" className="btn-primary px-8 py-3 text-base">
          Take the Quiz
        </Link>
      </div>

      {/* Prev / Next */}
      <div className="flex items-center justify-between gap-4">
        {prev ? (
          <Link
            href={`/explore/${prev.id}`}
            className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            <span>←</span>
            <span className="hidden sm:inline">{prev.icon} {prev.title}</span>
            <span className="sm:hidden">Previous</span>
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link
            href={`/explore/${next.id}`}
            className="flex items-center gap-2 text-sm text-text-secondary hover:text-text-primary transition-colors"
          >
            <span className="hidden sm:inline">{next.title} {next.icon}</span>
            <span className="sm:hidden">Next</span>
            <span>→</span>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </motion.div>
  );
}
