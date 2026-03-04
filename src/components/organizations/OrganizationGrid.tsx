"use client";

import { motion } from "framer-motion";
import { staggerContainer, scaleIn } from "@/lib/animations";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { organizations } from "@/data/organizations";
import { Users } from "lucide-react";

export function OrganizationGrid() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeading
        title="Our Faith Community"
        subtitle="28 organizations united across faith traditions, working together for peace, understanding, and service in the Conejo Valley."
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        variants={staggerContainer}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3"
      >
        {organizations.map((org) => (
          <motion.div
            key={org.id}
            variants={scaleIn}
            whileHover={{ y: -4, transition: { type: "spring", stiffness: 300 } }}
            className="group relative px-4 py-3.5 bg-warm-white rounded-xl border border-sand/50 hover:border-sage/30 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center gap-3">
              <div className="shrink-0 w-8 h-8 rounded-lg bg-cream flex items-center justify-center group-hover:bg-sage/10 transition-colors">
                <Users size={14} className="text-warm-stone group-hover:text-sage transition-colors" />
              </div>
              <h3 className="font-medium text-charcoal text-sm leading-snug min-w-0">
                {org.name}
              </h3>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
