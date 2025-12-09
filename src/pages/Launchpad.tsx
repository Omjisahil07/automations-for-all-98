import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CourseHero from "@/components/course/CourseHero";
import CourseAudience from "@/components/course/CourseAudience";
import CourseProblem from "@/components/course/CourseProblem";
import CoursePromise from "@/components/course/CoursePromise";
import CourseOutcomes from "@/components/course/CourseOutcomes";
import CourseTrainer from "@/components/course/CourseTrainer";
import CourseFAQ from "@/components/course/CourseFAQ";
import CourseFinalCTA from "@/components/course/CourseFinalCTA";
import StickyCTA from "@/components/course/StickyCTA";
import ScrollingOfferBar from "@/components/course/ScrollingOfferBar";
import QuickMetrics from "@/components/course/QuickMetrics";
import FullCurriculum from "@/components/course/FullCurriculum";
import TwoTierPricing from "@/components/course/TwoTierPricing";

const Launchpad = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Scrolling Offer Bar */}
      <ScrollingOfferBar 
        messages={[
          "300+ already joined",
          "Special launch offer closing soon",
        ]}
      />
      
      <div className="pt-10"> {/* Offset for scrolling bar */}
        <Header hasOfferBar={true} />

        <CourseHero
          tagline="For job seekers, freelancers, working professionals and small business owners"
          headline="Learn Agentic AI and Automation."
          headlineAccent="Build Workflows. Save Hours."
          subheadline="No coding. No tech background needed. Build your first automation in 60–90 minutes."
          ctaText="Get Instant Access"
          ctaLink="#pricing"
          trustItems={[
            { icon: "clock", text: "Lifetime Access" },
            { icon: "users", text: "Beginner Friendly" },
            { icon: "award", text: "Certificate Included" },
          ]}
        />

        <QuickMetrics
          metrics={[
            { icon: "modules", label: "Modules", value: "12" },
            { icon: "live", label: "Live Classes", value: "6" },
            { icon: "level", label: "", value: "Beginner Friendly" },
            { icon: "time", label: "/week", value: "2-4 hours" },
          ]}
        />

        <CourseAudience
          headline="Perfect Starting Point If..."
          audiences={[
            "You're curious about AI but don't know where to start",
            "You want to automate daily tasks and save hours every week",
            "You're watching videos but still feel confused",
            "You want a structured, step-by-step learning path",
            "You want to build your first AI automation without coding",
          ]}
        />

        <CourseProblem
          headline="If You're Still Repeating Tasks Every Day, You're Losing Time"
          problems={[
            "Manual follow-ups taking hours",
            "Copy-paste between tools constantly",
            "Tracking tasks by hand",
            "Writing the same replies over and over",
            "Watching videos but still confused about real implementation",
          ]}
        />

        <CoursePromise
          headline="After This Program"
          promises={[
            "You will automate daily work",
            "You will build workflows using AI",
            "You will create a simple agent",
            "You will save hours every week",
            "You will feel confident with AI automation",
            "This is the first step toward becoming an Agentic AI Practitioner",
          ]}
        />

        <FullCurriculum
          headline="Full Curriculum"
          modules={[
            { title: "Module 1: Basics of AI Automation", description: "Understand what AI automation is, where it fits in your work, and the core concepts you need to know." },
            { title: "Module 2: Understanding Workflows", description: "Learn how workflows work - triggers, actions, and how apps connect together." },
            { title: "Module 3: n8n Setup", description: "Set up your automation environment with n8n - a powerful no-code automation tool." },
            { title: "Module 4: Build First Workflow", description: "Create your first working automation from scratch with step-by-step guidance." },
            { title: "Module 5: Using ChatGPT in Automation", description: "Integrate AI capabilities into your workflows using ChatGPT." },
            { title: "Module 6: Integrations", description: "Connect Gmail, Google Sheets, WhatsApp, and other popular tools." },
            { title: "Module 7: Build a Simple AI Agent", description: "Create an intelligent agent that can make decisions and take actions." },
            { title: "Module 8: Fixing Errors and Improving", description: "Debug issues and optimize your automations for reliability." },
            { title: "Module 9: Multi-step Workflows", description: "Build complex automations with multiple steps and conditional logic." },
            { title: "Module 10: Reporting Automation", description: "Automate reports and notifications for your work or business." },
            { title: "Module 11: Real World Automation Library", description: "Access a library of ready-to-use automation templates." },
            { title: "Module 12: Final Build + Review", description: "Complete your capstone project and get feedback on your work." },
          ]}
          bonus="Advanced Agentic Automation Walkthrough"
        />

        <CourseOutcomes
          headline="You Get"
          outcomes={[
            "Step-by-step video lessons",
            "Ready templates to use immediately",
            "Downloadable prompts collection",
            "Real-world examples",
            "One final automation project",
            "Certificate of completion",
          ]}
        />

        <CourseTrainer />

        <TwoTierPricing
          headline="Choose Your Access Level"
          tiers={[
            {
              name: "Premium Access",
              price: "₹1,499",
              originalPrice: "₹2,499",
              isRecommended: true,
              features: [
                "Full course access",
                "6 live support classes",
                "Certificate of completion",
                "Community access",
                "Future updates included",
                "Priority support",
              ],
              ctaText: "Get Premium Access",
              ctaLink: "https://pages.razorpay.com/launchpad-premium",
            },
            {
              name: "Basic Access",
              price: "₹1,199",
              badge: "Self-paced",
              features: [
                "Full course access",
                "Certificate of completion",
                "Lifetime access",
              ],
              ctaText: "Get Basic Access",
              ctaLink: "https://pages.razorpay.com/launchpad-basic",
            },
          ]}
        />

        <CourseFAQ
          headline="Quick Questions"
          faqs={[
            {
              question: "Is this for complete beginners?",
              answer: "Yes! This program is designed for people with no technical background. If you can use a browser and basic tools, you can learn automation.",
            },
            {
              question: "How long do I have access?",
              answer: "Lifetime access. Learn at your own pace, revisit lessons anytime.",
            },
            {
              question: "What tools do I need?",
              answer: "Just a laptop and internet connection. All tools used have free tiers.",
            },
            {
              question: "Will I get a certificate?",
              answer: "Yes, you'll receive a certificate of completion that you can add to your LinkedIn profile.",
            },
            {
              question: "What's the difference between Basic and Premium?",
              answer: "Premium includes 6 live support classes for Q&A, troubleshooting, and personalized help. Basic is fully self-paced.",
            },
          ]}
        />

        <CourseFinalCTA
          headline="You Can Keep Doing Everything Manually"
          subheadline="Or learn automation once and save time every week. If you want this skill, start now."
          ctaText="Join the Program"
          ctaLink="https://pages.razorpay.com/launchpad-premium"
        />

        <Footer />

        <StickyCTA
          courseName="Agentic AI Launchpad"
          ctaText="Get Access"
          ctaLink="https://pages.razorpay.com/launchpad-premium"
          seatsLeft={50}
          nextBatchDate="Instant access"
        />
      </div>
    </main>
  );
};

export default Launchpad;
