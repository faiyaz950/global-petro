'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Award, Trophy, Star, Sparkles, BadgeCheck } from 'lucide-react';

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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.7) rotateY(-10deg);
          }
          to {
            opacity: 1;
            transform: scale(1) rotateY(0deg);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(5deg);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -2000px 0;
          }
          100% {
            background-position: 2000px 0;
          }
        }

        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(147, 36, 69, 0.3), 0 0 40px rgba(214, 56, 101, 0.2);
          }
          50% {
            box-shadow: 0 0 30px rgba(147, 36, 69, 0.5), 0 0 60px rgba(214, 56, 101, 0.4);
          }
        }

        @keyframes rotate3d {
          0% {
            transform: perspective(1000px) rotateY(0deg) rotateX(0deg);
          }
          50% {
            transform: perspective(1000px) rotateY(5deg) rotateX(2deg);
          }
          100% {
            transform: perspective(1000px) rotateY(0deg) rotateX(0deg);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }

        .animate-scale-in {
          animation: scaleIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .certificate-card {
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
        }

        .certificate-card:hover {
          transform: translateY(-20px) scale(1.08) rotateY(2deg);
          box-shadow: 0 30px 60px rgba(147, 36, 69, 0.4), 
                      0 0 80px rgba(214, 56, 101, 0.2),
                      inset 0 0 40px rgba(255, 255, 255, 0.1);
        }

        .certificate-card:hover .premium-border {
          opacity: 1;
          transform: scale(1.02);
        }

        .shimmer-effect {
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.4) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          background-size: 2000px 100%;
          animation: shimmer 4s infinite;
        }

        .premium-glow {
          animation: glow 3s ease-in-out infinite;
        }

        .glass-effect {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .premium-border {
          position: absolute;
          inset: -2px;
          border-radius: 1.5rem;
          padding: 2px;
          background: linear-gradient(135deg, #932445, #d63865, #f59e0b, #d63865, #932445);
          background-size: 300% 300%;
          opacity: 0;
          transition: all 0.6s ease;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          animation: gradient-shift 3s ease infinite;
        }

        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 8s ease infinite;
        }
      `}</style>

      <section
        ref={sectionRef}
        id="achievements"
        className="relative py-32 px-4 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-rose-50"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        {/* Premium Background Effects */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(147,36,69,0.04)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(147,36,69,0.04)_1.5px,transparent_1.5px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
        
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl animate-pulse" style={{ backgroundColor: 'rgba(147, 36, 69, 0.12)' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] rounded-full blur-3xl animate-pulse" style={{ backgroundColor: 'rgba(214, 56, 101, 0.1)', animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl animate-pulse" style={{ backgroundColor: 'rgba(245, 158, 11, 0.08)', animationDelay: '0.5s' }}></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Premium Header */}
          <div className={`text-center mb-16 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/80 backdrop-blur-xl shadow-2xl shadow-[#932445]/20 border-2 border-[#932445]/30 mb-6">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#932445] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#932445]"></span>
              </div>
              <span className="text-[#932445] font-semibold text-xs tracking-wider uppercase">
                Recognition & Excellence
              </span>
            </div>
            
            <h2
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Achievements &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#932445] via-[#d63865] via-[#f59e0b] to-[#932445] bg-[length:200%_auto] animate-gradient">
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

          {/* Premium Certificates Grid - Larger Images */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {CERTIFICATES.map((certificate, index) => (
              <div
                key={certificate.id}
                className={`certificate-card group relative rounded-3xl overflow-hidden bg-white shadow-2xl border-2 border-gray-100/50 premium-glow ${
                  isVisible ? 'animate-scale-in' : 'opacity-0'
                }`}
                style={{ 
                  animationDelay: `${index * 0.12}s`,
                  animationFillMode: 'forwards'
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Premium Animated Border */}
                <div className="premium-border"></div>
                
                {/* Shimmer Effect on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 shimmer-effect pointer-events-none z-20"></div>
                
                {/* Image Container - Much Larger */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-gradient-to-br from-gray-50 to-white">
                  <Image
                    src={certificate.image}
                    alt={certificate.alt}
                    fill
                    className="object-contain p-6 md:p-8 transition-all duration-700 group-hover:scale-115"
                    sizes="(max-width: 768px) 50vw, 25vw"
                    priority={index < 4}
                  />
                  
                  {/* Premium Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/0 via-transparent to-transparent group-hover:from-black/10 transition-all duration-500"></div>
                  
                  {/* Glow Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#932445]/5 via-transparent to-[#d63865]/5"></div>
                </div>

                {/* Premium Decorative Badge */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <div className="p-3 rounded-full bg-gradient-to-br from-[#932445] to-[#d63865] shadow-xl backdrop-blur-sm border-2 border-white/50">
                    <BadgeCheck className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Premium Corner Accents */}
                <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-[#932445]/30 via-[#d63865]/20 to-transparent rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-[#f59e0b]/20 via-[#d63865]/15 to-transparent rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Premium Ribbon Effect */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-[#932445] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>

          {/* Premium Bottom Decorative Icons */}
          <div className={`mt-20 flex justify-center items-center gap-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '1s' }}>
            <div className="p-5 rounded-full bg-gradient-to-br from-[#932445]/20 to-[#d63865]/20 backdrop-blur-xl border-2 border-[#932445]/30 shadow-xl animate-float">
              <Trophy className="w-8 h-8 text-[#932445]" />
            </div>
            <div className="p-5 rounded-full bg-gradient-to-br from-[#932445]/20 to-[#d63865]/20 backdrop-blur-xl border-2 border-[#932445]/30 shadow-xl animate-float" style={{ animationDelay: '0.3s' }}>
              <Star className="w-8 h-8 text-[#932445]" />
            </div>
            <div className="p-5 rounded-full bg-gradient-to-br from-[#932445]/20 to-[#d63865]/20 backdrop-blur-xl border-2 border-[#932445]/30 shadow-xl animate-float" style={{ animationDelay: '0.6s' }}>
              <Sparkles className="w-8 h-8 text-[#932445]" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

