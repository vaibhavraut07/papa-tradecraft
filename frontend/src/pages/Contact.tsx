import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Instagram, MessageCircle, Youtube } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    email: "",
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      
      toast({
        title: "Success!",
        description: "Thanks! Our team will reach out soon.",
      });
      
      setFormData({ name: "", phone: "", city: "", email: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
              Let's Get in Touch
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Have questions? We're here to help you succeed in your trading journey
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Info & Form */}
      <AnimatedSection className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-display font-bold mb-8">Contact Information</h2>
                  
                  <div className="space-y-6">
                    <Card className="gradient-card border-border p-6 shadow-card">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-lg gradient-gold flex items-center justify-center flex-shrink-0">
                          <Phone size={24} className="text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">Phone</h3>
                          <p className="text-muted-foreground">9594160434</p>
                          <p className="text-muted-foreground">9594160436</p>
                        </div>
                      </div>
                    </Card>

                    <Card className="gradient-card border-border p-6 shadow-card">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-lg gradient-gold flex items-center justify-center flex-shrink-0">
                          <Mail size={24} className="text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">Email</h3>
                          <a href="mailto:help@papatrading.in" className="text-primary hover:underline">
                            help@papatrading.in
                          </a>
                        </div>
                      </div>
                    </Card>

                    <Card className="gradient-card border-border p-6 shadow-card">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-lg gradient-gold flex items-center justify-center flex-shrink-0">
                          <MapPin size={24} className="text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-2">Location</h3>
                          <p className="text-muted-foreground">Serving traders nationwide across India</p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>

                {/* Social Media */}
                <div>
                  <h3 className="text-xl font-display font-bold mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="w-12 h-12 rounded-lg gradient-card border border-border flex items-center justify-center hover:shadow-gold transition-all">
                      <MessageCircle size={24} className="text-primary" />
                    </a>
                    <a href="#" className="w-12 h-12 rounded-lg gradient-card border border-border flex items-center justify-center hover:shadow-gold transition-all">
                      <Instagram size={24} className="text-primary" />
                    </a>
                    <a href="#" className="w-12 h-12 rounded-lg gradient-card border border-border flex items-center justify-center hover:shadow-gold transition-all">
                      <Youtube size={24} className="text-primary" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <Card className="gradient-card border-border p-8 shadow-card">
                <h2 className="text-3xl font-display font-bold mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
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
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-background/50 border-border"
                      placeholder="10-digit mobile number"
                    />
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

                  <Button
                    type="submit"
                    className="w-full gradient-gold text-primary-foreground font-semibold shadow-gold hover:scale-105 transition-transform"
                  >
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Map Section */}
      <AnimatedSection className="py-20 gradient-card">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-card border border-border bg-background/20">
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                <div className="text-center space-y-2">
                  <MapPin size={48} className="mx-auto text-primary" />
                  <p className="text-lg">Map Location Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Contact;
