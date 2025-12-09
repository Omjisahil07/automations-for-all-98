import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Crown, Users, Sparkles, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CardSpotlight } from "@/components/ui/card-spotlight";
import { FloatingOrbs } from "@/components/ui/floating-orbs";

const paths = [
  {
    title: "Agentic AI Launchpad",
    subtitle: "Self-Paced Learning",
    price: "₹1,499",
    icon: Sparkles,
    idealFor: "Complete beginners who want to learn at their own pace",
    promise: "Learn AI automation fundamentals with 12 modules and build your first workflow.",
    features: [
      "12 video modules",
      "Lifetime access",
      "Certificate included",
    ],
    route: "/launchpad",
    gradient: "gradient-accent",
    duration: "Self-paced",
  },
  {
    title: "Agentic AI Bootcamp",
    subtitle: "2-Day Live Intensive",
    price: "₹4,999",
    icon: Clock,
    idealFor: "Action takers who want fast hands-on results",
    promise: "Build your first working automation in one weekend with live guidance.",
    features: [
      "2 days live in Delhi",
      "Hands-on building",
      "Starter certification",
    ],
    route: "/bootcamp",
    gradient: "gradient-primary",
    duration: "2 Days",
  },
  {
    title: "Agentic AI Accelerator",
    subtitle: "14-Day Intensive",
    price: "₹14,999",
    icon: Users,
    idealFor: "Those who know basics and want to build real projects",
    promise: "Build multiple automation systems and earn the Builder Certification.",
    features: [
      "14 days structured",
      "Live sessions",
      "Portfolio building",
    ],
    route: "/accelerator",
    gradient: "gradient-primary",
    duration: "14 Days",
  },
  {
    title: "Agentic AI Mastery",
    subtitle: "3-Month Professional Program",
    price: "₹59,999",
    icon: Crown,
    idealFor: "Serious learners who want to become certified professionals",
    promise: "Become a Certified Agentic AI Practitioner™ and build a career in automation.",
    features: [
      "3 months intensive",
      "1-on-1 mentorship",
      "Practitioner certification",
    ],
    route: "/mastery",
    gradient: "gradient-hero",
    popular: true,
    duration: "3 Months",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const Choose = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      
      <section className="pt-32 pb-20 relative overflow-hidden">
        <FloatingOrbs count={4} className="opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <motion.div 
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-full glass-card border border-primary/20 mb-8"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">CHOOSE YOUR PATH</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-black mb-8">
              Start Where{" "}
              <span className="gradient-primary bg-clip-text text-transparent">You Are</span>
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-3xl mx-auto">
              One skill. Four ways to learn. Pick the path that matches your goals and timeline.
            </p>
          </motion.div>

          {/* Path Cards - Desktop Optimized */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 max-w-7xl mx-auto"
          >
            {paths.map((path, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="relative group"
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                {path.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <span className="px-5 py-2 text-xs font-bold rounded-full gradient-hero text-white shadow-lg">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                
                <CardSpotlight className={`h-full ${path.popular ? 'border-2 border-primary/40 shadow-xl shadow-primary/10' : ''}`}>
                  <div className="p-8 h-full flex flex-col min-h-[520px]">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-2xl ${path.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <path.icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-heading font-bold mb-2">{path.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{path.subtitle}</p>

                    {/* Duration Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-muted/50 text-sm font-medium mb-5 w-fit">
                      <Clock className="w-4 h-4" />
                      {path.duration}
                    </div>

                    {/* Price */}
                    <div className="mb-5">
                      <span className="text-3xl font-heading font-black gradient-primary bg-clip-text text-transparent">
                        {path.price}
                      </span>
                    </div>

                    {/* Ideal For */}
                    <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                      <span className="font-semibold text-foreground">Ideal for:</span> {path.idealFor}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 mb-8 flex-grow">
                      {path.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center gap-3 text-sm">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Link to={path.route}>
                      <Button
                        variant={path.popular ? "cta" : "outline"}
                        size="lg"
                        className="w-full rounded-full group/btn"
                      >
                        View Program
                        <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </CardSpotlight>
              </motion.div>
            ))}
          </motion.div>

          {/* Help Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center mt-16"
          >
            <p className="text-lg text-muted-foreground mb-5">
              Not sure which path is right for you?
            </p>
            <Link to="/#pricing">
              <Button variant="ghost" size="lg" className="group text-lg">
                Take the 30-second quiz
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Choose;
