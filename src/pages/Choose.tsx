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
            className="text-center max-w-4xl mx-auto mb-12"
          >
            <motion.div 
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-full glass-card border border-primary/20 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">CHOOSE YOUR PATH</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-6">
              Start Where{" "}
              <span className="gradient-primary bg-clip-text text-transparent">You Are</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              One skill. Four ways to learn. Pick the path that matches your goals and timeline.
            </p>
          </motion.div>

          {/* Path Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {paths.map((path, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="relative"
              >
                {path.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                    <span className="px-4 py-1.5 text-xs font-bold rounded-full gradient-hero text-white">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                
                <CardSpotlight className={`h-full ${path.popular ? 'border-2 border-primary/40' : ''}`}>
                  <div className="p-6 h-full flex flex-col">
                    {/* Icon */}
                    <div className={`w-14 h-14 rounded-xl ${path.gradient} flex items-center justify-center mb-4`}>
                      <path.icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-heading font-bold mb-1">{path.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{path.subtitle}</p>

                    {/* Duration Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted/50 text-xs font-medium mb-4 w-fit">
                      <Clock className="w-3 h-3" />
                      {path.duration}
                    </div>

                    {/* Price */}
                    <div className="mb-4">
                      <span className="text-2xl font-heading font-black gradient-primary bg-clip-text text-transparent">
                        {path.price}
                      </span>
                    </div>

                    {/* Ideal For */}
                    <p className="text-sm text-muted-foreground mb-4">
                      <span className="font-semibold text-foreground">Ideal for:</span> {path.idealFor}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6 flex-grow">
                      {path.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Link to={path.route}>
                      <Button
                        variant={path.popular ? "cta" : "outline"}
                        className="w-full rounded-full group"
                      >
                        View Program
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
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
            className="text-center mt-12"
          >
            <p className="text-muted-foreground mb-4">
              Not sure which path is right for you?
            </p>
            <Link to="/#pricing">
              <Button variant="ghost" className="group">
                Take the 30-second quiz
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
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
