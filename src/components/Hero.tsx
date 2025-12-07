import { HeroContent } from "./HeroContent";
import { BackgroundBeams } from "./ui/background-beams";

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] md:min-h-screen bg-gradient-subtle overflow-hidden">
      {/* Clean Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />

      {/* Background Beams */}
      <BackgroundBeams className="absolute inset-0" />

      {/* Subtle Glow Effects - Smaller on mobile */}
      <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-96 md:h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-40 h-40 md:w-80 md:h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      />

      <HeroContent />
    </section>
  );
};

export default Hero;
