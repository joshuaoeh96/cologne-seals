import Layout from "@/components/Layout";
import HeroSection from "@/components/home/HeroSection";
import WhatIsFootvolley from "@/components/home/WhatIsFootvolley";
import AboutSection from "@/components/home/AboutSection";
import OffersSection from "@/components/home/OffersSection";
import LigaHighlight from "@/components/home/LigaHighlight";
import PartnersSection from "@/components/home/PartnersSection";
import CTASection from "@/components/home/CTASection";

const Index = () => (
  <Layout>
    <HeroSection />
    <WhatIsFootvolley />
    <AboutSection />
    <OffersSection />
    <LigaHighlight />
    <PartnersSection />
    <CTASection />
  </Layout>
);

export default Index;
