import AnimatedSection from "@/components/AnimatedSection";
import { Card } from "@/components/ui/card";
import { Target, Eye, Lightbulb, Users, TrendingUp, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4">
          <AnimatedSection className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-primary via-primary to-secondary bg-clip-text text-transparent">
              About Papa Trading
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              We believe the stock market shouldn't feel like a gamble—it's a skill you can learn, practice, and master.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Papa Trading Was Established */}
      <AnimatedSection className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="gradient-card border-border p-8 md:p-12 shadow-card">
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-16 h-16 rounded-xl gradient-gold flex items-center justify-center flex-shrink-0">
                  <Lightbulb size={32} className="text-primary-foreground" />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                    Why Papa Trading Was Established
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Most traders lose due to lack of guidance. We created Papa Trading to give retail traders 
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
      <AnimatedSection className="py-20 gradient-card">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Mission */}
              <Card className="gradient-card border-border p-8 shadow-card hover:shadow-gold transition-all">
                <div className="space-y-6">
                  <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Target size={32} className="text-primary" />
                  </div>
                  <h3 className="text-3xl font-display font-bold">Our Mission</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Help people trade with confidence by simplifying complex trading concepts and 
                    sharing tested, effective strategies. We're committed to making professional 
                    trading education accessible to everyone, regardless of their background or 
                    experience level.
                  </p>
                </div>
              </Card>

              {/* Vision */}
              <Card className="gradient-card border-border p-8 shadow-card hover:shadow-gold transition-all">
                <div className="space-y-6">
                  <div className="w-16 h-16 rounded-xl bg-secondary/20 flex items-center justify-center">
                    <Eye size={32} className="text-secondary" />
                  </div>
                  <h3 className="text-3xl font-display font-bold">Our Vision</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
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
      <AnimatedSection className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                The <span className="text-primary">Papa Trading</span> Approach
              </h2>
              <p className="text-xl text-muted-foreground">
                What makes us different from the rest
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="gradient-card border-border p-8 shadow-card text-center">
                <div className="w-16 h-16 rounded-xl gradient-gold flex items-center justify-center mx-auto mb-6">
                  <Users size={32} className="text-primary-foreground" />
                </div>
                <h3 className="text-xl font-display font-bold mb-4">Community-Driven</h3>
                <p className="text-muted-foreground">
                  Join a supportive community of traders who share insights, strategies, and grow together.
                </p>
              </Card>

              <Card className="gradient-card border-border p-8 shadow-card text-center">
                <div className="w-16 h-16 rounded-xl gradient-gold flex items-center justify-center mx-auto mb-6">
                  <TrendingUp size={32} className="text-primary-foreground" />
                </div>
                <h3 className="text-xl font-display font-bold mb-4">Practical Learning</h3>
                <p className="text-muted-foreground">
                  No theory without practice. Every concept is backed by real market examples and live trading sessions.
                </p>
              </Card>

              <Card className="gradient-card border-border p-8 shadow-card text-center">
                <div className="w-16 h-16 rounded-xl gradient-gold flex items-center justify-center mx-auto mb-6">
                  <Award size={32} className="text-primary-foreground" />
                </div>
                <h3 className="text-xl font-display font-bold mb-4">Expert Guidance</h3>
                <p className="text-muted-foreground">
                  Learn from NISM certified analysts with years of real-world trading experience.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Final Message */}
      <AnimatedSection className="py-20 gradient-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Say Cheers to <span className="text-primary">FOMO</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              With Papa Trading, you don't just learn trading—you live it and grow with it. 
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
