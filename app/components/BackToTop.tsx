'use client';
import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollProgress } from '@/app/hooks/useScrollProgress';
export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const scrollProgress = useScrollProgress();
  
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  
  // SVG Circle parameters untuk RING LUAR
  const radius = 30; // Radius ring (lebih besar dari button)
  const strokeWidth = 4; // Ketebalan ring
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;
  
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.3, type: 'spring' }}
          className="fixed bottom-24 left-6 z-50"
        >
          {/* Container dengan ukuran total (button + ring) */}
          <motion.button
            onClick={scrollToTop}
            className="relative w-16 h-16 flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Back to top"
          >
            {/* SVG RING PROGRESS - DI LUAR BUTTON */}
            <svg 
              className="absolute inset-0 w-16 h-16 -rotate-90"
              viewBox="0 0 68 68"
              style={{ 
                transform: 'rotate(-90deg)', 
                overflow: 'visible' 
              }}
            >
              {/* Background Ring (Track) */}
              <circle
                cx="34"
                cy="34"
                r={radius}
                stroke="#E5E7EB"
                strokeWidth={strokeWidth}
                fill="none"
                className="opacity-30"
              />
              
              {/* Progress Ring (Terisi sesuai scroll) */}
              <circle
                cx="34"
                cy="34"
                r={radius}
                stroke="url(#progressGradient)"
                strokeWidth={strokeWidth}
                fill="none"
                strokeLinecap="round"
                style={{
                  strokeDasharray: circumference,
                  strokeDashoffset: strokeDashoffset,
                  transition: 'stroke-dashoffset 0.35s ease-out',
                }}
              />
              
              {/* Gradient Definition */}
              <defs>
                <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" />
                  <stop offset="50%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#EC4899" />
                </linearGradient>
              </defs>
            </svg>
            
            {/* BUTTON UTAMA - DI TENGAH */}
            <motion.div 
              className="relative z-10 w-14 h-14 bg-white rounded-full shadow-xl flex items-center justify-center group hover:shadow-2xl transition-shadow border-2 border-gray-100"
              whileHover={{ backgroundColor: '#F3F4F6' }}
            >
              <FaArrowUp className="text-blue-600 text-xl group-hover:text-blue-700 group-hover:-translate-y-0.5 transition-all" />
            </motion.div>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
