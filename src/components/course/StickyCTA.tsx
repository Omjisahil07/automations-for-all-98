import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";

interface StickyCTAProps {
  courseName: string;
  ctaText: string;
  ctaLink: string;
  seatsLeft?: number;
  nextBatchDate?: string;
}

const StickyCTA = ({ 
  courseName, 
  ctaText, 
  ctaLink, 
  seatsLeft = 25,
  nextBatchDate 
}: StickyCTAProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
        >
          <div className="bg-background/95 backdrop-blur-lg border-t border-primary/20 p-4 shadow-luxury">
            <div className="flex items-center justify-between gap-3">
              <div className="flex-1 min-w-0">
                <p className="font-heading font-bold text-sm truncate">{courseName}</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  {nextBatchDate && (
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {nextBatchDate}
                    </span>
                  )}
                  {seatsLeft && (
                    <span className="text-primary font-medium">
                      ⏰ {seatsLeft} seats left
                    </span>
                  )}
                </div>
              </div>
              <a href={ctaLink} target="_blank" rel="noopener noreferrer">
                <Button variant="cta" size="sm" className="rounded-full whitespace-nowrap">
                  {ctaText}
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyCTA;
