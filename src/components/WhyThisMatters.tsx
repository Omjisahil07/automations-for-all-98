import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

const WhyThisMatters = () => {
  return (
    <section className="py-8 md:py-12 lg:py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-background/5"></div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center space-y-6 md:space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-4 md:px-6 py-2 md:py-3 rounded-full glass-card backdrop-blur-xl border border-accent/20"
          >
            <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-accent animate-pulse-glow" />
            <span className="text-xs md:text-sm font-medium text-accent">
              WHY THIS MATTERS
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-black leading-tight">
            If you delay, someone else{" "}
            <span className="text-shimmer">learns this skill.</span>
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 md:space-y-6 text-lg md:text-xl lg:text-2xl text-muted-foreground font-light leading-relaxed max-w-3xl mx-auto"
          >
            <p>
              This is one of the fastest growing skills in the world.
              <br />
              Companies, founders, and teams are already looking for people who can automate work and save time.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-2 md:pt-4"
          >
            <div className="glass-card rounded-2xl p-6 md:p-8 backdrop-blur-xl border border-primary/20 max-w-2xl mx-auto">
              <p className="text-lg md:text-xl lg:text-2xl font-medium leading-relaxed">
                AI users will{" "}
                <span className="text-muted-foreground/60">fade</span>.
                <br />
                AI automation builders will{" "}
                <span className="text-primary font-bold">stay in demand</span>.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyThisMatters;
