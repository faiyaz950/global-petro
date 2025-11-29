'use client';

import { useEffect, useRef, useState } from 'react';
import { ShieldCheck, HeartHandshake, Award, Target, CheckCircle2, Sparkles } from 'lucide-react';

const POLICIES_DATA = {
  hse: {
    title: 'Health, Safety & Environment (HSE) Policy',
    commitment: 'We are committed to providing a safe and healthy work environment while minimizing our environmental impact through sustainable practices and continuous improvement.',
    principles: [
      'Zero harm to people and the environment',
      'Compliance with all applicable HSE regulations and standards',
      'Continuous improvement in HSE performance',
      'Active participation and accountability at all levels',
      'Proactive risk management and hazard identification'
    ],
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80',
    icon: ShieldCheck,
    color: 'from-[#932445] to-[#d63865]'
  },
  quality: {
    title: 'Quality Policy',
    commitment: 'Our quality policy reflects our dedication to excellence, ensuring that every project meets the highest standards of quality, reliability, and customer satisfaction.',
    principles: [
      'Deliver projects that exceed client expectations',
      'Maintain ISO-certified quality management systems',
      'Implement rigorous quality control at every stage',
      'Foster a culture of continuous improvement',
      'Leverage best practices and innovative solutions'
    ],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    icon: HeartHandshake,
    color: 'from-[#d63865] to-[#932445]'
  }
};

export default function PoliciesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const sectionRef = useRef(null);

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
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600&display=swap');
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 4s ease infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>

      <section
        ref={sectionRef}
        id="policies"
        className="relative bg-gradient-to-b from-gray-50 to-white py-20 px-4 overflow-hidden"
        style={{ fontFamily: 'Playfair Display, serif' }}
      >
        {/* Premium Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#932445] rounded-full blur-[150px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#d63865] rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Decorative Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(147,36,69,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(147,36,69,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

        <div className="max-w-[1400px] mx-auto relative z-10">
          {/* Elegant Header */}
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white shadow-lg shadow-[#932445]/10 border border-[#932445]/20 mb-6">
              <Award className="w-4 h-4 text-[#932445]" />
              <span className="text-[#932445] font-semibold text-xs tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>OUR COMMITMENT</span>
            </div>
            
            <h2 
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Excellence in{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#932445] via-[#d63865] to-[#932445] animate-gradient">
                Every Standard
              </span>
            </h2>
            
            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Playfair Display, serif', fontWeight: '400' }}>
              Dedicated to maintaining the highest standards of Health, Safety, Environment, and Quality through unwavering commitment and continuous improvement
            </p>
          </div>

          {/* Premium Policy Cards */}
          <div className="grid md:grid-cols-2 gap-8 px-4">
            {Object.entries(POLICIES_DATA).map(([key, policy], index) => {
              const Icon = policy.icon;
              const isHovered = hoveredCard === key;

              return (
                <div
                  key={key}
                  className={`transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                  onMouseEnter={() => setHoveredCard(key)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="group relative h-full">
                    {/* Premium Glow Effect */}
                    <div className={`absolute -inset-1 bg-gradient-to-r ${policy.color} rounded-3xl blur-2xl opacity-0 group-hover:opacity-40 transition-all duration-700`}></div>
                    
                    {/* Luxurious Card */}
                    <div className="relative h-full bg-white border border-gray-200/50 rounded-3xl overflow-hidden group-hover:border-[#932445]/60 transition-all duration-700 shadow-xl group-hover:shadow-2xl group-hover:shadow-[#932445]/20">
                      
                      {/* Image Container with Overlay */}
                      <div className="relative overflow-hidden h-72">
                        <img
                          src={policy.image}
                          alt={policy.title}
                          className={`w-full h-full object-cover transition-all duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
                        />
                        <div className={`absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent transition-opacity duration-500 ${isHovered ? 'opacity-90' : 'opacity-70'}`}></div>
                        
                        {/* Floating Icon Badge */}
                        <div className="absolute top-8 left-8">
                          <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${policy.color} flex items-center justify-center transition-all duration-500 shadow-2xl ${isHovered ? 'scale-110 rotate-6 shadow-[#932445]/50' : 'scale-100 rotate-0'}`}>
                            <Icon className="w-10 h-10 text-white" />
                          </div>
                        </div>

                        {/* Decorative Corner Element */}
                        <div className="absolute top-8 right-8">
                          <div className={`px-4 py-2 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 transition-all duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}>
                            <Target className="w-5 h-5 text-white" />
                          </div>
                        </div>

                        {/* Premium Title Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-8">
                          <h3 
                            className="text-3xl font-bold text-white mb-2 transition-all duration-500"
                            style={{ fontFamily: 'Playfair Display, serif' }}
                          >
                            {policy.title}
                          </h3>
                          <div className={`h-1 bg-gradient-to-r ${policy.color} transition-all duration-700 ${isHovered ? 'w-32' : 'w-16'}`}></div>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="p-8">
                        {/* Commitment Statement */}
                        <div className="mb-6">
                          <div className="flex items-start gap-3 mb-3">
                            <Sparkles className="w-5 h-5 text-[#932445] mt-1 flex-shrink-0" />
                            <p className="text-gray-700 leading-relaxed text-base" style={{ fontFamily: 'Playfair Display, serif', fontWeight: '500' }}>
                              {policy.commitment}
                            </p>
                          </div>
                        </div>

                        {/* Principles with Premium Styling */}
                        <div className="space-y-3">
                          {policy.principles.map((principle, i) => (
                            <div 
                              key={i} 
                              className={`flex items-start gap-3 p-3 rounded-xl transition-all duration-300 ${isHovered ? 'bg-gray-50 translate-x-2' : 'bg-transparent translate-x-0'}`}
                              style={{ transitionDelay: `${i * 50}ms` }}
                            >
                              <div className={`mt-1 transition-all duration-300 ${isHovered ? 'scale-125' : 'scale-100'}`}>
                                <CheckCircle2 className="w-5 h-5 text-[#932445]" />
                              </div>
                              <span className="text-gray-700 text-sm leading-relaxed" style={{ fontFamily: 'Playfair Display, serif', fontWeight: '400' }}>
                                {principle}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Bottom Accent with Animation */}
                      <div className={`absolute bottom-0 left-0 h-1.5 bg-gradient-to-r ${policy.color} transition-all duration-700 ${isHovered ? 'w-full' : 'w-0'}`}></div>
                      
                      {/* Corner Decoration */}
                      <div className="absolute bottom-0 right-0 w-24 h-24 border-r-2 border-b-2 border-[#932445]/10 rounded-br-3xl transition-all duration-500 group-hover:border-[#932445]/30"></div>
                      
                      {/* Floating Sparkle Effect */}
                      <div className={`absolute top-4 right-4 transition-all duration-700 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
                        <Sparkles className="w-6 h-6 text-[#932445] animate-pulse" />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Premium Bottom Section */}
          <div className={`mt-16 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#932445] to-[#d63865] shadow-2xl shadow-[#932445]/30">
              <Award className="w-6 h-6 text-white" />
              <p className="text-white font-semibold text-lg" style={{ fontFamily: 'Playfair Display, serif' }}>
                ISO Certified Quality Management Systems
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}