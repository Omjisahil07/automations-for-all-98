import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-8">
              Terms & <span className="gradient-primary bg-clip-text text-transparent">Conditions</span>
            </h1>
            
            <div className="prose prose-invert prose-lg max-w-none space-y-8">
              <p className="text-muted-foreground">
                Last updated: December 2024
              </p>

              <section>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground">
                  By accessing and using Automation School's website and services, you agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">2. Services</h2>
                <p className="text-muted-foreground">
                  Automation School provides online education services including courses, workshops, and training programs related to AI automation. Access to these services requires registration and may require payment.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">3. User Accounts</h2>
                <p className="text-muted-foreground">
                  You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">4. Intellectual Property</h2>
                <p className="text-muted-foreground">
                  All content provided through our services, including videos, text, graphics, and other materials, is owned by Automation School and protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our permission.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">5. Payment Terms</h2>
                <p className="text-muted-foreground">
                  Course fees are due at the time of enrollment. We accept payments through Razorpay and other approved payment methods. All prices are listed in Indian Rupees (INR) unless otherwise stated.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">6. Limitation of Liability</h2>
                <p className="text-muted-foreground">
                  Automation School shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services. Our total liability shall not exceed the amount paid by you for the specific course or service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">7. Contact</h2>
                <p className="text-muted-foreground">
                  For any questions regarding these Terms and Conditions, please contact us at support@automationschool.in.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
};

export default Terms;