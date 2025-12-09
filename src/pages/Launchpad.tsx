import Header from "@/components/Header";
import Footer from "@/components/Footer";
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

const Launchpad = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />

      <CourseHero
        tagline="Free Introductory Session"
        headline="Automation"
        headlineAccent="Launchpad"
        subheadline="Your first step into the world of AI automation. A free 90-minute masterclass to see what's possible."
        ctaText="Register Free"
        ctaLink="#pricing"
        trustItems={[
          { icon: "clock", text: "90 Minutes" },
          { icon: "users", text: "100% Free" },
          { icon: "award", text: "Live Q&A" },
        ]}
      />

      <CourseAudience
        headline="Perfect Starting Point If..."
        audiences={[
          "You're curious about AI but don't know where to start",
          "You want to see automation in action before investing",
          "You're evaluating if this path is right for you",
          "You want to meet Ambesh and experience his teaching style",
        ]}
      />

      <CourseProblem
        headline="Why Most People Never Start"
        problems={[
          "Overwhelmed by the number of AI tools available",
          "Unsure if automation applies to their work",
          "Afraid of the technical learning curve",
          "Don't know who to trust for guidance",
        ]}
      />

      <CoursePromise
        headline="What You'll Discover"
        promises={[
          "The 3 types of automation that deliver instant ROI",
          "Live demo: Watch Ambesh build an automation in real-time",
          "Which learning path is right for your goals",
          "Exclusive offer for workshop attendees",
        ]}
      />

      <CourseAgenda
        headline="The 90-Minute Agenda"
        modules={[
          {
            title: "Part 1: The AI Automation Landscape (30 min)",
            description: "Understand what's real vs. hype. See where automation actually delivers value.",
          },
          {
            title: "Part 2: Live Build Demo (30 min)",
            description: "Watch Ambesh build a real automation from scratch. See exactly how it works.",
          },
          {
            title: "Part 3: Your Path Forward + Q&A (30 min)",
            description: "Get your questions answered. Discover which program fits your goals.",
          },
        ]}
      />

      <CourseOutcomes
        headline="You'll Leave With:"
        outcomes={[
          "Clarity on what AI automation can (and can't) do",
          "A framework to identify your automation opportunities",
          "Understanding of the tools and skills needed",
          "Access to a special attendee-only offer",
        ]}
      />

      <CourseTrainer />

      <CoursePricing
        headline="Reserve Your Free Spot"
        price="FREE"
        badge="Limited Seats"
        features={[
          "90-Minute Live Masterclass",
          "Real-Time Demo & Examples",
          "Live Q&A with Ambesh",
          "Exclusive Attendee Discount",
          "Recording Access (24 hours)",
          "Resource Guide PDF",
        ]}
        ctaText="Register Now – It's Free"
        ctaLink="https://pages.razorpay.com/launchpad"
      />

      <CourseFAQ
        headline="Quick Questions"
        faqs={[
          {
            question: "Is this really free?",
            answer: "Yes, 100% free. No credit card required. We want you to experience our teaching before making any decisions.",
          },
          {
            question: "Do I need any preparation?",
            answer: "Just bring your curiosity and maybe a notebook. No technical setup needed.",
          },
          {
            question: "Will there be a replay?",
            answer: "Attendees get 24-hour access to the recording. But live is always better for Q&A!",
          },
          {
            question: "Is this a sales pitch?",
            answer: "We'll share our paid programs at the end, but 90% is pure education and value.",
          },
        ]}
      />

      <CourseFinalCTA
        headline="Start Your AI Journey Today"
        subheadline="No risk, no cost. Just 90 minutes that could change your career."
        ctaText="Reserve My Free Spot"
        ctaLink="https://pages.razorpay.com/launchpad"
      />

      <Footer />
    </main>
  );
};

export default Launchpad;
