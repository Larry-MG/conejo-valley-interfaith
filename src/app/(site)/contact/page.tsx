import type { Metadata } from "next";
import { ContactSection } from "@/components/contact/ContactSection";
import { getSitePage, getSiteSettings } from "@/lib/cms/content";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getSitePage("contact");

  return {
    title: page.title,
    description: page.description,
  };
}

export default async function ContactPage() {
  const [page, settings] = await Promise.all([
    getSitePage("contact"),
    getSiteSettings(),
  ]);

  return (
    <div className="pt-28 pb-24">
      <ContactSection
        title={page.heading}
        subtitle={page.subtitle}
        settings={settings}
      />
    </div>
  );
}
