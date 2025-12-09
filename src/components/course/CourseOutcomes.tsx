import { motion } from "framer-motion";
import { CheckCircle, Zap } from "lucide-react";

interface CourseOutcomesProps {
  headline: string;
  outcomes: string[];
}

const CourseOutcomes = ({ headline, outcomes }: CourseOutcomesProps) => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <Zap className="w-6 h-6 text-accent" />
              <span className="text-accent font-medium">Results You'll Achieve</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
              {headline}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {outcomes.map((outcome, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-5 rounded-xl glass-card border border-green-500/20 hover-lift"
              >
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-lg text-foreground">{outcome}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CourseOutcomes;
