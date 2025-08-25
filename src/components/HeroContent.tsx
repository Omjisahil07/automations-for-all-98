import { Button } from "@/components/ui/button";
import { MovingButton } from "./ui/moving-border";
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
    <div className="relative z-10 container mx-auto px-4 py-16 md:py-24 lg:py-32">
      <div className="text-center space-y-6 max-w-6xl mx-auto">
        {/* Pre-headline */}
        <div className="mb-4 sm:mb-4 scroll-reveal">
          <div className="inline-flex items-center space-x-2 px-3 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full glass-card backdrop-blur-xl border border-white/20 shadow-luxury mt-16 sm:mt-24 lg:-mt-4">
            {/* Adjusted `mt-6` for more top margin on mobile screens */}
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-accent animate-pulse-glow" />
            <span className="text-xs sm:text-sm md:text-lg font-medium text-shimmer">
              From Beginner to In-Demand in Just 30 Days
            </span>
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-accent animate-pulse-glow" />
          </div>
        </div>

        {/* Main Headline */}
        <div className="space-y-4 md:space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black leading-tight tracking-tight">
            Build & Sell{" "}
            <span className="relative inline-block">
              <span className="text-shimmer">AI Automations</span>
              <div className="absolute -bottom-1 md:-bottom-2 left-0 right-0 h-0.5 md:h-1 gradient-hero rounded-full transform scale-x-0 animate-[scale-in_1s_ease-out_0.5s_forwards]"></div>
            </span>
            ,<br />
            <span className="text-xl md:text-3xl lg:text-4xl text-muted-foreground text-white font-normal">
              Even If You&apos;re Not Technical
            </span>
          </h1>
          <p className="text-base md:text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto font-light px-4">
            Learn to create{" "}
            <span className="font-semibold gradient-primary bg-clip-text text-transparent">
              Client-Ready AI Systems™
            </span>{" "}
            that businesses pay for, package them as services, and charge
            premium rates with confidence.
          </p>
        </div>

        {/* CTA Section */}
        <div className="space-y-6 md:space-y-8">
          {/* Adjusted spacing for consistency */}
          <div className="flex gap-4 md:gap-6 justify-center items-center">
            <MovingButton
              borderRadius="2rem"
              width="20rem"
              height="2rem"
              className="text-lg md:text-xl px-6 md:px-8 py-3 md:py-4 rounded-2xl glass-card w-full sm:w-auto"
            >
              Start Your AI Journey Today
            </MovingButton>
          </div>

          <div className="flex flex-row items-center justify-center mb-6 md:mb-10 w-full">
            <AnimatedTooltip items={students} />
          </div>

          {/* Counters / Social Proof */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-center pt-4 md:pt-6">
            <div className="space-y-1 md:space-y-2">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-gradient-primary">
                <AnimatedCounter target={1000} suffix="+" />
              </div>
              <p className="text-xs md:text-sm text-muted-foreground">
                Students Trained
              </p>
            </div>
            <div className="space-y-1 md:space-y-2">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-gradient-primary">
                <AnimatedCounter target={95} suffix="%" />
              </div>
              <p className="text-xs md:text-sm text-muted-foreground">
                Success Rate
              </p>
            </div>
            <div className="space-y-1 md:space-y-2">
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-gradient-primary">
                <AnimatedCounter target={500} suffix="+" />
              </div>
              <p className="text-xs md:text-sm text-muted-foreground">
                AI Automations Built
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
