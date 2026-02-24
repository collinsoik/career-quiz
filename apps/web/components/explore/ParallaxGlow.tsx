"use client";

import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxGlowProps {
  color: string;
}

export default function ParallaxGlow({ color }: ParallaxGlowProps) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "60%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.12, 0.06, 0.1]);

  return (
    <motion.div
      className="fixed top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-3xl pointer-events-none z-0"
      style={{
        backgroundColor: color,
        y,
        opacity,
      }}
    />
  );
}
