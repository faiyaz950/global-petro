'use client';

import { MapPin, Phone, Mail, Sparkles, Building2, ArrowRight, Award, Globe } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { href: '#overview', label: 'Overview' },
    { href: '#history', label: 'History' },
    { href: '#services', label: 'Services' },
    { href: '#policies', label: 'Policies' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];
  
  const servicesLinks = [
    { href: '#services', label: 'Engineering Solutions' },
    { href: '#services', label: 'Power Systems' },
    { href: '#services', label: 'Infrastructure' },
    { href: '#services', label: 'Construction' },
    { href: '#services', label: 'Maintenance' },
    { href: '#services', label: 'Automation' },
  ];

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap');
        
        .footer-bg {
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #0a0a0a 100%);
          position: relative;
        }

        .footer-bg::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 50%, rgba(147, 36, 69, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(214, 56, 101, 0.1) 0%, transparent 50%);
          pointer-events: none;
        }

        .footer-grid-pattern {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(rgba(147, 36, 69, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(147, 36, 69, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          pointer-events: none;
        }

        .footer-link {
          position: relative;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          display: inline-block;
          font-family: 'Inter', sans-serif;
          font-weight: 400;
        }

        .footer-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 0;
          background: linear-gradient(90deg, #932445, #d63865, #932445);
          background-size: 200% 100%;
          transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 0 10px rgba(147, 36, 69, 0.5);
        }

        .footer-link:hover {
          color: #ffffff;
          transform: translateX(4px);
        }

        .footer-link:hover::after {
          width: 100%;
          animation: shimmer-line 1.5s infinite;
        }

        @keyframes shimmer-line {
          0%, 100% { background-position: 0% 0%; }
          50% { background-position: 200% 0%; }
        }

        .footer-title {
          font-family: 'Playfair Display', serif;
          letter-spacing: 0.08em;
          font-weight: 700;
          position: relative;
          display: inline-block;
        }

        .footer-title::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 40px;
          height: 3px;
          background: linear-gradient(90deg, #932445, #d63865);
          border-radius: 2px;
        }

        .footer-shimmer {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.05) 50%, transparent 100%);
          animation: shimmer-sweep 8s infinite;
        }

        @keyframes shimmer-sweep {
          0% { left: -100%; }
          100% { left: 200%; }
        }

        .contact-item {
          transition: all 0.4s ease;
          padding: 12px;
          border-radius: 8px;
          position: relative;
          overflow: hidden;
        }

        .contact-item::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(147, 36, 69, 0.1), transparent);
          transition: left 0.6s ease;
        }

        .contact-item:hover {
          background: rgba(147, 36, 69, 0.05);
          transform: translateX(4px);
        }

        .contact-item:hover::before {
          left: 100%;
        }

        .logo-container {
          position: relative;
          transition: transform 0.4s ease;
        }

        .logo-container:hover {
          transform: scale(1.05);
        }

        .logo-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 120%;
          height: 120%;
          background: radial-gradient(circle, rgba(147, 36, 69, 0.3) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .logo-container:hover .logo-glow {
          opacity: 1;
        }

        .stat-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(147, 36, 69, 0.2);
          border-radius: 12px;
          padding: 20px;
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }

        .stat-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #932445, #d63865, transparent);
          background-size: 200% 100%;
          animation: stat-shine 3s infinite;
        }

        @keyframes stat-shine {
          0%, 100% { background-position: 200% 0%; }
          50% { background-position: -200% 0%; }
        }

        .stat-card:hover {
          background: rgba(147, 36, 69, 0.08);
          border-color: rgba(147, 36, 69, 0.4);
          transform: translateY(-4px);
        }

        .stat-number {
          font-family: 'Playfair Display', serif;
          font-size: 2rem;
          font-weight: 700;
          background: linear-gradient(135deg, #ffffff, #d63865);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .bottom-bar {
          background: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(10px);
          border-top: 1px solid rgba(147, 36, 69, 0.2);
        }

        .pulse-dot {
          width: 8px;
          height: 8px;
          background: #932445;
          border-radius: 50%;
          display: inline-block;
          margin-right: 8px;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
        }
      `}</style>
      
      <footer className="footer-bg text-gray-300 relative overflow-hidden">
        <div className="footer-grid-pattern"></div>
        <div className="footer-shimmer"></div>
        
        <div className="max-w-7xl mx-auto py-20 px-6 lg:px-8 relative z-10">
          
          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="stat-card text-center">
              <Award className="w-8 h-8 text-[#932445] mx-auto mb-3" />
              <div className="stat-number">100%</div>
              <p className="text-gray-400 text-sm mt-2" style={{ fontFamily: "'Inter', sans-serif" }}>Omani Owned</p>
            </div>
            <div className="stat-card text-center">
              <Building2 className="w-8 h-8 text-[#932445] mx-auto mb-3" />
              <div className="stat-number">EPC</div>
              <p className="text-gray-400 text-sm mt-2" style={{ fontFamily: "'Inter', sans-serif" }}>Integrated Solutions</p>
            </div>
            <div className="stat-card text-center">
              <Globe className="w-8 h-8 text-[#932445] mx-auto mb-3" />
              <div className="stat-number">3+</div>
              <p className="text-gray-400 text-sm mt-2" style={{ fontFamily: "'Inter', sans-serif" }}>Key Sectors</p>
            </div>
          </div>

          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            
            {/* Column 1: About */}
            <div className="space-y-6">
              <div className="logo-container inline-block">
                <div className="logo-glow"></div>
                <img
                  src="/api/placeholder/200/80"
                  alt="Global Petrotech SPC"
                  className="h-20 w-auto object-contain relative z-10"
                />
              </div>
              <p className="text-sm leading-relaxed text-gray-400" style={{ fontFamily: "'Inter', sans-serif" }}>
                A 100% Omani-owned SME delivering integrated EPC solutions for the Oil & Gas, Power, and Infrastructure sectors with unwavering commitment to excellence and sustainability.
              </p>
              <div className="flex items-center text-sm">
                <span className="pulse-dot"></span>
                <span className="text-gray-500" style={{ fontFamily: "'Inter', sans-serif" }}>Building Oman's Future</span>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="footer-title text-xl text-white mb-8">Quick Links</h3>
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="footer-link text-gray-400 flex items-center group">
                      <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Column 3: Core Services */}
            <div>
              <h3 className="footer-title text-xl text-white mb-8">Core Services</h3>
              <ul className="space-y-4">
                {servicesLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="footer-link text-gray-400 flex items-center group">
                      <Sparkles className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact Info */}
            <div>
              <h3 className="footer-title text-xl text-white mb-8">Get in Touch</h3>
              <ul className="space-y-3">
                <li className="contact-item">
                  <div className="flex items-start gap-4 relative z-10">
                    <MapPin className="w-5 h-5 text-[#932445] mt-1 shrink-0" />
                    <div>
                      <span className="font-semibold text-white block mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>Our Office</span>
                      <p className="text-gray-400 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>Ghala, Muscat<br/>Sultanate of Oman</p>
                    </div>
                  </div>
                </li>
                <li className="contact-item">
                  <div className="flex items-start gap-4 relative z-10">
                    <Mail className="w-5 h-5 text-[#932445] mt-1 shrink-0" />
                    <div>
                      <span className="font-semibold text-white block mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>Email Us</span>
                      <a href="mailto:oiltech.om@gmail.com" className="block text-gray-400 hover:text-white text-sm transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>
                        oiltech.om@gmail.com
                      </a>
                    </div>
                  </div>
                </li>
                <li className="contact-item">
                  <div className="flex items-start gap-4 relative z-10">
                    <Phone className="w-5 h-5 text-[#932445] mt-1 shrink-0" />
                    <div>
                      <span className="font-semibold text-white block mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>Call Us</span>
                      <a href="tel:+96899603280" className="block text-gray-400 hover:text-white text-sm transition-colors" style={{ fontFamily: "'Inter', sans-serif" }}>
                        +968 99603280
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="bottom-bar mt-12 pt-8 text-center rounded-xl">
            <p className="text-sm text-gray-500" style={{ fontFamily: "'Playfair Display', serif", letterSpacing: '0.05em' }}>
              &copy; {currentYear} Global Petrotech SPC. All Rights Reserved.
            </p>
            <p className="text-xs text-gray-600 mt-2" style={{ fontFamily: "'Inter', sans-serif" }}>
              Excellence in Engineering | Powered by Innovation
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
