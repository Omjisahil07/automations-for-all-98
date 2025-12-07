import { Button } from "@/components/ui/button";
import { TextHoverEffect } from "./ui/text-hover-effect";
import {
  Sparkles,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    courses: [
      { name: "Agentic AI Mastery", href: "#" },
      { name: "The Bootcamp", href: "#" },
      { name: "Automation Accelerator", href: "#" },
      { name: "Free Resources", href: "#" },
    ],
    company: [
      { name: "About Us", href: "#" },
      { name: "Success Stories", href: "#" },
      { name: "Community", href: "#" },
      { name: "Blog", href: "#" },
    ],
    support: [
      { name: "Help Center", href: "#" },
      { name: "Contact Support", href: "#" },
      { name: "Refund Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="border-t border-border relative overflow-hidden">
      {/* Background Pattern */}
      {/* <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, hsl(214 84% 56% / 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, hsl(35 91% 65% / 0.1) 0%, transparent 50%)
          `
        }}></div>
      </div> */}

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-8 sm:py-10 lg:py-12 grid lg:grid-cols-5 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center ">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                <img src="/1.png" className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-2xl font-heading font-bold gradient-primary bg-clip-text text-transparent">
                  Automation School™
                </h2>
                {/* <p className="text-sm text-muted-foreground">
                  AI Learning Revolution
                </p> */}
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
              Transforming careers through practical AI education. Join 1,000+
              learners who've mastered the art of automation.
            </p>
          </div>

          {/* Courses */}
          <div className="space-y-6">
            <h3 className="text-lg font-heading font-bold text-foreground">
              Courses
            </h3>
            <ul className="space-y-3">
              {footerLinks.courses.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-6">
            <h3 className="text-lg font-heading font-bold text-foreground">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-6">
            <h3 className="text-lg font-heading font-bold text-foreground">
              Support
            </h3>
            {/* Contact Info */}
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

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg glass-card hover:bg-primary/10 flex items-center justify-center transition-colors group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center -mt-4">
          <div className="w-full h-32">
            <TextHoverEffect
              text="AUTOMATION SCHOOL"
              className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl"
            />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 sm:py-8 lg:py-10 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <span>
                © {currentYear} Automation School. All rights reserved.
              </span>
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
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
