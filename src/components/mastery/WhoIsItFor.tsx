import { motion } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react";

const WhoIsItFor = () => {
  const forList = [
    "Professionals",
    "Job seekers",
    "Freelancers",
    "Business owners",
    "Students building future skills",
  ];

  const notForList = [
    "People who want shortcuts",
    "People who don't want to implement",
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-center mb-12">
            Who This Is{" "}
            <span className="gradient-primary bg-clip-text text-transparent">For</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* For List */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="p-6 rounded-2xl glass-card border border-green-500/30 bg-green-500/5"
            >
              <h3 className="text-xl font-heading font-bold text-green-500 mb-6">Perfect for:</h3>
              <div className="space-y-4">
                {forList.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Not For List */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="p-6 rounded-2xl glass-card border border-destructive/30 bg-destructive/5"
            >
              <h3 className="text-xl font-heading font-bold text-destructive mb-6">Not for:</h3>
              <div className="space-y-4">
                {notForList.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <XCircle className="w-5 h-5 text-destructive flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoIsItFor;