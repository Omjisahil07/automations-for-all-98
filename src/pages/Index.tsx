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
      
      {/* All content sections with relative z-index */}
      <div className="relative z-20">
        <Hero />
        <NewEra />
        <TargetAudience />
        <Problem />
        <Solution />
        <Testimonials />
        <CourseOffering />
        <Pricing />
        <Founder />
        <FinalCTA />
      </div>
    </div>
  );
};

export default Index;
