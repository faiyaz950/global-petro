'use client';

import React from 'react';
import { ShieldCheck, CheckCircle, Shield, Award, Users, Target, Zap, Factory, Settings, Wrench, HardHat, Clock, Globe, Building2, AlertCircle, FileCheck, TrendingUp, BarChart3 } from 'lucide-react';
import GlobalNav from '@/components/global-nav';
import Link from 'next/link';
import Footer from '@/components/footer';

export default function QHSEQualityAssurancePage() {
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
                src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1920&q=80"
                alt="QHSE & Quality Assurance"
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
                  <span className="text-white font-medium tracking-wide text-sm" style={{ fontFamily: "'Playfair Display', serif" }}>🛡️ QHSE & Quality Assurance</span>
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
                QHSE & Quality Assurance
              </h1>

              {/* Decorative Line */}
              <div className="w-32 h-1 mb-8 mx-auto rounded-full animate-fadeIn" style={{ background: 'linear-gradient(90deg, transparent, #932445, #fcd34d, #932445, transparent)' }}></div>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-white/70 text-center max-w-3xl mx-auto mb-10 font-light tracking-wide animate-fadeIn" style={{ animationDelay: '0.2s', fontFamily: "'Playfair Display', serif" }}>
                Safety First. Quality Always. Zero Excuses.
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
                    <span className="text-[#932445] font-bold text-xs tracking-widest" style={{ fontFamily: "'Playfair Display', serif" }}>OUR COMMITMENT</span>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Non-Negotiable{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#932445] via-[#d63865] to-[#932445] animate-gradient">
                      Excellence
                    </span>
                  </h2>
                  
                  <p className="text-gray-700 leading-relaxed text-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Global Petrotech SPC operates on one non-negotiable principle: <strong>No project is so urgent that we cannot take the time to do it safely and correctly.</strong>
                  </p>
                  
                  <p className="text-gray-700 leading-relaxed text-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
                    We proudly maintain <strong>zero Lost Time Incidents (LTI)</strong> and <strong>zero major environmental incidents</strong> across more than <strong>1.95 million safe man-hours</strong> (as of November 2025) on some of the most challenging oil & gas and infrastructure projects in Oman.
                  </p>

                  <div className="grid grid-cols-3 gap-6 pt-6">
                    <div className="text-center p-4 rounded-xl bg-gradient-to-br from-[#932445]/10 to-[#d63865]/10 animate-scaleIn hover-glow" style={{ animationDelay: '0.1s' }}>
                      <div className="text-3xl font-bold text-[#932445] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>1.95M+</div>
                      <div className="text-sm text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>Safe Man-Hours</div>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-gradient-to-br from-[#932445]/10 to-[#d63865]/10 animate-scaleIn hover-glow" style={{ animationDelay: '0.2s' }}>
                      <div className="text-3xl font-bold text-[#932445] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>0</div>
                      <div className="text-sm text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>LTI</div>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-gradient-to-br from-[#932445]/10 to-[#d63865]/10 animate-scaleIn hover-glow" style={{ animationDelay: '0.3s' }}>
                      <div className="text-3xl font-bold text-[#932445] mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>100%</div>
                      <div className="text-sm text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>Audit Pass</div>
                    </div>
                  </div>
                </div>
                
                <div className="relative animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                  <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                    <img
                      src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80"
                      alt="QHSE & Quality Assurance"
                      className="w-full h-96 object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#932445] to-[#d63865] rounded-2xl opacity-20 blur-2xl animate-float"></div>
                </div>
              </div>
            </div>
          </section>

          {/* Certifications Section */}
          <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto max-w-7xl px-4">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect shadow-xl shadow-[#932445]/20 mb-4 animate-scaleIn">
                  <div className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#932445] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-r from-[#932445] to-[#d63865]"></span>
                  </div>
                  <span className="text-[#932445] font-bold text-xs tracking-widest" style={{ fontFamily: "'Playfair Display', serif" }}>CERTIFICATIONS</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Integrated QHSE Management{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#932445] via-[#d63865] to-[#932445] animate-gradient">
                    System
                  </span>
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Fully Certified & Client Approved
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full glass-effect rounded-2xl shadow-lg overflow-hidden">
                  <thead className="bg-gradient-to-r from-[#932445] to-[#d63865] text-white">
                    <tr>
                      <th className="px-6 py-4 text-left font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>Standard / Approval</th>
                      <th className="px-6 py-4 text-left font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>Status / Certificate No.</th>
                      <th className="px-6 py-4 text-left font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>Issuing Authority</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[
                      { standard: 'ISO 9001:2015 – Quality Management', status: 'Certified (Reg. No. OM21/10008)', authority: 'Bureau Veritas' },
                      { standard: 'ISO 14001:2015 – Environmental Management', status: 'In final stage – expected Dec 2025', authority: 'Bureau Veritas' },
                      { standard: 'ISO 45001:2018 – Occupational Health & Safety', status: 'In final stage – expected Dec 2025', authority: 'Bureau Veritas' },
                      { standard: 'PDO HSE Tier-2 Contractor', status: 'Approved (Vendor Code: 1000598)', authority: 'Petroleum Development Oman' },
                      { standard: 'Occidental Oman (Oxy) HSE Pre-qualified', status: 'Approved', authority: 'Occidental Petroleum' },
                      { standard: 'JSRS Certified Supplier', status: 'Active', authority: 'Joint Supplier Registration System' },
                      { standard: 'Riyada Card Holder', status: 'Active', authority: 'Public Authority for SME Development' }
                    ].map((cert, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors duration-200 animate-scaleIn" style={{ animationDelay: `${index * 0.1}s` }}>
                        <td className="px-6 py-4 font-semibold text-gray-900" style={{ fontFamily: "'Inter', sans-serif" }}>{cert.standard}</td>
                        <td className="px-6 py-4 text-gray-700" style={{ fontFamily: "'Inter', sans-serif" }}>{cert.status}</td>
                        <td className="px-6 py-4 text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>{cert.authority}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* QHSE Services */}
          <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-rose-50 relative overflow-hidden">
            <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-gradient-to-br from-[#932445]/10 via-[#d63865]/5 to-transparent rounded-full blur-3xl animate-float"></div>
            
            <div className="container mx-auto max-w-7xl px-4 relative z-10">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect shadow-xl shadow-[#932445]/20 mb-4 animate-scaleIn">
                  <div className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#932445] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-r from-[#932445] to-[#d63865]"></span>
                  </div>
                  <span className="text-[#932445] font-bold text-xs tracking-widest" style={{ fontFamily: "'Playfair Display', serif" }}>OUR SERVICES</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Detailed QHSE Services{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#932445] via-[#d63865] to-[#932445] animate-gradient">
                    We Deliver
                  </span>
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
                  on Every Project
                </p>
              </div>

              <div className="space-y-8 max-w-6xl mx-auto">
                {/* Dedicated On-Site HSE Team */}
                <div className="glass-effect rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 animate-scaleIn hover-glow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-[#932445] to-[#d63865] text-white">
                      <Shield size={32} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Dedicated On-Site HSE Team
                      </h3>
                      <ul className="text-gray-600 leading-relaxed space-y-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                          <span>Minimum one full-time PDO/Oxy-approved HSE Officer per 25 workers</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                          <span>Senior HSE Supervisors for projects &gt;50 workers or high-risk activities</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                          <span>24/7 coverage during shutdowns, simultaneous operations (SIMOPS), and confined-space entries</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Pre-Project HSE Deliverables */}
                <div className="glass-effect rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 animate-scaleIn stagger-1 hover-glow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-[#932445] to-[#d63865] text-white">
                      <FileCheck size={32} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Pre-Project HSE Deliverables
                      </h3>
                      <ul className="text-gray-600 leading-relaxed space-y-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                          <span>Project-specific HSE Plan & Risk Register</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                          <span>Job Safety Analysis (JSA) / Task Risk Assessment (TRA)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                          <span>Emergency Response Plan (ERP) & Medevac routes</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                          <span>Bridging Document between client and Global Petrotech procedures</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                          <span>Chemical register & COSHH assessments</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Daily & Weekly HSE Activities */}
                <div className="glass-effect rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 animate-scaleIn stagger-2 hover-glow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-[#932445] to-[#d63865] text-white">
                      <Clock size={32} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Daily & Weekly HSE Activities
                      </h3>
                      <ul className="text-gray-600 leading-relaxed space-y-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                          <span>Morning toolbox talks (TBT) with attendance records</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                          <span>Daily permit audits and PTW compliance checks</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                          <span>Weekly HSE coordination meetings with client</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                          <span>Stop Work Authority cards issued to every worker</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Specialized High-Risk Activity Management */}
                <div className="glass-effect rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 animate-scaleIn stagger-3 hover-glow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-[#932445] to-[#d63865] text-white">
                      <AlertCircle size={32} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Specialized High-Risk Activity Management
                      </h3>
                      <ul className="text-gray-600 leading-relaxed space-y-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                          <span>Confined Space Entry (with rescue team on standby)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                          <span>Working at Height (full fall protection + rescue plan)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                          <span>Lifting Operations (certified riggers + lift plans reviewed by TPI)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                          <span>Radiography (controlled zones, dosimeters, exclusion zones)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                          <span>H₂S zones (personal H₂S monitors + cascade breathing air system)</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Quality Assurance & Control */}
                <div className="glass-effect rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 animate-scaleIn hover-glow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-[#932445] to-[#d63865] text-white">
                      <Award size={32} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Quality Assurance & Control (QA/QC) – Full Traceability
                      </h3>
                      <ul className="text-gray-600 leading-relaxed space-y-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                          <span>Approved Welding Procedure Specifications (WPS) & Procedure Qualification Records (PQR) for CS, SS, Duplex, Inconel, CRA</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                          <span>100% of welders qualified to ASME IX / AWS D1.1</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                          <span>In-house CSWIP 3.1 & 3.2 Welding Inspectors</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                          <span>Daily weld rejection rate consistently below 1.5%</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                          <span>Complete material certificates (EN 10204 Type 3.1/3.2)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                          <span>Positive Material Identification (PMI) for all alloy materials</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* NDT Coordination */}
                <div className="glass-effect rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 animate-scaleIn stagger-1 hover-glow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-[#932445] to-[#d63865] text-white">
                      <Settings size={32} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Non-Destructive Testing (NDT) Coordination
                      </h3>
                      <ul className="text-gray-600 leading-relaxed space-y-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                          <span>RT (X-ray & Gamma), UT, MT, PT, VT, PMI</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                          <span>All Level-II technicians third-party certified (PCN / ASNT)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                          <span>NDT reports submitted within 24 hours</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Environmental Protection */}
                <div className="glass-effect rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 animate-scaleIn stagger-2 hover-glow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-[#932445] to-[#d63865] text-white">
                      <Globe size={32} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Environmental Protection Measures
                      </h3>
                      <ul className="text-gray-600 leading-relaxed space-y-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                          <span>Spill kits & drip trays on every location</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                          <span>Hazardous waste segregated and disposed via Be'ah-approved vendors</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                          <span>Dust suppression using water bowsers</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                          <span>Noise monitoring during night works</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                          <span>Zero hydrocarbon spills reported till date</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Training & Competency Matrix */}
                <div className="glass-effect rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 animate-scaleIn stagger-3 hover-glow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-[#932445] to-[#d63865] text-white">
                      <Users size={32} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Training & Competency Matrix
                      </h3>
                      <p className="text-gray-600 leading-relaxed mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                        Every worker's training record is maintained in a live digital matrix:
                      </p>
                      <ul className="text-gray-600 leading-relaxed space-y-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                          <span>H₂S Awareness & Escape</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                          <span>Confined Space Entry & Rescue</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                          <span>Defensive Driving</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                          <span>First Aid & Fire Fighting</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                          <span>Working at Height</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                          <span>Rigging & Lifting</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-[#932445] mt-0.5 flex-shrink-0" />
                          <span>All certificates valid and uploaded to client portals</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Performance Snapshot */}
          <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto max-w-7xl px-4">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect shadow-xl shadow-[#932445]/20 mb-4 animate-scaleIn">
                  <div className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#932445] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-r from-[#932445] to-[#d63865]"></span>
                  </div>
                  <span className="text-[#932445] font-bold text-xs tracking-widest" style={{ fontFamily: "'Playfair Display', serif" }}>PERFORMANCE</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  QHSE Performance{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#932445] via-[#d63865] to-[#932445] animate-gradient">
                    Snapshot
                  </span>
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
                  2011 – November 2025
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {[
                  { metric: 'Total Safe Man-Hours', achievement: '1,950,000+', icon: <BarChart3 size={40} />, color: 'from-green-500 to-emerald-500' },
                  { metric: 'Lost Time Incidents (LTI)', achievement: '0', icon: <Shield size={40} />, color: 'from-[#932445] to-[#d63865]' },
                  { metric: 'Total Recordable Incidents', achievement: '0', icon: <CheckCircle size={40} />, color: 'from-[#932445] to-[#d63865]' },
                  { metric: 'First Aid Cases', achievement: '4 (minor)', icon: <AlertCircle size={40} />, color: 'from-yellow-500 to-orange-500' },
                  { metric: 'Environmental Incidents', achievement: '0', icon: <Globe size={40} />, color: 'from-[#932445] to-[#d63865]' },
                  { metric: 'Client HSE Audits Passed', achievement: '100%', icon: <Award size={40} />, color: 'from-green-500 to-emerald-500' }
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-8 glass-effect rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover-tilt animate-scaleIn hover-glow"
                    style={{ animationDelay: `${index * 0.1}s`, fontFamily: "'Playfair Display', serif" }}
                  >
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${stat.color} mb-4 text-white group-hover:scale-110 transition-transform duration-500`}>
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{stat.achievement}</div>
                    <div className="text-sm text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>{stat.metric}</div>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#932445]/10 to-[#d63865]/10 rounded-full">
                  <Award className="text-[#932445]" size={24} />
                  <span className="text-gray-700 font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Multiple "Best Contractor" PDO Safety Awards
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Client Testimonials */}
          <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-rose-50 relative overflow-hidden">
            <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-gradient-to-br from-[#932445]/10 via-[#d63865]/5 to-transparent rounded-full blur-3xl animate-float"></div>
            
            <div className="container mx-auto max-w-7xl px-4 relative z-10">
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect shadow-xl shadow-[#932445]/20 mb-4 animate-scaleIn">
                  <div className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#932445] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-r from-[#932445] to-[#d63865]"></span>
                  </div>
                  <span className="text-[#932445] font-bold text-xs tracking-widest" style={{ fontFamily: "'Playfair Display', serif" }}>TESTIMONIALS</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Client Testimonials on{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#932445] via-[#d63865] to-[#932445] animate-gradient">
                    Our QHSE Performance
                  </span>
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {[
                  {
                    quote: 'Global Petrotech consistently demonstrates the highest HSE standards on our sites.',
                    author: 'PDO Project Manager',
                    company: 'Petroleum Development Oman'
                  },
                  {
                    quote: 'Their proactive safety culture helped us achieve 2 million safe man-hours on the SAS project.',
                    author: 'Project Team',
                    company: 'Punj Lloyd LLC'
                  },
                  {
                    quote: 'Zero LTI and flawless documentation – exactly what we expect from a Tier-1 subcontractor.',
                    author: 'Management',
                    company: 'L&T Oman'
                  }
                ].map((testimonial, index) => (
                  <div
                    key={index}
                    className="glass-effect rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover-tilt animate-scaleIn hover-glow"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-4xl text-[#932445] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>"</div>
                    <p className="text-gray-700 leading-relaxed mb-6 italic" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {testimonial.quote}
                    </p>
                    <div className="border-t border-gray-200 pt-4">
                      <p className="font-semibold text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>{testimonial.author}</p>
                      <p className="text-sm text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>{testimonial.company}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 text-center max-w-3xl mx-auto">
                <p className="text-lg text-gray-700 leading-relaxed" style={{ fontFamily: "'Playfair Display', serif" }}>
                  We don't just meet QHSE standards – we set the benchmark in Oman's contracting sector.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-24 bg-black relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70"></div>
            
            <div className="container mx-auto max-w-4xl px-4 text-center relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                Ready for a Partner Who Treats Safety Seriously?
              </h2>
              <p className="text-xl text-white/70 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Contact our QHSE Department directly:
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <a
                  href="mailto:qhse@globalpetrotech.com"
                  className="group relative px-8 py-4 text-white font-bold rounded-full overflow-hidden shadow-2xl transition-all duration-300 hover:scale-105"
                  style={{ 
                    background: 'linear-gradient(135deg, #932445 0%, #d63865 100%)',
                    fontFamily: "'Playfair Display', serif"
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#d63865] to-[#932445] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10">qhse@globalpetrotech.com</span>
                </a>
                <a
                  href="tel:+96899603280"
                  className="px-8 py-4 text-white font-bold rounded-full border-2 border-white/30 hover:border-white/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 shadow-xl"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  +968 99603280 (24/7 emergency & QHSE hotline)
                </a>
              </div>
              <p className="text-white/60 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                📍 Global Petrotech SPC, Ghala Heights, Muscat
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

