import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-mysore-palace.jpg";
import { ArrowDown, MapPin, Calendar, Hotel } from "lucide-react";
const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({
      behavior: 'smooth'
    });
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden floating-orbs">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${heroImage})`
    }}>
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl mb-6 hero-title lg:text-7xl font-bold text-orange-900">Namma Mysuru</h1>
          <div className="text-xl md:text-2xl lg:text-3xl font-light mb-4 text-foreground/90">
            The Royal Heritage City of India
          </div>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12 text-foreground/80 leading-relaxed">
            Explore Culture, Tradition, Tourism, and Modern Lifestyle in the City of Palaces
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-16 animate-fade-in-up">
          <Button variant="royal" size="lg" onClick={() => scrollToSection('tourism')} className="text-lg px-8 py-4">
            <MapPin className="w-5 h-5" />
            Explore Tourism
          </Button>
          <Button variant="cyber" size="lg" onClick={() => scrollToSection('hotels')} className="text-lg px-8 py-4">
            <Hotel className="w-5 h-5" />
            Plan Your Stay
          </Button>
          <Button variant="glass" size="lg" onClick={() => scrollToSection('dasara')} className="text-lg px-8 py-4">
            <Calendar className="w-5 h-5" />
            Mysuru Dasara
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce cursor-pointer" onClick={() => scrollToSection('about')}>
          <ArrowDown className="w-8 h-8 mx-auto text-primary animate-glow-pulse" />
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary rounded-full animate-float opacity-60"></div>
      <div className="absolute bottom-32 right-16 w-6 h-6 bg-secondary rounded-full animate-float opacity-40" style={{
      animationDelay: '2s'
    }}></div>
      <div className="absolute top-1/3 right-20 w-3 h-3 bg-accent rounded-full animate-float opacity-50" style={{
      animationDelay: '4s'
    }}></div>
    </section>;
};
export default HeroSection;