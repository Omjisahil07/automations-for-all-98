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

const CourseTrainer = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
            <span>Learn From </span>
            <span className="gradient-primary bg-clip-text text-transparent">
              Ambesh Tiwari
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <CometCard>
              <div className="relative">
                <img
                  src="/AmbeshImage.png"
                  alt="Ambesh Tiwari"
                  className="w-full h-auto rounded-xl object-cover"
                />
              </div>
            </CometCard>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Ambesh Tiwari is an Entrepreneur by mind & a mentor by heart. He
                is founder of Automation School and BDA Technologies Pvt Ltd,
                where he helps entrepreneurs, professionals, and businesses use
                Agentic AI to eliminate repetitive work and scale faster.
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
                to adopt AI and automation effectively.
              </p>
            </div>

            <ul className="space-y-3">
              {highlights.map((highlight, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 text-foreground"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CourseTrainer;
