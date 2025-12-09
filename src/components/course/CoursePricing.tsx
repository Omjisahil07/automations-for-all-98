import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Sparkles } from "lucide-react";

interface CoursePricingProps {
  headline: string;
  price: string;
  originalPrice?: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
  badge?: string;
}

const CoursePricing = ({
  headline,
  price,
  originalPrice,
  features,
  ctaText,
  ctaLink,
  badge,
}: CoursePricingProps) => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-xl mx-auto"
        >
          <div className="relative p-8 md:p-12 rounded-3xl glass-card border border-primary/30 shadow-luxury">
            {/* Badge */}
            {badge && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                  <Sparkles className="w-4 h-4" />
                  {badge}
                </div>
              </div>
            )}

            {/* Headline */}
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-8">
              {headline}
            </h2>

            {/* Price */}
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-4">
                <span className="text-5xl md:text-6xl font-heading font-black gradient-primary bg-clip-text text-transparent">
                  {price}
                </span>
                {originalPrice && (
                  <span className="text-2xl text-muted-foreground line-through">
                    {originalPrice}
                  </span>
                )}
              </div>
            </div>

            {/* Features */}
            <ul className="space-y-4 mb-8">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{feature}</span>
                </motion.li>
              ))}
            </ul>

            {/* CTA */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <a href={ctaLink} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="cta"
                  size="xl"
                  className="w-full rounded-full group shadow-glow"
                >
                  {ctaText}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoursePricing;
