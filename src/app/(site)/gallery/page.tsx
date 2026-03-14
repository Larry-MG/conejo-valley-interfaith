import type { Metadata } from "next";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { getGalleryContent, getSitePage } from "@/lib/cms/content";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getSitePage("gallery");

  return {
    title: page.title,
    description: page.description,
  };
}

export default async function GalleryPage() {
  const [page, gallery] = await Promise.all([
    getSitePage("gallery"),
    getGalleryContent(),
  ]);

  return (
    <div className="pt-28 pb-24">
      <GalleryGrid
        title={page.heading}
        subtitle={page.subtitle}
        categories={gallery.categories}
        images={gallery.images}
      />
    </div>
  );
}
