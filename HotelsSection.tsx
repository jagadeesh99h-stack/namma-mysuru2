import { Wifi, Car, Utensils, Dumbbell, Star, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const HotelsSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Hotels" },
    { id: "luxury", label: "Luxury" },
    { id: "budget", label: "Budget" },
    { id: "resorts", label: "Resorts" },
    { id: "homestays", label: "Homestays" }
  ];

  const hotels = [
    {
      name: "The Lalitha Mahal Palace",
      category: "luxury",
      image: "/api/placeholder/400/300",
      priceRange: "₹8,000 - ₹15,000",
      rating: 4.8,
      amenities: ["Wifi", "Spa", "Restaurant", "Pool"],
      description: "Former royal guest house turned luxury heritage hotel with royal ambiance"
    },
    {
      name: "Grand Mercure Mysuru",
      category: "luxury",
      image: "/api/placeholder/400/300",
      priceRange: "₹6,000 - ₹12,000",
      rating: 4.6,
      amenities: ["Wifi", "Gym", "Restaurant", "Business Center"],
      description: "Modern luxury hotel with contemporary amenities and excellent service"
    },
    {
      name: "Royal Orchid Metropole",
      category: "luxury",
      image: "/api/placeholder/400/300",
      priceRange: "₹5,000 - ₹10,000",
      rating: 4.5,
      amenities: ["Wifi", "Restaurant", "Bar", "Spa"],
      description: "Heritage hotel with old-world charm and modern luxury facilities"
    },
    {
      name: "Hotel Mayura Hoysala",
      category: "budget",
      image: "/api/placeholder/400/300",
      priceRange: "₹2,500 - ₹4,500",
      rating: 4.2,
      amenities: ["Wifi", "Restaurant", "Parking"],
      description: "Government-run hotel offering comfortable stay at affordable rates"
    },
    {
      name: "Windflower Resort & Spa",
      category: "resorts",
      image: "/api/placeholder/400/300",
      priceRange: "₹7,000 - ₹13,000",
      rating: 4.7,
      amenities: ["Spa", "Pool", "Restaurant", "Garden"],
      description: "Luxury resort with beautiful gardens and rejuvenating spa treatments"
    },
    {
      name: "Mysore Heritage Homestay",
      category: "homestays",
      image: "/api/placeholder/400/300",
      priceRange: "₹1,500 - ₹3,000",
      rating: 4.3,
      amenities: ["Wifi", "Home-cooked meals", "Cultural activities"],
      description: "Authentic local experience with traditional hospitality and culture"
    }
  ];

  const filteredHotels = activeFilter === "all" 
    ? hotels 
    : hotels.filter(hotel => hotel.category === activeFilter);

  const getAmenityIcon = (amenity: string) => {
    switch (amenity.toLowerCase()) {
      case "wifi": return <Wifi className="w-4 h-4" />;
      case "parking": return <Car className="w-4 h-4" />;
      case "restaurant": return <Utensils className="w-4 h-4" />;
      case "gym": return <Dumbbell className="w-4 h-4" />;
      default: return <Star className="w-4 h-4" />;
    }
  };

  return (
    <section id="hotels" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient-royal">
            Hotels & Accommodation
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            From luxury palace hotels to cozy homestays, find the perfect accommodation 
            for your Mysore experience with our curated selection.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 justify-center mb-12 animate-fade-in-up">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "royal" : "glass"}
              onClick={() => setActiveFilter(filter.id)}
              className="transition-all duration-300"
            >
              <Filter className="w-4 h-4" />
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Hotels Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredHotels.map((hotel, index) => (
            <div 
              key={index}
              className="glass-card group hover:scale-105 transition-all duration-500 overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <img 
                  src={hotel.image} 
                  alt={hotel.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-secondary/90 text-secondary-foreground px-2 py-1 rounded-full text-sm font-semibold capitalize">
                  {hotel.category}
                </div>

                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-primary/90 text-primary-foreground px-2 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                  <Star className="w-3 h-3 fill-current" />
                  {hotel.rating}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-gradient-cyber group-hover:text-gradient-royal transition-all duration-300">
                    {hotel.name}
                  </h3>
                  <div className="text-primary font-semibold text-lg">
                    {hotel.priceRange}
                  </div>
                </div>
                
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {hotel.description}
                </p>

                {/* Amenities */}
                <div className="flex flex-wrap gap-2">
                  {hotel.amenities.slice(0, 4).map((amenity, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center gap-1 bg-muted/20 px-2 py-1 rounded-full text-xs text-foreground/70"
                    >
                      {getAmenityIcon(amenity)}
                      {amenity}
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Button 
                    variant="royal" 
                    className="flex-1 group-hover:scale-105 transition-transform duration-300"
                  >
                    Book Now
                  </Button>
                  <Button 
                    variant="glass" 
                    className="group-hover:bg-primary/20 transition-all duration-300"
                  >
                    Details
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-fade-in-up">
          <div className="glass-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-gradient-royal">
              Need Help Choosing?
            </h3>
            <p className="text-foreground/80 mb-6">
              Our travel experts can help you find the perfect accommodation based on your preferences and budget.
            </p>
            <Button variant="cyber" size="lg">
              Contact Travel Expert
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotelsSection;