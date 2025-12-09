import { motion } from "framer-motion";
import { ArrowRight, Mail, Calendar, Bell, Database } from "lucide-react";

const workflowSteps = [
  { icon: Mail, label: "Lead" },
  { icon: ArrowRight, label: "" },
  { icon: Mail, label: "Reply" },
  { icon: ArrowRight, label: "" },
  { icon: Calendar, label: "Calendar" },
  { icon: ArrowRight, label: "" },
  { icon: Bell, label: "Reminder" },
  { icon: ArrowRight, label: "" },
  { icon: Database, label: "CRM" },
];

const DemoMoment = () => {
  return (
    <section className="py-8 md:py-12 lg:py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-background/5"></div>

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center space-y-6 md:space-y-8"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-black leading-tight">
            What automation <span className="text-shimmer">looks like.</span>
          </h2>

          {/* Workflow Animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-3xl p-6 md:p-10 lg:p-12 backdrop-blur-xl border border-primary/20"
          >
            <div className="flex items-center justify-center flex-wrap gap-2 md:gap-4">
              {workflowSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex flex-col items-center"
                >
                  {step.label ? (
                    <div className="flex flex-col items-center space-y-2">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="w-12 h-12 md:w-16 md:h-16 rounded-xl gradient-primary flex items-center justify-center"
                      >
                        <step.icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                      </motion.div>
                      <span className="text-xs md:text-sm font-medium text-muted-foreground">
                        {step.label}
                      </span>
                    </div>
                  ) : (
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="text-primary"
                    >
                      <ArrowRight className="w-4 h-4 md:w-6 md:h-6" />
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-2"
          >
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-light">
              This is one example.
            </p>
            <p className="text-lg md:text-xl lg:text-2xl text-foreground font-medium">
              You'll learn how to build systems like this…{" "}
              <span className="text-primary">and more</span>.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DemoMoment;
