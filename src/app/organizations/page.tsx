import type { Metadata } from "next";
import { OrganizationGrid } from "@/components/organizations/OrganizationGrid";

export const metadata: Metadata = {
  title: "Participating Organizations",
  description:
    "28 faith communities and organizations that make up the Conejo Valley Interfaith Association.",
};

export default function OrganizationsPage() {
  return (
    <div className="pt-28 pb-24">
      <OrganizationGrid />
    </div>
  );
}
