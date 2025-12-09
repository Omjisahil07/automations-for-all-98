import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MatrixBackground } from "@/components/MatrixBackground";
import CourseHero from "@/components/course/CourseHero";
import CourseAudience from "@/components/course/CourseAudience";
import CourseProblem from "@/components/course/CourseProblem";
import CoursePromise from "@/components/course/CoursePromise";
import CourseAgenda from "@/components/course/CourseAgenda";
import CourseOutcomes from "@/components/course/CourseOutcomes";
import CourseTrainer from "@/components/course/CourseTrainer";
import CoursePricing from "@/components/course/CoursePricing";
import CourseFAQ from "@/components/course/CourseFAQ";
import CourseFinalCTA from "@/components/course/CourseFinalCTA";

const Bootcamp = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <MatrixBackground />
      <Header />

      <CourseHero
        tagline="2-Day Intensive Workshop"
        headline="The Automation"
        headlineAccent="Bootcamp"
        subheadline="Go from overwhelmed to automated in just 2 days. Build your first AI system that works while you sleep."
        ctaText="Reserve Your Spot – ₹4,999"
        ctaLink="#pricing"
        trustItems={[
          { icon: "calendar", text: "2 Days Live" },
          { icon: "users", text: "Small Batch" },
          { icon: "award", text: "Certificate Included" },
        ]}
      />

      <CourseAudience
        headline="Who Is This For?"
        audiences={[
          "Entrepreneurs drowning in repetitive tasks",
          "Professionals who want to 10x their output",
          "Agency owners looking to deliver faster",
          "Anyone curious about AI but unsure where to start",
        ]}
      />

      <CourseProblem
        headline="Sound Familiar?"
        problems={[
          "You're working 12-hour days but barely moving forward",
          "You've tried AI tools but couldn't make them stick",
          "You know automation can help, but don't know where to begin",
          "You're watching competitors speed ahead while you're stuck in manual mode",
        ]}
      />

      <CoursePromise
        headline="What You'll Walk Out With"
        promises={[
          "Your first working AI automation (not just theory)",
          "A personalized automation roadmap for your business",
          "Hands-on experience with ChatGPT, Make.com & more",
          "Confidence to build automations on your own",
        ]}
      />

      <CourseAgenda
        headline="The 2-Day Agenda"
        days={[
          {
            title: "Day 1: Foundation & First Automation",
            items: [
              "AI fundamentals: What works, what doesn't",
              "Identifying your highest-impact automation opportunities",
              "Building your first workflow with Make.com",
              "ChatGPT prompt engineering for business",
            ],
          },
          {
            title: "Day 2: Advanced Automations & Launch",
            items: [
              "Multi-step automation workflows",
              "Connecting your tools (CRM, Email, Sheets, etc.)",
              "Testing, debugging, and optimization",
              "Creating your 30-day automation action plan",
            ],
          },
        ]}
      />

      <CourseOutcomes
        headline="By The End of 2 Days, You'll Have:"
        outcomes={[
          "At least 2 working automations live in your business",
          "Saved 5+ hours per week (minimum)",
          "Clear understanding of AI & automation landscape",
          "Lifetime access to bootcamp recordings & resources",
        ]}
      />

      <CourseTrainer />

      <CoursePricing
        headline="Join The Bootcamp"
        price="₹4,999"
        originalPrice="₹9,999"
        badge="50% OFF - Limited Seats"
        features={[
          "2 Full Days of Live Training",
          "Hands-on Workshops & Exercises",
          "Lifetime Recording Access",
          "Private Community Access",
          "Templates & Workflow Library",
          "Certificate of Completion",
          "30-Day Post-Bootcamp Support",
        ]}
        ctaText="Secure My Seat Now"
        ctaLink="https://pages.razorpay.com/bootcamp"
      />

      <CourseFAQ
        headline="Frequently Asked Questions"
        faqs={[
          {
            question: "Do I need any technical background?",
            answer: "No! This bootcamp is designed for beginners. If you can use email and spreadsheets, you can learn automation.",
          },
          {
            question: "What tools do I need?",
            answer: "A laptop with internet connection. We'll use free tiers of all tools during the bootcamp.",
          },
          {
            question: "Is this live or recorded?",
            answer: "It's 100% live and interactive. You'll get recordings afterward for review.",
          },
          {
            question: "What if I can't attend both days?",
            answer: "You'll get full recordings, but we strongly recommend attending live for the best experience.",
          },
          {
            question: "Is there a refund policy?",
            answer: "Yes, 100% refund if you cancel 48 hours before the bootcamp starts.",
          },
        ]}
      />

      <CourseFinalCTA
        headline="Ready to Automate Your Work?"
        subheadline="Join the next bootcamp and start building automations that work for you 24/7."
        ctaText="Reserve My Spot – ₹4,999"
        ctaLink="https://pages.razorpay.com/bootcamp"
      />

      <Footer />
    </main>
  );
};

export default Bootcamp;
