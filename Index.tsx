import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import TourismSection from "@/components/TourismSection";
import DasaraSection from "@/components/DasaraSection";
import HotelsSection from "@/components/HotelsSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <HeroSection />
      <AboutSection />
      <TourismSection />
      <DasaraSection />
      <HotelsSection />
      <FooterSection />
    </div>
  );
};

export default Index;
