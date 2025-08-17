import { Calendar, Crown, Music, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import dasaraImage from "@/assets/mysuru-dasara.jpg";

const DasaraSection = () => {
  const events = [
    {
      icon: Crown,
      title: "Royal Procession",
      description: "Grand procession with decorated elephants carrying the golden howdah"
    },
    {
      icon: Music,
      title: "Cultural Programs",
      description: "Classical music, dance performances, and cultural exhibitions"
    },
    {
      icon: Users,
      title: "Jumbo Savari",
      description: "The magnificent elephant parade showcasing royal traditions"
    }
  ];

  const highlights = [
    "400+ years of unbroken tradition",
    "10-day celebration of victory of good over evil",
    "UNESCO recognized cultural heritage",
    "Palace illuminated with 97,000 lights",
    "Over 2 million visitors annually"
  ];

  return (
    <section id="dasara" className="py-24 relative bg-gradient-to-br from-background via-primary/5 to-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient-royal">
            Mysuru Dasara Festival
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Experience the grandeur of India's most magnificent royal festival, 
            celebrating the victory of goddess Chamundeshwari over the demon Mahishasura.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative animate-slide-in-left">
            <img 
              src={dasaraImage} 
              alt="Mysuru Dasara celebration"
              className="w-full h-[400px] object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent rounded-2xl" />
            
            {/* Floating Badge */}
            <div className="absolute top-6 left-6 glass text-foreground px-4 py-2 rounded-full font-semibold">
              September/October 2024
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 animate-fade-in-up">
            <h3 className="text-3xl font-bold text-gradient-cyber mb-6">
              The Royal Celebration
            </h3>
            
            <p className="text-foreground/80 leading-relaxed text-lg">
              Mysuru Dasara is a royal festival that has been celebrated for over 400 years. 
              The entire city transforms into a spectacular showcase of lights, colors, and traditions 
              during the 10-day celebration.
            </p>

            {/* Highlights */}
            <div className="space-y-3">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full animate-glow-pulse" />
                  <span className="text-foreground/80">{highlight}</span>
                </div>
              ))}
            </div>

            <Button variant="royal" size="lg" className="mt-6">
              <Calendar className="w-5 h-5" />
              View Event Calendar
            </Button>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {events.map((event, index) => (
            <div 
              key={index}
              className="glass-card text-center group hover:scale-105 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-primary mb-4 group-hover:text-secondary transition-colors duration-300 flex justify-center">
                <event.icon className="w-16 h-16" />
              </div>
              <h4 className="text-xl font-bold mb-3 text-gradient-royal">
                {event.title}
              </h4>
              <p className="text-foreground/70 leading-relaxed">
                {event.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="glass-card text-center animate-fade-in-up">
          <h3 className="text-2xl font-bold mb-4 text-gradient-cyber">
            Plan Your Dasara Visit
          </h3>
          <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
            Book your accommodation early and witness the magnificence of this royal celebration. 
            Experience processions, cultural programs, and the grandeur of illuminated palaces.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button variant="royal">
              Book Accommodation
            </Button>
            <Button variant="glass">
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DasaraSection;