import { motion } from "framer-motion";
import { Rocket, Sparkles, Globe } from "lucide-react";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { FloatingOrbs } from "@/components/ui/floating-orbs";
import { SparklesCore } from "@/components/ui/sparkles";
import { Link } from "react-router-dom";

const FinalCTA = () => {
  return (
    <section className="py-8 md:py-12 lg:py-16 relative overflow-hidden">
      {/* Floating Elements */}
      <FloatingOrbs count={5} />
      
      {/* Sparkles Background */}
      <div className="absolute inset-0 z-0">
        <SparklesCore
          id="finalcta-sparkles"
          background="transparent"
          minSize={0.4}
          maxSize={1.2}
          particleDensity={30}
          particleColor="hsl(var(--primary))"
        />
      </div>

      <div className="container mx-auto px-4 max-w-8xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-4 md:space-y-6"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center space-x-2 px-4 md:px-8 py-2 md:py-4 rounded-full glass-card backdrop-blur-xl border border-accent/20 shadow-luxury"
          >
            <Globe className="w-5 h-5 md:w-6 md:h-6 text-accent animate-pulse-glow" />
            <span className="text-sm md:text-lg font-medium text-accent">
              THE FUTURE IS NOW
            </span>
            <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-accent animate-pulse-glow" />
          </motion.div>

          {/* Main Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-black leading-tight"
          >
            Don't Watch the AI Boom. <br />
            <span className="text-shimmer">Lead It.</span>
          </motion.h2>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="space-y-4 md:space-y-6 text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto font-light leading-relaxed"
          >
            <p className="text-muted-foreground">AI isn't coming. It's here.</p>
            <p className="text-foreground">
              Every month you wait, someone else learns these skills and takes
              the opportunity meant for you.
            </p>
            <p className="text-xl md:text-2xl lg:text-3xl font-heading font-bold gradient-hero bg-clip-text text-transparent">
              Today is the day to act. Build your first automation. Land your
              first client. Claim your future.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-col gap-4 md:gap-6 justify-center items-center pt-2 md:pt-4"
          >
            <Link to="/choose">
              <MagneticButton strength={0.3}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="text-lg md:text-xl lg:text-2xl px-8 md:px-12 lg:px-16 py-4 md:py-6 lg:py-8 rounded-full group shadow-luxury hover:shadow-glow gradient-primary text-white font-bold flex items-center gap-3 md:gap-4"
                >
                  <Rocket className="w-6 h-6 md:w-8 md:h-8 group-hover:animate-pulse-glow" />
                  Start My AI Journey
                </motion.button>
              </MagneticButton>
            </Link>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="text-center space-y-2"
            >
              <p className="text-base md:text-lg font-medium text-muted-foreground">
                Start Your 30-Day Journey
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 md:space-x-6 text-sm">
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="flex items-center space-x-2"
                >
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <span>Risk-Free Guarantee</span>
                </motion.div>
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  className="flex items-center space-x-2"
                >
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span>Instant Access</span>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
