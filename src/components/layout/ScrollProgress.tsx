"use client";

import { motion } from "framer-motion";
import { useScrollProgress } from "@/hooks/useScrollProgress";

export function ScrollProgress() {
  const scaleX = useScrollProgress();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-0.5 z-[100] origin-left bg-gradient-to-r from-sage via-terracotta to-warm-stone"
      style={{ scaleX }}
    />
  );
}
