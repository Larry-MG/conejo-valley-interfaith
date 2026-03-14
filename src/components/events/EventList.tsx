"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer, fadeInUp, scaleIn } from "@/lib/animations";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Calendar, Clock, MapPin, X, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import type { CmsEvent, CmsFlier } from "@/lib/cms/types";

function formatDate(dateStr: string) {
  const date = new Date(dateStr + "T00:00:00");
  const month = date.toLocaleDateString("en-US", { month: "short" });
  const day = date.getDate();
  return { month, day };
}

interface EventListProps {
  title: string;
  subtitle: string;
  events: CmsEvent[];
  previousEventFliers: CmsFlier[];
}

export function EventList({ title, subtitle, events, previousEventFliers }: EventListProps) {
  const upcomingEvents = events;
  const [lightboxFlier, setLightboxFlier] = useState<CmsFlier | null>(null);
  const [upcomingFlyer, setUpcomingFlyer] = useState<string | null>(null);

  const currentIndex = lightboxFlier
    ? previousEventFliers.findIndex((f) => f.id === lightboxFlier.id)
    : -1;

  const navigateLightbox = useCallback(
    (direction: "prev" | "next") => {
      if (currentIndex === -1) return;
      const len = previousEventFliers.length;
      const newIndex =
        direction === "prev"
          ? (currentIndex - 1 + len) % len
          : (currentIndex + 1) % len;
      setLightboxFlier(previousEventFliers[newIndex]);
    },
    [currentIndex, previousEventFliers]
  );

  useEffect(() => {
    if (!lightboxFlier) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxFlier(null);
      if (e.key === "ArrowLeft") navigateLightbox("prev");
      if (e.key === "ArrowRight") navigateLightbox("next");
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [lightboxFlier, navigateLightbox]);

  useEffect(() => {
    if (!upcomingFlyer) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setUpcomingFlyer(null);
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [upcomingFlyer]);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeading
        title={title}
        subtitle={subtitle}
      />

      {/* Upcoming events */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="max-w-3xl mx-auto space-y-6 mb-24"
      >
        {upcomingEvents.length > 0 ? (
          upcomingEvents.map((event) => {
            const { month, day } = formatDate(event.date);
            return (
              <motion.div
                key={event.id}
                variants={fadeInUp}
                whileHover={{
                  x: 4,
                  transition: { type: "spring", stiffness: 300 },
                }}
                className="flex flex-col sm:flex-row gap-6 p-6 bg-warm-white rounded-2xl border border-sand/50 hover:border-sage/30 hover:shadow-lg transition-all"
              >
                <div className="flex gap-6 flex-1 min-w-0">
                  {/* Date badge */}
                  <div className="shrink-0 w-16 h-16 rounded-2xl bg-sage/10 flex flex-col items-center justify-center">
                    <span className="text-xs font-medium text-sage uppercase">
                      {month}
                    </span>
                    <span className="text-2xl font-serif text-charcoal leading-none">
                      {day}
                    </span>
                  </div>

                  <div className="min-w-0">
                    <h3 className="font-serif text-xl text-charcoal mb-2">
                      {event.title}
                    </h3>
                    {event.description && (
                      <p className="text-warm-gray text-sm mb-3 leading-relaxed">
                        {event.description}
                      </p>
                    )}
                    <div className="flex flex-wrap gap-4 text-xs text-warm-stone">
                      <span className="flex items-center gap-1.5">
                        <Clock size={12} />
                        {event.time}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={12} />
                        {event.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Flyer thumbnail */}
                {event.image && (
                  <div
                    className="shrink-0 sm:w-32 w-full cursor-pointer group/flyer"
                    onClick={() => setUpcomingFlyer(event.image!)}
                  >
                    <div className="relative overflow-hidden rounded-xl border border-sand/50 group-hover/flyer:border-sage/30 group-hover/flyer:shadow-md transition-all duration-300">
                      <div className="relative aspect-[3/4]">
                        <Image
                          src={event.image}
                          alt={`${event.title} flyer`}
                          fill
                          sizes="(max-width: 640px) 100vw, 128px"
                          className="object-cover object-top"
                        />
                        <div className="absolute inset-0 bg-charcoal/0 group-hover/flyer:bg-charcoal/10 transition-colors duration-300 flex items-center justify-center">
                          <span className="opacity-0 group-hover/flyer:opacity-100 transition-opacity duration-300 text-white text-xs font-medium bg-charcoal/60 backdrop-blur-sm px-3 py-1.5 rounded-full">
                            View Flyer
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })
        ) : (
          <motion.div
            variants={fadeInUp}
            className="text-center py-12 text-warm-gray"
          >
            <Calendar size={48} className="mx-auto mb-4 text-sand" />
            <p className="text-lg font-serif text-charcoal mb-2">
              No upcoming events right now
            </p>
            <p className="text-sm">
              Check back soon for new events and gatherings!
            </p>
          </motion.div>
        )}
      </motion.div>

      {/* Previous events - Fliers */}
      <div>
        <SectionHeading
          title="Previous Events"
          subtitle="Browse fliers from our past community gatherings and service projects."
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={staggerContainer}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5"
        >
          {previousEventFliers.map((flier) => (
            <motion.div
              key={flier.id}
              variants={scaleIn}
              whileHover={{
                y: -6,
                transition: { type: "spring", stiffness: 300 },
              }}
              className="group cursor-pointer"
              onClick={() => setLightboxFlier(flier)}
            >
              <div className="relative overflow-hidden rounded-2xl bg-warm-white border border-sand/50 shadow-sm group-hover:shadow-xl group-hover:border-sage/30 transition-all duration-300">
                <div className="relative aspect-[3/4]">
                  <Image
                    src={flier.src}
                    alt={flier.title}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover object-top"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors duration-300 flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-sm font-medium bg-charcoal/60 backdrop-blur-sm px-4 py-2 rounded-full">
                      View Flier
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxFlier && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-charcoal/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightboxFlier(null)}
          >
            <button
              onClick={() => setLightboxFlier(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
              aria-label="Close"
            >
              <X size={20} />
            </button>

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

            <motion.div
              key={lightboxFlier.id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative max-w-3xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightboxFlier.src}
                alt={lightboxFlier.title}
                width={900}
                height={1200}
                className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                priority
              />
            </motion.div>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm">
              {currentIndex + 1} / {previousEventFliers.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Upcoming event flyer lightbox */}
      <AnimatePresence>
        {upcomingFlyer && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-charcoal/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setUpcomingFlyer(null)}
          >
            <button
              onClick={() => setUpcomingFlyer(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative max-w-3xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={upcomingFlyer}
                alt="Event flyer"
                width={900}
                height={1200}
                className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
