import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Crown, Star, Gift, Clock, Users, Trophy } from "lucide-react";
import { SparklesCore } from "./ui/sparkles";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Process Analyst",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    content:
      "It has completely changed the way we operate. The AI's ability to analyze and optimize our processes is phenomenal.",
    initials: "SJ",
  },
  {
    id: 2,
    name: "Manu Arora",
    role: "Tech Innovator & Entrepreneur",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    content:
      "What a fantastic AI Every AI is, I just love it. It has completely transformed the way I approach problems and develop solutions.",
    initials: "MA",
  },
  {
    id: 3,
    name: "Bob Smith",
    role: "Industry Analyst",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    content:
      "Absolutely revolutionary, a game-changer for our industry. It has streamlined our processes and enhanced our productivity dramatically.",
    initials: "BS",
  },
  {
    id: 4,
    name: "Olivia Scott",
    role: "Quality Assurance Manager",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    content:
      "It consistently exceeds our expectations. Its adaptability and precision make it indispensable for our daily operations.",
    initials: "OS",
  },
  {
    id: 5,
    name: "Rachel Black",
    role: "Client Support Coordinator",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    content:
      "The support team is as impressive as the technology itself. They ensure we maximize the utility of the AI in our operations.",
    initials: "RB",
  },
  {
    id: 6,
    name: "Samuel Lee",
    role: "Futurist",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
    content:
      "It's the future, now. Adopting this AI has put us years ahead of the competition in terms of operational efficiency and innovation.",
    initials: "SL",
  },
  {
    id: 7,
    name: "David Wright",
    role: "Research Scientist",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    content:
      "It's like having a superpower! This AI tool has given us the ability to do things we never thought were possible in our field.",
    initials: "DW",
  },
  {
    id: 8,
    name: "Jack Brown",
    role: "Performance Manager",
    avatar:
      "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face",
    content:
      "The results are always impressive. This AI has helped us to not only meet but exceed our performance targets.",
    initials: "JB",
  },
  {
    id: 9,
    name: "Eva Green",
    role: "Operations Director",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    content:
      "The efficiency it brings is unmatched. It's a vital tool that has helped us cut costs and improve our end product significantly.",
    initials: "EG",
  },
  {
    id: 10,
    name: "Tyler Durden",
    role: "Creative Director & Business Owner",
    avatar:
      "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face",
    content:
      "I made a soap with the help of AI; it was so easy to use. I'm so glad this happened because it revolutionized my entire business model and production process.",
    initials: "TD",
  },
  {
    id: 11,
    name: "Peter White",
    role: "Strategic Planner",
    avatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
    content:
      "A seamless integration into our daily tasks. It has enhanced our productivity and allowed us to focus on more strategic initiatives.",
    initials: "PW",
  },
  // Additional testimonials for middle column
  {
    id: 12,
    name: "Maria Garcia",
    role: "Data Scientist",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
    content:
      "The AI's data processing capabilities are extraordinary. It has revolutionized how we handle complex datasets and derive insights.",
    initials: "MG",
  },
  {
    id: 13,
    name: "Alex Chen",
    role: "Product Manager",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    content:
      "Our product development cycle has been cut in half thanks to this AI. The automation and optimization features are game-changing.",
    initials: "AC",
  },
  {
    id: 14,
    name: "Jennifer Lopez",
    role: "Marketing Director",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
    content:
      "The AI has transformed our marketing campaigns. We're seeing unprecedented engagement rates and conversion improvements.",
    initials: "JL",
  },
  {
    id: 15,
    name: "Michael Johnson",
    role: "CTO",
    avatar:
      "https://images.unsplash.com/photo-1566492031773-4f4e44671d66?w=150&h=150&fit=crop&crop=face",
    content:
      "From a technical perspective, this AI solution is robust, scalable, and incredibly well-designed. It's exceeded all our expectations.",
    initials: "MJ",
  },
  {
    id: 16,
    name: "Lisa Wang",
    role: "UX Designer",
    avatar:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face",
    content:
      "The AI has helped us create more intuitive user experiences. It analyzes user behavior patterns in ways we never could before.",
    initials: "LW",
  },
  {
    id: 17,
    name: "Robert Taylor",
    role: "Sales Manager",
    avatar:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?w=150&h=150&fit=crop&crop=face",
    content:
      "Our sales team's productivity has increased by 300% since implementing this AI. It's like having a super-powered assistant.",
    initials: "RT",
  },
  {
    id: 18,
    name: "Amanda Davis",
    role: "HR Director",
    avatar:
      "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=150&h=150&fit=crop&crop=face",
    content:
      "The AI has streamlined our hiring process and helped us identify the best candidates faster than ever before.",
    initials: "AD",
  },
];

