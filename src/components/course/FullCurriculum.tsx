import { motion } from "framer-motion";
import { BookOpen, ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface CurriculumModule {
  title: string;
  description: string;
}

interface FullCurriculumProps {
  headline: string;
  modules: CurriculumModule[];
  bonus?: string;
}

const FullCurriculum = ({ headline, modules, bonus }: FullCurriculumProps) => {
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

          <Accordion type="single" collapsible className="space-y-4">
            {modules.map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <AccordionItem
                  value={`module-${index}`}
                  className="glass-card border border-primary/20 rounded-xl px-6 overflow-hidden"
                >
                  <AccordionTrigger className="hover:no-underline py-4">
                    <div className="flex items-center gap-4 text-left">
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                        <span className="font-heading font-bold text-primary">{index + 1}</span>
                      </div>
                      <span className="font-heading font-semibold text-lg">{module.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 pl-14 text-muted-foreground">
                    {module.description}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>

          {bonus && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-8 p-6 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/30"
            >
              <div className="flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-primary" />
                <span className="font-heading font-bold text-lg">Bonus:</span>
                <span className="text-foreground">{bonus}</span>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default FullCurriculum;
