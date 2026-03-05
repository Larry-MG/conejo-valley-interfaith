"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const wordVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3 + i * 0.08,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const mosaicImages = [
  { src: "/images/hero/cvia-gathering.webp", alt: "Interfaith leaders gathering" },
  { src: "/images/gallery/birthday-boxes-2023/img-001.webp", alt: "Youth birthday box project" },
  { src: "/images/gallery/general/img-006.webp", alt: "Toiletry drive volunteers" },
  { src: "/images/gallery/general/img-005.webp", alt: "Backpack drive community group" },
  { src: "/images/gallery/thanksgiving-2025/img-001.webp", alt: "Thanksgiving interfaith service" },
  { src: "/images/gallery/school-supplies-2023/img-001.webp", alt: "School supplies volunteers" },
];

const tileVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.4 + i * 0.1,
      duration: 0.5,
      ease: "easeOut" as const,
    },
  }),
};

export function HeroSection() {
  const words = "Partnering Together To Serve Our Community".split(" ");

  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center overflow-hidden">
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-cream" />
        <motion.div
          className="hidden md:block absolute -top-1/3 -left-1/4 h-[600px] w-[600px] rounded-full bg-sage/20 blur-[120px]"
          animate={{ x: [0, 80, 0], y: [0, -40, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="hidden md:block absolute -bottom-1/4 -right-1/4 h-[500px] w-[500px] rounded-full bg-terracotta/15 blur-[120px]"
          animate={{ x: [0, -60, 0], y: [0, 50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="hidden md:block absolute top-1/3 left-1/2 h-[400px] w-[400px] rounded-full bg-warm-stone/15 blur-[100px]"
          animate={{ x: [0, 50, 0], y: [0, -60, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Floating leaves — positioned at viewport edges to frame content */}
      {/* Green — top-left corner */}
      <motion.svg
        className="hidden md:block absolute top-24 left-[3%] w-14 h-14 text-[#7CB342] opacity-25"
        viewBox="0 0 24 24"
        animate={{ y: [0, -18, 0], rotate: [-30, -10, -30] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      >
        <path fill="currentColor" d="M21.33 2.53c-.37-.14-.79-.05-1.07.22c-.08.07-1.86 1.77-4.85.27c-2.05-1.03-5.6-1.64-8.88 0C2.24 5.18.73 10.61 3.1 15.37c.38.76.83 1.42 1.34 2.01c-.29 1.4-.45 2.94-.45 4.62h2c0-1.15.07-2.18.21-3.12c.67.41 1.39.72 2.17.9c.66.16 1.32.22 1.97.22c2.43 0 4.64-.96 5.72-1.77c1.82-1.37 3.32-2.67 4.8-5.89c1.4-3.07 1.12-8.7 1.1-8.94a.99.99 0 0 0-.64-.87Zm-2.28 8.98c-1.29 2.81-2.49 3.85-4.18 5.13c-1.1.83-3.7 1.75-6.03 1.2c-.82-.19-1.55-.56-2.19-1.08c1.85-6.59 7.09-6.73 7.35-6.73v-2c-.17 0-3.49.04-6.29 2.83c-1.11 1.1-1.95 2.48-2.57 4.1c-.09-.15-.17-.3-.25-.46c-1.65-3.3-1.14-7.82 2.54-9.68c1.16-.58 2.37-.81 3.49-.81c1.4 0 2.68.35 3.59.81c2.36 1.18 4.24.92 5.48.42c-.02 1.8-.18 4.6-.95 6.29Z" />
      </motion.svg>
      {/* Orange — top-right corner */}
      <motion.svg
        className="hidden md:block absolute top-14 right-[2%] w-11 h-11 text-[#E8751A] opacity-22"
        viewBox="0 0 24 24"
        animate={{ y: [0, -14, 0], rotate: [20, -10, 20] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      >
        <path fill="currentColor" d="M21.33 2.53c-.37-.14-.79-.05-1.07.22c-.08.07-1.86 1.77-4.85.27c-2.05-1.03-5.6-1.64-8.88 0C2.24 5.18.73 10.61 3.1 15.37c.38.76.83 1.42 1.34 2.01c-.29 1.4-.45 2.94-.45 4.62h2c0-1.15.07-2.18.21-3.12c.67.41 1.39.72 2.17.9c.66.16 1.32.22 1.97.22c2.43 0 4.64-.96 5.72-1.77c1.82-1.37 3.32-2.67 4.8-5.89c1.4-3.07 1.12-8.7 1.1-8.94a.99.99 0 0 0-.64-.87Zm-2.28 8.98c-1.29 2.81-2.49 3.85-4.18 5.13c-1.1.83-3.7 1.75-6.03 1.2c-.82-.19-1.55-.56-2.19-1.08c1.85-6.59 7.09-6.73 7.35-6.73v-2c-.17 0-3.49.04-6.29 2.83c-1.11 1.1-1.95 2.48-2.57 4.1c-.09-.15-.17-.3-.25-.46c-1.65-3.3-1.14-7.82 2.54-9.68c1.16-.58 2.37-.81 3.49-.81c1.4 0 2.68.35 3.59.81c2.36 1.18 4.24.92 5.48.42c-.02 1.8-.18 4.6-.95 6.29Z" />
      </motion.svg>
      {/* Golden — bottom-left corner */}
      <motion.svg
        className="hidden md:block absolute bottom-20 left-[2%] w-10 h-10 text-[#DAA520] opacity-20"
        viewBox="0 0 24 24"
        animate={{ y: [0, -20, 0], rotate: [10, -30, 10] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      >
        <path fill="currentColor" d="M21.33 2.53c-.37-.14-.79-.05-1.07.22c-.08.07-1.86 1.77-4.85.27c-2.05-1.03-5.6-1.64-8.88 0C2.24 5.18.73 10.61 3.1 15.37c.38.76.83 1.42 1.34 2.01c-.29 1.4-.45 2.94-.45 4.62h2c0-1.15.07-2.18.21-3.12c.67.41 1.39.72 2.17.9c.66.16 1.32.22 1.97.22c2.43 0 4.64-.96 5.72-1.77c1.82-1.37 3.32-2.67 4.8-5.89c1.4-3.07 1.12-8.7 1.1-8.94a.99.99 0 0 0-.64-.87Zm-2.28 8.98c-1.29 2.81-2.49 3.85-4.18 5.13c-1.1.83-3.7 1.75-6.03 1.2c-.82-.19-1.55-.56-2.19-1.08c1.85-6.59 7.09-6.73 7.35-6.73v-2c-.17 0-3.49.04-6.29 2.83c-1.11 1.1-1.95 2.48-2.57 4.1c-.09-.15-.17-.3-.25-.46c-1.65-3.3-1.14-7.82 2.54-9.68c1.16-.58 2.37-.81 3.49-.81c1.4 0 2.68.35 3.59.81c2.36 1.18 4.24.92 5.48.42c-.02 1.8-.18 4.6-.95 6.29Z" />
      </motion.svg>
      {/* Crimson — mid right edge */}
      <motion.svg
        className="hidden md:block absolute top-[48%] right-[1%] w-12 h-12 text-[#C62828] opacity-20"
        viewBox="0 0 24 24"
        animate={{ y: [0, -16, 0], rotate: [-15, 15, -15] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      >
        <path fill="currentColor" d="M21.33 2.53c-.37-.14-.79-.05-1.07.22c-.08.07-1.86 1.77-4.85.27c-2.05-1.03-5.6-1.64-8.88 0C2.24 5.18.73 10.61 3.1 15.37c.38.76.83 1.42 1.34 2.01c-.29 1.4-.45 2.94-.45 4.62h2c0-1.15.07-2.18.21-3.12c.67.41 1.39.72 2.17.9c.66.16 1.32.22 1.97.22c2.43 0 4.64-.96 5.72-1.77c1.82-1.37 3.32-2.67 4.8-5.89c1.4-3.07 1.12-8.7 1.1-8.94a.99.99 0 0 0-.64-.87Zm-2.28 8.98c-1.29 2.81-2.49 3.85-4.18 5.13c-1.1.83-3.7 1.75-6.03 1.2c-.82-.19-1.55-.56-2.19-1.08c1.85-6.59 7.09-6.73 7.35-6.73v-2c-.17 0-3.49.04-6.29 2.83c-1.11 1.1-1.95 2.48-2.57 4.1c-.09-.15-.17-.3-.25-.46c-1.65-3.3-1.14-7.82 2.54-9.68c1.16-.58 2.37-.81 3.49-.81c1.4 0 2.68.35 3.59.81c2.36 1.18 4.24.92 5.48.42c-.02 1.8-.18 4.6-.95 6.29Z" />
      </motion.svg>
      {/* Sage — bottom-right corner */}
      <motion.svg
        className="hidden md:block absolute bottom-16 right-[4%] w-9 h-9 text-[#8B9A6E] opacity-18"
        viewBox="0 0 24 24"
        animate={{ y: [0, -12, 0], rotate: [30, 5, 30] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      >
        <path fill="currentColor" d="M21.33 2.53c-.37-.14-.79-.05-1.07.22c-.08.07-1.86 1.77-4.85.27c-2.05-1.03-5.6-1.64-8.88 0C2.24 5.18.73 10.61 3.1 15.37c.38.76.83 1.42 1.34 2.01c-.29 1.4-.45 2.94-.45 4.62h2c0-1.15.07-2.18.21-3.12c.67.41 1.39.72 2.17.9c.66.16 1.32.22 1.97.22c2.43 0 4.64-.96 5.72-1.77c1.82-1.37 3.32-2.67 4.8-5.89c1.4-3.07 1.12-8.7 1.1-8.94a.99.99 0 0 0-.64-.87Zm-2.28 8.98c-1.29 2.81-2.49 3.85-4.18 5.13c-1.1.83-3.7 1.75-6.03 1.2c-.82-.19-1.55-.56-2.19-1.08c1.85-6.59 7.09-6.73 7.35-6.73v-2c-.17 0-3.49.04-6.29 2.83c-1.11 1.1-1.95 2.48-2.57 4.1c-.09-.15-.17-.3-.25-.46c-1.65-3.3-1.14-7.82 2.54-9.68c1.16-.58 2.37-.81 3.49-.81c1.4 0 2.68.35 3.59.81c2.36 1.18 4.24.92 5.48.42c-.02 1.8-.18 4.6-.95 6.29Z" />
      </motion.svg>

      {/* Content - Split Layout */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div className="text-center lg:text-left order-1">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-charcoal leading-[1.1] mb-8">
              {words.map((word, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={wordVariants}
                  className="inline-block mr-[0.3em]"
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="text-warm-gray text-lg sm:text-xl max-w-xl mb-10 leading-relaxed mx-auto lg:mx-0"
            >
              Creating a sacred space where people of all beliefs come together
              to foster understanding, peace, and harmony in the Conejo Valley.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center lg:items-start justify-center lg:justify-start gap-4"
            >
              <Link
                href="/events"
                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-sage hover:bg-deep-forest rounded-full transition-colors shadow-lg shadow-sage/20"
              >
                Upcoming Events
              </Link>
              <Link
                href="/organizations"
                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-sage border-2 border-sage hover:bg-sage hover:text-white rounded-full transition-colors"
              >
                Our Community
              </Link>
            </motion.div>

            <div className="mt-8 lg:hidden relative overflow-hidden rounded-2xl shadow-lg aspect-[4/3]">
              <Image
                src={mosaicImages[0].src}
                alt={mosaicImages[0].alt}
                fill
                sizes="100vw"
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Right: Mosaic Grid */}
          <div className="order-2 hidden lg:block">
            <div className="grid grid-cols-4 grid-rows-4 gap-2.5 max-w-lg mx-auto lg:max-w-none" style={{ aspectRatio: "1" }}>
              {/* img1 - large, top-left spanning 2x2 */}
              <motion.div
                custom={0}
                initial="hidden"
                animate="visible"
                variants={tileVariants}
                className="col-span-2 row-span-2 relative overflow-hidden rounded-2xl shadow-lg"
              >
                <Image
                  src={mosaicImages[0].src}
                  alt={mosaicImages[0].alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                  priority
                />
              </motion.div>

              {/* img2 - top-right */}
              <motion.div
                custom={1}
                initial="hidden"
                animate="visible"
                variants={tileVariants}
                className="col-span-1 row-span-1 relative overflow-hidden rounded-2xl shadow-lg"
              >
                <Image
                  src={mosaicImages[1].src}
                  alt={mosaicImages[1].alt}
                  fill
                  sizes="(max-width: 768px) 25vw, 12vw"
                  className="object-cover"
                />
              </motion.div>

              {/* img3 - top-right corner */}
              <motion.div
                custom={2}
                initial="hidden"
                animate="visible"
                variants={tileVariants}
                className="col-span-1 row-span-1 relative overflow-hidden rounded-2xl shadow-lg"
              >
                <Image
                  src={mosaicImages[2].src}
                  alt={mosaicImages[2].alt}
                  fill
                  sizes="(max-width: 768px) 25vw, 12vw"
                  className="object-cover"
                />
              </motion.div>

              {/* img4 - right side spanning 2x2 */}
              <motion.div
                custom={3}
                initial="hidden"
                animate="visible"
                variants={tileVariants}
                className="col-span-2 row-span-2 relative overflow-hidden rounded-2xl shadow-lg"
              >
                <Image
                  src={mosaicImages[3].src}
                  alt={mosaicImages[3].alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover"
                />
              </motion.div>

              {/* img5 - bottom-left */}
              <motion.div
                custom={4}
                initial="hidden"
                animate="visible"
                variants={tileVariants}
                className="col-span-1 row-span-1 relative overflow-hidden rounded-2xl shadow-lg"
              >
                <Image
                  src={mosaicImages[4].src}
                  alt={mosaicImages[4].alt}
                  fill
                  sizes="(max-width: 768px) 25vw, 12vw"
                  className="object-cover"
                />
              </motion.div>

              {/* img6 - bottom-left second */}
              <motion.div
                custom={5}
                initial="hidden"
                animate="visible"
                variants={tileVariants}
                className="col-span-1 row-span-1 relative overflow-hidden rounded-2xl shadow-lg"
              >
                <Image
                  src={mosaicImages[5].src}
                  alt={mosaicImages[5].alt}
                  fill
                  sizes="(max-width: 768px) 25vw, 12vw"
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="text-warm-stone" size={28} />
        </motion.div>
      </motion.div>
    </section>
  );
}
