import { Link } from "react-router-dom";
import { Mail, Phone, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-3 sm:px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/logo.png" 
                alt="PAPA TRADING Logo" 
                className="h-8 sm:h-10 w-auto"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = `
                      <div class="w-8 h-8 sm:w-10 sm:h-10 rounded-lg gradient-peacock flex items-center justify-center font-display font-bold text-primary-foreground text-xs sm:text-sm">
                        PT
                      </div>
                      <span class="font-display font-bold text-base sm:text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        PAPA TRADING
                      </span>
                    `;
                  }
                }}
              />
              <span className="font-display font-bold text-base sm:text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hidden sm:block">
                PAPA TRADING
              </span>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground">
              India's most trusted mentorship and trading tools platform.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-sm sm:text-base text-foreground mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <Link to="/" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold text-sm sm:text-base text-foreground mb-3 sm:mb-4">Products</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <Link to="/mentorship-program" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                  Mentorship Program
                </Link>
              </li>
              <li>
                <Link to="/scanner-suite" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                  Scanner Suite
                </Link>
              </li>
              <li>
                <Link to="/pro-trend-indicator" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors">
                  Pro Trend Indicator
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-sm sm:text-base text-foreground mb-3 sm:mb-4">Contact</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start sm:items-center space-x-2 text-xs sm:text-sm text-muted-foreground">
                <Phone size={14} className="sm:w-4 sm:h-4 text-primary mt-0.5 sm:mt-0 flex-shrink-0" />
                <span className="break-all sm:break-normal">9594160434 / 9594160436</span>
              </li>
              <li className="flex items-start sm:items-center space-x-2 text-xs sm:text-sm text-muted-foreground">
                <Mail size={14} className="sm:w-4 sm:h-4 text-primary mt-0.5 sm:mt-0 flex-shrink-0" />
                <a href="mailto:support@papatrading.in" className="hover:text-primary transition-colors break-all">
                  support@papatrading.in
                </a>
              </li>
              <li className="flex items-center space-x-3 sm:space-x-4 mt-3 sm:mt-4">
                <a 
                  href="https://www.facebook.com/profile.php?id=61583531426141" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook size={18} className="sm:w-5 sm:h-5" />
                </a>
                <a 
                  href="https://www.instagram.com/papa4trading/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram size={18} className="sm:w-5 sm:h-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-6 md:mt-8 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
          <p className="text-xs sm:text-sm text-muted-foreground text-center md:text-left">
            © 2025 PAPA TRADING. All rights reserved.
          </p>
          <div className="flex space-x-3 md:space-x-4 text-xs sm:text-sm text-muted-foreground">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
