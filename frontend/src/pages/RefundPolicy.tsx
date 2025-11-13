import AnimatedSection from "@/components/AnimatedSection";
import { Card } from "@/components/ui/card";
import { FileX, XCircle, CreditCard, Gift, AlertTriangle, Mail, Phone } from "lucide-react";

const RefundPolicy = () => {
  const sections = [
    {
      title: "Overview",
      icon: FileX,
      content: [
        "By subscribing to any product, service, or plan offered by Papa4 Empowering Traders and Financial Services LLP (\"Papa Trading\", \"we\", \"us\" or \"our\"), you acknowledge and agree that all subscription payments are non-refundable.",
        "This No Refund Policy applies to all subscription types, billing cycles, trials, promotions, and any other paid services provided by Papa Trading."
      ]
    },
    {
      title: "What this means",
      icon: XCircle,
      content: [
        "All subscription fees paid to Papa Trading are final and will not be refunded under any circumstances.",
        "No refunds will be issued for partial use, unused time, or cancellation made after a charge has been processed.",
        "This policy applies regardless of how the subscription was purchased (website, app, third-party reseller, etc.)."
      ]
    },
    {
      title: "Cancellations and future billing",
      icon: CreditCard,
      content: [
        "You may cancel your subscription at any time. Cancelling prevents future recurring charges, but does not entitle you to a refund of any fees already paid.",
        "After cancellation, you will retain access to the paid features until the end of the current paid billing period (unless otherwise stated at purchase)."
      ]
    },
    {
      title: "Trials, Promotions and Discounts",
      icon: Gift,
      content: [
        "Free trials, promotional pricing, discounts, and introductory offers are subject to this No Refund Policy unless explicitly stated otherwise in writing at the time of the offer.",
        "If a promotional or trial period converts to a paid subscription automatically, that paid amount is non-refundable."
      ]
    },
    {
      title: "Chargebacks and disputed payments",
      icon: AlertTriangle,
      content: [
        "If you dispute a charge with your bank or card issuer and the dispute is resolved in your favor, Papa Trading may, at its discretion, terminate or suspend your access.",
        "Repeated or unjustified chargebacks may lead to account suspension and collection actions."
      ]
    },
    {
      title: "Exceptions",
      icon: FileX,
      content: [
        "We do not offer refunds for subscriptions. Any exception (if ever applicable) will be at Papa Trading's sole discretion and must be documented in writing by an authorized representative of Papa Trading."
      ]
    },
    {
      title: "Disclaimer & Additional Notices",
      icon: FileX,
      content: [
        "Our no-refund stance is also reflected in the Disclaimer and other legal notices on our website.",
        "By purchasing, you confirm that you have read, understood, and agree to the terms of this No Refund Policy and related disclaimers posted on our site."
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
            alt="Refund Policy Background"
            className="w-full h-full object-cover opacity-25"
          />
        </div>
        <div className="container mx-auto px-3 sm:px-4 relative z-10">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <div className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full gradient-peacock flex items-center justify-center mx-auto mb-4 md:mb-6">
              <FileX className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-primary-foreground" />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-display font-bold mb-4 md:mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent px-2">
              Refund Policy
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground px-2">
              <span className="font-bold text-foreground">No Refund Policy</span> - Please read carefully before subscribing.
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

      {/* Acknowledgement Section */}
      <AnimatedSection className="py-12 md:py-20 gradient-card-transparent">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="max-w-4xl mx-auto px-2">
            <Card className="gradient-card border-2 border-primary p-6 md:p-8 shadow-peacock">
              <div className="text-center mb-6">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold mb-4">Acknowledgement</h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  By completing a purchase or maintaining an active subscription, you acknowledge that you have read and agreed to this No Refund Policy and that you understand Papa Trading will not issue refunds for subscription payments.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Section */}
      <AnimatedSection className="py-12 md:py-20 bg-background-transparent">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="max-w-2xl mx-auto text-center px-2">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-3 md:mb-4">Questions or concerns</h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8">
              If you have questions about this policy or your subscription, please contact our support team:
            </p>
            <div className="space-y-4 md:space-y-6">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
                <a 
                  href="mailto:support@papatrading.in" 
                  className="flex items-center space-x-2 gradient-peacock text-primary-foreground font-semibold text-sm sm:text-base px-4 py-3 sm:px-6 sm:py-4 rounded-lg shadow-peacock hover:scale-105 transition-transform"
                >
                  <Mail className="w-5 h-5" />
                  <span>support@papatrading.in</span>
                </a>
                <a 
                  href="tel:+919594160434" 
                  className="flex items-center space-x-2 gradient-peacock text-primary-foreground font-semibold text-sm sm:text-base px-4 py-3 sm:px-6 sm:py-4 rounded-lg shadow-peacock hover:scale-105 transition-transform"
                >
                  <Phone className="w-5 h-5" />
                  <span>+91-9594160434</span>
                </a>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">
                (Provide your registered email and subscription details to help us assist you faster.)
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default RefundPolicy;

