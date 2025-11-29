'use client';

import { useEffect, useRef, useState } from 'react';

const CLIENT_LOGOS = [
  { id: 1, name: 'PDO', color: 'from-blue-600 to-blue-800' },
  { id: 2, name: 'OXY', color: 'from-red-600 to-red-800' },
  { id: 3, name: 'Oman Gas', color: 'from-green-600 to-green-800' },
  { id: 4, name: 'MEDCO', color: 'from-purple-600 to-purple-800' },
  { id: 5, name: 'LT', color: 'from-orange-600 to-orange-800' },
  { id: 6, name: 'Galfar', color: 'from-teal-600 to-teal-800' },
  { id: 7, name: 'Al Turki', color: 'from-indigo-600 to-indigo-800' },
  { id: 8, name: 'ORPIC', color: 'from-pink-600 to-pink-800' },
];

export default function ClientsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const handleScrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const row1 = [...CLIENT_LOGOS.slice(0, 4), ...CLIENT_LOGOS.slice(0, 4), ...CLIENT_LOGOS.slice(0, 4)];
  const row2 = [...CLIENT_LOGOS.slice(4, 8), ...CLIENT_LOGOS.slice(4, 8), ...CLIENT_LOGOS.slice(4, 8)];
  const row3 = [...CLIENT_LOGOS.slice(0, 4), ...CLIENT_LOGOS.slice(4, 8), ...CLIENT_LOGOS.slice(0, 4)];

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&display=swap');
        
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%);
          }
        }
        
        @keyframes scrollRight {
          0% {
            transform: translateX(-33.33%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }
        
        .scroll-left {
          animation: scrollLeft 40s linear infinite;
        }
        
        .scroll-right {
          animation: scrollRight 40s linear infinite;
        }
        
        .fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .shimmer {
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.2) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          background-size: 1000px 100%;
          animation: shimmer 3s infinite;
        }
        
        .logo-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .logo-card:hover {
          transform: translateY(-8px) scale(1.05);
        }
        
        .glass-effect {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
      `}</style>
      
      <section
        ref={sectionRef}
        className="relative py-24 sm:py-32 overflow-hidden bg-background"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iaHNsKDMzNSwgNDMsIDIxJSkvMTAiIHN0cm9rZS13aWR0aD0iMC4zIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header */}
          <div className={`mx-auto max-w-3xl text-center mb-20 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
            <div className="inline-block mb-4">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold text-primary-foreground shadow-lg bg-primary/80">
                <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                Trusted Partnerships
              </span>
            </div>
            
            <h2 
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 tracking-tight font-headline text-primary"
            >
              Our Esteemed
              <span className="block mt-2">
                Clients & Partners
              </span>
            </h2>
            
            <p className="text-xl leading-relaxed max-w-2xl mx-auto text-muted-foreground">
              Collaborating with industry leaders to deliver excellence, innovation, and lasting value across every project.
            </p>
          </div>
          
          {/* Three Row Slider Section */}
          <div className={`space-y-8 ${isVisible ? 'fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            {/* Row 1 - Scroll Left */}
            <div className="overflow-hidden py-4">
              <div className="flex scroll-left gap-6">
                {row1.map((logo, index) => (
                  <div
                    key={`row1-${index}`}
                    className="flex-shrink-0 w-72"
                  >
                    <div className="logo-card glass-effect rounded-2xl p-8 h-40 flex items-center justify-center group relative overflow-hidden shadow-2xl bg-white/40 backdrop-blur-md border border-primary/20">
                      <div className={`absolute inset-0 bg-gradient-to-br ${logo.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                      <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100"></div>
                      <h3 
                        className="text-3xl font-bold z-10 relative font-headline text-primary"
                      >
                        {logo.name}
                      </h3>
                      <div className="absolute -bottom-2 -right-2 w-24 h-24 rounded-full bg-primary/10 group-hover:scale-150 transition-transform duration-700"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Row 2 - Scroll Right */}
            <div className="overflow-hidden py-4">
              <div className="flex scroll-right gap-6">
                {row2.map((logo, index) => (
                  <div
                    key={`row2-${index}`}
                    className="flex-shrink-0 w-72"
                  >
                     <div className="logo-card glass-effect rounded-2xl p-8 h-40 flex items-center justify-center group relative overflow-hidden shadow-2xl bg-white/40 backdrop-blur-md border border-primary/20">
                      <div className={`absolute inset-0 bg-gradient-to-br ${logo.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                      <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100"></div>
                      <h3 
                        className="text-3xl font-bold z-10 relative font-headline text-primary"
                      >
                        {logo.name}
                      </h3>
                      <div className="absolute -top-2 -left-2 w-24 h-24 rounded-full bg-primary/10 group-hover:scale-150 transition-transform duration-700" ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Row 3 - Scroll Left */}
            <div className="overflow-hidden py-4">
              <div className="flex scroll-left gap-6">
                {row3.map((logo, index) => (
                  <div
                    key={`row3-${index}`}
                    className="flex-shrink-0 w-72"
                  >
                    <div className="logo-card glass-effect rounded-2xl p-8 h-40 flex items-center justify-center group relative overflow-hidden shadow-2xl bg-white/40 backdrop-blur-md border border-primary/20">
                      <div className={`absolute inset-0 bg-gradient-to-br ${logo.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                      <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100"></div>
                      <h3 
                        className="text-3xl font-bold z-10 relative font-headline text-primary"
                      >
                        {logo.name}
                      </h3>
                      <div className="absolute bottom-1/2 right-1/2 w-24 h-24 rounded-full bg-primary/10 group-hover:scale-150 transition-transform duration-700" ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Bottom CTA */}
          <div className={`text-center mt-20 ${isVisible ? 'fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            <p 
              className="text-2xl mb-8 font-headline text-primary"
            >
              Join our prestigious network of partners
            </p>
            <button 
              onClick={handleScrollToContact}
              className="group relative inline-flex items-center gap-3 px-8 py-4 text-primary-foreground font-semibold rounded-full shadow-2xl transition-all duration-300 hover:scale-105 bg-primary"
            >
              <span>Start Your Partnership</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
