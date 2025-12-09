import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const TestimonialsPlaceholder = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="p-8 rounded-2xl glass-card border border-primary/30 bg-primary/5">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Early Cohort
            </div>

            <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
              Be Among the First
            </h3>

            <p className="text-lg text-muted-foreground">
              This is an early cohort with limited learner support. Your results will be showcased as success stories for future batches.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsPlaceholder;