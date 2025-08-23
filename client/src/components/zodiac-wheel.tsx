import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ZODIAC_SIGNS } from "@/lib/constants";

export default function ZodiacWheel() {
  const [selectedSign, setSelectedSign] = useState<string | null>(null);

  return (
    <div className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-serif font-bold mb-8 bg-gradient-to-r from-celestial-300 to-mystical-300 bg-clip-text text-transparent">
          Celestial Zodiac Wheel
        </h2>
        
        <div className="relative inline-block mb-16">
          <img 
            src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=600" 
            alt="Astronomical zodiac wheel with constellation patterns" 
            className="w-96 h-96 rounded-full object-cover mx-auto animate-constellation border-4 border-celestial-400/30" 
          />
          
          {/* Zodiac Sign Markers */}
          {ZODIAC_SIGNS.map((sign, index) => {
            const angle = (index * 30) - 90; // Start from top
            const radius = 220;
            const x = Math.cos(angle * Math.PI / 180) * radius;
            const y = Math.sin(angle * Math.PI / 180) * radius;
            
            return (
              <button
                key={sign.id}
                onClick={() => setSelectedSign(selectedSign === sign.id ? null : sign.id)}
                className="absolute w-16 h-16 bg-cosmic-800/80 rounded-full border-2 border-celestial-400 flex items-center justify-center backdrop-blur-sm hover:scale-110 transition-transform"
                style={{
                  left: `calc(50% + ${x}px - 32px)`,
                  top: `calc(50% + ${y}px - 32px)`,
                }}
              >
                <span className="text-celestial-400 text-2xl">{sign.symbol}</span>
              </button>
            );
          })}
          
          {/* Central cosmic core */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-celestial-400 to-mystical-500 rounded-full flex items-center justify-center shadow-2xl">
            <span className="text-white text-2xl">✦</span>
          </div>
        </div>
        
        {/* Zodiac Information Cards */}
        <div className="grid md:grid-cols-4 gap-6">
          {ZODIAC_SIGNS.slice(0, 4).map((sign) => (
            <Card 
              key={sign.id}
              className={`bg-cosmic-900/50 backdrop-blur-sm border-mystical-500/20 hover:border-celestial-400/40 transition-all cursor-pointer group ${
                selectedSign === sign.id ? 'border-celestial-400 bg-cosmic-800/70' : ''
              }`}
              onClick={() => setSelectedSign(selectedSign === sign.id ? null : sign.id)}
            >
              <CardContent className="p-6">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{sign.symbol}</div>
                <h3 className="font-serif font-semibold text-celestial-300 mb-2">{sign.name}</h3>
                <p className="text-cosmic-400 text-sm">{sign.element} • {sign.dates}</p>
                <p className="text-cosmic-300 text-xs mt-2">{sign.traits}</p>
                
                {selectedSign === sign.id && (
                  <div className="mt-4 pt-4 border-t border-mystical-500/30">
                    <p className="text-cosmic-200 text-sm">{sign.description}</p>
                    <div className="mt-3 space-y-1">
                      <p className="text-xs text-cosmic-400">
                        <span className="text-celestial-400">Ruling Planet:</span> {sign.rulingPlanet}
                      </p>
                      <p className="text-xs text-cosmic-400">
                        <span className="text-celestial-400">Quality:</span> {sign.quality}
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Show more signs if none selected */}
        {!selectedSign && (
          <div className="grid md:grid-cols-4 gap-6 mt-6">
            {ZODIAC_SIGNS.slice(4, 8).map((sign) => (
              <Card 
                key={sign.id}
                className="bg-cosmic-900/50 backdrop-blur-sm border-mystical-500/20 hover:border-celestial-400/40 transition-all cursor-pointer group"
                onClick={() => setSelectedSign(sign.id)}
              >
                <CardContent className="p-6">
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{sign.symbol}</div>
                  <h3 className="font-serif font-semibold text-celestial-300 mb-2">{sign.name}</h3>
                  <p className="text-cosmic-400 text-sm">{sign.element} • {sign.dates}</p>
                  <p className="text-cosmic-300 text-xs mt-2">{sign.traits}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
        
        {!selectedSign && (
          <div className="grid md:grid-cols-4 gap-6 mt-6">
            {ZODIAC_SIGNS.slice(8).map((sign) => (
              <Card 
                key={sign.id}
                className="bg-cosmic-900/50 backdrop-blur-sm border-mystical-500/20 hover:border-celestial-400/40 transition-all cursor-pointer group"
                onClick={() => setSelectedSign(sign.id)}
              >
                <CardContent className="p-6">
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">{sign.symbol}</div>
                  <h3 className="font-serif font-semibold text-celestial-300 mb-2">{sign.name}</h3>
                  <p className="text-cosmic-400 text-sm">{sign.element} • {sign.dates}</p>
                  <p className="text-cosmic-300 text-xs mt-2">{sign.traits}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
