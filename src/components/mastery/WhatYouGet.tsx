import { motion } from "framer-motion";
import { PlayCircle, Video, FileText, Layers, Award } from "lucide-react";

const WhatYouGet = () => {
  const features = [
    { icon: PlayCircle, text: "Step-by-step video lessons" },
    { icon: Video, text: "Live weekly Q&A calls" },
    { icon: FileText, text: "Templates and workflows" },
    { icon: Layers, text: "Real automation examples" },
    { icon: Award, text: "Project certification" },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-12">
            What You{" "}
            <span className="gradient-primary bg-clip-text text-transparent">Get</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 rounded-2xl glass-card border border-border/50 hover:border-primary/30 transition-colors text-center"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <span className="text-lg font-medium text-foreground">{feature.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatYouGet;