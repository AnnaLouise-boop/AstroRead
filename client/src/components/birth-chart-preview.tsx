import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function BirthChartPreview() {
  const chartData = [
    {
      title: "Sun Sign Analysis",
      planet: "Sun in Scorpio",
      house: "8th House",
      description: "Your core identity is deeply transformative and intuitive. You possess intense emotional depth and natural investigative abilities."
    },
    {
      title: "Rising Sign",
      planet: "Virgo Rising",
      house: "1st House",
      description: "You present yourself as practical, analytical, and detail-oriented. Others see you as reliable and helpful."
    },
    {
      title: "Moon Sign",
      planet: "Cancer Moon",
      house: "11th House",
      description: "Your emotional nature is nurturing and protective. You find comfort in family and close friendships."
    }
  ];

  return (
    <div className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4 bg-gradient-to-r from-celestial-300 to-mystical-300 bg-clip-text text-transparent">
            Your Cosmic Birth Chart
          </h2>
          <p className="text-cosmic-300 text-lg max-w-2xl mx-auto">
            A detailed map of the heavens at the moment of your birth, revealing your unique celestial blueprint
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Birth Chart Visualization */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1494022299300-899b96e49893?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600" 
              alt="Detailed astrological birth chart with planetary positions" 
              className="w-full max-w-lg mx-auto rounded-2xl border-4 border-celestial-400/30 shadow-2xl" 
            />
            
            {/* Interactive Overlay Elements */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-8 h-8 bg-celestial-400 rounded-full animate-pulse shadow-lg"></div>
            </div>
            
            {/* Planet Position Indicators */}
            <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-mystical-400 rounded-full animate-twinkle"></div>
            <div className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-celestial-500 rounded-full animate-twinkle" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute top-1/3 left-1/3 w-5 h-5 bg-mystical-300 rounded-full animate-twinkle" style={{ animationDelay: '1s' }}></div>
          </div>

          {/* Chart Interpretation */}
          <div className="space-y-6">
            {chartData.map((item, index) => (
              <Card key={index} className="bg-cosmic-900/50 backdrop-blur-sm border-mystical-500/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-celestial-300 mb-4">{item.title}</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-cosmic-200">{item.planet}</span>
                      <span className="text-mystical-400">{item.house}</span>
                    </div>
                    <p className="text-cosmic-300 text-sm">
                      {item.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Button className="w-full bg-gradient-to-r from-mystical-600 to-mystical-800 hover:from-mystical-500 hover:to-mystical-700 text-white">
              Get Full Chart Reading
            </Button>
          </div>
        </div>

        {/* Additional Chart Information */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <Card className="bg-cosmic-900/50 backdrop-blur-sm border-mystical-500/20">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-celestial-400 to-mystical-500 rounded-full flex items-center justify-center">
                <span className="text-white text-2xl">☽</span>
              </div>
              <h3 className="text-lg font-serif font-semibold text-celestial-300 mb-2">Lunar Phases</h3>
              <p className="text-cosmic-400 text-sm">
                Track the moon's influence on your emotional cycles and manifestation power.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-cosmic-900/50 backdrop-blur-sm border-mystical-500/20">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-celestial-400 to-mystical-500 rounded-full flex items-center justify-center">
                <span className="text-white text-2xl">☿</span>
              </div>
              <h3 className="text-lg font-serif font-semibold text-celestial-300 mb-2">Planetary Transits</h3>
              <p className="text-cosmic-400 text-sm">
                Understand how current planetary movements affect your personal astrology.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-cosmic-900/50 backdrop-blur-sm border-mystical-500/20">
            <CardContent className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-celestial-400 to-mystical-500 rounded-full flex items-center justify-center">
                <span className="text-white text-2xl">♃</span>
              </div>
              <h3 className="text-lg font-serif font-semibold text-celestial-300 mb-2">Future Forecasts</h3>
              <p className="text-cosmic-400 text-sm">
                Discover upcoming opportunities and challenges written in the stars.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
