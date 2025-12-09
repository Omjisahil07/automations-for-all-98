import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AlertCircle, ArrowRight } from "lucide-react";

const PainRecognition = () => {
  const painPoints = [
    "You learn tools but don't know how to apply",
    "Tutorials feel random, not connected",
    "You still do repeated manual work",
    "You know AI can help, but you don't know where to start",
  ];

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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-10">
            If you feel AI is moving faster than your skill…{" "}
            <span className="gradient-primary bg-clip-text text-transparent">you're not alone.</span>
          </h2>

          <div className="space-y-4 mb-8">
            {painPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-xl glass-card border border-border/50 text-left"
              >
                <AlertCircle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
                <span className="text-lg text-foreground">{point}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="p-6 rounded-xl bg-primary/5 border border-primary/20 mb-8"
          >
            <p className="text-xl text-muted-foreground italic">
              It's not lack of intelligence.<br />
              <span className="text-foreground font-medium">It's lack of a clear path.</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <a href="#pricing">
              <Button variant="cta" size="lg" className="rounded-full group">
                Yes, I want to learn this skill
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PainRecognition;