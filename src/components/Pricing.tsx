import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useAnimations";
import { Crown, Star, Gift, Clock, Users, Trophy } from "lucide-react";

const Pricing = () => {
  useScrollReveal();

  const paths = [
    {
      title: "The Bootcamp",
      subtitle: "2-Day AI Kickstart",
      price: "₹9,999",
      originalPrice: "₹19,999",
      badge: "WEEKEND WARRIOR",
      icon: Clock,
      bestFor: "Beginners and professionals who want to get hands-on results immediately.",
      promise: "Build and deploy your first powerful AI automation in a single weekend. You'll walk away with a tangible skill and a clear understanding of the opportunity.",
      features: [
        "An intensive live weekend workshop in Delhi.",
        "Build one complete, real-world automation from start to finish.",
        "Step-by-step guidance directly from our expert instructors.",
        "Become a certified AI Automation expert in 2 days"
      ],
      cta: "Perfect for getting a quick, powerful win.",
      popular: false,
      gradient: "gradient-primary",
      glowColor: "primary"
    },
    {
      title: "AI Automation Mastery",
      subtitle: "The Flagship Course",
      price: "₹59,999",
      originalPrice: "₹99,999",
      badge: "MOST POPULAR",
      icon: Crown,
      bestFor: "Freelancers, agency owners, and professionals who are serious about building a high-income career in AI automation.",
      promise: "Go from beginner to a certified, in-demand AI Automation Professional in 90 days. Master the complete Client-Ready AI Systems™ framework, build a robust portfolio, and learn to confidently pitch, price, and win high-value clients.",
      features: [
        "90-day comprehensive curriculum with live and on-demand lessons.",
        "Build a portfolio of 5+ advanced, client-ready automations.",
        "The complete Monetization Playbook (proposal templates, pricing frameworks, and client-getting scripts).",
        "Weekly group coaching calls and direct mentorship.",
        "Lifetime access to our private community and all future course updates."
      ],
      cta: "The ultimate path to becoming a top-tier automation expert.",
      popular: true,
      gradient: "gradient-hero",
      glowColor: "accent"
    },
    {
      title: "Automation Accelerator",
      subtitle: "The Self-Paced Program",
      price: "₹14,999",
      originalPrice: "₹29,999",
      badge: "SELF-STARTER",
      icon: Users,
      bestFor: "Self-starters, entrepreneurs, and busy professionals who need maximum flexibility.",
      promise: "Master the core principles of the Client-Ready AI System™ entirely on your own schedule. Get the essential knowledge, tools, and templates to start building effective automations immediately.",
      features: [
        "Instant, lifetime access to the complete library of core video lessons.",
        "A rich collection of plug-and-play automation templates and resources.",
        "Learn the A-to-Z process of building and monetizing your skills at your own pace."
      ],
      cta: "Ideal for learning on your own schedule.",
      popular: false,
      gradient: "gradient-accent",
      glowColor: "success"
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-card"></div>
      
      {/* Animated Pricing Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            radial-gradient(circle at 20% 80%, hsl(214 84% 56% / 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, hsl(35 91% 65% / 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, hsl(142 71% 45% / 0.2) 0%, transparent 50%)
          `
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 max-w-8xl relative z-10">
        <div className="text-center mb-20 scroll-reveal">
          <div className="inline-flex items-center space-x-2 px-6 py-3 rounded-full glass-card backdrop-blur-xl border border-primary/20 mb-8">
            <Trophy className="w-5 h-5 text-primary animate-pulse-glow" />
            <span className="text-sm font-medium text-primary">CHOOSE YOUR PATH</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-heading font-black mb-6 leading-tight">
            Choose Your Path to Becoming an{" "}
            <span className="text-shimmer">Automation Pro</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-4xl mx-auto">
            Whether you want to start fast, go deep, or learn on your own schedule, there's a path designed for your goals.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {paths.map((path, index) => (
            <div key={index} className="scroll-reveal group" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className={`relative overflow-hidden rounded-3xl transition-luxury ${
                path.popular 
                ? 'glass-card border-2 border-primary/30 shadow-luxury hover:shadow-glow transform hover:scale-105' 
                : 'glass-card hover-lift'
              }`}>
                
                {/* Popular Badge */}
                {path.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="gradient-hero px-8 py-3 rounded-full text-white font-bold text-sm shadow-luxury animate-pulse-glow">
                      <Star className="w-4 h-4 inline mr-2" />
                      {path.badge}
                    </div>
                  </div>
                )}
                
                {/* Background Gradient */}
                <div className={`absolute top-0 right-0 w-40 h-40 ${path.gradient} opacity-5 rounded-full blur-3xl`}></div>
                
                <div className="relative z-10 p-10">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <div className={`w-20 h-20 rounded-2xl ${path.gradient} mx-auto mb-6 flex items-center justify-center shadow-luxury group-hover:animate-pulse-glow`}>
                      <path.icon className="w-10 h-10 text-white" />
                    </div>
                    
                    <h3 className="text-3xl font-heading font-bold mb-2">{path.title}</h3>
                    <p className="text-lg text-muted-foreground mb-6">{path.subtitle}</p>
                    
                    {/* Pricing */}
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center justify-center space-x-4">
                        <span className="text-5xl font-heading font-black gradient-hero bg-clip-text text-transparent">
                          {path.price}
                        </span>
                        <span className="text-2xl text-muted-foreground line-through">
                          {path.originalPrice}
                        </span>
                      </div>
                      <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-card border border-success/20">
                        <Gift className="w-4 h-4 text-success" />
                        <span className="text-sm font-medium text-success">
                          50% Launch Discount
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-6 mb-8">
                    <div className="glass-card p-6 rounded-2xl border border-primary/10">
                      <p className="font-semibold text-sm text-primary mb-2">BEST FOR:</p>
                      <p className="text-sm leading-relaxed">{path.bestFor}</p>
                    </div>
                    
                    <div className="glass-card p-6 rounded-2xl border border-accent/10">
                      <p className="font-semibold text-sm text-accent mb-2">THE PROMISE:</p>
                      <p className="text-sm leading-relaxed">{path.promise}</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold text-sm text-muted-foreground mb-4">WHAT YOU GET:</p>
                      <ul className="space-y-3">
                        {path.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-3 text-sm">
                            <div className="w-6 h-6 rounded-full gradient-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-white text-xs">✓</span>
                            </div>
                            <span className="leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* CTA Section */}
                  <div className="border-t border-border/50 pt-8">
                    <p className="text-sm font-medium text-center mb-6 gradient-accent bg-clip-text text-transparent">
                      {path.cta}
                    </p>
                    <Button 
                      variant={path.popular ? "hero" : "cta"} 
                      className="w-full rounded-2xl py-6 text-lg font-bold shadow-luxury hover:shadow-glow"
                      size="lg"
                    >
                      Choose This Path
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Final CTA */}
        <div className="text-center scroll-reveal">
          <div className="glass-card rounded-3xl p-16 max-w-4xl mx-auto backdrop-blur-xl border border-primary/20 shadow-luxury">
            <Button variant="hero" size="xl" className="text-2xl px-16 py-8 rounded-2xl mb-8 shadow-luxury hover:shadow-glow">
              🔥 Start My AI Journey Today
            </Button>
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-8 text-sm font-medium">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-success rounded-full animate-pulse-glow"></div>
                  <span>7-Day Risk-Free Guarantee</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-primary rounded-full animate-pulse-glow"></div>
                  <span>Join 1,000+ Successful Learners</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;