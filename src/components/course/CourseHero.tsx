import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Users, Award, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

interface CourseHeroProps {
  tagline: string;
  headline: string;
  headlineAccent: string;
  subheadline: string;
  ctaText: string;
  ctaLink: string;
  trustItems: {
    icon: "clock" | "users" | "award" | "calendar";
    text: string;
  }[];
}

const iconMap = {
  clock: Clock,
  users: Users,
  award: Award,
  calendar: Calendar,
};

const CourseHero = ({
  tagline,
  headline,
  headlineAccent,
  subheadline,
  ctaText,
  ctaLink,
  trustItems,
}: CourseHeroProps) => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 gradient-mesh opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-primary/30"
          >
            <span className="text-sm font-medium text-primary">{tagline}</span>
          </motion.div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black leading-tight">
            <span className="text-foreground">{headline} </span>
            <span className="gradient-primary bg-clip-text text-transparent">
              {headlineAccent}
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {subheadline}
          </p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link to={ctaLink}>
              <Button
                variant="cta"
                size="xl"
                className="rounded-full group shadow-glow"
              >
                {ctaText}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>

          {/* Trust Strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6 pt-8"
          >
            {trustItems.map((item, index) => {
              const Icon = iconMap[item.icon];
              return (
                <div
                  key={index}
                  className="flex items-center gap-2 text-muted-foreground"
                >
                  <Icon className="w-5 h-5 text-primary" />
                  <span className="text-sm">{item.text}</span>
                </div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CourseHero;
