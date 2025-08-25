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
      bestFor:
        "Beginners and professionals who want to get hands-on results immediately.",
      promise:
        "Build and deploy your first powerful AI automation in a single weekend. You'll walk away with a tangible skill and a clear understanding of the opportunity.",
      features: [
        "An intensive live weekend workshop in Delhi.",
        "Build one complete, real-world automation from start to finish.",
        "Step-by-step guidance directly from our expert instructors.",
        "Become a certified AI Automation expert in 2 days",
      ],
      cta: "Perfect for getting a quick, powerful win.",
      popular: false,
      gradient: "gradient-primary",
      glowColor: "primary",
    },
    {
      title: "AI Automation Mastery",
      subtitle: "The Flagship Course",
      price: "₹59,999",
      originalPrice: "₹99,999",
      badge: "MOST POPULAR",
      icon: Crown,
      bestFor:
        "Freelancers, agency owners, and professionals who are serious about building a high-income career in AI automation.",
      promise:
        "Go from beginner to a certified, in-demand AI Automation Professional in 90 days. Master the complete Client-Ready AI Systems™ framework, build a robust portfolio, and learn to confidently pitch, price, and win high-value clients.",
      features: [
        "90-day comprehensive curriculum with live and on-demand lessons.",
        "Build a portfolio of 5+ advanced, client-ready automations.",
        "The complete Monetization Playbook (proposal templates, pricing frameworks, and client-getting scripts).",
        "Weekly group coaching calls and direct mentorship.",
        "Lifetime access to our private community and all future course updates.",
      ],
      cta: "The ultimate path to becoming a top-tier automation expert.",
      popular: true,
      gradient: "gradient-hero",
      glowColor: "accent",
    },
    {
      title: "Automation Accelerator",
      subtitle: "The Self-Paced Program",
      price: "₹14,999",
      originalPrice: "₹29,999",
      badge: "SELF-STARTER",
      icon: Users,
      bestFor:
        "Self-starters, entrepreneurs, and busy professionals who need maximum flexibility.",
      promise:
        "Master the core principles of the Client-Ready AI System™ entirely on your own schedule. Get the essential knowledge, tools, and templates to start building effective automations immediately.",
      features: [
        "Instant, lifetime access to the complete library of core video lessons.",
        "A rich collection of plug-and-play automation templates and resources.",
        "Learn the A-to-Z process of building and monetizing your skills at your own pace.",
      ],
      cta: "Ideal for learning on your own schedule.",
      popular: false,
      gradient: "gradient-accent",
      glowColor: "success",
    },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 "></div>

      {/* Animated Pricing Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            radial-gradient(circle at 20% 80%, hsl(214 84% 56% / 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, hsl(35 91% 65% / 0.3) 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, hsl(142 71% 45% / 0.2) 0%, transparent 50%)
          `,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 max-w-8xl relative z-10">
        <div className="text-center space-y-4 md:space-y-6 mb-12 md:mb-16 lg:mb-20 scroll-reveal">
          <div className="inline-flex items-center space-x-2 px-4 md:px-6 py-2 md:py-3 rounded-full glass-card backdrop-blur-xl border border-primary/20">
            <Trophy className="w-4 h-4 md:w-5 md:h-5 text-primary animate-pulse-glow" />
            <span className="text-xs md:text-sm font-medium text-primary">
              CHOOSE YOUR PATH
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black leading-tight">
            Choose Your Path to Becoming an{" "}
            <span className="text-shimmer">Automation Pro</span>
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-light max-w-4xl mx-auto leading-relaxed">
            Whether you want to start fast, go deep, or learn on your own
            schedule, there's a path designed for your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {paths.map((path, index) => (
            <div
              key={index}
              className="scroll-reveal group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div
                className={`relative overflow-visible rounded-3xl transition-luxury ${
                  path.popular
                    ? "glass-card border-2 border-primary/30 shadow-luxury hover:shadow-glow transform hover:scale-105"
                    : "glass-card hover-lift"
                }`}
              >
                {/* Popular Badge */}
                {path.popular && (
                  <div className="absolute -top-3 md:-top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="gradient-hero px-2 md:px-3 py-1 md:py-2 rounded-full text-white font-bold text-xs md:text-sm shadow-luxury animate-pulse-glow">
                      <Star className="w-3 h-3 md:w-4 md:h-4 inline mr-1 md:mr-2" />
                      {path.badge}
                    </div>
                  </div>
                )}

                {/* Background Gradient */}
                <div
                  className={`absolute top-0 right-0 w-40 h-40 ${path.gradient} opacity-5 rounded-full blur-3xl`}
                ></div>

                <div className="relative z-10 p-4 md:p-6">
                  {/* Header */}
                  <div className="text-center mb-6 md:mb-8">
                    <div
                      className={`w-16 h-16 md:w-20 md:h-20 rounded-2xl ${path.gradient} mx-auto mb-4 md:mb-6 flex items-center justify-center shadow-luxury group-hover:animate-pulse-glow`}
                    >
                      <path.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                    </div>

                    <h3 className="text-2xl md:text-3xl font-heading font-bold mb-2">
                      {path.title}
                    </h3>
                    <p className="text-base md:text-lg text-muted-foreground mb-4">
                      {path.subtitle}
                    </p>

                    {/* Pricing */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-center space-x-2 md:space-x-4">
                        <span className="text-3xl md:text-4xl lg:text-4xl font-heading font-black gradient-hero bg-clip-text text-transparent">
                          {path.price}
                        </span>
                        <span className="text-lg md:text-xl lg:text-2xl text-muted-foreground line-through">
                          {path.originalPrice}
                        </span>
                      </div>
                      <div className="inline-flex items-center space-x-2 px-3 md:px-4 py-1 md:py-2 rounded-full glass-card border border-success/20">
                        <Gift className="w-3 h-3 md:w-4 md:h-4 text-success" />
                        <span className="text-xs md:text-sm font-medium text-success">
                          50% Scholarship
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3 md:space-y-4 mb-4 md:mb-6">
                    <div className="glass-card p-3 md:p-4 rounded-2xl border border-accent/10">
                      <p className="font-semibold text-xs text-accent mb-1">
                        THE PROMISE:
                      </p>
                      <p className="text-xs leading-relaxed">{path.promise}</p>
                    </div>

                    <div className="p-3 md:p-4 rounded-2xl border border-primary/10">
                      <p className="font-semibold text-xs text-primary mb-1">
                        BEST FOR:
                      </p>
                      <p className="text-xs leading-relaxed">{path.bestFor}</p>
                    </div>

                    <div>
                      <p className="font-semibold text-xs text-muted-foreground mb-2 md:mb-3">
                        WHAT YOU GET:
                      </p>
                      <ul className="space-y-2">
                        {path.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-start space-x-2 md:space-x-3 text-sm"
                          >
                            <div className="w-4 h-4 rounded-full gradient-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-white text-xs">✓</span>
                            </div>
                            <span className="leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* CTA Section */}
                  <div className="border-t border-border/50 pt-4">
                    <p className="text-xs font-medium text-center mb-3 md:mb-4 gradient-accent bg-clip-text text-transparent">
                      {path.cta}
                    </p>
                    <Button
                      variant={path.popular ? "hero" : "cta"}
                      className="w-full rounded-full py-3 md:py-4 text-base md:text-lg font-bold shadow-luxury hover:shadow-glow"
                      size="default"
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
          <div className="glass-card rounded-3xl p-6 md:p-8 lg:p-12 max-w-4xl mx-auto backdrop-blur-xl border border-primary/20 shadow-luxury">
            <div className="space-y-4 md:space-y-6">
              <Button
                variant="hero"
                size="lg"
                className="text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 rounded-full shadow-luxury hover:shadow-glow w-full sm:w-auto"
              >
                Start My AI Journey Today
              </Button>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 md:space-x-8 text-sm font-medium">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse-glow"></div>
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
