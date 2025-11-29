'use client';

import { useState, useRef, useEffect } from 'react';
import { Factory } from 'lucide-react';
import { ProjectDetailsModal } from './project-details-modal';
import type { Project } from '@/lib/types';
import { PROJECTS_DATA } from '@/lib/data/projects';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { sectorIcons } from '@/lib/icons';
import { Container } from '@/components/container';
import Link from 'next/link';

export function PortfolioSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600&display=swap');

        @keyframes shimmer {
          0% {
            background-position: -1000px 0;
          }
          100% {
            background-position: 1000px 0;
          }
        }

        .animate-shimmer {
          animation: shimmer 3s infinite linear;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(147, 36, 69, 0.3),
            transparent
          );
          background-size: 1000px 100%;
        }

        .gradient-text {
          background: linear-gradient(135deg, #932445 0%, black 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .status-badge {
          font-size: 0.7rem;
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          font-weight: 600;
          letter-spacing: 0.05em;
        }

        .status-completed {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
        }

        .status-ongoing {
          background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
          color: white;
        }

        .status-planning {
          background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%);
          color: white;
        }

        @keyframes gradient-shift {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-shift 8s ease infinite;
        }
      `}</style>

      <section
        ref={sectionRef}
        id="projects"
        className="relative py-20 bg-white overflow-hidden"
      >
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Major{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#932445] via-[#d63865] to-[#932445] animate-gradient">
                Projects
              </span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Explore a selection of our landmark projects that showcase our
              capability and commitment to excellence across various sectors.
            </p>
          </div>

          {/* Premium Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {PROJECTS_DATA.slice(0, 6).map((project, index) => {
              const isHovered = hoveredIndex === project.id;
              const Icon = sectorIcons[project.sector] || Factory;
              const image = PlaceHolderImages.find(
                (img) => img.id === project.imageId
              );

              return (
                <div
                  key={project.id}
                  className={`transition-all duration-700 ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-20'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                  onMouseEnter={() => setHoveredIndex(project.id)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="group relative h-full cursor-pointer">
                    {/* Premium Glow Effect */}
                    <div
                      className={`absolute -inset-1 bg-gradient-to-r from-[#932445] via-[#d63865] to-[#932445] rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-all duration-700`}
                    ></div>

                    {/* Luxurious Card */}
                    <div className="relative h-full bg-gradient-to-br from-gray-50/90 via-white to-gray-50/90 backdrop-blur-sm border border-gray-200/50 rounded-2xl overflow-hidden transition-all duration-700 group-hover:border-[#932445]/60 shadow-lg shadow-gray-200/50 group-hover:shadow-xl group-hover:shadow-[#932445]/20">
                      {/* Image Container with Overlay */}
                      <div className="relative h-48 overflow-hidden">
                        {image && (
                          <Image
                            src={image.imageUrl}
                            alt={image.description}
                            data-ai-hint={image.imageHint}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"></div>

                        {/* Status Badge */}
                        <div className="absolute top-4 right-4 z-20">
                          <span
                            className={`status-badge status-${project.status.toLowerCase()}`}
                          >
                            {project.status.toUpperCase()}
                          </span>
                        </div>

                        {/* Project Number */}
                        <div className="absolute bottom-4 left-4 z-20">
                          <div
                            className="text-6xl font-bold text-white/30 group-hover:text-white/50 transition-all duration-500"
                            style={{ fontFamily: 'Playfair Display, serif' }}
                          >
                            {String(index + 1).padStart(2, '0')}
                          </div>
                        </div>
                      </div>

                      {/* Premium Content */}
                      <div className="p-6">
                        {/* Sector Tag */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#932445]/10 border border-[#932445]/30 mb-3">
                          <Icon className="w-3 h-3 text-[#932445]" />
                          <span
                            className="text-[#932445] text-xs font-semibold"
                            style={{ letterSpacing: '0.05em' }}
                          >
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
                          className="text-gray-600 leading-relaxed mb-4 text-xs"
                          style={{
                            fontFamily: 'Playfair Display, serif',
                            fontWeight: '400',
                          }}
                        >
                          {project.description}
                        </p>

                        {/* Project Details */}
                        <div className="grid grid-cols-2 gap-3 mb-4">
                          <div className="bg-gray-50 rounded-lg p-2">
                            <div
                              className="text-[#932445] text-xs font-semibold mb-1"
                              style={{ letterSpacing: '0.05em' }}
                            >
                              CLIENT
                            </div>
                            <div className="text-black font-bold text-sm">
                              {project.client}
                            </div>
                          </div>
                          <div className="bg-gray-50 rounded-lg p-2">
                            <div
                              className="text-[#932445] text-xs font-semibold mb-1"
                              style={{ letterSpacing: '0.05em' }}
                            >
                              DATE
                            </div>
                            <div className="text-black font-bold text-sm">
                              {project.completionDate}
                            </div>
                          </div>
                        </div>

                        {/* Elegant Hover Arrow */}
                        <div
                          className={`flex items-center gap-2 text-[#932445] font-semibold transition-all duration-500 ${
                            isHovered
                              ? 'translate-x-2 opacity-100'
                              : 'translate-x-0 opacity-0'
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

                        {/* Premium Bottom Line Animation */}
                        <div
                          className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#932445] via-[#d63865] to-[#932445] transition-all duration-700 ${
                            isHovered ? 'w-full' : 'w-0'
                          }`}
                        ></div>
                      </div>

                      {/* Corner Accent */}
                      <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-[#932445]/20 rounded-bl-2xl transition-all duration-500 group-hover:border-[#932445]/40"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {PROJECTS_DATA.length === 0 && (
            <div className="text-center py-16">
              <p
                className="text-gray-600 text-lg"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                No projects match the current filters.
              </p>
            </div>
          )}

          {/* Premium Bottom CTA */}
          <div
            className={`mt-16 text-center transition-all duration-1000 delay-700 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10'
            }`}
          >
            <Link href="/our-work">
              <button
                className="group relative inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-[#932445] via-[#d63865] to-[#932445] bg-[length:200%_auto] text-white font-bold rounded-full overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-[#932445]/60 hover:scale-105 border-2 border-[#932445]/20"
                style={{
                  fontFamily: 'Playfair Display, serif',
                  letterSpacing: '0.05em',
                }}
              >
                <span className="relative z-10 text-sm">VIEW ALL PROJECTS</span>
                <svg
                  className="w-5 h-5 relative z-10 group-hover:translate-x-2 transition-transform duration-500"
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
                <div className="absolute inset-0 bg-gradient-to-r from-[#d63865] via-[#932445] to-[#d63865] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Shimmer Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                </div>
              </button>
            </Link>
          </div>
        </Container>
      </section>
      <ProjectDetailsModal
        isOpen={!!selectedProject}
        onOpenChange={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </>
  );
}
