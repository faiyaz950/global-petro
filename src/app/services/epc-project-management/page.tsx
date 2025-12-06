'use client';

import React, { useState, useEffect } from 'react';
import { ClipboardList, CheckCircle, Shield, Award, Users, Target, Zap, Building2, Factory, Settings, FileText, TrendingUp, Clock, Globe } from 'lucide-react';
import GlobalNav from '@/components/global-nav';
import Link from 'next/link';
import Footer from '@/components/footer';

// Service-related images and corresponding texts - EPC & Project Management projects
const heroSlides = [
  {
    imageUrl: '/epcandpm.png',
    text: 'Delivering Integrated Turnkey Solutions from Concept to Commissioning'
  },
  {
    imageUrl: '/threeglob.png',
    text: 'Mabrouk North East Development - Comprehensive EPC Project Management'
  },
  {
    imageUrl: '/sixglob.png',
    text: 'Raba & Hanya Development - Complex Greenfield EPC Solutions'
  },
  {
    imageUrl: '/sevenglob.png',
    text: 'Off Plot Mechanical Contract - Engineering, Procurement & Construction Excellence'
  },
  {
    imageUrl: '/eightglob.png',
    text: 'Sales Gas Project - Ongoing EPC Services with Integrated Project Management'
  },
  {
    imageUrl: '/fourglob.png',
    text: 'Civil & Electrical Works - EPC Support for Complex Industrial Projects'
  }
];

