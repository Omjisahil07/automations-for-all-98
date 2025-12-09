import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Refund = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-8">
              Refund <span className="gradient-primary bg-clip-text text-transparent">Policy</span>
            </h1>
            
            <div className="prose prose-invert prose-lg max-w-none space-y-8">
              <p className="text-muted-foreground">
                Last updated: December 2024
              </p>

              <section>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Our Commitment</h2>
                <p className="text-muted-foreground">
                  At Automation School, we are committed to providing high-quality education and ensuring your satisfaction. We understand that circumstances may change, and we've designed our refund policy to be fair and transparent.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Refund Eligibility</h2>
                <div className="space-y-4">
                  <div className="p-4 rounded-xl glass-card border border-border/50">
                    <h3 className="font-bold text-foreground mb-2">Automation Bootcamp (2-Day Workshop)</h3>
                    <p className="text-muted-foreground text-sm">
                      Full refund available if requested at least 48 hours before the workshop starts. No refunds after the workshop begins.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl glass-card border border-border/50">
                    <h3 className="font-bold text-foreground mb-2">Automation Accelerator (4-Week Program)</h3>
                    <p className="text-muted-foreground text-sm">
                      Full refund available within 7 days of enrollment if less than 25% of content has been accessed. Partial refund (50%) available within 14 days.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl glass-card border border-border/50">
                    <h3 className="font-bold text-foreground mb-2">Agentic AI Mastery (12-Week Program)</h3>
                    <p className="text-muted-foreground text-sm">
                      Satisfaction guarantee: Complete Module 1 and if you're not satisfied, contact us for a refund discussion. We evaluate each request on a case-by-case basis.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl glass-card border border-border/50">
                    <h3 className="font-bold text-foreground mb-2">Launchpad (Free Masterclass)</h3>
                    <p className="text-muted-foreground text-sm">
                      This is a free offering. No refunds applicable.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">How to Request a Refund</h2>
                <p className="text-muted-foreground">
                  To request a refund, please follow these steps:
                </p>
                <ol className="list-decimal list-inside text-muted-foreground mt-4 space-y-2">
                  <li>Email us at support@automationschool.in with the subject "Refund Request"</li>
                  <li>Include your full name and order/enrollment ID</li>
                  <li>Provide the reason for your refund request</li>
                  <li>Our team will review your request within 3-5 business days</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Processing Time</h2>
                <p className="text-muted-foreground">
                  Once approved, refunds are processed within 7-10 business days. The amount will be credited back to your original payment method. Please note that bank processing times may vary.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Non-Refundable Items</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  <li>EMI processing fees (charged by payment provider)</li>
                  <li>Courses where more than 50% of content has been accessed</li>
                  <li>Special promotional offers marked as "non-refundable"</li>
                  <li>Certification fees after certificate has been issued</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have any questions about our refund policy, please reach out to us:
                </p>
                <ul className="text-muted-foreground mt-4 space-y-2">
                  <li>Email: support@automationschool.in</li>
                  <li>Phone: +91 8873262374</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default Refund;