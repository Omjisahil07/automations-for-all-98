import { motion } from "framer-motion";
import { Calendar, BookOpen } from "lucide-react";

interface AgendaDay {
  title: string;
  items: string[];
}

interface CourseAgendaProps {
  headline: string;
  days?: AgendaDay[];
  modules?: { title: string; description: string }[];
}

const CourseAgenda = ({ headline, days, modules }: CourseAgendaProps) => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-center mb-12">
            {headline}
          </h2>

          {days && (
            <div className="grid md:grid-cols-2 gap-8">
              {days.map((day, dayIndex) => (
                <motion.div
                  key={dayIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: dayIndex * 0.2 }}
                  className="p-8 rounded-2xl glass-card border border-primary/20"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-xl bg-primary/20">
                      <Calendar className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold">{day.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {day.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <span className="text-primary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          )}

          {modules && (
            <div className="space-y-6">
              {modules.map((module, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-xl glass-card border border-primary/20 hover-lift"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/20 flex-shrink-0">
                      <BookOpen className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-bold mb-2">{module.title}</h3>
                      <p className="text-muted-foreground">{module.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default CourseAgenda;
