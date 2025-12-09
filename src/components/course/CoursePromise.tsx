import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface CoursePromiseProps {
  headline: string;
  promises: string[];
}

const CoursePromise = ({ headline, promises }: CoursePromiseProps) => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-center mb-12">
            <span className="gradient-primary bg-clip-text text-transparent">{headline}</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {promises.map((promise, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl glass-card hover-lift border border-primary/20"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-primary/20">
                    <Sparkles className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-lg text-foreground">{promise}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CoursePromise;
