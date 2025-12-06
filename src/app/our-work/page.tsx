'use client';

import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { CheckCircle2, Shield, Star, Calendar, Building2, Users, TrendingUp, Award, Target, Sparkles, Factory } from 'lucide-react';
import Image from 'next/image';
import { sectorIcons } from '@/lib/icons';
import GlobalNav from '@/components/global-nav';
import { PROJECTS_DATA } from '@/lib/data/projects';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ProjectDetailsModal } from '@/components/project-details-modal';
import type { Project } from '@/lib/types';
import Link from 'next/link';

export default function PremiumOurWorkPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', ...Object.keys(sectorIcons)];

  const filteredProjects = selectedCategory === 'All' 
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.sector === selectedCategory);

  const stats = [
    {
      icon: Target,
      value: '50+',
      label: 'Major Projects',
      description: 'Successfully completed across diverse sectors',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      value: '25+',
      label: 'Client Partnerships',
      description: 'Long-term relationships built on trust',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Award,
      value: '100%',
      label: 'Safety Commitment',
      description: 'Zero compromise on safety standards',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: TrendingUp,
      value: '160+',
      label: 'Expert Workforce',
      description: 'Highly skilled professionals',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const insights = [
    {
      icon: CheckCircle2,
      title: 'Diverse Portfolio',
      description: 'Predominantly oil & gas projects with significant work in infrastructure and utilities, showcasing our versatility across multiple sectors.',
      gradient: 'from-[#932445] to-[#d63865]'
    },
    {
      icon: Star,
      title: 'High Standards',
      description: 'Adherence to international standards like ISO 9001:2015 and JSRS certification, ensuring quality excellence in every project.',
      gradient: 'from-amber-500 to-yellow-500'
    },
    {
      icon: Shield,
      title: 'Safety & Reliability',
      description: 'Proven track record in handling hazardous environments and logistically complex projects with zero incidents.',
      gradient: 'from-emerald-500 to-teal-500'
    },
  ];

    const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <GlobalNav />
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&display=swap');

        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(147, 36, 69, 0.3); }
          50% { box-shadow: 0 0 40px rgba(147, 36, 69, 0.6); }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .status-badge {
          font-size: 0.7rem;
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          font-weight: 600;
          letter-spacing: 0.05em;
          color: white;
        }

        .status-completed {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
        }

        .status-ongoing {
          background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-shift 8s ease infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }

        .glass-effect {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }

        * {
          font-family: 'Playfair Display', serif;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-[#932445] to-gray-900 py-32 pt-48">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMS4xLS45LTItMi0yaC04Yy0xLjEgMC0yIC45LTIgMnY4YzAgMS4xLjkgMiAyIDJoOGMxLjEgMCAyLS45IDItMnYtOHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        
        <div className="container relative mx-auto max-w-6xl px-4 text-center">
          <div className="animate-slide-up mb-6 flex items-center justify-center">
            <Sparkles className="h-8 w-8 text-amber-400 mr-3 animate-pulse" />
            <span className="text-amber-400 font-semibold tracking-wider uppercase text-sm">
              Portfolio Excellence
            </span>
            <Sparkles className="h-8 w-8 text-amber-400 ml-3 animate-pulse" />
          </div>
          
          <h1 className="text-6xl font-black tracking-tight text-white sm:text-7xl md:text-8xl mb-8 animate-slide-up">
            Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 animate-gradient">
              Legacy
            </span>
            {' '}of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 animate-gradient">
              Excellence
            </span>
          </h1>
          
          <p className="mx-auto max-w-3xl text-xl leading-relaxed text-gray-200 animate-slide-up mb-12" style={{ animationDelay: '0.2s' }}>
            A showcase of our unwavering commitment to innovation, quality, and safety across diverse sectors. Transforming visions into reality through engineering excellence.
          </p>

          <div className="flex flex-wrap justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="glass-effect px-6 py-3 rounded-full">
              <span className="text-white font-semibold">ISO 9001:2015 Certified</span>
            </div>
            <div className="glass-effect px-6 py-3 rounded-full">
              <span className="text-white font-semibold">JSRS Accredited</span>
            </div>
            <div className="glass-effect px-6 py-3 rounded-full">
              <span className="text-white font-semibold">Zero Incident Record</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Stats Section */}
      <section className="py-20 -mt-20 relative z-10">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card 
                  key={stat.label} 
                  className="glass-effect border-2 border-white/50 animate-slide-up overflow-hidden relative group"
                  style={{ animationDelay: `${index * 0.1}s`, transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'}}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0) scale(1)'}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  <CardContent className="p-8 text-center relative z-10">
                    <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${stat.gradient} mb-4 animate-float`}>
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-5xl font-black text-gray-900 mb-2">{stat.value}</div>
                    <div className="text-lg font-bold text-gray-700 mb-2">{stat.label}</div>
                    <div className="text-sm text-gray-600">{stat.description}</div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Overview */}
      <section className="py-16">
        <div className="container mx-auto max-w-7xl px-4">
          <Card className="mb-12 border-2 bg-gradient-to-br from-white to-gray-50">
            <CardHeader className="text-center pb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#932445] to-[#d63865] mb-4 mx-auto animate-pulse-glow">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-4xl md:text-5xl font-black bg-gradient-to-r from-[#932445] to-[#d63865] bg-clip-text text-transparent">
                Portfolio Overview
              </CardTitle>
              <CardDescription className="text-lg mt-2">
                A comprehensive summary of our extensive project experience and achievements
              </CardDescription>
            </CardHeader>
            <CardContent className="px-8 pb-8">
              <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="text-base md:text-lg mb-4">
                  According to our company's portfolio, we have successfully completed <strong className="text-[#932445]">over 50 major projects</strong> across diverse sectors. The showcase below highlights selected major projects from 2011 to present, totaling <strong className="text-[#932445]">15 landmark projects</strong>.
                </p>
                <p className="text-base md:text-lg mb-4">
                  These encompass both greenfield and brownfield initiatives across critical sectors including oil & gas, infrastructure development, pipeline works, road construction, telecommunications, and utilities. Each project demonstrates our capability to deliver complex engineering solutions in challenging environments.
                </p>
                <p className="text-base md:text-lg">
                  The company maintains a <strong className="text-green-600">100% safety commitment</strong> across all projects with a zero-incident record. We have fostered <strong className="text-[#932445]">25+ long-term client partnerships</strong> through consistent excellence and repeat business, solidifying our reputation as a trusted contractor in the region.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Key Insights */}
          <Card className="mb-12 border-2 bg-gradient-to-br from-white to-gray-50">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-4xl md:text-5xl font-black bg-gradient-to-r from-[#932445] to-[#d63865] bg-clip-text text-transparent">
                Key Insights & Achievements
              </CardTitle>
              <CardDescription className="text-lg mt-2">
                What sets us apart in the industry
              </CardDescription>
            </CardHeader>
            <CardContent className="px-4 pb-8">
              <div className="grid md:grid-cols-3 gap-8">
                {insights.map((insight, index) => {
                  const Icon = insight.icon;
                  return (
                    <div
                      key={insight.title}
                      className="group relative rounded-2xl border-2 bg-white p-8 animate-slide-up overflow-hidden"
                      style={{ animationDelay: `${index * 0.15}s`, transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)' }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0) scale(1)'}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${insight.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                      <div className="relative z-10">
                        <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${insight.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-black text-gray-900 mb-3">
                          {insight.title}
                        </h3>
                        <p className="text-base text-gray-600 leading-relaxed">
                          {insight.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Category Filter */}
          <div className="mb-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Filter by Category</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-[#932445] to-[#d63865] text-white shadow-lg scale-105'
                      : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-[#932445] hover:scale-105'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-12 bg-gradient-to-r from-[#932445] to-[#d63865] bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => {
                const isHovered = hoveredIndex === project.id;
                const Icon = sectorIcons[project.sector] || Factory;
                const image = PlaceHolderImages.find(p => p.id === project.imageId);

                return (
                  <div
                    key={project.id}
                    className={`transition-all duration-700 animate-slide-up`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                    onMouseEnter={() => setHoveredIndex(project.id)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="group relative h-full cursor-pointer">
                      <div
                        className={`absolute -inset-1 bg-gradient-to-r from-[#932445] via-[#d63865] to-[#932445] rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-all duration-700`}
                      ></div>
                      <div className="relative h-full bg-gradient-to-br from-gray-50/90 via-white to-gray-50/90 backdrop-blur-sm border border-gray-200/50 rounded-2xl overflow-hidden transition-all duration-700 group-hover:border-[#932445]/60 shadow-lg shadow-gray-200/50 group-hover:shadow-xl group-hover:shadow-[#932445]/20">
                        <div className="relative h-48 overflow-hidden">
                          {image && (
                            <Image
                              src={image.imageUrl}
                              alt={project.name}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                              data-ai-hint={image.imageHint}
                            />
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>
                          <div className="absolute top-4 right-4 z-20">
                            <span className={`status-badge status-${project.status.toLowerCase()}`}>
                              {project.status.toUpperCase()}
                            </span>
                          </div>
                          <div className="absolute bottom-4 left-4 z-20">
                            <div
                              className="text-6xl font-bold text-white/30 group-hover:text-white/50 transition-all duration-500"
                              style={{ fontFamily: 'Playfair Display, serif' }}
                            >
                              {String(index + 1).padStart(2, '0')}
                            </div>
                          </div>
                        </div>

                        <div className="p-6">
                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#932445]/10 border border-[#932445]/30 mb-3">
                            <Icon className="w-3 h-3 text-[#932445]" />
                            <span className="text-[#932445] text-xs font-semibold" style={{ letterSpacing: '0.05em' }}>
                              {project.sector.toUpperCase()}
                            </span>
                          </div>

                          <h3
                            className="text-xl font-bold text-black mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#932445] group-hover:to-[#d63865] transition-all duration-500"
                            style={{ fontFamily: 'Playfair Display, serif' }}
                          >
                            {project.name}
                          </h3>

                          <p
                            className="text-gray-600 leading-relaxed mb-4 text-base line-clamp-3"
                            style={{
                              fontFamily: 'Playfair Display, serif',
                              fontWeight: '400',
                            }}
                          >
                            {project.description}
                          </p>

                          <div className="grid grid-cols-2 gap-3 mb-4">
                            <div className="bg-gray-50 rounded-lg p-2">
                              <div className="text-[#932445] text-xs font-semibold mb-1" style={{ letterSpacing: '0.05em' }}>
                                CLIENT
                              </div>
                              <div className="text-black font-bold text-sm">
                                {project.client}
                              </div>
                            </div>
                            <div className="bg-gray-50 rounded-lg p-2">
                              <div className="text-[#932445] text-xs font-semibold mb-1" style={{ letterSpacing: '0.05em' }}>
                                DATE
                              </div>
                              <div className="text-black font-bold text-sm">
                                {project.completionDate}
                              </div>
                            </div>
                          </div>
                          <div
                            className={`flex items-center gap-2 text-[#932445] font-semibold transition-all duration-500 ${
                              isHovered ? 'translate-x-2 opacity-100' : 'translate-x-0 opacity-0'
                            }`}
                            style={{ letterSpacing: '0.05em' }}
                          >
                            <span className="text-xs">VIEW DETAILS</span>
                            <svg
                              className="w-4 h-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2.5}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                              />
                            </svg>
                          </div>
                          <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#932445] via-[#d63865] to-[#932445] transition-all duration-700 ${isHovered ? 'w-full' : 'w-0'}`}></div>
                        </div>
                        <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-[#932445]/20 rounded-bl-2xl transition-all duration-500 group-hover:border-[#932445]/40"></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom CTA */}
          <Card className="border-2 bg-gradient-to-br from-[#932445] to-[#d63865] text-white overflow-hidden relative mt-16">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMTZjMC0xLjEtLjktMi0yLTJoLThjLTEuMSAwLTIgLjktMiAydjhjMCAxLjEuOSAyIDIgMmg4YzEuMSAwIDItLjkgMi0ydi04eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
            <CardContent className="p-12 text-center relative z-10">
              <h3 className="text-4xl font-black mb-4">Ready to Start Your Next Project?</h3>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Let's collaborate to bring your vision to life with our proven expertise and commitment to excellence.
              </p>
                <Link href="/#contact">
                    <button className="px-8 py-4 bg-white text-[#932445] rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-xl hover:shadow-2xl">
                        Get in Touch
                    </button>
                </Link>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <ProjectDetailsModal
        isOpen={!!selectedProject}
        onOpenChange={(isOpen) => !isOpen && setSelectedProject(null)}
        project={selectedProject}
      />
    </div>
  );
}
