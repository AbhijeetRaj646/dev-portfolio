import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Info, RotateCcw, Zap, Globe } from 'lucide-react';

interface Planet {
  name: string;
  size: number;
  distance: number;
  speed: number;
  color: string;
  info: string;
  moons?: string[];
  temperature: string;
  facts: string[];
}

const planets: Planet[] = [
  {
    name: 'Mercury',
    size: 8,
    distance: 80,
    speed: 0.02,
    color: 'bg-gradient-to-br from-orange-400 to-orange-600',
    temperature: '427°C',
    info: 'The smallest planet and closest to the Sun',
    facts: ['Shortest year: 88 Earth days', 'No atmosphere', 'Temperature swings from 427°C to -173°C']
  },
  {
    name: 'Venus',
    size: 12,
    distance: 110,
    speed: 0.015,
    color: 'bg-gradient-to-br from-yellow-300 to-orange-400',
    temperature: '462°C',
    info: 'The hottest planet with a toxic atmosphere',
    facts: ['Hottest planet in solar system', 'Day longer than year', 'Spins backwards']
  },
  {
    name: 'Earth',
    size: 14,
    distance: 140,
    speed: 0.01,
    color: 'bg-gradient-to-br from-blue-400 to-green-400',
    temperature: '15°C',
    info: 'Our beautiful home planet',
    moons: ['Moon'],
    facts: ['Only known planet with life', '71% covered by water', 'Has one large moon']
  },
  {
    name: 'Mars',
    size: 10,
    distance: 170,
    speed: 0.008,
    color: 'bg-gradient-to-br from-red-500 to-red-700',
    temperature: '-65°C',
    info: 'The Red Planet with polar ice caps',
    moons: ['Phobos', 'Deimos'],
    facts: ['Has the largest volcano in solar system', 'Day similar to Earth (24.6 hours)', 'Two small moons']
  },
  {
    name: 'Jupiter',
    size: 28,
    distance: 220,
    speed: 0.005,
    color: 'bg-gradient-to-br from-orange-300 to-yellow-600',
    temperature: '-110°C',
    info: 'The largest planet with a Great Red Spot',
    moons: ['Europa', 'Io', 'Ganymede', 'Callisto'],
    facts: ['Largest planet in solar system', 'Great Red Spot is a giant storm', 'Has 95 known moons']
  },
  {
    name: 'Saturn',
    size: 24,
    distance: 280,
    speed: 0.003,
    color: 'bg-gradient-to-br from-yellow-200 to-orange-300',
    temperature: '-140°C',
    info: 'The ringed planet with beautiful ice rings',
    moons: ['Titan', 'Enceladus'],
    facts: ['Famous for its ring system', 'Less dense than water', 'Has 146 known moons']
  },
  {
    name: 'Uranus',
    size: 18,
    distance: 330,
    speed: 0.002,
    color: 'bg-gradient-to-br from-cyan-400 to-blue-500',
    temperature: '-195°C',
    info: 'The tilted ice giant',
    facts: ['Spins on its side', 'Coldest planetary atmosphere', 'Has faint rings']
  },
  {
    name: 'Neptune',
    size: 17,
    distance: 380,
    speed: 0.001,
    color: 'bg-gradient-to-br from-blue-600 to-blue-800',
    temperature: '-200°C',
    info: 'The windiest planet with supersonic winds',
    facts: ['Windiest planet (2,100 km/h)', 'Takes 165 Earth years to orbit Sun', 'Deep blue color from methane']
  }
];

