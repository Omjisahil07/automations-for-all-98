import { motion } from "framer-motion";
import { CheckCircle, Circle, ArrowDown } from "lucide-react";

interface Step {
  title: string;
  description: string;
  certification: string;
}

interface ProgressionLadderProps {
  headline: string;
  steps: Step[];
  currentStep: number; // 1, 2, or 3
}

const ProgressionLadder = ({ headline, steps, currentStep }: ProgressionLadderProps) => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-center mb-12">
            {headline}
          </h2>

          <div className="relative">
            {steps.map((step, index) => {
              const stepNumber = index + 1;
              const isCompleted = stepNumber < currentStep;
              const isCurrent = stepNumber === currentStep;
              const isFuture = stepNumber > currentStep;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative"
                >
                  <div className={`
                    flex items-start gap-6 p-6 rounded-2xl mb-4 transition-all
                    ${isCurrent 
                      ? 'glass-card border-2 border-primary shadow-glow' 
                      : isCompleted 
                        ? 'glass-card border border-green-500/30' 
                        : 'glass-card border border-muted/30 opacity-70'
                    }
                  `}>
                    {/* Step Indicator */}
                    <div className={`
                      flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center
                      ${isCurrent 
                        ? 'bg-primary text-primary-foreground' 
                        : isCompleted 
                          ? 'bg-green-500/20 text-green-500' 
                          : 'bg-muted text-muted-foreground'
                      }
                    `}>
                      {isCompleted ? (
                        <CheckCircle className="w-6 h-6" />
                      ) : (
                        <span className="font-heading font-bold text-lg">{stepNumber}</span>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className={`text-xl font-heading font-bold ${isCurrent ? 'text-primary' : ''}`}>
                          {step.title}
                        </h3>
                        {isCurrent && (
                          <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary text-primary-foreground">
                            You are here
                          </span>
                        )}
                      </div>
                      <p className="text-muted-foreground mb-2">{step.description}</p>
                      <p className="text-sm font-medium text-accent">
                        🎓 {step.certification}
                      </p>
                    </div>
                  </div>

                  {/* Connector Arrow */}
                  {index < steps.length - 1 && (
                    <div className="flex justify-center -my-2 relative z-10">
                      <ArrowDown className={`w-6 h-6 ${isCurrent || isCompleted ? 'text-primary' : 'text-muted-foreground/30'}`} />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgressionLadder;
