import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const FooterSection = () => {
  const quickLinks = [
    "Tourism Attractions",
    "Hotels & Stays",
    "Mysuru Dasara",
    "Wedding Venues",
    "Food & Cuisine",
    "Travel Guide"
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" }
  ];

  return (
    <footer className="relative py-20 bg-gradient-to-t from-background to-background/95 border-t border-border/20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-gradient-royal mb-2">
                Mysore
              </h3>
              <p className="text-lg text-gradient-cyber font-medium">
                Where Heritage Meets Future
              </p>
            </div>
            
            <p className="text-foreground/70 leading-relaxed max-w-md">
              Discover the royal city of Mysore, where magnificent palaces, rich culture, 
              and modern aspirations create an unforgettable experience for every visitor.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-foreground/80">
                <Phone className="w-5 h-5 text-primary" />
                <span>+91-821-242-2096</span>
              </div>
              <div className="flex items-center gap-3 text-foreground/80">
                <Mail className="w-5 h-5 text-secondary" />
                <span>info@mysore-tourism.com</span>
              </div>
              <div className="flex items-center gap-3 text-foreground/80">
                <MapPin className="w-5 h-5 text-accent" />
                <span>Mysore, Karnataka, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-gradient-cyber">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-foreground/70 hover:text-primary transition-colors duration-300 hover:underline"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-gradient-royal">
              Stay Updated
            </h4>
            <p className="text-foreground/70 mb-4 text-sm">
              Subscribe to get updates about events, festivals, and travel tips.
            </p>
            
            <div className="space-y-3">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button variant="royal" className="w-full">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Social Links & Bottom */}
        <div className="pt-8 border-t border-border/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="p-3 glass rounded-full hover:scale-110 hover:glow-royal transition-all duration-300 group"
                >
                  <social.icon className="w-5 h-5 text-foreground/70 group-hover:text-primary" />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-foreground/60 text-sm">
                © 2024 Mysore Tourism. All rights reserved.
              </p>
              <p className="text-foreground/50 text-xs mt-1">
                Developed with ❤️ for the Royal City
              </p>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-3 h-3 bg-primary rounded-full animate-float opacity-40"></div>
        <div className="absolute bottom-20 right-20 w-4 h-4 bg-secondary rounded-full animate-float opacity-30" style={{animationDelay: '3s'}}></div>
      </div>
    </footer>
  );
};

export default FooterSection;