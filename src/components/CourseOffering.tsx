import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

const CourseOffering = () => {
  const features = [
    "AI Foundations : The exact tools you need (nothing more, nothing less).",
    "Client-Ready AI System™ : A framework to build & sell automations with confidence.",
    "Hands-On Projects : Real workflows from real businesses.",
    "Monetization Playbook : How to pitch, price & win clients.",
    "Community & Mentorship : Surround yourself with learners, experts, and support.",
  ];

  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 max-w-8xl">
        <div className="text-center space-y-3 md:space-y-4 mb-8 md:mb-10">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-black leading-tight">
            What's Inside Automation School
          </h2>
        </div>

        <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
          {features.map((feature, index) => (
            <BackgroundBeamsWithCollision key={index}>
              <div className="flex items-start space-x-3 md:space-x-4 bg-card p-4 md:p-6 rounded-xl shadow-elegant">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full gradient-primary flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm md:text-lg">
                    ✓
                  </span>
                </div>
                <p className="text-base md:text-lg lg:text-xl leading-relaxed">
                  <span className="font-bold">{feature.split(":")[0]}:</span>
                  {feature.split(":")[1]}
                </p>
              </div>
            </BackgroundBeamsWithCollision>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg md:text-xl lg:text-2xl font-semibold text-muted-foreground leading-relaxed">
            This is more than learning. This is{" "}
            <span className="gradient-accent bg-clip-text text-transparent">
              transformation
            </span>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default CourseOffering;
