"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import { servicePartners } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ServicePartners() {
  // Duplicate the list for seamless infinite scroll
  const doubled = [...servicePartners, ...servicePartners];

  return (
    <section className="py-24 lg:py-32 bg-warm-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Service Partners"
          subtitle="Working hand in hand with local organizations to serve the Conejo Valley community."
        />
      </div>

      {/* Scrolling marquee */}
      <div className="relative mt-12">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-warm-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-warm-white to-transparent z-10" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="flex animate-[scroll_40s_linear_infinite]">
            {doubled.map((partner, i) => (
              <div
                key={`${partner}-${i}`}
                className="shrink-0 mx-4 px-6 py-3 bg-cream rounded-full border border-sand/50 text-sm text-warm-gray hover:text-charcoal hover:border-sage/30 transition-colors whitespace-nowrap"
              >
                {partner}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
