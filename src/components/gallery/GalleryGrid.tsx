"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { scaleIn } from "@/lib/animations";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { galleryCategories, allGalleryImages } from "@/data/gallery";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryImage } from "@/types";

export function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);

  const filteredImages =
    activeCategory === "all"
      ? allGalleryImages
      : allGalleryImages.filter((img) => img.category === activeCategory);

  const currentIndex = lightboxImage
    ? filteredImages.findIndex((img) => img.id === lightboxImage.id)
    : -1;

  const navigateLightbox = useCallback(
    (direction: "prev" | "next") => {
      if (currentIndex === -1) return;
      const newIndex =
        direction === "prev"
          ? (currentIndex - 1 + filteredImages.length) % filteredImages.length
          : (currentIndex + 1) % filteredImages.length;
      setLightboxImage(filteredImages[newIndex]);
    },
    [currentIndex, filteredImages]
  );

  useEffect(() => {
    if (!lightboxImage) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxImage(null);
      if (e.key === "ArrowLeft") navigateLightbox("prev");
      if (e.key === "ArrowRight") navigateLightbox("next");
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [lightboxImage, navigateLightbox]);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeading
        title="Gallery"
        subtitle="Moments of unity, service, and celebration from across the Conejo Valley."
      />

      {/* Category tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        <button
          onClick={() => setActiveCategory("all")}
          className={`relative px-5 py-2 text-sm font-medium rounded-full transition-colors ${
            activeCategory === "all"
              ? "text-white"
              : "text-warm-gray hover:text-charcoal hover:bg-sand/30"
          }`}
        >
          {activeCategory === "all" && (
            <motion.div
              layoutId="activeGalleryTab"
              className="absolute inset-0 bg-sage rounded-full"
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
            />
          )}
          <span className="relative z-10">All</span>
        </button>
        {galleryCategories.map((cat) => (
          <button
            key={cat.slug}
            onClick={() => setActiveCategory(cat.slug)}
            className={`relative px-5 py-2 text-sm font-medium rounded-full transition-colors ${
              activeCategory === cat.slug
                ? "text-white"
                : "text-warm-gray hover:text-charcoal hover:bg-sand/30"
            }`}
          >
            {activeCategory === cat.slug && (
              <motion.div
                layoutId="activeGalleryTab"
                className="absolute inset-0 bg-sage rounded-full"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-10">{cat.name}</span>
          </button>
        ))}
      </div>

      {/* Image grid */}
      <motion.div layout className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        <AnimatePresence mode="popLayout">
          {filteredImages.map((img) => (
            <motion.div
              key={img.id}
              layout
              variants={scaleIn}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, scale: 0.8 }}
              className="break-inside-avoid cursor-pointer group"
              onClick={() => setLightboxImage(img)}
            >
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={400}
                  height={300}
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-charcoal/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            {/* Close */}
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            {/* Navigation */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox("prev");
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
              aria-label="Previous"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateLightbox("next");
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
              aria-label="Next"
            >
              <ChevronRight size={24} />
            </button>

            {/* Image */}
            <motion.div
              key={lightboxImage.id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative max-w-5xl max-h-[85vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightboxImage.src}
                alt={lightboxImage.alt}
                width={1200}
                height={800}
                className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
                priority
              />
            </motion.div>

            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm">
              {currentIndex + 1} / {filteredImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
