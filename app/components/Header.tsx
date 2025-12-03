'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { SITE_CONFIG, CONTACT_INFO } from '@/app/lib/constants';
import { FaBars, FaTimes, FaWhatsapp } from 'react-icons/fa';
const navItems = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Layanan', href: '#layanan' },
  { label: 'Jadwal', href: '#jadwal' },
  { label: 'Lokasi', href: '#lokasi' },
  { label: 'Kontak', href: '#kontak' },
];
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#beranda" onClick={(e) => smoothScroll(e, '#beranda')} className="flex items-center space-x-2">
            <span className="font-bold text-lg md:text-xl text-gray-900 hidden sm:inline">
              {SITE_CONFIG.name}
            </span>
          </a>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => smoothScroll(e, item.href)}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}
          </div>
          {/* CTA Button - Desktop */}
          <a
            href={CONTACT_INFO.whatsapp.linkWithText}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <FaWhatsapp className="text-xl" />
            <span>Hubungi Sekarang</span>
          </a>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <FaTimes className="w-6 h-6 text-gray-900" />
            ) : (
              <FaBars className="w-6 h-6 text-gray-900" />
            )}
          </button>
        </div>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 bg-white">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => smoothScroll(e, item.href)}
                  className="text-gray-700 hover:text-blue-600 font-medium px-4 py-2 hover:bg-gray-50 rounded-lg transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={CONTACT_INFO.whatsapp.linkWithText}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all mx-4"
              >
                <FaWhatsapp className="text-xl" />
                <span>Hubungi Sekarang</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
