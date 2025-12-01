'use client';

import React from 'react';
import { Users, CheckCircle, Shield, Award, Target, Zap, Factory, Settings, Wrench, HardHat, Clock, Globe, Building2, Truck, Cog, Briefcase, UserCheck, AlertCircle } from 'lucide-react';
import GlobalNav from '@/components/global-nav';
import Link from 'next/link';
import Footer from '@/components/footer';

export default function ManpowerSupplyEquipmentRentalPage() {
  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap');

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px); }
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
            {/* Background Image */}
            <div className="absolute inset-0">
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1920&q=80"
                alt="Manpower Supply & Equipment Rental"
                className="w-full h-full object-cover opacity-40"
                style={{ filter: 'brightness(0.3)' }}
              />
            </div>
            
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60"></div>
            
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
                  <span className="text-white font-medium tracking-wide text-sm" style={{ fontFamily: "'Playfair Display', serif" }}>👥 Manpower Supply & Equipment Rental</span>
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
                Manpower Supply & Equipment Rental
              </h1>

              {/* Decorative Line */}
              <div className="w-32 h-1 mb-8 mx-auto rounded-full animate-fadeIn" style={{ background: 'linear-gradient(90deg, transparent, #932445, #fcd34d, #932445, transparent)' }}></div>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-white/70 text-center max-w-3xl mx-auto mb-10 font-light tracking-wide animate-fadeIn" style={{ animationDelay: '0.2s', fontFamily: "'Playfair Display', serif" }}>
                Your One-Stop Resource Partner for Projects Across Oman
              </p>
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
                    Strongest Resource{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#932445] via-[#d63865] to-[#932445] animate-gradient">
                      Pool in Oman
                    </span>
                  </h2>
                  
                  <p className="text-gray-700 leading-relaxed text-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Global Petrotech SPC operates one of the strongest and most reliable manpower and equipment pools in the Sultanate. We supply fully certified, experienced personnel and well-maintained equipment on short-notice – daily, weekly, monthly, or long-term contracts.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed text-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
                    <strong>Approved by:</strong> PDO, Oxy, OGC, Galfar, L&T, Petrofac, Punj Lloyd, Al Turki and many more.
                  </p>

                  <div className="grid grid-cols-3 gap-6 pt-6">
                    <div className="text-center p-4 rounded-xl bg-gradient-to-br from-[#932445]/10 to-[#d63865]/10 animate-scaleIn hover-glow" style={{ animationDelay: '0.1s' }}>
                      <div className="text-3xl font-bold text-[#932445] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>160+</div>
                      <div className="text-sm text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>Personnel</div>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-gradient-to-br from-[#932445]/10 to-[#d63865]/10 animate-scaleIn hover-glow" style={{ animationDelay: '0.2s' }}>
                      <div className="text-3xl font-bold text-[#932445] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>24-72h</div>
                      <div className="text-sm text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>Mobilization</div>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-gradient-to-br from-[#932445]/10 to-[#d63865]/10 animate-scaleIn hover-glow" style={{ animationDelay: '0.3s' }}>
                      <div className="text-3xl font-bold text-[#932445] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>50+</div>
                      <div className="text-sm text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>Projects</div>
                    </div>
                  </div>
                </div>
                
                <div className="relative animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                  <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                    <img
                      src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80"
                      alt="Manpower Supply & Equipment Rental"
                      className="w-full h-96 object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#932445] to-[#d63865] rounded-2xl opacity-20 blur-2xl animate-float"></div>
                </div>
              </div>
            </div>
          </section>

          {/* Manpower Supply Services */}
          <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto max-w-7xl px-4">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect shadow-xl shadow-[#932445]/20 mb-4 animate-scaleIn">
                  <div className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#932445] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-r from-[#932445] to-[#d63865]"></span>
                  </div>
                  <span className="text-[#932445] font-bold text-xs tracking-widest" style={{ fontFamily: "'Playfair Display', serif" }}>MANPOWER SUPPLY</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Manpower Supply{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#932445] via-[#d63865] to-[#932445] animate-gradient">
                    Services
                  </span>
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
                  We provide pre-screened, medically fit, and certified professionals ready for immediate mobilization.
                </p>
              </div>

              <div className="space-y-8 max-w-6xl mx-auto">
                {/* Management & Engineering */}
                <div className="glass-effect rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 animate-scaleIn hover-glow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-[#932445] to-[#d63865] text-white">
                      <Briefcase size={32} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Management & Engineering
                      </h3>
                      <div className="space-y-3">
                        <div>
                          <p className="text-gray-700 font-semibold mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                            Positions Regularly Supplied:
                          </p>
                          <p className="text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                            Project Managers, Construction Managers, Planning Engineers, Civil/Mechanical/Electrical/Piping Engineers
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-700 font-semibold mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                            Certifications & Training:
                          </p>
                          <p className="text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                            B.Sc./M.Sc. Engineering, PMP, IOSH/NEBOSH
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Supervision & QC */}
                <div className="glass-effect rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 animate-scaleIn stagger-1 hover-glow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-[#932445] to-[#d63865] text-white">
                      <UserCheck size={32} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Supervision & QC
                      </h3>
                      <div className="space-y-3">
                        <div>
                          <p className="text-gray-700 font-semibold mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                            Positions Regularly Supplied:
                          </p>
                          <p className="text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                            Site Supervisors, QA/QC Inspectors, Welding Inspectors, Material Controllers
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-700 font-semibold mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                            Certifications & Training:
                          </p>
                          <p className="text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                            CSWIP 3.1/3.2, ASNT Level II, ISO 9001 Lead Auditor
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Skilled Trades */}
                <div className="glass-effect rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 animate-scaleIn stagger-2 hover-glow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-[#932445] to-[#d63865] text-white">
                      <Wrench size={32} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Skilled Trades
                      </h3>
                      <div className="space-y-3">
                        <div>
                          <p className="text-gray-700 font-semibold mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                            Positions Regularly Supplied:
                          </p>
                          <p className="text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                            6G Welders (CS/SS/Alloy), Pipe Fitters & Fabricators, Riggers (TUV/Lee-a certified), Scaffolders (CITB)
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-700 font-semibold mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                            Certifications & Training:
                          </p>
                          <p className="text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                            AWS, DNV-GL, TUV, OPITO-approved rigger training
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Electrical & Instrumentation */}
                <div className="glass-effect rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 animate-scaleIn stagger-3 hover-glow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-[#932445] to-[#d63865] text-white">
                      <Zap size={32} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Electrical & Instrumentation
                      </h3>
                      <div className="space-y-3">
                        <div>
                          <p className="text-gray-700 font-semibold mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                            Positions Regularly Supplied:
                          </p>
                          <p className="text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                            Electricians (COMPEX), Instrument Technicians, Loop Checkers
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-700 font-semibold mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                            Certifications & Training:
                          </p>
                          <p className="text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                            COMPEX, H2S Awareness, Confined Space Entry
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Safety Professionals */}
                <div className="glass-effect rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 animate-scaleIn hover-glow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-[#932445] to-[#d63865] text-white">
                      <Shield size={32} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Safety Professionals
                      </h3>
                      <div className="space-y-3">
                        <div>
                          <p className="text-gray-700 font-semibold mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                            Positions Regularly Supplied:
                          </p>
                          <p className="text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                            HSE Managers, HSE Officers, Permit Controllers, Fire Watch, Safety Supervisors
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-700 font-semibold mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                            Certifications & Training:
                          </p>
                          <p className="text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                            NEBOSH IGC, IOSH Managing Safely, OSHA, PDO-approved
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Heavy Equipment Operators */}
                <div className="glass-effect rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 animate-scaleIn stagger-1 hover-glow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-[#932445] to-[#d63865] text-white">
                      <Cog size={32} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Heavy Equipment Operators
                      </h3>
                      <div className="space-y-3">
                        <div>
                          <p className="text-gray-700 font-semibold mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                            Positions Regularly Supplied:
                          </p>
                          <p className="text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                            Crane Operators (up to 50T), JCB Operators, Grader Operators, Roller Operators, Forklift Drivers
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-700 font-semibold mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                            Certifications & Training:
                          </p>
                          <p className="text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                            Oman MOHRE license, Third-party certified
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Support Workforce */}
                <div className="glass-effect rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 animate-scaleIn stagger-2 hover-glow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-[#932445] to-[#d63865] text-white">
                      <Users size={32} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Support Workforce
                      </h3>
                      <div className="space-y-3">
                        <div>
                          <p className="text-gray-700 font-semibold mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                            Positions Regularly Supplied:
                          </p>
                          <p className="text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                            Helpers, Flagmen, Drivers (light & heavy), Storekeepers, Document Controllers
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-700 font-semibold mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                            Certifications & Training:
                          </p>
                          <p className="text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                            Basic HSE induction, Defensive Driving
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 max-w-4xl mx-auto">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center p-6 glass-effect rounded-2xl shadow-lg animate-scaleIn">
                    <div className="text-4xl font-bold text-[#932445] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>160+</div>
                    <div className="text-sm text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>Current Total Strength (continuously expanding)</div>
                  </div>
                  <div className="text-center p-6 glass-effect rounded-2xl shadow-lg animate-scaleIn stagger-1">
                    <div className="text-4xl font-bold text-[#932445] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>24-72h</div>
                    <div className="text-sm text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>Mobilization Time anywhere in Oman</div>
                  </div>
                  <div className="text-center p-6 glass-effect rounded-2xl shadow-lg animate-scaleIn stagger-2">
                    <div className="text-4xl font-bold text-[#932445] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>100%</div>
                    <div className="text-sm text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>Payroll & Insurance handled by us</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Equipment Rental */}
          <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-rose-50 relative overflow-hidden">
            <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-gradient-to-br from-[#932445]/10 via-[#d63865]/5 to-transparent rounded-full blur-3xl animate-float"></div>
            
            <div className="container mx-auto max-w-7xl px-4 relative z-10">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect shadow-xl shadow-[#932445]/20 mb-4 animate-scaleIn">
                  <div className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#932445] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-r from-[#932445] to-[#d63865]"></span>
                  </div>
                  <span className="text-[#932445] font-bold text-xs tracking-widest" style={{ fontFamily: "'Playfair Display', serif" }}>EQUIPMENT RENTAL</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Equipment Rental{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#932445] via-[#d63865] to-[#932445] animate-gradient">
                    (Owned Fleet – Ready 24/7)
                  </span>
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
                  All equipment is regularly serviced, certified, and comes with experienced operators and full insurance.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {[
                  { equipment: 'HIAB Cranes', quantity: '3', spec: '12–18 Ton lifting capacity', icon: <Truck size={32} /> },
                  { equipment: 'JCB Backhoe Loaders', quantity: '1 + partners', spec: '3CX model with rock breaker', icon: <Cog size={32} /> },
                  { equipment: 'Komatsu Motor Grader', quantity: '1', spec: 'GD535-2 model', icon: <Settings size={32} /> },
                  { equipment: 'Vibratory Rollers', quantity: '3', spec: '3 Ton & 10 Ton (single & double drum)', icon: <Wrench size={32} /> },
                  { equipment: 'Low-bed Trailers & Flatbed Trailers', quantity: '6', spec: 'Up to 50 Ton payload', icon: <Truck size={32} /> },
                  { equipment: 'Pickup Vehicles (4×4)', quantity: '7', spec: 'Toyota Hilux double cabin', icon: <Truck size={32} /> },
                  { equipment: 'Generators & Welding Machines', quantity: 'Multiple', spec: '15–100 kVA diesel generators, 400A welding sets', icon: <Zap size={32} /> },
                  { equipment: 'Water Tanker (Brackish)', quantity: '1', spec: '5000 gallon', icon: <Truck size={32} /> },
                  { equipment: 'Road Cutting Machines', quantity: '3', spec: 'Asphalt & concrete cutting', icon: <Wrench size={32} /> },
                  { equipment: 'Additional Heavy Equipment', quantity: 'On request', spec: 'Excavators, Boom Trucks, Mobile Cranes, Telehandlers, etc.', icon: <Factory size={32} /> }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="glass-effect rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover-tilt animate-scaleIn hover-glow"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-[#932445] to-[#d63865] mb-4 text-white">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{item.equipment}</h3>
                    <p className="text-sm text-gray-600 mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                      <strong>Quantity:</strong> {item.quantity}
                    </p>
                    <p className="text-sm text-gray-600 mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                      <strong>Specification:</strong> {item.spec}
                    </p>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
                      <CheckCircle size={14} />
                      Immediate
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
                  Why Clients Prefer{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#932445] via-[#d63865] to-[#932445] animate-gradient">
                    Global Petrotech
                  </span>
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
                  for Manpower & Equipment?
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {[
                  {
                    title: 'Approved Vendor',
                    description: 'PDO, Oxy, OGC & major EPC contractor approved vendor ensuring quality and compliance.',
                    icon: <Award size={40} />
                  },
                  {
                    title: 'JSRS & Riyada Registered',
                    description: 'JSRS & Riyada registered – maximum ICV scoring supporting local content requirements.',
                    icon: <CheckCircle size={40} />
                  },
                  {
                    title: 'Zero Downtime',
                    description: 'Zero downtime because of in-house resources ensuring continuous project execution.',
                    icon: <Zap size={40} />
                  },
                  {
                    title: 'Transparent Rates',
                    description: 'Transparent daily/weekly/monthly rates (no hidden charges) for clear budgeting.',
                    icon: <Target size={40} />
                  },
                  {
                    title: '24/7 Support',
                    description: '24/7 support and replacement guarantee ensuring uninterrupted operations.',
                    icon: <Clock size={40} />
                  },
                  {
                    title: 'Full Compliance',
                    description: 'Full compliance with Omani labour law and client HSE standards for safety and legality.',
                    icon: <Shield size={40} />
                  },
                  {
                    title: 'Proven Track Record',
                    description: 'Proven track record on 50+ major projects since 2011 demonstrating reliability.',
                    icon: <Award size={40} />
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
                  Whether you need 5 welders for a weekend shutdown or a complete 50-person team + equipment for a 6-month pipeline project – we mobilize faster and perform better.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-24 bg-black relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70"></div>
            
            <div className="container mx-auto max-w-4xl px-4 text-center relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Get Your Resources Today
              </h2>
              <p className="text-xl text-white/70 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Call or email for instant quotation.
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
                  +968 99603280 (24-hour hotline)
                </a>
              </div>
              <p className="text-white/60 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                📍 Ghala Heights, Muscat, Sultanate of Oman
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