const SolarSystemExplorer: React.FC = () => {
  const [selectedPlanet, setSelectedPlanet] = useState<Planet | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [speed, setSpeed] = useState(1);
  const [showOrbits, setShowOrbits] = useState(true);
  const [time, setTime] = useState(0);
  const animationRef = useRef<number>();

  useEffect(() => {
    const animate = () => {
      if (isPlaying) {
        setTime(prev => prev + speed);
      }
      animationRef.current = requestAnimationFrame(animate);
    };
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPlaying, speed]);

  const getPlanetPosition = (planet: Planet) => {
    const angle = time * planet.speed;
    const x = Math.cos(angle) * planet.distance;
    const y = Math.sin(angle) * planet.distance * 0.3; // Elliptical orbit
    return { x, y };
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-black">
      {/* Animated stars background */}
      <div className="absolute inset-0">
        {[...Array(200)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-20 p-4 bg-gradient-to-b from-black/50 to-transparent">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="flex items-center gap-3">
            <Sparkles className="w-8 h-8 text-yellow-400" />
            <h1 className="text-2xl sm:text-3xl font-bold text-white">
              Solar System Explorer
            </h1>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center gap-2"
            >
              {isPlaying ? 'Pause' : 'Play'}
            </button>
            
            <button
              onClick={() => setShowOrbits(!showOrbits)}
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors flex items-center gap-2"
            >
              <Globe className="w-4 h-4" />
              Orbits
            </button>
            
            <select
              value={speed}
              onChange={(e) => setSpeed(Number(e.target.value))}
              className="px-3 py-2 bg-gray-800 text-white rounded-lg"
            >
              <option value={0.5}>0.5x Speed</option>
              <option value={1}>1x Speed</option>
              <option value={2}>2x Speed</option>
              <option value={5}>5x Speed</option>
            </select>
          </div>
        </div>
      </div>

      {/* Solar System */}
      <div className="relative w-full h-full flex items-center justify-center">
        <div className="relative" style={{ transform: 'scale(0.8)' }}>
          {/* Orbit paths */}
          {showOrbits && planets.map((planet) => (
            <div
              key={`orbit-${planet.name}`}
              className="absolute border border-white/20 rounded-full"
              style={{
                width: `${planet.distance * 2}px`,
                height: `${planet.distance * 2 * 0.3}px`,
                left: `${-planet.distance}px`,
                top: `${-planet.distance * 0.3}px`,
                transform: 'translate(-50%, -50%)'
              }}
            />
          ))}

          {/* Sun */}
          <div className="absolute w-16 h-16 bg-gradient-to-br from-yellow-300 via-orange-400 to-red-500 rounded-full animate-pulse shadow-2xl shadow-yellow-400/50 transform -translate-x-1/2 -translate-y-1/2">
            <div className="absolute inset-2 bg-gradient-to-br from-yellow-200 to-orange-300 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
          </div>

          {/* Planets */}
          {planets.map((planet) => {
            const position = getPlanetPosition(planet);
            return (
              <div
                key={planet.name}
                className="absolute cursor-pointer group transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200 hover:scale-110"
                style={{
                  left: `${position.x}px`,
                  top: `${position.y}px`,
                }}
                onClick={() => setSelectedPlanet(planet)}
              >
                <div
                  className={`${planet.color} rounded-full shadow-lg group-hover:shadow-xl transition-all duration-200 relative overflow-hidden`}
                  style={{
                    width: `${planet.size}px`,
                    height: `${planet.size}px`,
                  }}
                >
                  {/* Planet surface animation */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                  
                  {/* Saturn's rings */}
                  {planet.name === 'Saturn' && (
                    <>
                      <div className="absolute top-1/2 left-1/2 w-8 h-8 border-2 border-orange-200 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
                      <div className="absolute top-1/2 left-1/2 w-10 h-10 border border-orange-300 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
                    </>
                  )}
                </div>
                
                {/* Planet name label */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-black/80 text-white px-2 py-1 rounded text-xs whitespace-nowrap">
                    {planet.name}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Planet Information Panel */}
      {selectedPlanet && (
        <div className="absolute inset-x-4 bottom-4 sm:right-4 sm:left-auto sm:w-96 bg-black/90 backdrop-blur-lg rounded-xl p-6 text-white border border-white/20 z-30">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-bold text-yellow-400">{selectedPlanet.name}</h3>
            <button
              onClick={() => setSelectedPlanet(null)}
              className="text-gray-400 hover:text-white transition-colors text-xl"
            >
              ×
            </button>
          </div>
          
          <p className="text-gray-300 mb-4">{selectedPlanet.info}</p>
          
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-400">Temperature:</span>
              <span className="text-orange-400">{selectedPlanet.temperature}</span>
            </div>
            
            {selectedPlanet.moons && (
              <div>
                <span className="text-gray-400">Major Moons:</span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {selectedPlanet.moons.map((moon) => (
                    <span key={moon} className="bg-blue-600 px-2 py-1 rounded text-xs">
                      {moon}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            <div>
              <span className="text-gray-400 block mb-2">Fun Facts:</span>
              <ul className="space-y-1 text-sm">
                {selectedPlanet.facts.map((fact, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Zap className="w-3 h-3 text-yellow-400 mt-1 flex-shrink-0" />
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Instructions */}
      <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm rounded-lg p-3 text-white text-sm max-w-xs">
        <div className="flex items-center gap-2 mb-2">
          <Info className="w-4 h-4 text-blue-400" />
          <span className="font-semibold">How to explore:</span>
        </div>
        <ul className="space-y-1 text-xs text-gray-300">
          <li>• Click on any planet to learn more</li>
          <li>• Use controls to pause/resume animation</li>
          <li>• Adjust speed for better viewing</li>
          <li>• Toggle orbit paths on/off</li>
        </ul>
      </div>
    </div>
  );
};

export default SolarSystemExplorer;