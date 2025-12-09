'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ImageIcon, ArrowRight, Sparkles } from 'lucide-react';

const ALL_PROJECT_IMAGES = [
  { id: 1, image: '/oneglobe.png', alt: 'Project 1' },
  { id: 2, image: '/twoglobe.png', alt: 'Project 2' },
  { id: 3, image: '/threeglob.png', alt: 'Project 3' },
  { id: 4, image: '/fourglob.png', alt: 'Project 4' },
  { id: 5, image: '/fiveglob.png', alt: 'Project 5' },
  { id: 6, image: '/sixglob.png', alt: 'Project 6' },
  { id: 7, image: '/sevenglob.png', alt: 'Project 7' },
  { id: 8, image: '/eightglob.png', alt: 'Project 8' },
  { id: 9, image: '/nineglob.png', alt: 'Project 9' },
  { id: 10, image: '/tenglob.png', alt: 'Project 10' },
  { id: 11, image: '/elevenglob.png', alt: 'Project 11' },
  { id: 12, image: '/twelveglob.png', alt: 'Project 12' },
  { id: 13, image: '/thirteenglob.png', alt: 'Project 13' },
  { id: 14, image: '/fourteenglob.png', alt: 'Project 14' },
  { id: 15, image: '/fifteenglob.jpeg', alt: 'Project 15' },
  { id: 16, image: '/sixteenglob.jpeg', alt: 'Project 16' },
  { id: 17, image: '/seventeenglob.jpeg', alt: 'Project 17' },
  { id: 18, image: '/eighteenglob.jpeg', alt: 'Project 18' },
  { id: 19, image: '/nineteenglob.jpeg', alt: 'Project 19' },
  { id: 20, image: '/twentyglob.jpeg', alt: 'Project 20' },
  { id: 21, image: '/twentyoneglob.jpeg', alt: 'Project 21' },
  { id: 22, image: '/twentytwoglob.jpeg', alt: 'Project 22' },
  { id: 23, image: '/twentythreeglob.jpeg', alt: 'Project 23' },
  { id: 24, image: '/twentyfourglob.jpeg', alt: 'Project 24' },
  { id: 25, image: '/twentyfiveglob.jpeg', alt: 'Project 25' },
  { id: 26, image: '/twentysixglob.jpeg', alt: 'Project 26' },
  { id: 27, image: '/twentyeightglob.jpeg', alt: 'Project 27' },
  { id: 28, image: '/twentynineglob.jpeg', alt: 'Project 28' },
  { id: 29, image: '/thirtyglob.jpeg', alt: 'Project 29' },
  { id: 30, image: '/thirtyoneglob.jpeg', alt: 'Project 30' },
];

// Show first 6 images on home page
const PREVIEW_IMAGES = ALL_PROJECT_IMAGES.slice(0, 6);

export default function ProjectsGallerySection() {
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

        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
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

        .project-card {
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          transform-style: preserve-3d;
        }

        .project-card:hover {
          transform: translateY(-20px) scale(1.08) rotateY(2deg);
          box-shadow: 0 30px 60px rgba(147, 36, 69, 0.4), 
                      0 0 80px rgba(214, 56, 101, 0.2),
                      inset 0 0 40px rgba(255, 255, 255, 0.1);
        }

        .project-card:hover .premium-border {
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

        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 8s ease infinite;
        }

        .view-all-button {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .view-all-button:hover {
          transform: translateY(-4px) scale(1.05);
          box-shadow: 0 20px 40px rgba(147, 36, 69, 0.4);
        }
      `}</style>

      <section
        ref={sectionRef}
        id="projects-gallery"
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
                Our Work Portfolio
              </span>
            </div>
            
            <h2
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Our Projects{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#932445] via-[#d63865] via-[#f59e0b] to-[#932445] bg-[length:200%_auto] animate-gradient">
                Gallery
              </span>
            </h2>

            <p
              className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Explore our diverse portfolio of successful projects across oil & gas, infrastructure, and energy sectors.
            </p>
          </div>

          {/* Premium Projects Grid */}
          <div className={`grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-10 mb-12 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {PREVIEW_IMAGES.map((project, index) => (
              <div
                key={project.id}
                className={`project-card group relative rounded-3xl overflow-hidden bg-white shadow-2xl border-2 border-gray-100/50 premium-glow ${
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
                
                {/* Image Container */}
                <div className="relative aspect-square w-full overflow-hidden bg-gradient-to-br from-gray-50 to-white">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-115"
                    sizes="(max-width: 768px) 50vw, 33vw"
                    priority={index < 3}
                  />
                  
                  {/* Premium Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/0 via-transparent to-transparent group-hover:from-black/10 transition-all duration-500"></div>
                  
                  {/* Glow Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#932445]/5 via-transparent to-[#d63865]/5"></div>
                </div>

                {/* Premium Decorative Badge */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                  <div className="p-3 rounded-full bg-gradient-to-br from-[#932445] to-[#d63865] shadow-xl backdrop-blur-sm border-2 border-white/50">
                    <ImageIcon className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Premium Corner Accents */}
                <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-[#932445]/30 via-[#d63865]/20 to-transparent rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-[#f59e0b]/20 via-[#d63865]/15 to-transparent rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className={`text-center ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
            <Link href="/ourprojectgallery">
              <button className="view-all-button inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#932445] to-[#d63865] text-white font-semibold text-lg rounded-full shadow-xl hover:shadow-2xl">
                <span>View All</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>

          {/* Premium Bottom Decorative Icons */}
          <div className={`mt-20 flex justify-center items-center gap-12 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '1s' }}>
            <div className="p-5 rounded-full bg-gradient-to-br from-[#932445]/20 to-[#d63865]/20 backdrop-blur-xl border-2 border-[#932445]/30 shadow-xl animate-float">
              <ImageIcon className="w-8 h-8 text-[#932445]" />
            </div>
            <div className="p-5 rounded-full bg-gradient-to-br from-[#932445]/20 to-[#d63865]/20 backdrop-blur-xl border-2 border-[#932445]/30 shadow-xl animate-float" style={{ animationDelay: '0.3s' }}>
              <Sparkles className="w-8 h-8 text-[#932445]" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
