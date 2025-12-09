import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";

interface CountdownTimerProps {
  targetDate?: Date;
  label?: string;
}

const CountdownTimer = ({ 
  targetDate = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // Default: 3 days from now
  label = "Offer ends in"
}: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="w-14 h-14 md:w-16 md:h-16 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center">
        <span className="text-2xl md:text-3xl font-heading font-black text-primary">
          {value.toString().padStart(2, '0')}
        </span>
      </div>
      <span className="text-xs text-muted-foreground mt-1 uppercase tracking-wide">{label}</span>
    </div>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col items-center gap-4 py-8"
    >
      <div className="flex items-center gap-2 text-accent">
        <Clock className="w-5 h-5" />
        <span className="font-medium">{label}</span>
      </div>
      
      <div className="flex items-center gap-3 md:gap-4">
        <TimeBlock value={timeLeft.days} label="Days" />
        <span className="text-2xl font-bold text-primary">:</span>
        <TimeBlock value={timeLeft.hours} label="Hours" />
        <span className="text-2xl font-bold text-primary">:</span>
        <TimeBlock value={timeLeft.minutes} label="Mins" />
        <span className="text-2xl font-bold text-primary">:</span>
        <TimeBlock value={timeLeft.seconds} label="Secs" />
      </div>
    </motion.div>
  );
};

export default CountdownTimer;
