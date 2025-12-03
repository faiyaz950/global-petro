'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Award, Trophy, Star, Sparkles } from 'lucide-react';

const CERTIFICATES = [
  { id: 1, image: '/certiones.png', alt: 'Certificate 1' },
  { id: 2, image: '/certitwo.png', alt: 'Certificate 2' },
  { id: 3, image: '/certithree.png', alt: 'Certificate 3' },
  { id: 4, image: '/certifour.png', alt: 'Certificate 4' },
  { id: 5, image: '/certifive.png', alt: 'Certificate 5' },
  { id: 6, image: '/certisix.png', alt: 'Certificate 6' },
  { id: 7, image: '/certiseven.png', alt: 'Certificate 7' },
  { id: 8, image: '/certieight.png', alt: 'Certificate 8' },
];

export default function AchievementsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600&display=swap');

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

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
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

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-scale-in {
          animation: scaleIn 0.6s ease-out forwards;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .certificate-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .certificate-card:hover {
          transform: translateY(-12px) scale(1.05);
          box-shadow: 0 20px 40px rgba(147, 36, 69, 0.3);
        }

        .shimmer-effect {
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.3) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          background-size: 1000px 100%;
          animation: shimmer 3s infinite;
        }

        .glass-effect {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
      `}</style>

      <section
        ref={sectionRef}
        id="achievements"
        className="relative py-24 px-4 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(147,36,69,0.03)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(147,36,69,0.03)_1.5px,transparent_1.5px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
        
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{ backgroundColor: 'rgba(147, 36, 69, 0.08)' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl animate-pulse" style={{ backgroundColor: 'rgba(214, 56, 101, 0.06)', animationDelay: '1s' }}></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white shadow-lg shadow-[#932445]/10 border border-[#932445]/20 mb-6">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#932445] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#932445]"></span>
              </div>
              <span className="text-[#932445] font-semibold text-xs tracking-wider">
                RECOGNITION & EXCELLENCE
              </span>
            </div>
            
            <h2
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Achievements &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#932445] via-[#d63865] to-[#932445]">
                Certificates
              </span>
            </h2>

            <p
              className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Our commitment to excellence is recognized through industry certifications and achievements that validate our expertise and quality standards.
            </p>
          </div>

          {/* Certificates Grid */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {CERTIFICATES.map((certificate, index) => (
              <div
                key={certificate.id}
                className={`certificate-card group relative rounded-2xl overflow-hidden bg-white shadow-lg hover:shadow-2xl border border-gray-100 ${
                  isVisible ? 'animate-scale-in' : 'opacity-0'
                }`}
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'forwards'
                }}
              >
                {/* Shimmer Effect on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shimmer-effect pointer-events-none z-10"></div>
                
                {/* Image Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-50">
                  <Image
                    src={certificate.image}
                    alt={certificate.alt}
                    fill
                    className="object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/0 via-transparent to-transparent group-hover:from-black/5 transition-all duration-300"></div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="p-2 rounded-full bg-[#932445]/10 backdrop-blur-sm">
                    <Award className="w-4 h-4 text-[#932445]" />
                  </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 left-0 w-12 h-12 bg-gradient-to-br from-[#932445]/20 to-transparent rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          {/* Bottom Decorative Icons */}
          <div className={`mt-16 flex justify-center items-center gap-8 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
            <div className="p-4 rounded-full bg-gradient-to-br from-[#932445]/10 to-[#d63865]/10 animate-float">
              <Trophy className="w-6 h-6 text-[#932445]" />
            </div>
            <div className="p-4 rounded-full bg-gradient-to-br from-[#932445]/10 to-[#d63865]/10 animate-float" style={{ animationDelay: '0.2s' }}>
              <Star className="w-6 h-6 text-[#932445]" />
            </div>
            <div className="p-4 rounded-full bg-gradient-to-br from-[#932445]/10 to-[#d63865]/10 animate-float" style={{ animationDelay: '0.4s' }}>
              <Sparkles className="w-6 h-6 text-[#932445]" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

