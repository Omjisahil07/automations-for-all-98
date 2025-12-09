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

const Bootcamp = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />

      <CourseHero
        tagline="2-Day Intensive Workshop"
        headline="Build Agentic AI Systems in"
        headlineAccent="2 Days"
        subheadline="A live, hands-on bootcamp to help you use AI and automation in real work. Build your first working system and start your path to becoming a Certified Agentic AI Practitioner."
        ctaText="Join the 2-Day Bootcamp"
        ctaLink="#pricing"
        trustItems={[
          { icon: "calendar", text: "2 Days Live" },
          { icon: "users", text: "Offline in Delhi" },
          { icon: "award", text: "Starter Certificate" },
        ]}
      />

      <CourseAudience
        headline="Who Should Join This Bootcamp"
        audiences={[
          "Job seekers who want an edge in interviews and projects",
          "Working professionals who want to use AI to work faster and smarter",
          "Founders and business owners who want to automate parts of their work",
          "Freelancers who want to add a high-value automation service",
          "Students who want a strong future skill without learning coding",
        ]}
      />

      <CourseProblem
        headline="AI is here. Most people are still just watching it."
        problems={[
          "You keep wasting time on manual and boring tasks",
          "You feel 'behind' when others talk about AI and automation",
          "You miss chances for better roles and projects",
          "Your business keeps running on old systems while others move faster",
        ]}
      />

      <CoursePromise
        headline="What This 2-Day Bootcamp Will Do For You"
        promises={[
          "Clear understanding of what agentic AI is and which tools to focus on",
          "Hands-on skill with ChatGPT agents and no-code automation tools",
          "One working automation system you built yourself",
          "Confidence to use AI for your tasks instead of only watching others",
        ]}
      />

      <CourseAgenda
        headline="What We Will Cover in 2 Days"
        days={[
          {
            title: "Day 1: Foundations & First Build",
            items: [
              "Simple intro to agentic AI and automation (no heavy theory)",
              "How AI, triggers and actions work together",
              "Tool setup: ChatGPT, Make/Zapier and a few real apps",
              "Hands-on: build your first simple automation",
              "Q&A and quick fixes so your first system actually works",
            ],
          },
          {
            title: "Day 2: Real Use Cases & Stronger Systems",
            items: [
              "5-7 real use cases from business, jobs and freelancing",
              "How to design an automation system that doesn't break easily",
              "Build a bigger workflow in groups (sales, HR, marketing, ops)",
              "Simple way to show and explain your system to others",
              "Next steps: how to continue into Accelerator and Mastery",
            ],
          },
        ]}
      />

      <CourseOutcomes
        headline="What You Will Walk Out With"
        outcomes={[
          "A working automation system you built yourself",
          "Clear mental model of how agentic AI fits into any work",
          "Confidence to use AI for your tasks",
          "Agentic AI Starter Certification",
          "Support group access for follow-up questions",
          "Templates and examples to reuse later",
        ]}
      />

      <CertificateMockup
        title="Get Your Agentic AI Starter Certification"
        certName="Agentic AI Starter"
        description="When you complete the bootcamp and finish your first automation, you will receive an Agentic AI Starter Certification. Add this to your LinkedIn, resume or portfolio as your first step towards becoming a Certified Agentic AI Practitioner."
      />

      <CourseTrainer />

      <div id="pricing">
        <CountdownTimer label="Limited seats - Offer ends in" />
        <CoursePricing
          headline="Your Ticket to the 2-Day Bootcamp"
          price="₹4,999"
          originalPrice="₹9,999"
          badge="50% OFF - Limited Seats"
          features={[
            "2 full days of live, offline training",
            "Hands-on build sessions and support",
            "Agentic AI Starter Certification",
            "Access to recordings of key parts",
            "Templates and examples to reuse later",
            "Invite-only community group",
            "Bonus: Special upgrade offer to Accelerator",
          ]}
          ctaText="Join the 2-Day Bootcamp"
          ctaLink="https://pages.razorpay.com/bootcamp"
        />
      </div>

      <CourseFAQ
        headline="Frequently Asked Questions"
        faqs={[
          {
            question: "Do I need to know coding?",
            answer: "No. If you can use a browser, email and basic tools, you are ready.",
          },
          {
            question: "I am not from a tech background. Will I be able to follow?",
            answer: "Yes. The bootcamp is designed for non-tech backgrounds. We use simple language and focus on practice.",
          },
          {
            question: "Will this help me get clients or a better job?",
            answer: "This bootcamp gives you your first working automation and starter certificate. It gives you a strong base to move into the Accelerator and Mastery where we focus more on career and income.",
          },
          {
            question: "Will I get recordings?",
            answer: "This is an offline, hands-on bootcamp. We may share short recordings or summaries of key parts, but the main value is in live practice.",
          },
          {
            question: "Can my company sponsor this?",
            answer: "Yes. We can provide invoice and basic documentation if your company wants to sponsor your seat.",
          },
        ]}
      />

      <CourseFinalCTA
        headline="If You Can See Where AI is Going, This is Your Next Step"
        subheadline="You can keep watching AI content and feel late. Or you can spend 2 focused days, learn agentic AI in a clear way and build something real."
        ctaText="Secure My Seat for the 2-Day Bootcamp"
        ctaLink="https://pages.razorpay.com/bootcamp"
      />

      <Footer />

      <StickyCTA
        courseName="Agentic AI Bootcamp"
        ctaText="Save My Seat"
        ctaLink="https://pages.razorpay.com/bootcamp"
        seatsLeft={25}
        nextBatchDate="Next batch: Jan 18"
      />
    </main>
  );
};

export default Bootcamp;
