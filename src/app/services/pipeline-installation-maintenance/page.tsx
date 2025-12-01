'use client';

import React from 'react';
import { Waypoints, CheckCircle, Shield, Award, Users, Wrench, Zap } from 'lucide-react';
import GlobalNav from '@/components/global-nav';
import Link from 'next/link';

export default function PipelineInstallationMaintenancePage() {
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
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40"></div>
            
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{ backgroundColor: 'rgba(147, 36, 69, 0.15)' }}></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl animate-pulse" style={{ backgroundColor: 'rgba(147, 36, 69, 0.1)', animationDelay: '1s' }}></div>

            <div className="container relative mx-auto max-w-6xl px-4 text-center z-20">
              <div className="mb-8 animate-fadeIn">
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 shadow-2xl">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
                  </span>
                  <span className="text-white font-medium tracking-wide text-sm" style={{ fontFamily: "'Playfair Display', serif" }}>🔧 Pipeline Installation & Maintenance</span>
                </div>
              </div>

              <h1 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white text-center mb-6 tracking-tight animate-fadeIn"
                style={{ 
                  fontFamily: "'Playfair Display', serif",
                  textShadow: '0 4px 15px rgba(0,0,0,0.4)',
                }}
              >
                Pipeline Installation & Maintenance
              </h1>

              <div className="w-32 h-1 mb-8 mx-auto rounded-full animate-fadeIn" style={{ background: 'linear-gradient(90deg, transparent, #932445, #fcd34d, #932445, transparent)' }}></div>

              <p className="text-lg md:text-xl text-white/70 text-center max-w-2xl mx-auto mb-10 font-light tracking-wide animate-fadeIn" style={{ animationDelay: '0.2s', fontFamily: "'Playfair Display', serif" }}>
                Complete pipeline solutions including hydro-testing, excavation, and specialized piping like HDPE, GRE, and carbon steel with leak detection and integrity management systems.
              </p>
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
                    Pipeline{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#932445] via-[#d63865] to-[#932445] animate-gradient">
                      Excellence
                    </span>
                  </h2>
                  
                  <p className="text-gray-600 leading-relaxed text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Our Pipeline Installation & Maintenance services cover the complete lifecycle of pipeline systems, from initial installation to ongoing maintenance and integrity management. We specialize in multiple piping materials including HDPE, GRE, LLRTP, and carbon steel.
                  </p>
                  
                  <p className="text-gray-600 leading-relaxed text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
                    With expertise in excavation, installation, hydro-testing, and advanced leak detection technologies, we ensure your pipeline infrastructure operates safely and efficiently throughout its service life.
                  </p>
                </div>
                
                <div className="relative animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                  <div className="rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80"
                      alt="Pipeline Installation"
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
                    title: 'HDPE Piping Systems',
                    description: 'Installation of high-density polyethylene pipelines for water and gas distribution.',
                    icon: <Waypoints size={32} />
                  },
                  {
                    title: 'GRE/LLRTP Piping',
                    description: 'Glass-reinforced epoxy and lined pipe systems for corrosive applications.',
                    icon: <Wrench size={32} />
                  },
                  {
                    title: 'Carbon Steel Pipelines',
                    description: 'Traditional steel pipeline installation with certified welding.',
                    icon: <Zap size={32} />
                  },
                  {
                    title: 'Hydrostatic Testing',
                    description: 'Comprehensive pressure testing and leak detection services.',
                    icon: <CheckCircle size={32} />
                  },
                  {
                    title: 'Excavation Services',
                    description: 'Professional trenching and surface preparation for pipeline installation.',
                    icon: <Shield size={32} />
                  },
                  {
                    title: 'Maintenance & Integrity',
                    description: 'Ongoing maintenance, inspection, and integrity management programs.',
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
                Let's discuss how our Pipeline Installation & Maintenance services can support your infrastructure needs.
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

