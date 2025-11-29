'use client';

import { useEffect, useRef, useState } from 'react';
import { Eye, Target, Zap, Shield, Star, HeartHandshake, Sparkles, ArrowRight, Building2, Users, Award } from 'lucide-react';
import Link from 'next/link';

const VISION_MISSION_DATA = {
  vision: "To be the most trusted and innovative partner in industrial and infrastructure development across the region, setting new benchmarks for excellence, sustainability, and client satisfaction in every project we undertake.",
  mission: "Our mission is to deliver world-class engineering and construction solutions that drive economic growth and industrial advancement. We are committed to exceeding expectations through technical excellence, operational efficiency, and unwavering dedication to safety and quality in all our endeavors.",
  keyPrinciples: {
    quality: "Excellence is not just a goal but a standard we uphold in every aspect of our work. From initial planning to final execution, we ensure that every project meets the highest international standards. Our rigorous quality control processes, combined with continuous improvement initiatives, guarantee that we deliver results that stand the test of time and exceed client expectations.",
    innovation: "We embrace cutting-edge technologies and modern methodologies to solve complex challenges and optimize project outcomes. Our team constantly explores new approaches, tools, and techniques to enhance efficiency, reduce costs, and improve safety. By staying ahead of industry trends and investing in advanced equipment and training, we bring innovative solutions that add value to every project.",
    safety: "The wellbeing of our workforce, clients, and communities is our paramount concern. We maintain a zero-compromise approach to safety, implementing comprehensive protocols, conducting regular training programs, and fostering a culture where every team member is empowered to prioritize safety. Our exemplary safety record reflects our dedication to creating secure work environments and protecting lives.",
    integrity: "Trust and transparency form the foundation of all our relationships. We conduct business with the highest ethical standards, honoring our commitments and treating all stakeholders with respect and fairness. Our reputation is built on honest communication, reliable delivery, and maintaining the confidence that clients, partners, and employees place in us."
  }
};

