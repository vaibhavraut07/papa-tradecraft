import AnimatedSection from "@/components/AnimatedSection";
import { Card } from "@/components/ui/card";
import { Shield, Lock, Eye, FileText, Mail } from "lucide-react";

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "Data Collection",
      icon: FileText,
      content: [
        "We collect personal information during Mentorship Program registration.",
        "Data helps us identify and serve users based on their training needs.",
        "On successful registration, users can access all training modules."
      ]
    },
    {
      title: "Disclosure of Information",
      icon: Eye,
      content: [
        "Your personal data is kept confidential.",
        "We do not sell or rent data to anyone.",
        "Information is shared only with your consent and only with authorized entities."
      ]
    },
    {
      title: "Security",
      icon: Lock,
      content: [
        "Website accounts are password-protected to ensure data security."
      ]
    },
    {
      title: "Amendment Rights",
      icon: FileText,
      content: [
        "We may update this policy occasionally.",
        "Major changes will be announced on the site."
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-12 md:py-20 gradient-hero relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-background/85 via-background/80 to-background/85 z-10" />
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
            alt="Privacy Background"
            className="w-full h-full object-cover opacity-25"
          />
        </div>
        <div className="container mx-auto px-3 sm:px-4 relative z-10">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full gradient-peacock flex items-center justify-center mx-auto mb-4 md:mb-6">
              <Shield className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-primary-foreground" />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-display font-bold mb-4 md:mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent px-2">
              Privacy Policy
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground px-2">
              At <span className="font-bold text-foreground">PAPA4 Empowering Traders & Financial Services LLP</span>, we value your privacy and follow best industry practices.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Policy Sections */}
      <AnimatedSection className="py-12 md:py-20 bg-background-transparent">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="max-w-4xl mx-auto space-y-4 md:space-y-6 lg:space-y-8 px-2">
            {sections.map((section, index) => (
              <Card key={index} className="gradient-card border-border p-4 sm:p-6 md:p-8 shadow-card">
                <div className="flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-3 md:space-x-4 mb-3 md:mb-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl gradient-peacock flex items-center justify-center flex-shrink-0">
                    <section.icon className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
                  </div>
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold">{section.title}</h2>
                </div>
                <ul className="space-y-2 md:space-y-3 mt-3 md:mt-4 sm:ml-0 md:ml-12 lg:ml-16">
                  {section.content.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <span className="text-primary mt-1">•</span>
                      <span className="text-sm md:text-base text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Feedback Section */}
      <AnimatedSection className="py-12 md:py-20 gradient-card-transparent">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="max-w-2xl mx-auto text-center px-2">
            <Mail className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 text-primary" />
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-3 md:mb-4">Feedback</h2>
            <p className="text-base md:text-lg text-muted-foreground mb-4 md:mb-6">
              We welcome your feedback and suggestions.
            </p>
            <a 
              href="mailto:support@papatrading.in" 
              className="inline-block gradient-peacock text-primary-foreground font-semibold text-sm sm:text-base px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-4 rounded-lg shadow-peacock hover:scale-105 transition-transform"
            >
              Contact Us
            </a>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default PrivacyPolicy;

