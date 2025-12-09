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

const Mastery = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />

      <CourseHero
        tagline="3-Month Professional Program"
        headline="Become a Certified"
        headlineAccent="Agentic AI Practitioner™"
        subheadline="A 3-month program to help you master agentic automation, build advanced systems and learn how to apply these skills in work, freelancing or business."
        ctaText="Apply for Mastery"
        ctaLink="#pricing"
        trustItems={[
          { icon: "calendar", text: "3 Months" },
          { icon: "users", text: "Application Only" },
          { icon: "award", text: "Practitioner Certification" },
        ]}
      />

      <CourseAudience
        headline="This Program Is For You If..."
        audiences={[
          "You want to build automation at a deeper level",
          "You want to use this skill in career, freelancing or business",
          "You want guided practice, not random content",
          "You want feedback and real help when stuck",
          "You want a skill that stays valuable long-term",
        ]}
      />

      <CourseProblem
        headline="There's a Difference Between Knowing Automation and Being Someone Who Can Build With It"
        problems={[
          "Beginners copy templates",
          "Skilled people design systems",
          "Professionals automate workflows others depend on",
          "Practitioners get opportunities, roles and respect",
          "Mastery is rare because most stop halfway. You won't.",
        ]}
      />

      <CoursePromise
        headline="You'll Build Systems People Can Actually Use"
        promises={[
          "AI assistant for a business or department",
          "Workflow automation with decision logic",
          "A working chatbot or workflow agent",
          "A custom automation for your job, business or niche",
          "Final capstone system to showcase on LinkedIn",
        ]}
      />

      <CourseAgenda
        headline="What We Cover in 3 Months"
        modules={[
          {
            title: "Module 1: Strong Foundations",
            description: "Design, structure and mapping workflows for agentic automation.",
          },
          {
            title: "Module 2: n8n Deep Practice",
            description: "Building reliable and flexible multi-step automation workflows.",
          },
          {
            title: "Module 3: AI Agent Systems",
            description: "Build assistants that make decisions and act autonomously.",
          },
          {
            title: "Module 4: Business & Team Workflows",
            description: "Sales, HR, marketing, operations and service workflow automation.",
          },
          {
            title: "Module 5: Portfolio Project",
            description: "Build one complete automation system for a real use case.",
          },
          {
            title: "Module 6: Career or Earning Direction",
            description: "Use this skill for job, freelance or business applications.",
          },
        ]}
      />

      <ProgressionLadder
        headline="The Complete Journey"
        currentStep={3}
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
        headline="What Mastery Graduates Achieve"
        outcomes={[
          "Multiple working automation projects in portfolio",
          "Advanced understanding of agentic AI systems",
          "Ability to design and build complex workflows",
          "Confidence using n8n, ChatGPT, Make, and more",
          "Live weekly sessions and feedback on systems",
          "The Certified Agentic AI Practitioner™ Certification",
          "Lifetime access to updates and community",
        ]}
      />

      <CertificateMockup
        title="Earn the Certified Agentic AI Practitioner™ Certification"
        certName="Certified Agentic AI Practitioner™"
        description="Once you complete the final project and review, you will earn the highest certification in the Agentic AI learning system. This certificate shows you're someone who can build automation that works - not just someone who attended training."
      />

      <CourseTrainer />

      <div id="pricing">
        <CountdownTimer label="Applications closing soon" />
        <CoursePricing
          headline="Enrollment Fee"
          price="₹59,999"
          originalPrice="₹99,999"
          badge="Flagship Program"
          features={[
            "3 months intensive training",
            "Live weekly sessions",
            "Feedback on your systems",
            "Ready-to-use templates",
            "Workflow libraries",
            "Community and support",
            "Lifetime access to updates",
            "Certified Agentic AI Practitioner™",
            "Easy EMIs available",
          ]}
          ctaText="Apply for Mastery"
          ctaLink="https://pages.razorpay.com/mastery"
        />
      </div>

      <CourseFAQ
        headline="Mastery FAQ"
        faqs={[
          {
            question: "What makes this different from other programs?",
            answer: "This is not just a course. This is identity-level skill building. Most people stop after learning tools. This program teaches you to apply automation to real work, solve meaningful problems and create value.",
          },
          {
            question: "What's the weekly time commitment?",
            answer: "Plan for 8-10 hours per week including live sessions and implementation work.",
          },
          {
            question: "Do I need prior experience?",
            answer: "Familiarity with automation basics helps, but dedicated beginners can succeed with commitment.",
          },
          {
            question: "Is there financing available?",
            answer: "Yes, we offer easy EMI options. Contact us for details.",
          },
          {
            question: "How does enrollment work?",
            answer: "1. Apply for the program. 2. Short call to confirm fit and goals. 3. Secure your seat and begin onboarding.",
          },
        ]}
      />

      <CourseFinalCTA
        headline="If You're Serious About AI and Automation, This Is Your Next Step"
        subheadline="You already know where the world is going. Those who know how to build with agentic AI will lead. This is where you become one of them."
        ctaText="Apply for Mastery"
        ctaLink="https://pages.razorpay.com/mastery"
      />

      <Footer />

      <StickyCTA
        courseName="Agentic AI Mastery"
        ctaText="Apply Now"
        ctaLink="https://pages.razorpay.com/mastery"
        seatsLeft={10}
        nextBatchDate="Limited seats"
      />
    </main>
  );
};

export default Mastery;
