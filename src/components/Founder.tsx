import { Button } from "@/components/ui/button";

const Founder = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 max-w-8xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-4 md:space-y-6 order-2 lg:order-1">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-black leading-tight">
              Mentored By <br />
              <span className="gradient-primary bg-clip-text text-transparent">
                Ambesh Tiwari
              </span>
            </h2>

            <div className="space-y-4 md:space-y-6 text-lg md:text-xl lg:text-2xl leading-relaxed text-muted-foreground font-light">
              <p>
                Hi, I'm Ambesh. I built Automation School because I saw talented
                people stuck doing repetitive, low-value work while the AI
                revolution passed them by.
              </p>

              <p>
                Now, I've trained{" "}
                <span className="font-semibold gradient-primary bg-clip-text text-transparent">
                  1,000+ learners
                </span>{" "}
                to use AI not as a gimmick, but as a career-changing skill.
              </p>

              <p>
                If you're ready to stop scrolling and start earning — I'll guide
                you every step of the way.
              </p>
            </div>

            <div className="pt-2">
              <Button
                variant="cta"
                size="lg"
                className="text-lg md:text-xl px-6 md:px-8 py-3 md:py-4 rounded-2xl w-full sm:w-auto"
              >
                Start Learning From Ambesh Today
              </Button>
            </div>
          </div>

          <div className="relative space-y-4 md:space-y-6 order-1 lg:order-2">
            <div className="w-full h-80 md:h-[30rem] lg:h-[40rem] bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl shadow-elegant flex items-center justify-center">
              <img
                src="/ambesh.jpg"
                alt="Ambesh Tiwari"
                className="w-full h-full object-cover border-2 md:border-4 border-white shadow-lg rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founder;