export default function VisionMissionSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const [hoveredPrinciple, setHoveredPrinciple] = useState(null);

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

  const principles = [
    { key: 'quality', icon: Star, color: 'from-amber-500 to-orange-600', title: 'Quality Excellence' },
    { key: 'innovation', icon: Zap, color: 'from-blue-500 to-cyan-600', title: 'Innovation & Technology' },
    { key: 'safety', icon: Shield, color: 'from-green-500 to-emerald-600', title: 'Safety First' },
    { key: 'integrity', icon: HeartHandshake, color: 'from-purple-500 to-pink-600', title: 'Integrity & Trust' }
  ];

  return (
    <section 
      ref={sectionRef}
      id="vision" 
      className="relative bg-gradient-to-br from-slate-50 via-white to-slate-100 py-24 px-4 overflow-hidden"
    >
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-40px) rotate(5deg); }
        }

        @keyframes floatReverse {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(40px) rotate(-5deg); }
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

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes gradientShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to: {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-scale-in {
          animation: scaleIn 0.8s ease-out forwards;
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-shift 8s ease infinite;
        }

        .floating-shape {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.15;
        }

        .floating-shape-1 {
          animation: float 20s ease-in-out infinite;
        }

        .floating-shape-2 {
          animation: floatReverse 25s ease-in-out infinite;
        }

        .premium-card {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 100%);
          backdrop-filter: blur(40px) saturate(180%);
          border: 1px solid rgba(255, 255, 255, 0.8);
          box-shadow: 
            0 20px 60px -15px rgba(0, 0, 0, 0.1),
            0 10px 25px -10px rgba(0, 0, 0, 0.05),
            inset 0 1px 0 0 rgba(255, 255, 255, 0.6);
          position: relative;
          overflow: hidden;
          transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .premium-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.8s;
        }

        .premium-card:hover::before {
          left: 100%;
        }

        .premium-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 
            0 40px 80px -20px rgba(0, 0, 0, 0.15),
            0 20px 40px -15px rgba(168, 33, 80, 0.2),
            inset 0 1px 0 0 rgba(255, 255, 255, 0.8);
          border-color: rgba(168, 33, 80, 0.3);
        }

        .vision-mission-card {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(248, 250, 252, 0.95) 100%);
          backdrop-filter: blur(30px);
          border: 2px solid rgba(255, 255, 255, 0.5);
          position: relative;
          overflow: hidden;
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .vision-mission-card::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #932445, black);
          background-size: 200% 100%;
          animation: gradientShift 3s ease infinite;
        }

        .vision-mission-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 30px 60px -15px rgba(0, 0, 0, 0.2);
          border-color: rgba(147, 36, 69, 0.4);
        }

        .gradient-text {
          background: linear-gradient(135deg, #932445 0%, black 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .icon-glow {
          position: relative;
        }

        .icon-glow::before {
          content: '';
          position: absolute;
          inset: -10px;
          border-radius: inherit;
          background: inherit;
          filter: blur(20px);
          opacity: 0;
          transition: opacity 0.5s;
        }

        .premium-card:hover .icon-glow::before {
          opacity: 0.6;
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .principle-card {
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.8);
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          overflow: hidden;
        }

        .principle-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, transparent 0%, rgba(255, 255, 255, 0.5) 50%, transparent 100%);
          transform: translateX(-100%) translateY(-100%) rotate(45deg);
          transition: transform 0.8s;
        }

        .principle-card:hover::before {
          transform: translateX(100%) translateY(100%) rotate(45deg);
        }

        .principle-card:hover {
          transform: translateY(-8px) scale(1.03);
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
          background: rgba(255, 255, 255, 0.8);
        }

        .stats-badge {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.8);
          box-shadow: 0 8px 24px -8px rgba(0, 0, 0, 0.1);
        }

        .image-container {
          position: relative;
          overflow: hidden;
          border-radius: 24px;
        }

        .image-container::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.3) 100%);
          opacity: 0;
          transition: opacity 0.4s;
        }

        .image-container:hover::after {
          opacity: 1;
        }

        .image-container img {
          transition: transform 0.6s ease;
        }

        .image-container:hover img {
          transform: scale(1.1);
        }

        @media (max-width: 768px) {
          .floating-shape {
            opacity: 0.08;
          }
        }
      `}</style>

      {/* Floating Background Shapes */}
      <div className="floating-shape floating-shape-1 w-96 h-96 bg-gradient-to-br from-red-500/30 to-black/30 -top-20 -right-20" />
      <div className="floating-shape floating-shape-2 w-80 h-80 bg-gradient-to-br from-black/30 to-red-500/30 -bottom-20 -left-20" />
      <div className="floating-shape floating-shape-1 w-64 h-64 bg-gradient-to-br from-gray-400/20 to-gray-500/20 top-1/2 left-1/2" style={{ animationDelay: '5s' }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className={`text-center mb-20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full mb-6 stats-badge">
            <Sparkles className="w-5 h-5" style={{ color: '#932445' }}/>
            <span className="font-semibold text-gray-700 tracking-wide">Our Foundation</span>
          </div>
          
          <h2 
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Vision &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#932445] via-[#d63865] to-[#932445] animate-gradient">
              Mission
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Shaping the future of industrial infrastructure with purpose and precision
          </p>
        </div>

        {/* Vision & Mission Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {/* Vision Card */}
          <div className={`vision-mission-card rounded-3xl p-10 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="flex items-start gap-6 mb-8">
              <div className="icon-glow p-5 rounded-2xl bg-gradient-to-br from-[#932445] to-black shrink-0">
                <Eye className="w-10 h-10 text-white" />
              </div>
              <div>
                <h3 className="font-headline text-4xl font-bold text-gray-900 mb-2">Our Vision</h3>
                <div className="h-1 w-20 bg-gradient-to-r from-[#932445] to-black rounded-full"></div>
              </div>
            </div>

            {/* Vision Image */}
            <div className="image-container mb-8">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80" 
                alt="Modern Infrastructure Vision"
                className="w-full h-56 object-cover rounded-2xl"
              />
            </div>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              {VISION_MISSION_DATA.vision}
            </p>

            <div className="flex flex-wrap gap-3">
              <div className="stats-badge px-4 py-2 rounded-full">
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4" style={{ color: '#932445' }}/>
                  <span className="text-sm font-semibold text-gray-700">Excellence</span>
                </div>
              </div>
              <div className="stats-badge px-4 py-2 rounded-full">
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-black" />
                  <span className="text-sm font-semibold text-gray-700">Innovation</span>
                </div>
              </div>
              <div className="stats-badge px-4 py-2 rounded-full">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" style={{ color: '#932445' }} />
                  <span className="text-sm font-semibold text-gray-700">Trust</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mission Card */}
          <div className={`vision-mission-card rounded-3xl p-10 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
            <div className="flex items-start gap-6 mb-8">
              <div className="icon-glow p-5 rounded-2xl bg-gradient-to-br from-black to-[#932445] shrink-0">
                <Target className="w-10 h-10 text-white" />
              </div>
              <div>
                <h3 className="font-headline text-4xl font-bold text-gray-900 mb-2">Our Mission</h3>
                <div className="h-1 w-20 bg-gradient-to-r from-black to-[#932445] rounded-full"></div>
              </div>
            </div>

            {/* Mission Image */}
            <div className="image-container mb-8">
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80" 
                alt="Engineering Excellence Mission"
                className="w-full h-56 object-cover rounded-2xl"
              />
            </div>

            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              {VISION_MISSION_DATA.mission}
            </p>

            <div className="flex flex-wrap gap-3">
              <div className="stats-badge px-4 py-2 rounded-full">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-semibold text-gray-700">Efficiency</span>
                </div>
              </div>
              <div className="stats-badge px-4 py-2 rounded-full">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-semibold text-gray-700">Safety</span>
                </div>
              </div>
              <div className="stats-badge px-4 py-2 rounded-full">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-amber-600" />
                  <span className="text-sm font-semibold text-gray-700">Quality</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider with CTA */}
        <div className={`relative my-20 ${isVisible ? 'animate-scale-in' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t-2 border-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="stats-badge px-8 py-4 rounded-full">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#932445] animate-pulse"></div>
                <span className="font-semibold text-gray-700 text-lg">Core Values & Principles</span>
                <div className="w-2 h-2 rounded-full bg-black animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Principles Section */}
        <div className={`${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
          <div className="text-center mb-16">
            <h3 className="font-headline text-5xl md:text-6xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
              Principles That <span className="gradient-text">Define Us</span>
            </h3>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Our unwavering commitment to excellence in every aspect
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <div
                    key={principle.key}
                    className={`principle-card rounded-3xl p-8 block ${isVisible ? 'animate-scale-in' : 'opacity-0'}`}
                    style={{ animationDelay: `${1 + index * 0.1}s` }}
                    onMouseEnter={() => setHoveredPrinciple(principle.key)}
                    onMouseLeave={() => setHoveredPrinciple(null)}
                  >
                    <div className="flex items-start gap-5 mb-6">
                      <div className={`icon-glow p-4 rounded-2xl bg-gradient-to-br ${principle.color} shrink-0 transition-transform duration-300 ${hoveredPrinciple === principle.key ? 'scale-110 rotate-3' : ''}`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h4 className="font-headline text-2xl font-bold text-gray-900 mb-2">
                          {principle.title}
                        </h4>
                        <div className={`h-1 w-16 bg-gradient-to-r ${principle.color} rounded-full transition-all duration-300 ${hoveredPrinciple === principle.key ? 'w-24' : ''}`}></div>
                      </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed text-base">
                      {VISION_MISSION_DATA.keyPrinciples[principle.key]}
                    </p>

                    <div className={`mt-6 flex items-center gap-2 text-sm font-semibold transition-all duration-300 ${hoveredPrinciple === principle.key ? 'text-gray-900' : 'text-gray-500'}`}>
                      <span>Learn more</span>
                      <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${hoveredPrinciple === principle.key ? 'translate-x-2' : ''}`} />
                    </div>
                  </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className={`mt-20 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '1.4s' }}>
          <div className="premium-card rounded-3xl p-12 text-center">
            <div className="max-w-3xl mx-auto">
              <h4 className="font-headline text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Ready to Build the Future Together?
              </h4>
              <p className="text-xl text-gray-600 mb-8">
                Join us in creating world-class infrastructure that stands the test of time
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-4 rounded-full bg-gradient-to-r from-[#932445] to-black text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2">
                  <span>Start Your Project</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-4 rounded-full bg-white text-gray-700 font-semibold border-2 border-gray-300 hover:border-[#932445] transition-all duration-300 hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
