import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { ArrowRight, Sparkles, Zap, Target } from "lucide-react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

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
    name: "Priya Sharma",
    designation: "Freelance Developer",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
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

const AnimatedCounter = ({
  target,
  suffix = "",
}: {
  target: number;
  suffix?: string;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    const stepDuration = duration / steps;

    let currentCount = 0;
    const timer = setInterval(() => {
      currentCount += increment;
      if (currentCount >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(currentCount));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

export const HeroContent = () => {
  return (
    <div className="relative z-10 container mx-auto px-4 py-12">
      <div className="text-center space-y-6 max-w-4xl mx-auto">
        {/* Pre-headline */}
        <div className="mb-3 scroll-reveal">
          <div className="inline-flex items-center space-x-2 px-8 py-4 rounded-full glass-card backdrop-blur-xl border border-white/20 shadow-luxury">
            <Sparkles className="w-5 h-5 text-accent animate-pulse-glow" />
            <span className="text-small font-medium text-shimmer">
              From Beginner to In-Demand in Just 30 Days
            </span>
            <Sparkles className="w-5 h-5 text-accent animate-pulse-glow" />
          </div>
        </div>

        {/* Main Headline */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-display font-black mb-4 leading-tight tracking-tight">
            Build & Sell{" "}
            <span className="relative inline-block">
              <span className="text-shimmer">AI Automations</span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 gradient-hero rounded-full transform scale-x-0 animate-[scale-in_1s_ease-out_0.5s_forwards]"></div>
            </span>
            ,<br />
            <span className="text-3xl md:text-4xl text-muted-foreground font-normal">
              Even If You're Not Technical
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-5xl mx-auto font-light">
            Learn to create{" "}
            <span className="font-semibold gradient-primary bg-clip-text text-transparent">
              Client-Ready AI Systems™
            </span>{" "}
            that businesses pay for, package them as services, and charge
            premium rates with confidence.
          </p>
        </div>

        {/* CTA Section */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              variant="cta"
              size="lg"
              className="text-lg px-8 py-4 rounded-2xl group hover-lift shadow-neural"
            >
              Start Your AI Journey Today
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 rounded-2xl glass-card hover-lift"
            >
              View Success Stories
            </Button>
          </div>

          <div className="flex flex-row items-center justify-center mb-10 w-full">
            <AnimatedTooltip items={students} />
          </div>

        
          {/* Counters / Social Proof */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center pt-6">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-gradient-primary">
                <AnimatedCounter target={10000} suffix="+" />
              </div>
              <p className="text-muted-foreground">Students Trained</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-gradient-primary">
                <AnimatedCounter target={95} suffix="%" />
              </div>
              <p className="text-muted-foreground">Success Rate</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold text-gradient-primary">
                <AnimatedCounter target={500} suffix="+" />
              </div>
              <p className="text-muted-foreground">AI Automations Built</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

