import Link from "next/link";
import { HeroSection } from "@/components/home/HeroSection";
import { getHomePageContent } from "@/lib/cms/content";

export default async function HomePage() {
  const homePage = await getHomePageContent();

  return (
    <main>
      <HeroSection
        heading={homePage.heroHeading}
        description={homePage.heroDescription}
        primaryCta={homePage.primaryCta}
        secondaryCta={homePage.secondaryCta}
      />

      <section className="py-20 bg-warm-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10">
          <div>
            <p className="text-terracotta font-medium text-sm tracking-wide uppercase mb-2">{homePage.aboutCvia.eyebrow}</p>
            <h2 className="font-serif text-3xl text-charcoal mb-4">{homePage.aboutCvia.title}</h2>
            <p className="text-warm-gray leading-relaxed">{homePage.aboutCvia.body}</p>
          </div>
          <div>
            <p className="text-terracotta font-medium text-sm tracking-wide uppercase mb-2">{homePage.aboutWin.eyebrow}</p>
            <h2 className="font-serif text-3xl text-charcoal mb-4">{homePage.aboutWin.title}</h2>
            <p className="text-warm-gray leading-relaxed">{homePage.aboutWin.body}</p>
          </div>
        </div>
      </section>

      <section className="py-16 text-center">
        <Link
          href="/gallery"
          className="inline-flex items-center px-8 py-3.5 text-base font-medium text-white bg-sage hover:bg-deep-forest rounded-full transition-colors"
        >
          {homePage.galleryCtaLabel}
        </Link>
      </section>
    </main>
  );
}
