import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { submitLead } from "@/lib/api";

interface EnrollmentFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultService?: "mentorship-program" | "indicator" | "scanner";
}

const EnrollmentForm = ({ open, onOpenChange, defaultService }: EnrollmentFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    email: "",
    service: defaultService || "",
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

  // Update service when defaultService changes
  useEffect(() => {
    if (defaultService) {
      setFormData((prev) => ({ ...prev, service: defaultService }));
    }
  }, [defaultService]);

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
        service: formData.service,
        message: formData.message,
        source: 'enrollment_form',
        timestamp: new Date().toISOString()
      });

      toast({
        title: "Success!",
        description: "Thanks! Our team will reach out soon.",
      });
      
      setFormData({ name: "", phone: "", city: "", email: "", service: defaultService || "", message: "" });
      onOpenChange(false);
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
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[500px] max-h-[90vh] rounded-2xl bg-gradient-to-br from-card to-card/95 border-border shadow-2xl overflow-hidden flex flex-col p-0">
        {/* Header Section */}
        <DialogHeader className="px-6 pt-6 pb-4 border-b border-border/50">
          <DialogTitle className="text-2xl font-display font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent text-left">
            Get Started
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground text-left mt-2">
            Fill in your details and we'll get back to you soon.
          </DialogDescription>
        </DialogHeader>

        {/* Scrollable Form Content */}
        <div className="overflow-y-auto flex-1 px-6 py-4 custom-scrollbar">
          <form onSubmit={handleSubmit} className="space-y-4" id="enrollment-form">
            <div className="space-y-2">
              <Label htmlFor="enroll-name" className="text-sm font-medium">Name *</Label>
              <Input
                id="enroll-name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-background/50 border-border rounded-lg h-10"
                placeholder="Your full name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="enroll-phone" className="text-sm font-medium">Phone Number *</Label>
              <Input
                id="enroll-phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handlePhoneChange}
                className={`bg-background/50 border-border rounded-lg h-10 ${phoneError ? 'border-red-500 focus:border-red-500' : ''}`}
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
              <Label htmlFor="enroll-city" className="text-sm font-medium">City *</Label>
              <Input
                id="enroll-city"
                required
                value={formData.city}
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                className="bg-background/50 border-border rounded-lg h-10"
                placeholder="Your city"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="enroll-email" className="text-sm font-medium">Email *</Label>
              <Input
                id="enroll-email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-background/50 border-border rounded-lg h-10"
                placeholder="your@email.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="enroll-service" className="text-sm font-medium">Service *</Label>
              <Select
                value={formData.service}
                onValueChange={(value) => setFormData({ ...formData, service: value })}
                required
              >
                <SelectTrigger className="bg-background/50 border-border rounded-lg h-10">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent className="rounded-lg">
                  <SelectItem value="mentorship-program">Mentorship Program</SelectItem>
                  <SelectItem value="indicator">Pro Trend Indicator</SelectItem>
                  <SelectItem value="scanner">Scanner Suite</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="enroll-message" className="text-sm font-medium">Message</Label>
              <Textarea
                id="enroll-message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="bg-background/50 border-border rounded-lg min-h-[100px] resize-none"
                placeholder="Any questions or comments..."
              />
            </div>
          </form>
        </div>

        {/* Footer with Submit Button */}
        <div className="px-6 pb-6 pt-4 border-t border-border/50">
          <Button
            type="submit"
            form="enrollment-form"
            disabled={isSubmitting}
            className="w-full gradient-gold text-primary-foreground font-semibold shadow-gold hover:scale-105 transition-transform h-12 rounded-lg text-base disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EnrollmentForm;

