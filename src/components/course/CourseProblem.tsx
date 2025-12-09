import { motion } from "framer-motion";
import { AlertCircle } from "lucide-react";

interface CourseProblemProps {
  headline: string;
  problems: string[];
}

const CourseProblem = ({ headline, problems }: CourseProblemProps) => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-center mb-12">
            {headline}
          </h2>

          <div className="space-y-4">
            {problems.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-xl glass-card border border-destructive/20"
              >
                <AlertCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-0.5" />
                <span className="text-lg text-muted-foreground">{problem}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CourseProblem;
