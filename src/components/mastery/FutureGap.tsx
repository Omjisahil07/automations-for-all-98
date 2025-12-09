import { motion } from "framer-motion";

const FutureGap = () => {
  const comparison = [
    { user: "Uses prompts", builder: "Builds real workflows" },
    { user: "Saves minutes", builder: "Saves hours" },
    { user: "Learns tools", builder: "Deploys automation" },
    { user: "Replaceable", builder: "In-demand skill" },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-12">
            The world is moving from{" "}
            <span className="text-muted-foreground">AI Users</span> to{" "}
            <span className="gradient-primary bg-clip-text text-transparent">AI Builders</span>
          </h2>

          {/* Comparison Table */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="overflow-hidden rounded-2xl border border-border/50"
          >
            {/* Header */}
            <div className="grid grid-cols-2">
              <div className="p-6 bg-muted/30 border-r border-border/50">
                <h3 className="text-xl font-heading font-bold text-muted-foreground">AI User</h3>
              </div>
              <div className="p-6 bg-primary/10">
                <h3 className="text-xl font-heading font-bold gradient-primary bg-clip-text text-transparent">AI Builder</h3>
              </div>
            </div>

            {/* Rows */}
            {comparison.map((row, index) => (
              <div key={index} className="grid grid-cols-2 border-t border-border/50">
                <div className="p-5 bg-muted/10 border-r border-border/50 text-muted-foreground">
                  {row.user}
                </div>
                <div className="p-5 bg-primary/5 text-foreground font-medium">
                  {row.builder}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 text-xl text-muted-foreground"
          >
            The gap is growing.{" "}
            <span className="text-primary font-semibold">Early movers win.</span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default FutureGap;