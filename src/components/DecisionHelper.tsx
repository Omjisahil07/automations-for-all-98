import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { HelpCircle, ArrowRight, Sparkles } from "lucide-react";
import QuizModal from "./QuizModal";

const DecisionHelper = () => {
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  return (
    <>
      <section className="py-20 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 gradient-mesh opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="p-10 md:p-16 rounded-3xl glass-card border border-primary/30 shadow-luxury">
              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring" }}
                className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 mb-8"
              >
                <HelpCircle className="w-10 h-10 text-primary" />
              </motion.div>

              {/* Headline */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
                Not Sure Which Program Is{" "}
                <span className="gradient-primary bg-clip-text text-transparent">
                  Right For You?
                </span>
              </h2>

              {/* Subheadline */}
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Answer 4 quick questions and we'll recommend the perfect starting point 
                based on your experience, goals, and time commitment.
              </p>

              {/* Quiz Button */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant="cta"
                  size="xl"
                  onClick={() => setIsQuizOpen(true)}
                  className="rounded-full group shadow-glow"
                >
                  <Sparkles className="mr-2 w-5 h-5" />
                  Take the 60-Second Quiz
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>

              {/* Trust Note */}
              <p className="text-sm text-muted-foreground mt-6">
                No email required • Get instant recommendation
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quiz Modal */}
      <QuizModal open={isQuizOpen} onOpenChange={setIsQuizOpen} />
    </>
  );
};

export default DecisionHelper;
