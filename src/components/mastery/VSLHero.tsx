import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Code, Award } from "lucide-react";

const VSLHero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
            Learn Agentic AI and Automation.{" "}
            <span className="gradient-primary bg-clip-text text-transparent">
              Build workflows that save hours every week.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto">
            No code. No technical background needed. Build your first automation in 60–90 minutes.
          </p>

          {/* Video Block Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-video max-w-3xl mx-auto mb-10 rounded-2xl overflow-hidden border border-border/50 bg-card"
          >
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-accent/10">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-primary/30 transition-colors">
                  <svg className="w-8 h-8 text-primary ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <p className="text-muted-foreground">VSL Video Coming Soon</p>
              </div>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a href="#pricing">
              <Button variant="cta" size="xl" className="rounded-full group text-lg px-8">
                Apply for Agentic AI Mastery
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </motion.div>

          {/* Trust Ribbon */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-primary" />
              <span>Limited seats</span>
            </div>
            <div className="flex items-center gap-2">
              <Code className="w-4 h-4 text-primary" />
              <span>No-code</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-primary" />
              <span>Beginner friendly</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VSLHero;