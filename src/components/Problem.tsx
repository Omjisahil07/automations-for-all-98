import { motion } from "framer-motion";
import { X, CheckCircle, AlertTriangle } from "lucide-react";
import { CardSpotlight } from "@/components/ui/card-spotlight";

const problems = [
  {
    icon: X,
    text: "You waste time learning tools you can't monetize.",
  },
  {
    icon: X,
    text: "Clients don't see you as different from the crowd.",
  },
  {
    icon: X,
    text: "You feel behind while others are already cashing in.",
  },
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
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
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
              hsl(214 84% 56% / 0.1),
              hsl(214 84% 56% / 0.1) 1px,
              transparent 1px,
              transparent 20px
            )
          `,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 max-w-8xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center space-y-2 md:space-y-3 mb-6 md:mb-8"
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
            The Problem Isn't AI. <br />
            <span className="text-destructive">The Problem Is Noise.</span>
          </h2>

          <div className="space-y-4 md:space-y-6 text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto font-light leading-relaxed">
            <p className="text-muted-foreground">
              YouTube tutorials. Twitter threads. Random hacks.
            </p>
            <p className="text-foreground font-medium">
              They leave you{" "}
              <span className="text-destructive font-bold">overwhelmed</span>,{" "}
              <span className="text-destructive font-bold">scattered</span>, and{" "}
              <span className="text-destructive font-bold">
                unsure where to start
              </span>
              .
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 md:mb-8"
        >
          <div className="glass-card rounded-3xl p-6 md:p-8 lg:p-12 backdrop-blur-xl border border-destructive/20 shadow-luxury max-w-6xl mx-auto">
            <div className="text-center space-y-4 md:space-y-6 mb-8 md:mb-12">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-heading font-bold text-destructive">
                The result?
              </h3>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              {problems.map((problem, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="bg-destructive/5 border border-destructive/20 rounded-2xl p-6 md:p-8 h-full"
                  >
                    <div className="flex items-start space-x-3 md:space-x-4">
                      <motion.div
                        whileHover={{ rotate: 180 }}
                        transition={{ duration: 0.3 }}
                        className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0"
                      >
                        <problem.icon className="w-5 h-5 md:w-6 md:h-6 text-destructive" />
                      </motion.div>
                      <p className="text-base md:text-lg leading-relaxed font-medium">
                        {problem.text}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <CardSpotlight className="max-w-5xl mx-auto">
            <div className="p-6 md:p-8 lg:p-12 relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
                className="flex items-center justify-center space-x-4 mb-4 md:mb-6"
              >
                <CheckCircle className="w-8 h-8 md:w-12 md:h-12 text-green-500" />
              </motion.div>
              <p className="text-xl md:text-2xl lg:text-3xl font-heading font-bold leading-tight">
                The truth?{" "}
                <span className="text-muted-foreground">
                  You don't need more tools.
                </span>
                <br />
                You need a <span className="text-green-600">system</span>.
              </p>
            </div>
          </CardSpotlight>
        </motion.div>
      </div>
    </section>
  );
};

export default Problem;
