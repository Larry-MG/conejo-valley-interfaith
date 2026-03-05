import Link from "next/link";
import { HeroSection } from "@/components/home/HeroSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />

      <section className="py-20 bg-warm-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
          <div>
            <p className="text-terracotta font-medium text-sm tracking-wide uppercase mb-2">About CVIA</p>
            <h2 className="font-serif text-3xl text-charcoal mb-4">Building Bridges Across Faiths</h2>
            <p className="text-warm-gray leading-relaxed">
              For over 40 years, CVIA has brought together faith communities through dialogue,
              shared service, and annual gatherings that celebrate unity with respect for differences.
            </p>
          </div>
          <div>
            <p className="text-terracotta font-medium text-sm tracking-wide uppercase mb-2">Women&apos;s Interfaith Network</p>
            <h2 className="font-serif text-3xl text-charcoal mb-4">Strength Together</h2>
            <p className="text-warm-gray leading-relaxed">
              WIN connects over 21 houses of faith through monthly outreach, volunteer projects,
              and local initiatives supporting families across the region.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 text-center">
        <Link
          href="/gallery"
          className="inline-flex items-center px-8 py-3.5 text-base font-medium text-white bg-sage hover:bg-deep-forest rounded-full transition-colors"
        >
          View Full Gallery
        </Link>
      </section>
    </main>
  );
}
