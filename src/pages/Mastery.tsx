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

const Mastery = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />

      <CourseHero
        tagline="12-Week Transformation Program"
        headline="Agentic AI"
        headlineAccent="Mastery"
        subheadline="The complete system to master AI automation and build a thriving automation business. This is the flagship program that changes everything."
        ctaText="Apply Now – ₹99,999"
        ctaLink="#pricing"
        trustItems={[
          { icon: "calendar", text: "12 Weeks Deep Dive" },
          { icon: "users", text: "Elite Cohort" },
          { icon: "award", text: "Business Building Focus" },
        ]}
      />

      <CourseAudience
        headline="Built For Future Leaders"
        audiences={[
          "Entrepreneurs ready to build AI-first businesses",
          "Consultants who want to add automation services",
          "Tech professionals pivoting to AI specialization",
          "Agency owners looking to scale with AI",
        ]}
      />

      <CourseProblem
        headline="Why 90% of AI Learners Stay Stuck"
        problems={[
          "Learning tools without understanding strategy",
          "No clear path from skills to income",
          "Overwhelmed by the rapidly changing landscape",
          "Missing the business & client-facing skills",
        ]}
      />

      <CoursePromise
        headline="The Mastery Difference"
        promises={[
          "Complete technical + business curriculum",
          "Build & launch your automation service",
          "Land your first paying clients during the program",
          "Join an elite network of AI automation professionals",
        ]}
      />

      <CourseAgenda
        headline="The 12-Week Mastery Curriculum"
        modules={[
          {
            title: "Phase 1 (Weeks 1-4): Technical Mastery",
            description: "Master Make.com, Zapier, n8n, and AI integration. Build complex, production-ready automation systems.",
          },
          {
            title: "Phase 2 (Weeks 5-8): Business Building",
            description: "Package your skills into services. Pricing, proposals, and positioning for automation consulting.",
          },
          {
            title: "Phase 3 (Weeks 9-12): Client Acquisition",
            description: "Find, pitch, and close clients. Delivery systems, SOPs, and scaling your practice.",
          },
        ]}
      />

      <CourseOutcomes
        headline="What Mastery Graduates Achieve"
        outcomes={[
          "Complete portfolio of automation projects",
          "Launched automation service/agency",
          "First paying clients (many during the program)",
          "Lifetime access to Mastery community & updates",
          "Direct line to Ambesh for 6 months",
          "Potential to join our referral network",
        ]}
      />

      <CourseTrainer />

      <CoursePricing
        headline="Join Agentic AI Mastery"
        price="₹99,999"
        originalPrice="₹1,99,999"
        badge="Flagship Program"
        features={[
          "12 Weeks of Intensive Training",
          "Weekly Group Coaching Calls",
          "Bi-weekly 1-on-1 Sessions with Ambesh",
          "Complete Business-in-a-Box Templates",
          "Private Mastery Community (Lifetime)",
          "All Tools & Software Included",
          "Client Referral Network Access",
          "6-Month Post-Program Support",
          "Money-Back Guarantee",
        ]}
        ctaText="Apply for Mastery"
        ctaLink="https://pages.razorpay.com/mastery"
      />

      <CourseFAQ
        headline="Mastery FAQ"
        faqs={[
          {
            question: "What makes this different from other programs?",
            answer: "Mastery combines deep technical training with business building. You don't just learn—you launch.",
          },
          {
            question: "What's the weekly time commitment?",
            answer: "Plan for 15-20 hours per week. This is an intensive program for serious learners.",
          },
          {
            question: "Do I need prior experience?",
            answer: "Basic familiarity with automation tools helps, but we've had complete beginners succeed with dedication.",
          },
          {
            question: "Is there financing available?",
            answer: "Yes, we offer EMI options. Contact us for details.",
          },
          {
            question: "What's the guarantee?",
            answer: "If you complete all assignments and don't see results, we'll work with you until you do or refund your investment.",
          },
        ]}
      />

      <CourseFinalCTA
        headline="This Is Your Moment"
        subheadline="Join the next generation of AI automation experts. Limited to 15 seats per cohort."
        ctaText="Apply for Mastery – ₹99,999"
        ctaLink="https://pages.razorpay.com/mastery"
      />

      <Footer />
    </main>
  );
};

export default Mastery;
