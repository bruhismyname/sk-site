'use client';
import { CONTACT_INFO } from '@/app/lib/constants';
import { FaWhatsapp } from 'react-icons/fa';
export default function WhatsAppButton() {
  return (
    <a
      href={CONTACT_INFO.whatsapp.linkWithText}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 transform hover:scale-110 group"
      aria-label="Chat via WhatsApp"
    >
      <FaWhatsapp className="text-white text-3xl group-hover:scale-110 transition-transform" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat via WhatsApp
      </span>
    </a>
  );
}
