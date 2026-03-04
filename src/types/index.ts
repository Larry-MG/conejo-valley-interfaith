export interface Organization {
  id: string;
  name: string;
  denomination?: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description?: string;
  image?: string;
  isPast: boolean;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
}

export interface GalleryCategory {
  slug: string;
  name: string;
  images: GalleryImage[];
}
