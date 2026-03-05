"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { slideInLeft, slideInRight } from "@/lib/animations";

export function AboutWIN() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-warm-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image with parallax */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInLeft}
            className="relative order-2 lg:order-1"
          >
            <motion.div style={{ y: imageY }} className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-terracotta/15 to-sage/10 rounded-3xl blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/images/hero/win-group.webp"
                  alt="Women's Interfaith Network"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={slideInRight}
            className="order-1 lg:order-2"
          >
            <p className="text-terracotta font-medium text-sm tracking-wide uppercase mb-3">
              Women&apos;s Interfaith Network
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-charcoal mb-6 leading-tight">
              Strength Together
            </h2>
            <div className="space-y-4 text-warm-gray leading-relaxed">
              <p>
                Founded in Summer 2016 when about ten women from various faiths
                got together to help a Syrian refugee family settle here in the
                U.S., WIN has grown to include over 21 houses of faith.
              </p>
              <p>
                We recognize that we have strength together more than we have
                alone. Through drives, fundraisers, and volunteer projects, WIN
                makes a tangible difference in our community every month.
              </p>
            </div>

            {/* Service projects */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              {[
                "Suits for Soldiers",
                "Coat & Jean Drives",
                "Foster Care Gifts",
                "Birthday Boxes",
                "Diaper Drives",
                "School Supplies",
              ].map((project) => (
                <div
                  key={project}
                  className="flex items-center gap-2 text-sm text-warm-gray"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-terracotta shrink-0" />
                  {project}
                </div>
              ))}
            </div>

            <div className="mt-8 flex gap-8">
              <div>
                <p className="font-serif text-3xl text-charcoal">21+</p>
                <p className="text-sm text-warm-gray">Houses of Faith</p>
              </div>
              <div>
                <p className="font-serif text-3xl text-charcoal">13</p>
                <p className="text-sm text-warm-gray">Service Partners</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
