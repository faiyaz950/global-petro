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
    className="group relative rounded-3xl bg-white/90 p-8 shadow-2xl backdrop-blur-md transition-all duration-500 hover:scale-105 hover:shadow-3xl animate-fadeInUp border border-gray-100"
    style={{ animationDelay: delay, animationFillMode: 'both', fontFamily: "'Playfair Display', serif" }}
  >
    <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-[#991b1b] via-[#b91c1c] to-[#dc2626] rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-xl transform -rotate-12 group-hover:rotate-0 transition-transform duration-500">
      {index}
    </div>
    <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-[#7c2d12] via-[#92400e] to-[#b45309] text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-xl">
      {icon}
    </div>
    <h3 className="mb-4 text-2xl font-black text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>{title}</h3>
    <p className="text-gray-600 leading-relaxed text-base" style={{ fontFamily: "'Playfair Display', serif" }}>{description}</p>
    <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-full bg-gradient-to-br from-[#991b1b]/5 via-[#b91c1c]/5 to-[#dc2626]/5 transition-all duration-700 group-hover:scale-[4] group-hover:from-[#991b1b]/10 group-hover:via-[#b91c1c]/10 group-hover:to-[#dc2626]/10"></div>
  </div>
);

const PrincipleCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => {
  return (
    <div className="group rounded-3xl border-2 border-gray-200 bg-white p-10 shadow-xl transition-all duration-500 hover:shadow-3xl hover:border-[#a855f7] hover:-translate-y-3" style={{ fontFamily: "'Playfair Display', serif" }}>
      <div className="mb-6 flex items-center gap-5">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7c3aed] via-[#8b5cf6] to-[#a855f7] text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 shadow-lg">
          {icon}
        </div>
        <h3 className="text-2xl font-black text-gray-900" style={{ fontFamily: "'Playfair Display', serif" }}>{title}</h3>
      </div>
      <p className="text-gray-600 leading-relaxed text-base" style={{ fontFamily: "'Playfair Display', serif" }}>{description}</p>
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
  <div className="group flex items-start gap-6 rounded-3xl p-8 transition-all duration-300 hover:bg-gradient-to-r hover:from-[#0ea5e9]/5 hover:via-[#3b82f6]/5 hover:to-[#6366f1]/5 hover:shadow-xl border-2 border-transparent hover:border-[#3b82f6]/30" style={{ fontFamily: "'Playfair Display', serif" }}>
    <div className="mt-1 flex-shrink-0 text-[#3b82f6] transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">
      {icon}
    </div>
    <div>
      <h4 className="font-black text-xl text-gray-900 mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{title}</h4>
      <p className="text-gray-600 leading-relaxed" style={{ fontFamily: "'Playfair Display', serif" }}>{description}</p>
    </div>
  </div>
);

const AchievementCard = ({ icon, text, value }: { icon: React.ReactNode; text: string; value: string }) => (
  <div className="rounded-3xl bg-gradient-to-br from-[#059669]/5 via-[#10b981]/5 to-[#34d399]/5 p-8 text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl border-2 border-[#059669]/20" style={{ fontFamily: "'Playfair Display', serif" }}>
    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#059669] via-[#10b981] to-[#34d399] text-white shadow-xl">
      {icon}
    </div>
    <p className="text-4xl font-black bg-gradient-to-r from-[#059669] via-[#10b981] to-[#34d399] bg-clip-text text-transparent mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
      <AnimatedCounter
        end={parseInt(value)}
        suffix={value.includes('+') ? '+' : value.includes('%') ? '%' : ''}
      />
    </p>
    <p className="text-sm text-gray-600 font-semibold" style={{ fontFamily: "'Playfair Display', serif" }}>{text}</p>
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
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap');

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
          background: linear-gradient(135deg, #932445 0%, #d63865 50%, #fcd34d 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
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

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
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
      `}</style>

      <div className="flex min-h-screen flex-col bg-gray-50 text-gray-800">
        <GlobalNav />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative overflow-hidden bg-gradient-to-br from-[#6b1a2e] via-[#8b1f3d] to-[#a8254f] py-32 pt-56">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAzNmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIuNSIgb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-10"></div>
            <div className="absolute -left-64 -top-64 h-[600px] w-[600px] rounded-full bg-[#c2416b]/25 blur-3xl animate-pulse-slow"></div>
            <div
              className="absolute -bottom-64 -right-64 h-[600px] w-[600px] rounded-full bg-[#f59e0b]/20 blur-3xl animate-pulse-slow"
              style={{ animationDelay: '1.5s' }}
            ></div>
            <div className="absolute top-32 right-32 w-40 h-40 border-4 border-white/20 rounded-full animate-float"></div>
            <div
              className="absolute bottom-48 left-32 w-32 h-32 border-4 border-white/20 rounded-full animate-float"
              style={{ animationDelay: '1s' }}
            ></div>

            <div className="container relative mx-auto max-w-6xl px-4 text-center">
              <div className="inline-block mb-8 px-8 py-3 rounded-full bg-white/20 backdrop-blur-md border-2 border-white/30">
                <p className="text-white font-black text-sm tracking-wide">ENGINEERING EXCELLENCE SINCE 2010</p>
              </div>
              <h1 className="text-6xl font-black tracking-tight text-white sm:text-7xl md:text-8xl mb-8 animate-fadeInUp leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                About <span className="text-[#fbbf24]">Global Petrotech SPC</span>
              </h1>
              <p
                className="mx-auto max-w-4xl text-2xl leading-relaxed text-white/90 animate-fadeInUp font-medium"
                style={{ animationDelay: '0.2s', fontFamily: "'Playfair Display', serif" }}
              >
                Your trusted partner in specialized engineering and construction solutions across Oman and the GCC
                region, delivering high-quality, sustainable projects that exceed expectations.
              </p>
              <div className="mt-12 flex flex-wrap justify-center gap-6 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                <button
                  onClick={() => handleScrollTo('services')}
                  className="px-10 py-5 rounded-full bg-white text-[#6b1a2e] font-black shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 text-lg"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Explore Our Services
                </button>
                <button
                  onClick={() => handleScrollTo('contact')}
                  className="px-10 py-5 rounded-full bg-transparent text-white font-black shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 border-4 border-white text-lg"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Contact Us
                </button>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-24 bg-white relative">
            <div className="absolute inset-0 bg-gradient-to-b from-[#059669]/5 to-transparent"></div>
            <div className="container mx-auto max-w-6xl px-4 relative">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <AchievementCard icon={<Award size={28} />} value="50+" text="Major Projects Completed" />
                <AchievementCard icon={<UserCheck size={28} />} value="25+" text="Esteemed Client Partnerships" />
                <AchievementCard icon={<Shield size={28} />} value="100%" text="Safety Commitment" />
                <AchievementCard icon={<Users size={28} />} value="160+" text="Skilled Professionals" />
              </div>
            </div>
          </section>

          {/* Intro Section with Images */}
          <section className="py-32 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto max-w-7xl px-4">
              <div className="grid items-center gap-20 lg:grid-cols-2">
                <div className="space-y-8 animate-fadeInUp">
                  <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-[#dc2626]/10 via-[#ef4444]/10 to-[#f87171]/10 text-[#dc2626] font-black text-sm border-2 border-[#dc2626]/20" style={{ fontFamily: "'Playfair Display', serif" }}>
                    ESTABLISHED SME IN SULTANATE OF OMAN
                  </div>
                  <h2 className="text-5xl font-black text-gray-900 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>Welcome to Global Petrotech</h2>
                  <p className="text-gray-600 leading-relaxed text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Established as a dynamic Small and Medium Enterprise (SME) in the Sultanate of Oman, we have proudly
                    served the oil & gas, power, energy, infrastructure, municipal and environmental development (MED),
                    and landscape sectors for over a decade.
                  </p>
                  <p className="text-gray-600 leading-relaxed text-lg" style={{ fontFamily: "'Playfair Display', serif" }}>
                    Headquartered in Ghala, Muscat, our commitment to reliable execution, innovation, and client-centric
                    tailoring has earned us a reputation for delivering excellence.
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
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#dc2626] via-[#ef4444] to-[#f87171] flex items-center justify-center">
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
          <section className="bg-gradient-to-br from-[#dc2626]/5 via-[#ef4444]/5 to-[#f87171]/5 py-32">
            <div className="container mx-auto max-w-7xl px-4">
              <div className="text-center mb-20">
                <div className="inline-block px-6 py-3 rounded-full bg-white shadow-xl text-[#dc2626] font-black text-sm mb-6 border-2 border-[#dc2626]/20" style={{ fontFamily: "'Playfair Display', serif" }}>
                  OUR EVOLUTION
                </div>
                <h2 className="text-5xl font-black text-gray-900 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Our Inspiring Journey</h2>
                <p className="mx-auto max-w-3xl text-gray-600 text-xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Global Petrotech SPC's story unfolds in four transformative phases, each marking a significant
                  milestone in our quest for excellence.
                </p>
              </div>
              <div className="mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
                <JourneyCard
                  icon={<Sparkles size={32} />}
                  title="Foundation"
                  description="Born from a vision to support Oman's burgeoning infrastructure and industrial landscape with tailored solutions."
                  delay="0s"
                  index={1}
                />
                <JourneyCard
                  icon={<TrendingUp size={32} />}
                  title="Growth & Expansion"
                  description="From modest installations, we scaled to handling complex, multi-disciplinary projects with precision."
                  delay="0.15s"
                  index={2}
                />
                <JourneyCard
                  icon={<Award size={32} />}
                  title="Regional Recognition"
                  description="Our cutting-edge technologies propelled us to prominence across Oman and the GCC region."
                  delay="0.3s"
                  index={3}
                />
                <JourneyCard
                  icon={<Target size={32} />}
                  title="Present Day"
                  description="Today, we continue to innovate and evolve, tackling technically demanding projects with excellence."
                  delay="0.4s"
                  index={4}
                />
              </div>
            </div>
          </section>

          {/* Vision & Mission with Images */}
          <section className="py-32 bg-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white"></div>
            <div className="container mx-auto max-w-7xl px-4 relative">
              <div className="grid gap-12 lg:grid-cols-2">
                <div className="relative rounded-3xl overflow-hidden shadow-3xl hover:shadow-4xl transition-all duration-500 hover:scale-105">
                  <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80"
                    alt="Vision"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1e40af]/95 via-[#3b82f6]/95 to-[#60a5fa]/95 p-12 flex flex-col justify-center">
                    <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-white/20 backdrop-blur-sm">
                      <Target size={40} className="text-white" />
                    </div>
                    <h2 className="text-4xl font-black mb-6 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>Our Vision</h2>
                    <p className="text-xl leading-relaxed text-white/95" style={{ fontFamily: "'Playfair Display', serif" }}>
                      To be the leading provider of integrated engineering and construction solutions in Oman and the GCC,
                      celebrated for excellence, innovation, and sustainable practices.
                    </p>
                  </div>
                </div>
                <div className="relative rounded-3xl overflow-hidden shadow-3xl hover:shadow-4xl transition-all duration-500 hover:scale-105">
                  <img
                    src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&q=80"
                    alt="Mission"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#7c2d12]/95 via-[#92400e]/95 to-[#b45309]/95 p-12 flex flex-col justify-center">
                    <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-white/20 backdrop-blur-sm">
                      <Briefcase size={40} className="text-white" />
                    </div>
                    <h2 className="text-4xl font-black mb-6 text-white" style={{ fontFamily: "'Playfair Display', serif" }}>Our Mission</h2>
                    <p className="text-xl leading-relaxed text-white/95" style={{ fontFamily: "'Playfair Display', serif" }}>
                      To deliver cost-effective, high-quality services that surpass client expectations, upholding the
                      highest standards of safety, environmental responsibility, and ethical practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Core Principles */}
          <section className="bg-gradient-to-b from-white to-gray-50 py-32">
            <div className="container mx-auto max-w-7xl px-4">
              <div className="text-center mb-20">
                <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-[#7c3aed]/10 via-[#8b5cf6]/10 to-[#a855f7]/10 text-[#7c3aed] font-black text-sm mb-6 border-2 border-[#7c3aed]/20" style={{ fontFamily: "'Playfair Display', serif" }}>
                  WHAT DRIVES US
                </div>
                <h2 className="text-5xl font-black text-gray-900 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>Core Principles</h2>
                <p className="mx-auto max-w-3xl text-gray-600 text-xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Four fundamental pillars that form the foundation of our operations and guide every decision we make.
                </p>
              </div>
              <div className="mt-20 grid gap-10 md:grid-cols-2">
                <PrincipleCard
                  icon={<Star size={32} />}
                  title="Quality"
                  description="Adhering to international standards like ISO 9001:2015 for superior project outcomes and client delight. We implement rigorous quality control measures at every stage."
                />
                <PrincipleCard
                  icon={<Zap size={32} />}
                  title="Innovation"
                  description="Embracing emerging technologies and advanced methodologies to enhance efficiency and solve complex industry challenges with cutting-edge solutions."
                />
                <PrincipleCard
                  icon={<ShieldCheck size={32} />}
                  title="Safety"
                  description="Zero-harm commitment through rigorous HSE protocols, comprehensive training programs, and a culture of protection for people and environment."
                />
                <PrincipleCard
                  icon={<HeartHandshake size={32} />}
                  title="Integrity"
                  description="Transparent, accountable business practices that build lasting trust with all stakeholders. We conduct business with honesty, fairness, and ethical excellence."
                />
              </div>
            </div>
          </section>

          {/* What We Do */}
          <section id="services" className="py-24 bg-white">
            <div className="container mx-auto max-w-6xl px-4">
              <div className="text-center mb-16">
                <div className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-[#3b82f6]/10 via-[#60a5fa]/10 to-[#93c5fd]/10 text-[#3b82f6] font-black text-sm mb-6 border-2 border-[#3b82f6]/20" style={{ fontFamily: "'Playfair Display', serif" }}>
                  OUR EXPERTISE
                </div>
                <h2 className="text-5xl font-black text-gray-900 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>What We Do</h2>
                <p className="mx-auto max-w-3xl text-gray-600 text-xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                  We offer comprehensive end-to-end EPC (Engineering, Procurement, Construction) support and specialized
                  services across multiple disciplines.
                </p>
              </div>
              <div className="mt-16 grid gap-6 md:grid-cols-2">
                <ServiceItem
                  icon={<Construction size={32} />}
                  title="Civil & Mechanical Construction"
                  description="Comprehensive foundations, superstructures, and utility systems for industrial projects. From concrete works to structural installations, we deliver robust infrastructure solutions."
                />
                <ServiceItem
                  icon={<GitMerge size={32} />}
                  title="Flowlines & Hook-Up Works"
                  description="Expert wellhead installations, tie-ins, and commissioning for oil & gas facilities. Specialized in complex hook-up operations with precision and efficiency."
                />
                <ServiceItem
                  icon={<Factory size={32} />}
                  title="Structural Fabrication & Erection"
                  description="High-quality steel platforms, modular assemblies, equipment supports, and custom fabrications with certified welding and quality assurance."
                />
                <ServiceItem
                  icon={<Waypoints size={32} />}
                  title="Pipeline Installation & Maintenance"
                  description="Complete pipeline solutions including hydro-testing, excavation, and specialized piping like HDPE, GRE, and carbon steel with leak detection and integrity management."
                />
                <ServiceItem
                  icon={<ClipboardList size={32} />}
                  title="Engineering & Design"
                  description="From conceptual studies to detailed engineering, 3D modeling using advanced software like AutoCAD, PDMS, and simulation tools for optimal design solutions."
                />
                <ServiceItem
                  icon={<Users size={32} />}
                  title="Manpower Supply"
                  description="A skilled workforce of engineers, welders, riggers, operators, and support staff, certified to global standards like ASME, AWS, and CSWIP for excellence in execution."
                />
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
                <p className="mx-auto max-w-3xl text-gray-600 text-xl" style={{ fontFamily: "'Playfair Display', serif" }}>
                  We've powered iconic projects for industry-leading clients, forging repeat business through proven
                  results and exceptional delivery.
                </p>
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
                  Equipped with a robust fleet of essential machinery and a network to mobilize additional resources on
                  demand for any project scale.
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
                  description="Prioritizing energy efficiency, waste recycling, water conservation, and the use of eco-friendly materials and innovations."
                />
                <CSRCard
                  icon={<BookOpen size={28} />}
                  title="Local Development"
                  description="Investing in local communities through education, training programs, and creating employment opportunities for Omani talent."
                />
                <CSRCard
                  icon={<Globe size={28} />}
                  title="Community Engagement"
                  description="Actively participating in and sponsoring local events, fostering strong relationships and contributing to social well-being."
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
                As we expand across the GCC, we are excited to form strategic alliances, diversify our services with
                digital tools and automation, and continue nurturing talent for tomorrow&apos;s challenges. At Global
                Petrotech SPC, we&apos;re not just building projects—we&apos;re shaping a sustainable future.
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
                  <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Get in Touch</h3>
                  <div className="flex justify-center items-center gap-2 mb-1">
                    <Mail size={16} />
                    <a href="mailto:oiltech.om@gmail.com" className="hover:underline" style={{ fontFamily: "'Playfair Display', serif" }}>
                      oiltech.om@gmail.com
                    </a>
                  </div>
                  <div className="flex justify-center items-center gap-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                    <Phone size={16} />
                    <span>+968 99603280</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Our Location</h3>
                  <div className="flex justify-center items-center gap-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                    <MapPin size={16} />
                    <span>Ghala, Muscat, Sultanate of Oman</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>Certifications</h3>
                  <div className="flex justify-center items-center gap-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                    <span className="px-3 py-1 rounded-full bg-blue-200 text-blue-800 text-sm">JSRS</span>
                    <span className="px-3 py-1 rounded-full bg-green-200 text-green-800 text-sm">Riyada</span>
                    <span className="px-3 py-1 rounded-full bg-yellow-200 text-yellow-800 text-sm">ISO 9001:2015</span>
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

