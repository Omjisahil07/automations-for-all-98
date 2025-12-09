import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight, Sparkles, Star } from "lucide-react";
import CountdownTimer from "./CountdownTimer";

interface PricingTier {
  name: string;
  price: string;
  originalPrice?: string;
  badge?: string;
  isRecommended?: boolean;
  features: string[];
  ctaText: string;
  ctaLink: string;
}

interface TwoTierPricingProps {
  headline: string;
  tiers: PricingTier[];
  showCountdown?: boolean;
}

const TwoTierPricing = ({ headline, tiers, showCountdown = true }: TwoTierPricingProps) => {
  return (
    <section className="py-20" id="pricing">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-center mb-8">
            {headline}
          </h2>

          {showCountdown && <CountdownTimer label="Special launch offer ends in" />}

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {tiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`relative p-8 rounded-3xl ${
                  tier.isRecommended 
                    ? 'glass-card border-2 border-primary shadow-glow' 
                    : 'glass-card border border-muted/30'
                }`}
              >
                {/* Recommended Badge */}
                {tier.isRecommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                      <Star className="w-4 h-4" />
                      Recommended
                    </div>
                  </div>
                )}

                {/* Badge */}
                {tier.badge && !tier.isRecommended && (
                  <div className="mb-4">
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground">
                      {tier.badge}
                    </span>
                  </div>
                )}

                {/* Tier Name */}
                <h3 className={`text-xl font-heading font-bold mb-4 ${tier.isRecommended ? 'mt-4' : ''}`}>
                  {tier.name}
                </h3>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-3">
                    <span className="text-4xl md:text-5xl font-heading font-black gradient-primary bg-clip-text text-transparent">
                      {tier.price}
                    </span>
                    {tier.originalPrice && (
                      <span className="text-lg text-muted-foreground line-through">
                        {tier.originalPrice}
                      </span>
                    )}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <a href={tier.ctaLink} target="_blank" rel="noopener noreferrer">
                    <Button
                      variant={tier.isRecommended ? "cta" : "outline"}
                      size="lg"
                      className={`w-full rounded-full group ${tier.isRecommended ? 'shadow-glow' : ''}`}
                    >
                      {tier.ctaText}
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TwoTierPricing;
