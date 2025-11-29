'use client';

import React, { useState, useEffect } from 'react';
import {
  Award,
  CheckCircle,
  ChevronRight,
  ClipboardList,
  Construction,
  Factory,
  GitMerge,
  HeartHandshake,
  Mail,
  MapPin,
  Phone,
  Shield,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  UserCheck,
  Users,
  Waypoints,
  Zap,
  Briefcase,
  Globe,
  Leaf,
  BookOpen,
  Menu,
  X,
} from 'lucide-react';
import { OrgChartSection } from '@/components/org-chart-section';
import GlobalNav from '@/components/global-nav';
import Link from 'next/link';

const Footer = () => (
  <footer className="bg-gray-900 text-white py-12">
    <div className="container mx-auto px-4 text-center">
      <p className="text-gray-400">© 2025 Global Petrotech SPC. All rights reserved.</p>
    </div>
  </footer>
);

const AnimatedCounter = ({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    let startTime: number | undefined;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration, isMounted]);

  if (!isMounted) {
    return <span>0{suffix}</span>;
  }

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const JourneyCard = ({
  icon,
  title,
  description,
  delay,
  index,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: string;
  index: number;
}) => (
  <div
    className="group relative glass-effect rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border-2 border-white/50 hover:border-[#932445]/30 hover-tilt animate-scaleIn overflow-hidden"
    style={{ animationDelay: delay, animationFillMode: 'both', fontFamily: "'Playfair Display', serif" }}
  >
    {/* Animated Background Gradient */}
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#932445]/0 via-[#932445]/0 to-[#d63865]/0 group-hover:from-[#932445]/5 group-hover:via-[#d63865]/10 group-hover:to-[#932445]/5 transition-all duration-700 -z-10"></div>
    
    <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-[#932445] to-[#d63865] rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-xl transform -rotate-12 group-hover:rotate-0 transition-transform duration-500 z-10">
      {index}
    </div>
    <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-[#932445] to-[#d63865] text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-xl relative z-10">
      {icon}
    </div>
    <h3 className="mb-4 text-2xl font-bold text-gray-900 relative z-10" style={{ fontFamily: "'Playfair Display', serif" }}>{title}</h3>
    <p className="text-gray-600 leading-relaxed text-base relative z-10" style={{ fontFamily: "'Playfair Display', serif" }}>{description}</p>
    <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-full bg-gradient-to-br from-[#932445]/5 via-[#d63865]/5 to-[#932445]/5 transition-all duration-700 group-hover:scale-[4] group-hover:from-[#932445]/10 group-hover:via-[#d63865]/10 group-hover:to-[#932445]/10"></div>
    
    {/* Shimmer Effect */}
    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
    </div>
  </div>
);

const PrincipleCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => {
  return (
    <div className="group relative glass-effect rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border-2 border-white/50 hover:border-[#932445]/30 hover-tilt animate-scaleIn" style={{ fontFamily: "'Playfair Display', serif" }}>
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#932445]/0 via-[#932445]/0 to-[#d63865]/0 group-hover:from-[#932445]/5 group-hover:via-[#d63865]/10 group-hover:to-[#932445]/5 transition-all duration-700 -z-10"></div>
      
      {/* Pulse Ring Effect */}
      <div className="absolute inset-0 rounded-2xl border-2 border-[#932445]/30 opacity-0 group-hover:opacity-100 group-hover:animate-pulse-ring"></div>
      
      <div className="mb-6 flex items-center gap-5 relative z-10">
        <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-[#932445] to-[#d63865] transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-md">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>{title}</h3>
      </div>
      <p className="text-gray-600 leading-relaxed text-base relative z-10" style={{ fontFamily: "'Playfair Display', serif" }}>{description}</p>
      
      {/* Shimmer Effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      </div>
    </div>
  );
};

const ServiceItem = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="group relative glass-effect rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border-2 border-white/50 hover:border-[#932445]/30 hover-tilt animate-scaleIn" style={{ fontFamily: "'Playfair Display', serif" }}>
    {/* Animated Background Gradient */}
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#932445]/0 via-[#932445]/0 to-[#d63865]/0 group-hover:from-[#932445]/5 group-hover:via-[#d63865]/10 group-hover:to-[#932445]/5 transition-all duration-700 -z-10"></div>
    
    <div className="flex items-start gap-5 relative z-10">
      <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-[#932445] to-[#d63865] transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-md flex-shrink-0">
        <div className="text-white">{icon}</div>
      </div>
      <div>
        <h4 className="font-bold text-lg text-gray-900 mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{title}</h4>
        <p className="text-gray-600 leading-relaxed text-sm" style={{ fontFamily: "'Playfair Display', serif" }}>{description}</p>
      </div>
    </div>
    
    {/* Shimmer Effect */}
    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
    </div>
  </div>
);

const AchievementCard = ({ icon, text, value }: { icon: React.ReactNode; text: string; value: string }) => (
  <div className="group relative glass-effect rounded-2xl p-5 shadow-lg hover:shadow-xl transition-all duration-500 border-2 border-white/50 hover:border-[#932445]/30 hover-tilt animate-scaleIn" style={{ fontFamily: "'Playfair Display', serif" }}>
    {/* Animated Background Gradient */}
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#932445]/0 via-[#932445]/0 to-[#d63865]/0 group-hover:from-[#932445]/5 group-hover:via-[#d63865]/10 group-hover:to-[#932445]/5 transition-all duration-700 -z-10"></div>
    
    {/* Pulse Ring Effect */}
    <div className="absolute inset-0 rounded-2xl border-2 border-[#932445]/30 opacity-0 group-hover:opacity-100 group-hover:animate-pulse-ring"></div>
    
    {/* Icon Container */}
    <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-[#932445] to-[#d63865] mb-3 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-md">
      {icon}
    </div>
    
    {/* Value */}
    <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1 group-hover:scale-105 transition-transform duration-300" style={{ fontFamily: "'Playfair Display', serif" }}>
      <AnimatedCounter
        end={parseInt(value)}
        suffix={value.includes('+') ? '+' : value.includes('%') ? '%' : ''}
      />
    </div>
    
    {/* Label */}
    <div className="text-xs md:text-sm text-gray-600 font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>{text}</div>
    
    {/* Shimmer Effect */}
    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
    </div>
  </div>
);

const ClientCard = ({ name }: { name: string }) => (
  <div className="rounded-3xl bg-white p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center min-h-[120px] border-2 border-gray-100 hover:border-[#f59e0b]" style={{ fontFamily: "'Playfair Display', serif" }}>
    <h4 className="font-black text-gray-800 text-center text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>{name}</h4>
  </div>
);

const EquipmentCard = ({ name }: { name: string }) => (
  <div className="rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 p-6 border-2 border-gray-200 hover:border-[#ec4899] transition-all duration-300 hover:shadow-xl hover:scale-105" style={{ fontFamily: "'Playfair Display', serif" }}>
    <div className="flex items-center gap-3">
      <div className="w-3 h-3 rounded-full bg-gradient-to-r from-[#ec4899] via-[#f472b6] to-[#f9a8d4]"></div>
      <p className="text-gray-700 font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>{name}</p>
    </div>
  </div>
);

const CSRCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="rounded-3xl bg-white p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-2 border-gray-100 hover:border-[#14b8a6]" style={{ fontFamily: "'Playfair Display', serif" }}>
    <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0d9488] via-[#14b8a6] to-[#2dd4bf] text-white shadow-lg">
      {icon}
    </div>
    <h4 className="font-black text-xl text-gray-900 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{title}</h4>
    <p className="text-gray-600 leading-relaxed" style={{ fontFamily: "'Playfair Display', serif" }}>{description}</p>
  </div>
);

export default function AboutPage() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap');

        * {
          font-family: 'Playfair Display', serif;
        }

        body,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        span,
        a,
        div,
        button {
          font-family: 'Playfair Display', serif;
        }

        .font-headline {
          font-family: 'Playfair Display', serif;
        }

        .font-body {
          font-family: 'Playfair Display', serif;
        }

        .gradient-text {
          background: linear-gradient(135deg, #932445 0%, #d63865 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(5deg); }
        }

        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.85); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-60px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(60px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
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

        @keyframes shimmer {
          0% { background-position: -1000px 0; }
          100% { background-position: 1000px 0; }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
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

        .animate-slideInLeft {
          animation: slideInLeft 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .animate-slideInRight {
          animation: slideInRight 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-shift 8s ease infinite;
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

        .animate-shimmer {
          animation: shimmer 3s infinite;
          background: linear-gradient(
            to right,
            transparent 0%,
            rgba(255, 255, 255, 0.3) 50%,
            transparent 100%
          );
          background-size: 1000px 100%;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .glass-effect {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
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
      `}</style>

      <div className="flex min-h-screen flex-col bg-gray-50 text-gray-800">
        <GlobalNav />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative overflow-hidden bg-black py-32 pt-56 min-h-[80vh] flex items-center">
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/70"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40"></div>
            
            {/* Glowing Orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl animate-pulse" style={{ backgroundColor: 'rgba(147, 36, 69, 0.15)' }}></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl animate-pulse" style={{ backgroundColor: 'rgba(147, 36, 69, 0.1)', animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

            {/* Floating Shapes */}
            <div className="absolute top-32 right-32 w-40 h-40 border-4 border-white/20 rounded-full animate-float"></div>
            <div className="absolute bottom-48 left-32 w-32 h-32 border-4 border-white/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>

            <div className="container relative mx-auto max-w-6xl px-4 text-center z-20">
              {/* Badge */}
              <div className="mb-8 animate-fadeIn">
                <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 shadow-2xl">
                  <span className="relative flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400"></span>
                  </span>
                  <span className="text-white font-medium tracking-wide text-sm" style={{ fontFamily: "'Playfair Display', serif" }}>🏆 Engineering Excellence Since 2010</span>
                </div>
              </div>

              {/* Company Name */}
              <h1 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white text-center mb-6 tracking-tight animate-fadeIn"
                style={{ 
                  fontFamily: "'Playfair Display', serif",
                  textShadow: '0 4px 15px rgba(0,0,0,0.4)',
                }}
              >
                About Global Petrotech SPC
              </h1>

              {/* Decorative Line */}
              <div className="w-32 h-1 mb-8 mx-auto rounded-full animate-fadeIn" style={{ background: 'linear-gradient(90deg, transparent, #932445, #fcd34d, #932445, transparent)' }}></div>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-white/70 text-center max-w-2xl mx-auto mb-10 font-light tracking-wide animate-fadeIn" style={{ animationDelay: '0.2s', fontFamily: "'Playfair Display', serif" }}>
                Your trusted partner in specialized engineering and construction solutions across Oman and the GCC region, delivering high-quality, sustainable projects that exceed expectations.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap justify-center gap-4 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
                <button
                  onClick={() => handleScrollTo('services')}
                  className="group relative px-8 py-4 text-white font-bold rounded-full overflow-hidden shadow-2xl transition-all duration-300 hover:scale-105"
                  style={{ 
                    background: 'linear-gradient(135deg, #932445 0%, #d63865 100%)',
                    fontFamily: "'Playfair Display', serif"
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#d63865] to-[#932445] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10">Explore Our Services</span>
                </button>
                <button
                  onClick={() => handleScrollTo('contact')}
                  className="px-8 py-4 text-white font-bold rounded-full border-2 border-white/30 hover:border-white/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 shadow-xl"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Contact Us
                </button>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-rose-50 relative overflow-hidden">
            {/* Floating Background Shapes */}
            <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-gradient-to-br from-[#932445]/10 via-[#d63865]/5 to-transparent rounded-full blur-3xl animate-float"></div>
            <div className="absolute top-1/3 -left-32 w-[450px] h-[450px] bg-gradient-to-tr from-[#d63865]/10 via-[#932445]/5 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
            
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(147,36,69,0.03)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(147,36,69,0.03)_1.5px,transparent_1.5px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
            
            <div className="container mx-auto max-w-6xl px-4 relative z-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <AchievementCard icon={<Award size={28} />} value="50+" text="Major Projects Completed" />
                <AchievementCard icon={<UserCheck size={28} />} value="25+" text="Esteemed Client Partnerships" />
                <AchievementCard icon={<Shield size={28} />} value="100%" text="Safety Commitment" />
                <AchievementCard icon={<Users size={28} />} value="160+" text="Skilled Professionals" />
              </div>
            </div>
          </section>

          {/* Intro Section with Images */}
          <section className="py-32 bg-gradient-to-br from-slate-50 via-white to-rose-50 relative overflow-hidden">
            {/* Floating Background Shapes */}
            <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-gradient-to-br from-[#932445]/10 via-[#d63865]/5 to-transparent rounded-full blur-3xl animate-float"></div>
            <div className="absolute top-1/3 -left-32 w-[450px] h-[450px] bg-gradient-to-tr from-[#d63865]/10 via-[#932445]/5 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
            
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(147,36,69,0.03)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(147,36,69,0.03)_1.5px,transparent_1.5px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
            
            <div className="container mx-auto max-w-7xl px-4 relative z-10">
              <div className="grid items-center gap-20 lg:grid-cols-2">
                <div className="space-y-8 animate-fadeInUp">
                  {/* Floating Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect shadow-xl shadow-[#932445]/20 mb-4 animate-scaleIn hover:scale-105 transition-transform duration-300">
                    <div className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#932445] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-r from-[#932445] to-[#d63865]"></span>
                    </div>
                    <Sparkles className="w-3 h-3 text-[#932445]" />
                    <span className="text-[#932445] font-bold text-xs tracking-widest" style={{ fontFamily: "'Playfair Display', serif" }}>ESTABLISHED SME IN SULTANATE OF OMAN</span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight animate-fadeIn stagger-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Welcome to{' '}
                    <div className="relative inline-block mt-2">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#932445] via-[#d63865] to-[#932445] animate-gradient">
                        Global Petrotech
                      </span>
                      <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#932445] to-transparent animate-expandWidth"></div>
                    </div>
                  </h2>
                  <p className="text-gray-600 leading-relaxed text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Welcome to <strong>Global Petrotech SPC</strong>, your trusted partner in specialized engineering and construction solutions across Oman and the GCC region. Established as a dynamic Small and Medium Enterprise (SME) in the Sultanate of Oman, we have proudly served the oil & gas, power, energy, infrastructure, municipal and environmental development (MED), and landscape sectors for over a decade.
                  </p>
                  <p className="text-gray-600 leading-relaxed text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Headquartered in <strong>Ghala, Muscat</strong>, our commitment to reliable execution, innovation, and client-centric tailoring has earned us a reputation for delivering high-quality, sustainable projects that exceed expectations. With over <strong>50 major projects completed</strong> and <strong>25+ esteemed client partnerships</strong>, we've built a legacy of <strong>100% safety commitment</strong> and unwavering reliability.
                  </p>
                  <p className="text-gray-600 leading-relaxed text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Our streamlined structure ensures seamless collaboration, quick decision-making, and adaptation to project scales—from small installations to large-scale ventures, we deliver with precision and passion.
                  </p>
                  <div className="pt-6">
                    <h3 className="font-black text-2xl text-gray-900 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Our Sectors of Excellence:</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        'Oil & Gas',
                        'Power & Energy',
                        'Infrastructure',
                        'Municipal & Environmental',
                        'Landscape Engineering',
                        'Industrial Projects',
                      ].map((sector) => (
                        <div key={sector} className="flex items-center gap-3 text-gray-700 font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#932445] to-[#d63865] flex items-center justify-center">
                            <CheckCircle size={18} className="text-white" />
                          </div>
                          <span style={{ fontFamily: "'Playfair Display', serif" }}>{sector}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="relative animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-6">
                      <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500">
                        <img
                          src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&q=80"
                          alt="Engineering team"
                          className="w-full h-64 object-cover"
                        />
                      </div>
                      <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500">
                        <img
                          src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=400&q=80"
                          alt="Industrial site"
                          className="w-full h-48 object-cover"
                        />
                      </div>
                    </div>
                    <div className="space-y-6 pt-12">
                      <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500">
                        <img
                          src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&q=80"
                          alt="Construction work"
                          className="w-full h-48 object-cover"
                        />
                      </div>
                      <div className="rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500">
                        <img
                          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&q=80"
                          alt="Oil and gas facility"
                          className="w-full h-64 object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-3xl p-8 shadow-2xl z-10">
                    <div className="flex items-center gap-4">
                      <div className="w-4 h-4 rounded-full bg-[#fbbf24] animate-pulse"></div>
                      <p className="font-black text-gray-900 text-lg whitespace-nowrap" style={{ fontFamily: "'Playfair Display', serif" }}>ISO 9001:2015 Certified</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Journey Section */}
          <section className="bg-gradient-to-br from-slate-50 via-white to-rose-50 py-32 relative overflow-hidden">
            {/* Floating Background Shapes */}
            <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-gradient-to-br from-[#932445]/10 via-[#d63865]/5 to-transparent rounded-full blur-3xl animate-float"></div>
            <div className="absolute top-1/3 -left-32 w-[450px] h-[450px] bg-gradient-to-tr from-[#d63865]/10 via-[#932445]/5 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
            
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(147,36,69,0.03)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(147,36,69,0.03)_1.5px,transparent_1.5px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
            
            <div className="container mx-auto max-w-7xl px-4 relative z-10">
              <div className="text-center mb-20">
                {/* Floating Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect shadow-xl shadow-[#932445]/20 mb-4 animate-scaleIn hover:scale-105 transition-transform duration-300">
                  <div className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#932445] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-r from-[#932445] to-[#d63865]"></span>
                  </div>
                  <Sparkles className="w-3 h-3 text-[#932445]" />
                  <span className="text-[#932445] font-bold text-xs tracking-widest" style={{ fontFamily: "'Playfair Display', serif" }}>OUR EVOLUTION</span>
                </div>
                
                {/* Main Title */}
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fadeIn stagger-1 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Our{' '}
                  <div className="relative inline-block mt-2">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#932445] via-[#d63865] to-[#932445] animate-gradient">
                      Inspiring Journey
                    </span>
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#932445] to-transparent animate-expandWidth"></div>
                  </div>
                </h2>
                
                <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed animate-fadeIn stagger-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Global Petrotech SPC's story unfolds in four transformative phases, each marking a significant milestone in our quest for excellence.
                </p>
              </div>
              <div className="mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                <JourneyCard
                  icon={<Sparkles size={32} />}
                  title="Foundation"
                  description="Born from a vision to support Oman's burgeoning infrastructure and industrial landscape, we started as a nimble SME focused on tailored solutions for SMEs, MED initiatives, and landscape engineering."
                  delay="0s"
                  index={1}
                />
                <JourneyCard
                  icon={<TrendingUp size={32} />}
                  title="Growth & Expansion"
                  description="From modest installations, we scaled to handling complex, multi-disciplinary projects, mastering detailed planning, procurement, and on-site operations with precision and expertise."
                  delay="0.15s"
                  index={2}
                />
                <JourneyCard
                  icon={<Award size={32} />}
                  title="Regional Recognition"
                  description="Our adoption of cutting-edge technologies and deep regional insights propelled us to prominence across Oman and the GCC, with a strong emphasis on sustainable practices like urban landscaping and environmental stewardship."
                  delay="0.3s"
                  index={3}
                />
                <JourneyCard
                  icon={<Target size={32} />}
                  title="Present Day"
                  description="Today, we continue to innovate and evolve, tackling technically demanding and logistically challenging projects while prioritizing continuous improvement, customer satisfaction, and ethical excellence."
                  delay="0.4s"
                  index={4}
                />
              </div>
            </div>
          </section>

          {/* Vision & Mission with Images */}
          <section className="py-32 bg-gradient-to-br from-slate-50 via-white to-rose-50 relative overflow-hidden">
            {/* Floating Background Shapes */}
            <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-gradient-to-br from-[#932445]/10 via-[#d63865]/5 to-transparent rounded-full blur-3xl animate-float"></div>
            <div className="absolute top-1/3 -left-32 w-[450px] h-[450px] bg-gradient-to-tr from-[#d63865]/10 via-[#932445]/5 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
            
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(147,36,69,0.03)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(147,36,69,0.03)_1.5px,transparent_1.5px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
            
            <div className="container mx-auto max-w-7xl px-4 relative z-10">
              <div className="grid gap-12 lg:grid-cols-2">
                <div className="relative rounded-3xl overflow-hidden shadow-3xl hover:shadow-4xl transition-all duration-500 hover:scale-105 animate-fadeInUp">
                  <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
                    alt="Vision"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#932445]/95 via-[#b8305a]/95 to-[#d63865]/95 p-12 flex flex-col justify-center">
                    <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-white/20 backdrop-blur-sm">
                      <Target size={40} className="text-white" />
                    </div>
                    <h2 className="text-4xl font-black mb-6 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>Our Vision</h2>
                    <p className="text-xl leading-relaxed text-white/95" style={{ fontFamily: "'Playfair Display', serif" }}>
                      To be the leading provider of integrated engineering and construction solutions in Oman and the GCC, celebrated for excellence, innovation, and sustainable practices in oil & gas, power, energy, and infrastructure sectors.
                    </p>
                  </div>
                </div>
                <div className="relative rounded-3xl overflow-hidden shadow-3xl hover:shadow-4xl transition-all duration-500 hover:scale-105 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                  <img
                    src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80"
                    alt="Mission"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#7a1d35]/95 via-[#932445]/95 to-[#b8305a]/95 p-12 flex flex-col justify-center">
                    <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-white/20 backdrop-blur-sm">
                      <Briefcase size={40} className="text-white" />
                    </div>
                    <h2 className="text-4xl font-black mb-6 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>Our Mission</h2>
                    <p className="text-xl leading-relaxed text-white/95" style={{ fontFamily: "'Playfair Display', serif" }}>
                      To deliver cost-effective, high-quality services that surpass client expectations, upholding the highest standards of safety, environmental responsibility, and ethical practices. We are dedicated to fostering local communities, empowering our workforce, and driving sustainable regional growth.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Core Principles */}
          <section className="bg-gradient-to-br from-slate-50 via-white to-rose-50 py-32 relative overflow-hidden">
            {/* Floating Background Shapes */}
            <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-gradient-to-br from-[#932445]/10 via-[#d63865]/5 to-transparent rounded-full blur-3xl animate-float"></div>
            <div className="absolute top-1/3 -left-32 w-[450px] h-[450px] bg-gradient-to-tr from-[#d63865]/10 via-[#932445]/5 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
            
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(147,36,69,0.03)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(147,36,69,0.03)_1.5px,transparent_1.5px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
            
            <div className="container mx-auto max-w-7xl px-4 relative z-10">
              <div className="text-center mb-20">
                {/* Floating Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect shadow-xl shadow-[#932445]/20 mb-4 animate-scaleIn hover:scale-105 transition-transform duration-300">
                  <div className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#932445] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-r from-[#932445] to-[#d63865]"></span>
                  </div>
                  <Sparkles className="w-3 h-3 text-[#932445]" />
                  <span className="text-[#932445] font-bold text-xs tracking-widest" style={{ fontFamily: "'Playfair Display', serif" }}>WHAT DRIVES US</span>
                </div>
                
                {/* Main Title */}
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fadeIn stagger-1 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Core{' '}
                  <div className="relative inline-block mt-2">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#932445] via-[#d63865] to-[#932445] animate-gradient">
                      Principles
                    </span>
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#932445] to-transparent animate-expandWidth"></div>
                  </div>
                </h2>
                
                <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed animate-fadeIn stagger-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Four fundamental pillars that form the foundation of our operations and guide every decision we make.
                </p>
              </div>
              <div className="mt-20 grid gap-10 md:grid-cols-2">
                <PrincipleCard
                  icon={<Star size={32} />}
                  title="Quality"
                  description="Adhering to international standards like ISO 9001:2015 for superior project outcomes and client delight. We implement rigorous quality control measures at every stage, ensuring excellence in execution and lasting value for our clients."
                />
                <PrincipleCard
                  icon={<Zap size={32} />}
                  title="Innovation"
                  description="Embracing emerging technologies and advanced methodologies to enhance efficiency and solve complex industry challenges. We invest in cutting-edge tools, software, and training to stay ahead of the curve and deliver innovative solutions."
                />
                <PrincipleCard
                  icon={<ShieldCheck size={32} />}
                  title="Safety"
                  description="Zero-harm commitment through rigorous HSE protocols, comprehensive training programs, and a culture of protection for people, assets, and the environment. Safety is non-negotiable and embedded in our DNA."
                />
                <PrincipleCard
                  icon={<HeartHandshake size={32} />}
                  title="Integrity"
                  description="Transparent, accountable business practices that build lasting trust with all stakeholders. We conduct business with honesty, fairness, and ethical excellence, maintaining the highest standards of professional conduct."
                />
              </div>
            </div>
          </section>

          {/* What We Do */}
          <section id="services" className="py-24 bg-gradient-to-br from-slate-50 via-white to-rose-50 relative overflow-hidden">
            {/* Floating Background Shapes */}
            <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-gradient-to-br from-[#932445]/10 via-[#d63865]/5 to-transparent rounded-full blur-3xl animate-float"></div>
            <div className="absolute top-1/3 -left-32 w-[450px] h-[450px] bg-gradient-to-tr from-[#d63865]/10 via-[#932445]/5 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
            
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(147,36,69,0.03)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(147,36,69,0.03)_1.5px,transparent_1.5px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
            
            <div className="container mx-auto max-w-6xl px-4 relative z-10">
              <div className="text-center mb-16">
                {/* Floating Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect shadow-xl shadow-[#932445]/20 mb-4 animate-scaleIn hover:scale-105 transition-transform duration-300">
                  <div className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#932445] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-r from-[#932445] to-[#d63865]"></span>
                  </div>
                  <Sparkles className="w-3 h-3 text-[#932445]" />
                  <span className="text-[#932445] font-bold text-xs tracking-widest" style={{ fontFamily: "'Playfair Display', serif" }}>OUR EXPERTISE</span>
                </div>
                
                {/* Main Title */}
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fadeIn stagger-1 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                  What{' '}
                  <div className="relative inline-block mt-2">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#932445] via-[#d63865] to-[#932445] animate-gradient">
                      We Do
                    </span>
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#932445] to-transparent animate-expandWidth"></div>
                  </div>
                </h2>
                
                <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed animate-fadeIn stagger-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  We offer comprehensive end-to-end EPC (Engineering, Procurement, Construction) support and specialized services across multiple disciplines.
                </p>
              </div>
              <div className="mt-16 grid gap-6 md:grid-cols-2">
                <ServiceItem
                  icon={<Construction size={32} />}
                  title="Civil & Mechanical Construction"
                  description="Comprehensive foundations, superstructures, and utility systems for industrial projects. From concrete works to structural installations, we deliver robust infrastructure solutions that stand the test of time."
                />
                <ServiceItem
                  icon={<GitMerge size={32} />}
                  title="Flowlines & Hook-Up Works"
                  description="Expert wellhead installations, tie-ins, and commissioning for oil & gas facilities. Specialized in complex hook-up operations with precision, efficiency, and adherence to industry standards."
                />
                <ServiceItem
                  icon={<Factory size={32} />}
                  title="Structural Fabrication & Erection"
                  description="High-quality steel platforms, modular assemblies, equipment supports, and custom fabrications with certified welding and quality assurance. Every component meets rigorous quality standards."
                />
                <ServiceItem
                  icon={<Waypoints size={32} />}
                  title="Pipeline Installation & Maintenance"
                  description="Complete pipeline solutions including hydro-testing, excavation, and specialized piping like HDPE, GRE, and carbon steel with leak detection and integrity management systems."
                />
                <ServiceItem
                  icon={<ClipboardList size={32} />}
                  title="Engineering & Design"
                  description="From conceptual studies to detailed engineering, 3D modeling using advanced software like AutoCAD, PDMS, and simulation tools for optimal design solutions that maximize efficiency and minimize costs."
                />
                <ServiceItem
                  icon={<Users size={32} />}
                  title="Manpower Supply"
                  description="A skilled workforce of engineers, welders, riggers, operators, and support staff, certified to global standards like ASME, AWS, and CSWIP. Over 160 professionals ready to deliver excellence in execution."
                />
              </div>
            </div>
          </section>

          {/* Leadership & Team Section */}
          <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-rose-50 relative overflow-hidden">
            {/* Floating Background Shapes */}
            <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-gradient-to-br from-[#932445]/10 via-[#d63865]/5 to-transparent rounded-full blur-3xl animate-float"></div>
            <div className="absolute top-1/3 -left-32 w-[450px] h-[450px] bg-gradient-to-tr from-[#d63865]/10 via-[#932445]/5 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
            
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(147,36,69,0.03)_1.5px,transparent_1.5px),linear-gradient(90deg,rgba(147,36,69,0.03)_1.5px,transparent_1.5px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
            
            <div className="container mx-auto max-w-6xl px-4 relative z-10">
              <div className="text-center mb-16 animate-fadeInUp">
                {/* Floating Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect shadow-xl shadow-[#932445]/20 mb-4 animate-scaleIn hover:scale-105 transition-transform duration-300">
                  <div className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#932445] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-r from-[#932445] to-[#d63865]"></span>
                  </div>
                  <Sparkles className="w-3 h-3 text-[#932445]" />
                  <span className="text-[#932445] font-bold text-xs tracking-widest" style={{ fontFamily: "'Playfair Display', serif" }}>OUR LEADERSHIP</span>
                </div>
                
                {/* Main Title */}
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fadeIn stagger-1 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Our Leadership{' '}
                  <div className="relative inline-block mt-2">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#932445] via-[#d63865] to-[#932445] animate-gradient">
                      & Team
                    </span>
                    <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#932445] to-transparent animate-expandWidth"></div>
                  </div>
                </h2>
                
                <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed animate-fadeIn stagger-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Meet the experienced leaders guiding our company and the typical structure of our expert project teams.
                </p>
              </div>

              {/* Executive Leadership */}
              <div className="mb-20">
                <h3 className="text-3xl font-black text-gray-900 mb-8 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>Executive Leadership</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div 
                    className="group rounded-3xl bg-white p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 border-2 border-gray-100 hover:border-[#7c3aed]/30 animate-fadeInUp overflow-hidden relative"
                    style={{ fontFamily: "'Playfair Display', serif", animationDelay: '0s' }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#932445]/0 to-[#d63865]/0 group-hover:from-[#932445]/5 group-hover:to-[#d63865]/5 transition-all duration-500"></div>
                    <div className="relative">
                      <div className="mb-5 relative">
                        <div className="w-32 h-32 mx-auto rounded-full overflow-hidden ring-4 ring-[#932445]/20 group-hover:ring-[#932445]/40 transition-all duration-500 shadow-xl group-hover:shadow-2xl">
                          <img
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
                            alt="Chief Executive Officer"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-[#932445] to-[#d63865] flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-500">
                          <Users size={20} />
                        </div>
                      </div>
                      <h3 className="font-bold text-xl text-gray-900 mb-3 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>Chief Executive Officer</h3>
                      <p className="text-gray-600 text-sm leading-relaxed text-center" style={{ fontFamily: "'Playfair Display', serif" }}>Oversees quality management and strategic compliance, ensuring our operations meet the highest standards of excellence.</p>
                    </div>
                  </div>
                  <div 
                    className="group rounded-3xl bg-white p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 border-2 border-gray-100 hover:border-[#932445]/30 animate-fadeInUp overflow-hidden relative"
                    style={{ fontFamily: "'Playfair Display', serif", animationDelay: '0.1s' }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#932445]/0 to-[#d63865]/0 group-hover:from-[#932445]/5 group-hover:to-[#d63865]/5 transition-all duration-500"></div>
                    <div className="relative">
                      <div className="mb-5 relative">
                        <div className="w-32 h-32 mx-auto rounded-full overflow-hidden ring-4 ring-[#932445]/20 group-hover:ring-[#932445]/40 transition-all duration-500 shadow-xl group-hover:shadow-2xl">
                          <img
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80"
                            alt="General Manager"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-[#932445] to-[#d63865] flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-500">
                          <Briefcase size={20} />
                        </div>
                      </div>
                      <h3 className="font-bold text-xl text-gray-900 mb-3 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>General Manager</h3>
                      <p className="text-gray-600 text-sm leading-relaxed text-center" style={{ fontFamily: "'Playfair Display', serif" }}>Drives overall direction and strategic vision, leading the organization towards continued growth and success.</p>
                    </div>
                  </div>
                  <div 
                    className="group rounded-3xl bg-white p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 border-2 border-gray-100 hover:border-[#932445]/30 animate-fadeInUp overflow-hidden relative"
                    style={{ fontFamily: "'Playfair Display', serif", animationDelay: '0.2s' }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#932445]/0 to-[#d63865]/0 group-hover:from-[#932445]/5 group-hover:to-[#d63865]/5 transition-all duration-500"></div>
                    <div className="relative">
                      <div className="mb-5 relative">
                        <div className="w-32 h-32 mx-auto rounded-full overflow-hidden ring-4 ring-[#932445]/20 group-hover:ring-[#932445]/40 transition-all duration-500 shadow-xl group-hover:shadow-2xl">
                          <img
                            src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80"
                            alt="Operations Manager"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-[#932445] to-[#d63865] flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-500">
                          <Construction size={20} />
                        </div>
                      </div>
                      <h3 className="font-bold text-xl text-gray-900 mb-3 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>Operations Manager</h3>
                      <p className="text-gray-600 text-sm leading-relaxed text-center" style={{ fontFamily: "'Playfair Display', serif" }}>Leads project execution with precision, ensuring timely delivery and exceptional quality across all operations.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Typical Project Team Structure */}
              <div>
                <h3 className="text-3xl font-black text-gray-900 mb-8 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>Typical Project Team Structure</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div 
                    className="group rounded-3xl bg-white p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 border-2 border-gray-100 hover:border-[#3b82f6]/30 animate-fadeInUp overflow-hidden relative"
                    style={{ fontFamily: "'Playfair Display', serif", animationDelay: '0.3s' }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#932445]/0 to-[#d63865]/0 group-hover:from-[#932445]/5 group-hover:to-[#d63865]/5 transition-all duration-500"></div>
                    <div className="relative">
                      <div className="mb-4 relative">
                        <div className="w-24 h-24 mx-auto rounded-full overflow-hidden ring-4 ring-[#932445]/20 group-hover:ring-[#932445]/40 transition-all duration-500 shadow-xl group-hover:shadow-2xl">
                          <img
                            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80"
                            alt="Project Director"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-[#932445] to-[#d63865] flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-500">
                          <Target size={16} />
                        </div>
                      </div>
                      <h4 className="font-bold text-lg text-gray-900 mb-2 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>Project Director</h4>
                    </div>
                  </div>
                  <div 
                    className="group rounded-3xl bg-white p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 border-2 border-gray-100 hover:border-[#932445]/30 animate-fadeInUp overflow-hidden relative"
                    style={{ fontFamily: "'Playfair Display', serif", animationDelay: '0.4s' }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#932445]/0 to-[#d63865]/0 group-hover:from-[#932445]/5 group-hover:to-[#d63865]/5 transition-all duration-500"></div>
                    <div className="relative">
                      <div className="mb-4 relative">
                        <div className="w-24 h-24 mx-auto rounded-full overflow-hidden ring-4 ring-[#932445]/20 group-hover:ring-[#932445]/40 transition-all duration-500 shadow-xl group-hover:shadow-2xl">
                          <img
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80"
                            alt="Project Manager"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-[#932445] to-[#d63865] flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-500">
                          <ClipboardList size={16} />
                        </div>
                      </div>
                      <h4 className="font-bold text-lg text-gray-900 mb-2 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>Project Manager</h4>
                    </div>
                  </div>
                  <div 
                    className="group rounded-3xl bg-white p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 border-2 border-gray-100 hover:border-[#932445]/30 animate-fadeInUp overflow-hidden relative"
                    style={{ fontFamily: "'Playfair Display', serif", animationDelay: '0.5s' }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#932445]/0 to-[#d63865]/0 group-hover:from-[#932445]/5 group-hover:to-[#d63865]/5 transition-all duration-500"></div>
                    <div className="relative">
                      <div className="mb-4 relative">
                        <div className="w-24 h-24 mx-auto rounded-full overflow-hidden ring-4 ring-[#932445]/20 group-hover:ring-[#932445]/40 transition-all duration-500 shadow-xl group-hover:shadow-2xl">
                          <img
                            src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&q=80"
                            alt="Technical Manager"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-[#932445] to-[#d63865] flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-500">
                          <Zap size={16} />
                        </div>
                      </div>
                      <h4 className="font-bold text-lg text-gray-900 mb-2 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>Technical Manager</h4>
                    </div>
                  </div>
                  <div 
                    className="group rounded-3xl bg-white p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 border-2 border-gray-100 hover:border-[#932445]/30 animate-fadeInUp overflow-hidden relative"
                    style={{ fontFamily: "'Playfair Display', serif", animationDelay: '0.6s' }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#932445]/0 to-[#d63865]/0 group-hover:from-[#932445]/5 group-hover:to-[#d63865]/5 transition-all duration-500"></div>
                    <div className="relative">
                      <div className="mb-4 relative">
                        <div className="w-24 h-24 mx-auto rounded-full overflow-hidden ring-4 ring-[#932445]/20 group-hover:ring-[#932445]/40 transition-all duration-500 shadow-xl group-hover:shadow-2xl">
                          <img
                            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&q=80"
                            alt="HSE Supervisor"
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-[#932445] to-[#d63865] flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-500">
                          <ShieldCheck size={16} />
                        </div>
                      </div>
                      <h4 className="font-bold text-lg text-gray-900 mb-2 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>HSE Supervisor</h4>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-center mt-12 animate-fadeInUp" style={{ animationDelay: '0.7s' }}>
                <p className="text-lg text-gray-700" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Supported by specialized engineers, supervisors, and field teams (<strong>over 160 personnel strong</strong>), we deliver with precision and passion, ensuring every project exceeds expectations.
                </p>
              </div>
            </div>
          </section>

          <OrgChartSection />

          {/* Clients & Projects */}
          <section id="projects" className="py-24 bg-white">
            <div className="container mx-auto max-w-6xl px-4">
              <div className="text-center mb-16">
                <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-[#f59e0b]/10 via-[#fbbf24]/10 to-[#fcd34d]/10 text-[#f59e0b] font-black text-sm mb-6 border-2 border-[#f59e0b]/20" style={{ fontFamily: "'Playfair Display', serif" }}>
                  OUR PARTNERS
                </div>
                <h2 className="text-5xl font-black text-gray-900 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Achievements & Partnerships</h2>
                <p className="mx-auto max-w-3xl text-gray-600 text-xl mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
                  We've powered iconic projects for industry-leading clients, forging repeat business through proven
                  results and exceptional delivery.
                </p>
                <div className="mb-12 max-w-4xl mx-auto">
                  <h3 className="text-2xl font-black text-gray-900 mb-6 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>Notable Projects</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="rounded-2xl bg-gradient-to-br from-[#f59e0b]/10 to-[#fbbf24]/10 p-6 border-2 border-[#f59e0b]/20" style={{ fontFamily: "'Playfair Display', serif" }}>
                      <h4 className="font-black text-lg text-gray-900 mb-2">PDO's Nimr OFC Expansion</h4>
                      <p className="text-gray-600 text-sm">Major expansion project for Petroleum Development Oman, showcasing our expertise in large-scale infrastructure development.</p>
                    </div>
                    <div className="rounded-2xl bg-gradient-to-br from-[#f59e0b]/10 to-[#fbbf24]/10 p-6 border-2 border-[#f59e0b]/20" style={{ fontFamily: "'Playfair Display', serif" }}>
                      <h4 className="font-black text-lg text-gray-900 mb-2">OXY's Khulod to Yibal Pipeline Excavation</h4>
                      <p className="text-gray-600 text-sm">Complex pipeline excavation project demonstrating our precision in pipeline installation and maintenance.</p>
                    </div>
                    <div className="rounded-2xl bg-gradient-to-br from-[#f59e0b]/10 to-[#fbbf24]/10 p-6 border-2 border-[#f59e0b]/20" style={{ fontFamily: "'Playfair Display', serif" }}>
                      <h4 className="font-black text-lg text-gray-900 mb-2">MEDCO's Karim West Field Hook-Ups</h4>
                      <p className="text-gray-600 text-sm">Specialized hook-up works for MEDCO, highlighting our expertise in flowlines and wellhead installations.</p>
                    </div>
                    <div className="rounded-2xl bg-gradient-to-br from-[#f59e0b]/10 to-[#fbbf24]/10 p-6 border-2 border-[#f59e0b]/20" style={{ fontFamily: "'Playfair Display', serif" }}>
                      <h4 className="font-black text-lg text-gray-900 mb-2">Multiple Infrastructure Projects</h4>
                      <p className="text-gray-600 text-sm">Over 50 major projects completed across various sectors, each delivered with excellence and exceeding client expectations.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <ClientCard name="Petroleum Development Oman (PDO)" />
                <ClientCard name="Occidental Petroleum (OXY)" />
                <ClientCard name="Oman Gas Company (OGC)" />
                <ClientCard name="MEDCO" />
                <ClientCard name="L&T" />
                <ClientCard name="Galfar Engineering" />
                <ClientCard name="Al Turki Enterprises" />
                <ClientCard name="ORPIC" />
              </div>
            </div>
          </section>

          <section className="py-24 bg-gray-50">
            <div className="container mx-auto max-w-6xl px-4">
              <div className="text-center mb-16">
                <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-[#ec4899]/10 via-[#f472b6]/10 to-[#f9a8d4]/10 text-[#ec4899] font-black text-sm mb-6 border-2 border-[#ec4899]/20" style={{ fontFamily: "'Playfair Display', serif" }}>
                  OUR FLEET
                </div>
                <h2 className="text-5xl font-black text-gray-900 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Equipment & Resources</h2>
                <p className="mx-auto max-w-3xl text-gray-600 text-xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Equipped with essentials like vibratory rollers, HIAB cranes, and JCB excavators (with more available on demand), we're ready for any challenge. Our robust fleet ensures we can mobilize additional resources on demand for any project scale.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  'Vibratory Rollers',
                  'HIAB Cranes',
                  'JCB Excavators',
                  'Dump Trucks',
                  'Graders',
                  'Air Compressors',
                  'Dewatering Pumps',
                  'Welding Machines',
                  'Generators',
                ].map((item) => (
                  <EquipmentCard key={item} name={item} />
                ))}
              </div>
            </div>
          </section>

          <section className="py-24 bg-white">
            <div className="container mx-auto max-w-6xl px-4">
              <div className="text-center mb-16">
                <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-[#0d9488]/10 via-[#14b8a6]/10 to-[#2dd4bf]/10 text-[#0d9488] font-black text-sm mb-6 border-2 border-[#0d9488]/20" style={{ fontFamily: "'Playfair Display', serif" }}>
                  OUR IMPACT
                </div>
                <h2 className="text-5xl font-black text-gray-900 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Sustainability &amp; CSR
                </h2>
                <p className="mx-auto max-w-3xl text-gray-600 text-xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Committed to building a sustainable future through eco-friendly practices and meaningful community
                  engagement.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <CSRCard
                  icon={<Leaf size={28} />}
                  title="Environmental Stewardship"
                  description="Sustainability is woven into our DNA. We prioritize energy efficiency, waste recycling, water conservation, and the use of eco-friendly materials and innovations in all our operations."
                />
                <CSRCard
                  icon={<BookOpen size={28} />}
                  title="Local Development"
                  description="Through CSR, we invest in local education, training programs, and employment opportunities for Omani talent. We're committed to empowering our workforce and driving sustainable regional growth."
                />
                <CSRCard
                  icon={<Globe size={28} />}
                  title="Community Engagement"
                  description="Actively participating in and sponsoring local events, fostering strong relationships and contributing to social well-being. We create positive impact in Oman through meaningful community engagement."
                />
              </div>
            </div>
          </section>

          <section className="py-24 bg-gradient-to-br from-[#1e3a8a] via-[#3b82f6] to-[#60a5fa] text-white">
            <div className="container mx-auto max-w-6xl px-4 text-center">
              <div className="mb-8">
                <div className="inline-block p-6 rounded-full bg-white/20 backdrop-blur-sm">
                  <TrendingUp size={48} />
                </div>
              </div>
              <h2 className="text-5xl font-black mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Looking Ahead</h2>
              <p className="mx-auto max-w-3xl text-xl opacity-90 mb-10" style={{ fontFamily: "'Playfair Display', serif" }}>
                As we expand across the GCC, we're excited to form strategic alliances, diversify our services with digital tools and automation, and nurture talent for tomorrow's challenges. At Global Petrotech SPC, we're not just building projects—we're shaping a sustainable future. Join us in engineering excellence—let's build together!
              </p>
              <div className="flex justify-center gap-4">
                <Link
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollTo('contact');
                  }}
                  className="px-10 py-5 rounded-full bg-white text-[#1e3a8a] font-black shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 text-lg"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Join Our Journey
                </Link>
              </div>
            </div>
          </section>

          <section id="contact" className="py-24 bg-gray-900 text-white">
            <div className="container mx-auto max-w-6xl px-4">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <h3 className="font-bold text-lg mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>Get in Touch</h3>
                  <div className="space-y-2">
                    <div className="flex justify-center items-center gap-2">
                      <Mail size={16} />
                      <a href="mailto:oiltech.om@gmail.com" className="hover:underline text-sm" style={{ fontFamily: "'Playfair Display', serif" }}>
                        oiltech.om@gmail.com
                      </a>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                      <Mail size={16} />
                      <a href="mailto:mshsuri@gmail.com" className="hover:underline text-sm" style={{ fontFamily: "'Playfair Display', serif" }}>
                        mshsuri@gmail.com
                      </a>
                    </div>
                    <div className="flex justify-center items-center gap-2 mt-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                      <Phone size={16} />
                      <span className="text-sm">+968 99603280</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>Our Location</h3>
                  <div className="flex justify-center items-center gap-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                    <MapPin size={16} />
                    <span className="text-sm">Ghala, Muscat, Sultanate of Oman</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>Certifications</h3>
                  <div className="flex flex-col items-center gap-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                    <span className="px-3 py-1 rounded-full bg-blue-200 text-blue-800 text-sm">JSRS Certified</span>
                    <span className="px-3 py-1 rounded-full bg-green-200 text-green-800 text-sm">Riyada Registered</span>
                    <span className="px-3 py-1 rounded-full bg-yellow-200 text-yellow-800 text-sm">ISO 9001:2015 Compliant</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

