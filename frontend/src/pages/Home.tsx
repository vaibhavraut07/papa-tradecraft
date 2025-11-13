import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import AnimatedSection from "@/components/AnimatedSection";
import InteractiveTradingChart from "@/components/InteractiveTradingChart";
import EnhancedTradingChart from "@/components/EnhancedTradingChart";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import ParallaxSection from "@/components/ParallaxSection";
import AnimatedCounter from "@/components/AnimatedCounter";
import Interactive3DCard from "@/components/Interactive3DCard";
import ParticleBackground from "@/components/ParticleBackground";
import SEO from "@/components/SEO";
import { 
  TrendingUp, 
  Users, 
  Award, 
  CheckCircle, 
  BarChart3, 
  Target,
  Zap,
  Shield,
  Clock,
  TrendingDown,
  Activity,
  LineChart,
  ArrowRight,
  Sparkles,
  Star
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <>
      <SEO />
      <div className="min-h-screen">
        {/* Enhanced Hero Section with Image Background */}
        <section 
          ref={heroRef}
          className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24"
        >
          {/* Background Image with Overlay */}
          <motion.div 
            className="absolute inset-0 z-0"
            style={{ opacity: heroOpacity, scale: heroScale }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90 z-10" />
            <img
              src="https://images.unsplash.com/photo-1639768939489-025b90ba9f23"
              alt="Trading Background"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Particle Effect */}
          <ParticleBackground />

          {/* Animated Grid */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" 
              style={{
                backgroundImage: `linear-gradient(rgba(255, 215, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 215, 0, 0.1) 1px, transparent 1px)`,
                backgroundSize: '50px 50px'
              }}
            />
          </div>
          
          <div className="container mx-auto px-3 sm:px-4 relative z-10 py-8 md:py-12">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-6 md:gap-12 items-center">
                {/* Left Content */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, type: "spring" }}
                >
                  {/* PAPA Acronym Badge */}
                  <motion.div
                    className="inline-block mb-6 mt-4 md:mt-0"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                  >
                    <div className="px-4 sm:px-6 py-2 sm:py-3 rounded-full gradient-gold shadow-gold">
                      <p className="text-xs sm:text-sm font-bold text-primary-foreground tracking-wider whitespace-nowrap">
                        <span className="text-primary">P</span>atience • <span className="text-primary">A</span>nalytical • <span className="text-primary">P</span>ersistent • <span className="text-primary">A</span>daptive
                      </p>
                    </div>
                  </motion.div>

                  <motion.h1 
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-bold mb-4 md:mb-6 leading-tight"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                  >
                    Master Trading with{" "}
                    <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent animate-gradient">
                      PAPA TRADING
                    </span>
                  </motion.h1>

                  <motion.p 
                    className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 md:mb-8 leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                  >
                    India's most trusted partner for Stock Market Mentorship & Innovative Trading tools.
                  </motion.p>

                  <motion.div 
                    className="flex flex-col sm:flex-row gap-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                  >
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Link to="/mentorship-program">
                        <Button className="gradient-gold text-primary-foreground font-semibold text-sm sm:text-base md:text-lg px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-6 shadow-gold group w-full sm:w-auto">
                          Start Your Journey
                          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Link to="/pro-trend-indicator">
                        <Button variant="outline" className="text-sm sm:text-base md:text-lg px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-6 border-2 border-primary/50 hover:bg-primary/10 w-full sm:w-auto">
                          <Sparkles className="mr-2" />
                          Explore Trading Tools
                        </Button>
                      </Link>
                    </motion.div>
                  </motion.div>

                  {/* Trust Indicators */}
                  <motion.div 
                    className="flex flex-wrap gap-6 mt-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2">
                        {['👨‍💼', '👩‍💼', '🧑‍💼', '👨‍🎓'].map((emoji, i) => (
                          <motion.div 
                            key={i}
                            className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-lg border-2 border-background"
                            initial={{ scale: 0, x: -20 }}
                            animate={{ scale: 1, x: 0 }}
                            transition={{ delay: 0.9 + i * 0.1 }}
                          >
                            {emoji}
                          </motion.div>
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-bold text-foreground">1000+</span> Traders
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ delay: 1 + i * 0.1 }}
                          >
                            <Star className="w-5 h-5 fill-primary text-primary" />
                          </motion.div>
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-bold text-foreground">4.9/5</span> Rating
                      </p>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Right - Hero Image */}
                <motion.div
                  initial={{ opacity: 0, x: 50, scale: 0.8 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ delay: 0.4, duration: 1, type: "spring" }}
                  className="relative"
                >
                  <motion.div
                    animate={{ 
                      rotate: [0, 5, 0, -5, 0],
                      scale: [1, 1.02, 1]
                    }}
                    transition={{ duration: 6, repeat: Infinity }}
                    className="relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-2xl blur-3xl" />
                    <img
                      src="/home banner.jpg"
                      alt="PAPA TRADING Home Banner"
                      className="relative rounded-2xl shadow-2xl border border-border/50 w-full h-auto"
                    />
                  </motion.div>

                  {/* Floating Stats */}
                  <motion.div
                    className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-4 shadow-xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 }}
                    whileHover={{ scale: 1.05, rotate: 2 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                        <TrendingUp className="text-green-500" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-green-500">95%</p>
                        <p className="text-xs text-muted-foreground">Accuracy Rate</p>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute -top-6 -right-6 bg-card border border-border rounded-xl p-4 shadow-xl"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4 }}
                    whileHover={{ scale: 1.05, rotate: -2 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <Shield className="text-primary" />
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-primary">NISM</p>
                        <p className="text-xs text-muted-foreground">Certified</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
              <motion.div
                className="w-1.5 h-1.5 bg-primary rounded-full"
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </section>

        {/* Interactive Trading Chart Section */}
        <AnimatedSection className="py-12 md:py-20 bg-background-transparent relative overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/70 to-background/80 z-10" />
            <img
              src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3"
              alt="Trading Charts"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="container mx-auto px-3 sm:px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <ParallaxSection>
                <div className="text-center mb-8 md:mb-12">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 md:mb-6 px-2">
                      See Our <span className="text-primary">Pro Trend Indicator</span> in Action
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-2">
                      Real-time Trend signals with 95% accuracy. Never miss a trading opportunity again.
                    </p>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="mb-8"
                >
                  <EnhancedTradingChart symbol="NIFTY BANK" timeframe="5" />
                </motion.div>

                {/* Trading Chart Images Section */}
                <div className="grid md:grid-cols-2 gap-4 md:gap-6 mt-6 md:mt-8 mb-6 md:mb-8 px-2">
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="relative group"
                  >
                    <Card className="overflow-hidden border-border shadow-card">
                      <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-gray-800">
                        <img
                          src="/Nifty Bank Index.png"
                          alt="Nifty Bank Trading Chart"
                          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                        />
                        <div className="absolute bottom-4 left-4 right-4">
                          <h4 className="text-white font-bold text-lg mb-1">NIFTY BANK Index</h4>
                          <p className="text-gray-300 text-sm">Real-time 5-minute chart with BULLISH/BEARISH signals</p>
                        </div>
                        <motion.div
                          className="absolute top-4 right-4 bg-green-500/90 text-white px-3 py-1 rounded-full text-xs font-semibold"
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          95% Accuracy Rate
                        </motion.div>
                      </div>
                    </Card>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="relative group"
                  >
                    <Card className="overflow-hidden border-border shadow-card">
                      <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-gray-800">
                        <img
                          src="/Gold Spot  USD.png"
                          alt="Gold Spot Trading Chart"
                          className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                        />
                        <div className="absolute bottom-4 left-4 right-4">
                          <h4 className="text-white font-bold text-lg mb-1">Gold Spot / USD</h4>
                          <p className="text-gray-300 text-sm">Multi-timeframe analysis with trend indicators</p>
                        </div>
                        <motion.div
                          className="absolute top-4 right-4 bg-primary/90 text-white px-3 py-1 rounded-full text-xs font-semibold"
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                        >
                          Live Signals
                        </motion.div>
                      </div>
                    </Card>
                  </motion.div>
                </div>

                {/* Feature Highlights Below Chart */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-12 px-2">
                  {[
                    { icon: Zap, title: "Leading Signals", desc: "Non-repainting, early alerts", color: "from-yellow-500 to-orange-500" },
                    { icon: Target, title: "95% Accuracy", desc: "Proven by live trading", color: "from-green-500 to-emerald-500" },
                    { icon: Activity, title: "All Markets", desc: "Stocks, Forex, Crypto", color: "from-primary to-secondary" }
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <Interactive3DCard>
                        <Card className="p-4 md:p-6 gradient-card border-border text-center hover:shadow-gold transition-all">
                          <motion.div
                            className={`w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 rounded-full bg-gradient-to-br ${feature.color} flex items-center justify-center`}
                            whileHover={{ rotate: 360, scale: 1.1 }}
                            transition={{ duration: 0.6 }}
                          >
                            <feature.icon className="text-white" size={28} />
                          </motion.div>
                          <h3 className="text-lg md:text-xl font-bold mb-2">{feature.title}</h3>
                          <p className="text-sm md:text-base text-muted-foreground">{feature.desc}</p>
                        </Card>
                      </Interactive3DCard>
                    </motion.div>
                  ))}
                </div>
              </ParallaxSection>
            </div>
          </div>
        </AnimatedSection>

        {/* Why PAPA TRADING */}
        <AnimatedSection className="py-12 md:py-20 relative overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-background/95 z-10" />
            <img
              src="https://images.pexels.com/photos/7663144/pexels-photo-7663144.jpeg"
              alt="Financial Analysis"
              className="w-full h-full object-cover opacity-30"
            />
          </div>

          <div className="container mx-auto px-3 sm:px-4 relative z-20">
            <ParallaxSection>
              <div className="max-w-4xl mx-auto text-center mb-8 md:mb-16">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 md:mb-6 px-2">
                    Why <span className="text-primary">PAPA TRADING</span>?
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed px-2">
                    We believe trading shouldn't feel like gambling. It's a skill you can master with the right guidance, tools, and strategy.
                  </p>
                </motion.div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-7xl mx-auto px-2">
                {[
                  { letter: "P", word: "Patience", desc: "Waiting for perfect setups", icon: Clock, color: "from-purple-500 to-pink-500", overlayColor: "from-purple-500/10 to-pink-500/10" },
                  { letter: "A", word: "Analytical", desc: "Data-driven decisions", icon: BarChart3, color: "from-primary to-secondary", overlayColor: "from-primary/10 to-secondary/10" },
                  { letter: "P", word: "Persistent", desc: "Staying consistent", icon: Target, color: "from-green-500 to-emerald-500", overlayColor: "from-green-500/10 to-emerald-500/10" },
                  { letter: "A", word: "Adaptive", desc: "Adapting to markets", icon: Zap, color: "from-orange-500 to-red-500", overlayColor: "from-orange-500/10 to-red-500/10" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                  >
                    <Interactive3DCard>
                      <motion.div
                        className="relative group"
                        whileHover={{ y: -10 }}
                      >
                        <Card className="p-4 md:p-6 lg:p-8 gradient-card border-border text-center relative overflow-hidden">
                          {/* Animated Background */}
                          <motion.div
                            className={`absolute inset-0 bg-gradient-to-br ${item.overlayColor} group-hover:opacity-20 transition-opacity duration-300`}
                          />
                          
                          <motion.div
                            className={`w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 mx-auto mb-3 md:mb-4 rounded-xl md:rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl md:text-3xl lg:text-4xl font-bold text-primary-foreground shadow-lg ring-2 ring-primary/30`}
                            whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                            transition={{ duration: 0.5 }}
                          >
                            <span className="text-primary-foreground">{item.letter}</span>
                          </motion.div>
                          
                          <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2">{item.word}</h3>
                          <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4">{item.desc}</p>
                          
                          <motion.div
                            className="w-10 h-10 md:w-12 md:h-12 mx-auto rounded-full bg-muted flex items-center justify-center"
                            whileHover={{ scale: 1.2, rotate: 360 }}
                            transition={{ duration: 0.6 }}
                          >
                            <item.icon className="text-primary" size={24} />
                          </motion.div>
                        </Card>
                      </motion.div>
                    </Interactive3DCard>
                  </motion.div>
                ))}
              </div>
            </ParallaxSection>
          </div>
        </AnimatedSection>

        {/* Products Section */}
        <AnimatedSection className="py-12 md:py-20 bg-background-transparent relative overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/70 to-background/80 z-10" />
            <img
              src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f"
              alt="Trading Tools"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="container mx-auto px-3 sm:px-4 relative z-10">
            <ParallaxSection>
              <div className="text-center mb-8 md:mb-12">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 md:mb-6 px-2">
                    Our <span className="text-primary">Products</span>
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-2">
                    Professional-grade tools for every trader
                  </p>
                  <p className="text-sm sm:text-base md:text-lg text-primary mt-2 px-2 font-semibold">
                    Professional & Innovative Trading Solutions
                  </p>
                </motion.div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto px-2">
                {/* Scanner Suite */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <Link to="/scanner-suite">
                    <Interactive3DCard>
                      <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
                        <Card className="gradient-card border-border overflow-hidden group cursor-pointer h-full relative">
                          {/* Background Pattern */}
                          <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity">
                            <div className="absolute inset-0" style={{
                              backgroundImage: 'url(https://images.pexels.com/photos/7663144/pexels-photo-7663144.jpeg)',
                              backgroundSize: 'cover'
                            }} />
                          </div>

                          <div className="p-8 relative z-10">
                            <motion.div
                              className="w-20 h-20 mb-6 rounded-2xl gradient-gold flex items-center justify-center shadow-gold"
                              whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                              transition={{ duration: 0.5 }}
                            >
                              <BarChart3 size={40} className="text-primary-foreground" />
                            </motion.div>
                            
                            <h3 className="text-xl md:text-2xl lg:text-3xl font-display font-bold mb-3 md:mb-4 group-hover:text-primary transition-colors">
                              Scanner Suite
                            </h3>
                            
                            <p className="text-muted-foreground mb-4 md:mb-6 text-sm md:text-base lg:text-lg">
                              Complete stock discovery system. Identify high-probability setups for intraday & swing trading before they become obvious to the market.
                            </p>

                            <ul className="space-y-3 mb-6">
                              {[
                                "Early breakout detection",
                                "Volume surge alerts",
                                "Multi-timeframe scanning",
                                "F&O and Cash coverage"
                              ].map((feature, i) => (
                                <motion.li
                                  key={i}
                                  className="flex items-center gap-2"
                                  initial={{ opacity: 0, x: -20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: i * 0.1 }}
                                >
                                  <CheckCircle className="text-primary flex-shrink-0" size={18} />
                                  <span className="text-sm">{feature}</span>
                                </motion.li>
                              ))}
                            </ul>

                            <motion.div
                              className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform"
                              whileHover={{ x: 10 }}
                            >
                              Learn More <ArrowRight className="ml-2" size={20} />
                            </motion.div>
                          </div>
                        </Card>
                      </motion.div>
                    </Interactive3DCard>
                  </Link>
                </motion.div>

                {/* Pro Trend Indicator */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <Link to="/pro-trend-indicator">
                    <Interactive3DCard>
                      <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300 }}>
                        <Card className="gradient-card border-border overflow-hidden group cursor-pointer h-full relative">
                          {/* Background Pattern */}
                          <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity">
                            <div className="absolute inset-0" style={{
                              backgroundImage: 'url(https://images.unsplash.com/photo-1639768939489-025b90ba9f23)',
                              backgroundSize: 'cover'
                            }} />
                          </div>

                          <div className="p-8 relative z-10">
                            <motion.div
                              className="w-20 h-20 mb-6 rounded-2xl gradient-gold flex items-center justify-center shadow-gold"
                              whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                              transition={{ duration: 0.5 }}
                            >
                              <Target size={40} className="text-primary-foreground" />
                            </motion.div>
                            
                            <h3 className="text-3xl font-display font-bold mb-4 group-hover:text-primary transition-colors">
                              Pro Trend Indicator
                            </h3>
                            
                            <p className="text-muted-foreground mb-6 text-lg">
                              India's #1 trend detector with 95% accuracy. Leading, non-repainting signals for confident entry and exit decisions.
                            </p>

                            <ul className="space-y-3 mb-6">
                              {[
                                "95% accuracy rate",
                                "Non-repainting signals",
                                "Works on all timeframes",
                                "Custom alert system"
                              ].map((feature, i) => (
                                <motion.li
                                  key={i}
                                  className="flex items-center gap-2"
                                  initial={{ opacity: 0, x: -20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: i * 0.1 }}
                                >
                                  <CheckCircle className="text-primary flex-shrink-0" size={18} />
                                  <span className="text-sm">{feature}</span>
                                </motion.li>
                              ))}
                            </ul>

                            <motion.div
                              className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform"
                              whileHover={{ x: 10 }}
                            >
                              Learn More <ArrowRight className="ml-2" size={20} />
                            </motion.div>
                          </div>
                        </Card>
                      </motion.div>
                    </Interactive3DCard>
                  </Link>
                </motion.div>
              </div>
            </ParallaxSection>
          </div>
        </AnimatedSection>

        {/* Elite Mentorship Program */}
        <AnimatedSection className="py-12 md:py-20 gradient-card-transparent relative overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-background/70 via-background/60 to-background/70 z-10" />
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt="Mentorship"
              className="w-full h-full object-cover opacity-15"
            />
          </div>
          <div className="container mx-auto px-3 sm:px-4 relative z-10">
            <ParallaxSection>
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-8 md:mb-12">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 md:mb-6 px-2">
                      Elite <span className="text-primary">Mentorship</span> Program
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl text-muted-foreground px-2">
                      Transform from beginner to confident trader in just 1 month
                    </p>
                  </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 md:gap-8 px-2">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    <Interactive3DCard>
                      <Card className="gradient-card border-border p-4 md:p-6 lg:p-8 shadow-card h-full">
                        <div className="space-y-4 md:space-y-6">
                          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-3">
                            <motion.div
                              className="w-12 h-12 md:w-14 md:h-16 lg:w-16 lg:h-16 rounded-full gradient-gold flex items-center justify-center flex-shrink-0"
                              whileHover={{ rotate: 360, scale: 1.1 }}
                              transition={{ duration: 0.6 }}
                            >
                              <Users className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-primary-foreground" />
                            </motion.div>
                            <h3 className="text-xl md:text-2xl font-display font-bold">Program Details</h3>
                          </div>
                          <ul className="space-y-3 md:space-y-4">
                            {[
                              "Duration: 1 Month (8 Sessions)",
                              "NISM Certified Research Analysts",
                              "Live sessions every weekend",
                              "Hands-on practical training",
                              "Lifetime community access",
                              "Real trade analysis"
                            ].map((item, i) => (
                              <motion.li
                                key={i}
                                className="flex items-start space-x-2 md:space-x-3"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                              >
                                <CheckCircle className="text-primary mt-0.5 md:mt-1 flex-shrink-0 w-4 h-4 md:w-5 md:h-5" />
                                <span className="text-sm md:text-base text-muted-foreground">{item}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </Card>
                    </Interactive3DCard>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    <Interactive3DCard>
                      <Card className="gradient-card border-border p-4 md:p-6 lg:p-8 shadow-card h-full flex flex-col justify-between">
                        <div className="space-y-4 md:space-y-6">
                          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-3">
                            <motion.div
                              className="w-12 h-12 md:w-14 md:h-16 lg:w-16 lg:h-16 rounded-full gradient-gold flex items-center justify-center flex-shrink-0"
                              whileHover={{ rotate: 360, scale: 1.1 }}
                              transition={{ duration: 0.6 }}
                            >
                              <Award className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-primary-foreground" />
                            </motion.div>
                            <h3 className="text-xl md:text-2xl font-display font-bold">Investment</h3>
                          </div>
                          
                          <motion.div
                            initial={{ scale: 0.8 }}
                            whileInView={{ scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 200 }}
                          >
                            <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-2">₹29,999</p>
                            <p className="text-xs sm:text-sm text-muted-foreground mb-1">
                              Price (Excluding 18% GST)
                            </p>
                            <p className="text-sm md:text-base text-muted-foreground">
                              Complete mentorship with lifetime support
                            </p>
                          </motion.div>

                          <div className="space-y-3 pt-4">
                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                              <Link to="/mentorship-program">
                                <Button className="w-full gradient-gold text-primary-foreground font-semibold py-3 md:py-4 lg:py-6 shadow-gold text-sm md:text-base lg:text-lg animate-pulse-glow">
                                  Enroll Now
                                </Button>
                              </Link>
                            </motion.div>
                          </div>
                        </div>
                      </Card>
                    </Interactive3DCard>
                  </motion.div>
                </div>
              </div>
            </ParallaxSection>
          </div>
        </AnimatedSection>

        {/* Testimonials Section */}
        <AnimatedSection className="py-12 md:py-20 bg-background-transparent relative overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/70 to-background/80 z-10" />
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978"
              alt="Success Stories"
              className="w-full h-full object-cover opacity-15"
            />
          </div>
          <div className="container mx-auto px-3 sm:px-4 relative z-10">
            <ParallaxSection>
              <div className="text-center mb-8 md:mb-12 px-2">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 md:mb-6">
                    Success <span className="text-primary">Stories</span>
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
                    Real traders, real results
                  </p>
                </motion.div>
              </div>

              <TestimonialsCarousel />
            </ParallaxSection>
          </div>
        </AnimatedSection>

        {/* Stats Section with Animated Counters */}
        <AnimatedSection className="py-12 md:py-20 gradient-card-transparent relative overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-background/70 via-background/60 to-background/70 z-10" />
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
              alt="Statistics"
              className="w-full h-full object-cover opacity-15"
            />
          </div>
          <div className="container mx-auto px-3 sm:px-4 relative z-10">
            <div className="max-w-5xl mx-auto px-2">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
                {[
                  { end: 1000, suffix: "+", label: "Traders Nationwide", icon: Users },
                  { end: 95, suffix: "%", label: "Signal Accuracy", icon: Target },
                  { end: 24, suffix: "/7", label: "Support Available", icon: Shield },
                  { end: 8, suffix: "", label: "Expert Sessions", icon: Award }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Interactive3DCard>
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="inline-block"
                      >
                        <stat.icon className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 mx-auto mb-3 md:mb-4 text-primary" />
                      </motion.div>
                      <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-2">
                        <AnimatedCounter end={stat.end} suffix={stat.suffix} />
                      </div>
                      <div className="text-xs sm:text-sm md:text-base text-muted-foreground">{stat.label}</div>
                    </Interactive3DCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Final CTA */}
        <AnimatedSection className="py-12 md:py-20 bg-background relative overflow-hidden">
          <ParticleBackground />
          <div className="container mx-auto px-3 sm:px-4 relative z-10">
            <ParallaxSection>
              <div className="max-w-4xl mx-auto text-center px-2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 md:mb-6">
                    Ready to Start Your <span className="text-primary">Trading Journey</span>?
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 md:mb-8">
                    Join thousands of successful traders who trust PAPA TRADING
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Link to="/mentorship-program">
                        <Button className="gradient-gold text-primary-foreground font-semibold text-sm sm:text-base md:text-lg px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-6 shadow-gold w-full sm:w-auto">
                          Join PAPA TRADING
                        </Button>
                      </Link>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Link to="/contact">
                        <Button variant="outline" className="text-sm sm:text-base md:text-lg px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-6 border-2 border-primary/50 hover:bg-primary/10 w-full sm:w-auto">
                          Contact Us
                        </Button>
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </ParallaxSection>
          </div>
        </AnimatedSection>
      </div>
    </>
  );
};

export default Home;
