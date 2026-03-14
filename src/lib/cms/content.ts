import {
  fallbackEvents,
  fallbackGalleryCategories,
  fallbackGalleryImages,
  fallbackHomePage,
  fallbackOrganizations,
  fallbackPastEventFliers,
  fallbackSitePages,
  fallbackSiteSettings,
} from "@/lib/cms/fallback-content";
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
import { sanityFetch } from "@/sanity/lib/client";

const siteSettingsQuery = `*[_type == "siteSettings"][0]{
  name,
  shortName,
  tagline,
  greeting,
  motto,
  description,
  "facebookUrl": facebookUrl,
  "emails": {
    "cvia": cviaEmail,
    "win": winEmail
  },
  "meetings": {
    "cvia": cviaMeetingText,
    "win": winMeetingText
  }
}`;

const homePageQuery = `*[_type == "homePage"][0]{
  heroHeading,
  heroDescription,
  "primaryCta": {
    "label": primaryCta.label,
    "href": primaryCta.href
  },
  "secondaryCta": {
    "label": secondaryCta.label,
    "href": secondaryCta.href
  },
  "aboutCvia": {
    "eyebrow": aboutCvia.eyebrow,
    "title": aboutCvia.title,
    "body": aboutCvia.body
  },
  "aboutWin": {
    "eyebrow": aboutWin.eyebrow,
    "title": aboutWin.title,
    "body": aboutWin.body
  },
  galleryCtaLabel
}`;

const sitePageQuery = `*[_type == "sitePage" && slug == $slug][0]{
  slug,
  title,
  description,
  heading,
  subtitle
}`;

const organizationsQuery = `*[_type == "organization"] | order(sortOrder asc, name asc) {
  "id": _id,
  name,
  denomination
}`;

const eventsQuery = `*[_type == "event"] | order(date asc, title asc) {
  "id": _id,
  title,
  date,
  time,
  location,
  description,
  "image": flyer.asset->url
}`;

const pastEventFliersQuery = `*[_type == "pastEventFlier"] | order(sortOrder asc, title asc) {
  "id": _id,
  title,
  "src": image.asset->url
}`;

const galleryCategoriesQuery = `*[_type == "galleryCategory"] | order(sortOrder asc, name asc) {
  "slug": slug.current,
  name,
  "images": *[_type == "galleryImage" && references(^._id)] | order(sortOrder asc, title asc) {
    "id": _id,
    title,
    alt,
    "category": ^.slug.current,
    "src": image.asset->url
  }
}`;

function isUpcomingEvent(event: CmsEvent) {
  return new Date(`${event.date}T23:59:59`).getTime() >= Date.now();
}

export async function getSiteSettings(): Promise<SiteSettingsContent> {
  return sanityFetch({
    query: siteSettingsQuery,
    fallback: fallbackSiteSettings,
    tags: ["siteSettings"],
  });
}

export async function getHomePageContent(): Promise<HomePageContent> {
  return sanityFetch({
    query: homePageQuery,
    fallback: fallbackHomePage,
    tags: ["homePage"],
  });
}

export async function getSitePage(slug: SitePageContent["slug"]): Promise<SitePageContent> {
  return sanityFetch({
    query: sitePageQuery,
    params: { slug },
    fallback: fallbackSitePages[slug],
    tags: [`sitePage:${slug}`],
  });
}

export async function getOrganizations(): Promise<CmsOrganization[]> {
  return sanityFetch({
    query: organizationsQuery,
    fallback: fallbackOrganizations,
    tags: ["organization"],
  });
}

export async function getEvents(): Promise<CmsEvent[]> {
  const cmsEvents = await sanityFetch({
    query: eventsQuery,
    fallback: fallbackEvents,
    tags: ["event"],
  });

  return cmsEvents.filter(isUpcomingEvent);
}

export async function getPastEventFliers(): Promise<CmsFlier[]> {
  return sanityFetch({
    query: pastEventFliersQuery,
    fallback: fallbackPastEventFliers,
    tags: ["pastEventFlier"],
  });
}

export async function getGalleryContent(): Promise<{
  categories: CmsGalleryCategory[];
  images: CmsGalleryImage[];
}> {
  const categoriesWithImages = await sanityFetch<Array<CmsGalleryCategory & { images: CmsGalleryImage[] }>>({
    query: galleryCategoriesQuery,
    fallback: fallbackGalleryCategories.map((category) => ({
      ...category,
      images: fallbackGalleryImages.filter((image) => image.category === category.slug),
    })),
    tags: ["galleryCategory", "galleryImage"],
  });

  return {
    categories: categoriesWithImages.map((category) => ({ slug: category.slug, name: category.name })),
    images: categoriesWithImages.flatMap((category) => category.images),
  };
}
