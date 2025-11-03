import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import AnimatedSection from "@/components/AnimatedSection";
import { TrendingUp, Users, Award, CheckCircle, BarChart3, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgyNTUsIDIxNSwgMCwgMC4wNSkiLz48L2c+PC9zdmc+')] opacity-20"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
                Trade Smart. Trade Confident.
              </h1>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
                Trade with <span className="text-primary">Papa</span>.
              </h2>
              <p className="text-xl md:text-2xl text-muted-foreground mb-12">
                India's most trusted mentorship and trading tools platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="gradient-gold text-primary-foreground font-semibold text-lg px-8 py-6 shadow-gold hover:scale-105 transition-transform">
                  Join Mentorship Now
                </Button>
                <Button variant="outline" className="text-lg px-8 py-6 border-2 border-primary/50 hover:bg-primary/10 hover:scale-105 transition-transform">
                  Explore Tools
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-primary/10 blur-xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute bottom-1/4 right-10 w-32 h-32 rounded-full bg-secondary/10 blur-xl"
        />
      </section>

      {/* Why Papa Trading Exists */}
      <AnimatedSection className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Why <span className="text-primary">Papa Trading</span> Exists
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              At Papa Trading, we make trading simpler, smarter, and more rewarding. 
              We believe the stock market shouldn't feel like a gamble—it's a skill you can learn, practice, and master.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* Elite Mentorship Program */}
      <AnimatedSection className="py-20 gradient-card">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Elite <span className="text-primary">Mentorship</span> Program
              </h2>
              <p className="text-xl text-muted-foreground">
                Transform your trading journey with expert guidance
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="gradient-card border-border p-8 shadow-card hover:shadow-gold transition-all">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <Users className="text-primary" size={32} />
                    <h3 className="text-2xl font-display font-bold">Program Details</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span className="text-muted-foreground">Duration: 1 Month (8 Sessions)</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span className="text-muted-foreground">Conducted by NISM Certified Analysts</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span className="text-muted-foreground">Live sessions every weekend</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span className="text-muted-foreground">Hands-on practical training</span>
                    </li>
                  </ul>
                </div>
              </Card>

              <Card className="gradient-card border-border p-8 shadow-card hover:shadow-gold transition-all">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <Award className="text-primary" size={32} />
                    <h3 className="text-2xl font-display font-bold">Special Offer</h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-3xl font-bold text-primary">₹29,999</p>
                    <p className="text-muted-foreground">
                      Complete mentorship package with lifetime community access
                    </p>
                    <div className="space-y-3 pt-4">
                      <Button className="w-full gradient-gold text-primary-foreground font-semibold shadow-gold hover:scale-105 transition-transform">
                        Enroll Now
                      </Button>
                      <Button variant="outline" className="w-full border-primary/50 hover:bg-primary/10">
                        See Curriculum
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Products Preview */}
      <AnimatedSection className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Our <span className="text-primary">Products</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Professional trading tools designed for success
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Link to="/scanner-suite">
              <Card className="gradient-card border-border p-8 shadow-card hover:shadow-gold transition-all group cursor-pointer h-full">
                <div className="space-y-4">
                  <div className="w-16 h-16 rounded-xl gradient-gold flex items-center justify-center group-hover:scale-110 transition-transform">
                    <BarChart3 size={32} className="text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-display font-bold">Scanner Suite</h3>
                  <p className="text-muted-foreground">
                    Complete stock discovery system for intraday & swing trading. 
                    Identify high-probability setups instantly.
                  </p>
                  <div className="pt-4">
                    <span className="text-primary font-semibold group-hover:underline">
                      Learn More →
                    </span>
                  </div>
                </div>
              </Card>
            </Link>

            <Link to="/pro-trend-indicator">
              <Card className="gradient-card border-border p-8 shadow-card hover:shadow-gold transition-all group cursor-pointer h-full">
                <div className="space-y-4">
                  <div className="w-16 h-16 rounded-xl gradient-gold flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Target size={32} className="text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-display font-bold">Pro Trend Indicator</h3>
                  <p className="text-muted-foreground">
                    Advanced trend detection for precise entry and exit points. 
                    Trade with confidence and clarity.
                  </p>
                  <div className="pt-4">
                    <span className="text-primary font-semibold group-hover:underline">
                      Learn More →
                    </span>
                  </div>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </AnimatedSection>

      {/* Stats Section */}
      <AnimatedSection className="py-20 gradient-card">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">1000+</div>
                <div className="text-muted-foreground">Traders Nationwide</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">8</div>
                <div className="text-muted-foreground">Expert Sessions</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">2</div>
                <div className="text-muted-foreground">Pro Tools</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">24/7</div>
                <div className="text-muted-foreground">Support</div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Final CTA */}
      <AnimatedSection className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Ready to Start Your <span className="text-primary">Trading Journey</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of traders who trust Papa Trading for mentorship and tools
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="gradient-gold text-primary-foreground font-semibold text-lg px-8 py-6 shadow-gold hover:scale-105 transition-transform">
                Join Papa Trading
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

export default Home;
