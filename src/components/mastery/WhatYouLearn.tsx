import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const WhatYouLearn = () => {
  const benefits = [
    "Build workflows using AI",
    "Create agents",
    "Automate repeated work",
    "Deploy useful automation",
    "Build real project portfolio",
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-12">
            Become an{" "}
            <span className="gradient-primary bg-clip-text text-transparent">
              Agentic AI Practitioner
            </span>
          </h2>

          <div className="grid gap-4 max-w-md mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-xl glass-card border border-border/50 text-left"
              >
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-lg font-medium text-foreground">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatYouLearn;