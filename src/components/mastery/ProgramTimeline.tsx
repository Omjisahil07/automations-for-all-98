import { motion } from "framer-motion";

const ProgramTimeline = () => {
  const weeks = [
    { range: "Week 1–3", title: "Foundations", description: "Core concepts and getting started" },
    { range: "Week 4–6", title: "Automation builds", description: "Building real workflows" },
    { range: "Week 7–9", title: "Agents + advanced workflows", description: "Advanced AI systems" },
    { range: "Week 10–12", title: "Real projects + review", description: "Portfolio and certification" },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-center mb-4">
            Agentic AI Mastery Program{" "}
            <span className="gradient-primary bg-clip-text text-transparent">(12 Weeks)</span>
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Simple steps. No overwhelm. Clear application.
          </p>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block" />

            <div className="space-y-6">
              {weeks.map((week, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative pl-0 md:pl-20"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-6 w-4 h-4 rounded-full bg-primary border-4 border-background hidden md:block" />

                  <div className="p-6 rounded-2xl glass-card border border-border/50 hover:border-primary/30 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                      <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium w-fit">
                        {week.range}
                      </span>
                      <h3 className="text-xl font-heading font-bold text-foreground">{week.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{week.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramTimeline;