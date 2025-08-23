import { useEffect, useState } from "react";

interface Particle {
  id: number;
  duration: number;
  delay: number;
  top: number;
  size: number;
}

export default function FloatingParticles() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Create initial particles
    const initialParticles: Particle[] = [
      { id: 1, duration: 25, delay: 0, top: 20, size: 1 },
      { id: 2, duration: 30, delay: 5, top: 60, size: 2 },
      { id: 3, duration: 20, delay: 10, top: 80, size: 1.5 },
      { id: 4, duration: 35, delay: 15, top: 40, size: 1 },
    ];
    setParticles(initialParticles);

    // Create new particles periodically
    const interval = setInterval(() => {
      const newParticle: Particle = {
        id: Date.now(),
        duration: 20 + Math.random() * 20,
        delay: Math.random() * 5,
        top: Math.random() * 100,
        size: 0.5 + Math.random() * 1.5,
      };

      setParticles(prev => [...prev, newParticle]);

      // Remove particle after animation
      setTimeout(() => {
        setParticles(prev => prev.filter(p => p.id !== newParticle.id));
      }, 45000);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="floating-particles">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            width: `${particle.size * 4}px`,
            height: `${particle.size * 4}px`,
            top: `${particle.top}%`,
            left: '-5%',
            '--duration': `${particle.duration}s`,
            '--delay': `${particle.delay}s`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
