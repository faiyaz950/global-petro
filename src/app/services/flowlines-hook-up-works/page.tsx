'use client';

import React, { useState, useEffect } from 'react';
import { GitMerge, CheckCircle, Shield, Award, Users, Target, Zap } from 'lucide-react';
import GlobalNav from '@/components/global-nav';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

// Service-related images and corresponding texts
const heroSlides = [
  {
    imageId: 'well-hookup',
    text: 'Expert wellhead installations, tie-ins, and commissioning for oil & gas facilities. Specialized in complex hook-up operations with precision, efficiency, and adherence to industry standards.'
  },
  {
    imageId: 'project-1',
    text: 'Wellhead Installations and Production Flowline Construction'
  },
  {
    imageId: 'oil-field-development',
    text: 'Tie-In Operations and Facility Integration Services'
  },
  {
    imageId: 'field-development',
    text: 'Flowline Construction from Wellheads to Gathering Stations'
  },
  {
    imageId: 'oil-well-site',
    text: 'Commissioning and Start-Up Support for Oil & Gas Facilities'
  },
  {
    imageId: 'well-hookup',
    text: 'Complex Hook-Up Operations with Precision and Efficiency'
  }
];

export default function FlowlinesHookUpWorksPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentSlideData = heroSlides[currentSlide];
  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap');

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideFade {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(5deg); }
        }

        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.85); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }

        .animate-float {
          animation: float 8s ease-in-out infinite;
        }

        .animate-scaleIn {
          animation: scaleIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-shift 8s ease infinite;
        }

        .glass-effect {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .hover-tilt {
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hover-tilt:hover {
          transform: perspective(1000px) rotateX(5deg) rotateY(-5deg) translateY(-10px);
        }
      `}</style>

      <div className="flex min-h-screen flex-col bg-gray-50 text-gray-800">
        <GlobalNav />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative overflow-hidden bg-black py-32 pt-56 min-h-[80vh] flex items-center">
            {/* Background Image Slider */}
            <div className="absolute inset-0">
              {heroSlides.map((slide, index) => {
                const slideImage = PlaceHolderImages.find(img => img.id === slide.imageId) || PlaceHolderImages.find(img => img.id === 'well-hookup');
                return (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <img
                      src={slideImage?.imageUrl || 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920&q=80'}
                      alt={slideImage?.description || 'Flowlines & Hook-Up Works'}
                      className="w-full h-full object-cover"
                      style={{ filter: 'brightness(0.7)' }}
                    />
                  </div>
                );
              })}
            </div>
            
            {/* Gradient Overlays - Minimal opacity */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/15 to-black/25"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/15 via-transparent to-black/15"></div>
            
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{ backgroundColor: 'rgba(147, 36, 69, 0.15)' }}></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl animate-pulse" style={{ backgroundColor: 'rgba(147, 36, 69, 0.1)', animationDelay: '1s' }}></div>

            <div className="container relative mx-auto max-w-6xl px-4 text-center z-20">
              <div className="mb-8 animate-fadeIn">
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 shadow-2xl">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
                  </span>
                  <span className="text-white font-medium tracking-wide text-sm" style={{ fontFamily: "'Playfair Display', serif" }}>🔗 Flowlines & Hook-Up Works</span>
                </div>
              </div>

              <h1 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white text-center mb-6 tracking-tight animate-fadeIn"
                style={{ 
                  fontFamily: "'Playfair Display', serif",
                  textShadow: '0 4px 15px rgba(0,0,0,0.4)',
                }}
              >
                Flowlines & Hook-Up Works
              </h1>

              <div className="w-32 h-1 mb-8 mx-auto rounded-full animate-fadeIn" style={{ background: 'linear-gradient(90deg, transparent, #932445, #fcd34d, #932445, transparent)' }}></div>

              {/* Subtitle with dynamic text */}
              <p 
                key={currentSlide}
                className="text-lg md:text-xl text-white/90 text-center max-w-2xl mx-auto mb-10 font-light tracking-wide" 
                style={{ 
                  fontFamily: "'Playfair Display', serif",
                  animation: 'slideFade 0.8s ease-out'
                }}
              >
                {currentSlideData.text}
              </p>
              
              {/* Slider Indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'w-8 bg-white' 
                        : 'w-2 bg-white/40 hover:bg-white/60'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Overview Section */}
          <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-rose-50 relative overflow-hidden">
            <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-gradient-to-br from-[#932445]/10 via-[#d63865]/5 to-transparent rounded-full blur-3xl animate-float"></div>
            <div className="absolute top-1/3 -left-32 w-[450px] h-[450px] bg-gradient-to-tr from-[#d63865]/10 via-[#932445]/5 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
            
            <div className="absolute inset-0 bg-[linear-gradient(rgba(147,36,69,0.03)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(147,36,69,0.03)_1.5px,transparent_1.5px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
            
            <div className="container mx-auto max-w-7xl px-4 relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6 animate-fadeInUp">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect shadow-xl shadow-[#932445]/20 mb-4 animate-scaleIn">
                    <div className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#932445] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-r from-[#932445] to-[#d63865]"></span>
                    </div>
                    <span className="text-[#932445] font-bold text-xs tracking-widest" style={{ fontFamily: "'Playfair Display', serif" }}>SERVICE OVERVIEW</span>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Connecting{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#932445] via-[#d63865] to-[#932445] animate-gradient">
                      Excellence
                    </span>
                  </h2>
                  
                  <p className="text-gray-600 leading-relaxed text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Our Flowlines & Hook-Up Works services are designed for the critical infrastructure that connects production wells to processing facilities. We specialize in the complex integration of pipelines, valves, and control systems that form the backbone of oil & gas operations.
                  </p>
                  
                  <p className="text-gray-600 leading-relaxed text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
                    With extensive experience in upstream operations, we ensure every connection is executed with precision, tested thoroughly, and commissioned safely to meet the highest industry standards.
                  </p>
                </div>
                
                <div className="relative animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                  <div className="rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80"
                      alt="Flowlines & Hook-Up"
                      className="w-full h-96 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Services Offered */}
          <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto max-w-7xl px-4">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect shadow-xl shadow-[#932445]/20 mb-4 animate-scaleIn">
                  <div className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#932445] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-r from-[#932445] to-[#d63865]"></span>
                  </div>
                  <span className="text-[#932445] font-bold text-xs tracking-widest" style={{ fontFamily: "'Playfair Display', serif" }}>OUR CAPABILITIES</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  What We{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#932445] via-[#d63865] to-[#932445] animate-gradient">
                    Offer
                  </span>
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: 'Wellhead Installations',
                    description: 'Complete wellhead assembly, connection, and commissioning services.',
                    icon: <Target size={32} />
                  },
                  {
                    title: 'Flowline Construction',
                    description: 'Installation of production flowlines from wellheads to gathering stations.',
                    icon: <GitMerge size={32} />
                  },
                  {
                    title: 'Tie-In Operations',
                    description: 'Safe and efficient connection of new facilities to existing infrastructure.',
                    icon: <Zap size={32} />
                  },
                  {
                    title: 'Valve & Fitting Installation',
                    description: 'Precision installation of control valves, manifolds, and fittings.',
                    icon: <CheckCircle size={32} />
                  },
                  {
                    title: 'Hydrostatic Testing',
                    description: 'Comprehensive pressure testing and leak detection services.',
                    icon: <Shield size={32} />
                  },
                  {
                    title: 'Commissioning Support',
                    description: 'Full commissioning services including system integration and startup.',
                    icon: <Award size={32} />
                  }
                ].map((service, index) => (
                  <div
                    key={index}
                    className="group relative glass-effect rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border-2 border-white/50 hover:border-[#932445]/30 hover-tilt animate-scaleIn"
                    style={{ animationDelay: `${index * 0.1}s`, fontFamily: "'Playfair Display', serif" }}
                  >
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#932445]/0 via-[#932445]/0 to-[#d63865]/0 group-hover:from-[#932445]/5 group-hover:via-[#d63865]/10 group-hover:to-[#932445]/5 transition-all duration-700 -z-10"></div>
                    
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-[#932445] to-[#d63865] mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-md">
                      <div className="text-white">{service.icon}</div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm" style={{ fontFamily: "'Playfair Display', serif" }}>{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-24 bg-black relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70"></div>
            
            <div className="container mx-auto max-w-4xl px-4 text-center relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Ready to Connect?
              </h2>
              <p className="text-xl text-white/70 mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>
                Let's discuss how our Flowlines & Hook-Up Works services can support your oil & gas operations.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="group relative px-8 py-4 text-white font-bold rounded-full overflow-hidden shadow-2xl transition-all duration-300 hover:scale-105"
                  style={{ 
                    background: 'linear-gradient(135deg, #932445 0%, #d63865 100%)',
                    fontFamily: "'Playfair Display', serif"
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#d63865] to-[#932445] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10">Contact Us</span>
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-4 text-white font-bold rounded-full border-2 border-white/30 hover:border-white/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 shadow-xl"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  View All Services
                </Link>
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <p className="text-gray-400">© 2025 Global Petrotech SPC. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

