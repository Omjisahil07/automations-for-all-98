import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const MasteryFAQ = () => {
  const faqs = [
    {
      question: "Do I need coding?",
      answer: "No. This program is designed to be no-code friendly. You'll use visual automation tools like n8n and no-code AI platforms. If you can use a computer and follow instructions, you can succeed.",
    },
    {
      question: "How much time each week?",
      answer: "Plan for 8-10 hours per week including live sessions and implementation work. The program is designed for working professionals who can dedicate focused time.",
    },
    {
      question: "Do live classes have recordings?",
      answer: "Yes, all live sessions are recorded and available within 24 hours. You'll have lifetime access to all recordings and materials.",
    },
    {
      question: "What if I fall behind?",
      answer: "The program includes catch-up sessions and office hours. You can also review recordings and get support in the community. We're here to help you succeed.",
    },
    {
      question: "Is there a refund policy?",
      answer: "Yes, we offer a satisfaction guarantee. If you complete the first module and feel the program isn't right for you, contact us for a refund discussion.",
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-center mb-12">
            Frequently Asked{" "}
            <span className="gradient-primary bg-clip-text text-transparent">Questions</span>
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="border border-border/50 rounded-xl px-6 glass-card"
                >
                  <AccordionTrigger className="text-left font-medium hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default MasteryFAQ;