"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  alignment = "center",
  className,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInUp}
      className={cn(
        alignment === "center" ? "text-center" : "text-left",
        "mb-12",
        className
      )}
    >
      <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-warm-gray text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          "mt-4 h-0.5 w-16 bg-gradient-to-r from-sage to-terracotta rounded-full",
          alignment === "center" ? "mx-auto" : ""
        )}
      />
    </motion.div>
  );
}
