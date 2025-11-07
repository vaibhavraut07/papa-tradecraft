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
  LineChart,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";
import EnhancedTradingChart from "@/components/EnhancedTradingChart";

const ProTrendIndicator = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Smart Entry Signals",
      description: "Now don't waste your time to find Easy Entry and Exit. Our premium auto signals feature makes trading easier and smart.",
      badge: "#1 Super accuracy setups",
      videoUrl: "https://cdn.zepix.io/zepix_videos/Signals-zepix.mp4",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3"
    },
    {
      icon: Target,
      title: "Realtime Trend Catcher",
      description: "Trading with real time trend is now got easier with PAPA TRADING's real time trend catcher. Just add Pro Trend Indicator on your chart and start trading.",
      badge: "#2 Spot market reversals",
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f"
    },
    {
      icon: Zap,
      title: "AI Breakout Levels",
      description: "Pro Trend Indicator's AI level analyzer helps to find Breakout and Breakdown levels on chart with real-time Support and Resistance in the market.",
      badge: "#3 Scalping quick & easy",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
    },
    {
      icon: LineChart,
      title: "Reduced Noise & False Signals",
      description: "Advanced filtering eliminates market noise for clearer insights",
      badge: "#4 Precision filtering",
      image: "https://images.unsplash.com/photo-1639768939489-025b90ba9f23"
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
      <section className="py-12 md:py-20 gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90 z-10" />
          <img
            src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f"
            alt="Trading Indicators Background"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-3 sm:px-4 relative z-10">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-display font-bold mb-4 md:mb-6 bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent px-2">
              Pro Trend Indicator
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 md:mb-8 px-2">
              Trade Every Trend with Confidence – Built by Experts, Made for You
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-2">
              <Button className="gradient-gold text-primary-foreground font-semibold text-sm sm:text-base md:text-lg px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-6 shadow-gold hover:scale-105 transition-transform w-full sm:w-auto">
                Buy Now
              </Button>
              <Button variant="outline" className="text-sm sm:text-base md:text-lg px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-6 border-2 border-primary/50 hover:bg-primary/10 w-full sm:w-auto">
                Get Free Demo
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Indicator Features with Visual Charts */}
      <AnimatedSection className="py-12 md:py-20 bg-background-transparent">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8 md:mb-12 px-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 md:mb-6">
                Indicator's <span className="text-primary">Features</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
                Next-Gen Indicators for Professional Trading
              </p>
            </div>

            {/* Feature Cards with Charts/Videos */}
            <div className="space-y-6 md:space-y-8 px-2">
              {features.map((feature, index) => (
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
                          {index === 0 && feature.videoUrl ? (
                            <video
                              className="w-full h-full object-cover rounded-lg"
                              autoPlay
                              loop
                              muted
                              playsInline
                              controlsList="nodownload"
                            >
                              <source src={feature.videoUrl} type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                          ) : (
                            <div className="absolute inset-0 flex items-center justify-center p-2 sm:p-4 overflow-visible">
                              <EnhancedTradingChart 
                                key={`chart-${index}`}
                                symbol={index === 1 ? "GOLD SPOT" : index === 2 ? "NIFTY 50" : "NIFTY BANK"} 
                                timeframe="5"
                                signalType={index === 1 ? "bullish" : index === 2 ? "bullish" : index === 3 ? "mixed" : "mixed"}
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* How It Works */}
      <AnimatedSection className="py-12 md:py-20 gradient-card-transparent">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="max-w-5xl mx-auto px-2">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 md:mb-6">
                How It <span className="text-primary">Works</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              <Card className="gradient-card border-border p-4 sm:p-6 md:p-8 shadow-card text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 md:mb-6 text-xl md:text-2xl font-bold text-primary">
                  1
                </div>
                <h3 className="text-lg md:text-xl font-display font-bold mb-3 md:mb-4">Install & Configure</h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  Easy setup on TradingView with our step-by-step guide
                </p>
              </Card>

              <Card className="gradient-card border-border p-4 sm:p-6 md:p-8 shadow-card text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 md:mb-6 text-xl md:text-2xl font-bold text-primary">
                  2
                </div>
                <h3 className="text-lg md:text-xl font-display font-bold mb-3 md:mb-4">Receive Signals</h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  Get clear buy/sell signals based on trend analysis
                </p>
              </Card>

              <Card className="gradient-card border-border p-4 sm:p-6 md:p-8 shadow-card text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 md:mb-6 text-xl md:text-2xl font-bold text-primary">
                  3
                </div>
                <h3 className="text-lg md:text-xl font-display font-bold mb-3 md:mb-4">Trade with Confidence</h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  Execute trades knowing you're aligned with the market trend
                </p>
              </Card>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Complete Support & Training */}
      <AnimatedSection className="py-12 md:py-20 bg-background-transparent">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="max-w-6xl mx-auto px-2">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 md:mb-6">
                Complete <span className="text-primary">Support</span> & Training
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
                We don't just sell you an indicator—we ensure you master it
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              {support.map((item, index) => (
                <AnimatedSection key={index} delay={index * 0.1}>
                  <Card className="gradient-card border-border p-4 sm:p-6 md:p-8 shadow-card hover:shadow-gold transition-all text-center h-full">
                    <div className="space-y-3 md:space-y-4">
                      <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl gradient-gold flex items-center justify-center mx-auto">
                        <item.icon className="w-6 h-6 md:w-8 md:h-8 text-primary-foreground" />
                      </div>
                      <h3 className="text-lg md:text-xl font-display font-bold">{item.title}</h3>
                      <p className="text-sm md:text-base text-muted-foreground">{item.description}</p>
                    </div>
                  </Card>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Why PAPA TRADING */}
      <AnimatedSection className="py-12 md:py-20 gradient-card-transparent">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="max-w-5xl mx-auto px-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 md:mb-6">
                  Why <span className="text-primary">PAPA TRADING</span>?
                </h2>
                <div className="space-y-3 md:space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="text-primary mt-1 flex-shrink-0 w-5 h-5 md:w-6 md:h-6" />
                    <p className="text-sm md:text-base lg:text-lg text-muted-foreground">
                      Developed by professional traders with years of experience
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="text-primary mt-1 flex-shrink-0 w-5 h-5 md:w-6 md:h-6" />
                    <p className="text-sm md:text-base lg:text-lg text-muted-foreground">
                      Tested across thousands of real market scenarios
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="text-primary mt-1 flex-shrink-0 w-5 h-5 md:w-6 md:h-6" />
                    <p className="text-sm md:text-base lg:text-lg text-muted-foreground">
                      Backed by NISM certified analysts
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="text-primary mt-1 flex-shrink-0 w-5 h-5 md:w-6 md:h-6" />
                    <p className="text-sm md:text-base lg:text-lg text-muted-foreground">
                      Continuous updates and improvements based on user feedback
                    </p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="text-primary mt-1 flex-shrink-0 w-5 h-5 md:w-6 md:h-6" />
                    <p className="text-sm md:text-base lg:text-lg text-muted-foreground">
                      Part of a larger trading ecosystem with mentorship support
                    </p>
                  </div>
                </div>
              </div>

              <Card className="gradient-card border-border p-4 sm:p-6 md:p-8 shadow-card">
                <div className="space-y-4 md:space-y-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Target className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-display font-bold">Our Promise</h3>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                    At PAPA TRADING, we're not just about selling tools—we're about empowering 
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
      <AnimatedSection className="py-12 md:py-20 bg-background-transparent relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/85 to-background/90 z-10" />
          <img
            src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f"
            alt="Trading Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-3 sm:px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center px-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 md:mb-6">
              Start Trading with <span className="text-primary">Precision</span> Today
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 md:mb-8">
              Don't let market noise confuse you. Trade with clarity using PAPA TRADING Pro Trend Indicator.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
              <Button className="gradient-gold text-primary-foreground font-semibold text-sm sm:text-base md:text-lg px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-6 shadow-gold hover:scale-105 transition-transform w-full sm:w-auto">
                Buy Now
              </Button>
              <Button variant="outline" className="text-sm sm:text-base md:text-lg px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-6 border-2 border-primary/50 hover:bg-primary/10 w-full sm:w-auto">
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
