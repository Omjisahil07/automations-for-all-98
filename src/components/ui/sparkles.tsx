"use client";

import React, { useId, useMemo } from "react";
import { motion } from "framer-motion";

interface SparklesProps {
  id?: string;
  className?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  particleDensity?: number;
}

export const SparklesCore: React.FC<SparklesProps> = ({
  id,
  className,
  background = "transparent",
  minSize = 0.4,
  maxSize = 1,
  speed = 1,
  particleColor = "#FFF",
  particleDensity = 100,
}) => {
  const generatedId = useId();
  const uniqueId = id || generatedId;

  const particles = useMemo(() => {
    return Array.from({ length: particleDensity }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * (maxSize - minSize) + minSize,
      duration: (Math.random() * 2 + 1) / speed,
      delay: Math.random() * 2,
    }));
  }, [particleDensity, minSize, maxSize, speed]);

  return (
    <div
      className={className}
      style={{
        background,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {particles.map((particle) => (
        <motion.div
          key={`${uniqueId}-${particle.id}`}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size * 4,
            height: particle.size * 4,
            backgroundColor: particleColor,
            boxShadow: `0 0 ${particle.size * 6}px ${particle.size * 2}px ${particleColor}`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default SparklesCore;
