import { HeroContent } from "./HeroContent";

const FloatingShape = ({ 
  shape, 
  size, 
  position, 
  delay = 0 
}: { 
  shape: "cube" | "sphere" | "triangle"; 
  size: string; 
  position: string; 
  delay?: number;
}) => {
  const shapes = {
    cube: (
      <div 
        className={`${size} bg-gradient-to-br from-primary/20 to-primary/5 backdrop-blur-sm border border-primary/20 animate-float hover-lift`}
        style={{ animationDelay: `${delay}s` }}
      />
    ),
    sphere: (
      <div 
        className={`${size} rounded-full bg-gradient-to-br from-secondary/20 to-secondary/5 backdrop-blur-sm border border-secondary/20 animate-float hover-lift`}
        style={{ animationDelay: `${delay}s` }}
      />
    ),
    triangle: (
      <div 
        className={`${size} bg-gradient-to-br from-accent/20 to-accent/5 backdrop-blur-sm border border-accent/20 animate-float hover-lift`}
        style={{ 
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          animationDelay: `${delay}s` 
        }}
      />
    )
  };

  return (
    <div className={`absolute ${position} pointer-events-none`}>
      {shapes[shape]}
    </div>
  );
};

export const CleanMinimal = () => {
  return (
    <section className="relative min-h-screen gradient-subtle overflow-hidden">
      {/* Clean Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
      
      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 z-10">
        <FloatingShape 
          shape="cube" 
          size="w-16 h-16" 
          position="top-20 left-20" 
          delay={0} 
        />
        <FloatingShape 
          shape="sphere" 
          size="w-12 h-12" 
          position="top-40 right-32" 
          delay={1.5} 
        />
        <FloatingShape 
          shape="triangle" 
          size="w-20 h-20" 
          position="bottom-32 left-40" 
          delay={3} 
        />
        <FloatingShape 
          shape="cube" 
          size="w-8 h-8" 
          position="top-1/2 right-20" 
          delay={2.5} 
        />
        <FloatingShape 
          shape="sphere" 
          size="w-24 h-24" 
          position="bottom-40 right-1/4" 
          delay={4} 
        />
        <FloatingShape 
          shape="triangle" 
          size="w-14 h-14" 
          position="top-32 left-1/3" 
          delay={1} 
        />
        <FloatingShape 
          shape="cube" 
          size="w-10 h-10" 
          position="bottom-60 left-1/4" 
          delay={3.5} 
        />
        <FloatingShape 
          shape="sphere" 
          size="w-18 h-18" 
          position="top-60 right-1/3" 
          delay={2} 
        />
      </div>

      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 opacity-5 z-10">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px"
          }}
        />
      </div>

      {/* Subtle Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse z-10" style={{ animationDelay: "2s" }} />
      
      <HeroContent />
    </section>
  );
};