'use client';

import React, { useState, useEffect } from 'react';
import { Building2, CheckCircle, Shield, Award, Users, Target, Zap, Factory, Settings, Wrench, HardHat, Clock, Globe, Route, Construction } from 'lucide-react';
import GlobalNav from '@/components/global-nav';
import Link from 'next/link';
import Footer from '@/components/footer';
import { PlaceHolderImages } from '@/lib/placeholder-images';

// Service-related images and corresponding texts
const heroSlides = [
  {
    imageId: 'service-infrastructure',
    text: 'Building Tomorrow\'s Oman – Roads, Municipal Projects, Landscaping & SME Facilities'
  },
  {
    imageId: 'project-4',
    text: 'Modern Infrastructure Development and Bridge Construction'
  },
  {
    imageId: 'road-construction',
    text: 'Road Construction and Infrastructure Enhancement Services'
  },
  {
    imageId: 'grader-road',
    text: 'Comprehensive Infrastructure Solutions for Urban Development'
  },
  {
    imageId: 'service-construction',
    text: 'Municipal Projects and Public Infrastructure Development'
  },
  {
    imageId: 'civil-electrical',
    text: 'Integrated Infrastructure Solutions from Planning to Execution'
  }
];

export default function InfrastructureDevelopmentPage() {
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
                const slideImage = PlaceHolderImages.find(img => img.id === slide.imageId) || PlaceHolderImages.find(img => img.id === 'service-infrastructure');
                return (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <img
                      src={slideImage?.imageUrl || 'https://images.unsplash.com/photo-1532472601364-dd1d9bde108b?w=1920&q=80'}
                      alt={slideImage?.description || 'Infrastructure Development'}
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
                  <span className="text-white font-medium tracking-wide text-sm" style={{ fontFamily: "'Playfair Display', serif" }}>🏛️ Infrastructure Development</span>
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
                Infrastructure Development
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
                    Building{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#932445] via-[#d63865] to-[#932445] animate-gradient">
                      Tomorrow's Oman
                    </span>
                  </h2>
                  
                  <p className="text-gray-700 leading-relaxed text-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Global Petrotech SPC has established itself as a trusted Omani SME contractor for civil infrastructure, municipal development (MED), urban landscaping, and industrial facilities. We deliver high-quality, sustainable, and cost-effective solutions that support <strong>Oman's Vision 2040</strong>, local community growth, and the <strong>In-Country Value (ICV)</strong> program.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed text-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
                    From remote desert access roads for PDO to public parks and SME industrial workshops in Muscat, we handle projects of every scale with the same commitment to excellence.
                  </p>

                  <div className="grid grid-cols-3 gap-6 pt-6">
                    <div className="text-center p-4 rounded-xl bg-gradient-to-br from-[#932445]/10 to-[#d63865]/10 animate-scaleIn hover-glow" style={{ animationDelay: '0.1s' }}>
                      <div className="text-3xl font-bold text-[#932445] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>100%</div>
                      <div className="text-sm text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>Omani SME</div>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-gradient-to-br from-[#932445]/10 to-[#d63865]/10 animate-scaleIn hover-glow" style={{ animationDelay: '0.2s' }}>
                      <div className="text-3xl font-bold text-[#932445] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>160+</div>
                      <div className="text-sm text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>Workforce</div>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-gradient-to-br from-[#932445]/10 to-[#d63865]/10 animate-scaleIn hover-glow" style={{ animationDelay: '0.3s' }}>
                      <div className="text-3xl font-bold text-[#932445] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Vision</div>
                      <div className="text-sm text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>2040</div>
                    </div>
                  </div>
                </div>
                
                <div className="relative animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                  <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                    <img
                      src="https://images.unsplash.com/photo-1532472601364-dd1d9bde108b?w=800&q=80"
                      alt="Infrastructure Development"
                      className="w-full h-96 object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#932445] to-[#d63865] rounded-2xl opacity-20 blur-2xl animate-float"></div>
                </div>
              </div>
            </div>
          </section>

          {/* Complete Infrastructure Services */}
          <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto max-w-7xl px-4">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect shadow-xl shadow-[#932445]/20 mb-4 animate-scaleIn">
                  <div className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#932445] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-r from-[#932445] to-[#d63865]"></span>
                  </div>
                  <span className="text-[#932445] font-bold text-xs tracking-widest" style={{ fontFamily: "'Playfair Display', serif" }}>OUR COMPLETE SERVICES</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Complete Infrastructure{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#932445] via-[#d63865] to-[#932445] animate-gradient">
                    Development Services
                  </span>
                </h2>
              </div>

              <div className="space-y-8 max-w-6xl mx-auto">
                {/* Road Construction & Maintenance */}
                <div className="glass-effect rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 animate-scaleIn hover-glow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-[#932445] to-[#d63865] text-white">
                      <Route size={32} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Road Construction & Maintenance
                      </h3>
                      <ul className="text-gray-600 leading-relaxed space-y-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                          <span>Grader roads, gravel roads, and asphalt roads in oil fields and public areas</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                          <span>Road re-sheeting and rehabilitation (Marmul, Nimr, Harweel, Birba, etc.)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                          <span>Road crossings for pipelines and cables</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                          <span>Culverts, drainage systems, and road signage</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                          <span>Heavy compaction using owned 3–10 ton vibratory rollers and Komatsu graders</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Municipal & Environmental Development */}
                <div className="glass-effect rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 animate-scaleIn stagger-1 hover-glow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-[#932445] to-[#d63865] text-white">
                      <Building2 size={32} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Municipal & Environmental Development (MED) Projects
                      </h3>
                      <ul className="text-gray-600 leading-relaxed space-y-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                          <span>Complete civil works for municipalities and governorates</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                          <span>Public facilities (community centers, mosques, schools, health clinics)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                          <span>Stormwater drainage networks and sewage systems</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                          <span>Waste management facility support structures</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Urban Landscaping & Beautification */}
                <div className="glass-effect rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 animate-scaleIn stagger-2 hover-glow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-[#932445] to-[#d63865] text-white">
                      <Globe size={32} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Urban Landscaping & Beautification
                      </h3>
                      <ul className="text-gray-600 leading-relaxed space-y-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                          <span>Public parks, green spaces, and roundabout landscaping</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                          <span>Tree planting, irrigation systems (drip & sprinkler), and turfing</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                          <span>Hardscaping – walkways, retaining walls, decorative fencing</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                          <span>Water features and children's play areas</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                          <span>Maintenance contracts for government and private landscaped areas</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* SME & Light Industrial Facilities */}
                <div className="glass-effect rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 animate-scaleIn stagger-3 hover-glow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-[#932445] to-[#d63865] text-white">
                      <Factory size={32} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                        SME & Light Industrial Facilities
                      </h3>
                      <ul className="text-gray-600 leading-relaxed space-y-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                          <span>Construction and upgrading of workshops, warehouses, and offices for Omani SMEs</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                          <span>Light industrial buildings with steel structure and cladding</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                          <span>Internal roads, parking areas, and boundary walls</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                          <span>Utility connections (water, power, drainage)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Fencing & Security Infrastructure */}
                <div className="glass-effect rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 animate-scaleIn hover-glow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-[#932445] to-[#d63865] text-white">
                      <Shield size={32} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Fencing & Security Infrastructure
                      </h3>
                      <ul className="text-gray-600 leading-relaxed space-y-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                          <span>Perimeter fencing for oil field locations, telecom sites, and public facilities</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                          <span>Chain-link, barbed wire, anti-climb, and decorative fencing</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                          <span>Gates, turnstiles, and access control structures</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                          <span>Solar-powered security lighting</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Cable & Utility Trenching */}
                <div className="glass-effect rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 animate-scaleIn stagger-1 hover-glow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-[#932445] to-[#d63865] text-white">
                      <Zap size={32} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Cable & Utility Trenching
                      </h3>
                      <ul className="text-gray-600 leading-relaxed space-y-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                          <span>Trenching and backfilling for fiber optic cables (OFC), power cables, and water lines</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                          <span>Route surveying, warning tape, and concrete encasement where required</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                          <span><strong>Proven experience:</strong> Qarn Alam to Saih Rawl (OGC) and Nimr OFC Expansion (Ooredoo)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Site Preparation & Earthworks */}
                <div className="glass-effect rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 animate-scaleIn stagger-2 hover-glow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-[#932445] to-[#d63865] text-white">
                      <Construction size={32} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Site Preparation & Earthworks
                      </h3>
                      <ul className="text-gray-600 leading-relaxed space-y-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                          <span>Bulk excavation and leveling</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                          <span>Rock breaking and removal</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                          <span>Site drainage and compaction</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                          <span>Temporary facilities and site offices setup</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Projects */}
          <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-rose-50 relative overflow-hidden">
            <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-gradient-to-br from-[#932445]/10 via-[#d63865]/5 to-transparent rounded-full blur-3xl animate-float"></div>
            
            <div className="container mx-auto max-w-7xl px-4 relative z-10">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect shadow-xl shadow-[#932445]/20 mb-4 animate-scaleIn">
                  <div className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#932445] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-r from-[#932445] to-[#d63865]"></span>
                  </div>
                  <span className="text-[#932445] font-bold text-xs tracking-widest" style={{ fontFamily: "'Playfair Display', serif" }}>FEATURED PROJECTS</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Featured Infrastructure{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#932445] via-[#d63865] to-[#932445] animate-gradient">
                    Projects
                  </span>
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: 'Road Re-sheeting',
                    client: 'PDO',
                    location: 'Marmul, Nimr, Karim West',
                    year: '2012–2013',
                    description: 'Comprehensive road re-sheeting and rehabilitation across multiple oil field locations.',
                    image: 'https://images.unsplash.com/photo-1532472601364-dd1d9bde108b?w=600&q=80'
                  },
                  {
                    title: 'New Grader Roads & Asphalt Crossings',
                    client: 'PDO',
                    location: 'Nimr-C',
                    year: '2013',
                    description: 'Construction of new grader roads and asphalt crossings for oil field access.',
                    image: 'https://images.unsplash.com/photo-1623036484438-002339898926?w=600&q=80'
                  },
                  {
                    title: 'Nimr OFC Expansion & Additional Fencing',
                    client: 'NAWRAS/Ooredoo',
                    location: 'Nimr',
                    year: '2015',
                    description: 'Fiber optic cable expansion and comprehensive fencing installation project.',
                    image: 'https://images.unsplash.com/photo-1515630771457-09367d0ae038?w=600&q=80'
                  },
                  {
                    title: 'Public Landscaping & MED Projects',
                    client: 'Municipalities',
                    location: 'Muscat, Sohar, Interior',
                    year: 'Ongoing',
                    description: 'Multiple public landscaping and municipal development projects across Oman.',
                    image: 'https://images.unsplash.com/photo-1674606071893-2a9023075f70?w=600&q=80'
                  },
                  {
                    title: 'SME Workshop & Warehouse Constructions',
                    client: 'SMEs',
                    location: 'Various Locations',
                    year: 'Ongoing',
                    description: 'SME workshop and warehouse constructions under Riyada and local content programs.',
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
                          {project.client} • {project.location} • {project.year}
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
                  Why Global Petrotech{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#932445] via-[#d63865] to-[#932445] animate-gradient">
                    for Infrastructure?
                  </span>
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {[
                  {
                    title: '100% Omani SME',
                    description: '100% Omani SME with Riyada & JSRS certification ensuring local content and quality standards.',
                    icon: <Award size={40} />
                  },
                  {
                    title: 'Strong Local Focus',
                    description: 'Strong focus on local employment and training (over 160 Omani and resident workers).',
                    icon: <Users size={40} />
                  },
                  {
                    title: 'Complete In-house Capability',
                    description: 'Complete in-house capability – no dependency on third-party subcontractors for civil works.',
                    icon: <Factory size={40} />
                  },
                  {
                    title: 'Own Equipment Fleet',
                    description: 'Own equipment fleet ready for instant deployment (JCB, rollers, graders, HIAB cranes, trailers).',
                    icon: <Settings size={40} />
                  },
                  {
                    title: 'Sustainable Practices',
                    description: 'Sustainable practices: water recycling, eco-friendly materials, and waste minimization.',
                    icon: <Globe size={40} />
                  },
                  {
                    title: 'Excellent Relationships',
                    description: 'Excellent relationships with municipalities, Ministry of Transport, and Public Authority for SME Development.',
                    icon: <Globe size={40} />
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
                  We don't just build infrastructure – we build stronger communities and a greener, more beautiful Oman.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-24 bg-black relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70"></div>
            
            <div className="container mx-auto max-w-4xl px-4 text-center relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Ready to Develop Your Next Project?
              </h2>
              <p className="text-xl text-white/70 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Ready to develop your next road, park, or SME facility?
              </p>
              <p className="text-lg text-white/60 mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
                Contact us today for a free consultation and quotation.
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
                📍 Headquarters: Ghala, Muscat, Sultanate of Oman
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

