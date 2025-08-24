import { useScrollReveal } from "@/hooks/useAnimations";
import { TrendingUp, Users, Building, Briefcase } from "lucide-react";

const NewEra = () => {
  useScrollReveal();

  return (
    <section className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-background/5"></div>

      {/* Floating Background Elements */}
      <div className="absolute top-20 left-1/4 w-64 h-64 rounded-full gradient-primary opacity-5 blur-3xl floating-element"></div>
      <div
        className="absolute bottom-20 right-1/4 w-96 h-96 rounded-full gradient-accent opacity-5 blur-3xl floating-element"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container mx-auto px-4 max-w-8xl relative z-10">
        <div className="text-center space-y-4 md:space-y-6 mb-12 md:mb-16 lg:mb-20 scroll-reveal">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black leading-tight">
            A New Era of Work Has <span className="text-shimmer">Begun.</span>
          </h2>
          <div className="space-y-4 md:space-y-6 text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto font-light leading-relaxed">
            <p className="text-muted-foreground">
              Every industry is shifting. Repetitive work is disappearing.
            </p>
            <p className="text-foreground font-medium">
              But a new kind of expert is rising, the{" "}
              <span className="gradient-hero bg-clip-text text-transparent font-bold">
                AI automation professional.
              </span>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          <div className="scroll-reveal group">
            <div className="glass-card p-6 md:p-8 lg:p-12 rounded-3xl hover-lift transition-luxury h-full">
              <div className="text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full gradient-primary mx-auto mb-6 md:mb-8 flex items-center justify-center group-hover:animate-pulse-glow">
                  <TrendingUp className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-heading font-bold mb-4 md:mb-6 leading-tight">
                  Works smarter,{" "}
                  <span className="text-primary">not harder.</span>
                </h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Leverage AI to automate complex workflows while you focus on
                  strategy and growth.
                </p>
              </div>
            </div>
          </div>

          <div
            className="scroll-reveal group"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="glass-card p-6 md:p-8 lg:p-12 rounded-3xl hover-lift transition-luxury h-full">
              <div className="text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full gradient-accent mx-auto mb-6 md:mb-8 flex items-center justify-center group-hover:animate-pulse-glow">
                  <Briefcase className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-heading font-bold mb-4 md:mb-6 leading-tight">
                  Gets paid for{" "}
                  <span className="text-accent">ideas, not hours.</span>
                </h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Create value through intelligent solutions that scale beyond
                  your time investment.
                </p>
              </div>
            </div>
          </div>

          <div
            className="scroll-reveal group"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="glass-card p-6 md:p-8 lg:p-12 rounded-3xl hover-lift transition-luxury h-full">
              <div className="text-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full gradient-hero mx-auto mb-6 md:mb-8 flex items-center justify-center group-hover:animate-pulse-glow">
                  <Users className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-heading font-bold mb-4 md:mb-6 leading-tight">
                  Builds solutions once…{" "}
                  <span className="gradient-hero bg-clip-text text-transparent">
                    and earns from them again and again.
                  </span>
                </h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Create scalable automation systems that generate recurring
                  revenue streams.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center scroll-reveal">
          <div className="glass-card rounded-2xl p-6 md:p-8 lg:p-12 max-w-4xl mx-auto backdrop-blur-xl border border-accent/20">
            <p className="text-xl md:text-2xl lg:text-3xl font-heading font-bold">
              The only question:{" "}
              <span className="text-accent">Will you adapt,</span> or{" "}
              <span className="text-destructive">be left behind?</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewEra;
