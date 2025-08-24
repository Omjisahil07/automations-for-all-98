import { useScrollReveal } from "@/hooks/useAnimations";
import { Users, Building2, Laptop, Star, ArrowRight } from "lucide-react";

const TargetAudience = () => {
  useScrollReveal();

  const audiences = [
    {
      icon: Laptop,
      title: "Freelancers",
      subtitle: "Transform Your Career",
      description: "Escape low-paying gigs. Start selling AI solutions clients can't ignore.",
      gradient: "gradient-primary",
      color: "text-primary"
    },
    {
      icon: Building2,
      title: "Agency Owners",
      subtitle: "Scale Your Business",
      description: "Add AI automations to your service suite. Raise your rates. Win bigger contracts.",
      gradient: "gradient-accent",
      color: "text-accent"
    },
    {
      icon: Users,
      title: "Working Professionals",
      subtitle: "Future-Proof Your Role",
      description: "Become the go-to AI expert in your company. Future-proof your career.",
      gradient: "gradient-hero",
      color: "text-primary"
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-card"></div>
      
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, hsl(214 84% 56% / 0.1) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, hsl(35 91% 65% / 0.1) 0%, transparent 50%)
          `
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-20 scroll-reveal">
          <div className="inline-flex items-center space-x-2 px-6 py-3 rounded-full glass-card backdrop-blur-xl border border-accent/20 mb-8">
            <Star className="w-5 h-5 text-accent animate-pulse-glow" />
            <span className="text-sm font-medium text-accent">BUILT FOR AMBITIOUS LEARNERS</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-heading font-black mb-8 leading-tight">
            Built for Ambitious Learners Who{" "}
            <span className="text-shimmer">Refuse to Stay Average.</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto font-light">
            Automation School™ was designed for those who know they're meant for more:
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {audiences.map((audience, index) => (
            <div key={index} className="scroll-reveal group" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="glass-card p-12 rounded-3xl hover-lift transition-luxury h-full relative overflow-hidden">
                {/* Background Gradient */}
                <div className={`absolute top-0 right-0 w-32 h-32 ${audience.gradient} opacity-10 rounded-full blur-2xl transform translate-x-8 -translate-y-8`}></div>
                
                <div className="relative z-10">
                  <div className={`w-24 h-24 rounded-2xl ${audience.gradient} mx-auto mb-8 flex items-center justify-center group-hover:animate-pulse-glow shadow-luxury`}>
                    <audience.icon className="w-12 h-12 text-white" />
                  </div>
                  
                  <div className="text-center mb-8">
                    <h3 className={`text-3xl font-heading font-bold mb-2 ${audience.color}`}>
                      {audience.title}
                    </h3>
                    <p className="text-lg font-medium text-muted-foreground mb-4">
                      {audience.subtitle}
                    </p>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
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
          <div className="glass-card rounded-3xl p-16 max-w-5xl mx-auto backdrop-blur-xl border border-primary/20 shadow-luxury">
            <p className="text-3xl md:text-4xl font-heading font-bold leading-tight">
              This is not just training.{" "}
              <br className="hidden md:block" />
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