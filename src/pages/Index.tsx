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

const Index = () => {
  return (
    <div className="min-h-screen">
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
  );
};

export default Index;