export default function EPCProjectManagementPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000); // Change slide every 5 seconds

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

        @keyframes fadeInOut {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
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

        .stagger-1 { animation-delay: 0.1s; }
        .stagger-2 { animation-delay: 0.2s; }
        .stagger-3 { animation-delay: 0.3s; }
        .stagger-4 { animation-delay: 0.4s; }

        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(147, 36, 69, 0.3); }
          50% { box-shadow: 0 0 40px rgba(147, 36, 69, 0.6); }
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out forwards;
        }

        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out forwards;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .hover-glow:hover {
          box-shadow: 0 0 30px rgba(147, 36, 69, 0.5);
          transition: box-shadow 0.3s ease;
        }

        @keyframes slide {
          0% { background-position: 0 0; }
          100% { background-position: 20px 20px; }
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
                return (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${
                      index === currentSlide ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <img
                      src={slide.imageUrl || '/epcandpm.png'}
                      alt={slide.text || 'EPC Project Management'}
                      className="w-full h-full object-cover"
                      style={{ filter: 'brightness(0.7)' }}
                    />
                  </div>
                );
              })}
            </div>
            
            {/* Gradient Overlays - Minimal opacity for text readability */}
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
                  <span className="text-white font-medium tracking-wide text-sm" style={{ fontFamily: "'Playfair Display', serif" }}>📋 EPC & Project Management</span>
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
                EPC & Project Management
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
                    Integrated{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#932445] via-[#d63865] to-[#932445] animate-gradient">
                      Turnkey Solutions
                    </span>
                  </h2>
                  
                  <p className="text-gray-700 leading-relaxed text-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
                    At Global Petrotech SPC, we specialize in providing complete <strong>EPC (Engineering, Procurement, Construction)</strong> services and end-to-end project management for oil & gas, energy, and infrastructure projects across Oman and the GCC.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed text-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
                    With over a decade of proven execution for PDO, OXY, OGC, and leading EPC contractors, we ensure every project is delivered on time, within budget, and to the highest standards of quality and safety.
                  </p>

                  <div className="grid grid-cols-3 gap-6 pt-6">
                    <div className="text-center p-4 rounded-xl bg-gradient-to-br from-[#932445]/10 to-[#d63865]/10 animate-scaleIn" style={{ animationDelay: '0.1s' }}>
                      <div className="text-3xl font-bold text-[#932445] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>50+</div>
                      <div className="text-sm text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>Major Projects</div>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-gradient-to-br from-[#932445]/10 to-[#d63865]/10 animate-scaleIn" style={{ animationDelay: '0.2s' }}>
                      <div className="text-3xl font-bold text-[#932445] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>10+</div>
                      <div className="text-sm text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>Years Experience</div>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-gradient-to-br from-[#932445]/10 to-[#d63865]/10 animate-scaleIn" style={{ animationDelay: '0.3s' }}>
                      <div className="text-3xl font-bold text-[#932445] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>100%</div>
                      <div className="text-sm text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>Safety Record</div>
                    </div>
                  </div>
                </div>
                
                <div className="relative animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                  <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                    <img
                      src="/epcandpm.png"
                      alt="EPC Engineering Solutions - Integrated Turnkey Project Management"
                      className="w-full h-96 object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#932445] to-[#d63865] rounded-2xl opacity-20 blur-2xl animate-float"></div>
                </div>
              </div>
              
              {/* Statistics Section - Moved to Overview Section */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-16 hidden">
                {[
                  { number: '50+', label: 'Major Projects', icon: <Target size={24} /> },
                  { number: '10+', label: 'Years Experience', icon: <Clock size={24} /> },
                  { number: '100%', label: 'Safety Record', icon: <Shield size={24} /> },
                  { number: '160+', label: 'Skilled Workforce', icon: <Users size={24} /> }
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-6 glass-effect rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 animate-scaleIn"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-[#932445] to-[#d63865] mb-4 text-white">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-[#932445] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{stat.number}</div>
                    <div className="text-sm text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* EPC Capabilities Section */}
          <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto max-w-7xl px-4">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect shadow-xl shadow-[#932445]/20 mb-4 animate-scaleIn">
                  <div className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#932445] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-r from-[#932445] to-[#d63865]"></span>
                  </div>
                  <span className="text-[#932445] font-bold text-xs tracking-widest" style={{ fontFamily: "'Playfair Display', serif" }}>OUR EPC CAPABILITIES</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  What We{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#932445] via-[#d63865] to-[#932445] animate-gradient">
                    Deliver
                  </span>
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {[
                  {
                    title: 'Full EPC Execution',
                    description: 'Single-point responsibility for small to medium-scale projects. We take complete ownership from initial concept through final commissioning, ensuring seamless coordination across all project phases. Our integrated team manages engineering design, procurement activities, construction execution, and project controls under one unified management structure.',
                    icon: <Target size={32} />
                  },
                  {
                    title: 'EPC Support to Main Contractors',
                    description: 'Seamless integration with global EPC giants (L&T, Galfar, Petrofac, Punj Lloyd, etc.). We provide specialized support services including detailed engineering packages, procurement assistance, construction supervision, and commissioning support. Our flexible approach allows us to adapt to various project structures and client requirements.',
                    icon: <Building2 size={32} />
                  },
                  {
                    title: 'Brownfield & Greenfield Projects',
                    description: 'Expertise in live plant environments and new developments. Our brownfield experience includes working safely in operating facilities with minimal disruption, while our greenfield capabilities cover complete facility development from site preparation to production start-up. We excel in both environments with specialized safety protocols and execution strategies.',
                    icon: <Factory size={32} />
                  },
                  {
                    title: 'Multi-disciplinary Coordination',
                    description: 'Civil, mechanical, electrical, instrumentation, piping, and structural teams working as one unit. Our integrated project approach ensures all disciplines collaborate effectively, eliminating interface issues and optimizing project delivery. We maintain clear communication channels and use advanced coordination tools to manage complex multi-disciplinary projects.',
                    icon: <Users size={32} />
                  }
                ].map((capability, index) => (
                  <div
                    key={index}
                    className="group relative glass-effect rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-white/50 hover:border-[#932445]/30 hover-tilt animate-scaleIn hover-glow"
                    style={{ animationDelay: `${index * 0.1}s`, fontFamily: "'Playfair Display', serif" }}
                  >
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#932445]/0 via-[#932445]/0 to-[#d63865]/0 group-hover:from-[#932445]/10 group-hover:via-[#d63865]/15 group-hover:to-[#932445]/10 transition-all duration-700 -z-10"></div>
                    
                    {/* Animated Background Pattern */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(147,36,69,0.05)_50%,transparent_75%)] bg-[length:20px_20px] animate-[slide_20s_linear_infinite]"></div>
                    </div>
                    
                    <div className="relative z-10">
                      <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-[#932445] to-[#d63865] mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-md group-hover:shadow-xl group-hover:shadow-[#932445]/50">
                        <div className="text-white group-hover:animate-pulse">{capability.icon}</div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#932445] transition-colors duration-300" style={{ fontFamily: "'Playfair Display', serif" }}>{capability.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-sm group-hover:text-gray-700 transition-colors duration-300" style={{ fontFamily: "'Inter', sans-serif" }}>{capability.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Comprehensive Services Section */}
          <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-rose-50 relative overflow-hidden">
            <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-gradient-to-br from-[#932445]/10 via-[#d63865]/5 to-transparent rounded-full blur-3xl animate-float"></div>
            
            <div className="container mx-auto max-w-7xl px-4 relative z-10">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect shadow-xl shadow-[#932445]/20 mb-4 animate-scaleIn">
                  <div className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#932445] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-r from-[#932445] to-[#d63865]"></span>
                  </div>
                  <span className="text-[#932445] font-bold text-xs tracking-widest" style={{ fontFamily: "'Playfair Display', serif" }}>COMPREHENSIVE SERVICES</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Complete{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#932445] via-[#d63865] to-[#932445] animate-gradient">
                    Solutions
                  </span>
                </h2>
              </div>

              <div className="space-y-12 max-w-5xl mx-auto">
                {/* Conceptual & Feasibility Studies */}
                <div className="glass-effect rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 animate-scaleIn">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-[#932445] to-[#d63865] text-white">
                      <FileText size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 flex-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Conceptual & Feasibility Studies
                    </h3>
                  </div>
                  <div className="ml-16 space-y-3">
                    <p className="text-gray-600 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Early-stage project evaluation, cost estimation, risk analysis, and technology selection. We conduct comprehensive feasibility studies to assess project viability, identify potential challenges, and recommend optimal solutions.
                    </p>
                    <ul className="text-gray-600 leading-relaxed space-y-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                        <span>Technical feasibility assessment and process selection</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                        <span>Preliminary cost estimation and budget development</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                        <span>Risk identification and mitigation strategies</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                        <span>Technology evaluation and vendor assessment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                        <span>Regulatory compliance review and permitting requirements</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* FEED */}
                <div className="glass-effect rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 animate-scaleIn stagger-1">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-[#932445] to-[#d63865] text-white">
                      <TrendingUp size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 flex-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Front-End Engineering Design (FEED)
                    </h3>
                  </div>
                  <div className="ml-16 space-y-3">
                    <p className="text-gray-600 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Process optimization, layout development, and authority approval packages. Our FEED services include process design optimization, equipment sizing, preliminary cost estimates, and preparation of regulatory submission packages.
                    </p>
                    <ul className="text-gray-600 leading-relaxed space-y-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                        <span>Process flow diagrams (PFDs) and piping & instrumentation diagrams (P&IDs)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                        <span>Equipment sizing and selection</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                        <span>Plant layout optimization and 3D model development</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                        <span>Preliminary engineering specifications and data sheets</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                        <span>Regulatory approval packages and permit applications</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Detailed Engineering & Design */}
                <div className="glass-effect rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 animate-scaleIn stagger-2">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-[#932445] to-[#d63865] text-white">
                      <Settings size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 flex-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Detailed Engineering & Design
                    </h3>
                  </div>
                  <div className="ml-16 space-y-3">
                    <p className="text-gray-600 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Comprehensive detailed engineering covering all disciplines with advanced 3D modeling and clash detection capabilities.
                    </p>
                    <ul className="text-gray-600 leading-relaxed space-y-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                        <span><strong>Civil & Structural Design:</strong> Foundation design, structural steel design, concrete structures, and site preparation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                        <span><strong>Piping & Mechanical Design:</strong> Piping layouts, pipe stress analysis, equipment design, and mechanical systems</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                        <span><strong>Electrical & Instrumentation Design:</strong> Power distribution, control systems, instrumentation loops, and automation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                        <span><strong>3D Modeling & Clash Detection:</strong> Using AutoCAD Plant 3D, PDMS, Tekla, and Revit for integrated design coordination</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                        <span><strong>Stress Analysis & Material Selection:</strong> Pipe stress analysis, structural analysis, and material specification per international codes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                        <span><strong>Construction Documentation:</strong> Detailed construction drawings, piping isometrics, fabrication drawings, and comprehensive MTOs</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Procurement Support */}
                <div className="glass-effect rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 animate-scaleIn stagger-3">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-[#932445] to-[#d63865] text-white">
                      <Globe size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 flex-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Procurement Support
                    </h3>
                  </div>
                  <div className="ml-16 space-y-3">
                    <p className="text-gray-600 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Comprehensive procurement management ensuring quality materials and equipment are sourced, delivered, and tracked throughout the project lifecycle.
                    </p>
                    <ul className="text-gray-600 leading-relaxed space-y-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                        <span><strong>Vendor Pre-qualification & Tendering:</strong> Vendor assessment, RFQ preparation, bid package development, and tender management</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                        <span><strong>Technical Bid Evaluation:</strong> Comprehensive technical review, commercial analysis, and vendor selection recommendations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                        <span><strong>Expediting, Inspection & Logistics:</strong> Progress monitoring, factory inspections, quality assurance, and logistics coordination</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                        <span><strong>Full Material Traceability:</strong> Complete documentation chain from source to installation, including certificates, test reports, and compliance records</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Project Planning & Controls */}
                <div className="glass-effect rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 animate-scaleIn stagger-4">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-[#932445] to-[#d63865] text-white">
                      <ClipboardList size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 flex-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Project Planning & Controls
                    </h3>
                  </div>
                  <div className="ml-16 space-y-3">
                    <p className="text-gray-600 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Advanced project controls ensuring projects are delivered on time and within budget through comprehensive planning, monitoring, and risk management.
                    </p>
                    <ul className="text-gray-600 leading-relaxed space-y-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                        <span><strong>Level-3/4 Schedules:</strong> Detailed project schedules using Primavera P6 and MS Project with resource loading and critical path analysis</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                        <span><strong>Progress Monitoring & Reporting:</strong> Daily, weekly, and monthly progress tracking with comprehensive reporting dashboards and KPIs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                        <span><strong>Cost Control & Change Management:</strong> Budget tracking, cost forecasting, variance analysis, and formal change order management</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                        <span><strong>Risk Registers & Mitigation Plans:</strong> Proactive risk identification, assessment, and development of mitigation strategies with regular reviews</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Construction Management */}
                <div className="glass-effect rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 animate-scaleIn">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-[#932445] to-[#d63865] text-white">
                      <Building2 size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 flex-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Construction Management
                    </h3>
                  </div>
                  <div className="ml-16 space-y-3">
                    <p className="text-gray-600 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                      On-site construction management ensuring safe, efficient, and quality execution with effective coordination of all project stakeholders.
                    </p>
                    <ul className="text-gray-600 leading-relaxed space-y-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                        <span><strong>Site Mobilization & Establishment:</strong> Site setup, temporary facilities, safety infrastructure, and site logistics planning</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                        <span><strong>Resource Allocation:</strong> Optimal deployment of skilled manpower and construction equipment to maximize productivity</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                        <span><strong>Daily/Weekly Progress Reviews:</strong> Regular site meetings, progress assessment, issue resolution, and action item tracking</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                        <span><strong>Interface Management:</strong> Coordination with client representatives, subcontractors, vendors, and regulatory authorities</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Pre-commissioning & Commissioning Support */}
                <div className="glass-effect rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 animate-scaleIn stagger-1">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-[#932445] to-[#d63865] text-white">
                      <Zap size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 flex-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Pre-commissioning & Commissioning Support
                    </h3>
                  </div>
                  <div className="ml-16 space-y-3">
                    <p className="text-gray-600 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Comprehensive commissioning support ensuring systems are properly tested, validated, and ready for safe operation before handover to the client.
                    </p>
                    <ul className="text-gray-600 leading-relaxed space-y-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                        <span><strong>Mechanical Completion (MC) Walkthroughs:</strong> Systematic inspection and verification of all installed systems against design specifications</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                        <span><strong>System Punch Listing:</strong> Comprehensive documentation of deficiencies and tracking until closure</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                        <span><strong>Hydrotesting, Leak Testing & Inerting:</strong> Pressure testing, leak detection, system flushing, and preparation for operation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                        <span><strong>Start-up Assistance & Performance Testing:</strong> Operational support during initial start-up and performance validation testing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                        <span><strong>Handover Documentation & As-built Drawings:</strong> Complete project documentation package including as-built drawings, operation manuals, and maintenance procedures</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Shutdown & Turnaround Management */}
                <div className="glass-effect rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 animate-scaleIn stagger-2">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-[#932445] to-[#d63865] text-white">
                      <Clock size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 flex-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Shutdown & Turnaround Management
                    </h3>
                  </div>
                  <div className="ml-16 space-y-3">
                    <p className="text-gray-600 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Specialized planning and execution for plant shutdowns with minimum downtime. Our shutdown management expertise ensures critical maintenance and modifications are completed efficiently while minimizing production impact.
                    </p>
                    <ul className="text-gray-600 leading-relaxed space-y-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                        <span>Detailed shutdown planning and scheduling optimization</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                        <span>Resource mobilization and coordination for rapid execution</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                        <span>Safety management for simultaneous operations (SIMOPS)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                        <span>Critical path management to minimize downtime duration</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* EPC Process Flow Section */}
          <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto max-w-7xl px-4">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect shadow-xl shadow-[#932445]/20 mb-4 animate-scaleIn">
                  <div className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#932445] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-r from-[#932445] to-[#d63865]"></span>
                  </div>
                  <span className="text-[#932445] font-bold text-xs tracking-widest" style={{ fontFamily: "'Playfair Display', serif" }}>OUR PROCESS</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  EPC Project{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#932445] via-[#d63865] to-[#932445] animate-gradient">
                    Lifecycle
                  </span>
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
                  A structured approach from concept to commissioning ensuring seamless project delivery
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {[
                  {
                    step: '01',
                    title: 'Engineering',
                    description: 'Conceptual design, FEED, detailed engineering, and 3D modeling. We transform project requirements into detailed engineering packages ready for procurement and construction.',
                    icon: <Settings size={32} />,
                    image: 'https://images.unsplash.com/photo-1736337271086-277e15477ea8?w=600&q=80'
                  },
                  {
                    step: '02',
                    title: 'Procurement',
                    description: 'Vendor management, material sourcing, and quality assurance. Our procurement team ensures timely delivery of quality materials and equipment with full traceability.',
                    icon: <Globe size={32} />,
                    image: 'https://images.unsplash.com/photo-1581092448348-5221b6a941b2?w=600&q=80'
                  },
                  {
                    step: '03',
                    title: 'Construction',
                    description: 'Site execution, installation, and quality control. Our construction teams deliver safe, efficient, and quality installations following international standards.',
                    icon: <Building2 size={32} />,
                    image: 'https://images.unsplash.com/photo-1623036484438-002339898926?w=600&q=80'
                  },
                  {
                    step: '04',
                    title: 'Commissioning',
                    description: 'Testing, start-up, and handover to operations. We ensure all systems are properly tested, validated, and ready for safe operation before final handover.',
                    icon: <Zap size={32} />,
                    image: 'https://images.unsplash.com/photo-1684346605835-69888f742522?w=600&q=80'
                  }
                ].map((phase, index) => (
                  <div
                    key={index}
                    className="group relative glass-effect rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover-tilt animate-scaleIn"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#932445]/0 via-[#932445]/0 to-[#d63865]/0 group-hover:from-[#932445]/5 group-hover:via-[#d63865]/10 group-hover:to-[#932445]/5 transition-all duration-700 -z-10"></div>
                    
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={phase.image}
                        alt={phase.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                      <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-gradient-to-br from-[#932445] to-[#d63865] flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        {phase.step}
                      </div>
                      <div className="absolute top-4 right-4 inline-flex p-2 rounded-lg bg-white/20 backdrop-blur-sm text-white group-hover:scale-110 transition-transform duration-500">
                        {phase.icon}
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{phase.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>{phase.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-rose-50 relative overflow-hidden">
            <div className="container mx-auto max-w-7xl px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Why Choose{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#932445] via-[#d63865] to-[#932445] animate-gradient">
                    Global Petrotech
                  </span>
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
                  for EPC & Project Management?
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {[
                  {
                    title: 'ISO 9001:2015 Certified',
                    description: 'Our quality management system is ISO 9001:2015 certified, ensuring consistent quality processes at every stage. We maintain rigorous quality control procedures, regular audits, and continuous improvement initiatives to deliver excellence in every project.',
                    icon: <Award size={40} />
                  },
                  {
                    title: '100% Safety Record',
                    description: 'We maintain a perfect safety record across all managed projects through comprehensive HSE programs, regular safety training, proactive risk management, and strict adherence to international safety standards. Safety is our top priority in every operation.',
                    icon: <Shield size={40} />
                  },
                  {
                    title: 'In-house Engineering Team',
                    description: 'Our 160+ skilled workforce includes certified professionals with expertise in ASME, AWS, CSWIP, and other international standards. Our in-house capabilities span all engineering disciplines, reducing dependency on external resources and ensuring faster project delivery.',
                    icon: <Users size={40} />
                  },
                  {
                    title: 'Proven Delivery',
                    description: 'With 50+ major projects successfully completed for leading clients including PDO, OXY, MEDCO, OGC, and major EPC contractors, we have a proven track record of delivering complex projects on time and within budget across diverse sectors.',
                    icon: <CheckCircle size={40} />
                  },
                  {
                    title: 'Agile & Flexible',
                    description: 'Our flat organizational structure enables quick decision-making and rapid response to project needs. We adapt quickly to changing requirements, client preferences, and project challenges, ensuring optimal outcomes without bureaucratic delays.',
                    icon: <Target size={40} />
                  },
                  {
                    title: 'Strong Local Content',
                    description: "We are Riyada and JSRS certified, demonstrating our commitment to local content development and supporting Oman's economic growth. Our local expertise combined with international standards ensures projects benefit from both local knowledge and global best practices.",
                    icon: <Globe size={40} />
                  }
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="text-center p-8 glass-effect rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover-tilt animate-scaleIn"
                    style={{ animationDelay: `${index * 0.1}s`, fontFamily: "'Playfair Display', serif" }}
                  >
                    <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-[#932445] to-[#d63865] mb-4 text-white">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>{feature.description}</p>
                  </div>
                ))}
              </div>

              <div className="mt-16 text-center max-w-3xl mx-auto">
                <p className="text-lg text-gray-700 leading-relaxed" style={{ fontFamily: "'Playfair Display', serif" }}>
                  From a single well hook-up to a complete production facility, we turn your vision into reality – safely, efficiently, and sustainably.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-24 bg-black relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70"></div>
            
            <div className="container mx-auto max-w-4xl px-4 text-center relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Ready to Discuss Your Next Project?
              </h2>
              <p className="text-xl text-white/70 mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
                Contact us to learn how our EPC & Project Management services can support your project.
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
                  href="tel:+96899603280"
                  className="px-8 py-4 text-white font-bold rounded-full border-2 border-white/30 hover:border-white/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 shadow-xl"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  +968 99603280
                </a>
              </div>
              <Link
                href="/services"
                className="inline-block px-8 py-4 text-white/80 font-semibold rounded-full hover:text-white transition-all duration-300"
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

