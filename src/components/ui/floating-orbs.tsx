"use client";

import React from "react";
import { motion } from "framer-motion";

interface FloatingOrbsProps {
  count?: number;
  className?: string;
}

export const FloatingOrbs: React.FC<FloatingOrbsProps> = ({
  count = 3,
  className = "",
}) => {
  const orbs = Array.from({ length: count }, (_, i) => ({
    id: i,
    size: Math.random() * 300 + 200,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 20,
    delay: Math.random() * 5,
    color: i % 2 === 0 ? "primary" : "accent",
  }));

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {orbs.map((orb) => (
        <motion.div
          key={orb.id}
          className={`absolute rounded-full blur-3xl opacity-20`}
          style={{
            width: orb.size,
            height: orb.size,
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            background: orb.color === "primary" 
              ? "radial-gradient(circle, hsl(var(--primary)) 0%, transparent 70%)"
              : "radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)",
          }}
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -40, 30, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            delay: orb.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default FloatingOrbs;
