import Header from "@/components/Header";
import Footer from "@/components/Footer";
import VSLHero from "@/components/mastery/VSLHero";
import PainRecognition from "@/components/mastery/PainRecognition";
import FutureGap from "@/components/mastery/FutureGap";
import VisionSnapshot from "@/components/mastery/VisionSnapshot";
import IdentityShift from "@/components/mastery/IdentityShift";
import WhatYouLearn from "@/components/mastery/WhatYouLearn";
import ProgramTimeline from "@/components/mastery/ProgramTimeline";
import RealOutcome from "@/components/mastery/RealOutcome";
import WhoIsItFor from "@/components/mastery/WhoIsItFor";
import WhatYouGet from "@/components/mastery/WhatYouGet";
import CertificateMockup from "@/components/course/CertificateMockup";
import TestimonialsPlaceholder from "@/components/mastery/TestimonialsPlaceholder";
import MasteryPricing from "@/components/mastery/MasteryPricing";
import MasteryFAQ from "@/components/mastery/MasteryFAQ";
import FinalPush from "@/components/mastery/FinalPush";
import StickyCTA from "@/components/course/StickyCTA";

const Mastery = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <VSLHero />
      <PainRecognition />
      <FutureGap />
      <VisionSnapshot />
      <IdentityShift />
      <WhatYouLearn />
      <ProgramTimeline />
      <RealOutcome />
      <WhoIsItFor />
      <WhatYouGet />
      <CertificateMockup
        title="Earn the Agentic AI Practitioner Certificate"
        certName="Agentic AI Practitioner"
        description="Once you complete the program, you will earn the Agentic AI Practitioner certification."
      />
      <TestimonialsPlaceholder />
      <MasteryPricing />
      <MasteryFAQ />
      <FinalPush />
      <Footer />
      <StickyCTA
        courseName="Agentic AI Mastery"
        ctaText="Apply Now"
        ctaLink="#pricing"
        seatsLeft={10}
        nextBatchDate="Limited seats"
      />
    </main>
  );
};

export default Mastery;