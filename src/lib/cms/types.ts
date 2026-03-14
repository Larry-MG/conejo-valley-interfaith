export interface CmsLink {
  label: string;
  href: string;
}

export interface HomeAboutCard {
  eyebrow: string;
  title: string;
  body: string;
}

export interface HomePageContent {
  heroHeading: string;
  heroDescription: string;
  primaryCta: CmsLink;
  secondaryCta: CmsLink;
  aboutCvia: HomeAboutCard;
  aboutWin: HomeAboutCard;
  galleryCtaLabel: string;
}

export interface SiteSettingsContent {
  name: string;
  shortName: string;
  tagline: string;
  greeting: string;
  motto: string;
  description: string;
  facebookUrl: string;
  emails: {
    cvia: string;
    win: string;
  };
  meetings: {
    cvia: string;
    win: string;
  };
}

export interface SitePageContent {
  slug: "organizations" | "events" | "gallery" | "contact";
  title: string;
  description: string;
  heading: string;
  subtitle: string;
}

export interface CmsOrganization {
  id: string;
  name: string;
  denomination?: string;
}

export interface CmsEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description?: string;
  image?: string;
}

export interface CmsFlier {
  id: string;
  src: string;
  title: string;
}

export interface CmsGalleryCategory {
  slug: string;
  name: string;
}

export interface CmsGalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  title?: string;
}
