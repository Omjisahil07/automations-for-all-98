const CourseOffering = () => {
  const features = [
    "AI Foundations — The exact tools you need (nothing more, nothing less).",
    "Client-Ready AI System™ — A framework to build & sell automations with confidence.",
    "Hands-On Projects — Real workflows from real businesses.",
    "Monetization Playbook — How to pitch, price & win clients.",
    "Community & Mentorship — Surround yourself with learners, experts, and support."
  ];

  return (
    <section className="py-24 gradient-subtle">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            What's Inside Automation School™
          </h2>
        </div>
        
        <div className="space-y-6 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4 bg-card p-6 rounded-xl shadow-elegant">
              <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-white font-bold text-sm">✓</span>
              </div>
              <p className="text-lg">{feature}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-xl font-semibold text-muted-foreground">
            This is more than learning. This is{" "}
            <span className="gradient-accent bg-clip-text text-transparent">transformation</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CourseOffering;