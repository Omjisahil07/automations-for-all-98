import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-8">
              Privacy <span className="gradient-primary bg-clip-text text-transparent">Policy</span>
            </h1>
            
            <div className="prose prose-invert prose-lg max-w-none space-y-8">
              <p className="text-muted-foreground">
                Last updated: December 2024
              </p>

              <section>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">1. Information We Collect</h2>
                <p className="text-muted-foreground">
                  We collect information you provide directly to us, including your name, email address, phone number, and payment information when you register for our courses or contact us.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">2. How We Use Your Information</h2>
                <p className="text-muted-foreground">
                  We use the information we collect to provide, maintain, and improve our services, process transactions, send you technical notices and support messages, and respond to your comments and questions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">3. Information Sharing</h2>
                <p className="text-muted-foreground">
                  We do not share your personal information with third parties except as described in this policy. We may share your information with service providers who assist us in operating our website and conducting our business.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">4. Data Security</h2>
                <p className="text-muted-foreground">
                  We implement appropriate technical and organizational measures to protect the security of your personal information. However, please note that no method of transmission over the Internet is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">5. Your Rights</h2>
                <p className="text-muted-foreground">
                  You have the right to access, update, or delete your personal information at any time. You can do this by contacting us at support@automationschool.in.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold text-foreground mb-4">6. Contact Us</h2>
                <p className="text-muted-foreground">
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <ul className="text-muted-foreground mt-4 space-y-2">
                  <li>Email: support@automationschool.in</li>
                  <li>Phone: +91 8873262374</li>
                  <li>Address: Delhi, India</li>
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

export default Privacy;