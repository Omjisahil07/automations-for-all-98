import { motion } from "framer-motion";
import { TrendingUp, Users, Briefcase } from "lucide-react";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { FloatingOrbs } from "@/components/ui/floating-orbs";

const features = [
  {
    icon: TrendingUp,
    title: "Works smarter,",
    highlight: "not harder.",
    highlightClass: "text-primary",
    description: "Leverage AI to automate complex workflows while you focus on strategy and growth.",
    gradient: "gradient-primary",
  },
  {
    icon: Briefcase,
    title: "Gets paid for",
    highlight: "ideas, not hours.",
    highlightClass: "text-accent",
    description: "Create value through intelligent solutions that scale beyond your time investment.",
    gradient: "gradient-accent",
  },
  {
    icon: Users,
    title: "Builds solutions once…",
    highlight: "and earns from them again and again.",
    highlightClass: "gradient-hero bg-clip-text text-transparent",
    description: "Create scalable automation systems that generate recurring revenue streams.",
    gradient: "gradient-hero",
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const NewEra = () => {
  return (
    <section className="py-8 md:py-12 lg:py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-background/5"></div>
      <FloatingOrbs count={4} />

      <div className="container mx-auto px-4 max-w-8xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center space-y-2 md:space-y-3 mb-6 md:mb-8"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black leading-tight">
            A New Era of Work Has <span className="text-shimmer">Begun.</span>
          </h2>
          <div className="space-y-4 md:space-y-6 text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto font-light leading-relaxed">
            <p className="text-muted-foreground">
              Every industry is shifting. Repetitive work is disappearing.
            </p>
            <p className="text-foreground font-medium">
              But a new kind of expert is rising, the{" "}
              <span className="gradient-hero bg-clip-text text-transparent font-bold">
                AI automation professional.
              </span>
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 mb-6 md:mb-8"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <CardSpotlight className="h-full">
                <div className="p-6 md:p-8 lg:p-12 text-center relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className={`w-16 h-16 md:w-20 md:h-20 rounded-full ${feature.gradient} mx-auto mb-6 md:mb-8 flex items-center justify-center`}
                  >
                    <feature.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </motion.div>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-heading font-bold mb-4 md:mb-6 leading-tight">
                    {feature.title}{" "}
                    <span className={feature.highlightClass}>{feature.highlight}</span>
                  </h3>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </CardSpotlight>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <div className="glass-card rounded-2xl p-6 md:p-8 lg:p-12 max-w-4xl mx-auto backdrop-blur-xl border border-accent/20">
            <p className="text-xl md:text-2xl lg:text-3xl font-heading font-bold">
              The only question:{" "}
              <span className="text-accent">Will you adapt,</span> or{" "}
              <span className="text-destructive">be left behind?</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NewEra;
