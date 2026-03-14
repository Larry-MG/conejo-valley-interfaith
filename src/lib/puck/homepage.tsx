import type { Config, Data } from "@measured/puck";
import Image from "next/image";
import Link from "next/link";

type HeroImage = {
  src: string;
  alt: string;
};

type HeroProps = {
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
  images: HeroImage[];
};

type IntroColumnsProps = {
  leftEyebrow: string;
  leftTitle: string;
  leftBody: string;
  rightEyebrow: string;
  rightTitle: string;
  rightBody: string;
};

type CenteredButtonProps = {
  label: string;
  href: string;
};

export type HomepagePuckComponents = {
  Hero: HeroProps;
  IntroColumns: IntroColumnsProps;
  CenteredButton: CenteredButtonProps;
};

export type HomepagePuckData = Data<HomepagePuckComponents>;

const defaultHeroImages: HeroImage[] = [
  { src: "/images/hero/cvia-gathering.webp", alt: "Interfaith leaders gathering" },
  { src: "/images/gallery/birthday-boxes-2023/img-001.webp", alt: "Youth birthday box project" },
  { src: "/images/gallery/general/img-006.webp", alt: "Toiletry drive volunteers" },
  { src: "/images/gallery/general/img-005.webp", alt: "Backpack drive community group" },
  { src: "/images/gallery/thanksgiving-2025/img-001.webp", alt: "Thanksgiving interfaith service" },
  { src: "/images/gallery/school-supplies-2023/img-001.webp", alt: "School supplies volunteers" },
];

function splitParagraphs(value: string) {
  return value
    .split(/\n\s*\n/)
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);
}

