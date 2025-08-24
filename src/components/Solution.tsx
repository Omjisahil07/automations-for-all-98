const Solution = () => {
  return (
    <section className="py-24 gradient-subtle">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            The Client-Ready AI System™
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            At Automation School™, you'll master a framework built to turn skills into income.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-card p-6 rounded-xl shadow-elegant text-center">
            <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
              1
            </div>
            <h3 className="text-lg font-semibold mb-3">Learn the Tools</h3>
            <p className="text-sm text-muted-foreground">
              n8n, GHL, Make etc, AI Agents simplified for real-world use.
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-xl shadow-elegant text-center">
            <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
              2
            </div>
            <h3 className="text-lg font-semibold mb-3">Build Automations</h3>
            <p className="text-sm text-muted-foreground">
              Plug-and-play workflows businesses actually pay for.
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-xl shadow-elegant text-center">
            <div className="w-16 h-16 rounded-full gradient-accent flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
              3
            </div>
            <h3 className="text-lg font-semibold mb-3">Monetize</h3>
            <p className="text-sm text-muted-foreground">
              Client-getting scripts, proposals, and pricing frameworks.
            </p>
          </div>
          
          <div className="bg-card p-6 rounded-xl shadow-elegant text-center">
            <div className="w-16 h-16 rounded-full gradient-accent flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
              4
            </div>
            <h3 className="text-lg font-semibold mb-3">Scale</h3>
            <p className="text-sm text-muted-foreground">
              Build once, sell repeatedly.
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-xl font-semibold">
            No guesswork. No fluff. Just a proven system trusted by{" "}
            <span className="gradient-primary bg-clip-text text-transparent">1,000+ learners</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Solution;