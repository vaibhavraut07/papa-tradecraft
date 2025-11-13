import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import { submitLead } from "@/lib/api";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [phoneError, setPhoneError] = useState("");
  const { toast } = useToast();

  // Validate Indian phone number (10 digits, starting with 6-9)
  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^[6-9]\d{9}$/;
    return phoneRegex.test(phone.replace(/\D/g, ''));
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow numbers
    const numbersOnly = value.replace(/\D/g, '');
    
    // Limit to 10 digits
    const limitedValue = numbersOnly.slice(0, 10);
    
    setFormData({ ...formData, phone: limitedValue });
    
    // Validate phone number
    if (limitedValue.length > 0 && limitedValue.length < 10) {
      setPhoneError("Phone number must be 10 digits");
    } else if (limitedValue.length === 10 && !validatePhone(limitedValue)) {
      setPhoneError("Phone number must start with 6, 7, 8, or 9");
    } else {
      setPhoneError("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate phone number before submission
    if (!validatePhone(formData.phone)) {
      setPhoneError("Please enter a valid 10-digit mobile number");
      toast({
        title: "Validation Error",
        description: "Please enter a valid 10-digit mobile number starting with 6, 7, 8, or 9",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const result = await submitLead({
        name: formData.name,
        phone: formData.phone,
        city: formData.city,
        email: formData.email,
        message: formData.message,
        source: 'contact_page',
        timestamp: new Date().toISOString()
      });

      toast({
        title: "Success!",
        description: "Thanks! Our team will reach out soon.",
      });
      
      setFormData({ name: "", phone: "", city: "", email: "", message: "" });
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to submit form. Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-12 md:py-20 gradient-hero relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-background/85 via-background/80 to-background/85 z-10" />
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978"
            alt="Contact Background"
            className="w-full h-full object-cover opacity-25"
          />
        </div>
        <div className="container mx-auto px-3 sm:px-4 relative z-10">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-4 md:mb-6 bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent px-2">
              Let's Get in Touch
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground px-2">
              Have questions? We're here to help you succeed in your trading journey
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Info & Form */}
      <AnimatedSection className="py-12 md:py-20 bg-background-transparent">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 px-2">
              {/* Contact Information */}
              <div className="space-y-6 md:space-y-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold mb-6 md:mb-8">Contact Information</h2>
                  
                  <div className="space-y-4 md:space-y-6">
                    <Card className="gradient-card border-border p-4 md:p-6 shadow-card">
                      <div className="flex items-start space-x-3 md:space-x-4">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg gradient-gold flex items-center justify-center flex-shrink-0">
                          <Phone className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2 text-sm md:text-base">Phone</h3>
                          <p className="text-xs md:text-sm text-muted-foreground">9594160434</p>
                          <p className="text-xs md:text-sm text-muted-foreground">9594160436</p>
                        </div>
                      </div>
                    </Card>

                    <Card className="gradient-card border-border p-4 md:p-6 shadow-card">
                      <div className="flex items-start space-x-3 md:space-x-4">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg gradient-gold flex items-center justify-center flex-shrink-0">
                          <Mail className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2 text-sm md:text-base">Email</h3>
                          <a href="mailto:support@papatrading.in" className="text-xs md:text-sm text-primary hover:underline break-all">
                            support@papatrading.in
                          </a>
                        </div>
                      </div>
                    </Card>

                    <Card className="gradient-card border-border p-4 md:p-6 shadow-card">
                      <div className="flex items-start space-x-3 md:space-x-4">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg gradient-gold flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2 text-sm md:text-base">Location</h3>
                          <p className="text-xs md:text-sm text-muted-foreground">Service across world</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>

                {/* Social Media */}
                <div>
                  <h3 className="text-lg md:text-xl font-display font-bold mb-3 md:mb-4">Follow Us</h3>
                  <div className="flex space-x-3 md:space-x-4">
                    <a 
                      href="https://www.facebook.com/profile.php?id=61583531426141" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 md:w-12 md:h-12 rounded-lg gradient-card border border-border flex items-center justify-center hover:shadow-peacock transition-all"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </a>
                    <a 
                      href="https://www.instagram.com/papa4trading/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 md:w-12 md:h-12 rounded-lg gradient-card border border-border flex items-center justify-center hover:shadow-peacock transition-all"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <Card className="gradient-card border-border p-4 sm:p-6 md:p-8 shadow-card">
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 md:mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="contact-name">Name *</Label>
                    <Input
                      id="contact-name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-background/50 border-border"
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-phone">Phone Number *</Label>
                    <Input
                      id="contact-phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handlePhoneChange}
                      className={`bg-background/50 border-border ${phoneError ? 'border-red-500 focus:border-red-500' : ''}`}
                      placeholder="10-digit mobile number (e.g., 9876543210)"
                      maxLength={10}
                      pattern="[6-9][0-9]{9}"
                    />
                    {phoneError && (
                      <p className="text-xs text-red-500 mt-1">{phoneError}</p>
                    )}
                    {!phoneError && formData.phone.length > 0 && formData.phone.length < 10 && (
                      <p className="text-xs text-muted-foreground mt-1">{formData.phone.length}/10 digits</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-city">City *</Label>
                    <Input
                      id="contact-city"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="bg-background/50 border-border"
                      placeholder="Your city"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-email">Email *</Label>
                    <Input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-background/50 border-border"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-message">Message</Label>
                    <Textarea
                      id="contact-message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-background/50 border-border min-h-[100px]"
                      placeholder="Any questions or comments..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full gradient-gold text-primary-foreground font-semibold shadow-gold hover:scale-105 transition-transform text-sm sm:text-base md:text-lg py-3 md:py-4 lg:py-6 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </AnimatedSection>

    </div>
  );
};

export default Contact;