function HeroBlock({
  title,
  description,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  images,
}: HeroProps) {
  const tiles = Array.from({ length: 6 }, (_, index) => {
    return images[index] ?? defaultHeroImages[index];
  });

  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-cream" />
        <div className="hidden md:block absolute -top-1/3 -left-1/4 h-[600px] w-[600px] rounded-full bg-sage/20 blur-[120px]" />
        <div className="hidden md:block absolute -bottom-1/4 -right-1/4 h-[500px] w-[500px] rounded-full bg-terracotta/15 blur-[120px]" />
        <div className="hidden md:block absolute top-1/3 left-1/2 h-[400px] w-[400px] rounded-full bg-warm-stone/15 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-28">
        <div className="text-center lg:text-left">
          <h1 className="font-serif text-4xl leading-[1.1] text-charcoal sm:text-5xl md:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-warm-gray sm:text-xl lg:mx-0">
            {description}
          </p>

          <div className="mt-10 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center lg:justify-start">
            <Link
              href={primaryHref}
              className="inline-flex items-center justify-center rounded-full bg-sage px-8 py-3.5 text-base font-medium text-white shadow-lg shadow-sage/20 transition-colors hover:bg-deep-forest"
            >
              {primaryLabel}
            </Link>
            <Link
              href={secondaryHref}
              className="inline-flex items-center justify-center rounded-full border-2 border-sage px-8 py-3.5 text-base font-medium text-sage transition-colors hover:bg-sage hover:text-white"
            >
              {secondaryLabel}
            </Link>
          </div>

          <div className="mt-8 -mx-1 overflow-x-auto px-1 pb-1 lg:hidden">
            <div className="flex min-w-max gap-3">
              {tiles.map((image, index) => (
                <div
                  key={`${image.src}-${index}`}
                  className="relative aspect-[4/3] w-[78vw] max-w-[320px] shrink-0 overflow-hidden rounded-2xl shadow-lg"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    priority={index === 0}
                    sizes="80vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="hidden lg:block">
          <div
            className="mx-auto grid max-w-lg grid-cols-4 grid-rows-4 gap-2.5 lg:max-w-none"
            style={{ aspectRatio: "1" }}
          >
            <div className="relative col-span-2 row-span-2 overflow-hidden rounded-2xl shadow-lg">
              <Image src={tiles[0].src} alt={tiles[0].alt} fill priority sizes="25vw" className="object-cover" />
            </div>
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <Image src={tiles[1].src} alt={tiles[1].alt} fill sizes="12vw" className="object-cover" />
            </div>
            <div className="relative row-span-2 overflow-hidden rounded-2xl shadow-lg">
              <Image src={tiles[2].src} alt={tiles[2].alt} fill sizes="12vw" className="object-cover" />
            </div>
            <div className="relative row-span-2 overflow-hidden rounded-2xl shadow-lg">
              <Image src={tiles[3].src} alt={tiles[3].alt} fill sizes="12vw" className="object-cover" />
            </div>
            <div className="relative col-span-2 overflow-hidden rounded-2xl shadow-lg">
              <Image src={tiles[4].src} alt={tiles[4].alt} fill sizes="25vw" className="object-cover" />
            </div>
            <div className="relative col-span-2 overflow-hidden rounded-2xl shadow-lg">
              <Image src={tiles[5].src} alt={tiles[5].alt} fill sizes="25vw" className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function IntroColumnsBlock({
  leftEyebrow,
  leftTitle,
  leftBody,
  rightEyebrow,
  rightTitle,
  rightBody,
}: IntroColumnsProps) {
  return (
    <section className="bg-warm-white py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
        <div>
          <p className="mb-2 text-sm font-medium uppercase tracking-wide text-terracotta">
            {leftEyebrow}
          </p>
          <h2 className="mb-4 font-serif text-3xl text-charcoal">{leftTitle}</h2>
          <div className="space-y-4 text-warm-gray">
            {splitParagraphs(leftBody).map((paragraph) => (
              <p key={paragraph} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-2 text-sm font-medium uppercase tracking-wide text-terracotta">
            {rightEyebrow}
          </p>
          <h2 className="mb-4 font-serif text-3xl text-charcoal">{rightTitle}</h2>
          <div className="space-y-4 text-warm-gray">
            {splitParagraphs(rightBody).map((paragraph) => (
              <p key={paragraph} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CenteredButtonBlock({ label, href }: CenteredButtonProps) {
  return (
    <section className="py-16 text-center">
      <Link
        href={href}
        className="inline-flex items-center rounded-full bg-sage px-8 py-3.5 text-base font-medium text-white transition-colors hover:bg-deep-forest"
      >
        {label}
      </Link>
    </section>
  );
}

export const homepagePuckConfig: Config<HomepagePuckComponents> = {
  components: {
    Hero: {
      fields: {
        title: { type: "textarea", label: "Headline" },
        description: { type: "textarea", label: "Description" },
        primaryLabel: { type: "text", label: "Primary button label" },
        primaryHref: { type: "text", label: "Primary button link" },
        secondaryLabel: { type: "text", label: "Secondary button label" },
        secondaryHref: { type: "text", label: "Secondary button link" },
        images: {
          type: "array",
          label: "Gallery images",
          min: 1,
          max: 6,
          defaultItemProps: defaultHeroImages[0],
          getItemSummary: (item, index) => item.alt || `Image ${index ?? 0}`,
          arrayFields: {
            src: { type: "text", label: "Image path" },
            alt: { type: "text", label: "Alt text" },
          },
        },
      },
      render: (props) => <HeroBlock {...props} />,
    },
    IntroColumns: {
      fields: {
        leftEyebrow: { type: "text", label: "Left eyebrow" },
        leftTitle: { type: "text", label: "Left title" },
        leftBody: { type: "textarea", label: "Left body" },
        rightEyebrow: { type: "text", label: "Right eyebrow" },
        rightTitle: { type: "text", label: "Right title" },
        rightBody: { type: "textarea", label: "Right body" },
      },
      render: (props) => <IntroColumnsBlock {...props} />,
    },
    CenteredButton: {
      fields: {
        label: { type: "text", label: "Button label" },
        href: { type: "text", label: "Button link" },
      },
      render: (props) => <CenteredButtonBlock {...props} />,
    },
  },
};

export const defaultHomepageData: HomepagePuckData = {
  root: {},
  content: [
    {
      type: "Hero",
      props: {
        id: "home-hero",
        title: "Partnering Together To Serve Our Community",
        description:
          "Creating a sacred space where people of all beliefs come together to foster understanding, peace, and harmony in the Conejo Valley.",
        primaryLabel: "Upcoming Events",
        primaryHref: "/events",
        secondaryLabel: "Our Community",
        secondaryHref: "/organizations",
        images: defaultHeroImages,
      },
    },
    {
      type: "IntroColumns",
      props: {
        id: "home-intro-columns",
        leftEyebrow: "About CVIA",
        leftTitle: "Building Bridges Across Faiths",
        leftBody:
          "For over 40 years, CVIA has brought together faith communities through dialogue, shared service, and annual gatherings that celebrate unity with respect for differences.",
        rightEyebrow: "Women's Interfaith Network",
        rightTitle: "Strength Together",
        rightBody:
          "WIN connects over 21 houses of faith through monthly outreach, volunteer projects, and local initiatives supporting families across the region.",
      },
    },
    {
      type: "CenteredButton",
      props: {
        id: "home-gallery-button",
        label: "View Full Gallery",
        href: "/gallery",
      },
    },
  ],
};
