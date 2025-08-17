import { MapPin, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import chamundiImage from "@/assets/chamundi-hills.jpg";
import brindavanImage from "@/assets/brindavan-gardens.jpg";

const TourismSection = () => {
  const attractions = [
    {
      name: "Mysore Palace",
      image: "/api/placeholder/400/300",
      description: "Magnificent royal palace with Indo-Saracenic architecture and golden illumination",
      timings: "10:00 AM - 5:30 PM",
      rating: 4.8,
      location: "Sayyaji Rao Road"
    },
    {
      name: "Chamundi Hills",
      image: chamundiImage,
      description: "Sacred hill with ancient temple offering panoramic city views",
      timings: "6:00 AM - 9:00 PM",
      rating: 4.6,
      location: "Chamundi Hill Road"
    },
    {
      name: "Brindavan Gardens",
      image: brindavanImage,
      description: "Beautiful terraced gardens with musical fountain shows",
      timings: "6:30 PM - 8:00 PM (Fountain)",
      rating: 4.5,
      location: "KRS Dam"
    },
    {
      name: "Mysuru Zoo",
      image: "/api/placeholder/400/300",
      description: "One of India's oldest and most well-maintained zoological parks",
      timings: "8:30 AM - 5:30 PM",
      rating: 4.4,
      location: "Infosys Gate Road"
    },
    {
      name: "St. Philomena's Church",
      image: "/api/placeholder/400/300",
      description: "Neo-Gothic cathedral with stunning architecture and peaceful ambiance",
      timings: "6:00 AM - 8:00 PM",
      rating: 4.3,
      location: "Ashoka Road"
    },
    {
      name: "Jaganmohan Palace",
      image: "/api/placeholder/400/300",
      description: "Historic palace housing an impressive art gallery and museum",
      timings: "10:00 AM - 5:30 PM",
      rating: 4.2,
      location: "Agrahara Circle"
    }
  ];

  return (
    <section id="tourism" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient-cyber">
            Tourism & Attractions
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Discover the magnificent attractions that make Mysore a jewel of South India, 
            from royal palaces to sacred temples and beautiful gardens.
          </p>
        </div>

        {/* Attractions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attractions.map((attraction, index) => (
            <div 
              key={index}
              className="glass-card group hover:scale-105 transition-all duration-500 overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <img 
                  src={attraction.image} 
                  alt={attraction.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                
                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-2 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                  <Star className="w-3 h-3 fill-current" />
                  {attraction.rating}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-gradient-royal group-hover:text-gradient-cyber transition-all duration-300">
                  {attraction.name}
                </h3>
                
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {attraction.description}
                </p>

                {/* Info */}
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-foreground/80">
                    <Clock className="w-4 h-4 text-secondary" />
                    {attraction.timings}
                  </div>
                  <div className="flex items-center gap-2 text-foreground/80">
                    <MapPin className="w-4 h-4 text-primary" />
                    {attraction.location}
                  </div>
                </div>

                {/* Action Button */}
                <Button 
                  variant="glass" 
                  className="w-full mt-4 group-hover:bg-primary/20 transition-all duration-300"
                >
                  View Details
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-fade-in-up">
          <Button variant="royal" size="lg" className="text-lg px-8 py-4">
            <MapPin className="w-5 h-5" />
            Interactive Map View
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TourismSection;