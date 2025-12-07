import { useScrollReveal } from "@/hooks/useAnimations";
import { Users, Building2, Laptop, Star, ArrowRight } from "lucide-react";

const TargetAudience = () => {
  useScrollReveal();

  const audiences = [
    {
      icon: Laptop,
      title: "Freelancers",
      subtitle: "Transform Your Career",
      description:
        "Escape low-paying gigs. Start selling AI solutions clients can't ignore.",
      gradient: "gradient-primary",
      color: "text-primary",
    },
    {
      icon: Building2,
      title: "Agency Owners",
      subtitle: "Scale Your Business",
      description:
        "Add Agent AI to your service suite. Raise your rates. Win bigger contracts.",
      gradient: "gradient-accent",
      color: "text-accent",
    },
    {
      icon: Users,
      title: "Working Professionals",
      subtitle: "Future-Proof Your Role",
      description:
        "Become the go-to AI expert in your company. Future-proof your career.",
      gradient: "gradient-hero",
      color: "text-primary",
    },
  ];

  return (
    <section className="py-8 md:py-12 lg:py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-background/10"></div>

      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            radial-gradient(circle at 25% 25%, hsl(214 84% 56% / 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, hsl(35 91% 65% / 0.1) 0%, transparent 50%)
          `,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 max-w-8xl relative z-10">
        <div className="text-center space-y-2 md:space-y-3 mb-6 md:mb-8 scroll-reveal">
          <div className="inline-flex items-center space-x-2 px-4 md:px-6 py-2 md:py-3 rounded-full glass-card backdrop-blur-xl border border-accent/20">
            <Star className="w-4 h-4 md:w-5 md:h-5 text-accent animate-pulse-glow" />
            <span className="text-xs md:text-sm font-medium text-accent">
              BUILT FOR AMBITIOUS LEARNERS
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black leading-tight">
            Built for Ambitious Learners Who{" "}
            <span className="text-shimmer">Refuse to Stay Average.</span>
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed">
            Automation School was designed for those who know they're meant for
            more:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="scroll-reveal group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="glass-card p-6 md:p-8 lg:p-12 rounded-3xl hover-lift transition-luxury h-full relative overflow-hidden">
                {/* Background Gradient */}
                <div
                  className={`absolute top-0 right-0 w-32 h-32 ${audience.gradient} opacity-10 rounded-full blur-2xl transform translate-x-8 -translate-y-8`}
                ></div>

                <div className="relative z-10">
                  <div
                    className={`w-20 h-20 md:w-24 md:h-24 rounded-2xl ${audience.gradient} mx-auto mb-6 md:mb-8 flex items-center justify-center group-hover:animate-pulse-glow shadow-luxury`}
                  >
                    <audience.icon className="w-10 h-10 md:w-12 md:h-12 text-white" />
                  </div>

                  <div className="text-center mb-6 md:mb-8">
                    <h3
                      className={`text-2xl md:text-3xl font-heading font-bold mb-2 ${audience.color}`}
                    >
                      {audience.title}
                    </h3>
                    <p className="text-base md:text-lg font-medium text-muted-foreground mb-4">
                      {audience.subtitle}
                    </p>
                  </div>

                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6 md:mb-8">
                    {audience.description}
                  </p>

                  <div className="flex items-center justify-center space-x-2 text-sm font-medium text-primary group-hover:text-accent transition-colors">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center scroll-reveal">
          <div className="glass-card rounded-3xl p-6 md:p-8 lg:p-12 max-w-5xl mx-auto backdrop-blur-xl border border-primary/20 shadow-luxury">
            <p className="text-xl md:text-2xl lg:text-3xl font-heading font-bold leading-tight">
              This is not just training. <br className="hidden md:block" />
              It's your{" "}
              <span className="gradient-accent bg-clip-text text-transparent">
                unfair advantage
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
