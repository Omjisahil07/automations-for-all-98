import { motion } from "framer-motion";
import { X, AlertTriangle } from "lucide-react";

const problems = [
  "Too many tools",
  "Too many tutorials",
  "No practical roadmap",
  "No real examples",
  "Hard to turn into income",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4 },
  },
};

const Problem = () => {
  return (
    <section className="py-8 md:py-12 lg:py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-background/5"></div>

      {/* Animated noise pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            repeating-linear-gradient(
              45deg,
              hsl(var(--primary) / 0.1),
              hsl(var(--primary) / 0.1) 1px,
              transparent 1px,
              transparent 20px
            )
          `,
          }}
        ></div>
      </div>

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
            className="inline-flex items-center space-x-2 px-4 md:px-6 py-2 md:py-3 rounded-full glass-card backdrop-blur-xl border border-destructive/20"
          >
            <AlertTriangle className="w-4 h-4 md:w-5 md:h-5 text-destructive animate-pulse-glow" />
            <span className="text-xs md:text-sm font-medium text-destructive">
              THE REAL PROBLEM
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black leading-tight">
            The problem isn't AI. <br />
            <span className="text-destructive">It's confusion.</span>
          </h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-3xl mx-auto"
          >
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-2 bg-destructive/10 border border-destructive/20 rounded-full px-4 py-2 md:px-5 md:py-2.5"
              >
                <X className="w-4 h-4 text-destructive" />
                <span className="text-sm md:text-base text-foreground">
                  {problem}
                </span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="pt-4 md:pt-6"
          >
            <div className="glass-card rounded-2xl p-6 md:p-8 backdrop-blur-xl border border-primary/20 max-w-2xl mx-auto">
              <p className="text-lg md:text-xl lg:text-2xl font-medium leading-relaxed">
                Learning alone is{" "}
                <span className="text-muted-foreground">slow</span>.
                <br />
                Learning with a system is{" "}
                <span className="text-primary font-bold">faster</span>.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Problem;
