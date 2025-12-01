'use client';

import { useEffect, useRef, useState } from 'react';
import { CheckCircle2, Target, Award, TrendingUp, Users, Building2, Star, Briefcase, ChevronRight, Zap, Shield, ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';

const stats = [
  { icon: Users, value: '150+', label: 'Skilled Professionals', color: 'from-blue-500 to-cyan-500' },
  { icon: Building2, value: '14+', label: 'Years of Excellence', color: 'from-amber-500 to-orange-500' },
  { icon: Award, value: '50+', label: 'Major Projects', color: 'from-purple-500 to-pink-500' },
  { icon: Star, value: '100%', label: 'Client Satisfaction', color: 'from-green-500 to-emerald-500' }
];

const capabilities = [
  { icon: Zap, title: 'Engineering Excellence', desc: 'Cutting-edge solutions for complex projects' },
  { icon: Shield, title: 'Safety First', desc: 'Uncompromising commitment to safety standards' },
  { icon: Award, title: 'Quality Assured', desc: 'International quality benchmarks' },
  { icon: TrendingUp, title: 'Innovation Driven', desc: 'Embracing modern technologies' }
];

export default function OverviewSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('about');
  const [hoveredStat, setHoveredStat] = useState(null);
  const sectionRef = useRef(null);

  const industrialEngineeringImage = PlaceHolderImages.find(p => p.id === 'policy-quality');
  const teamOfEngineersImage = PlaceHolderImages.find(p => p.id === 'service-engineering');
  // Use work-related image for the main construction site image
  const constructionSiteImage = PlaceHolderImages.find(p => p.id === 'well-hookup') || PlaceHolderImages.find(p => p.id === 'project-1') || PlaceHolderImages.find(p => p.id === 'pipeline-installation') || PlaceHolderImages.find(p => p.id === 'service-construction');


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap');
        
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(5deg); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(60px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.85); }
          to { opacity: 1; transform: scale(1); }
        }
        
        @keyframes rotateIn {
          from { opacity: 0; transform: rotate(-15deg) scale(0.7); }
          to { opacity: 1; transform: rotate(0) scale(1); }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        
        @keyframes bounce-soft {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
        
        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-5deg); }
          75% { transform: rotate(5deg); }
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-40px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes expandWidth {
          from { width: 0; opacity: 0; }
          to { width: 100%; opacity: 1; }
        }

        @keyframes pulse-ring {
          0% { transform: scale(0.9); opacity: 1; }
          100% { transform: scale(1.3); opacity: 0; }
        }

        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(147, 36, 69, 0.3); }
          50% { box-shadow: 0 0 40px rgba(147, 36, 69, 0.6); }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-shift 8s ease infinite;
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .animate-slideInLeft {
          animation: slideInLeft 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        .animate-slideInRight {
          animation: slideInRight 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        .animate-rotateIn {
          animation: rotateIn 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        .animate-shimmer {
          background-size: 200% auto;
          animation: shimmer 3s linear infinite;
        }
        
        .animate-bounce-soft {
          animation: bounce-soft 2.5s ease-in-out infinite;
        }
        
        .animate-wiggle {
          animation: wiggle 1s ease-in-out;
        }

        .animate-slideUp {
          animation: slideUp 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .animate-slideDown {
          animation: slideDown 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .animate-expandWidth {
          animation: expandWidth 1s ease-out forwards;
        }

        .animate-pulse-ring {
          animation: pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
        
        .hover-lift {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .hover-lift:hover {
          transform: translateY(-12px) scale(1.02);
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
        .stagger-5 { animation-delay: 0.5s; }
        .stagger-6 { animation-delay: 0.6s; }
        .stagger-7 { animation-delay: 0.7s; }
        .stagger-8 { animation-delay: 0.8s; }

        .glass-effect {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .text-gradient {
          background: linear-gradient(135deg, #932445 0%, #d63865 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      <section 
        ref={sectionRef}
        id="overview" 
        className="relative bg-gradient-to-br from-slate-50 via-white to-rose-50 py-16 px-4 overflow-hidden"
        style={{ fontFamily: 'Playfair Display, serif' }}
      >
        {/* Enhanced Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-gradient-to-br from-[#932445]/10 via-[#d63865]/5 to-transparent rounded-full blur-3xl animate-float"></div>
          <div className="absolute top-1/3 -left-32 w-[450px] h-[450px] bg-gradient-to-tr from-[#d63865]/10 via-[#932445]/5 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 right-1/3 w-[400px] h-[400px] bg-gradient-to-tl from-[#932445]/8 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
          
          {/* Animated Lines */}
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#932445]/10 to-transparent"></div>
          <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-[#d63865]/10 to-transparent"></div>
        </div>

        {/* Premium Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(147,36,69,0.03)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(147,36,69,0.03)_1.5px,transparent_1.5px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Premium Section Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            {/* Floating Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect shadow-xl shadow-[#932445]/20 mb-4 animate-scaleIn hover:scale-105 transition-transform duration-300">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#932445] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-r from-[#932445] to-[#d63865]"></span>
              </div>
              <Sparkles className="w-3 h-3 text-[#932445]" />
              <span className="text-[#932445] font-bold text-xs tracking-widest">COMPANY OVERVIEW</span>
            </div>
            
            {/* Main Title with Playfair Display */}
            <h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fadeIn stagger-1 leading-tight"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              A Leader in{' '}
              <div className="relative inline-block mt-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#932445] via-[#d63865] to-[#932445] animate-gradient">
                  Industrial Solutions
                </span>
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#932445] to-transparent animate-expandWidth"></div>
              </div>
            </h2>
            
            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed animate-fadeIn stagger-2">
              Building excellence across Oman's industrial landscape for over a decade
            </p>
          </div>

          {/* Premium Stats Cards with Enhanced Animations */}
          <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              const delays = ['stagger-1', 'stagger-2', 'stagger-3', 'stagger-4'];
              const isHovered = hoveredStat === index;
              
              return (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredStat(index)}
                  onMouseLeave={() => setHoveredStat(null)}
                  className={`group relative glass-effect rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-500 border-2 border-white/50 hover:border-[#932445]/30 hover-tilt animate-scaleIn ${delays[index]}`}
                >
                  {/* Animated Background Gradient */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#932445]/0 via-[#932445]/0 to-[#d63865]/0 group-hover:from-[#932445]/5 group-hover:via-[#d63865]/10 group-hover:to-[#932445]/5 transition-all duration-700 -z-10"></div>
                  
                  {/* Pulse Ring Effect */}
                  <div className={`absolute inset-0 rounded-2xl border-2 border-[#932445]/30 ${isHovered ? 'animate-pulse-ring' : 'opacity-0'}`}></div>
                  
                  {/* Icon Container */}
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${stat.color} mb-3 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-md`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  
                  {/* Value */}
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1 group-hover:scale-105 transition-transform duration-300" style={{ fontFamily: 'Playfair Display, serif' }}>
                    {stat.value}
                  </div>
                  
                  {/* Label */}
                  <div className="text-xs md:text-sm text-gray-600 font-semibold">
                    {stat.label}
                  </div>
                  
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>

                  {/* Bottom Accent Line */}
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#932445] to-[#d63865] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl"></div>
                </div>
              );
            })}
          </div>

          {/* Enhanced Tab Navigation */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            {/* Premium Navigation Pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {[
                { id: 'about', label: 'About Us', icon: Target },
                { id: 'sectors', label: 'Core Sectors', icon: TrendingUp },
                { id: 'capabilities', label: 'Capabilities', icon: Award }
              ].map((tab, idx) => {
                const TabIcon = tab.icon;
                const delays = ['stagger-1', 'stagger-2', 'stagger-3'];
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm transition-all duration-500 animate-fadeIn ${delays[idx]} ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-[#932445] to-[#d63865] text-white shadow-xl shadow-[#932445]/40 scale-105 animate-glow'
                        : 'glass-effect text-gray-700 hover:text-[#932445] shadow-md hover:shadow-lg border-2 border-white/50 hover:border-[#932445]/30 hover:scale-105'
                    }`}
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    <TabIcon className={`w-4 h-4 ${activeTab === tab.id ? 'animate-bounce-soft' : ''}`} />
                    {tab.label}
                    {activeTab === tab.id && <ArrowRight className="w-3 h-3 animate-pulse" />}
                  </button>
                );
              })}
            </div>

            {/* Premium Content Cards */}
            <div className="glass-effect rounded-3xl shadow-xl border-2 border-white/50 overflow-hidden backdrop-blur-xl">
              {/* About Us Tab */}
              {activeTab === 'about' && (
                <div className="p-6 md:p-10">
                  {/* Section Title */}
                  <div className="flex items-start gap-4 mb-8 animate-slideInLeft">
                    <div className="p-3 rounded-2xl bg-gradient-to-br from-[#932445] to-[#d63865] shadow-xl animate-rotateIn hover:rotate-6 transition-transform duration-300">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                        Who We Are
                      </h3>
                      <div className="h-1 w-20 bg-gradient-to-r from-[#932445] via-[#d63865] to-[#932445] rounded-full animate-expandWidth"></div>
                    </div>
                  </div>
                  
                  {/* Main Content Grid */}
                  <div className="grid lg:grid-cols-2 gap-10 items-start mb-8">
                    {/* Text Content */}
                    <div className="space-y-4 text-gray-700 leading-relaxed text-sm">
                      <p className='animate-slideInLeft stagger-2'>
                        <span className="text-lg font-bold text-gradient" style={{ fontFamily: 'Playfair Display, serif' }}>Global Petrotech SPC</span> is a 100% Omani-owned SME headquartered in Ghala, Muscat, delivering integrated engineering, procurement, construction, and project management solutions for the Oil & Gas, Power, Renewable Energy, and Infrastructure sectors.
                      </p>
                      <p className='animate-slideInLeft stagger-3'>
                        With over a decade of experience across Oman and the GCC, we have successfully completed more than 50 major projects for prestigious clients including Petroleum Development Oman (PDO), Occidental Petroleum (OXY), Oman Gas Company (OGC), Medco, Ooredoo, and leading EPC contractors such as Galfar Engineering, L&T, and Al Turki Enterprises.
                      </p>
                      <p className='animate-slideInLeft stagger-4'>
                        Our core expertise spans civil & mechanical construction, structural fabrication & erection, oil & gas pipeline installation & maintenance, flowlines & well hook-ups, HDPE/GRE/LLRTP piping, excavation & surface preparation, and comprehensive EPC project support.
                      </p>
                      <p className='animate-slideInLeft stagger-5'>
                        Driven by the vision to be the leading Omani provider of innovative and sustainable solutions in the region, we remain fully committed to exceeding client expectations, developing local talent, protecting the environment, and contributing to Oman's long-term growth.
                      </p>
                      <div className='p-4 rounded-xl bg-gradient-to-r from-[#932445]/5 to-[#d63865]/5 border-l-4 border-[#932445] animate-slideInLeft stagger-6'>
                        <p className='text-base font-bold italic text-gray-800' style={{ fontFamily: 'Playfair Display, serif' }}>
                          "A Complete Solution | 100% Omani | Safety First | Delivering Excellence"
                        </p>
                      </div>
                    </div>
                    
                    {/* Image Grid */}
                    <div className="grid grid-cols-2 gap-4 h-[450px]">
                      <div className="space-y-4">
                        <div className="relative rounded-2xl overflow-hidden shadow-xl group h-32 animate-slideInRight stagger-2">
                           {industrialEngineeringImage && (
                            <Image src={industrialEngineeringImage.imageUrl} alt="Industrial engineering" fill className="object-cover transform group-hover:scale-125 group-hover:rotate-3 transition-all duration-700" data-ai-hint={industrialEngineeringImage.imageHint} />
                           )}
                          <div className="absolute inset-0 bg-gradient-to-t from-[#932445]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                        <div className="relative rounded-2xl overflow-hidden shadow-xl group h-72 animate-slideInRight stagger-4">
                          {teamOfEngineersImage && (
                            <Image src={teamOfEngineersImage.imageUrl} alt="Team of engineers" fill className="object-cover transform group-hover:scale-125 group-hover:rotate-3 transition-all duration-700" data-ai-hint={teamOfEngineersImage.imageHint}/>
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-[#d63865]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                      </div>
                      <div className="relative rounded-2xl overflow-hidden shadow-xl group animate-slideInRight stagger-3">
                        {constructionSiteImage && (
                            <Image src={constructionSiteImage.imageUrl} alt="Construction site" fill className="object-cover transform group-hover:scale-125 group-hover:rotate-3 transition-all duration-700" data-ai-hint={constructionSiteImage.imageHint}/>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#932445]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <p className="text-white font-bold text-base" style={{ fontFamily: 'Playfair Display, serif' }}>Excellence in Action</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Key Features Grid */}
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
                    {capabilities.map((item, idx) => {
                      const ItemIcon = item.icon;
                      const delays = ['stagger-4', 'stagger-5', 'stagger-6', 'stagger-7'];
                      return (
                        <div key={idx} className={`group p-4 rounded-xl bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 hover:border-[#932445]/40 hover:shadow-xl transition-all duration-500 hover-lift animate-scaleIn ${delays[idx]}`}>
                          <ItemIcon className="w-6 h-6 text-[#932445] mb-2 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" />
                          <h4 className="font-bold text-gray-900 text-sm mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>{item.title}</h4>
                          <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                        </div>
                      );
                    })}
                  </div>
                   {/* Bottom CTA */}
                  <div className="mt-10 text-center animate-slideUp stagger-6">
                    <Link href="/about">
                      <button className="inline-flex items-center gap-3 px-8 py-4 text-white font-bold rounded-full shadow-2xl transition-all duration-300 hover:scale-105 bg-gradient-to-r from-[#932445] to-[#d63865] group">
                        <span>More About Us</span>
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </Link>
                  </div>
                </div>
              )}

              {/* Core Sectors Tab */}
              {activeTab === 'sectors' && (
                <div className="p-6 md:p-10">
                  {/* Section Title */}
                  <div className="flex items-start gap-4 mb-8 animate-slideInLeft">
                    <div className="p-3 rounded-2xl bg-gradient-to-br from-[#932445] to-[#d63865] shadow-xl animate-rotateIn hover:rotate-6 transition-transform duration-300">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                        Core Sectors
                      </h3>
                      <div className="h-1 w-20 bg-gradient-to-r from-[#932445] via-[#d63865] to-[#932445] rounded-full animate-expandWidth"></div>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {[
                      { name: 'Oil & Gas', icon: '🛢️', desc: 'Comprehensive solutions for upstream and downstream operations', gradient: 'from-orange-500 to-red-500' },
                      { name: 'Power & Energy', icon: '⚡', desc: 'Traditional and modern power generation projects', gradient: 'from-yellow-500 to-orange-500' },
                      { name: 'Renewable Energy', icon: '🌱', desc: 'Sustainable energy solutions for the future', gradient: 'from-green-500 to-emerald-500' },
                      { name: 'Infrastructure', icon: '🏗️', desc: 'Civil construction and development projects', gradient: 'from-blue-500 to-cyan-500' },
                      { name: 'Environmental', icon: '🌍', desc: 'Eco-friendly and sustainable initiatives', gradient: 'from-teal-500 to-green-500' },
                      { name: 'Industrial', icon: '🏭', desc: 'Manufacturing and processing facilities', gradient: 'from-purple-500 to-pink-500' }
                    ].map((sector, idx) => {
                      const delays = ['stagger-1', 'stagger-2', 'stagger-3', 'stagger-4', 'stagger-5', 'stagger-6'];
                      return (
                        <div
                          key={idx}
                          className={`group relative p-5 rounded-2xl bg-gradient-to-br from-white to-gray-50 border-2 border-gray-100 hover:border-[#932445]/40 hover:shadow-xl transition-all duration-500 hover-tilt animate-scaleIn ${delays[idx]} overflow-hidden`}
                        >
                          {/* Background Gradient on Hover */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${sector.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                          
                          {/* Icon */}
                          <div className="text-4xl mb-3 group-hover:scale-110 group-hover:animate-wiggle transition-all duration-500 relative z-10">{sector.icon}</div>
                          
                          {/* Title */}
                          <h4 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#932445] transition-colors duration-500 relative z-10" style={{ fontFamily: 'Playfair Display, serif' }}>
                            {sector.name}
                          </h4>
                          
                          {/* Description */}
                          <p className="text-xs text-gray-600 leading-relaxed relative z-10">{sector.desc}</p>
                          
                          {/* Arrow Icon */}
                          <div className="mt-3 flex items-center gap-1 text-[#932445] opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-500 relative z-10">
                            <span className="text-xs font-semibold">Explore</span>
                            <ArrowRight className="w-3 h-3" />
                          </div>
                          
                          {/* Bottom Accent */}
                          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#932445] to-[#d63865] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Capabilities Tab */}
              {activeTab === 'capabilities' && (
                <div className="p-6 md:p-10">
                  {/* Section Title */}
                  <div className="flex items-start gap-4 mb-8 animate-slideInLeft">
                    <div className="p-3 rounded-2xl bg-gradient-to-br from-[#932445] to-[#d63865] shadow-xl animate-rotateIn hover:rotate-6 transition-transform duration-300">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                        Key Capabilities
                      </h3>
                      <div className="h-1 w-20 bg-gradient-to-r from-[#932445] via-[#d63865] to-[#932445] rounded-full animate-expandWidth"></div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { title: 'Engineering & Construction Services', desc: 'End-to-end solutions with precision' },
                      { title: 'Project Management & EPC Support', desc: 'Seamless execution and delivery' },
                      { title: 'Pipeline Installation & Maintenance', desc: 'Expert handling of critical infrastructure' },
                      { title: 'Civil & Mechanical Construction', desc: 'Robust foundations for success' },
                      { title: 'Structural Fabrication & Erection', desc: 'Quality steel works and installations' },
                      { title: 'Oil & Gas Flowlines & Hook-ups', desc: 'Specialized upstream solutions' },
                      { title: 'HDPE/GRE/LLRTP Piping Systems', desc: 'Advanced piping technologies' },
                      { title: 'Safety & Quality Assurance', desc: 'Zero compromise on standards' },
                      { title: 'Environmental Compliance', desc: 'Sustainable and responsible practices' },
                      { title: 'Excavation & Surface Preparation', desc: 'Professional groundwork services' }
                    ].map((capability, i) => {
                      const delays = ['stagger-1', 'stagger-2', 'stagger-3', 'stagger-4', 'stagger-5', 'stagger-6', 'stagger-1', 'stagger-2', 'stagger-3', 'stagger-4'];
                      return (
                        <div key={i} className={`group flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-white to-gray-50 hover:from-gray-50 hover:to-white border-2 border-gray-100 hover:border-[#932445]/40 hover:shadow-xl transition-all duration-500 hover-lift animate-fadeIn ${delays[i]}`}>
                          <div className="shrink-0 mt-0.5">
                            <div className="relative">
                              <CheckCircle2 className="w-5 h-5 text-[#932445] group-hover:scale-110 group-hover:rotate-6 transition-all duration-500" />
                              <div className="absolute inset-0 bg-[#932445] rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                            </div>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-sm font-bold text-gray-900 mb-1 group-hover:text-[#932445] transition-colors duration-300" style={{ fontFamily: 'Playfair Display, serif' }}>
                              {capability.title}
                            </h4>
                            <p className="text-xs text-gray-600">{capability.desc}</p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-[#932445] opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-500 shrink-0 mt-1" />
                        </div>
                      );
                    })}
                  </div>

                  {/* Bottom CTA */}
                  <div className="mt-10 text-center animate-slideUp stagger-6">
                    <div className="inline-block p-6 rounded-2xl bg-gradient-to-r from-[#932445] to-[#d63865] shadow-xl hover:shadow-[#932445]/50 hover:scale-105 transition-all duration-500">
                      <p className="text-white text-lg font-bold mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                        Ready to Start Your Project?
                      </p>
                      <p className="text-white/90 text-xs mb-3">
                        Let's build something exceptional together
                      </p>
                      <Link href="#contact">
                        <button className="px-6 py-2 bg-white text-[#932445] rounded-full font-bold text-sm hover:bg-gray-100 transition-colors duration-300 flex items-center gap-2 mx-auto">
                          Get In Touch
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
