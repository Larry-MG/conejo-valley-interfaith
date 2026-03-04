import type { GalleryCategory } from "@/types";

export const galleryCategories: GalleryCategory[] = [
  {
    slug: "general",
    name: "Community",
    images: [
      { id: "g1", src: "/images/gallery/general/img-001.png", alt: "Community gathering", category: "general" },
      { id: "g2", src: "/images/gallery/general/img-002.png", alt: "Interfaith event", category: "general" },
      { id: "g3", src: "/images/gallery/general/img-003.png", alt: "Community service", category: "general" },
      { id: "g4", src: "/images/gallery/general/img-004.png", alt: "Volunteer work", category: "general" },
      { id: "g5", src: "/images/gallery/general/img-005.png", alt: "Community outreach", category: "general" },
      { id: "g6", src: "/images/gallery/general/img-006.png", alt: "Group photo", category: "general" },
    ],
  },
  {
    slug: "thanksgiving-2025",
    name: "Thanksgiving Service 2025",
    images: [
      { id: "t1", src: "/images/gallery/thanksgiving-2025/img-001.png", alt: "Thanksgiving Service 2025", category: "thanksgiving-2025" },
      { id: "t2", src: "/images/gallery/thanksgiving-2025/img-002.png", alt: "Thanksgiving Service gathering", category: "thanksgiving-2025" },
    ],
  },
  {
    slug: "birthday-boxes-2023",
    name: "Birthday Boxes 2023",
    images: [
      { id: "b1", src: "/images/gallery/birthday-boxes-2023/img-001.png", alt: "Birthday boxes preparation", category: "birthday-boxes-2023" },
      { id: "b2", src: "/images/gallery/birthday-boxes-2023/img-002.png", alt: "Birthday boxes assembly", category: "birthday-boxes-2023" },
      { id: "b3", src: "/images/gallery/birthday-boxes-2023/img-003.png", alt: "Birthday boxes volunteers", category: "birthday-boxes-2023" },
      { id: "b4", src: "/images/gallery/birthday-boxes-2023/img-004.png", alt: "Birthday boxes completed", category: "birthday-boxes-2023" },
    ],
  },
  {
    slug: "school-supplies-2023",
    name: "School Supplies Drive 2023",
    images: [
      { id: "s1", src: "/images/gallery/school-supplies-2023/img-001.jpeg", alt: "School supplies drive", category: "school-supplies-2023" },
    ],
  },
  {
    slug: "syrian-children-2018",
    name: "Save Syrian Children 2018",
    images: [
      { id: "sc1", src: "/images/gallery/syrian-children-2018/img-001.png", alt: "Syrian children support event", category: "syrian-children-2018" },
      { id: "sc2", src: "/images/gallery/syrian-children-2018/img-002.png", alt: "Syrian children fundraiser", category: "syrian-children-2018" },
    ],
  },
];

export const allGalleryImages = galleryCategories.flatMap((c) => c.images);
