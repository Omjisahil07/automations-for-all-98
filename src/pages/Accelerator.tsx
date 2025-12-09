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
import StickyCTA from "@/components/course/StickyCTA";
import CountdownTimer from "@/components/course/CountdownTimer";
import CertificateMockup from "@/components/course/CertificateMockup";
import ProgressionLadder from "@/components/course/ProgressionLadder";

const Accelerator = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />

      <CourseHero
        tagline="14-Day Intensive Program"
        headline="Take Your AI Skill From Basic to"
        headlineAccent="Confident in 14 Days"
        subheadline="Build multiple real automation systems step by step and become an Agentic AI Builder. No coding needed."
        ctaText="Join the Accelerator"
        ctaLink="#pricing"
        trustItems={[
          { icon: "calendar", text: "14 Days" },
          { icon: "users", text: "Hybrid Learning" },
          { icon: "award", text: "Builder Certification" },
        ]}
      />

      <CourseAudience
        headline="This Is Ideal For You If..."
        audiences={[
          "You finished the Bootcamp and want the next level",
          "You know AI basics and want to build real projects",
          "You want to add automation to your job or freelance skill",
          "You want a structured learning path instead of random videos",
          "You want to build a portfolio to prove your skill",
        ]}
      />

      <CourseProblem
        headline="If You've Already Tried AI, This Is Your Next Level"
        problems={[
          "Teams now want people who can build automation, not just prompts",
          "Freelancers are charging for workflows, not theory",
          "Companies are hiring for 'automation-ready' skills",
          "Early builders get the best attention, roles and client work",
          "This skill does not reward waiting - it rewards action",
        ]}
      />

      <CoursePromise
        headline="In This Accelerator, You Will Build Real Automation That Works"
        promises={[
          "Automated lead capture and follow-up",
          "Sales follow-up or WhatsApp workflow",
          "Content system for LinkedIn or marketing",
          "HR or onboarding automation",
          "Personal productivity workflows",
          "One custom automation based on your work or interest",
        ]}
      />

      <CourseAgenda
        headline="How The 14-Day Accelerator Works"
        modules={[
          {
            title: "Short Easy Lessons",
            description: "Follow at your own pace with clear, practical content designed for busy professionals.",
          },
          {
            title: "Weekly Live Sessions",
            description: "Get support and learn advanced workflows with real-time guidance.",
          },
          {
            title: "Templates to Build On",
            description: "Duplicate and customize ready-made workflows for your needs.",
          },
          {
            title: "Community Q&A",
            description: "Ask questions, get feedback, and learn from other builders.",
          },
          {
            title: "Help When You're Stuck",
            description: "Dedicated support to ensure you complete your projects.",
          },
          {
            title: "Portfolio Guidance",
            description: "Document your builds professionally to showcase your skill.",
          },
        ]}
      />

      <ProgressionLadder
        headline="Your Growth Path"
        currentStep={2}
        steps={[
          {
            title: "Step 1: Bootcamp",
            description: "Build your first automation",
            certification: "Agentic AI Starter Certification",
          },
          {
            title: "Step 2: Accelerator",
            description: "Build multiple systems and confidence",
            certification: "Agentic AI Builder Certification",
          },
          {
            title: "Step 3: Mastery",
            description: "Get certified and go professional",
            certification: "Certified Agentic AI Practitioner™",
          },
        ]}
      />

      <CourseOutcomes
        headline="What You Will Walk Away With"
        outcomes={[
          "Multiple working automation projects",
          "Clear understanding of agentic workflows",
          "Ability to apply automation at work or business",
          "Confidence using tools like ChatGPT, Make, Zapier",
          "Your first automation portfolio page",
          "The Agentic AI Builder Certification",
        ]}
      />

      <CertificateMockup
        title="Earn the Agentic AI Builder Certification"
        certName="Agentic AI Builder"
        description="Completing this program earns you the Agentic AI Builder Certification. This shows you can build automation that works - not just someone who attended training."
      />

      <CourseTrainer />

      <div id="pricing">
        <CountdownTimer label="Limited seats - Offer ends in" />
        <CoursePricing
          headline="Your Seat in the Accelerator"
          price="₹14,999"
          originalPrice="₹24,999"
          badge="Bootcamp Grads Get Priority"
          features={[
            "14 days structured learning",
            "Live sessions + recordings",
            "Templates and reusable workflows",
            "Agentic AI Builder Certification",
            "Private support group",
            "Access to updates and upgrades",
            "Portfolio documentation help",
          ]}
          ctaText="Join the Accelerator"
          ctaLink="https://pages.razorpay.com/accelerator"
        />
      </div>

      <CourseFAQ
        headline="Your Questions Answered"
        faqs={[
          {
            question: "Do I need to complete the Bootcamp first?",
            answer: "No, but it helps. If you already know AI basics, you can start from here.",
          },
          {
            question: "Will there be recordings?",
            answer: "Yes, live sessions are recorded. Learning content is self-paced.",
          },
          {
            question: "Do I need coding knowledge?",
            answer: "No. Everything is no-code.",
          },
          {
            question: "How much time do I need daily?",
            answer: "30-90 minutes depending on your pace.",
          },
          {
            question: "Will I build real projects?",
            answer: "Yes. That is the core of this Accelerator.",
          },
        ]}
      />

      <CourseFinalCTA
        headline="You Already Started Learning AI. Now Build With It."
        subheadline="This is not the final step. It's the turning point. Complete the Accelerator and you'll be ready for Mastery."
        ctaText="Join the Accelerator"
        ctaLink="https://pages.razorpay.com/accelerator"
      />

      <Footer />

      <StickyCTA
        courseName="Agentic AI Accelerator"
        ctaText="Join Now"
        ctaLink="https://pages.razorpay.com/accelerator"
        seatsLeft={15}
        nextBatchDate="Next cohort starting soon"
      />
    </main>
  );
};

export default Accelerator;
