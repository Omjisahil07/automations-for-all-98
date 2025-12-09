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

const Accelerator = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />

      <CourseHero
        tagline="4-Week Intensive Program"
        headline="Automation"
        headlineAccent="Accelerator"
        subheadline="Go beyond basics. Build production-ready automation systems that scale your business while you focus on growth."
        ctaText="Apply Now – ₹24,999"
        ctaLink="#pricing"
        trustItems={[
          { icon: "calendar", text: "4 Weeks Live" },
          { icon: "users", text: "Cohort-Based" },
          { icon: "award", text: "1-on-1 Mentorship" },
        ]}
      />

      <CourseAudience
        headline="Perfect For You If..."
        audiences={[
          "You've tried basic automations and want to go deeper",
          "You're running a team and need scalable systems",
          "You want to offer automation as a service",
          "You're ready to invest 4 weeks to transform your workflow",
        ]}
      />

      <CourseProblem
        headline="The Plateau Problem"
        problems={[
          "You've built a few automations but they break constantly",
          "Your workflows are messy and hard to maintain",
          "You're not sure how to handle complex, multi-system processes",
          "You need someone to guide you through advanced scenarios",
        ]}
      />

      <CoursePromise
        headline="What The Accelerator Delivers"
        promises={[
          "Production-grade automation systems",
          "Advanced error handling & monitoring",
          "Multi-platform integrations (CRM, payments, AI)",
          "Weekly 1-on-1 calls with Ambesh",
        ]}
      />

      <CourseAgenda
        headline="The 4-Week Journey"
        modules={[
          {
            title: "Week 1: Architecture & Strategy",
            description: "Design automation systems that scale. Learn to map complex processes and identify the highest-ROI opportunities.",
          },
          {
            title: "Week 2: Advanced Workflows",
            description: "Master conditional logic, loops, error handling, and multi-branch workflows that handle real-world complexity.",
          },
          {
            title: "Week 3: AI Integration",
            description: "Integrate ChatGPT, Claude, and other AI models into your workflows for intelligent automation.",
          },
          {
            title: "Week 4: Launch & Optimize",
            description: "Deploy your systems, set up monitoring, and create documentation. Plus: building automation as a service.",
          },
        ]}
      />

      <CourseOutcomes
        headline="After 4 Weeks, You'll Have:"
        outcomes={[
          "5+ production-ready automation systems",
          "Complete automation documentation & SOPs",
          "Ability to handle complex multi-system workflows",
          "Skills to offer automation consulting/services",
          "Direct access to Ambesh for 90 days",
        ]}
      />

      <CourseTrainer />

      <CoursePricing
        headline="Join The Accelerator"
        price="₹24,999"
        originalPrice="₹49,999"
        badge="Next Cohort Starting Soon"
        features={[
          "4 Weeks of Live Training (12+ hours)",
          "Weekly 1-on-1 Mentorship Calls",
          "Private Slack Community Access",
          "Production Templates & Frameworks",
          "Lifetime Recording Access",
          "90-Day Post-Program Support",
          "Certificate of Completion",
          "Bonus: Client Acquisition Playbook",
        ]}
        ctaText="Apply for Accelerator"
        ctaLink="https://pages.razorpay.com/accelerator"
      />

      <CourseFAQ
        headline="Your Questions Answered"
        faqs={[
          {
            question: "What's the time commitment?",
            answer: "Plan for 8-10 hours per week: 3 hours live sessions + 5-7 hours of implementation.",
          },
          {
            question: "Do I need Bootcamp experience first?",
            answer: "Not required, but you should have basic familiarity with automation tools like Make.com or Zapier.",
          },
          {
            question: "How do the 1-on-1 calls work?",
            answer: "You get 4 private 30-minute calls with Ambesh to discuss your specific challenges and projects.",
          },
          {
            question: "What's the cohort size?",
            answer: "We keep cohorts small (max 20 people) to ensure personalized attention.",
          },
          {
            question: "Can I get a refund?",
            answer: "Full refund available within 7 days if the program isn't right for you.",
          },
        ]}
      />

      <CourseFinalCTA
        headline="Ready to Accelerate?"
        subheadline="Transform from automation dabbler to automation expert in just 4 weeks."
        ctaText="Apply Now – Limited Spots"
        ctaLink="https://pages.razorpay.com/accelerator"
      />

      <Footer />
    </main>
  );
};

export default Accelerator;
