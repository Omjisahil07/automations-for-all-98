import { motion } from "framer-motion";
import { FloatingOrbs } from "@/components/ui/floating-orbs";

const bullets = [
  "Repetitive work is disappearing",
  "Automation is replacing manual effort",
  "A new type of expert is rising",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const NewEra = () => {
  return (
    <section className="py-8 md:py-12 lg:py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-background/5"></div>
      <FloatingOrbs count={4} />

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center space-y-6 md:space-y-8"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black leading-tight">
            Work is changing <span className="text-shimmer">fast.</span>
          </h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-3 md:space-y-4 text-lg md:text-xl lg:text-2xl font-light"
          >
            {bullets.map((bullet, index) => (
              <motion.p
                key={index}
                variants={itemVariants}
                className="text-muted-foreground flex items-center justify-center space-x-3"
              >
                <span className="text-primary">•</span>
                <span>{bullet}</span>
              </motion.p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4 md:space-y-6 pt-4 md:pt-6"
          >
            <p className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold">
              The{" "}
              <span className="gradient-hero bg-clip-text text-transparent">
                AI Automation Professional.
              </span>
            </p>
            
            <div className="glass-card rounded-2xl p-6 md:p-8 backdrop-blur-xl border border-primary/20 max-w-2xl mx-auto">
              <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                People who build automation will{" "}
                <span className="text-primary font-semibold">lead</span>.
                <br />
                People who don't will{" "}
                <span className="text-muted-foreground/60">follow</span>.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewEra;
