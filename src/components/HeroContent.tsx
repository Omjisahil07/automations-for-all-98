import { motion } from "framer-motion";
import { MovingButton } from "./ui/moving-border";
import { Sparkles, CheckCircle } from "lucide-react";
import { FloatingOrbs } from "./ui/floating-orbs";
import { MagneticButton } from "./ui/magnetic-button";

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

const trustItems = [
  { text: "Beginner Friendly" },
  { text: "No Coding Needed" },
  { text: "Learn → Build → Earn" },
];

export const HeroContent = () => {
  return (
    <div className="relative z-10 container mx-auto px-4 pt-20 pb-8 md:py-20 lg:py-28 flex items-center min-h-[85vh] md:min-h-screen">
      {/* Floating Orbs Background - Less on mobile */}
      <FloatingOrbs count={3} className="opacity-20 md:opacity-30" />
      
      <motion.div 
        className="text-center space-y-4 md:space-y-6 max-w-6xl mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Pre-headline */}
        <motion.div className="mb-2 sm:mb-3" variants={itemVariants}>
          <motion.div 
            className="inline-flex items-center space-x-1.5 sm:space-x-2 px-3 sm:px-5 md:px-6 py-1.5 sm:py-2 md:py-3 rounded-full glass-card backdrop-blur-xl border border-white/20 shadow-luxury"
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
              🔥 Limited Seats Available
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
        <motion.div className="space-y-2 md:space-y-4" variants={itemVariants}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-black leading-tight tracking-tight">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Build and sell{" "}
            </motion.span>
            <span className="relative inline-block">
              <motion.span 
                className="text-shimmer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Agentic AI automation
              </motion.span>
              <motion.div 
                className="absolute -bottom-1 md:-bottom-2 left-0 right-0 h-0.5 md:h-1 gradient-hero rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              />
            </span>
            .<br />
            <motion.span 
              className="text-lg sm:text-xl md:text-2xl lg:text-4xl text-muted-foreground text-white font-normal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              No tech skills needed.
            </motion.span>
          </h1>
          <motion.p 
            className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto font-light px-2"
            variants={itemVariants}
          >
            Learn how to create automation systems businesses pay for and turn the skill into income.
          </motion.p>
        </motion.div>

        {/* CTA Section */}
        <motion.div className="space-y-4 md:space-y-6" variants={itemVariants}>
          <div className="flex flex-col gap-2 md:gap-3 justify-center items-center">
            <MagneticButton strength={0.2}>
              <MovingButton
                borderRadius="1.5rem"
                width="100%"
                height="1.5rem"
                className="text-base md:text-lg px-4 md:px-6 py-2 md:py-3 rounded-xl glass-card max-w-xs sm:max-w-sm"
              >
                🔥 Start Learning
              </MovingButton>
            </MagneticButton>
            <p className="text-xs sm:text-sm text-muted-foreground">
              No obligation. Limited seats.
            </p>
          </div>

          {/* Trust Icons Row */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 md:gap-6 pt-4 md:pt-6"
            variants={containerVariants}
          >
            {trustItems.map((item, index) => (
              <motion.div 
                key={index}
                className="flex items-center space-x-1.5 md:space-x-2 group"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500" />
                <span className="text-xs sm:text-sm md:text-base text-foreground font-medium">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};
