import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MovingButton } from "./ui/moving-border";
import { Sparkles } from "lucide-react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { FloatingOrbs } from "./ui/floating-orbs";
import { CountUp } from "./ui/count-up";
import { MagneticButton } from "./ui/magnetic-button";

const students = [
  {
    id: 1,
    name: "Ravi Kumar",
    designation: "AI Automation Expert",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
  },
  {
    id: 2,
    name: "Om Ji ",
    designation: "Freelance Developer",
    image: "https://avatars.githubusercontent.com/u/121196157?s=96&v=4",
  },
  {
    id: 3,
    name: "Arjun Patel",
    designation: "Agency Owner",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 4,
    name: "Sneha Gupta",
    designation: "Marketing Director",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Vikash Singh",
    designation: "Tech Consultant",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 6,
    name: "Meera Joshi",
    designation: "Business Analyst",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export const HeroContent = () => {
  return (
    <div className="relative z-10 container mx-auto px-4 py-16 md:py-24 lg:py-32">
      {/* Floating Orbs Background */}
      <FloatingOrbs count={5} className="opacity-30" />
      
      <motion.div 
        className="text-center space-y-6 max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Pre-headline */}
        <motion.div className="mb-4 sm:mb-4" variants={itemVariants}>
          <motion.div 
            className="inline-flex items-center space-x-2 px-3 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full glass-card backdrop-blur-xl border border-white/20 shadow-luxury mt-16 sm:mt-24 lg:-mt-4"
            whileHover={{ scale: 1.02, borderColor: "rgba(255,255,255,0.4)" }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
            </motion.div>
            <span className="text-xs sm:text-sm md:text-lg font-medium text-shimmer">
              From Beginner to In-Demand in Just 30 Days
            </span>
            <motion.div
              animate={{ rotate: [0, -15, 15, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Main Headline */}
        <motion.div className="space-y-4 md:space-y-6" variants={itemVariants}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black leading-tight tracking-tight">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Build & Sell{" "}
            </motion.span>
            <span className="relative inline-block">
              <motion.span 
                className="text-shimmer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                AI Automations
              </motion.span>
              <motion.div 
                className="absolute -bottom-1 md:-bottom-2 left-0 right-0 h-0.5 md:h-1 gradient-hero rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              />
            </span>
            ,<br />
            <motion.span 
              className="text-xl md:text-3xl lg:text-4xl text-muted-foreground text-white font-normal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              Even If You&apos;re Not Technical
            </motion.span>
          </h1>
          <motion.p 
            className="text-base md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto font-light px-4"
            variants={itemVariants}
          >
            Learn to create{" "}
            <span className="font-semibold gradient-primary bg-clip-text text-transparent">
              Client-Ready AI Systems™
            </span>{" "}
            that businesses pay for, package them as services, and charge
            premium rates with confidence.
          </motion.p>
        </motion.div>

        {/* CTA Section */}
        <motion.div className="space-y-6 md:space-y-8" variants={itemVariants}>
          <div className="flex gap-4 md:gap-6 justify-center items-center">
            <MagneticButton strength={0.2}>
              <MovingButton
                borderRadius="2rem"
                width="20rem"
                height="2rem"
                className="text-lg md:text-xl px-6 md:px-8 py-3 md:py-4 rounded-2xl glass-card w-full sm:w-auto"
              >
                Start Your AI Journey Today
              </MovingButton>
            </MagneticButton>
          </div>

          <motion.div 
            className="flex flex-row items-center justify-center mb-6 md:mb-10 w-full"
            variants={itemVariants}
          >
            <AnimatedTooltip items={students} />
          </motion.div>

          {/* Counters / Social Proof */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-center pt-4 md:pt-6"
            variants={containerVariants}
          >
            {[
              { end: 1000, suffix: "+", label: "Students Trained" },
              { end: 95, suffix: "%", label: "Success Rate" },
              { end: 500, suffix: "+", label: "AI Automations Built" },
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="space-y-1 md:space-y-2 group"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-gradient-primary">
                  <CountUp end={stat.end} suffix={stat.suffix} duration={2.5} />
                </div>
                <p className="text-xs md:text-sm text-muted-foreground group-hover:text-white transition-colors">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};
