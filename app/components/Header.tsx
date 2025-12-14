'use client';
import { useState, useEffect } from 'react';
import { SITE_CONFIG, CONTACT_INFO } from '@/app/lib/constants';
import { FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa';
import { useScrollProgress } from '@/app/hooks/useScrollProgress';
import { useActiveSection } from '@/app/hooks/useActiveSection';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Tentang', href: '#tentang' },
  { label: 'Layanan', href: '#layanan' },
  { label: 'Jadwal', href: '#jadwal' },
  { label: 'Lokasi', href: '#lokasi' },
  { label: 'Kontak', href: '#kontak' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollProgress = useScrollProgress();
  const activeSection = useActiveSection(['beranda', 'tentang', 'layanan', 'jadwal', 'lokasi', 'kontak']);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-gray-200">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
          style={{ width: `${scrollProgress}%` }}
          initial={{ width: 0 }}
          transition={{ duration: 0.1 }}
        />
      </div>

      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-lg border-b border-gray-100'
            : 'bg-transparent'
        }`}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo with Animation */}
            <motion.a
              href="#beranda"
              onClick={(e) => smoothScroll(e, '#beranda')}
              className="flex items-center space-x-2 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className={`w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg ${isScrolled ? 'scale-90' : ''} transition-transform`}>
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="font-bold text-lg md:text-xl text-gray-900 hidden sm:inline group-hover:text-blue-600 transition-colors">
                {SITE_CONFIG.name}
              </span>
            </motion.a>

            {/* Desktop Navigation with Active Indicator */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => smoothScroll(e, item.href)}
                    className={`relative px-4 py-2 font-medium transition-all duration-200 rounded-lg ${
                      isActive
                        ? 'text-blue-600'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                        initial={false}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </div>

            {/* CTA Button - Desktop with Hover Effect */}
            <motion.a
              href={CONTACT_INFO.whatsapp.linkWithText}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
              <FaWhatsapp className="text-xl relative z-10" />
              <span className="relative z-10">Hubungi Sekarang</span>
            </motion.a>

            {/* Mobile Menu Button with Animation */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaTimes className="w-6 h-6 text-gray-900" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <FaBars className="w-6 h-6 text-gray-900" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Mobile Menu with Slide Animation */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden overflow-hidden border-t border-gray-200 bg-white/95 backdrop-blur-xl"
              >
                <div className="py-4 flex flex-col space-y-2">
                  {navItems.map((item, index) => {
                    const isActive = activeSection === item.href.substring(1);
                    return (
                      <motion.a
                        key={item.href}
                        href={item.href}
                        onClick={(e) => smoothScroll(e, item.href)}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className={`px-4 py-3 font-medium rounded-lg transition-colors ${
                          isActive
                            ? 'text-blue-600 bg-blue-50'
                            : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                        }`}
                      >
                        {item.label}
                      </motion.a>
                    );
                  })}
                  <motion.a
                    href={CONTACT_INFO.whatsapp.linkWithText}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: navItems.length * 0.1 }}
                    className="flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold transition-all mx-4 shadow-lg hover:shadow-xl"
                  >
                    <FaWhatsapp className="text-xl" />
                    <span>Hubungi Sekarang</span>
                  </motion.a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>
    </>
  );
}
