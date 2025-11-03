import AnimatedSection from "@/components/AnimatedSection";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Target, 
  TrendingUp, 
  AlertCircle, 
  BarChart3, 
  Clock, 
  Users,
  CheckCircle,
  Zap
} from "lucide-react";

const ScannerSuite = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Breakout Opportunities",
      description: "Stocks breaking key resistance levels with strong volume"
    },
    {
      icon: AlertCircle,
      title: "Reversal Signals",
      description: "Early detection of trend reversals at support/resistance zones"
    },
    {
      icon: BarChart3,
      title: "High Momentum Plays",
      description: "Stocks showing unusual volume and price movement"
    },
    {
      icon: Target,
      title: "Support & Resistance Zones",
      description: "Critical price levels for entry and exit planning"
    },
    {
      icon: Clock,
      title: "Real-Time Alerts",
      description: "Never miss a trading opportunity with instant notifications"
    },
    {
      icon: Zap,
      title: "Pre-Market Insights",
      description: "Prepare your watchlist before the market opens"
    }
  ];

  const benefits = [
    "Saves hours of manual chart analysis",
    "Reduces emotional trading decisions",
    "Increases probability of successful trades",
    "Works for both intraday and swing trading",
    "Suitable for beginners and experienced traders"
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
              Papa Trading Scanner Suite
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Your Complete Stock Discovery System for Intraday & Swing Trading
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="gradient-gold text-primary-foreground font-semibold text-lg px-8 py-6 shadow-gold hover:scale-105 transition-transform">
                Try Scanner Suite Now
              </Button>
              <Button variant="outline" className="text-lg px-8 py-6 border-2 border-primary/50 hover:bg-primary/10">
                Enquire Now
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* What Our Scanners Help You Identify */}
      <AnimatedSection className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                What Our <span className="text-primary">Scanners</span> Help You Identify
              </h2>
              <p className="text-xl text-muted-foreground">
                Powerful tools to spot high-probability trading setups
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <Card className="gradient-card border-border p-6 shadow-card hover:shadow-gold transition-all h-full">
                    <div className="space-y-4">
                      <div className="w-14 h-14 rounded-xl gradient-gold flex items-center justify-center">
                        <feature.icon size={28} className="text-primary-foreground" />
                      </div>
                      <h3 className="text-xl font-display font-bold">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Why Our Scanners Give You an Edge */}
      <AnimatedSection className="py-20 gradient-card">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                  Why Our Scanners Give You an <span className="text-primary">Edge</span>
                </h2>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="text-primary mt-1 flex-shrink-0" size={24} />
                      <p className="text-lg text-muted-foreground">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              <Card className="gradient-card border-border p-8 shadow-card">
                <div className="space-y-6">
                  <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center">
                    <BarChart3 size={32} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-display font-bold">Proven Results</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our scanners are built on proven technical analysis principles and tested 
                    by professional traders. They filter through thousands of stocks to bring 
                    you only the most promising opportunities.
                  </p>
                  <div className="pt-4">
                    <div className="text-4xl font-bold text-primary mb-2">95%</div>
                    <p className="text-muted-foreground">Accuracy in identifying key setups</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Who Benefits Most */}
      <AnimatedSection className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Who <span className="text-primary">Benefits</span> Most?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="gradient-card border-border p-8 shadow-card text-center">
                <div className="w-16 h-16 rounded-xl gradient-gold flex items-center justify-center mx-auto mb-6">
                  <Users size={32} className="text-primary-foreground" />
                </div>
                <h3 className="text-xl font-display font-bold mb-4">Beginners</h3>
                <p className="text-muted-foreground">
                  Start with pre-filtered stocks and learn to identify patterns without the overwhelm
                </p>
              </Card>

              <Card className="gradient-card border-border p-8 shadow-card text-center">
                <div className="w-16 h-16 rounded-xl gradient-gold flex items-center justify-center mx-auto mb-6">
                  <Clock size={32} className="text-primary-foreground" />
                </div>
                <h3 className="text-xl font-display font-bold mb-4">Busy Professionals</h3>
                <p className="text-muted-foreground">
                  Get actionable insights in minutes instead of hours of chart analysis
                </p>
              </Card>

              <Card className="gradient-card border-border p-8 shadow-card text-center">
                <div className="w-16 h-16 rounded-xl gradient-gold flex items-center justify-center mx-auto mb-6">
                  <TrendingUp size={32} className="text-primary-foreground" />
                </div>
                <h3 className="text-xl font-display font-bold mb-4">Experienced Traders</h3>
                <p className="text-muted-foreground">
                  Validate your analysis and discover opportunities you might have missed
                </p>
              </Card>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Final CTA */}
      <AnimatedSection className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Ready to <span className="text-primary">Transform</span> Your Trading?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join hundreds of traders who trust Papa Trading Scanner Suite
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="gradient-gold text-primary-foreground font-semibold text-lg px-8 py-6 shadow-gold hover:scale-105 transition-transform">
                Try Scanner Suite Now
              </Button>
              <Button variant="outline" className="text-lg px-8 py-6 border-2 border-primary/50 hover:bg-primary/10">
                Enquire Now
              </Button>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default ScannerSuite;
