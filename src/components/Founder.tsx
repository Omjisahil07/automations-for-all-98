import { Button } from "@/components/ui/button";
import { ArrowRight,CheckCircle } from "lucide-react";
import { CometCard } from "@/components/ui/comet-card";

const highlights = [
  "12+ years of experience with an educational background in Engineering and Management",
  "Worked with companies like Tata Digital, Zen Technologies & Growth School Etc.",
  "Conducted AI programs for ICAI, ICSI, IEEE, IFERP and the Tanzania Ministry of Finance",
  "Author of “Accelerate with AI” (Amazon best seller)",
];

const Founder = () => {
  return (
    <section className="py-14 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 max-w-8xl">
        <div className="text-center space-y-4 md:space-y-6 mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-black leading-tight">
            <span>Mentored By </span>
            <span className="gradient-primary bg-clip-text text-transparent">
              Ambesh Tiwari
            </span>
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image Section */}
          <div className="order-1 lg:order-2">
            <CometCard>
              <div className="relative space-y-4 md:space-y-6">
                <div className="w-full h-[20rem] md:h-[30rem] lg:h-[40rem] rounded-2xl flex items-center justify-center">
                  <img
                    src="/AmbeshImage.png"
                    alt="Ambesh Tiwari"
                    className="w-full h-45 object-cover rounded-xl"
                  />
                </div>
              </div>
            </CometCard>
          </div>

          {/* Text Section */}
          <div className="space-y-6 order-2 lg:order-1">
            <div>
              <h3
                className="text-2xl font-bold mb-3"
                style={{ color: "hsl(210, 40%, 98%)" }}
              >
                Why Learn From Ambesh?
              </h3>
              <div className="space-y-4 md:space-y-6 text-lg md:text-xl lg:text-2xl leading-relaxed text-muted-foreground font-light">
                <p>
                  Ambesh Tiwari is Entrepreneur by mind & a mentor by heart. He
                  is founder of Automation School and BDA Technologies Pvt Ltd,
                  where he helps entrepreneurs, professionals, and businesses
                  use AI automation to eliminate repetitive work and scale
                  faster.
                </p>
                <p>
                  Over the past 12+ years, he has trained more than{" "}
                  <span className="font-semibold gradient-primary bg-clip-text text-transparent">
                    10,000 learners
                  </span>{" "}
                  and guided{" "}
                  <span className="font-semibold gradient-primary bg-clip-text text-transparent">
                    500+ businesses
                  </span>{" "}
                  to adopt AI and automation effectively. His approach is
                  practical, outcome-driven, and trusted by both corporate and
                  government bodies.
                </p>
              </div>
              <ul className="mt-2 text-white font-thin text-sm md:text-lg space-y-2">
                {highlights.map((highlight, index) => (
                  <div className="flex items-center gap-3" key={index}>
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    {highlight}
                  </div>
                ))}
              </ul>
            </div>

            <div className="pt-2">
              <Button
                variant="hero"
                size="lg"
                className=" rounded-full group bg-primary text-primary-foreground hover:bg-primary/90 hover:translate-y-[-2px] transition-transform"
              >
                Start Learning From Ambesh Today
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
