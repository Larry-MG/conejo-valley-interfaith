"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

export function GoldenRuleQuote() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sage/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center"
      >
        <div className="text-6xl text-sage/30 font-serif mb-4">&ldquo;</div>
        <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl text-charcoal leading-relaxed bg-gradient-to-r from-charcoal via-deep-forest to-charcoal bg-clip-text">
          One should treat others as one would like others to treat them.
        </blockquote>
        <div className="mt-6 h-0.5 w-24 mx-auto bg-gradient-to-r from-sage to-terracotta rounded-full" />
        <p className="mt-4 text-warm-stone text-sm uppercase tracking-widest">
          The Golden Rule
        </p>
      </motion.div>
    </section>
  );
}
