import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useAnimations";
import { MessageSquare, Star, User, TrendingUp } from "lucide-react";

const Testimonials = () => {
  useScrollReveal();

  const testimonials = [
    {
      quote: "I landed my first ₹80,000 AI project within 3 weeks.",
      author: "Rahul S.",
      role: "Freelance Developer",
      avatar: "RS",
      rating: 5,
      gradient: "gradient-primary"
    },
    {
      quote: "I automated 70% of my client work, now I handle more clients without burning out.",
      author: "Priya M.",
      role: "Agency Owner",
      avatar: "PM",
      rating: 5,
      gradient: "gradient-accent"
    },
    {
      quote: "Doubled my monthly income in 60 days using this system.",
      author: "Amit K.",
      role: "Marketing Professional",
      avatar: "AK",
      rating: 5,
      gradient: "gradient-hero"
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 gradient-subtle"></div>
      
      {/* Floating testimonial bubbles */}
      <div className="absolute top-1/4 left-10 w-6 h-6 rounded-full gradient-primary opacity-30 floating-element"></div>
      <div className="absolute top-1/3 right-20 w-4 h-4 rounded-full gradient-accent opacity-40 floating-element" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 left-1/4 w-5 h-5 rounded-full gradient-hero opacity-35 floating-element" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-20 scroll-reveal">
          <div className="inline-flex items-center space-x-2 px-6 py-3 rounded-full glass-card backdrop-blur-xl border border-accent/20 mb-8">
            <MessageSquare className="w-5 h-5 text-accent animate-pulse-glow" />
            <span className="text-sm font-medium text-accent">STUDENT SUCCESS</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-heading font-black mb-8 leading-tight">
            Stories of Our{" "}
            <span className="text-shimmer">Students.</span>
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="scroll-reveal group" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="glass-card p-10 rounded-3xl hover-lift transition-luxury h-full relative overflow-hidden">
                {/* Background gradient */}
                <div className={`absolute top-0 right-0 w-32 h-32 ${testimonial.gradient} opacity-10 rounded-full blur-2xl`}></div>
                
                <div className="relative z-10">
                  {/* Quote icon */}
                  <div className="text-6xl mb-6 opacity-20">"</div>
                  
                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  
                  {/* Quote */}
                  <blockquote className="text-xl font-medium mb-8 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  {/* Author */}
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 rounded-full ${testimonial.gradient} flex items-center justify-center shadow-luxury`}>
                      <span className="text-white font-bold text-lg">{testimonial.avatar}</span>
                    </div>
                    <div>
                      <p className="font-bold text-lg">{testimonial.author}</p>
                      <p className="text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Stats Section */}
        <div className="scroll-reveal">
          <div className="glass-card rounded-3xl p-12 mb-16 backdrop-blur-xl border border-primary/20">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="group">
                <div className="text-4xl md:text-5xl font-heading font-black gradient-primary bg-clip-text text-transparent mb-2 group-hover:animate-pulse-glow">
                  1,000+
                </div>
                <p className="text-lg font-medium text-muted-foreground">Successful Students</p>
              </div>
              <div className="group">
                <div className="text-4xl md:text-5xl font-heading font-black gradient-accent bg-clip-text text-transparent mb-2 group-hover:animate-pulse-glow">
                  ₹2.5Cr+
                </div>
                <p className="text-lg font-medium text-muted-foreground">Revenue Generated</p>
              </div>
              <div className="group">
                <div className="text-4xl md:text-5xl font-heading font-black gradient-hero bg-clip-text text-transparent mb-2 group-hover:animate-pulse-glow">
                  95%
                </div>
                <p className="text-lg font-medium text-muted-foreground">Success Rate</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center scroll-reveal">
          <div className="glass-card rounded-3xl p-16 max-w-5xl mx-auto backdrop-blur-xl border border-success/20 shadow-luxury">
            <p className="text-2xl md:text-3xl font-heading font-bold leading-tight mb-8">
              👉 These aren't tech geniuses.{" "}
              <br className="hidden md:block" />
              They're people just like you who decided to{" "}
              <span className="gradient-hero bg-clip-text text-transparent">
                stop watching and start building.
              </span>
            </p>
            
            <Button variant="hero" size="xl" className="text-xl px-12 py-6 rounded-2xl shadow-luxury hover:shadow-glow">
              <TrendingUp className="w-6 h-6 mr-3" />
              Join Them Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;