// Split testimonials into 3 columns with more balanced distribution
const getColumnTestimonials = (columnIndex: number) => {
  let columnTestimonials;

  if (columnIndex === 0) {
    // First column - every 3rd starting from 0
    columnTestimonials = testimonials.filter((_, index) => index % 3 === 0);
  } else if (columnIndex === 1) {
    // Middle column - every 3rd starting from 1, plus some extras for more content
    columnTestimonials = testimonials.filter((_, index) => index % 3 === 1);
    // Add more testimonials to middle column
    const extraTestimonials = testimonials.filter(
      (_, index) => index > 11 && index % 2 === 0
    );
    columnTestimonials = [...columnTestimonials, ...extraTestimonials];
  } else {
    // Third column - every 3rd starting from 2
    columnTestimonials = testimonials.filter((_, index) => index % 3 === 2);
  }

  // Duplicate testimonials for infinite scroll
  return [...columnTestimonials, ...columnTestimonials];
};

const TestimonialCard = ({
  testimonial,
  index,
}: {
  testimonial: any;
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ scale: 1.02, y: -5 }}
    className="mb-6 flex-shrink-0"
  >
    <Card className="glass-card hover-lift hover:shadow-glow transition-smooth">
      <CardContent className="space-y-4 p-4">
        <div className="flex items-start space-x-4">
          <Avatar className="w-12 h-12 md:w-12 md:h-12 flex-shrink-0 gradient-primary rounded-full">
            <AvatarImage
              src={testimonial.avatar || "/placeholder.svg"}
              alt={testimonial.name}
              className="object-cover rounded-full"
            />
            <AvatarFallback className="text-white font-bold">
              {testimonial.initials}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <div className="mb-2">
              <h3 className="text-lg md:text-xl font-heading font-bold text-foreground">
                {testimonial.name}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground">
                {testimonial.role}
              </p>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              {testimonial.content}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

const ScrollingColumn = ({
  testimonials,
  direction,
  duration,
}: {
  testimonials: any[];
  direction: "up" | "down";
  duration: number;
}) => {
  const [isPaused, setIsPaused] = useState(false);

  // Calculate the total height needed for animation
  const cardHeight = 200; // Approximate height of each card including margin
  const totalHeight = testimonials.length * cardHeight;

  return (
    <div
      className="relative h-[800px] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.div
        className="flex flex-col"
        animate={
          !isPaused
            ? {
                y:
                  direction === "up"
                    ? [-totalHeight / 2, 0]
                    : [0, -totalHeight / 2],
              }
            : {}
        }
        transition={{
          duration: duration,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
          repeatType: "loop",
        }}
        style={{
          willChange: "transform",
        }}
      >
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={`${testimonial.id}-${index}`}
            testimonial={testimonial}
            index={index}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default function FinalTestimonial() {
  const column1 = getColumnTestimonials(0);
  const column2 = getColumnTestimonials(1);
  const column3 = getColumnTestimonials(2);

  return (
    <div className="container mx-auto px-4 max-w-8xl relative z-10">
        <div className="space-y-2 md:space-y-3 mb-6 md:mb-8">
            <div className="text-center">
         <div className="inline-flex items-center space-x-2 px-4 md:px-6 py-2 md:py-3 rounded-full glass-card backdrop-blur-xl border border-primary/20">
                    <Star className="w-4 h-4 md:w-5 md:h-5 text-primary animate-pulse-glow" />
                    <span className="text-xs md:text-sm font-medium text-primary">
                      Testimonials
                    </span>
                  </div>
            </div>

        {/* Header Section */}
        <div className="text-center space-y-2 md:space-y-3 mb-6 md:mb-8">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-black leading-tight">
            Loved by people all over the universe
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl font-semibold text-muted-foreground leading-relaxed">
            Hear from our community of learners who have transformed their
            skills and careers with Automation School.
          </p>
        </div>

        {/* Testimonials Infinite Scroll Columns */}
        <div className="relative">
          {/* Mobile: Single column */}
          <div className="block md:hidden">
            <ScrollingColumn
              testimonials={column1}
              direction="up"
              duration={30}
            />
          </div>

          {/* Desktop: Three columns */}
          <div className="hidden md:grid md:grid-cols-3 gap-4 lg:gap-6">
            {/* Column 1: Top to Bottom */}
            <ScrollingColumn
              testimonials={column1}
              direction="up"
              duration={40}
            />

            {/* Column 2: Bottom to Top */}
            <ScrollingColumn
              testimonials={column2}
              direction="down"
              duration={35}
            />

            {/* Column 3: Top to Bottom */}
            <ScrollingColumn
              testimonials={column3}
              direction="up"
              duration={45}
            />
          </div>

          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute top-0 left-0 right-0 h-16 md:h-32 bg-gradient-to-b from-background to-transparent pointer-events-none z-10" />
          <div className="absolute bottom-0 left-0 right-0 h-16 md:h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </div>
  );
}
