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
  Zap,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";
import EnhancedTradingChart from "@/components/EnhancedTradingChart";

const ScannerSuite = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Breakout Opportunities",
      description: "Stocks breaking key resistance levels with strong volume",
      badge: "#1 Super accuracy setups",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3"
    },
    {
      icon: AlertCircle,
      title: "Reversal Signals",
      description: "Early detection of trend reversals at support/resistance zones",
      badge: "#2 Spot market reversals",
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f"
    },
    {
      icon: BarChart3,
      title: "High Momentum Plays",
      description: "Stocks showing unusual volume and price movement",
      badge: "#3 Scalping quick & easy",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
    },
    {
      icon: Target,
      title: "Support & Resistance Zones",
      description: "Critical price levels for entry and exit planning",
      badge: "#4 Precision levels",
      image: "https://images.unsplash.com/photo-1639768939489-025b90ba9f23"
    },
    {
      icon: Clock,
      title: "Real-Time Alerts",
      description: "Never miss a trading opportunity with instant notifications",
      badge: "#5 Live alerts",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3"
    },
    {
      icon: Zap,
      title: "Pre-Market Insights",
      description: "Prepare your watchlist before the market opens",
      badge: "#6 Pre-market scan",
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f"
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
      <section className="py-12 md:py-20 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90 z-10" />
          <img
            src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3"
            alt="Trading Charts Background"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-3 sm:px-4 relative z-10">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-display font-bold mb-4 md:mb-6 bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent px-2">
              PAPA TRADING Scanner Suite
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 md:mb-8 px-2">
              Your Complete Stock Discovery System for Intraday & Swing Trading
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-2">
              <Button className="gradient-gold text-primary-foreground font-semibold text-sm sm:text-base md:text-lg px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-6 shadow-gold hover:scale-105 transition-transform w-full sm:w-auto">
                Try Scanner Suite Now
              </Button>
              <Button variant="outline" className="text-sm sm:text-base md:text-lg px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-6 border-2 border-primary/50 hover:bg-primary/10 w-full sm:w-auto">
                Enquire Now
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Scanner Features with Visual Charts */}
      <AnimatedSection className="py-12 md:py-20 bg-background-transparent">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 md:mb-12 px-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 md:mb-6">
                Scanner <span className="text-primary">Features</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
                Powerful tools to spot high-probability trading setups
              </p>
            </div>

            {/* Feature Cards with Charts */}
            <div className="space-y-6 md:space-y-8 px-2">
              {features.slice(0, 3).map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <Card className="gradient-card border-border overflow-hidden hover:shadow-peacock transition-all">
                    <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                      <div className={`p-4 sm:p-6 md:p-8 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                        <div className="inline-block mb-3 md:mb-4">
                          <span className="px-2 py-1 sm:px-3 sm:py-1 rounded-full bg-muted text-xs font-semibold">
                            {feature.badge}
                          </span>
                        </div>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold mb-3 md:mb-4">{feature.title}</h3>
                        <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-4 md:mb-6 leading-relaxed">
                          {feature.description}
                        </p>
                        <Button className="gradient-peacock text-primary-foreground font-semibold text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-3 w-full sm:w-auto">
                          Get Access Now <ArrowRight className="ml-2 inline" size={18} />
                        </Button>
                      </div>
                      <div className={`relative h-48 sm:h-64 md:h-80 mb-16 sm:mb-20 md:mb-24 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg overflow-visible">
                          <div className="absolute inset-0 flex items-center justify-center p-2 sm:p-4 overflow-visible">
                            <EnhancedTradingChart 
                              symbol={index === 0 ? "NIFTY BANK" : index === 1 ? "GOLD SPOT" : "NIFTY 50"} 
                              timeframe="5" 
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Remaining Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-12 px-2">
              {features.slice(3).map((feature, index) => (
                <AnimatedSection key={index + 3} delay={(index + 3) * 0.1}>
                  <Card className="gradient-card border-border p-4 md:p-6 shadow-card hover:shadow-gold transition-all h-full">
                    <div className="space-y-3 md:space-y-4">
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl gradient-gold flex items-center justify-center">
                        <feature.icon className="w-6 h-6 md:w-7 md:h-7 text-primary-foreground" />
                      </div>
                      <div className="inline-block">
                        <span className="px-2 py-1 rounded-full bg-muted text-xs font-semibold">
                          {feature.badge}
                        </span>
                      </div>
                      <h3 className="text-lg md:text-xl font-display font-bold">{feature.title}</h3>
                      <p className="text-sm md:text-base text-muted-foreground">{feature.description}</p>
                    </div>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Why Our Scanners Give You an Edge */}
      <AnimatedSection className="py-20 gradient-card-transparent">
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
      <AnimatedSection className="py-20 bg-background-transparent">
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
      <AnimatedSection className="py-20 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/85 to-background/90 z-10" />
          <img
            src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3"
            alt="Trading Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Ready to <span className="text-primary">Transform</span> Your Trading?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join hundreds of traders who trust PAPA TRADING Scanner Suite
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
