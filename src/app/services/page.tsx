'use client';

import React from 'react';
import { Construction, GitMerge, Factory, Waypoints, ClipboardList, Users, ArrowRight } from 'lucide-react';
import GlobalNav from '@/components/global-nav';
import Link from 'next/link';

const services = [
  {
    title: 'Civil & Mechanical Construction',
    description: 'Comprehensive foundations, superstructures, and utility systems for industrial projects.',
    icon: <Construction size={40} />,
    href: '/services/civil-mechanical-construction',
    color: 'from-[#932445] to-[#d63865]'
  },
  {
    title: 'Flowlines & Hook-Up Works',
    description: 'Expert wellhead installations, tie-ins, and commissioning for oil & gas facilities.',
    icon: <GitMerge size={40} />,
    href: '/services/flowlines-hook-up-works',
    color: 'from-[#932445] to-[#d63865]'
  },
  {
    title: 'Structural Fabrication & Erection',
    description: 'High-quality steel platforms, modular assemblies, and equipment supports.',
    icon: <Factory size={40} />,
    href: '/services/structural-fabrication-erection',
    color: 'from-[#932445] to-[#d63865]'
  },
  {
    title: 'Pipeline Installation & Maintenance',
    description: 'Complete pipeline solutions including hydro-testing and specialized piping systems.',
    icon: <Waypoints size={40} />,
    href: '/services/pipeline-installation-maintenance',
    color: 'from-[#932445] to-[#d63865]'
  },
  {
    title: 'Engineering & Design',
    description: 'From conceptual studies to detailed engineering with 3D modeling and simulation.',
    icon: <ClipboardList size={40} />,
    href: '/services/engineering-design',
    color: 'from-[#932445] to-[#d63865]'
  },
  {
    title: 'Manpower Supply',
    description: 'Over 160 skilled professionals certified to global standards like ASME, AWS, and CSWIP.',
    icon: <Users size={40} />,
    href: '/services/manpower-supply',
    color: 'from-[#932445] to-[#d63865]'
  }
];

export default function ServicesPage() {
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
                  <span className="text-white font-medium tracking-wide text-sm" style={{ fontFamily: "'Playfair Display', serif" }}>⚙️ Our Services</span>
                </div>
              </div>

              <h1 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white text-center mb-6 tracking-tight animate-fadeIn"
                style={{ 
                  fontFamily: "'Playfair Display', serif",
                  textShadow: '0 4px 15px rgba(0,0,0,0.4)',
                }}
              >
                Our Services
              </h1>

              <div className="w-32 h-1 mb-8 mx-auto rounded-full animate-fadeIn" style={{ background: 'linear-gradient(90deg, transparent, #932445, #fcd34d, #932445, transparent)' }}></div>

              <p className="text-lg md:text-xl text-white/70 text-center max-w-2xl mx-auto mb-10 font-light tracking-wide animate-fadeIn" style={{ animationDelay: '0.2s', fontFamily: "'Playfair Display', serif" }}>
                Comprehensive end-to-end EPC support and specialized services across multiple disciplines, delivering excellence in every project.
              </p>
            </div>
          </section>

          {/* Services Grid */}
          <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-rose-50 relative overflow-hidden">
            <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-gradient-to-br from-[#932445]/10 via-[#d63865]/5 to-transparent rounded-full blur-3xl animate-float"></div>
            <div className="absolute top-1/3 -left-32 w-[450px] h-[450px] bg-gradient-to-tr from-[#d63865]/10 via-[#932445]/5 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
            
            <div className="absolute inset-0 bg-[linear-gradient(rgba(147,36,69,0.03)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(147,36,69,0.03)_1.5px,transparent_1.5px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
            
            <div className="container mx-auto max-w-7xl px-4 relative z-10">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <Link
                    key={index}
                    href={service.href}
                    className="group relative glass-effect rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border-2 border-white/50 hover:border-[#932445]/30 hover-tilt animate-scaleIn block"
                    style={{ animationDelay: `${index * 0.1}s`, fontFamily: "'Playfair Display', serif" }}
                  >
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#932445]/0 via-[#932445]/0 to-[#d63865]/0 group-hover:from-[#932445]/5 group-hover:via-[#d63865]/10 group-hover:to-[#932445]/5 transition-all duration-700 -z-10"></div>
                    
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.color} mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-md text-white`}>
                      {service.icon}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#932445] transition-colors" style={{ fontFamily: "'Playfair Display', serif" }}>{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>{service.description}</p>
                    
                    <div className="flex items-center text-[#932445] font-bold group-hover:translate-x-2 transition-transform">
                      <span style={{ fontFamily: "'Playfair Display', serif" }}>Learn More</span>
                      <ArrowRight className="ml-2" size={20} />
                    </div>
                    
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-24 bg-black relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70"></div>
            
            <div className="container mx-auto max-w-4xl px-4 text-center relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Ready to Get Started?
              </h2>
              <p className="text-xl text-white/70 mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>
                Contact us to discuss how our services can support your next project.
              </p>
              <Link
                href="/contact"
                className="group relative inline-block px-8 py-4 text-white font-bold rounded-full overflow-hidden shadow-2xl transition-all duration-300 hover:scale-105"
                style={{ 
                  background: 'linear-gradient(135deg, #932445 0%, #d63865 100%)',
                  fontFamily: "'Playfair Display', serif"
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#d63865] to-[#932445] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Contact Us</span>
              </Link>
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




