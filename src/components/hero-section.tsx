'use client';

import { useState, useEffect, useMemo } from 'react';

const slogans = [
  "Engineering Excellence",
  "Building the Future",
  "Integrated Solutions",
  "Sustainable Growth",
  "Trusted Partnership",
  "Innovation & Precision",
  "100% Omani Owned",
  "Complete EPC Solutions"
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % slogans.length);
        setIsVisible(true);
      }, 500);
    }, 3000);
    
    const handleMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    window.addEventListener('mousemove', handleMove);

    return () => {
      clearInterval(interval);
      window.removeEventListener('mousemove', handleMove);
    };
  }, []);

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const particles = useMemo(() => 
    Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      width: `${1 + Math.random() * 3}px`,
      height: `${1 + Math.random() * 3}px`,
      opacity: 0.3 + Math.random() * 0.5,
      animationDuration: `${8 + Math.random() * 12}s`,
      animationDelay: `${Math.random() * 5}s`
    }))
  , []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <iframe
          className="absolute top-1/2 left-1/2 w-[120vw] h-[120vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          src="https://www.youtube.com/embed/wKCFFwuItmE?autoplay=1&mute=0&loop=1&playlist=wKCFFwuItmE&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1"
          title="Background"
          frameBorder="0"
          allow="autoplay; encrypted-media"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 z-10 overflow-hidden">
        {particles.map((p) => (
          <div
            key={p.id}
            className="absolute rounded-full bg-white"
            style={{
              left: p.left,
              top: p.top,
              width: p.width,
              height: p.height,
              opacity: p.opacity,
              animation: `float ${p.animationDuration} ease-in-out infinite`,
              animationDelay: p.animationDelay
            }}
          />
        ))}
      </div>

      {/* Glowing Orbs with Parallax */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none transition-transform duration-700"
        style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{ backgroundColor: 'rgba(147, 36, 69, 0.15)' }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl animate-pulse" style={{ backgroundColor: 'rgba(147, 36, 69, 0.1)', animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Main Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center px-4">
        
        {/* Badge */}
        <div className="mb-8 animate-fadeIn">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 shadow-2xl">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400" />
            </span>
            <span className="text-white font-medium tracking-wide text-sm">🏆 Industry Leaders Since 1995</span>
          </div>
        </div>

        {/* Company Name - Premium Single Line Look */}
        <h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white text-center mb-6 tracking-tight animate-fadeIn"
          style={{ 
            fontFamily: "'Playfair Display', serif",
            textShadow: '0 4px 15px rgba(0,0,0,0.4)',
          }}
        >
          Global Petrotech SPC
        </h1>

        {/* Decorative Line */}
        <div className="w-32 h-1 mb-8 rounded-full" style={{ background: 'linear-gradient(90deg, transparent, #932445, #fcd34d, #932445, transparent)' }} />

        {/* Animated Slogan */}
        <div className="h-20 md:h-24 flex items-center justify-center mb-8 overflow-hidden">
          <div
            className={`transition-all duration-500 ease-out ${
              isVisible 
                ? 'opacity-100 transform translate-y-0 scale-100' 
                : 'opacity-0 transform translate-y-8 scale-95'
            }`}
          >
            <p 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center"
              style={{ 
                fontFamily: "'Playfair Display', serif",
                background: 'linear-gradient(90deg, #fff, #fcd34d, #fff)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
                textShadow: '0 0 40px rgba(252, 211, 77, 0.4)',
                animation: 'glow 2s ease-in-out infinite'
              }}
            >
              {slogans[currentIndex]}
            </p>
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-white/70 text-center max-w-2xl mb-10 font-light tracking-wide">
          Transforming visions into reality with innovation, precision, and sustainability
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <button 
            onClick={() => handleScrollTo('projects')}
            className="group relative px-8 py-4 text-white font-bold rounded-full overflow-hidden shadow-2xl transition-all duration-300 hover:scale-105"
            style={{ 
              background: 'linear-gradient(135deg, #932445 0%, #b83d5e 50%, #932445 100%)',
              boxShadow: '0 10px 40px rgba(147, 36, 69, 0.4), 0 0 20px rgba(147, 36, 69, 0.2)'
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore Projects
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ background: 'linear-gradient(135deg, #b83d5e 0%, #d4627f 50%, #b83d5e 100%)' }}
            />
          </button>
          
          <button 
            onClick={() => handleScrollTo('contact')}
            className="px-8 py-4 border-2 text-white font-semibold rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105"
            style={{ 
              borderColor: 'rgba(147, 36, 69, 0.6)',
              background: 'rgba(147, 36, 69, 0.1)'
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.background = '#932445';
              (e.target as HTMLElement).style.borderColor = '#932445';
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.background = 'rgba(147, 36, 69, 0.1)';
              (e.target as HTMLElement).style.borderColor = 'rgba(147, 36, 69, 0.6)';
            }}
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30">
        <div className="flex flex-col items-center gap-2 animate-bounce">
          <span className="text-white/50 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center p-1.5 backdrop-blur-sm">
            <div className="w-1.5 h-3 bg-white/80 rounded-full animate-scrollDot" />
          </div>
        </div>
      </div>

      {/* Google Font Import */}
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-40px) translateX(-10px); }
          75% { transform: translateY(-20px) translateX(15px); }
        }
        @keyframes glow {
          0%, 100% { filter: drop-shadow(0 0 20px rgba(252, 211, 77, 0.3)); }
          50% { filter: drop-shadow(0 0 40px rgba(252, 211, 77, 0.6)); }
        }
        @keyframes scrollDot {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(16px); opacity: 0; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-scrollDot { animation: scrollDot 1.5s ease-in-out infinite; }
        .animate-fadeIn { animation: fadeIn 1s ease-out forwards; }
      `}</style>
    </div>
  );
}
