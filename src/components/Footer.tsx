import { TextHoverEffect } from "./ui/text-hover-effect";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="border-t border-border relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="py-8 sm:py-10 lg:py-12 grid lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                <img src="/1.png" className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-2xl font-heading font-bold gradient-primary bg-clip-text text-transparent">
                  Automation School™
                </h2>
              </div>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
              Learn useful AI skills and automation without being technical.
            </p>
          </div>

          {/* Programs */}
          <div className="space-y-6">
            <h3 className="text-lg font-heading font-bold text-foreground">Programs</h3>
            <ul className="space-y-3">
              <li><Link to="/accelerator" className="text-sm text-muted-foreground hover:text-primary transition-colors">Automation Accelerator</Link></li>
              <li><Link to="/bootcamp" className="text-sm text-muted-foreground hover:text-primary transition-colors">Bootcamp</Link></li>
              <li><Link to="/mastery" className="text-sm text-muted-foreground hover:text-primary transition-colors">Mastery</Link></li>
              <li><Link to="/launchpad" className="text-sm text-muted-foreground hover:text-primary transition-colors">Launchpad (Free)</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-6">
            <h3 className="text-lg font-heading font-bold text-foreground">Support</h3>
            <ul className="space-y-3">
              <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms</Link></li>
              <li><Link to="/refund" className="text-sm text-muted-foreground hover:text-primary transition-colors">Refund Policy</Link></li>
              <li>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSehQA4MvUwfcCW3cGEiDZYnm9CkvIP8SsfNmru9_IUy957pww/viewform" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Apply as Mentor
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-lg font-heading font-bold text-foreground">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="w-4 h-4 text-primary" />
                <span>support@automationschool.in</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="w-4 h-4 text-primary" />
                <span>+91 8873262374</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Delhi, India</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a key={social.label} href={social.href} className="w-10 h-10 rounded-lg glass-card hover:bg-primary/10 flex items-center justify-center transition-colors group" aria-label={social.label}>
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center -mt-4">
          <div className="w-full h-32">
            <TextHoverEffect text="AUTOMATION SCHOOL" className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl" />
          </div>
        </div>

        <div className="py-6 sm:py-8 lg:py-10 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <span>© {currentYear} Automation School. All rights reserved.</span>
              <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>Built by</span>
              <span>BDA Technologies Private Limited</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;