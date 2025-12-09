import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalPush = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
            You already know AI is{" "}
            <span className="gradient-primary bg-clip-text text-transparent">not slowing down.</span>
          </h2>

          <p className="text-xl text-muted-foreground mb-4">
            People who learn now will lead.
          </p>

          <p className="text-xl text-muted-foreground mb-10">
            People who delay…{" "}
            <span className="text-foreground">will follow.</span>
          </p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <a href="#pricing">
              <Button variant="cta" size="xl" className="rounded-full group text-lg px-10">
                Apply for Agentic AI Mastery
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalPush;