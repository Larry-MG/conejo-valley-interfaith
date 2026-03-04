"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { fadeInUp } from "@/lib/animations";

export function CTASection() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sage to-deep-forest" />
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-terracotta/10 rounded-full blur-[100px]"
          animate={{ x: [0, -30, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-80 h-80 bg-warm-white/5 rounded-full blur-[80px]"
          animate={{ x: [0, 20, 0], y: [0, -20, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
        className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center"
      >
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white mb-6 leading-tight">
          Join Our Interfaith Community
        </h2>
        <p className="text-white/80 text-lg mb-10 leading-relaxed">
          Whether you want to attend an event, volunteer for a service project,
          or connect with people of different faiths, there&apos;s a place for
          you here.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3.5 text-base font-medium text-sage bg-white hover:bg-cream rounded-full transition-colors shadow-lg"
          >
            Get Involved
          </Link>
          <Link
            href="/events"
            className="inline-flex items-center px-8 py-3.5 text-base font-medium text-white border-2 border-white/30 hover:border-white hover:bg-white/10 rounded-full transition-colors"
          >
            View Events
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
