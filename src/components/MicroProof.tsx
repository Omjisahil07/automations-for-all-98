import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const stats = [
  "Students automated 300+ workflows",
  "Many earned from automation within 30–60 days",
  "Beginners built automation without technical background",
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

const MicroProof = () => {
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
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-black leading-tight">
            This skill is already paying off for{" "}
            <span className="text-shimmer">early learners.</span>
          </h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4 md:space-y-5 max-w-2xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-center space-x-3 md:space-x-4 glass-card rounded-xl p-4 md:p-5"
              >
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-500 flex-shrink-0" />
                <span className="text-base md:text-lg lg:text-xl text-foreground font-medium text-left">
                  {stat}
                </span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/choose">
              <Button variant="cta" size="lg" className="text-base md:text-lg">
                I Want This Skill
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MicroProof;
