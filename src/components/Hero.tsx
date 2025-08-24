import { Button } from "@/components/ui/button";
import { useScrollReveal, useParallax, useMouseMove } from "@/hooks/useAnimations";
import heroImage from "@/assets/hero-automation.jpg";
import { ArrowRight, Sparkles, Zap, Target } from "lucide-react";

const Hero = () => {
  useScrollReveal();
  useParallax();
  const mousePosition = useMouseMove();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-mesh"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5 parallax-element"
        data-speed="0.3"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      
      {/* Dynamic Mouse-Following Gradient */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.15), transparent 40%)`
        }}
      ></div>
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full floating-element opacity-60"></div>
      <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-accent rounded-full floating-element opacity-40" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/3 left-1/6 w-4 h-4 bg-primary/30 rounded-full floating-element" style={{ animationDelay: '2s' }}></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center max-w-7xl">
        {/* Pre-headline */}
        <div className="mb-8 scroll-reveal">
          <div className="inline-flex items-center space-x-2 px-8 py-4 rounded-full glass-card backdrop-blur-xl border border-white/20 shadow-luxury">
            <Sparkles className="w-5 h-5 text-accent animate-pulse-glow" />
            <span className="text-lg font-medium text-shimmer">
              From Beginner to In-Demand in Just 30 Days
            </span>
            <Sparkles className="w-5 h-5 text-accent animate-pulse-glow" />
          </div>
        </div>
        
        {/* Main Headline */}
        <div className="mb-10 scroll-reveal">
          <h1 className="text-6xl md:text-8xl font-heading font-black mb-6 leading-tight tracking-tight">
            Build & Sell{" "}
            <span className="relative inline-block">
              <span className="text-shimmer">AI Automations</span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 gradient-hero rounded-full transform scale-x-0 animate-[scale-in_1s_ease-out_0.5s_forwards]"></div>
            </span>
            ,<br />
            <span className="text-5xl md:text-6xl text-muted-foreground font-normal">
              Even If You're Not Technical
            </span>
          </h1>
        </div>
        
        {/* Subheadline */}
        <div className="mb-16 scroll-reveal">
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-5xl mx-auto font-light">
            Learn to create{" "}
            <span className="font-semibold gradient-primary bg-clip-text text-transparent">
              Client-Ready AI Systems™
            </span>{" "}
            that businesses pay for, package them as services, and charge premium rates with confidence.
          </p>
        </div>
        
        {/* CTA Section */}
        <div className="scroll-reveal space-y-8">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              variant="hero" 
              size="xl" 
              className="text-xl px-12 py-6 rounded-2xl group hover-lift shadow-luxury"
            >
              <Zap className="w-6 h-6 mr-3 group-hover:animate-pulse-glow" />
              Start Your AI Journey Today
              <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="xl" 
              className="text-xl px-12 py-6 rounded-2xl glass-card border-white/20 hover:border-primary/40 hover-lift"
            >
              <Target className="w-6 h-6 mr-3" />
              View Success Stories
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="glass-card rounded-2xl p-8 max-w-2xl mx-auto backdrop-blur-xl">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-12 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-success rounded-full animate-pulse-glow"></div>
                <span className="font-medium">1,000+ Learners</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse-glow"></div>
                <span className="font-medium">Beginner-Friendly</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-primary rounded-full animate-pulse-glow"></div>
                <span className="font-medium">Results-Driven</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Gradient Orbs */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full gradient-primary opacity-20 blur-xl floating-element"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full gradient-accent opacity-20 blur-xl floating-element" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute top-1/2 left-20 w-24 h-24 rounded-full gradient-hero opacity-10 blur-xl floating-element" style={{ animationDelay: '3s' }}></div>
    </section>
  );
};

export default Hero;