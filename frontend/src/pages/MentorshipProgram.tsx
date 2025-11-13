import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import EnrollmentForm from "@/components/EnrollmentForm";
import { 
  GraduationCap,
  Users,
  Clock,
  CreditCard,
  Phone,
  Mail,
  CheckCircle,
  Gift,
  Award,
  Target,
  TrendingUp,
  Shield,
  Brain,
  BarChart3,
  Zap,
  Calendar
} from "lucide-react";

const MentorshipProgram = () => {
  const [enrollmentFormOpen, setEnrollmentFormOpen] = useState(false);

  const whatYoullMaster = [
    {
      category: "Market & Institutional Concepts",
      icon: TrendingUp,
      items: [
        "Smart Money Concepts & Institutional Trading",
        "Supply & Demand Zones",
        "Institutional Order Blocks & Fair Value Gaps",
        "Trend Reversal & Continuation Patterns"
      ]
    },
    {
      category: "Volume & Execution",
      icon: BarChart3,
      items: [
        "Intraday vs Delivery Volume Analysis",
        "Volume Confirmation Techniques",
        "Order Flow Awareness & Execution Discipline"
      ]
    },
    {
      category: "Strategies & Risk Control",
      icon: Shield,
      items: [
        "Advanced Trading Strategies",
        "Option strategies & Strike selection",
        "Risk & Money Management Systems"
      ]
    },
    {
      category: "Mindset & Consistency",
      icon: Brain,
      items: [
        "Trading Psychology & FOMO Management",
        "Fear & Greed Control",
        "Building Trading Discipline & Consistency"
      ]
    }
  ];

  const bonuses = [
    {
      title: "Pro Trend Indicator",
      value: "₹2,999",
      period: "FREE for 1 Month",
      icon: Zap
    },
    {
      title: "Telegram Premium Channel",
      value: "₹10,000",
      period: "FREE for 1 Month",
      icon: Gift
    },
    {
      title: "Course Completion Certificate",
      value: "Verified",
      period: "NISM Certified Analysts",
      icon: Award
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
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="Mentorship Background"
            className="w-full h-full object-cover opacity-25"
          />
        </div>
        <div className="container mx-auto px-3 sm:px-4 relative z-10">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4 md:mb-6">
              <div className="px-3 py-2 sm:px-4 sm:py-2 md:px-6 md:py-3 rounded-full gradient-peacock shadow-peacock">
                <p className="text-xs sm:text-sm font-bold text-primary-foreground tracking-wider flex flex-col sm:flex-row items-center gap-1 sm:gap-2 justify-center">
                  <GraduationCap size={16} className="sm:w-[18px] sm:h-[18px]" />
                  <span>Conducted by a <span className="text-yellow-400">NISM Certified Research Analyst Team</span></span>
                </p>
              </div>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-display font-bold mb-4 md:mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent px-2">
              PAPA TRADING – Mentorship Program
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 md:mb-8 px-2">
              Institutional Trading Logics & Live Market Tools
            </p>
            
            {/* Pricing Card */}
            <Card className="gradient-card border-border p-4 sm:p-6 md:p-8 shadow-card max-w-2xl mx-auto mb-6 md:mb-8">
              <div className="text-center space-y-3 md:space-y-4">
                <div className="flex items-center justify-center gap-3 md:gap-4 flex-wrap">
                  <div className="text-2xl sm:text-3xl font-bold text-muted-foreground line-through">₹49,999</div>
                  <div className="text-3xl sm:text-4xl font-bold text-primary">₹29,999</div>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-green-400">
                  <span className="font-semibold text-sm sm:text-base">Save ₹20,000</span>
                  <span className="text-xs sm:text-sm">• Limited Time Offer</span>
                </div>
                <div className="pt-3 md:pt-4 border-t border-border">
                  <p className="text-xs sm:text-sm text-muted-foreground mb-1 md:mb-2">Total Value: <span className="text-foreground font-semibold">(Check Bonuses) ₹62,998</span></p>
                  <p className="text-base sm:text-lg font-bold text-primary">You Pay: ₹29,999</p>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1">Price (Excluding 18% GST)</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center pt-3 md:pt-4">
                  <Button 
                    onClick={() => setEnrollmentFormOpen(true)}
                    className="w-full gradient-peacock text-primary-foreground font-semibold text-sm sm:text-base md:text-lg px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-6 shadow-peacock hover:scale-105 transition-transform animate-pulse-glow"
                  >
                    Enroll Now
                  </Button>
                </div>
              </div>
            </Card>
          </AnimatedSection>
        </div>
      </section>

      {/* Course Snapshot */}
      <AnimatedSection className="py-12 md:py-20 bg-background-transparent">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-8 md:mb-12 text-center px-2">
              Course <span className="text-primary">Snapshot</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 px-2">
              <Card className="gradient-card border-border p-4 md:p-6 shadow-card text-center">
                <Clock className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 text-primary" />
                <h3 className="text-lg md:text-xl font-display font-bold mb-2">Duration</h3>
                <p className="text-sm md:text-base text-muted-foreground">1 Month (8 Sessions)</p>
              </Card>
              <Card className="gradient-card border-border p-4 md:p-6 shadow-card text-center">
                <Calendar className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 text-primary" />
                <h3 className="text-lg md:text-xl font-display font-bold mb-2">Schedule</h3>
                <p className="text-sm md:text-base text-muted-foreground">Every Friday & Saturday</p>
              </Card>
              <Card className="gradient-card border-border p-4 md:p-6 shadow-card text-center">
                <Users className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 text-primary" />
                <h3 className="text-lg md:text-xl font-display font-bold mb-2">Format</h3>
                <p className="text-sm md:text-base text-muted-foreground">Live Interactive Learning</p>
              </Card>
              <Card className="gradient-card border-border p-4 md:p-6 shadow-card text-center">
                <CreditCard className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 text-primary" />
                <h3 className="text-lg md:text-xl font-display font-bold mb-2">Payment</h3>
                <p className="text-sm md:text-base text-muted-foreground">UPI • Internet Banking • EMI Available</p>
              </Card>
            </div>
            <div className="mt-6 md:mt-8 text-center px-2">
              <p className="text-base md:text-lg text-muted-foreground mb-3 md:mb-4">📱 Contact to Enrol:</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
                <a href="tel:9594160434" className="text-primary hover:underline font-semibold text-sm md:text-base">9594160434</a>
                <span className="text-muted-foreground hidden sm:inline">/</span>
                <a href="tel:9594160436" className="text-primary hover:underline font-semibold text-sm md:text-base">9594160436</a>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* What You'll Master */}
      <AnimatedSection className="py-12 md:py-20 gradient-card-transparent">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-8 md:mb-12 text-center px-2">
              What You'll <span className="text-primary">Master</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 px-2">
              {whatYoullMaster.map((section, index) => (
                <Card key={index} className="gradient-card border-border p-4 md:p-6 shadow-card">
                  <div className="flex items-start space-x-3 md:space-x-4 mb-3 md:mb-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl gradient-peacock flex items-center justify-center flex-shrink-0">
                      <section.icon size={20} className="text-primary-foreground md:w-6 md:h-6" />
                    </div>
                    <h3 className="text-lg md:text-xl lg:text-2xl font-display font-bold">{section.category}</h3>
                  </div>
                  <ul className="space-y-2 md:space-y-3 mt-3 md:mt-4">
                    {section.items.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="text-primary mt-0.5 md:mt-1 flex-shrink-0 w-[18px] h-[18px] md:w-5 md:h-5" />
                        <span className="text-sm md:text-base text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Exclusive Bonuses */}
      <AnimatedSection className="py-12 md:py-20 bg-background-transparent">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-8 md:mb-12 text-center px-2">
              Exclusive <span className="text-primary">Bonuses</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8 px-2">
              {bonuses.map((bonus, index) => (
                <Card key={index} className="gradient-card border-border p-4 md:p-6 shadow-card text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl gradient-peacock flex items-center justify-center mx-auto mb-3 md:mb-4">
                    <bonus.icon className="w-6 h-6 md:w-8 md:h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg md:text-xl font-display font-bold mb-2">{bonus.title}</h3>
                  <p className="text-sm md:text-base text-primary font-semibold mb-1">Worth {bonus.value}</p>
                  <p className="text-xs md:text-sm text-muted-foreground italic">{bonus.period}</p>
                </Card>
              ))}
            </div>
            <Card className="gradient-peacock border-border p-4 md:p-6 shadow-peacock text-center max-w-md mx-auto px-2">
              <p className="text-xs md:text-sm text-muted-foreground mb-2">Total Value: <span className="text-foreground font-bold text-base md:text-lg">(Check Bonuses) ₹62,998</span></p>
              <p className="text-xl md:text-2xl font-bold text-primary-foreground">You Pay: ₹29,999</p>
              <p className="text-xs md:text-sm text-muted-foreground mt-1">Price (Excluding 18% GST)</p>
            </Card>
          </div>
        </div>
      </AnimatedSection>

      {/* Who Should Join */}
      <AnimatedSection className="py-12 md:py-20 gradient-card-transparent">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="max-w-4xl mx-auto px-2">
            <Target className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 md:mb-6 text-primary" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 md:mb-6 text-center">
              Who Should <span className="text-primary">Join</span>?
            </h2>
            <Card className="gradient-card border-border p-4 md:p-6 shadow-card">
              <ul className="space-y-3 md:space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="text-primary mt-0.5 md:mt-1 flex-shrink-0 w-5 h-5 md:w-6 md:h-6" />
                  <span className="text-sm md:text-base text-muted-foreground">Active traders seeking institutional workflows</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="text-primary mt-0.5 md:mt-1 flex-shrink-0 w-5 h-5 md:w-6 md:h-6" />
                  <span className="text-sm md:text-base text-muted-foreground">Aspiring professionals wanting practical execution rules</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="text-primary mt-0.5 md:mt-1 flex-shrink-0 w-5 h-5 md:w-6 md:h-6" />
                  <span className="text-sm md:text-base text-muted-foreground">Serious learners aiming for measurable improvement in performance</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </AnimatedSection>

      {/* Enroll / Contact */}
      <AnimatedSection className="py-12 md:py-20 bg-background-transparent">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="max-w-4xl mx-auto px-2">
            <Card className="gradient-card border-border p-4 sm:p-6 md:p-8 shadow-card">
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 md:mb-6 text-center">Enroll / Contact</h2>
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-start space-x-3">
                    <Phone className="text-primary mt-1 flex-shrink-0 w-5 h-5 md:w-6 md:h-6" />
                    <div className="flex flex-col sm:flex-row gap-1 sm:gap-0">
                      <a href="tel:9594160434" className="text-sm md:text-base text-primary hover:underline font-semibold">9594160434</a>
                      <span className="text-muted-foreground hidden sm:inline"> / </span>
                      <a href="tel:9594160436" className="text-sm md:text-base text-primary hover:underline font-semibold">9594160436</a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Mail className="text-primary mt-1 flex-shrink-0 w-5 h-5 md:w-6 md:h-6" />
                    <a href="mailto:support@papatrading.in" className="text-sm md:text-base text-primary hover:underline break-all">
                      support@papatrading.in
                    </a>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold text-sm md:text-base mb-2">Payment options:</p>
                  <p className="text-xs md:text-sm text-muted-foreground">UPI • Internet Banking • EMI available</p>
                </div>
              </div>
              <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <Button 
                  onClick={() => setEnrollmentFormOpen(true)}
                  className="w-full gradient-peacock text-primary-foreground font-semibold text-sm sm:text-base md:text-lg px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-6 shadow-peacock hover:scale-105 transition-transform animate-pulse-glow"
                >
                  Enroll Now
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </AnimatedSection>

      <EnrollmentForm 
        open={enrollmentFormOpen} 
        onOpenChange={setEnrollmentFormOpen}
        defaultService="mentorship-program"
      />
    </div>
  );
};

export default MentorshipProgram;

