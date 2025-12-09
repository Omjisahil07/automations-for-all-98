import { motion } from "framer-motion";

const IdentityShift = () => {
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
            People who deploy automation will{" "}
            <span className="gradient-primary bg-clip-text text-transparent">lead in the AI era.</span>
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground"
          >
            This skill will not replace jobs.<br />
            <span className="text-foreground font-semibold">It will replace roles.</span>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default IdentityShift;