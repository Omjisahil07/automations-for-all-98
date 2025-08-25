import { Meteors } from "./ui/meteors";

const cardData = [
  {
    id: 1,
    title: "Learn the Tools",
    description: "n8n, GHL, Make etc, AI Agents simplified for real-world use.",
    gradient: "gradient-primary",
  },
  {
    id: 2,
    title: "Build Automations",
    description: "Plug-and-play workflows businesses actually pay for.",
    gradient: "gradient-primary",
  },
  {
    id: 3,
    title: "Monetize",
    description: "Client-getting scripts, proposals, and pricing frameworks.",
    gradient: "gradient-accent",
  },
  {
    id: 4,
    title: "Scale",
    description: "Build once, sell repeatedly.",
    gradient: "gradient-accent",
  },
];

const Card = ({ id, title, description, gradient }) => (
  <div className="bg-card p-6 md:p-8 rounded-xl shadow-elegant text-center relative">
    {/* Card container is relatively positioned */}
    <div
      className={`w-16 h-16 md:w-20 md:h-20 rounded-full ${gradient} flex items-center justify-center mx-auto mb-4 md:mb-6 text-white font-bold text-xl md:text-2xl`}
    >
      {id}
    </div>
    <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">{title}</h3>
    <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
      {description}
    </p>
    <div className="absolute inset-0 overflow-hidden">
      {/* Meteors are confined within the card */}
      <Meteors number={20} />
    </div>
  </div>
);

const Solution = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 max-w-8xl">
        <div className="text-center space-y-4 md:space-y-6 mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-heading font-black leading-tight">
            The Client-Ready AI System
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto font-light leading-relaxed">
            At Automation School, you'll master a framework built to turn
            skills into income.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
          {cardData.map((card) => (
            <Card key={card.id} {...card} />
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg md:text-xl lg:text-2xl font-semibold text-muted-foreground leading-relaxed">
            No guesswork. No fluff. Just a proven system trusted by{" "}
            <span className="gradient-primary bg-clip-text text-transparent">
              1,000+ learners
            </span>
            .
          </p>
        </div>
      </div>
    </section>
  );
};
export default Solution;
