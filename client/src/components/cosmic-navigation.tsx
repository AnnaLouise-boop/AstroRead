import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function CosmicNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-cosmic-950/70 border-b border-mystical-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-celestial-400 to-mystical-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">✦</span>
            </div>
            <h1 className="text-xl font-serif font-bold bg-gradient-to-r from-celestial-400 to-mystical-400 bg-clip-text text-transparent">
              Cosmic Astrology
            </h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('consultation')}
              className="text-cosmic-200 hover:text-celestial-400 transition-colors"
            >
              Consultation
            </button>
            <button 
              onClick={() => scrollToSection('zodiac')}
              className="text-cosmic-200 hover:text-celestial-400 transition-colors"
            >
              Zodiac Wheel
            </button>
            <button 
              onClick={() => scrollToSection('birth-chart')}
              className="text-cosmic-200 hover:text-celestial-400 transition-colors"
            >
              Birth Chart
            </button>
            <button 
              onClick={() => scrollToSection('booking')}
              className="bg-gradient-to-r from-mystical-600 to-mystical-800 px-4 py-2 rounded-full text-sm font-medium hover:from-mystical-500 hover:to-mystical-700 transition-all duration-300 transform hover:scale-105"
            >
              Book Reading
            </button>
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-cosmic-200 hover:text-white"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-cosmic-900/90 backdrop-blur-sm rounded-lg mt-2">
              <button
                onClick={() => scrollToSection('consultation')}
                className="block px-3 py-2 text-cosmic-200 hover:text-celestial-400 transition-colors w-full text-left"
              >
                Consultation
              </button>
              <button
                onClick={() => scrollToSection('zodiac')}
                className="block px-3 py-2 text-cosmic-200 hover:text-celestial-400 transition-colors w-full text-left"
              >
                Zodiac Wheel
              </button>
              <button
                onClick={() => scrollToSection('birth-chart')}
                className="block px-3 py-2 text-cosmic-200 hover:text-celestial-400 transition-colors w-full text-left"
              >
                Birth Chart
              </button>
              <button
                onClick={() => scrollToSection('booking')}
                className="block px-3 py-2 text-cosmic-200 hover:text-celestial-400 transition-colors w-full text-left"
              >
                Book Reading
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
