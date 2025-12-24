import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustIndicators } from "@/components/home/TrustIndicators";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CTASection } from "@/components/home/CTASection";

export default function Index() {
  return (
    <Layout>
      <HeroSection />
      <TrustIndicators />
      <ServicesPreview />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
}
