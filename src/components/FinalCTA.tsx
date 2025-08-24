import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useAnimations";
import { Rocket, Zap, ArrowRight, Sparkles, Globe } from "lucide-react";

const FinalCTA = () => {
  useScrollReveal();

  return (
    <section className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Dynamic Background */}
      {/* <div className="absolute inset-0">
        <div className="absolute inset-0 gradient-mesh opacity-50"></div>
        <div className="absolute top-0 left-0 w-full h-full gradient-hero opacity-5"></div>
      </div> */}

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-40 h-40 rounded-full gradient-primary opacity-10 blur-3xl floating-element"></div>
      <div
        className="absolute bottom-20 right-10 w-52 h-52 rounded-full gradient-accent opacity-10 blur-3xl floating-element"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full gradient-hero opacity-5 blur-3xl floating-element"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container mx-auto px-4 max-w-8xl relative z-10">
        <div className="text-center space-y-8 md:space-y-12 scroll-reveal">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-4 md:px-8 py-2 md:py-4 rounded-full glass-card backdrop-blur-xl border border-accent/20 shadow-luxury">
            <Globe className="w-5 h-5 md:w-6 md:h-6 text-accent animate-pulse-glow" />
            <span className="text-sm md:text-lg font-medium text-accent">
              THE FUTURE IS NOW
            </span>
            <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-accent animate-pulse-glow" />
          </div>

          {/* Main Headline */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black leading-tight">
            Don't Watch the AI Boom. <br />
            <span className="text-shimmer">Lead It.</span>
          </h2>

          {/* Content */}
          <div className="space-y-4 md:space-y-6 text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto font-light leading-relaxed">
            <p className="text-muted-foreground">AI isn't coming. It's here.</p>
            <p className="text-foreground">
              Every month you wait, someone else learns these skills and takes
              the opportunity meant for you.
            </p>
            <p className="text-xl md:text-2xl lg:text-3xl font-heading font-bold gradient-hero bg-clip-text text-transparent">
              Today is the day to act. Build your first automation. Land your
              first client. Claim your future.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-6 md:gap-8 justify-center items-center pt-4 md:pt-8">
            <Button
              variant="hero"
              size="xl"
              className="text-lg md:text-xl lg:text-2xl px-8 md:px-12 lg:px-16 py-4 md:py-6 lg:py-8 rounded-2xl group shadow-luxury hover:shadow-glow w-full sm:w-auto"
            >
              <Rocket className="w-6 h-6 md:w-8 md:h-8 mr-3 md:mr-4 group-hover:animate-pulse-glow" />
              Join Automation School™ Today
              <ArrowRight className="w-6 h-6 md:w-8 md:h-8 ml-3 md:ml-4 group-hover:translate-x-2 transition-transform" />
            </Button>

            <div className="text-center space-y-2">
              <p className="text-base md:text-lg font-medium text-muted-foreground">
                Start Your 30-Day Journey
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 md:space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-success rounded-full animate-pulse-glow"></div>
                  <span>Risk-Free Guarantee</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse-glow"></div>
                  <span>Instant Access</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
