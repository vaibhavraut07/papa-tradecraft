import AnimatedSection from "@/components/AnimatedSection";
import { Card } from "@/components/ui/card";
import { Target, Eye, Lightbulb, Users, TrendingUp, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-12 md:py-20 gradient-hero relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-background/85 via-background/80 to-background/85 z-10" />
          <img
            src="https://images.unsplash.com/photo-1639768939489-025b90ba9f23"
            alt="Trading Background"
            className="w-full h-full object-cover opacity-25"
          />
        </div>
        <div className="container mx-auto px-3 sm:px-4 relative z-10">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-4 md:mb-6 bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent px-2">
              About PAPA TRADING
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground px-2">
              We believe the stock market shouldn't feel like a gamble—it's a skill you can learn, practice, and master.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Papa Trading Was Established */}
      <AnimatedSection className="py-12 md:py-20 bg-background-transparent">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="max-w-5xl mx-auto px-2">
            <Card className="gradient-card border-border p-4 sm:p-6 md:p-8 lg:p-12 shadow-card">
              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 mb-4 md:mb-6">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl gradient-gold flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-6 h-6 md:w-8 md:h-8 text-primary-foreground" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-3 md:mb-4">
                    Why PAPA TRADING Was Established
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                    Most traders lose due to lack of guidance. We created PAPA TRADING to give retail traders 
                    the same professional edge through practical training and community support. We saw a gap 
                    in the market where individual traders struggled without proper mentorship, tools, or a 
                    supportive community. Our mission is to bridge that gap.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </AnimatedSection>

      {/* Mission & Vision */}
      <AnimatedSection className="py-12 md:py-20 gradient-card-transparent">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="max-w-6xl mx-auto px-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
              {/* Mission */}
              <Card className="gradient-card border-border p-4 sm:p-6 md:p-8 shadow-card hover:shadow-gold transition-all">
                <div className="space-y-4 md:space-y-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Target className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold">Our Mission</h3>
                  <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                    Help people trade with confidence by simplifying complex trading concepts and 
                    sharing tested, effective strategies. We're committed to making professional 
                    trading education accessible to everyone, regardless of their background or 
                    experience level.
                  </p>
                </div>
              </Card>

              {/* Vision */}
              <Card className="gradient-card border-border p-4 sm:p-6 md:p-8 shadow-card hover:shadow-gold transition-all">
                <div className="space-y-4 md:space-y-6">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-secondary/20 flex items-center justify-center">
                    <Eye className="w-6 h-6 md:w-8 md:h-8 text-secondary" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-bold">Our Vision</h3>
                  <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                    Build India's most trusted trading community where every trader feels empowered 
                    with the right tools, mindset, and discipline. We envision a future where trading 
                    is not about luck, but about skill, strategy, and continuous learning.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Our Approach */}
      <AnimatedSection className="py-12 md:py-20 bg-background-transparent">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="max-w-6xl mx-auto px-2">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 md:mb-6">
                The <span className="text-primary">PAPA TRADING</span> Approach
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
                What makes us different from the rest
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
              <Card className="gradient-card border-border p-4 sm:p-6 md:p-8 shadow-card text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl gradient-gold flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <Users className="w-6 h-6 md:w-8 md:h-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg md:text-xl font-display font-bold mb-3 md:mb-4">Community-Driven</h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  Join a supportive community of traders who share insights, strategies, and grow together.
                </p>
              </Card>

              <Card className="gradient-card border-border p-4 sm:p-6 md:p-8 shadow-card text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl gradient-gold flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg md:text-xl font-display font-bold mb-3 md:mb-4">Practical Learning</h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  No theory without practice. Every concept is backed by real market examples and live trading sessions.
                </p>
              </Card>

              <Card className="gradient-card border-border p-4 sm:p-6 md:p-8 shadow-card text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl gradient-gold flex items-center justify-center mx-auto mb-4 md:mb-6">
                  <Award className="w-6 h-6 md:w-8 md:h-8 text-primary-foreground" />
                </div>
                <h3 className="text-lg md:text-xl font-display font-bold mb-3 md:mb-4">Expert Guidance</h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  Learn from NISM certified analysts with years of real-world trading experience.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Final Message */}
      <AnimatedSection className="py-12 md:py-20 gradient-card-transparent">
        <div className="container mx-auto px-3 sm:px-4">
          <div className="max-w-4xl mx-auto text-center px-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 md:mb-6">
              Say Cheers to <span className="text-primary">FOMO</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed">
              With PAPA TRADING, you don't just learn trading—you live it and grow with it. 
              Join us on this journey where every trade is a lesson, every lesson is growth, 
              and every day brings you closer to mastering the markets.
            </p>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default About;
