import { FaWhatsapp, FaCalendarAlt } from 'react-icons/fa';
import { SITE_CONFIG, CONTACT_INFO } from '../lib/constants';
import Image from 'next/image';

export default function Hero() {
  // Akses properti link langsung dari objek phone
  const whatsappLink = CONTACT_INFO.phone?.link || 'https://wa.me/6281325631160';

  return (
    <section id="beranda" className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-40 h-40 bg-blue-100 rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-60 h-60 bg-purple-100 rounded-full opacity-50 blur-3xl"></div>
      
      {/* Decorative Dots Pattern - Left */}
      <div className="absolute top-32 left-10 hidden lg:grid grid-cols-3 gap-2 opacity-30">
        {[...Array(12)].map((_, i) => (
          <div key={i} className="w-2 h-2 bg-primary-400 rounded-full"></div>
        ))}
      </div>

      {/* Decorative Curved Line - Top Right */}
      <svg className="absolute top-20 right-20 w-32 h-32 text-primary-300 opacity-50 hidden lg:block" viewBox="0 0 100 100">
        <path d="M20,80 Q50,20 80,60" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <path d="M40,50 L50,30 L60,50" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
      </svg>

      {/* Decorative Squiggle - Bottom Right */}
      <svg className="absolute bottom-32 right-10 w-40 h-40 text-primary-300 opacity-50 hidden lg:block" viewBox="0 0 100 100">
        <path d="M10,50 Q30,20 50,50 T90,50" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      </svg>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="space-y-6 lg:space-y-8">
            <div className="inline-block">
              <span className="px-4 py-2 bg-blue-100 text-primary-600 rounded-full text-sm font-semibold">
                ✨ {SITE_CONFIG.tagline}
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-secondary-900 leading-tight">
              {SITE_CONFIG.name} <span className="text-primary-500">siap melayani</span>
              <span className="block mt-2">keluhan masyarakat <span className="text-primary-500">dengan sepenuh hati.</span></span>
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              {SITE_CONFIG.description}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary-500 text-white rounded-full font-semibold hover:bg-primary-600 transition-all shadow-lg shadow-primary-500/30 hover:shadow-xl hover:shadow-primary-500/40 transform hover:scale-105"
              >
                <FaWhatsapp className="text-xl" />
                Hubungi Kami
              </a>
              
              <a
                href="#jadwal"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-500 border-2 border-primary-500 rounded-full font-semibold hover:bg-primary-50 transition-all"
              >
                <FaCalendarAlt />
                Jadwal Praktik
              </a>
            </div>

            {/* Stats Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-lg">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">✓</span>
              </div>
              <div>
                <p className="text-sm text-gray-600">Melayani 24/7</p>
                <p className="font-bold text-secondary-900">Bidan Desa Profesional</p>
              </div>
            </div>
          </div>

          {/* Right Content - Image with Decorative Elements */}
          <div className="relative flex justify-center items-center">
            {/* Decorative Lines around image - Top */}
            <svg className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 w-16 h-16 text-primary-400" viewBox="0 0 100 100">
              <line x1="50" y1="0" x2="50" y2="30" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
              <line x1="30" y1="15" x2="45" y2="30" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
              <line x1="70" y1="15" x2="55" y2="30" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
            </svg>

            {/* Main Image Container */}
            <div className="relative z-10">
              <div className="relative w-[350px] h-[450px] lg:w-[420px] lg:h-[520px] shadow-2xl rounded-3xl overflow-hidden">
                <Image
                  src="/images/placeholder-hero.jpeg"
                  alt={SITE_CONFIG.fullName}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Name Badge at Bottom */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-2xl px-6 py-3 shadow-xl flex items-center gap-3 min-w-[280px]">
                {/* <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-500 font-bold text-lg">SK</span>
                </div> */}
                <div>
                  <p className="font-bold text-secondary-900 text-sm">{SITE_CONFIG.name}</p>
                  <p className="text-xs text-gray-600">Bidan Desa Profesional</p>
                </div>
              </div>
            </div>

            {/* Decorative Squiggle - Bottom Right */}
            <svg className="absolute bottom-16 -right-10 w-32 h-32 text-primary-300 opacity-50 hidden lg:block" viewBox="0 0 100 100">
              <path d="M10,50 Q30,20 50,50 T90,50" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
            </svg>

            {/* Small Circle Badge - Top Left */}
            <div className="absolute -top-5 -left-5 w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center z-20">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                <span className="text-red-500 text-xl">❤️</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
