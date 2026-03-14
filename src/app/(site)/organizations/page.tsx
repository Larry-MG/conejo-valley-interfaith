import type { Metadata } from "next";
import { OrganizationGrid } from "@/components/organizations/OrganizationGrid";
import { getOrganizations, getSitePage } from "@/lib/cms/content";

export async function generateMetadata(): Promise<Metadata> {
  const page = await getSitePage("organizations");

  return {
    title: page.title,
    description: page.description,
  };
}

export default async function OrganizationsPage() {
  const [page, organizations] = await Promise.all([
    getSitePage("organizations"),
    getOrganizations(),
  ]);

  return (
    <div className="pt-28 pb-24">
      <OrganizationGrid
        title={page.heading}
        subtitle={page.subtitle}
        organizations={organizations}
      />
    </div>
  );
}
