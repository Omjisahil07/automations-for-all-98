import { motion } from "framer-motion";
import { Users, Building2, Laptop } from "lucide-react";

const audiences = [
  {
    icon: Laptop,
    title: "Freelancers",
    description: "Sell automation as a service",
    gradient: "gradient-primary",
    color: "text-primary",
  },
  {
    icon: Building2,
    title: "Professionals",
    description: "Become the AI expert in your company",
    gradient: "gradient-accent",
    color: "text-accent",
  },
  {
    icon: Users,
    title: "Business Owners",
    description: "Automate tasks and reduce workload",
    gradient: "gradient-hero",
    color: "text-primary",
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
    transition: { duration: 0.5 },
  },
};

const TargetAudience = () => {
  return (
    <section className="py-8 md:py-12 lg:py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-background/10"></div>

      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            radial-gradient(circle at 25% 25%, hsl(var(--primary) / 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, hsl(var(--accent) / 0.1) 0%, transparent 50%)
          `,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center space-y-2 md:space-y-3 mb-6 md:mb-8"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-black leading-tight">
            If this sounds like you,{" "}
            <span className="text-shimmer">you're in the right place.</span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
        >
          {audiences.map((audience, index) => (
            <motion.div key={index} variants={itemVariants} className="group">
              <div className="glass-card p-6 md:p-8 lg:p-10 rounded-3xl hover-lift transition-luxury h-full relative overflow-hidden text-center">
                {/* Background Gradient */}
                <div
                  className={`absolute top-0 right-0 w-32 h-32 ${audience.gradient} opacity-10 rounded-full blur-2xl transform translate-x-8 -translate-y-8`}
                ></div>

                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl ${audience.gradient} mx-auto mb-4 md:mb-6 flex items-center justify-center group-hover:animate-pulse-glow shadow-luxury`}
                  >
                    <audience.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>

                  <h3
                    className={`text-xl md:text-2xl font-heading font-bold mb-2 md:mb-3 ${audience.color}`}
                  >
                    {audience.title}
                  </h3>

                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    {audience.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TargetAudience;
