import type { Metadata } from "next";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos from CVIA and WIN community events, service projects, and celebrations.",
};

export default function GalleryPage() {
  return (
    <div className="pt-28 pb-24">
      <GalleryGrid />
    </div>
  );
}
