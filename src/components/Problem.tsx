import { useScrollReveal } from "@/hooks/useAnimations";
import { X, CheckCircle, AlertTriangle } from "lucide-react";

const Problem = () => {
  useScrollReveal();

  const problems = [
    {
      icon: X,
      text: "You waste time learning tools you can't monetize."
    },
    {
      icon: X,
      text: "Clients don't see you as different from the crowd."
    },
    {
      icon: X,
      text: "You feel behind while others are already cashing in."
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 gradient-subtle"></div>
      
      {/* Animated noise pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              hsl(214 84% 56% / 0.1),
              hsl(214 84% 56% / 0.1) 1px,
              transparent 1px,
              transparent 20px
            )
          `
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-20 scroll-reveal">
          <div className="inline-flex items-center space-x-2 px-6 py-3 rounded-full glass-card backdrop-blur-xl border border-destructive/20 mb-8">
            <AlertTriangle className="w-5 h-5 text-destructive animate-pulse-glow" />
            <span className="text-sm font-medium text-destructive">THE REAL PROBLEM</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-heading font-black mb-8 leading-tight">
            The Problem Isn't AI.{" "}
            <br />
            <span className="text-destructive">The Problem Is Noise.</span>
          </h2>
          
          <div className="space-y-8 text-xl md:text-2xl max-w-5xl mx-auto font-light leading-relaxed">
            <p className="text-muted-foreground">
              YouTube tutorials. Twitter threads. Random hacks.
            </p>
            <p className="text-foreground font-medium text-2xl md:text-3xl">
              They leave you{" "}
              <span className="text-destructive font-bold">overwhelmed</span>,{" "}
              <span className="text-destructive font-bold">scattered</span>, and{" "}
              <span className="text-destructive font-bold">unsure where to start</span>.
            </p>
          </div>
        </div>
        
        <div className="scroll-reveal">
          <div className="glass-card rounded-3xl p-12 mb-16 backdrop-blur-xl border border-destructive/20 shadow-luxury max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-destructive">
                The result?
              </h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {problems.map((problem, index) => (
                <div key={index} className="scroll-reveal group" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="bg-destructive/5 border border-destructive/20 rounded-2xl p-8 hover-lift transition-luxury h-full">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-full bg-destructive/20 flex items-center justify-center flex-shrink-0 group-hover:animate-pulse-glow">
                        <problem.icon className="w-6 h-6 text-destructive" />
                      </div>
                      <p className="text-lg leading-relaxed font-medium">{problem.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="text-center scroll-reveal">
          <div className="glass-card rounded-3xl p-16 max-w-5xl mx-auto backdrop-blur-xl border border-success/20 shadow-luxury">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <CheckCircle className="w-12 h-12 text-success animate-pulse-glow" />
              <div className="w-16 h-1 bg-success rounded-full"></div>
              <CheckCircle className="w-12 h-12 text-success animate-pulse-glow" />
            </div>
            <p className="text-3xl md:text-4xl font-heading font-bold leading-tight">
              👉 The truth?{" "}
              <span className="text-muted-foreground">You don't need more tools.</span>
              <br />
              You need a{" "}
              <span className="gradient-hero bg-clip-text text-transparent">
                system
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;