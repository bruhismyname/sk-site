'use client';
import { FaWhatsapp, FaCalendarAlt, FaCheckCircle } from 'react-icons/fa';
import { SITE_CONFIG, CONTACT_INFO } from '../lib/constants';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
export default function Hero() {
  const whatsappLink = CONTACT_INFO.phone?.link || 'https://wa.me/6281325631160';
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  return (
    <section ref={ref} id="beranda" className="relative min-h-screen pt-20 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 animate-gradient"></div>
      
      {/* Decorative Elements - DIPERBAIKI: Responsif positioning */}
      <div className="absolute top-20 right-2 sm:right-10 w-32 sm:w-40 h-32 sm:h-40 bg-blue-100 rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute bottom-20 left-2 sm:left-10 w-48 sm:w-60 h-48 sm:h-60 bg-purple-100 rounded-full opacity-50 blur-3xl"></div>
      
      {/* Decorative Dots Pattern - Left - Tetap hidden di mobile */}
      <div className="absolute top-32 left-10 hidden lg:grid grid-cols-3 gap-2 opacity-30">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="w-2 h-2 bg-primary-400 rounded-full"></div>
        ))}
      </div>
      {/* Decorative Curved Line - Top Right - Tetap hidden di mobile */}
      <svg className="absolute top-20 right-20 w-32 h-32 text-primary-300 opacity-50 hidden lg:block" viewBox="0 0 100 100">
        <path d="M20,80 Q50,20 80,60" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <path d="M40,50 L50,30 L60,50" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
      </svg>
      {/* Decorative Squiggle - Bottom Right - Tetap hidden di mobile */}
      <svg className="absolute bottom-32 right-10 w-40 h-40 text-primary-300 opacity-50 hidden lg:block" viewBox="0 0 100 100">
        <path d="M10,50 Q30,20 50,50 T90,50" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      </svg>
      <motion.div style={{ y, opacity }} className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <motion.div 
            className="space-y-6 lg:space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <span className="px-4 py-2 bg-blue-100 text-primary-600 rounded-full text-sm font-semibold inline-flex items-center gap-2">
                <span className="animate-pulse">✨</span> {SITE_CONFIG.tagline}
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl lg:text-5xl xl:text-6xl font-bold text-secondary-900 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {SITE_CONFIG.name} <span className="gradient-text">siap melayani</span>
              <span className="block mt-2">keluhan masyarakat <span className="gradient-text">dengan sepenuh hati.</span></span>
            </motion.h1>
            
            <motion.p 
              className="text-lg text-gray-600 leading-relaxed max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {SITE_CONFIG.description}
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-2xl relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
                <FaWhatsapp className="text-xl relative z-10" />
                <span className="relative z-10">Hubungi Kami</span>
              </motion.a>
              
              <motion.a
                href="#jadwal"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-500 border-2 border-primary-500 rounded-full font-semibold hover:bg-primary-50 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaCalendarAlt />
                Jadwal Praktik
              </motion.a>
            </motion.div>
            {/* Stats Badge */}
            <motion.div 
              className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                <FaCheckCircle className="text-white text-xl" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Melayani 24/7</p>
                <p className="font-bold text-secondary-900">Bidan Desa Profesional</p>
              </div>
            </motion.div>
          </motion.div>
          {/* Right Content - Image with Decorative Elements - DIPERBAIKI */}
          <motion.div 
            className="relative flex justify-center items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Decorative Lines around image - Top */}
            <motion.svg 
              className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 w-16 h-16 text-primary-400"
              viewBox="0 0 100 100"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <line x1="50" y1="0" x2="50" y2="30" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
              <line x1="30" y1="15" x2="45" y2="30" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
              <line x1="70" y1="15" x2="55" y2="30" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
            </motion.svg>
            {/* Main Image Container - DIPERBAIKI: Responsive width */}
            <div className="relative z-10 w-full max-w-[350px] lg:max-w-[420px] px-4 sm:px-0">
              <motion.div 
                className="relative w-full aspect-[7/9] shadow-2xl rounded-3xl overflow-hidden"
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src="/images/placeholder-hero.jpeg"
                  alt={SITE_CONFIG.fullName}
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </motion.div>
              
              {/* Name Badge at Bottom - DIPERBAIKI: Responsive width */}
              <motion.div 
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-2xl px-4 sm:px-6 py-3 shadow-xl flex items-center gap-3 w-[90%] max-w-[280px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-bold text-secondary-900 text-sm truncate">{SITE_CONFIG.name}</p>
                  <p className="text-xs text-gray-600">Bidan Desa Profesional</p>
                </div>
              </motion.div>
            </div>
            {/* Decorative Squiggle - Bottom Right */}
            <motion.svg 
              className="absolute bottom-16 -right-10 w-32 h-32 text-primary-300 opacity-50 hidden lg:block"
              viewBox="0 0 100 100"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <path d="M10,50 Q30,20 50,50 T90,50" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
            </motion.svg>
            {/* Small Circle Badge - Top Left - DIPERBAIKI: Positioning aman */}
            <motion.div 
              className="absolute top-0 left-2 sm:-left-5 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center z-20"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-red-400 to-pink-500 rounded-full flex items-center justify-center shadow-inner">
                <span className="text-white text-xl animate-pulse">❤️</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
