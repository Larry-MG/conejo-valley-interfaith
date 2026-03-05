import Link from "next/link";
import Image from "next/image";

const previewImages = [
  { src: "/images/hero/cvia-gathering.webp", alt: "Interfaith leaders gathering" },
  { src: "/images/gallery/general/img-001.webp", alt: "Community gathering" },
  { src: "/images/gallery/general/img-006.webp", alt: "Toiletry drive volunteers" },
  { src: "/images/gallery/general/img-005.webp", alt: "Backpack drive community group" },
  { src: "/images/gallery/thanksgiving-2025/img-001.webp", alt: "Thanksgiving interfaith service" },
  { src: "/images/gallery/school-supplies-2023/img-001.webp", alt: "School supplies volunteers" },
];

export default function HomePage() {
  return (
    <main>
      <section className="relative bg-cream pt-28 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-charcoal leading-tight">
              Partnering Together To Serve Our Community
            </h1>
            <p className="mt-6 text-warm-gray text-lg max-w-xl">
              CVIA and WIN create a sacred space where people of all beliefs come
              together to foster understanding, peace, and harmony across Conejo Valley.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/events"
                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-sage hover:bg-deep-forest rounded-full transition-colors"
              >
                Upcoming Events
              </Link>
              <Link
                href="/organizations"
                className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-sage border-2 border-sage hover:bg-sage hover:text-white rounded-full transition-colors"
              >
                Our Community
              </Link>
            </div>

            <div className="mt-8 lg:hidden relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src={previewImages[0].src}
                alt={previewImages[0].alt}
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="hidden lg:grid grid-cols-3 gap-3">
            {previewImages.slice(0, 6).map((img, i) => (
              <div
                key={img.src}
                className={i === 0 ? "col-span-2 row-span-2 relative aspect-square rounded-2xl overflow-hidden" : "relative aspect-square rounded-2xl overflow-hidden"}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  priority={i === 0}
                  sizes={i === 0 ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 1024px) 33vw, 16vw"}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

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
