'use client';

import React, { useState, useEffect } from 'react';
import { Construction, CheckCircle, Shield, Award, Users, Target, Zap, Building2, Factory, Settings, Wrench, HardHat, Hammer, Layers, Cog, Clock } from 'lucide-react';
import GlobalNav from '@/components/global-nav';
import Link from 'next/link';
import Footer from '@/components/footer';
import { PlaceHolderImages } from '@/lib/placeholder-images';

// Service-related images and corresponding texts
const heroSlides = [
  {
    imageId: 'service-construction',
    text: 'One-Stop Solution for Industrial and Infrastructure Construction in Oman & GCC'
  },
  {
    imageId: 'project-6',
    text: 'Expert Civil Engineering and Structural Fabrication Services'
  },
  {
    imageId: 'service-infrastructure',
    text: 'Comprehensive Mechanical Construction and Installation Solutions'
  },
  {
    imageId: 'road-construction',
    text: 'Infrastructure Development and Road Construction Expertise'
  },
  {
    imageId: 'civil-electrical',
    text: 'Integrated Civil, Mechanical, and Electrical Construction Services'
  },
  {
    imageId: 'mechanical-piping',
    text: 'Professional Construction Management and Quality Execution'
  }
];

export default function CivilMechanicalConstructionPage() {
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

        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }

        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(147, 36, 69, 0.3); }
          50% { box-shadow: 0 0 40px rgba(147, 36, 69, 0.6); }
        }

        @keyframes slide {
          0% { background-position: 0 0; }
          100% { background-position: 20px 20px; }
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

        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out forwards;
        }

        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out forwards;
        }

        .animate-shimmer {
          background: linear-gradient(90deg, transparent, rgba(147, 36, 69, 0.2), transparent);
          background-size: 1000px 100%;
          animation: shimmer 3s infinite linear;
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

        .hover-glow:hover {
          box-shadow: 0 0 30px rgba(147, 36, 69, 0.5);
          transition: box-shadow 0.3s ease;
        }

        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }
      `}</style>

      <div className="flex min-h-screen flex-col bg-gray-50 text-gray-800">
        <GlobalNav />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative overflow-hidden bg-black py-32 pt-56 min-h-[80vh] flex items-center">
            {/* Background Image Slider */}
            <div className="absolute inset-0">
              {heroSlides.map((slide, index) => {
                const slideImage = PlaceHolderImages.find(img => img.id === slide.imageId) || PlaceHolderImages.find(img => img.id === 'service-construction');
                return (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <img
                      src={slideImage?.imageUrl || 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1920&q=80'}
                      alt={slideImage?.description || 'Civil & Mechanical Construction'}
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
            
            {/* Glowing Orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{ backgroundColor: 'rgba(147, 36, 69, 0.15)' }}></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl animate-pulse" style={{ backgroundColor: 'rgba(147, 36, 69, 0.1)', animationDelay: '1s' }}></div>
            
            {/* Animated Particles */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-[#932445] rounded-full opacity-30 animate-float"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${30 + i * 10}%`,
                    animationDelay: `${i * 0.5}s`,
                    animationDuration: `${4 + i}s`
                  }}
                />
              ))}
            </div>

            <div className="container relative mx-auto max-w-6xl px-4 text-center z-20">
              {/* Badge */}
              <div className="mb-8 animate-fadeIn">
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 shadow-2xl">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
                  </span>
                  <span className="text-white font-medium tracking-wide text-sm" style={{ fontFamily: "'Playfair Display', serif" }}>🏗️ Civil & Mechanical Construction</span>
                </div>
              </div>

              {/* Title */}
              <h1 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white text-center mb-6 tracking-tight animate-fadeIn"
                style={{ 
                  fontFamily: "'Playfair Display', serif",
                  textShadow: '0 4px 15px rgba(0,0,0,0.4)',
                }}
              >
                Civil & Mechanical Construction
              </h1>

              {/* Decorative Line */}
              <div className="w-32 h-1 mb-8 mx-auto rounded-full animate-fadeIn" style={{ background: 'linear-gradient(90deg, transparent, #932445, #fcd34d, #932445, transparent)' }}></div>

              {/* Subtitle with dynamic text */}
              <p 
                key={currentSlide}
                className="text-lg md:text-xl text-white/90 text-center max-w-3xl mx-auto mb-10 font-light tracking-wide" 
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
            {/* Floating Background Shapes */}
            <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-gradient-to-br from-[#932445]/10 via-[#d63865]/5 to-transparent rounded-full blur-3xl animate-float"></div>
            <div className="absolute top-1/3 -left-32 w-[450px] h-[450px] bg-gradient-to-tr from-[#d63865]/10 via-[#932445]/5 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
            
            {/* Grid Pattern */}
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
                    Trusted{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#932445] via-[#d63865] to-[#932445] animate-gradient">
                      Construction Partner
                    </span>
                  </h2>
                  
                  <p className="text-gray-700 leading-relaxed text-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Global Petrotech SPC is a trusted name in high-quality civil and mechanical construction works across oil & gas, energy, municipal, and industrial sectors. We deliver everything from heavy foundations in remote oil fields to complete industrial facilities, warehouses, and municipal infrastructure – always on time, within budget, and to international standards.
                  </p>
                </div>
                
                <div className="relative animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                  <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                    <img
                      src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80"
                      alt="Civil & Mechanical Construction"
                      className="w-full h-96 object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#932445] to-[#d63865] rounded-2xl opacity-20 blur-2xl animate-float"></div>
                </div>
              </div>
            </div>
          </section>

          {/* Civil Construction Services */}
          <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto max-w-7xl px-4">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect shadow-xl shadow-[#932445]/20 mb-4 animate-scaleIn">
                  <div className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#932445] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-r from-[#932445] to-[#d63865]"></span>
                  </div>
                  <span className="text-[#932445] font-bold text-xs tracking-widest" style={{ fontFamily: "'Playfair Display', serif" }}>CIVIL CONSTRUCTION</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Our Civil{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#932445] via-[#d63865] to-[#932445] animate-gradient">
                    Construction Services
                  </span>
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {[
                  { title: 'Heavy Industrial Foundations', description: 'Pumps, compressors, turbines, static equipment', icon: <Building2 size={28} /> },
                  { title: 'RCC Structures', description: 'Control rooms, substations, warehouses, administration buildings', icon: <Layers size={28} /> },
                  { title: 'Piling & Deep Foundations', description: 'Specialized foundation solutions', icon: <Hammer size={28} /> },
                  { title: 'Roads & Hardstanding', description: 'Grader roads, gravel re-sheeting, asphalt roads, culverts', icon: <Target size={28} /> },
                  { title: 'Drainage Systems', description: 'Storm water networks and retaining walls', icon: <Zap size={28} /> },
                  { title: 'Bulk Earthworks', description: 'Excavation, backfilling, compaction, site leveling', icon: <Construction size={28} /> },
                  { title: 'Concrete Works', description: 'Slabs, pedestals, plinths, ring beams, anchor bolts', icon: <Cog size={28} /> },
                  { title: 'Tank Foundations', description: 'Tank foundations and bund walls', icon: <Factory size={28} /> }
                ].map((service, index) => (
                  <div
                    key={index}
                    className="group relative glass-effect rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover-tilt animate-scaleIn hover-glow border-2 border-transparent hover:border-[#932445]/30"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#932445]/0 via-[#932445]/0 to-[#d63865]/0 group-hover:from-[#932445]/10 group-hover:via-[#d63865]/15 group-hover:to-[#932445]/10 transition-all duration-700 -z-10"></div>
                    
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-[#932445] to-[#d63865] mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-md text-white">
                      {service.icon}
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#932445] transition-colors duration-300" style={{ fontFamily: "'Playfair Display', serif" }}>{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-xs group-hover:text-gray-700 transition-colors duration-300" style={{ fontFamily: "'Inter', sans-serif" }}>{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Mechanical Construction & Fabrication Services */}
          <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-rose-50 relative overflow-hidden">
            <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-gradient-to-br from-[#932445]/10 via-[#d63865]/5 to-transparent rounded-full blur-3xl animate-float"></div>
            
            <div className="container mx-auto max-w-7xl px-4 relative z-10">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect shadow-xl shadow-[#932445]/20 mb-4 animate-scaleIn">
                  <div className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#932445] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-r from-[#932445] to-[#d63865]"></span>
                  </div>
                  <span className="text-[#932445] font-bold text-xs tracking-widest" style={{ fontFamily: "'Playfair Display', serif" }}>MECHANICAL CONSTRUCTION</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Mechanical Construction &{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#932445] via-[#d63865] to-[#932445] animate-gradient">
                    Fabrication Services
                  </span>
                </h2>
              </div>

              <div className="space-y-8 max-w-5xl mx-auto">
                {/* Structural Steel */}
                <div className="glass-effect rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 animate-scaleIn">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-[#932445] to-[#d63865] text-white">
                      <Factory size={32} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Structural Steel Fabrication & Erection
                      </h3>
                      <ul className="text-gray-600 leading-relaxed space-y-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                          <span>Pipe racks, equipment supports, platforms, staircases, handrails</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                          <span>Modular skids and shelters</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Piping Fabrication */}
                <div className="glass-effect rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 animate-scaleIn stagger-1">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-[#932445] to-[#d63865] text-white">
                      <Wrench size={32} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Piping Fabrication & Installation
                      </h3>
                      <ul className="text-gray-600 leading-relaxed space-y-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                          <span>CS, SS, Alloy steel piping systems</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                          <span>Shop and field fabrication</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                          <span>Certified welding (6G, TIG, SMAW) with full WPS/PQR</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Equipment Installation */}
                <div className="glass-effect rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 animate-scaleIn stagger-2">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-[#932445] to-[#d63865] text-white">
                      <Settings size={32} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Static & Rotating Equipment Installation
                      </h3>
                      <ul className="text-gray-600 leading-relaxed space-y-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                          <span>Pumps, compressors, vessels, heat exchangers, filters</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Storage & Maintenance */}
                <div className="glass-effect rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 animate-scaleIn stagger-3">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-[#932445] to-[#d63865] text-white">
                      <Building2 size={32} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Storage Tank & Maintenance Services
                      </h3>
                      <ul className="text-gray-600 leading-relaxed space-y-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                          <span>Storage tank erection, repair, and maintenance</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                          <span>Valve installation and servicing</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                          <span>Mechanical completion (MC) and pre-commissioning support</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Key Capabilities */}
          <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto max-w-7xl px-4">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect shadow-xl shadow-[#932445]/20 mb-4 animate-scaleIn">
                  <div className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#932445] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-r from-[#932445] to-[#d63865]"></span>
                  </div>
                  <span className="text-[#932445] font-bold text-xs tracking-widest" style={{ fontFamily: "'Playfair Display', serif" }}>KEY CAPABILITIES</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Our{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#932445] via-[#d63865] to-[#932445] animate-gradient">
                    Strengths
                  </span>
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {[
                  {
                    title: 'In-house Fabrication Yard',
                    description: 'Steel structures and piping spools fabrication facility',
                    icon: <Factory size={40} />
                  },
                  {
                    title: 'Full NDT Coordination',
                    description: 'RT, UT, MPI, DPT testing and coordination services',
                    icon: <CheckCircle size={40} />
                  },
                  {
                    title: 'Certified Workforce',
                    description: 'Certified welders and riggers (CSWIP, AWS, LEEA)',
                    icon: <Users size={40} />
                  },
                  {
                    title: 'Own Equipment Fleet',
                    description: 'HIAB cranes, welding machines, generators, rollers, JCB',
                    icon: <Cog size={40} />
                  },
                  {
                    title: 'Approved Vendor',
                    description: 'Approved by PDO, Oxy, OGC, and major EPC contractors',
                    icon: <Award size={40} />
                  }
                ].map((capability, index) => (
                  <div
                    key={index}
                    className="text-center p-8 glass-effect rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover-tilt animate-scaleIn hover-glow"
                    style={{ animationDelay: `${index * 0.1}s`, fontFamily: "'Playfair Display', serif" }}
                  >
                    <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-[#932445] to-[#d63865] mb-4 text-white group-hover:scale-110 transition-transform duration-500">
                      {capability.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{capability.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>{capability.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Recent Projects */}
          <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-rose-50 relative overflow-hidden">
            <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-gradient-to-br from-[#932445]/10 via-[#d63865]/5 to-transparent rounded-full blur-3xl animate-float"></div>
            
            <div className="container mx-auto max-w-7xl px-4 relative z-10">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect shadow-xl shadow-[#932445]/20 mb-4 animate-scaleIn">
                  <div className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#932445] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-r from-[#932445] to-[#d63865]"></span>
                  </div>
                  <span className="text-[#932445] font-bold text-xs tracking-widest" style={{ fontFamily: "'Playfair Display', serif" }}>RECENT PROJECTS</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Recent Civil & Mechanical{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#932445] via-[#d63865] to-[#932445] animate-gradient">
                    Projects
                  </span>
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {[
                  {
                    title: 'Civil & Electrical Works for Wells',
                    client: 'PDO – L&T',
                    location: 'Harweel & Birba',
                    description: 'Comprehensive civil and electrical works for well sites including foundations, structures, and electrical installations.',
                    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&q=80'
                  },
                  {
                    title: 'Off-Plot Mechanical Contract',
                    client: 'PDO – Punj Lloyd',
                    location: 'SAS Fahud, Yibal, Kauther',
                    description: 'Complete mechanical installation and fabrication works for off-plot facilities across multiple locations.',
                    image: 'https://images.unsplash.com/photo-1623036484438-002339898926?w=600&q=80'
                  },
                  {
                    title: 'Mabrouk North East Development',
                    client: 'PDO',
                    location: 'Mabrouk Field',
                    description: 'Large-scale civil and mechanical scope including foundations, structures, and equipment installation.',
                    image: 'https://images.unsplash.com/photo-1515630771457-09367d0ae038?w=600&q=80'
                  },
                  {
                    title: 'Warehouse & Workshop Constructions',
                    client: 'SMEs',
                    location: 'Muscat, Sohar, Duqm',
                    description: 'Multiple warehouse and workshop constructions for small and medium enterprises across Oman.',
                    image: 'https://images.unsplash.com/photo-1509390288171-ce2088f7d08e?w=600&q=80'
                  }
                ].map((project, index) => (
                  <div
                    key={index}
                    className="group relative glass-effect rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover-tilt animate-scaleIn hover-glow"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 right-4 z-10">
                        <div className="text-xs text-white/80 mb-1 font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>
                          {project.client} • {project.location}
                        </div>
                        <h3 className="text-xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>{project.title}</h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>{project.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto max-w-7xl px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Why Choose{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#932445] via-[#d63865] to-[#932445] animate-gradient">
                    Global Petrotech
                  </span>
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
                  for Civil & Mechanical Construction?
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {[
                  {
                    title: '14+ Years Experience',
                    description: '14+ years of continuous execution in Oman with proven track record across diverse projects.',
                    icon: <Clock size={40} />
                  },
                  {
                    title: 'ISO 9001:2015 Certified',
                    description: 'ISO 9001:2015 certified quality system ensuring consistent quality at every stage.',
                    icon: <Award size={40} />
                  },
                  {
                    title: 'Zero LTI Record',
                    description: 'Zero Lost Time Incidents on all construction sites demonstrating our commitment to safety.',
                    icon: <Shield size={40} />
                  },
                  {
                    title: 'Fast Mobilization',
                    description: 'Own manpower (160+) and equipment fleet for instant mobilization and faster project delivery.',
                    icon: <Zap size={40} />
                  },
                  {
                    title: 'Proven Experience',
                    description: 'Proven experience in live plants and remote desert locations with specialized safety protocols.',
                    icon: <Target size={40} />
                  },
                  {
                    title: 'Excellent ICV Score',
                    description: 'Excellent ICV (In-Country Value) score – Riyada & JSRS registered supporting local economy.',
                    icon: <CheckCircle size={40} />
                  },
                  {
                    title: 'Repeat Business',
                    description: 'Repeat business from PDO, Galfar, L&T, Al Turki, and many more demonstrating client satisfaction.',
                    icon: <Users size={40} />
                  }
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="text-center p-8 glass-effect rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover-tilt animate-scaleIn hover-glow"
                    style={{ animationDelay: `${index * 0.1}s`, fontFamily: "'Playfair Display', serif" }}
                  >
                    <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-[#932445] to-[#d63865] mb-4 text-white group-hover:scale-110 transition-transform duration-500">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>{feature.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-16 text-center max-w-3xl mx-auto">
                <p className="text-lg text-gray-700 leading-relaxed" style={{ fontFamily: "'Playfair Display', serif" }}>
                  From a single foundation to a complete industrial complex – we build it stronger, faster, and safer.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-24 bg-black relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70"></div>
            
            <div className="container mx-auto max-w-4xl px-4 text-center relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Ready to Start Your Next Construction Project?
              </h2>
              <p className="text-xl text-white/70 mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
                Contact us to discuss how our Civil & Mechanical Construction services can support your project.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <a
                  href="mailto:oiltech.om@gmail.com"
                  className="group relative px-8 py-4 text-white font-bold rounded-full overflow-hidden shadow-2xl transition-all duration-300 hover:scale-105"
                  style={{ 
                    background: 'linear-gradient(135deg, #932445 0%, #d63865 100%)',
                    fontFamily: "'Playfair Display', serif"
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#d63865] to-[#932445] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10">oiltech.om@gmail.com</span>
                </a>
                <a
                  href="mailto:mshsuri@gmail.com"
                  className="px-8 py-4 text-white font-bold rounded-full border-2 border-white/30 hover:border-white/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 shadow-xl"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  mshsuri@gmail.com
                </a>
                <a
                  href="tel:+96899603280"
                  className="px-8 py-4 text-white font-bold rounded-full border-2 border-white/30 hover:border-white/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 shadow-xl"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  +968 99603280
                </a>
              </div>
              <p className="text-white/60 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                📍 Ghala, Muscat, Sultanate of Oman
              </p>
              <Link
                href="/services"
                className="inline-block px-8 py-4 text-white/80 font-semibold rounded-full hover:text-white transition-all duration-300 mt-4"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                View All Services →
              </Link>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}
