import { Crown, GraduationCap, Building, Heart } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Crown,
      title: "Royal Heritage",
      description: "Former capital of the Kingdom of Mysore with magnificent palaces and royal architecture"
    },
    {
      icon: GraduationCap,
      title: "Education Hub",
      description: "Home to prestigious universities and institutions, fostering knowledge and innovation"
    },
    {
      icon: Building,
      title: "Modern Growth",
      description: "Thriving IT sector and modern infrastructure while preserving cultural values"
    },
    {
      icon: Heart,
      title: "Yoga Capital",
      description: "Birthplace of Ashtanga Yoga and spiritual wellness destination"
    }
  ];

  const timeline = [
    { year: "1399", event: "Foundation of Mysore Kingdom" },
    { year: "1610", event: "Wadiyar Dynasty established" },
    { year: "1782", event: "Tipu Sultan's rule begins" },
    { year: "1912", event: "Current Mysore Palace constructed" },
    { year: "1956", event: "Became part of Karnataka state" },
    { year: "2023", event: "Modern tech and tourism hub" }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient-royal">
            About Mysore
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            A city where ancient grandeur meets modern aspirations, Mysore stands as a testament 
            to India's rich cultural heritage and progressive spirit.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {highlights.map((item, index) => (
            <div 
              key={index}
              className="glass-card group hover:scale-105 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-primary mb-4 group-hover:text-secondary transition-colors duration-300">
                <item.icon className="w-12 h-12" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gradient-cyber">
                {item.title}
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Timeline */}
        <div className="glass-card animate-fade-in-up">
          <h3 className="text-3xl font-bold mb-8 text-center text-gradient-royal">
            Historical Timeline
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {timeline.map((item, index) => (
              <div 
                key={index}
                className="flex items-center space-x-4 p-4 rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors duration-300"
              >
                <div className="text-2xl font-bold text-primary min-w-fit">
                  {item.year}
                </div>
                <div className="text-foreground/80">
                  {item.event}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;