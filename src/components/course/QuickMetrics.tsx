import { motion } from "framer-motion";
import { BookOpen, Video, BarChart3, Clock } from "lucide-react";

interface MetricItem {
  icon: "modules" | "live" | "level" | "time";
  label: string;
  value: string;
}

interface QuickMetricsProps {
  metrics: MetricItem[];
}

const iconMap = {
  modules: BookOpen,
  live: Video,
  level: BarChart3,
  time: Clock,
};

const QuickMetrics = ({ metrics }: QuickMetricsProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="py-8"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {metrics.map((metric, index) => {
            const Icon = iconMap[metric.icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 px-4 py-3 rounded-xl glass-card border border-primary/20"
              >
                <Icon className="w-5 h-5 text-primary" />
                <div className="flex items-center gap-2">
                  <span className="font-heading font-bold text-foreground">{metric.value}</span>
                  <span className="text-sm text-muted-foreground">{metric.label}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default QuickMetrics;
