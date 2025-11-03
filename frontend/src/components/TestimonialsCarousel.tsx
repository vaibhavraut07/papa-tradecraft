import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Card } from "@/components/ui/card";

interface Testimonial {
  name: string;
  role: string;
  location: string;
  rating: number;
  text: string;
  avatar: string;
  profit: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Rajesh Kumar",
    role: "Swing Trader",
    location: "Mumbai, Maharashtra",
    rating: 5,
    text: "Papa Trading's Pro Trend Indicator changed my trading completely. I went from guessing market direction to confidently identifying trends with 95% accuracy. In just 3 months, my win rate improved from 45% to 78%. The mentorship program taught me discipline and risk management that books never could.",
    avatar: "👨‍💼",
    profit: "+78% Win Rate"
  },
  {
    name: "Priya Sharma",
    role: "Intraday Trader",
    location: "Bangalore, Karnataka",
    rating: 5,
    text: "As a working professional, I needed tools that save time. The Scanner Suite delivers exactly that - it finds high-probability setups while I'm at my day job. I've made more in 2 months than my entire first year of trading. The early entry signals are pure gold!",
    avatar: "👩‍💻",
    profit: "+₹2.4L in 2 months"
  },
  {
    name: "Amit Patel",
    role: "Options Trader",
    location: "Ahmedabad, Gujarat",
    rating: 5,
    text: "I was skeptical about trading courses until I joined Papa Trading. The NISM-certified mentors explain complex strategies in simple terms. The live sessions, real trade analysis, and lifetime community support are worth every rupee. My portfolio grew 156% this year!",
    avatar: "🧑‍💼",
    profit: "+156% Returns"
  },
  {
    name: "Sneha Reddy",
    role: "Beginner Trader",
    location: "Hyderabad, Telangana",
    rating: 5,
    text: "I started with zero knowledge about trading. Papa Trading's mentorship took me from complete beginner to consistently profitable in 4 months. The Pro Trend Indicator's non-repainting signals gave me the confidence I needed. Now I trade part-time and earn more than my salary!",
    avatar: "👩‍🎓",
    profit: "Consistently Profitable"
  },
  {
    name: "Vikram Singh",
    role: "Positional Trader",
    location: "Delhi NCR",
    rating: 5,
    text: "The Scanner Suite's multi-bagger scanner helped me identify 3 stocks that gave 200%+ returns in 6 months. The combination of technical and fundamental filters is brilliant. Papa Trading isn't just about tools - it's about building a sustainable trading system.",
    avatar: "👨‍🏫",
    profit: "+200% on 3 stocks"
  },
  {
    name: "Ananya Iyer",
    role: "Swing Trader",
    location: "Chennai, Tamil Nadu",
    rating: 5,
    text: "What I love most is the post-purchase support. Every question is answered promptly. The custom alerts feature ensures I never miss opportunities. My trading has become systematic and stress-free. Highly recommend to anyone serious about trading!",
    avatar: "👩‍🔬",
    profit: "Stress-free Trading"
  }
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 45 : -45,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction < 0 ? 45 : -45,
    }),
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Decorative Quote */}
      <motion.div
        className="absolute -top-8 left-8 text-primary/20 z-0"
        animate={{ rotate: [0, 5, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <Quote size={100} />
      </motion.div>

      <div className="relative perspective-1000">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.3 },
              scale: { duration: 0.3 },
              rotateY: { duration: 0.5 },
            }}
            className="w-full"
          >
            <Card className="gradient-card border-border p-8 shadow-2xl">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Avatar Section */}
                <div className="flex-shrink-0 text-center md:text-left">
                  <motion.div
                    className="w-20 h-20 mx-auto md:mx-0 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-4xl shadow-gold"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {testimonials[currentIndex].avatar}
                  </motion.div>
                  <motion.div
                    className="mt-4 inline-block px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm font-semibold"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {testimonials[currentIndex].profit}
                  </motion.div>
                </div>

                {/* Content Section */}
                <div className="flex-1">
                  {/* Stars */}
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Star className="w-5 h-5 fill-primary text-primary" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <motion.p
                    className="text-muted-foreground leading-relaxed mb-4 text-sm md:text-base"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    "{testimonials[currentIndex].text}"
                  </motion.p>

                  {/* Author Info */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <p className="font-bold text-foreground">{testimonials[currentIndex].name}</p>
                    <p className="text-sm text-primary">{testimonials[currentIndex].role}</p>
                    <p className="text-xs text-muted-foreground">{testimonials[currentIndex].location}</p>
                  </motion.div>
                </div>
              </div>
            </Card>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <motion.button
            onClick={handlePrevious}
            className="w-12 h-12 rounded-full bg-card border border-border shadow-lg flex items-center justify-center hover:bg-primary/10 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="text-primary" />
          </motion.button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-8 bg-primary"
                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>

          <motion.button
            onClick={handleNext}
            className="w-12 h-12 rounded-full bg-card border border-border shadow-lg flex items-center justify-center hover:bg-primary/10 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="text-primary" />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;