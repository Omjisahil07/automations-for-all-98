import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import CountdownTimer from "@/components/course/CountdownTimer";

const MasteryPricing = () => {
  const tiers = [
    {
      name: "Mastery",
      price: "₹59,999",
      originalPrice: "₹99,999",
      description: "Full 12-week program + support + projects + certificate",
      features: [
        "12 weeks intensive training",
        "Live weekly sessions",
        "Feedback on your systems",
        "Ready-to-use templates",
        "Workflow libraries",
        "Community and support",
        "Lifetime access to updates",
        "Certified Agentic AI Practitioner™",
      ],
      ctaText: "Apply Now",
      ctaLink: "https://pages.razorpay.com/mastery",
      recommended: false,
    },
    {
      name: "VIP Upgrade",
      price: "₹99,999",
      originalPrice: "₹1,49,999",
      description: "Everything + private review + 1:1 support",
      features: [
        "Everything in Mastery",
        "Private 1:1 sessions",
        "Priority support",
        "Custom project review",
        "LinkedIn recommendation",
        "Career guidance calls",
        "Extended access (6 months)",
        "VIP community access",
      ],
      ctaText: "Apply for VIP",
      ctaLink: "https://pages.razorpay.com/mastery-vip",
      recommended: true,
    },
  ];

  return (
    <section id="pricing" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
            Join the Next{" "}
            <span className="gradient-primary bg-clip-text text-transparent">Mastery Batch</span>
          </h2>
        </motion.div>

        <CountdownTimer label="Applications closing soon" />

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-10">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`relative p-8 rounded-2xl glass-card border ${
                tier.recommended
                  ? "border-primary/50 bg-primary/5"
                  : "border-border/50"
              }`}
            >
              {tier.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium">
                  Recommended
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-heading font-bold text-foreground mb-2">{tier.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{tier.description}</p>
                <div className="flex items-center justify-center gap-3">
                  <span className="text-4xl font-bold gradient-primary bg-clip-text text-transparent">
                    {tier.price}
                  </span>
                  <span className="text-lg text-muted-foreground line-through">
                    {tier.originalPrice}
                  </span>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {tier.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <a href={tier.ctaLink} target="_blank" rel="noopener noreferrer">
                <Button
                  variant={tier.recommended ? "cta" : "outline"}
                  size="lg"
                  className="w-full rounded-full group"
                >
                  {tier.ctaText}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MasteryPricing;