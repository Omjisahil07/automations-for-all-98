import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useAnimations";
import { MessageSquare, Star, TrendingUp } from "lucide-react";
import { FloatingOrbs } from "./ui/floating-orbs";
import { CountUp } from "./ui/count-up";
import { MagneticButton } from "./ui/magnetic-button";

const Testimonials = () => {
  useScrollReveal();

  const testimonials = [
    {
      quote: "I landed my first ₹80,000 AI project within 3 weeks.",
      author: "Rahul S.",
      role: "Freelance Developer",
      avatar: "RS",
      rating: 5,
      gradient: "gradient-primary",
    },
    {
      quote:
        "I automated 70% of my client work, now I handle more clients without burning out.",
      author: "Priya M.",
      role: "Agency Owner",
      avatar: "PM",
      rating: 5,
      gradient: "gradient-accent",
    },
    {
      quote: "Doubled my monthly income in 60 days using this system.",
      author: "Amit K.",
      role: "Marketing Professional",
      avatar: "AK",
      rating: 5,
      gradient: "gradient-hero",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-8 md:py-12 lg:py-16 relative overflow-hidden">
      {/* Floating Orbs */}
      <FloatingOrbs count={3} className="opacity-20" />

      {/* Floating testimonial bubbles */}
      <motion.div 
        className="absolute top-1/4 left-10 w-6 h-6 rounded-full gradient-primary opacity-30"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute top-1/3 right-20 w-4 h-4 rounded-full gradient-accent opacity-40"
        animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div 
        className="absolute bottom-1/4 left-1/4 w-5 h-5 rounded-full gradient-hero opacity-35"
        animate={{ y: [0, -15, 0], x: [0, 20, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <div className="container mx-auto px-4 max-w-8xl relative z-10">
        <motion.div 
          className="text-center space-y-2 md:space-y-4 mb-6 md:mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center space-x-2 px-4 md:px-6 py-2 md:py-3 rounded-full glass-card backdrop-blur-xl border border-accent/20"
            whileHover={{ scale: 1.05 }}
          >
            <MessageSquare className="w-4 h-4 md:w-5 md:h-5 text-accent animate-pulse-glow" />
            <span className="text-xs md:text-sm font-medium text-accent">
              STUDENT SUCCESS
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black leading-tight">
            Stories of Our <span className="text-shimmer">Students.</span>
          </h2>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 mb-6 md:mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group"
            >
              <motion.div 
                className="glass-card p-4 md:p-6 rounded-3xl h-full relative overflow-hidden"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Background gradient */}
                <motion.div
                  className={`absolute top-0 right-0 w-32 h-32 ${testimonial.gradient} opacity-10 rounded-full blur-2xl`}
                  animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />

                <div className="relative z-10">
                  {/* Quote icon */}
                  <motion.div 
                    className="text-4xl md:text-6xl mb-4 md:mb-6 opacity-20"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 0.2, scale: 1 }}
                    viewport={{ once: true }}
                  >
                    "
                  </motion.div>

                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-4 md:mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Star className="w-4 h-4 md:w-5 md:h-5 fill-accent text-accent" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-lg md:text-xl font-medium mb-4 md:mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <motion.div
                      className={`w-12 h-12 md:w-16 md:h-16 rounded-full ${testimonial.gradient} flex items-center justify-center shadow-luxury`}
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    >
                      <span className="text-white font-bold text-sm md:text-lg">
                        {testimonial.avatar}
                      </span>
                    </motion.div>
                    <div>
                      <p className="font-bold text-base md:text-lg">
                        {testimonial.author}
                      </p>
                      <p className="text-sm md:text-base text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          className="mb-6 md:mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="glass-card rounded-3xl p-6 md:p-8 lg:p-12 backdrop-blur-xl border border-primary/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-center">
              {[
                { end: 1000, suffix: "+", label: "Successful Students", gradient: "gradient-primary" },
                { prefix: "₹", end: 2.5, suffix: "Cr+", label: "Revenue Generated", gradient: "gradient-accent", decimals: 1 },
                { end: 95, suffix: "%", label: "Success Rate", gradient: "gradient-hero" },
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="group space-y-1 md:space-y-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className={`text-2xl md:text-3xl lg:text-4xl font-heading font-black ${stat.gradient} bg-clip-text text-transparent`}>
                    <CountUp 
                      end={stat.end} 
                      suffix={stat.suffix} 
                      prefix={stat.prefix} 
                      duration={2.5}
                      decimals={stat.decimals || 0}
                    />
                  </div>
                  <p className="text-base md:text-lg font-medium text-muted-foreground group-hover:text-white transition-colors">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="glass-card rounded-3xl p-6 md:p-8 lg:p-12 max-w-5xl mx-auto backdrop-blur-xl border border-success/20 shadow-luxury">
            <div className="space-y-4 md:space-y-6">
              <p className="text-lg md:text-xl lg:text-2xl font-heading font-bold leading-tight text-muted-foreground">
                These aren't tech geniuses.{" "}
                <br className="hidden md:block" />
                They're people just like you who decided to{" "}
                <span className="gradient-hero bg-clip-text text-transparent">
                  stop watching and start building.
                </span>
              </p>

              <MagneticButton>
                <Button
                  variant="hero"
                  size="xl"
                  className="text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 rounded-full shadow-luxury hover:shadow-glow w-full sm:w-auto"
                >
                  <TrendingUp className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3" />
                  Join Them Today
                </Button>
              </MagneticButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
