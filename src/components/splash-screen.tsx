'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface SplashScreenProps {
  isFinishing: boolean;
}

export default function SplashScreen({ isFinishing }: SplashScreenProps) {
  const [showContent, setShowContent] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setShowContent(true);
    
    // Simulated loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap');
        
        @keyframes fadeInScale {
          0% {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
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
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        
        @keyframes ripple {
          0% {
            transform: scale(0.8);
            opacity: 0.8;
          }
          100% {
            transform: scale(2.5);
            opacity: 0;
          }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInScale {
          animation: fadeInScale 1s ease-out forwards;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-shimmer {
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.3) 50%,
            transparent 100%
          );
          background-size: 1000px 100%;
          animation: shimmer 2s infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .animate-ripple {
          animation: ripple 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        
        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle at center, rgba(59, 130, 246, 0.1) 0%, transparent 70%);
        }
        
        .progress-bar {
          transition: width 0.3s ease-out;
        }
      `}</style>
      
      <div
        className={`fixed inset-0 z-[100] flex flex-col items-center justify-center transition-opacity duration-1000 ease-out ${
          isFinishing ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          pointerEvents: isFinishing ? 'none' : 'auto',
          background: 'linear-gradient(135deg, #f4e9ec 0%, #ffffff 50%, #e9d3d9 100%)',
        }}
      >
        {/* Animated background circles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow" style={{ backgroundColor: '#e9d3d9' }}></div>
          <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow" style={{ backgroundColor: '#f4e9ec', animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-slow" style={{ backgroundColor: '#e9d3d9', animationDelay: '2s' }}></div>
        </div>

        {/* Ripple effect behind logo */}
        <div className="absolute">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-2 opacity-30 animate-ripple" style={{ borderColor: '#e9d3d9' }}></div>
          <div className="absolute inset-0 w-64 h-64 md:w-80 md:h-80 rounded-full border-2 opacity-40 animate-ripple" style={{ borderColor: '#e9d3d9', animationDelay: '0.5s' }}></div>
          <div className="absolute inset-0 w-64 h-64 md:w-80 md:h-80 rounded-full border-2 opacity-50 animate-ripple" style={{ borderColor: '#e9d3d9', animationDelay: '1s' }}></div>
        </div>

        {/* Main content */}
        <div className={`relative z-10 ${showContent ? 'animate-fadeInScale' : 'opacity-0'}`}>
          {/* Logo container with floating animation */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto animate-float">
            <div className="absolute inset-0 bg-gradient-radial"></div>
            <div className="relative w-full h-full rounded-full bg-white shadow-2xl flex items-center justify-center overflow-hidden">
              {/* Shimmer effect overlay */}
              <div className="absolute inset-0 animate-shimmer"></div>
              <Image
                src="/logog.png"
                alt="Global Petrotech SPC Logo"
                width={280}
                height={280}
                className="object-contain relative z-10 p-8"
                priority
              />
            </div>
          </div>

          {/* Company name with slide up animation */}
          <div className={`text-center mt-8 ${showContent ? 'animate-slideUp' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text" style={{ 
              fontFamily: "'Playfair Display', serif",
              backgroundImage: 'linear-gradient(135deg, #e9d3d9 0%, #8b5a6a 50%, #e9d3d9 100%)',
            }}>
              Global Petrotech SPC
            </h1>
            <p className="text-gray-700 mt-2 text-sm md:text-base font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
              Excellence in Petroleum Solutions
            </p>
          </div>

          {/* Loading bar with animation */}
          <div className={`mt-8 w-64 md:w-80 ${showContent ? 'animate-slideUp' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
            <div className="h-1 rounded-full overflow-hidden" style={{ backgroundColor: '#f4e9ec' }}>
              <div 
                className="h-full progress-bar rounded-full"
                style={{ 
                  width: `${progress}%`,
                  backgroundImage: 'linear-gradient(90deg, #e9d3d9 0%, #c49aa8 50%, #e9d3d9 100%)',
                }}
              ></div>
            </div>
            <p className="text-center text-xs text-gray-600 mt-2 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
              Loading... {progress}%
            </p>
          </div>
        </div>

        {/* Decorative dots */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex gap-2">
          <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#e9d3d9' }}></div>
          <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#c49aa8', animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#e9d3d9', animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </>
  );
}