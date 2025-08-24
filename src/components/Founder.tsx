import { Button } from "@/components/ui/button";

const Founder = () => {
  return (
    <section className="py-24 gradient-subtle">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              Guided By Ambesh Tiwari
            </h2>
            
            <div className="space-y-4 text-lg leading-relaxed">
              <p>
                Hi, I'm Ambesh. I built Automation School™ because I saw talented people stuck 
                doing repetitive, low-value work while the AI revolution passed them by.
              </p>
              
              <p>
                Now, I've trained <span className="font-semibold gradient-primary bg-clip-text text-transparent">1,000+ learners</span> to 
                use AI not as a gimmick, but as a career-changing skill.
              </p>
              
              <p>
                If you're ready to stop scrolling and start earning — I'll guide you every step of the way.
              </p>
            </div>
            
            <Button variant="cta" size="lg">
              👉 Start Learning From Ambesh Today
            </Button>
          </div>
          
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl shadow-elegant flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 rounded-full gradient-primary mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">AT</span>
                </div>
                <p className="text-xl font-semibold">Ambesh Tiwari</p>
                <p className="text-muted-foreground">Founder, Automation School™</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;