import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-card/95 backdrop-blur-lg shadow-card" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 rounded-lg gradient-gold flex items-center justify-center font-display font-bold text-primary-foreground">
              PT
            </div>
            <span className="font-display font-bold text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Papa Trading
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/">
              <Button
                variant="ghost"
                className={`${isActive("/") ? "text-primary" : "text-foreground/80 hover:text-foreground"}`}
              >
                Home
              </Button>
            </Link>
            <Link to="/about">
              <Button
                variant="ghost"
                className={`${isActive("/about") ? "text-primary" : "text-foreground/80 hover:text-foreground"}`}
              >
                About Us
              </Button>
            </Link>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-muted">
                    Products & Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-card border-border">
                    <ul className="grid w-[400px] gap-3 p-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/scanner-suite"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-accent-foreground focus:bg-muted focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Scanner Suite</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Complete stock discovery system for intraday & swing trading
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/pro-trend-indicator"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-accent-foreground focus:bg-muted focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Pro Trend Indicator</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Advanced trend detection for precise trading decisions
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link to="/contact">
              <Button
                variant="ghost"
                className={`${isActive("/contact") ? "text-primary" : "text-foreground/80 hover:text-foreground"}`}
              >
                Contact Us
              </Button>
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="gradient-gold text-primary-foreground font-semibold shadow-gold hover:scale-105 transition-transform">
              Join Mentorship
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-2 pb-4">
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                Home
              </Button>
            </Link>
            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                About Us
              </Button>
            </Link>
            <div className="space-y-2 pl-4">
              <Link to="/scanner-suite" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="ghost" className="w-full justify-start text-sm">
                  Scanner Suite
                </Button>
              </Link>
              <Link to="/pro-trend-indicator" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="ghost" className="w-full justify-start text-sm">
                  Pro Trend Indicator
                </Button>
              </Link>
            </div>
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                Contact Us
              </Button>
            </Link>
            <Button className="w-full gradient-gold text-primary-foreground font-semibold">
              Join Mentorship
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
