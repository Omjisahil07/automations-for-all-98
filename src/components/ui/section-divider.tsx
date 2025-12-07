"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionDividerProps {
  variant?: "wave" | "curve" | "angle" | "dots";
  flip?: boolean;
  className?: string;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({
  variant = "wave",
  flip = false,
  className = "",
}) => {
  const renderDivider = () => {
    switch (variant) {
      case "wave":
        return (
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M0 60C240 120 480 0 720 60C960 120 1200 0 1440 60V120H0V60Z"
              fill="currentColor"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              viewport={{ once: true }}
            />
          </svg>
        );
      case "curve":
        return (
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M0 120C360 40 1080 40 1440 120V120H0V120Z"
              fill="currentColor"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            />
          </svg>
        );
      case "angle":
        return (
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
            preserveAspectRatio="none"
          >
            <motion.polygon
              points="0,120 1440,0 1440,120"
              fill="currentColor"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            />
          </svg>
        );
      case "dots":
        return (
          <div className="w-full h-16 flex items-center justify-center gap-4">
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full bg-primary/40"
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
              />
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div
      className={`w-full text-background/50 ${flip ? "rotate-180" : ""} ${className}`}
    >
      {renderDivider()}
    </div>
  );
};

export default SectionDivider;
