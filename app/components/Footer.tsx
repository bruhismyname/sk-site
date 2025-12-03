import { FaInstagram, FaFacebook, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import { SITE_CONFIG, CONTACT_INFO } from '../lib/constants';

export default function Footer() {
  // Akses properti link langsung dari objek phone
  const whatsappLink = CONTACT_INFO.phone?.link || 'https://wa.me/6285877494754';
  const phoneNumber = CONTACT_INFO.phone?.number || '0858-7749-4754';

  const menuLinks = [
    { name: 'Beranda', href: '#beranda' },
    { name: 'Tentang Kami', href: '#tentang' },
    { name: 'Layanan', href: '#layanan' },
    { name: 'Jadwal', href: '#jadwal' },
  ];

  return (
    <footer className="bg-secondary-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand & Description */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-4">{SITE_CONFIG.name}</h3>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              {SITE_CONFIG.description}
            </p>
            <div className="flex gap-3">
              <a 
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors"
              >
                <FaInstagram />
              </a>
              <a 
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors"
              >
                <FaFacebook />
              </a>
              <a 
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-500 transition-colors"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Menu</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              {menuLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Layanan */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Layanan</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#layanan" className="hover:text-white transition-colors">Pemeriksaan Kehamilan</a></li>
              <li><a href="#layanan" className="hover:text-white transition-colors">KB & Konseling</a></li>
              <li><a href="#layanan" className="hover:text-white transition-colors">Imunisasi Bayi</a></li>
              <li><a href="#jadwal" className="hover:text-white transition-colors">Posyandu</a></li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Kontak Kami</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <FaPhone className="mt-1 flex-shrink-0 text-primary-400" />
                <span>{phoneNumber}</span>
              </li>
              <li className="flex items-start gap-3">
                <FaEnvelope className="mt-1 flex-shrink-0 text-primary-400" />
                <span>{CONTACT_INFO.email.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 flex-shrink-0 text-primary-400" />
                <span>Desa Sari RT.08/RW.3, Gajah, Demak</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              Copyright © {SITE_CONFIG.name} {new Date().getFullYear()}. All rights reserved.
            </p>
            <div className="flex gap-6 text-gray-400 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}