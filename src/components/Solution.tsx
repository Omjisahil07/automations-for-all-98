import { motion } from "framer-motion";
import { Meteors } from "./ui/meteors";
import { BookOpen, Wrench, DollarSign, Repeat } from "lucide-react";
import { Button } from "./ui/button";

const cardData = [
  {
    id: 1,
    icon: BookOpen,
    title: "Learn the right tools",
    description: "No confusion - just what's required.",
    gradient: "gradient-primary",
  },
  {
    id: 2,
    icon: Wrench,
    title: "Build real automations",
    description: "Workflows used by real businesses.",
    gradient: "gradient-primary",
  },
  {
    id: 3,
    icon: DollarSign,
    title: "Monetize the skill",
    description: "Client scripts, pricing, proposals, earning models.",
    gradient: "gradient-accent",
  },
  {
    id: 4,
    icon: Repeat,
    title: "Scale",
    description: "Build once. Use or sell many times.",
    gradient: "gradient-accent",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

interface CardProps {
  id: number;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  gradient: string;
}

const Card = ({ id, icon: Icon, title, description, gradient }: CardProps) => (
  <motion.div
    variants={cardVariants}
    whileHover={{ y: -8, scale: 1.02 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="bg-card p-6 md:p-8 rounded-xl shadow-elegant text-center relative overflow-hidden group"
  >
    <motion.div
      whileHover={{ scale: 1.1, rotate: 10 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`w-16 h-16 md:w-20 md:h-20 rounded-full ${gradient} flex items-center justify-center mx-auto mb-4 md:mb-6 relative z-10`}
    >
      <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
    </motion.div>
    <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 relative z-10">{title}</h3>
    <p className="text-base md:text-lg text-muted-foreground leading-relaxed relative z-10">
      {description}
    </p>
    <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
      <Meteors number={20} />
    </div>
  </motion.div>
);

const Solution = () => {
  return (
    <section className="py-8 md:py-12 lg:py-16">
      <div className="container mx-auto px-4 max-w-8xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center space-y-2 md:space-y-3 mb-6 md:mb-8"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-black leading-tight">
            The Client-Ready AI System™
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 mb-6 md:mb-8"
        >
          {cardData.map((card) => (
            <Card key={card.id} {...card} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Button variant="cta" size="lg" className="text-base md:text-lg">
            Show Me How It Works
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Solution;
