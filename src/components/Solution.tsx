import { motion } from "framer-motion";
import { Meteors } from "./ui/meteors";
import { CountUp } from "./ui/count-up";

const cardData = [
  {
    id: 1,
    title: "Learn the Tools",
    description: "n8n, GHL, Make etc, AI Agents simplified for real-world use.",
    gradient: "gradient-primary",
  },
  {
    id: 2,
    title: "Build Automations",
    description: "Plug-and-play workflows businesses actually pay for.",
    gradient: "gradient-primary",
  },
  {
    id: 3,
    title: "Monetize",
    description: "Client-getting scripts, proposals, and pricing frameworks.",
    gradient: "gradient-accent",
  },
  {
    id: 4,
    title: "Scale",
    description: "Build once, sell repeatedly.",
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
  title: string;
  description: string;
  gradient: string;
}

const Card = ({ id, title, description, gradient }: CardProps) => (
  <motion.div
    variants={cardVariants}
    whileHover={{ y: -8, scale: 1.02 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="bg-card p-6 md:p-8 rounded-xl shadow-elegant text-center relative overflow-hidden group"
  >
    <motion.div
      whileHover={{ scale: 1.1, rotate: 10 }}
      transition={{ type: "spring", stiffness: 300 }}
      className={`w-16 h-16 md:w-20 md:h-20 rounded-full ${gradient} flex items-center justify-center mx-auto mb-4 md:mb-6 text-white font-bold text-xl md:text-2xl relative z-10`}
    >
      {id}
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
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 max-w-8xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center space-y-3 md:space-y-4 mb-8 md:mb-10"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-black leading-tight">
            The Client-Ready AI System
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed">
            At Automation School, you'll master a framework built to turn
            skills into income.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8"
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
          <p className="text-lg md:text-xl lg:text-2xl font-semibold text-muted-foreground leading-relaxed">
            No guesswork. No fluff. Just a proven system trusted by{" "}
            <span className="gradient-primary bg-clip-text text-transparent">
              <CountUp end={1000} suffix="+" /> learners
            </span>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Solution;
