'use client';

import React from 'react';
import { Fuel, CheckCircle, Shield, Award, Users, Target, Zap, Building2, Factory, Settings, Wrench, TrendingUp, Clock, Globe, HardHat, Waypoints } from 'lucide-react';
import GlobalNav from '@/components/global-nav';
import Link from 'next/link';
import Footer from '@/components/footer';

export default function OilGasFieldServicesPage() {
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

        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(147, 36, 69, 0.3); }
          50% { box-shadow: 0 0 40px rgba(147, 36, 69, 0.6); }
        }

        @keyframes slide {
          0% { background-position: 0 0; }
          100% { background-position: 20px 20px; }
        }

        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .animate-shimmer {
          background: linear-gradient(90deg, transparent, rgba(147, 36, 69, 0.2), transparent);
          background-size: 1000px 100%;
          animation: shimmer 3s infinite linear;
        }

        .animate-bounce-slow {
          animation: bounce 2s ease-in-out infinite;
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

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
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
                src="https://images.unsplash.com/photo-1758799013232-92c193f4b5ad?w=1920&q=80"
                alt="Oil & Gas Field Services"
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
                  <span className="text-white font-medium tracking-wide text-sm" style={{ fontFamily: "'Playfair Display', serif" }}>🛢️ Oil & Gas Field Services</span>
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
                Oil & Gas Field Services
              </h1>

              {/* Decorative Line */}
              <div className="w-32 h-1 mb-8 mx-auto rounded-full animate-fadeIn" style={{ background: 'linear-gradient(90deg, transparent, #932445, #fcd34d, #932445, transparent)' }}></div>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-white/70 text-center max-w-3xl mx-auto mb-10 font-light tracking-wide animate-fadeIn" style={{ animationDelay: '0.2s', fontFamily: "'Playfair Display', serif" }}>
                Your Trusted Partner for Upstream and Midstream Field Development in Oman
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
                    Trusted{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#932445] via-[#d63865] to-[#932445] animate-gradient">
                      Field Experts
                    </span>
                  </h2>
                  
                  <p className="text-gray-700 leading-relaxed text-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Global Petrotech SPC is one of Oman's most experienced and reliable contractors for oil & gas field services. We have successfully delivered more than <strong>50 major projects</strong> for PDO, Oxy, MEDCO, OGC, Daleel, and leading EPC contractors since 2011 – from single well hook-ups to large cluster developments, flowlines, and sales gas pipelines.
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed text-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
                    We work safely and efficiently in the harshest desert and sour-gas environments, with a <strong>perfect safety record</strong> and <strong>100% client satisfaction</strong> on repeat contracts.
                  </p>

                  <div className="grid grid-cols-3 gap-6 pt-6">
                    <div className="text-center p-4 rounded-xl bg-gradient-to-br from-[#932445]/10 to-[#d63865]/10 animate-scaleIn hover-glow" style={{ animationDelay: '0.1s' }}>
                      <div className="text-3xl font-bold text-[#932445] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>50+</div>
                      <div className="text-sm text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>Major Projects</div>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-gradient-to-br from-[#932445]/10 to-[#d63865]/10 animate-scaleIn hover-glow" style={{ animationDelay: '0.2s' }}>
                      <div className="text-3xl font-bold text-[#932445] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>14+</div>
                      <div className="text-sm text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>Years Experience</div>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-gradient-to-br from-[#932445]/10 to-[#d63865]/10 animate-scaleIn hover-glow" style={{ animationDelay: '0.3s' }}>
                      <div className="text-3xl font-bold text-[#932445] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>0</div>
                      <div className="text-sm text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>LTI Record</div>
                    </div>
                  </div>
                </div>
                
                <div className="relative animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                  <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                    <img
                      src="https://images.unsplash.com/photo-1594398982255-fd4ea34a61f?w=800&q=80"
                      alt="Oil & Gas Field Services"
                      className="w-full h-96 object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#932445] to-[#d63865] rounded-2xl opacity-20 blur-2xl animate-float"></div>
                </div>
              </div>
            </div>
          </section>

          {/* Specialized Services Section */}
          <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto max-w-7xl px-4">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect shadow-xl shadow-[#932445]/20 mb-4 animate-scaleIn">
                  <div className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#932445] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-r from-[#932445] to-[#d63865]"></span>
                  </div>
                  <span className="text-[#932445] font-bold text-xs tracking-widest" style={{ fontFamily: "'Playfair Display', serif" }}>OUR SPECIALIZED SERVICES</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Comprehensive{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#932445] via-[#d63865] to-[#932445] animate-gradient">
                    Field Solutions
                  </span>
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: 'Well Hook-Ups & Cluster Development',
                    description: 'Complete hook-up of new wells (oil producers, gas injectors, water injectors) including flowlines, manifolds, testing, and tie-in to existing facilities.',
                    icon: <Zap size={32} />,
                    color: 'from-blue-500 to-cyan-500'
                  },
                  {
                    title: 'Flowline Construction & Replacement',
                    description: 'Carbon steel, stainless steel, and GRE flowlines (2" to 16") – trenching, welding, coating, lowering, testing, and commissioning.',
                    icon: <Waypoints size={32} />,
                    color: 'from-orange-500 to-red-500'
                  },
                  {
                    title: 'Pipeline Construction & Maintenance',
                    description: 'Oil, gas, and water pipelines (4" to 48") with manual & mechanical trenching, stringing, welding, NDT, field joint coating, lowering, tie-ins, hydrotesting, drying, pigging, and pre-commissioning.',
                    icon: <Wrench size={32} />,
                    color: 'from-green-500 to-emerald-500'
                  },
                  {
                    title: 'Specialized Piping Solutions',
                    description: 'HDPE geomembrane lining for evaporation ponds and reservoirs, GRE (Glass Reinforced Epoxy) piping systems, and LLRTP (Long Length Reinforced Thermoplastic Pipe) installation.',
                    icon: <Settings size={32} />,
                    color: 'from-purple-500 to-pink-500'
                  },
                  {
                    title: 'Brownfield Modifications & Shutdown Support',
                    description: 'Safe execution of tie-ins and modifications in live plants with minimum production downtime.',
                    icon: <Factory size={32} />,
                    color: 'from-indigo-500 to-blue-500'
                  },
                  {
                    title: 'Well Site Civil & Mechanical Works',
                    description: 'Cellars, plinths, and foundations. Equipment skids and sunshades. Structural steel platforms and pipe supports.',
                    icon: <HardHat size={32} />,
                    color: 'from-yellow-500 to-orange-500'
                  },
                  {
                    title: 'Tank Cleaning, Repair & Maintenance',
                    description: 'Crude oil, produced water, and diesel storage tanks cleaning, repair, and maintenance services.',
                    icon: <Building2 size={32} />,
                    color: 'from-teal-500 to-cyan-500'
                  }
                ].map((service, index) => (
                  <div
                    key={index}
                    className="group relative glass-effect rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover-tilt animate-scaleIn hover-glow border-2 border-transparent hover:border-[#932445]/30"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Animated Background Gradient */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 -z-10`}></div>
                    
                    {/* Animated Border Gradient */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#932445] via-[#d63865] to-[#932445] opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-sm"></div>
                    
                    {/* Icon with Animation */}
                    <div className="relative mb-6">
                      <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-[#932445] to-[#d63865] text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-[#932445]/50">
                        <div className="group-hover:animate-pulse">{service.icon}</div>
                      </div>
                      {/* Floating Particles */}
                      <div className="absolute -top-2 -right-2 w-3 h-3 bg-[#932445] rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-float transition-opacity duration-500"></div>
                      <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-[#d63865] rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-float transition-opacity duration-500" style={{ animationDelay: '0.3s' }}></div>
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-[#932445] transition-colors duration-300 relative" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {service.title}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#932445] to-[#d63865] group-hover:w-full transition-all duration-500"></span>
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm group-hover:text-gray-700 transition-colors duration-300 relative z-10" style={{ fontFamily: "'Inter', sans-serif" }}>{service.description}</p>
                    
                    {/* Animated Underline on Hover */}
                    <div className="mt-4 flex items-center text-[#932445] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                      <span className="text-sm font-semibold mr-2">Learn More</span>
                      <div className="w-0 group-hover:w-8 h-0.5 bg-gradient-to-r from-[#932445] to-[#d63865] transition-all duration-500"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Key Projects Highlights */}
          <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-rose-50 relative overflow-hidden">
            <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-gradient-to-br from-[#932445]/10 via-[#d63865]/5 to-transparent rounded-full blur-3xl animate-float"></div>
            
            <div className="container mx-auto max-w-7xl px-4 relative z-10">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect shadow-xl shadow-[#932445]/20 mb-4 animate-scaleIn">
                  <div className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#932445] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-r from-[#932445] to-[#d63865]"></span>
                  </div>
                  <span className="text-[#932445] font-bold text-xs tracking-widest" style={{ fontFamily: "'Playfair Display', serif" }}>KEY PROJECTS</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Project{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#932445] via-[#d63865] to-[#932445] animate-gradient">
                    Highlights
                  </span>
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: 'Well Hook-Up – Karim West Field',
                    client: 'MEDCO',
                    year: '2011',
                    description: 'Complete well hook-up and flowline installation for Karim West Field development.',
                    status: 'completed',
                    image: 'https://images.unsplash.com/photo-1758799013232-92c193f4b5ad?w=600&q=80'
                  },
                  {
                    title: 'Mabrouk North East Development',
                    client: 'PDO',
                    year: '2017–2018',
                    description: 'Large cluster development with multiple well hook-ups and flowline networks.',
                    status: 'completed',
                    image: 'https://images.unsplash.com/photo-1594398982255-fd4ea34a61f?w=600&q=80'
                  },
                  {
                    title: 'Raba & Hanya North East – Sehrowal',
                    client: 'PDO',
                    year: '2021',
                    description: 'Comprehensive field development including well sites and pipeline infrastructure.',
                    status: 'completed',
                    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80'
                  },
                  {
                    title: 'Sales Gas Project SASWH-103',
                    client: 'PDO',
                    year: 'Ongoing',
                    description: 'Sales gas pipeline project with advanced construction and commissioning.',
                    status: 'ongoing',
                    image: 'https://images.unsplash.com/photo-1623036484438-002339898926?w=600&q=80'
                  },
                  {
                    title: 'Khulod to Yibal 18" Pipeline Excavation',
                    client: 'OXY',
                    year: 'Ongoing',
                    description: 'Large diameter pipeline excavation and installation project.',
                    status: 'ongoing',
                    image: 'https://images.unsplash.com/photo-1515630771457-09367d0ae038?w=600&q=80'
                  }
                ].map((project, index) => (
                  <div
                    key={index}
                    className="group relative glass-effect rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover-tilt animate-scaleIn hover-glow"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                      
                      {/* Status Badge */}
                      <div className="absolute top-4 right-4 z-10">
                        <div className={`px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm ${
                          project.status === 'ongoing' 
                            ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white animate-pulse shadow-lg' 
                            : 'bg-gradient-to-r from-[#932445] to-[#d63865] text-white shadow-lg'
                        }`}>
                          {project.status === 'ongoing' ? '● Ongoing' : '✓ Completed'}
                        </div>
                      </div>
                      
                      {/* Project Number */}
                      <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-gradient-to-br from-[#932445] to-[#d63865] flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 z-10">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      
                      {/* Client and Year Overlay */}
                      <div className="absolute bottom-4 left-4 right-4 z-10">
                        <div className="text-xs text-white/80 mb-1 font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>
                          {project.client} • {project.year}
                        </div>
                        <h3 className="text-xl font-bold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>{project.title}</h3>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <div className="p-6">
                      <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {project.description}
                      </p>
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
                  Why Clients{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#932445] via-[#d63865] to-[#932445] animate-gradient">
                    Choose Us
                  </span>
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
                  for Oil & Gas Field Services?
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {[
                  {
                    title: '14+ Years Experience',
                    description: 'Over 14 years of continuous field experience in Oman with proven track record across diverse projects.',
                    icon: <Clock size={40} />
                  },
                  {
                    title: 'JSRS & ICV Certified',
                    description: 'JSRS-certified, ICV-compliant, and Riyada-registered ensuring local content and quality standards.',
                    icon: <Award size={40} />
                  },
                  {
                    title: 'Certified Workforce',
                    description: 'In-house certified welders (6G CS/SS/Alloy), riggers, and HSE team with international certifications.',
                    icon: <Users size={40} />
                  },
                  {
                    title: 'Own Equipment Fleet',
                    description: 'Own equipment fleet (JCB, HIAB cranes, rollers, trailers) for instant mobilization and cost efficiency.',
                    icon: <Factory size={40} />
                  },
                  {
                    title: 'Approved Vendor',
                    description: 'Approved vendor for PDO, Oxy, OGC, and major EPC contractors with established relationships.',
                    icon: <CheckCircle size={40} />
                  },
                  {
                    title: 'Zero LTI Record',
                    description: 'Zero Lost Time Incidents (LTI) on all oil & gas projects demonstrating our commitment to safety.',
                    icon: <Shield size={40} />
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
                  From a single flowline replacement to a complete field development program – we deliver faster, safer, and more cost-effectively.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mt-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Let's bring your next field project online – on time and incident-free.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-24 bg-black relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70"></div>
            
            <div className="container mx-auto max-w-4xl px-4 text-center relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Ready to Start Your Field Project?
              </h2>
              <p className="text-xl text-white/70 mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
                Contact us to discuss how our Oil & Gas Field Services can support your project.
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

