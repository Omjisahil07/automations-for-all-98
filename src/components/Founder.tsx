import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { CometCard } from "@/components/ui/comet-card";
import { CountUp } from "@/components/ui/count-up";

const highlights = [
  "12+ years of experience with an educational background in Engineering and Management",
  "Worked with companies like Tata Digital, Zen Technologies & Growth School Etc.",
  "Conducted AI programs for ICAI, ICSI, IEEE, IFERP and the Tanzania Ministry of Finance",
  'Author of "Accelerate with AI" (Amazon best seller)',
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4 },
  },
};

const Founder = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 max-w-8xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center space-y-3 md:space-y-4 mb-8 md:mb-10"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-black leading-tight">
            <span>Mentored By </span>
            <span className="gradient-primary bg-clip-text text-transparent">
              Ambesh Tiwari
            </span>
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <CometCard>
              <div className="relative space-y-4 md:space-y-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="w-full h-[20rem] md:h-[30rem] lg:h-[40rem] rounded-2xl flex items-center justify-center overflow-hidden"
                >
                  <img
                    src="/AmbeshImage.png"
                    alt="Ambesh Tiwari"
                    className="w-full h-45 object-cover rounded-xl"
                  />
                </motion.div>
              </div>
            </CometCard>
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6 order-2 lg:order-1"
          >
            <div>
              <h3
                className="text-2xl font-bold mb-3"
                style={{ color: "hsl(210, 40%, 98%)" }}
              >
                Why Learn From Ambesh?
              </h3>
              <div className="space-y-4 md:space-y-6 text-lg md:text-xl lg:text-2xl leading-relaxed text-muted-foreground font-light">
                <p>
                  Ambesh Tiwari is Entrepreneur by mind & a mentor by heart. He
                  is founder of Automation School and BDA Technologies Pvt Ltd,
                  where he helps entrepreneurs, professionals, and businesses
                  use AI automation to eliminate repetitive work and scale
                  faster.
                </p>
                <p>
                  Over the past 12+ years, he has trained more than{" "}
                  <span className="font-semibold gradient-primary bg-clip-text text-transparent">
                    <CountUp end={10000} suffix="+" /> learners
                  </span>{" "}
                  and guided{" "}
                  <span className="font-semibold gradient-primary bg-clip-text text-transparent">
                    <CountUp end={500} suffix="+" /> businesses
                  </span>{" "}
                  to adopt AI and automation effectively. His approach is
                  practical, outcome-driven, and trusted by both corporate and
                  government bodies.
                </p>
              </div>
              
              <motion.ul
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-4 text-white font-thin text-sm md:text-lg space-y-2"
              >
                {highlights.map((highlight, index) => (
                  <motion.div
                    variants={itemVariants}
                    className="flex items-center gap-3"
                    key={index}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                    >
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    </motion.div>
                    {highlight}
                  </motion.div>
                ))}
              </motion.ul>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-2"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant="hero"
                  size="lg"
                  className="rounded-full group bg-primary text-primary-foreground hover:bg-primary/90 hover:translate-y-[-2px] transition-transform"
                >
                  Start Learning From Ambesh Today
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
