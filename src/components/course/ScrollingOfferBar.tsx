import { motion } from "framer-motion";

interface ScrollingOfferBarProps {
  messages: string[];
}

const ScrollingOfferBar = ({ messages }: ScrollingOfferBarProps) => {
  const combinedMessage = messages.join(" • ");
  
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-primary overflow-hidden">
      <motion.div
        animate={{ x: [0, -50 + "%"] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex whitespace-nowrap py-2"
      >
        {[...Array(4)].map((_, i) => (
          <span key={i} className="mx-8 text-sm font-medium text-primary-foreground">
            🔥 {combinedMessage} 🔥
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollingOfferBar;
