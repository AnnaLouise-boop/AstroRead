import CosmicNavigation from "@/components/cosmic-navigation";
import FloatingParticles from "@/components/floating-particles";
import AstrologyIntakeForm from "@/components/astrology-intake-form";
import ZodiacWheel from "@/components/zodiac-wheel";
import BirthChartPreview from "@/components/birth-chart-preview";
import BookingSystem from "@/components/booking-system";

export default function Home() {
  return (
    <div className="relative min-h-screen text-white overflow-x-hidden">
      <FloatingParticles />
      <CosmicNavigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 nebula-overlay constellation-bg"></div>
        
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-mystical-500/20 to-celestial-500/20 rounded-full blur-3xl animate-pulse-glow"></div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="mb-8 relative inline-block">
            <img 
              src="https://images.unsplash.com/photo-1446776877081-d282a0f896e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300" 
              alt="Cosmic portal with swirling galaxies" 
              className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-celestial-400/50 animate-float shadow-2xl" 
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent to-mystical-500/30"></div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 bg-gradient-to-r from-celestial-300 via-mystical-300 to-celestial-300 bg-clip-text text-transparent animate-float">
            Unlock Your Cosmic Destiny
          </h1>
          
          <p className="text-xl md:text-2xl text-cosmic-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover the profound wisdom of the stars and planets that shape your unique celestial blueprint
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-celestial-500 to-celestial-600 px-8 py-4 rounded-full text-lg font-semibold text-cosmic-950 hover:from-celestial-400 hover:to-celestial-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-celestial-500/25"
            >
              Begin Your Journey
            </button>
            <button 
              onClick={() => document.getElementById('zodiac')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-mystical-400 px-8 py-4 rounded-full text-lg font-semibold text-mystical-300 hover:bg-mystical-400/10 transition-all duration-300"
            >
              Explore Features
            </button>
          </div>
        </div>
      </section>

      {/* Astrology Intake Form */}
      <section id="consultation">
        <AstrologyIntakeForm />
      </section>

      {/* Zodiac Wheel */}
      <section id="zodiac">
        <ZodiacWheel />
      </section>

      {/* Birth Chart Preview */}
      <section id="birth-chart">
        <BirthChartPreview />
      </section>

      {/* Booking System */}
      <section id="booking">
        <BookingSystem />
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 border-t border-mystical-500/20 relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-celestial-400 to-mystical-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">✦</span>
                </div>
                <h3 className="text-xl font-serif font-bold text-celestial-300">Cosmic Astrology</h3>
              </div>
              <p className="text-cosmic-400 text-sm mb-4">
                Unlocking the mysteries of the cosmos through personalized astrological guidance and cosmic wisdom.
              </p>
              <div className="flex space-x-3">
                <a href="#" className="w-8 h-8 bg-cosmic-800 rounded-full flex items-center justify-center hover:bg-mystical-600 transition-colors">
                  <span className="text-cosmic-300 text-sm">f</span>
                </a>
                <a href="#" className="w-8 h-8 bg-cosmic-800 rounded-full flex items-center justify-center hover:bg-mystical-600 transition-colors">
                  <span className="text-cosmic-300 text-sm">t</span>
                </a>
                <a href="#" className="w-8 h-8 bg-cosmic-800 rounded-full flex items-center justify-center hover:bg-mystical-600 transition-colors">
                  <span className="text-cosmic-300 text-sm">i</span>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-cosmic-200 mb-4">Services</h4>
              <ul className="space-y-2 text-cosmic-400 text-sm">
                <li><a href="#" className="hover:text-celestial-400 transition-colors">Birth Chart Reading</a></li>
                <li><a href="#" className="hover:text-celestial-400 transition-colors">Relationship Compatibility</a></li>
                <li><a href="#" className="hover:text-celestial-400 transition-colors">Career Guidance</a></li>
                <li><a href="#" className="hover:text-celestial-400 transition-colors">Annual Forecast</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-cosmic-200 mb-4">Resources</h4>
              <ul className="space-y-2 text-cosmic-400 text-sm">
                <li><a href="#" className="hover:text-celestial-400 transition-colors">Zodiac Guide</a></li>
                <li><a href="#" className="hover:text-celestial-400 transition-colors">Planetary Meanings</a></li>
                <li><a href="#" className="hover:text-celestial-400 transition-colors">Astrology Blog</a></li>
                <li><a href="#" className="hover:text-celestial-400 transition-colors">Moon Phases</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-cosmic-200 mb-4">Contact</h4>
              <ul className="space-y-2 text-cosmic-400 text-sm">
                <li>support@cosmicastrology.com</li>
                <li>+1 (555) 123-STAR</li>
                <li>Available daily 9AM-9PM PST</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-mystical-500/20 pt-8 text-center">
            <p className="text-cosmic-400 text-sm">
              © 2024 Cosmic Astrology. The stars guide, but you choose your path.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
