import { events } from "@/data/events";
import { previousEventFliers } from "@/data/fliers";
import { galleryCategories, allGalleryImages } from "@/data/gallery";
import { organizations } from "@/data/organizations";
import { siteConfig } from "@/lib/constants";
import type {
  CmsEvent,
  CmsFlier,
  CmsGalleryCategory,
  CmsGalleryImage,
  CmsOrganization,
  HomePageContent,
  SitePageContent,
  SiteSettingsContent,
} from "@/lib/cms/types";

export const fallbackSiteSettings: SiteSettingsContent = {
  name: siteConfig.name,
  shortName: siteConfig.shortName,
  tagline: siteConfig.tagline,
  greeting: siteConfig.greeting,
  motto: siteConfig.motto,
  description: siteConfig.description,
  facebookUrl: siteConfig.facebook,
  emails: {
    cvia: siteConfig.emails.cvia,
    win: siteConfig.emails.win,
  },
  meetings: {
    cvia: "Meets 2nd Tuesday of each month",
    win: "4th Thursday of every month at 7 PM via Zoom",
  },
};

export const fallbackHomePage: HomePageContent = {
  heroHeading: siteConfig.tagline,
  heroDescription:
    "Creating a sacred space where people of all beliefs come together to foster understanding, peace, and harmony in the Conejo Valley.",
  primaryCta: {
    label: "Upcoming Events",
    href: "/events",
  },
  secondaryCta: {
    label: "Our Community",
    href: "/organizations",
  },
  aboutCvia: {
    eyebrow: "About CVIA",
    title: "Building Bridges Across Faiths",
    body:
      "For over 40 years, CVIA has brought together faith communities through dialogue, shared service, and annual gatherings that celebrate unity with respect for differences.",
  },
  aboutWin: {
    eyebrow: "Women's Interfaith Network",
    title: "Strength Together",
    body:
      "WIN connects over 21 houses of faith through monthly outreach, volunteer projects, and local initiatives supporting families across the region.",
  },
  galleryCtaLabel: "View Full Gallery",
};

export const fallbackSitePages: Record<SitePageContent["slug"], SitePageContent> = {
  organizations: {
    slug: "organizations",
    title: "Participating Organizations",
    description:
      "28 faith communities and organizations that make up the Conejo Valley Interfaith Association.",
    heading: "Our Faith Community",
    subtitle:
      "28 organizations united across faith traditions, working together for peace, understanding, and service in the Conejo Valley.",
  },
  events: {
    slug: "events",
    title: "Upcoming Events",
    description:
      "Events and gatherings from the Conejo Valley Interfaith Association and Women's Interfaith Network.",
    heading: "Upcoming Events",
    subtitle:
      "Join us at our next gathering, service project, or community celebration.",
  },
  gallery: {
    slug: "gallery",
    title: "Gallery",
    description:
      "Photos from CVIA and WIN community events, service projects, and celebrations.",
    heading: "Gallery",
    subtitle:
      "Moments of unity, service, and celebration from across the Conejo Valley.",
  },
  contact: {
    slug: "contact",
    title: "Contact Us",
    description:
      "Get in touch with CVIA or WIN. We'd love to hear from you and welcome you to our community.",
    heading: "Get In Touch",
    subtitle: "We'd love to hear from you. Reach out to CVIA or WIN below.",
  },
};

export const fallbackOrganizations: CmsOrganization[] = organizations;

export const fallbackEvents: CmsEvent[] = events
  .filter((event) => !event.isPast)
  .map((event) => ({
    id: event.id,
    title: event.title,
    date: event.date,
    time: event.time,
    location: event.location,
    description: event.description,
    image: event.image,
  }));

export const fallbackPastEventFliers: CmsFlier[] = previousEventFliers;

export const fallbackGalleryCategories: CmsGalleryCategory[] = galleryCategories.map((category) => ({
  slug: category.slug,
  name: category.name,
}));

export const fallbackGalleryImages: CmsGalleryImage[] = allGalleryImages;
