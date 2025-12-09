import { motion } from "framer-motion";
import { Award, Star } from "lucide-react";

interface CertificateMockupProps {
  title: string;
  certName: string;
  description: string;
}

const CertificateMockup = ({ title, certName, description }: CertificateMockupProps) => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <Award className="w-6 h-6 text-accent" />
              <span className="text-accent font-medium">Certification</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
              {title}
            </h2>
          </div>

          <div className="relative">
            {/* Certificate Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-primary/10 via-background to-accent/10 border-2 border-primary/30 shadow-luxury"
            >
              {/* Decorative Stars */}
              <div className="absolute top-4 left-4">
                <Star className="w-6 h-6 text-primary/40" />
              </div>
              <div className="absolute top-4 right-4">
                <Star className="w-6 h-6 text-primary/40" />
              </div>
              <div className="absolute bottom-4 left-4">
                <Star className="w-6 h-6 text-primary/40" />
              </div>
              <div className="absolute bottom-4 right-4">
                <Star className="w-6 h-6 text-primary/40" />
              </div>

              <div className="text-center space-y-6">
                {/* Logo Placeholder */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mx-auto">
                  <Award className="w-8 h-8 text-primary" />
                </div>

                <div className="space-y-2">
                  <p className="text-sm uppercase tracking-widest text-muted-foreground">Certificate of Completion</p>
                  <h3 className="text-2xl md:text-3xl font-heading font-black gradient-primary bg-clip-text text-transparent">
                    {certName}
                  </h3>
                </div>

                <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

                <div className="space-y-1">
                  <p className="text-lg text-foreground">This is to certify that</p>
                  <p className="text-2xl font-heading font-bold text-primary">[Your Name]</p>
                  <p className="text-muted-foreground">has successfully completed the program</p>
                </div>

                <div className="pt-4">
                  <p className="text-sm text-muted-foreground">Issued by</p>
                  <p className="font-heading font-bold text-foreground">Automation School™</p>
                </div>
              </div>
            </motion.div>

            {/* Glow Effect */}
            <div className="absolute inset-0 -z-10 blur-3xl opacity-30">
              <div className="w-full h-full bg-gradient-to-br from-primary via-accent to-primary rounded-3xl" />
            </div>
          </div>

          <p className="text-center text-muted-foreground mt-8 max-w-2xl mx-auto">
            {description}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CertificateMockup;
