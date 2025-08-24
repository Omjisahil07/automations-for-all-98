import { useScrollReveal } from "@/hooks/useAnimations";
import { TrendingUp, Users, Building, Briefcase } from "lucide-react";

const NewEra = () => {
  useScrollReveal();

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 gradient-subtle"></div>
      
      {/* Floating Background Elements */}
      <div className="absolute top-20 left-1/4 w-64 h-64 rounded-full gradient-primary opacity-5 blur-3xl floating-element"></div>
      <div className="absolute bottom-20 right-1/4 w-96 h-96 rounded-full gradient-accent opacity-5 blur-3xl floating-element" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-20 scroll-reveal">
          <h2 className="text-5xl md:text-7xl font-heading font-black mb-8 leading-tight">
            A New Era of Work Has{" "}
            <span className="text-shimmer">Begun.</span>
          </h2>
          <div className="space-y-8 text-xl md:text-2xl max-w-5xl mx-auto font-light leading-relaxed">
            <p className="text-muted-foreground">
              Every industry is shifting. Repetitive work is disappearing.
            </p>
            <p className="text-foreground font-medium">
              But a new kind of expert is rising — the{" "}
              <span className="gradient-hero bg-clip-text text-transparent font-bold">
                AI automation professional.
              </span>
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="scroll-reveal group">
            <div className="glass-card p-10 rounded-3xl hover-lift transition-luxury h-full">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full gradient-primary mx-auto mb-8 flex items-center justify-center group-hover:animate-pulse-glow">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-6 leading-tight">
                  Works smarter,{" "}
                  <span className="text-primary">not harder.</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Leverage AI to automate complex workflows while you focus on strategy and growth.
                </p>
              </div>
            </div>
          </div>
          
          <div className="scroll-reveal group" style={{ animationDelay: '0.2s' }}>
            <div className="glass-card p-10 rounded-3xl hover-lift transition-luxury h-full">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full gradient-accent mx-auto mb-8 flex items-center justify-center group-hover:animate-pulse-glow">
                  <Briefcase className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-6 leading-tight">
                  Gets paid for{" "}
                  <span className="text-accent">ideas, not hours.</span>
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Create value through intelligent solutions that scale beyond your time investment.
                </p>
              </div>
            </div>
          </div>
          
          <div className="scroll-reveal group" style={{ animationDelay: '0.4s' }}>
            <div className="glass-card p-10 rounded-3xl hover-lift transition-luxury h-full">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full gradient-hero mx-auto mb-8 flex items-center justify-center group-hover:animate-pulse-glow">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-heading font-bold mb-6 leading-tight">
                  Builds solutions once…{" "}
                  <span className="gradient-hero bg-clip-text text-transparent">
                    and earns from them again and again.
                  </span>
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Create scalable automation systems that generate recurring revenue streams.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center scroll-reveal">
          <div className="glass-card rounded-2xl p-12 max-w-4xl mx-auto backdrop-blur-xl border border-accent/20">
            <p className="text-2xl md:text-3xl font-heading font-bold">
              👉 The only question:{" "}
              <span className="text-accent">Will you adapt,</span>{" "}
              or{" "}
              <span className="text-destructive">be left behind?</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewEra;