"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { slideInLeft, slideInRight } from "@/lib/animations";

export function AboutCVIA() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={ref} className="py-24 lg:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInLeft}
          >
            <p className="text-terracotta font-medium text-sm tracking-wide uppercase mb-3">
              About CVIA
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal mb-6 leading-tight">
              Building Bridges Across Faiths
            </h2>
            <div className="space-y-4 text-warm-gray leading-relaxed">
              <p>
                The Conejo Valley Interfaith Association (CVIA) creates dialogue
                among clergy and interfaith representatives by celebrating
                commonalities while respecting differences, aiming to foster
                understanding, peace, and harmony.
              </p>
              <p>
                CVIA meets on the second Tuesday of each month for a 90-minute
                gathering paired with a light lunch, welcoming all faiths and
                backgrounds.
              </p>
              <p>
                For over 40 years, we have presented an annual Thanksgiving
                Community Service featuring music and messages from more than a
                dozen faith traditions.
              </p>
            </div>
            <div className="mt-8 flex gap-8">
              <div>
                <p className="font-serif text-3xl text-charcoal">40+</p>
                <p className="text-sm text-warm-gray">Years of Service</p>
              </div>
              <div>
                <p className="font-serif text-3xl text-charcoal">28</p>
                <p className="text-sm text-warm-gray">Member Organizations</p>
              </div>
              <div>
                <p className="font-serif text-3xl text-charcoal">12+</p>
                <p className="text-sm text-warm-gray">Faith Traditions</p>
              </div>
            </div>
          </motion.div>

          {/* Image with parallax */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInRight}
            className="relative"
          >
            <motion.div style={{ y: imageY }} className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-sage/20 to-terracotta/10 rounded-3xl blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/images/hero/cvia-gathering.webp"
                  alt="CVIA gathering"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
