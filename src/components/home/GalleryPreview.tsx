"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { staggerContainer, scaleIn } from "@/lib/animations";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { allGalleryImages } from "@/data/gallery";
import { ArrowRight } from "lucide-react";

export function GalleryPreview() {
  const previewImages = allGalleryImages.slice(0, 6);

  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Community in Action"
          subtitle="Moments of unity, service, and celebration from across the Conejo Valley."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
        >
          {previewImages.map((img, i) => (
            <motion.div
              key={img.id}
              variants={scaleIn}
              className={`relative overflow-hidden rounded-2xl group ${
                i === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div
                className={`relative ${
                  i === 0 ? "aspect-square" : "aspect-[4/3]"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes={
                    i === 0
                      ? "(max-width: 768px) 100vw, 66vw"
                      : "(max-width: 768px) 50vw, 33vw"
                  }
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 text-center"
        >
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-sage hover:text-deep-forest font-medium transition-colors group"
          >
            View Full Gallery
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
