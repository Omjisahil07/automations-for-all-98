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
import { MatrixBackground } from "@/components/MatrixBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Site-wide Matrix Background */}
      <MatrixBackground />

      {/* Header */}
      <Header />

      {/* All content sections with relative z-index and top padding for fixed header */}
      <div className="relative z-20">
        <div id="home" className="pt-16">
          <Hero />
        </div>
        <div id="about">
          <NewEra />
          <TargetAudience />
          <Problem />
          <Solution />
        </div>
        <div id="testimonials">
          <Testimonials />
        </div>
        <div id="courses">
          <CourseOffering />
        </div>
        <div id="pricing">
          <Pricing />
        </div>
        <div id="contact">
          <Founder />
          <FinalCTA />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
