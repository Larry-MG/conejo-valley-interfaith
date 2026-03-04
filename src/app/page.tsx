import { HeroSection } from "@/components/home/HeroSection";
import { AboutCVIA } from "@/components/home/AboutCVIA";
import { AboutWIN } from "@/components/home/AboutWIN";
import { GoldenRuleQuote } from "@/components/home/GoldenRuleQuote";
import { ServicePartners } from "@/components/home/ServicePartners";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { CTASection } from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutCVIA />
      <AboutWIN />
      <GoldenRuleQuote />
      <ServicePartners />
      <GalleryPreview />
      <CTASection />
    </>
  );
}
