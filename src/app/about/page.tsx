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
    className="group relative rounded-3xl bg-white/80 p-8 shadow-xl backdrop-blur-md transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-fadeInUp"
    style={{ animationDelay: delay, animationFillMode: 'both' }}
  >
    <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
      {index}
    </div>
    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent text-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 shadow-lg">
      {icon}
    </div>
    <h3 className="mb-3 text-xl font-bold text-gray-900">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
    <div className="absolute -bottom-3 -right-3 h-24 w-24 rounded-full bg-primary/5 transition-all duration-700 group-hover:scale-[3] group-hover:bg-primary/10"></div>
  </div>
);

const PrincipleCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => {
  return (
    <div className="group rounded-3xl border-2 border-gray-200 bg-white p-8 shadow-lg transition-all duration-500 hover:shadow-2xl hover:border-primary hover:-translate-y-2">
      <div className="mb-6 flex items-center gap-5">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600 leading-relaxed">{description}</p>
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
  <div className="group flex items-start gap-5 rounded-2xl p-6 transition-all duration-300 hover:bg-gradient-to-r hover:from-primary/5 hover:to-accent/5 hover:shadow-lg">
    <div className="mt-1 flex-shrink-0 text-primary transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">
      {icon}
    </div>
    <div>
      <h4 className="font-bold text-lg text-gray-900 mb-2">{title}</h4>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  </div>
);

const AchievementCard = ({ icon, text, value }: { icon: React.ReactNode; text: string; value: string }) => (
  <div className="rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 p-6 text-center transition-all duration-300 hover:scale-105 hover:shadow-xl">
    <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-white shadow-lg">
      {icon}
    </div>
    <p className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
      <AnimatedCounter
        end={parseInt(value)}
        suffix={value.includes('+') ? '+' : value.includes('%') ? '%' : ''}
      />
    </p>
    <p className="text-sm text-gray-600 mt-2">{text}</p>
  </div>
);

const ClientCard = ({ name }: { name: string }) => (
  <div className="rounded-2xl bg-white p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center min-h-[100px]">
    <h4 className="font-bold text-gray-800 text-center">{name}</h4>
  </div>
);

const EquipmentCard = ({ name }: { name: string }) => (
  <div className="rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 p-4 border border-gray-200 hover:border-primary transition-all duration-300 hover:shadow-lg">
    <div className="flex items-center gap-3">
      <div className="w-2 h-2 rounded-full bg-primary"></div>
      <p className="text-gray-700 font-medium">{name}</p>
    </div>
  </div>
);

const CSRCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="rounded-2xl bg-white p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-600">
      {icon}
    </div>
    <h4 className="font-bold text-lg text-gray-900 mb-2">{title}</h4>
    <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
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

        body,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: 'Playfair Display', serif;
        }

        p,
        span,
        a,
        div {
          font-family: 'PT Sans', sans-serif;
        }

        .font-headline {
          font-family: 'Playfair Display', serif;
        }

        .font-body {
          font-family: 'PT Sans', sans-serif;
        }

        .gradient-text {
          background: linear-gradient(135deg, #0066cc 0%, #00ccff 100%);
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
      `}</style>

      <div className="flex min-h-screen flex-col bg-gray-50 text-gray-800">
        <GlobalNav />

        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-32 pt-56">
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-5"></div>
            <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl animate-pulse-slow"></div>
            <div
              className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl animate-pulse-slow"
              style={{ animationDelay: '1.5s' }}
            ></div>
            <div className="absolute top-20 right-20 w-32 h-32 border-4 border-blue-300/30 rounded-full animate-float"></div>
            <div
              className="absolute bottom-40 left-20 w-24 h-24 border-4 border-cyan-300/30 rounded-full animate-float"
              style={{ animationDelay: '1s' }}
            ></div>

            <div className="container relative mx-auto max-w-6xl px-4 text-center">
              <div className="inline-block mb-6 px-6 py-2 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 border border-blue-200">
                <p className="text-blue-700 font-semibold">Engineering Excellence Since 2010</p>
              </div>
              <h1 className="text-5xl font-black tracking-tight text-gray-900 sm:text-6xl md:text-7xl mb-8 animate-fadeInUp font-headline">
                About <span className="gradient-text">Global Petrotech SPC</span>
              </h1>
              <p
                className="mx-auto max-w-4xl text-xl leading-relaxed text-gray-700 animate-fadeInUp font-body"
                style={{ animationDelay: '0.2s' }}
              >
                Your trusted partner in specialized engineering and construction solutions across Oman and the GCC
                region, delivering high-quality, sustainable projects that exceed expectations. With over a decade of
                excellence, we've become the preferred choice for industry leaders.
              </p>
              <div className="mt-12 flex justify-center gap-4 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
                <button
                  onClick={() => handleScrollTo('services')}
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  Explore Our Services
                </button>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleScrollTo('contact');
                  }}
                  className="px-8 py-4 rounded-full bg-white text-gray-800 font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-2 border-gray-200"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-20 bg-white">
            <div className="container mx-auto max-w-6xl px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <AchievementCard icon={<Award size={24} />} value="50+" text="Major Projects Completed" />
                <AchievementCard icon={<UserCheck size={24} />} value="25+" text="Esteemed Client Partnerships" />
                <AchievementCard icon={<Shield size={24} />} value="100%" text="Safety Commitment" />
                <AchievementCard icon={<Users size={24} />} value="160+" text="Skilled Professionals" />
              </div>
            </div>
          </section>

          {/* Intro Section */}
          <section className="py-24 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto max-w-6xl px-4">
              <div className="grid items-center gap-16 lg:grid-cols-2">
                <div className="space-y-6 animate-fadeInUp">
                  <div className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm">
                    Established SME in Sultanate of Oman
                  </div>
                  <h2 className="text-4xl font-black text-gray-900 font-headline">Welcome to Global Petrotech</h2>
                  <p className="text-gray-600 leading-relaxed text-lg font-body">
                    Established as a dynamic Small and Medium Enterprise (SME) in the Sultanate of Oman, we have proudly
                    served the oil & gas, power, energy, infrastructure, municipal and environmental development (MED),
                    and landscape sectors for over a decade.
                  </p>
                  <p className="text-gray-600 leading-relaxed text-lg font-body">
                    Headquartered in Ghala, Muscat, our commitment to reliable execution, innovation, and client-centric
                    tailoring has earned us a reputation for delivering excellence. We've built a legacy of trust
                    through consistent performance and unwavering dedication to quality.
                  </p>
                  <div className="pt-4">
                    <h3 className="font-bold text-xl text-gray-900 mb-4 font-headline">Our Sectors of Excellence:</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        'Oil & Gas',
                        'Power & Energy',
                        'Infrastructure',
                        'Municipal & Environmental',
                        'Landscape Engineering',
                        'Industrial Projects',
                      ].map((sector) => (
                        <div key={sector} className="flex items-center gap-2 text-gray-700 font-body">
                          <CheckCircle size={20} className="text-green-500" />
                          <span>{sector}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="relative h-[500px] w-full animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
                  <img
                    src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80"
                    alt="Team of engineers"
                    className="h-full w-full rounded-3xl object-cover shadow-2xl"
                  />
                  <div className="absolute -bottom-6 -right-6 h-full w-full rounded-3xl border-4 border-blue-500 -z-10"></div>
                  <div className="absolute top-6 left-6 bg-white rounded-2xl p-4 shadow-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                      <p className="font-bold text-gray-900 font-body">ISO 9001:2015 Certified</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Journey Section */}
          <section className="bg-gradient-to-br from-blue-50 to-cyan-50 py-24">
            <div className="container mx-auto max-w-6xl px-4">
              <div className="text-center mb-16">
                <div className="inline-block px-4 py-2 rounded-full bg-white shadow-md text-blue-700 font-semibold text-sm mb-4">
                  Our Evolution
                </div>
                <h2 className="text-4xl font-black text-gray-900 mb-4 font-headline">Our Inspiring Journey</h2>
                <p className="mx-auto max-w-3xl text-gray-600 text-lg font-body">
                  Global Petrotech SPC's story unfolds in four transformative phases, each marking a significant
                  milestone in our quest for excellence.
                </p>
              </div>
              <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                <JourneyCard
                  icon={<Sparkles size={28} />}
                  title="Foundation"
                  description="Born from a vision to support Oman's burgeoning infrastructure and industrial landscape with tailored solutions for SMEs, MED initiatives, and landscape engineering."
                  delay="0s"
                  index={1}
                />
                <JourneyCard
                  icon={<TrendingUp size={28} />}
                  title="Growth & Expansion"
                  description="From modest installations, we scaled to handling complex, multi-disciplinary projects, mastering detailed planning, procurement, and on-site operations with precision."
                  delay="0.15s"
                  index={2}
                />
                <JourneyCard
                  icon={<Award size={28} />}
                  title="Regional Recognition"
                  description="Our adoption of cutting-edge technologies and deep regional insights propelled us to prominence across Oman and the GCC, with strong emphasis on sustainable practices."
                  delay="0.3s"
                  index={3}
                />
                <JourneyCard
                  icon={<Target size={28} />}
                  title="Present Day"
                  description="Today, we continue to innovate and evolve, tackling technically demanding projects while prioritizing continuous improvement, customer satisfaction, and ethical excellence."
                  delay="0.4s"
                  index={4}
                />
              </div>
            </div>
          </section>

          {/* Vision & Mission */}
          <section className="py-24 bg-white">
            <div className="container mx-auto max-w-6xl px-4">
              <div className="grid gap-12 lg:grid-cols-2">
                <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-cyan-600 p-12 text-white shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
                    <Target size={32} />
                  </div>
                  <h2 className="text-3xl font-black mb-6 font-headline">Our Vision</h2>
                  <p className="text-lg leading-relaxed opacity-95 font-body">
                    To be the leading provider of integrated engineering and construction solutions in Oman and the GCC,
                    celebrated for excellence, innovation, and sustainable practices in oil & gas, power, energy, and
                    infrastructure sectors.
                  </p>
                </div>
                <div className="rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 p-12 text-white shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
                    <Briefcase size={32} />
                  </div>
                  <h2 className="text-3xl font-black mb-6 font-headline">Our Mission</h2>
                  <p className="text-lg leading-relaxed opacity-95 font-body">
                    To deliver cost-effective, high-quality services that surpass client expectations, upholding the
                    highest standards of safety, environmental responsibility, and ethical practices. We are dedicated to
                    fostering local communities, empowering our workforce, and driving sustainable regional growth.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Core Principles */}
          <section className="bg-gradient-to-b from-white to-gray-50 py-24">
            <div className="container mx-auto max-w-6xl px-4">
              <div className="text-center mb-16">
                <div className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-4">
                  What Drives Us
                </div>
                <h2 className="text-4xl font-black text-gray-900 mb-4 font-headline">Core Principles</h2>
                <p className="mx-auto max-w-3xl text-gray-600 text-lg font-body">
                  Four fundamental pillars that form the foundation of our operations and guide every decision we make.
                </p>
              </div>
              <div className="mt-16 grid gap-8 md:grid-cols-2">
                <PrincipleCard
                  icon={<Star size={28} />}
                  title="Quality"
                  description="Adhering to international standards like ISO 9001:2015 for superior project outcomes and client delight. We implement rigorous quality control measures at every stage, ensuring excellence in execution and lasting value for our clients."
                />
                <PrincipleCard
                  icon={<Zap size={28} />}
                  title="Innovation"
                  description="Embracing emerging technologies and advanced methodologies to enhance efficiency and solve complex industry challenges. We invest in cutting-edge tools, software, and training to stay ahead of the curve and deliver innovative solutions."
                />
                <PrincipleCard
                  icon={<ShieldCheck size={28} />}
                  title="Safety"
                  description="Zero-harm commitment through rigorous HSE protocols, comprehensive training programs, and a culture of protection for people, assets, and the environment. Safety is non-negotiable and embedded in our DNA."
                />
                <PrincipleCard
                  icon={<HeartHandshake size={28} />}
                  title="Integrity"
                  description="Transparent, accountable business practices that build lasting trust with all stakeholders. We conduct business with honesty, fairness, and ethical excellence, maintaining the highest standards of professional conduct."
                />
              </div>
            </div>
          </section>

          {/* What We Do */}
          <section id="services" className="py-24 bg-white">
            <div className="container mx-auto max-w-6xl px-4">
              <div className="text-center mb-16">
                <div className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-4">
                  Our Expertise
                </div>
                <h2 className="text-4xl font-black text-gray-900 mb-4 font-headline">What We Do</h2>
                <p className="mx-auto max-w-3xl text-gray-600 text-lg font-body">
                  We offer comprehensive end-to-end EPC (Engineering, Procurement, Construction) support and specialized
                  services across multiple disciplines.
                </p>
              </div>
              <div className="mt-16 grid gap-6 md:grid-cols-2">
                <ServiceItem
                  icon={<Construction size={28} />}
                  title="Civil & Mechanical Construction"
                  description="Comprehensive foundations, superstructures, and utility systems for industrial projects. From concrete works to structural installations, we deliver robust infrastructure solutions."
                />
                <ServiceItem
                  icon={<GitMerge size={28} />}
                  title="Flowlines & Hook-Up Works"
                  description="Expert wellhead installations, tie-ins, and commissioning for oil & gas facilities. Specialized in complex hook-up operations with precision and efficiency."
                />
                <ServiceItem
                  icon={<Factory size={28} />}
                  title="Structural Fabrication & Erection"
                  description="High-quality steel platforms, modular assemblies, equipment supports, and custom fabrications with certified welding and quality assurance."
                />
                <ServiceItem
                  icon={<Waypoints size={28} />}
                  title="Pipeline Installation & Maintenance"
                  description="Complete pipeline solutions including hydro-testing, excavation, and specialized piping like HDPE, GRE, and carbon steel with leak detection and integrity management."
                />
                <ServiceItem
                  icon={<ClipboardList size={28} />}
                  title="Engineering & Design"
                  description="From conceptual studies to detailed engineering, 3D modeling using advanced software like AutoCAD, PDMS, and simulation tools for optimal design solutions."
                />
                <ServiceItem
                  icon={<Users size={28} />}
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
                <div className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-4">
                  Our Partners
                </div>
                <h2 className="text-4xl font-black text-gray-900 mb-4 font-headline">Achievements & Partnerships</h2>
                <p className="mx-auto max-w-3xl text-gray-600 text-lg font-body">
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
                <div className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-4">
                  Our Fleet
                </div>
                <h2 className="text-4xl font-black text-gray-900 mb-4 font-headline">Equipment & Resources</h2>
                <p className="mx-auto max-w-3xl text-gray-600 text-lg font-body">
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
                <div className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-700 font-semibold text-sm mb-4">
                  Our Impact
                </div>
                <h2 className="text-4xl font-black text-gray-900 mb-4 font-headline">
                  Sustainability &amp; CSR
                </h2>
                <p className="mx-auto max-w-3xl text-gray-600 text-lg font-body">
                  Committed to building a sustainable future through eco-friendly practices and meaningful community
                  engagement.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <CSRCard
                  icon={<Leaf size={24} />}
                  title="Environmental Stewardship"
                  description="Prioritizing energy efficiency, waste recycling, water conservation, and the use of eco-friendly materials and innovations."
                />
                <CSRCard
                  icon={<BookOpen size={24} />}
                  title="Local Development"
                  description="Investing in local communities through education, training programs, and creating employment opportunities for Omani talent."
                />
                <CSRCard
                  icon={<Globe size={24} />}
                  title="Community Engagement"
                  description="Actively participating in and sponsoring local events, fostering strong relationships and contributing to social well-being."
                />
              </div>
            </div>
          </section>

          <section className="py-24 bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
            <div className="container mx-auto max-w-6xl px-4 text-center">
              <div className="mb-8">
                <div className="inline-block p-4 rounded-full bg-white/20">
                  <TrendingUp size={40} />
                </div>
              </div>
              <h2 className="text-4xl font-black mb-4 font-headline">Looking Ahead</h2>
              <p className="mx-auto max-w-3xl text-lg opacity-90 mb-8 font-body">
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
                  className="px-8 py-4 rounded-full bg-white text-blue-600 font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
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
                  <h3 className="font-bold text-lg mb-2 font-headline">Get in Touch</h3>
                  <div className="flex justify-center items-center gap-2 mb-1">
                    <Mail size={16} />
                    <a href="mailto:oiltech.om@gmail.com" className="hover:underline font-body">
                      oiltech.om@gmail.com
                    </a>
                  </div>
                  <div className="flex justify-center items-center gap-2 font-body">
                    <Phone size={16} />
                    <span>+968 99603280</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 font-headline">Our Location</h3>
                  <div className="flex justify-center items-center gap-2 font-body">
                    <MapPin size={16} />
                    <span>Ghala, Muscat, Sultanate of Oman</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 font-headline">Certifications</h3>
                  <div className="flex justify-center items-center gap-3 font-body">
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

