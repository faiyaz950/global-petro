'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Send, MapPin, Phone, Mail, Building2, Clock, Globe } from 'lucide-react';

const initialState = {
  success: false,
  message: '',
  errors: undefined,
};

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [formState, setFormState] = useState(initialState);
  const [pending, setPending] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPending(true);
    
    // Simulate form submission
    setTimeout(() => {
      setFormState({
        success: true,
        message: 'Message sent successfully! We will get back to you soon.',
        errors: undefined,
      });
      setPending(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormState(initialState);
      }, 5000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 'Ghala, Muscat',
      subcontent: 'Sultanate of Oman',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+968 99603280',
      subcontent: 'Mon - Fri, 8AM - 6PM',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Mail,
      title: 'Email Us',
      content: 'oiltech.om@gmail.com',
      subcontent: 'mshsuri@gmail.com',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600&display=swap');
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }
      `}</style>

      <section
        ref={sectionRef}
        id="contact"
        className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 py-20 px-4 overflow-hidden"
        style={{ fontFamily: 'Playfair Display, serif' }}
      >
        {/* Premium Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-1/4 w-[600px] h-[600px] bg-[#932445] rounded-full blur-[150px] animate-pulse"></div>
          <div className="absolute bottom-20 right-1/4 w-[600px] h-[600px] bg-[#d63865] rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(147,36,69,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(147,36,69,0.03)_1px,transparent_1px)] bg-[size:70px_70px] opacity-50"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Elegant Header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white shadow-lg shadow-[#932445]/10 border border-[#932445]/20 mb-6">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#932445] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#932445]"></span>
              </div>
              <span className="text-[#932445] font-semibold text-xs tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>GET IN TOUCH</span>
            </div>
            
            <h2 
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Let's Start a{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#932445] via-[#d63865] to-[#932445] animate-gradient">
                Conversation
              </span>
            </h2>
            
            <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'Playfair Display, serif', fontWeight: '400' }}>
              Have a project in mind? We're here to turn your vision into reality. Reach out to us and let's create something extraordinary together
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className={`grid md:grid-cols-3 gap-6 mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={index}
                  className="group relative"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className={`absolute -inset-1 bg-gradient-to-r ${info.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-all duration-700`}></div>
                  
                  <div className="relative bg-white border border-gray-200/50 rounded-2xl p-6 hover:border-[#932445]/30 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-[#932445]/10">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                      {info.title}
                    </h3>
                    <p className="text-gray-700 font-medium mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {info.content}
                    </p>
                    <p className="text-gray-500 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {info.subcontent}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Company Info */}
            <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-[#932445] via-[#d63865] to-[#932445] rounded-3xl blur-2xl opacity-10"></div>
                
                <div className="relative bg-white border border-gray-200/50 rounded-3xl p-8 shadow-2xl">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#932445] to-[#d63865] flex items-center justify-center">
                      <Building2 className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Playfair Display, serif' }}>
                        Global Petrotech SPC
                      </h3>
                      <p className="text-gray-600" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Building Tomorrow, Today
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                      <Clock className="w-5 h-5 text-[#932445] mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                          Business Hours
                        </h4>
                        <p className="text-gray-600 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Monday - Friday: 8:00 AM - 6:00 PM<br />
                          Saturday: 8:00 AM - 2:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                      <Globe className="w-5 h-5 text-[#932445] mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>
                          Our Expertise
                        </h4>
                        <p className="text-gray-600 text-sm" style={{ fontFamily: 'Inter, sans-serif' }}>
                          Oil & Gas • Power Generation • Infrastructure Development • Industrial Construction • MEP Services
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <p className="text-gray-600 leading-relaxed" style={{ fontFamily: 'Playfair Display, serif', fontWeight: '400' }}>
                      With over a decade of excellence in Oman's industrial sector, we're committed to delivering world-class solutions that exceed expectations. Let's discuss how we can bring value to your next project.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#932445] via-[#d63865] to-[#932445] rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-700"></div>
                
                <form
                  onSubmit={handleSubmit}
                  className="relative bg-white border border-gray-200/50 rounded-3xl p-8 shadow-2xl"
                >
                  <h3 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                    Send us a Message
                  </h3>
                  <p className="text-gray-600 mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
                    Fill out the form below and we'll get back to you within 24 hours
                  </p>

                  {formState.success && (
                    <div className="mb-6 p-4 rounded-xl bg-green-50 border border-green-200 animate-pulse">
                      <p className="text-green-700 font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {formState.message}
                      </p>
                    </div>
                  )}

                  <div className="space-y-6">
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="Your Name"
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-[#932445] outline-none transition-all duration-300 bg-gray-50 focus:bg-white"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      />
                      <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#932445] to-[#d63865] transition-all duration-300 ${focusedField === 'name' ? 'w-full' : 'w-0'}`}></div>
                    </div>

                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="Your Email"
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-[#932445] outline-none transition-all duration-300 bg-gray-50 focus:bg-white"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      />
                      <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#932445] to-[#d63865] transition-all duration-300 ${focusedField === 'email' ? 'w-full' : 'w-0'}`}></div>
                    </div>

                    <div className="relative">
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        placeholder="Subject"
                        onFocus={() => setFocusedField('subject')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-[#932445] outline-none transition-all duration-300 bg-gray-50 focus:bg-white"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      />
                      <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#932445] to-[#d63865] transition-all duration-300 ${focusedField === 'subject' ? 'w-full' : 'w-0'}`}></div>
                    </div>

                    <div className="relative">
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="Your Message"
                        rows={5}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-[#932445] outline-none transition-all duration-300 resize-none bg-gray-50 focus:bg-white"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      />
                      <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#932445] to-[#d63865] transition-all duration-300 ${focusedField === 'message' ? 'w-full' : 'w-0'}`}></div>
                    </div>

                    <button
                      type="submit"
                      disabled={pending}
                      className="relative w-full py-4 rounded-xl bg-gradient-to-r from-[#932445] to-[#d63865] text-white font-semibold overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-2xl hover:shadow-[#932445]/30"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {pending ? 'Sending...' : (
                          <>
                            Send Message
                            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-[#d63865] to-[#932445] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute bottom-0 right-0 w-20 h-20 border-r-2 border-b-2 border-[#932445]/20 rounded-br-3xl"></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
