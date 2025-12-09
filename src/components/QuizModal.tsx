import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Sparkles, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

interface QuizModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface Question {
  id: number;
  question: string;
  options: { label: string; value: string }[];
}

const questions: Question[] = [
  {
    id: 1,
    question: "What's your current experience with AI & automation?",
    options: [
      { label: "Complete beginner – I've heard of ChatGPT, that's about it", value: "beginner" },
      { label: "Some experience – I've tried a few tools but nothing stuck", value: "some" },
      { label: "Intermediate – I've built a few automations successfully", value: "intermediate" },
      { label: "Advanced – I'm looking to master and monetize", value: "advanced" },
    ],
  },
  {
    id: 2,
    question: "What's your primary goal?",
    options: [
      { label: "Save time on repetitive tasks", value: "time" },
      { label: "Scale my business without hiring", value: "scale" },
      { label: "Start an automation consulting business", value: "business" },
      { label: "Just exploring what's possible", value: "explore" },
    ],
  },
  {
    id: 3,
    question: "How much time can you invest weekly?",
    options: [
      { label: "1-2 hours (just want quick wins)", value: "minimal" },
      { label: "5-8 hours (ready to learn seriously)", value: "moderate" },
      { label: "10-15+ hours (fully committed)", value: "high" },
    ],
  },
  {
    id: 4,
    question: "What's your budget for learning?",
    options: [
      { label: "Free resources only for now", value: "free" },
      { label: "Under ₹10,000", value: "low" },
      { label: "₹10,000 – ₹50,000", value: "medium" },
      { label: "₹50,000+ for the right program", value: "high" },
    ],
  },
];

interface Recommendation {
  course: string;
  path: string;
  tagline: string;
  description: string;
}

const getRecommendation = (answers: Record<number, string>): Recommendation => {
  const experience = answers[1];
  const goal = answers[2];
  const time = answers[3];
  const budget = answers[4];

  // Advanced users or business goals with high budget → Mastery
  if (
    (experience === "advanced" || goal === "business") &&
    (budget === "high" || budget === "medium") &&
    time === "high"
  ) {
    return {
      course: "Agentic AI Mastery",
      path: "/mastery",
      tagline: "Your Perfect Match",
      description: "Based on your goals and commitment level, our flagship 12-week Mastery program will give you everything you need to master AI automation AND build a business around it.",
    };
  }

  // Intermediate users or scaling goals with moderate time → Accelerator
  if (
    (experience === "intermediate" || experience === "some") &&
    (goal === "scale" || goal === "time") &&
    (budget === "medium" || budget === "low")
  ) {
    return {
      course: "Automation Accelerator",
      path: "/accelerator",
      tagline: "Great Choice",
      description: "The 4-week Accelerator is perfect for you. You'll build production-ready systems and get personalized mentorship to take your automation skills to the next level.",
    };
  }

  // Beginners or time-savers with low budget → Bootcamp
  if (
    (experience === "beginner" || experience === "some") &&
    (budget === "low" || budget === "free")
  ) {
    return {
      course: "Automation Bootcamp",
      path: "/bootcamp",
      tagline: "Perfect Starting Point",
      description: "Our 2-day Bootcamp is designed exactly for where you are. You'll build your first working automations and get a clear roadmap for what's next.",
    };
  }

  // Free/exploring → Launchpad
  if (budget === "free" || goal === "explore" || time === "minimal") {
    return {
      course: "Automation Launchpad",
      path: "/launchpad",
      tagline: "Start Here",
      description: "Join our free 90-minute Launchpad session. It's the perfect way to see what's possible and decide if this path is right for you.",
    };
  }

  // Default to Bootcamp
  return {
    course: "Automation Bootcamp",
    path: "/bootcamp",
    tagline: "Recommended For You",
    description: "The Bootcamp gives you a solid foundation in just 2 days. It's the perfect entry point to start your automation journey.",
  };
};

const QuizModal = ({ open, onOpenChange }: QuizModalProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (value: string) => {
    setAnswers((prev) => ({ ...prev, [questions[currentStep].id]: value }));
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResult(false);
  };

  const handleClose = () => {
    onOpenChange(false);
    setTimeout(handleReset, 300);
  };

  const recommendation = getRecommendation(answers);
  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-xl bg-card border-border/50 p-0 overflow-hidden">
        <div className="p-6 md:p-8">
          <DialogHeader className="mb-6">
            <DialogTitle className="text-2xl font-heading font-bold text-center">
              {showResult ? (
                <span className="gradient-primary bg-clip-text text-transparent">
                  Your Recommendation
                </span>
              ) : (
                "Find Your Perfect Path"
              )}
            </DialogTitle>
          </DialogHeader>

          <AnimatePresence mode="wait">
            {!showResult ? (
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex justify-between text-sm text-muted-foreground mb-2">
                    <span>Question {currentStep + 1} of {questions.length}</span>
                    <span>{Math.round(progress)}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-primary"
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>

                {/* Question */}
                <h3 className="text-lg font-medium mb-6">{currentQuestion.question}</h3>

                {/* Options */}
                <div className="space-y-3 mb-8">
                  {currentQuestion.options.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleAnswer(option.value)}
                      className={`w-full p-4 rounded-xl text-left transition-all border ${
                        answers[currentQuestion.id] === option.value
                          ? "border-primary bg-primary/10 text-foreground"
                          : "border-border/50 hover:border-primary/50 text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            answers[currentQuestion.id] === option.value
                              ? "border-primary bg-primary"
                              : "border-muted-foreground"
                          }`}
                        >
                          {answers[currentQuestion.id] === option.value && (
                            <CheckCircle className="w-3 h-3 text-primary-foreground" />
                          )}
                        </div>
                        <span>{option.label}</span>
                      </div>
                    </button>
                  ))}
                </div>

                {/* Navigation */}
                <div className="flex justify-between">
                  <Button
                    variant="ghost"
                    onClick={handleBack}
                    disabled={currentStep === 0}
                    className="gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </Button>
                  <Button
                    variant="cta"
                    onClick={handleNext}
                    disabled={!answers[currentQuestion.id]}
                    className="gap-2"
                  >
                    {currentStep === questions.length - 1 ? "See Result" : "Next"}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                {/* Result Card */}
                <div className="p-6 rounded-2xl glass-card border border-primary/30 mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-sm mb-4">
                    <Sparkles className="w-4 h-4" />
                    {recommendation.tagline}
                  </div>

                  <h3 className="text-2xl font-heading font-bold gradient-primary bg-clip-text text-transparent mb-4">
                    {recommendation.course}
                  </h3>

                  <p className="text-muted-foreground mb-6">
                    {recommendation.description}
                  </p>

                  <Link to={recommendation.path} onClick={handleClose}>
                    <Button variant="cta" size="lg" className="w-full rounded-full group">
                      Explore {recommendation.course}
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>

                <Button variant="ghost" onClick={handleReset} className="text-muted-foreground">
                  Retake Quiz
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default QuizModal;
