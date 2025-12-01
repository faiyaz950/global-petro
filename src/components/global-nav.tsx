'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronRight, ChevronDown, Sparkles, Settings, Zap, Building2, HardHat, Wrench, Factory, ClipboardList, Fuel, Users, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

const navLinks = [
  { href: '/', label: 'Home' },
  { 
    href: '#services', 
    label: 'Services',
    hasDropdown: true,
    submenu: [
      { href: '/services/epc-project-management', label: 'EPC & Project Management', icon: ClipboardList },
      { href: '/services/oil-gas-field-services', label: 'Oil & Gas Field Services', icon: Fuel },
      { href: '/services/civil-mechanical-construction', label: 'Civil & Mechanical Construction', icon: HardHat },
      { href: '/services/infrastructure-development', label: 'Infrastructure Development', icon: Building2 },
      { href: '/services/manpower-supply-equipment-rental', label: 'Manpower Supply & Equipment Rental', icon: Users },
      { href: '/services/qhse-quality-assurance', label: 'QHSE & Quality Assurance', icon: ShieldCheck },
    ]
  },
  { href: '/about', label: 'About Us' },
  { href: '/our-work', label: 'Our Work' },
  { href: '#contact', label: 'Contact' },
];

export default function GlobalNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [hoveredLink, setHoveredLink] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const sections = navLinks.map(link => link.href.startsWith('#') ? link.href.slice(1) : null).filter(Boolean);
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection('#' + current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle click outside dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      // Check if click is outside the dropdown container
      if (dropdownRef.current && !dropdownRef.current.contains(target)) {
        setActiveDropdown(null);
        setHoveredLink(null);
      }
    };

    if (activeDropdown !== null) {
      // Use a small delay to avoid closing immediately when opening
      const timeoutId = setTimeout(() => {
        document.addEventListener('mousedown', handleClickOutside);
      }, 100);
      
      return () => {
        clearTimeout(timeoutId);
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [activeDropdown]);

  const handleNavClick = (href, hasDropdown = false) => {
    setMobileMenuOpen(false);
    // Don't close dropdown if it has dropdown - let hover handlers manage it
    if (!hasDropdown) {
      setActiveDropdown(null);
    }
    if (href.startsWith('#')) {
      // Check if we're on the home page
      const isHomePage = window.location.pathname === '/';
      if (isHomePage) {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Navigate to home page with hash
        window.location.href = `/${href}`;
      }
    } else if (href.startsWith('/')) {
      // Let Next.js Link handle navigation
      window.location.href = href;
    }
  };

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&display=swap');
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .dropdown-enter {
          animation: slideDown 0.3s ease-out;
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
          animation: shimmer 3s infinite linear;
          background: linear-gradient(90deg, transparent, rgba(147, 36, 69, 0.2), transparent);
          background-size: 1000px 100%;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradientShift 3s ease infinite;
        }
      `}</style>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-100'
            : 'bg-white shadow-xl'
        }`}
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Premium Logo Section - No Box */}
            <Link
              href="/"
              className="group flex items-center relative z-10"
            >
              <div className="relative flex items-center justify-center transition-all duration-500 transform group-hover:scale-110 h-40 w-auto">
                {/* Subtle Glow Effect on Hover */}
                <div className="absolute -inset-8 rounded-2xl blur-2xl bg-gradient-to-r from-[#932445]/0 via-[#d63865]/0 to-[#932445]/0 group-hover:from-[#932445]/20 group-hover:via-[#d63865]/20 group-hover:to-[#932445]/20 opacity-0 group-hover:opacity-100 transition-all duration-700" />
                
                {/* Logo Image */}
                <img
                  src="/logog.png"
                  alt="Global Petrotech SPC"
                  className="h-40 w-auto object-contain transition-all duration-500 relative z-10 filter drop-shadow-lg group-hover:drop-shadow-2xl"
                />
              </div>
            </Link>

            {/* Desktop Navigation - Ultra Premium */}
            <nav className="hidden lg:flex items-center gap-2">
              {navLinks.map((link, index) => (
                <div 
                  key={link.href}
                  className="relative"
                  ref={link.hasDropdown && activeDropdown === index ? dropdownRef : null}
                  onMouseEnter={() => {
                    setHoveredLink(index);
                    if (link.hasDropdown) {
                      setActiveDropdown(index);
                    }
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={(e) => {
                      if (link.href.startsWith('#')) {
                        e.preventDefault();
                        handleNavClick(link.href, link.hasDropdown);
                      }
                    }}
                    className={`group relative px-6 py-3.5 rounded-2xl font-semibold text-sm tracking-wide transition-all duration-500 flex items-center gap-2 ${
                      activeSection === link.href
                        ? 'text-white bg-gradient-to-r from-[#932445] via-[#b8305a] to-[#d63865] shadow-xl shadow-[#932445]/30 scale-105'
                        : 'text-gray-700 hover:text-[#932445] hover:bg-gradient-to-r hover:from-gray-50 hover:to-white hover:shadow-lg hover:scale-105'
                    }`}
                  >
                    <span className="relative z-10">{link.label}</span>
                    {link.hasDropdown && (
                      <ChevronDown className={`w-4 h-4 transition-transform duration-500 ${
                        activeDropdown === index ? 'rotate-180' : ''
                      }`} />
                    )}
                    
                    {/* Premium Active Indicator */}
                    {activeSection === link.href && (
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#932445] via-[#b8305a] to-[#d63865] animate-gradient" />
                    )}
                    
                    {/* Animated Border on Hover */}
                    <span className={`absolute inset-0 rounded-2xl border-2 transition-all duration-500 ${
                      hoveredLink === index && activeSection !== link.href
                        ? 'border-[#932445]/30 scale-110'
                        : 'border-transparent'
                    }`} />
                  </Link>

                  {/* Premium Dropdown Menu */}
                  {link.hasDropdown && activeDropdown === index && (
                    <div 
                      className="absolute top-full left-0 mt-3 w-72 dropdown-enter"
                      onMouseEnter={() => {
                        setHoveredLink(index);
                        setActiveDropdown(index);
                      }}
                    >
                      <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden backdrop-blur-xl">
                        {/* Elegant Header */}
                        <div className="bg-gradient-to-r from-[#932445] via-[#b8305a] to-[#d63865] animate-gradient px-6 py-4 relative overflow-hidden">
                          <div className="absolute inset-0 bg-black/10" />
                          <p className="text-white text-xs font-bold tracking-widest relative z-10" style={{ fontFamily: 'Playfair Display, serif' }}>
                            OUR SERVICES
                          </p>
                          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
                        </div>
                        
                        {/* Menu Items */}
                        <div className="p-3">
                          {link.submenu.map((item, subIndex) => {
                            const Icon = item.icon;
                            return (
                              <Link
                                key={item.href}
                                href={item.href}
                                className="group flex items-center gap-4 px-5 py-4 rounded-2xl hover:bg-gradient-to-r hover:from-[#932445]/5 hover:via-[#b8305a]/5 hover:to-[#d63865]/5 transition-all duration-500 hover:scale-105 hover:shadow-lg"
                              >
                                <div className="relative">
                                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#932445]/10 via-[#b8305a]/10 to-[#d63865]/10 flex items-center justify-center group-hover:scale-110 transition-all duration-500 group-hover:shadow-lg">
                                    <Icon className="w-6 h-6 text-[#932445] group-hover:scale-110 transition-transform duration-500" />
                                  </div>
                                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#932445] to-[#d63865] opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                                </div>
                                <div className="flex-1">
                                  <p className="text-sm font-semibold text-gray-800 group-hover:text-[#932445] transition-colors duration-500">
                                    {item.label}
                                  </p>
                                  <div className="h-0.5 w-0 bg-gradient-to-r from-[#932445] to-[#d63865] group-hover:w-full transition-all duration-500 mt-1 rounded-full" />
                                </div>
                                <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[#932445] group-hover:translate-x-2 transition-all duration-500" />
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Ultra Premium CTA Button */}
            <div className="hidden lg:block">
              <Link
                href="#contact" 
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
                className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-sm overflow-hidden transition-all duration-500 hover:scale-110 hover:shadow-2xl bg-gradient-to-r from-[#932445] via-[#b8305a] to-[#d63865] text-white shadow-xl border-2 border-white/50 animate-gradient"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#d63865] via-[#b8305a] to-[#932445] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <Sparkles className="w-5 h-5 relative z-10 group-hover:rotate-180 transition-transform duration-700" />
                <span className="relative z-10 tracking-wide">Get Started</span>
                <ChevronRight className="w-5 h-5 relative z-10 group-hover:translate-x-2 transition-all duration-500" />
                
                {/* Premium Shimmer Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
                </div>

                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#932445] via-[#d63865] to-[#932445] rounded-2xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500 -z-10" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden relative p-3 rounded-2xl transition-all duration-500 active:scale-95 text-gray-800 hover:bg-gradient-to-r hover:from-[#932445]/10 hover:to-[#d63865]/10 hover:shadow-lg"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-gradient-to-br from-black/80 via-[#932445]/30 to-black/80 backdrop-blur-md z-40 lg:hidden transition-opacity duration-500 ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Ultra Premium Mobile Menu */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white z-50 lg:hidden transform transition-transform duration-700 ease-out shadow-2xl ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        {/* Premium Header */}
        <div className="relative flex items-center justify-between p-6 border-b border-gray-100 bg-gradient-to-r from-[#932445] via-[#b8305a] to-[#d63865] animate-gradient overflow-hidden">
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16" />
          
          <div className="flex flex-col relative z-10">
            <span className="font-bold text-xl text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
              Global Petrotech SPC
            </span>
            <span className="text-xs text-white/90 mt-1 tracking-widest font-semibold">PREMIUM SERVICES</span>
          </div>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-3 rounded-2xl bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all duration-500 active:scale-95 relative z-10 hover:rotate-90"
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="p-4 space-y-2 overflow-y-auto max-h-[calc(100vh-200px)]">
          {navLinks.map((link, index) => (
            <div key={link.href}>
              {link.hasDropdown ? (
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileDropdownOpen(mobileDropdownOpen === index ? null : index);
                  }}
                  className={`group flex items-center justify-between w-full px-6 py-4 rounded-2xl font-semibold tracking-wide transition-all duration-500 ${
                    activeSection === link.href
                      ? 'bg-gradient-to-r from-[#932445] via-[#b8305a] to-[#d63865] text-white shadow-xl scale-105 animate-gradient'
                      : 'text-gray-700 hover:bg-gradient-to-r hover:from-[#932445]/10 hover:via-[#b8305a]/10 hover:to-[#d63865]/10 hover:shadow-lg hover:scale-105 active:scale-95'
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform duration-500 ${
                    mobileDropdownOpen === index ? 'rotate-180' : ''
                  }`} />
                </button>
              ) : (
                <Link
                  href={link.href}
                  onClick={(e) => {
                    if (link.href.startsWith('#')) {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }
                    setMobileMenuOpen(false);
                  }}
                  className={`group flex items-center justify-between px-6 py-4 rounded-2xl font-semibold tracking-wide transition-all duration-500 ${
                    activeSection === link.href
                      ? 'bg-gradient-to-r from-[#932445] via-[#b8305a] to-[#d63865] text-white shadow-xl scale-105 animate-gradient'
                      : 'text-gray-700 hover:bg-gradient-to-r hover:from-[#932445]/10 hover:via-[#b8305a]/10 hover:to-[#d63865]/10 hover:shadow-lg hover:scale-105 active:scale-95'
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  <ChevronRight className={`w-5 h-5 transition-transform duration-500 ${
                    activeSection === link.href ? 'translate-x-2' : 'group-hover:translate-x-2'
                  }`} />
                </Link>
              )}

              {/* Mobile Dropdown */}
              {link.hasDropdown && mobileDropdownOpen === index && (
                <div className="mt-2 ml-4 space-y-2 border-l-2 border-gradient-to-b from-[#932445] to-[#d63865] pl-4">
                  {link.submenu.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 rounded-2xl hover:bg-gradient-to-r hover:from-[#932445]/10 hover:to-[#d63865]/10 transition-all duration-500 group hover:scale-105 hover:shadow-md"
                      >
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#932445]/10 to-[#d63865]/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                          <Icon className="w-5 h-5 text-[#932445]" />
                        </div>
                        <span className="text-sm font-medium text-gray-700 group-hover:text-[#932445] transition-colors duration-500">{item.label}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Ultra Premium Bottom CTA */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-100 bg-gradient-to-r from-gray-50 to-white">
          <a 
            href="#contact" 
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#contact');
            }}
            className="group relative w-full inline-flex items-center justify-center gap-3 px-6 py-5 rounded-2xl font-bold text-sm bg-gradient-to-r from-[#932445] via-[#b8305a] to-[#d63865] text-white transition-all duration-500 shadow-xl hover:shadow-2xl active:scale-95 overflow-hidden animate-gradient"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#d63865] via-[#b8305a] to-[#932445] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <Sparkles className="w-5 h-5 relative z-10 group-hover:rotate-180 transition-transform duration-700" />
            <span className="relative z-10 tracking-wide">Get Started</span>
            <ChevronRight className="w-5 h-5 relative z-10 group-hover:translate-x-2 transition-transform duration-500" />
            
            {/* Premium Shimmer Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
            </div>

            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#932445] via-[#d63865] to-[#932445] rounded-2xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
          </a>
        </div>
      </div>
    </>
  );
}
