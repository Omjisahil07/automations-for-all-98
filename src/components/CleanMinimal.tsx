"use client";
import React from "react";
import { motion } from "motion/react";
import { HeroContent } from "./HeroContent";
import { BackgroundBeams } from "./ui/background-beams";

const FloatingShape = ({
  shape,
  size,
  position,
  delay = 0,
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
          animationDelay: `${delay}s`,
        }}
      />
    ),
  };

  return (
    <div className={`absolute ${position} pointer-events-none`}>
      {shapes[shape]}
    </div>
  );
};

export const CleanMinimal = () => {
  return (
    <section className="relative min-h-[85vh] md:min-h-screen bg-gradient-subtle overflow-hidden">
      {/* Clean Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />

      {/* Background Beams */}
      <BackgroundBeams className="absolute inset-0" />

      {/* Floating Geometric Shapes - Hidden on mobile for cleaner look */}
      <div className="absolute inset-0 hidden md:block">
        <FloatingShape
          shape="cube"
          size="w-12 h-12 lg:w-16 lg:h-16"
          position="top-20 left-20"
          delay={0}
        />
        <FloatingShape
          shape="sphere"
          size="w-10 h-10 lg:w-12 lg:h-12"
          position="top-40 right-32"
          delay={1.5}
        />
        <FloatingShape
          shape="triangle"
          size="w-16 h-16 lg:w-20 lg:h-20"
          position="bottom-32 left-40"
          delay={3}
        />
        <FloatingShape
          shape="cube"
          size="w-6 h-6 lg:w-8 lg:h-8"
          position="top-1/2 right-20"
          delay={2.5}
        />
        <FloatingShape
          shape="sphere"
          size="w-20 h-20 lg:w-24 lg:h-24"
          position="bottom-40 right-1/4"
          delay={4}
        />
      </div>

      {/* Subtle Grid Overlay */}
      {/* <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
              linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div> */}

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
