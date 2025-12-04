'use client';

import { useEffect, useRef, useState } from 'react';
import { Sparkles, TrendingUp, Award, Target, Building, Users, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';

const TIMELINE_DATA = [
  {
    year: '2010',
    title: 'Foundation & Vision',
    description: "Global Petrotech SPC was established with a clear vision: to become a cornerstone of Oman's industrial and infrastructure growth. Our journey began with a small, dedicated team and a commitment to delivering exceptional quality and reliability in every project we undertook.",
    icon: Sparkles,
    image: '/foundationandvision.png',
    highlights: ['Company Founded', 'Initial Team Formation', 'Vision Established']
  },
  {
    year: '2013',
    title: 'First Major Project',
    description: 'We secured our first major contract, the Well Hook-Up Work in the Karim West Field for MEDCO. This project was a significant milestone, proving our capabilities in the demanding Oil & Gas sector and solidifying our reputation as a dependable contractor in the region.',
    icon: Building,
    image: '/thirteenglob.png',
    highlights: ['Karim West Field Contract', 'MEDCO Partnership', 'Industry Entry']
  },
  {
    year: '2016',
    title: 'Market Expansion',
    description: 'Building on our initial successes, we expanded our operational footprint across multiple cities and industrial zones in Oman. This period was marked by strategic partnerships and a diversification of our service portfolio to include major infrastructure development works.',
    icon: TrendingUp,
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80',
    highlights: ['Multi-City Operations', 'Strategic Partnerships', 'Service Diversification']
  },
  {
    year: '2019',
    title: 'Team Growth & Innovation',
    description: 'Our team grew to over 100 skilled professionals across various disciplines. We invested heavily in workforce training, adopting modern construction practices and emerging technologies to enhance our efficiency, safety standards, and the overall quality of our project delivery.',
    icon: Users,
    image: '/fourglob.png',
    highlights: ['100+ Team Members', 'Advanced Training Programs', 'Technology Adoption']
  },
  {
    year: '2022',
    title: 'Industry Recognition',
    description: 'Our unwavering commitment to excellence was recognized with several prestigious industry accolades for our outstanding performance, exceptional safety record, and dedication to sustainable and innovative construction solutions in major national development projects.',
    icon: Award,
    image: '/industryrecognition.png',
    highlights: ['Industry Awards', 'Safety Excellence', 'Sustainability Recognition']
  },
  {
    year: '2024',
    title: 'Leading Complex Projects',
    description: 'Today, we stand at the forefront of managing technically demanding, large-scale projects across the Oil & Gas, Power, and Infrastructure sectors. Our continuous evolution is driven by a relentless focus on client satisfaction, quality excellence, and pushing the boundaries of engineering innovation.',
    icon: Target,
    image: '/fourteenglob.png',
    highlights: ['Large-Scale Projects', 'Technical Excellence', 'Industry Leadership']
  },
];

export default function TimelineSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const autoScroll = setInterval(() => {
      const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
      const currentScroll = scrollContainer.scrollLeft;
      
      if (currentScroll >= maxScroll) {
        scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        scrollContainer.scrollBy({ left: 400, behavior: 'smooth' });
      }
    }, 3500);

    return () => clearInterval(autoScroll);
  }, []);

  return (
    <>
      <style>{`
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
          background: linear-gradient(90deg, transparent, rgba(147, 36, 69, 0.3), transparent);
          background-size: 1000px 100%;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <section
        ref={sectionRef}
        id="history"
        className="relative bg-white py-20 px-2 overflow-hidden"
        style={{ fontFamily: 'Playfair Display, serif' }}
      >
        {/* Premium Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#932445] rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#d63865] rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(147,36,69,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(147,36,69,0.03)_1px,transparent_1px)] bg-[size:70px_70px]"></div>

        <div className="max-w-[1400px] mx-auto relative z-10 px-2">
          {/* Elegant Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white shadow-lg shadow-[#932445]/10 border border-[#932445]/20 mb-6">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#932445] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#932445]"></span>
              </div>
              <span className="text-[#932445] font-semibold text-xs tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>OUR JOURNEY</span>
            </div>
            
            <h2 
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Journey of{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#932445] via-[#d63865] to-[#932445] animate-gradient">
                Excellence
              </span>
            </h2>
            
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'Playfair Display, serif', fontWeight: '400' }}>
              Transforming vision into reality through innovation, dedication, and unwavering commitment to excellence across every milestone of our remarkable journey
            </p>
          </div>

          {/* Premium Timeline - Horizontal Scroll */}
          <div className="relative">
            <div 
              ref={scrollContainerRef} 
              className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scrollbar-hide pl-2"
            >
              {TIMELINE_DATA.map((item, index) => {
                const Icon = item.icon;
                const isHovered = hoveredIndex === index;

                return (
                  <div
                    key={index}
                    className={`relative snap-center flex-shrink-0 w-[380px] transition-all duration-700 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <div className="group relative h-full">
                      {/* Premium Glow Effect */}
                      <div className={`absolute -inset-1 bg-gradient-to-r from-[#932445] via-[#d63865] to-[#932445] rounded-3xl blur-xl opacity-0 group-hover:opacity-35 transition-all duration-700`}></div>
                      
                      {/* Luxurious Card */}
                      <div className="relative h-full bg-white border border-gray-200/50 rounded-3xl overflow-hidden group-hover:border-[#932445]/60 transition-all duration-700 shadow-lg group-hover:shadow-2xl group-hover:shadow-[#932445]/20">
                        {/* Image Container */}
                        <div className="relative overflow-hidden h-64">
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className={`object-cover transition-all duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
                          />
                          <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-80' : 'opacity-60'}`}></div>
                          
                          {/* Year Badge on Image */}
                          <div className="absolute top-6 right-6">
                            <div className="px-6 py-3 rounded-2xl bg-gradient-to-r from-[#932445]/90 to-[#d63865]/90 backdrop-blur-md border border-white/20">
                              <span className="text-3xl font-bold text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
                                {item.year}
                              </span>
                            </div>
                          </div>

                          {/* Icon Badge */}
                          <div className="absolute bottom-6 left-6">
                            <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-[#932445] to-[#d63865] flex items-center justify-center transition-all duration-500 ${isHovered ? 'scale-110 rotate-6 shadow-2xl shadow-[#932445]/50' : 'scale-100 rotate-0'}`}>
                              <Icon className="w-7 h-7 text-white" />
                            </div>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-6">
                          <h3 
                            className="text-2xl font-bold text-black mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#932445] group-hover:to-[#d63865] transition-all duration-500"
                            style={{ fontFamily: 'Playfair Display, serif' }}
                          >
                            {item.title}
                          </h3>
                          
                          <p className="text-gray-600 leading-relaxed mb-5 text-sm" style={{ fontFamily: 'Playfair Display, serif', fontWeight: '400' }}>
                            {item.description}
                          </p>

                          {/* Highlights */}
                          <div className="flex flex-wrap gap-2">
                            {item.highlights.map((highlight, i) => (
                              <div 
                                key={i} 
                                className="px-3 py-2 rounded-full bg-gray-50 border border-gray-200/50 hover:border-[#932445]/30 transition-all duration-300"
                              >
                                <div className="flex items-center gap-2">
                                  <CheckCircle2 className="w-3 h-3 text-[#932445]" />
                                  <span className="text-xs font-medium text-gray-700" style={{ fontFamily: 'Playfair Display, serif', letterSpacing: '0.02em' }}>
                                    {highlight}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Bottom Accent Line */}
                        <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#932445] via-[#d63865] to-[#932445] transition-all duration-700 ${isHovered ? 'w-full' : 'w-0'}`}></div>
                        
                        {/* Corner Accent */}
                        <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-[#932445]/20 rounded-br-3xl transition-all duration-500 group-hover:border-[#932445]/40"></div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Scroll Indicator */}
            <div className={`mt-10 flex justify-center gap-2 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              {TIMELINE_DATA.map((_, index) => (
                <div 
                  key={index}
                  className="w-2 h-2 rounded-full bg-gray-300 transition-all duration-300 hover:bg-[#932445] hover:w-8"
                ></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}