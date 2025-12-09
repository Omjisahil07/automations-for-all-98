import { motion } from "framer-motion";
import { MessageSquare, Bell, CheckSquare, Zap, ArrowRight } from "lucide-react";

const VisionSnapshot = () => {
  const workflowSteps = [
    { icon: MessageSquare, label: "Leads" },
    { icon: Bell, label: "Messages" },
    { icon: CheckSquare, label: "Reminders" },
    { icon: Zap, label: "Tasks" },
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
            Imagine a workflow where leads, messages, reminders and tasks{" "}
            <span className="gradient-primary bg-clip-text text-transparent">
              happen automatically
            </span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Without you doing anything.
          </p>

          {/* Automation Flow Diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-4 md:gap-6"
          >
            {workflowSteps.map((step, index) => (
              <div key={index} className="flex items-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-2">
                    <step.icon className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">{step.label}</span>
                </motion.div>
                
                {index < workflowSteps.length - 1 && (
                  <ArrowRight className="w-6 h-6 text-primary/50 mx-2 hidden md:block" />
                )}
              </div>
            ))}

            {/* Final automation icon */}
            <div className="flex items-center">
              <ArrowRight className="w-6 h-6 text-primary/50 mx-2 hidden md:block" />
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.7 }}
                className="flex flex-col items-center"
              >
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-accent/20 border border-accent/40 flex items-center justify-center mb-2">
                  <Zap className="w-8 h-8 md:w-10 md:h-10 text-accent" />
                </div>
                <span className="text-sm font-medium text-accent">Auto!</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionSnapshot;