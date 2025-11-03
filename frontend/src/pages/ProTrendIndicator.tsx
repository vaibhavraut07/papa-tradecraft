import AnimatedSection from "@/components/AnimatedSection";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  TrendingUp,
  Target,
  BookOpen,
  Video,
  MessageSquare,
  CheckCircle,
  Zap,
  LineChart
} from "lucide-react";

const ProTrendIndicator = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Crystal-Clear Trend Detection",
      description: "Identify uptrends and downtrends with pinpoint accuracy"
    },
    {
      icon: Target,
      title: "Precise Entry & Exit Signals",
      description: "Know exactly when to buy and sell with confidence"
    },
    {
      icon: Zap,
      title: "Multi-Timeframe Analysis",
      description: "Works seamlessly across all timeframes from 1-minute to daily charts"
    },
    {
      icon: LineChart,
      title: "Reduced Noise & False Signals",
      description: "Advanced filtering eliminates market noise for clearer insights"
    }
  ];

  const support = [
    {
      icon: BookOpen,
      title: "Comprehensive PDF Guide",
      description: "Step-by-step installation and usage instructions"
    },
    {
      icon: Video,
      title: "Video Tutorial",
      description: "Visual walkthrough of setup and best practices"
    },
    {
      icon: MessageSquare,
      title: "Lifetime Support",
      description: "Get help whenever you need it via WhatsApp/Telegram"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
              Pro Trend Indicator
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Trade Every Trend with Confidence – Built by Experts, Made for You
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="gradient-gold text-primary-foreground font-semibold text-lg px-8 py-6 shadow-gold hover:scale-105 transition-transform">
                Buy Now
              </Button>
              <Button variant="outline" className="text-lg px-8 py-6 border-2 border-primary/50 hover:bg-primary/10">
                Get Free Demo
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* What Makes It Special */}
      <AnimatedSection className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                What Makes It <span className="text-primary">Special</span>?
              </h2>
              <p className="text-xl text-muted-foreground">
                Professional-grade indicator designed for serious traders
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <Card className="gradient-card border-border p-8 shadow-card hover:shadow-gold transition-all h-full">
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

      {/* How It Works */}
      <AnimatedSection className="py-20 gradient-card">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                How It <span className="text-primary">Works</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="gradient-card border-border p-8 shadow-card text-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-primary">
                  1
                </div>
                <h3 className="text-xl font-display font-bold mb-4">Install & Configure</h3>
                <p className="text-muted-foreground">
                  Easy setup on TradingView with our step-by-step guide
                </p>
              </Card>

              <Card className="gradient-card border-border p-8 shadow-card text-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-primary">
                  2
                </div>
                <h3 className="text-xl font-display font-bold mb-4">Receive Signals</h3>
                <p className="text-muted-foreground">
                  Get clear buy/sell signals based on trend analysis
                </p>
              </Card>

              <Card className="gradient-card border-border p-8 shadow-card text-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-primary">
                  3
                </div>
                <h3 className="text-xl font-display font-bold mb-4">Trade with Confidence</h3>
                <p className="text-muted-foreground">
                  Execute trades knowing you're aligned with the market trend
                </p>
              </Card>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Complete Support & Training */}
      <AnimatedSection className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Complete <span className="text-primary">Support</span> & Training
              </h2>
              <p className="text-xl text-muted-foreground">
                We don't just sell you an indicator—we ensure you master it
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {support.map((item, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <Card className="gradient-card border-border p-8 shadow-card hover:shadow-gold transition-all text-center h-full">
                    <div className="space-y-4">
                      <div className="w-16 h-16 rounded-xl gradient-gold flex items-center justify-center mx-auto">
                        <item.icon size={32} className="text-primary-foreground" />
                      </div>
                      <h3 className="text-xl font-display font-bold">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Why Papa Trading */}
      <AnimatedSection className="py-20 gradient-card">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                  Why <span className="text-primary">Papa Trading</span>?
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="text-primary mt-1 flex-shrink-0" size={24} />
                    <p className="text-lg text-muted-foreground">
                      Developed by professional traders with years of experience
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="text-primary mt-1 flex-shrink-0" size={24} />
                    <p className="text-lg text-muted-foreground">
                      Tested across thousands of real market scenarios
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="text-primary mt-1 flex-shrink-0" size={24} />
                    <p className="text-lg text-muted-foreground">
                      Backed by NISM certified analysts
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="text-primary mt-1 flex-shrink-0" size={24} />
                    <p className="text-lg text-muted-foreground">
                      Continuous updates and improvements based on user feedback
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="text-primary mt-1 flex-shrink-0" size={24} />
                    <p className="text-lg text-muted-foreground">
                      Part of a larger trading ecosystem with mentorship support
                    </p>
                  </div>
                </div>
              </div>

              <Card className="gradient-card border-border p-8 shadow-card">
                <div className="space-y-6">
                  <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Target size={32} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-display font-bold">Our Promise</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    At Papa Trading, we're not just about selling tools—we're about empowering 
                    traders to achieve consistent profitability. Our Pro Trend Indicator is 
                    designed with one goal: to help you trade every trend with confidence.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Final CTA */}
      <AnimatedSection className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Start Trading with <span className="text-primary">Precision</span> Today
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Don't let market noise confuse you. Trade with clarity using Papa Trading Pro Trend Indicator.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="gradient-gold text-primary-foreground font-semibold text-lg px-8 py-6 shadow-gold hover:scale-105 transition-transform">
                Buy Now
              </Button>
              <Button variant="outline" className="text-lg px-8 py-6 border-2 border-primary/50 hover:bg-primary/10">
                Get Free Demo
              </Button>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default ProTrendIndicator;
