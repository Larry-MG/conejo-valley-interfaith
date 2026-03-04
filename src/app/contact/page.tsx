import type { Metadata } from "next";
import { ContactSection } from "@/components/contact/ContactSection";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with CVIA or WIN. We'd love to hear from you and welcome you to our community.",
};

export default function ContactPage() {
  return (
    <div className="pt-28 pb-24">
      <ContactSection />
    </div>
  );
}
