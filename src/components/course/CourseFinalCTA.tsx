import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

interface CourseFinalCTAProps {
  headline: string;
  subheadline: string;
  ctaText: string;
  ctaLink: string;
}

const CourseFinalCTA = ({
  headline,
  subheadline,
  ctaText,
  ctaLink,
}: CourseFinalCTAProps) => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="p-12 md:p-16 rounded-3xl glass-card border border-primary/30 shadow-luxury relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 gradient-mesh opacity-20" />
            
            <div className="relative z-10 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">Limited Time Offer</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
                {headline}
              </h2>

              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {subheadline}
              </p>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <a href={ctaLink} target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="cta"
                    size="xl"
                    className="rounded-full group shadow-glow"
                  >
                    {ctaText}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CourseFinalCTA;
