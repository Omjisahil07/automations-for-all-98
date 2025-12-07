import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NewEra from "@/components/NewEra";
import TargetAudience from "@/components/TargetAudience";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Testimonials from "@/components/Testimonials";
import CourseOffering from "@/components/CourseOffering";
import Pricing from "@/components/Pricing";
import Founder from "@/components/Founder";
import FinalCTA from "@/components/FinalCTA";
import FinalTestimonial from "@/components/FinalTestimonial";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { SectionDivider } from "@/components/ui/section-divider";

const Index = () => {
  return (
    <div className="min-h-screen relative bg-background text-foreground overflow-x-hidden">
      {/* Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Header */}
      <Header />

      {/* All content sections with relative z-index and top padding for fixed header */}
      <div className="relative z-20">
        <div id="home">
          <Hero />
        </div>
        
        <div id="about">
          <NewEra />
          <TargetAudience />
          <Problem />
          <Solution />
        </div>
        
        <SectionDivider variant="dots" />
        
        <div id="testimonials">
          <Testimonials />
        </div>
        
        <div id="pricing">
          <Pricing />
          <CourseOffering />
        </div>
        
        <SectionDivider variant="dots" />
        
        <div id="contact">
          <Founder />
          <FinalTestimonial />
          <FinalCTA />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
