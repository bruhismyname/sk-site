'use client';
import { CONTACT_INFO } from '@/app/lib/constants';
import { FaWhatsapp, FaCalendar, FaPhone, FaTimes, FaUser, FaStethoscope, FaPaperPlane } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [showConsultForm, setShowConsultForm] = useState(false);
  const [formData, setFormData] = useState({ name: '', service: 'Pemeriksaan Kehamilan' });
  const handleConsultSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Halo Bidan Shofi, saya ${formData.name}. Saya ingin konsultasi mengenai ${formData.service}. Mohon infonya.`;
    const phoneNumber = CONTACT_INFO.whatsapp.link.replace('https://wa.me/', '');
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setShowConsultForm(false);
    setIsOpen(false);
  };
  const servicesList = [
    'Pemeriksaan Kehamilan',
    'Imunisasi Anak',
    'KB (Keluarga Berencana)',
    'Keluhan Kesehatan',
    'Home Visit'
  ];
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      <div className="pointer-events-auto">
        {/* Consultation Form Modal - DIPERBAIKI: Responsive width */}
        <AnimatePresence>
          {showConsultForm && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              className="absolute bottom-20 right-0 mb-4 bg-white rounded-2xl shadow-2xl p-6 w-[90vw] max-w-[350px] border border-gray-100"
            >
              <div className="flex justify-between items-center mb-4 border-b pb-3">
                <h3 className="font-bold text-gray-800 flex items-center gap-2">
                  <FaWhatsapp className="text-green-500 text-xl" />
                  Formulir Konsultasi
                </h3>
                <button onClick={() => setShowConsultForm(false)} className="text-gray-400 hover:text-gray-600">
                  <FaTimes />
                </button>
              </div>
              
              <form onSubmit={handleConsultSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Nama Lengkap</label>
                  <div className="relative">
                    <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs" />
                    <input 
                      type="text" 
                      required
                      className="w-full pl-8 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                      placeholder="Masukkan nama Anda"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Jenis Layanan</label>
                  <div className="relative">
                    <FaStethoscope className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs" />
                    <select 
                      className="w-full pl-8 pr-3 py-2 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 outline-none bg-white"
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                    >
                      {servicesList.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-colors shadow-md"
                >
                  <FaPaperPlane />
                  Kirim Pesan ke WA
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
        {/* Quick Action Menu */}
        <AnimatePresence>
          {isOpen && !showConsultForm && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-20 right-0 flex flex-col gap-3 mb-2 items-end"
            >
              {/* Tombol Konsultasi (Trigger Form) */}
              <motion.button
                onClick={() => setShowConsultForm(true)}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 }}
                className="bg-green-500 hover:bg-green-600 rounded-full shadow-lg flex items-center gap-3 pr-5 pl-4 py-3 group w-max"
                whileHover={{ scale: 1.05, x: -5 }}
              >
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <FaWhatsapp className="text-white text-lg" />
                </div>
                <span className="text-white font-semibold text-sm">
                  Konsultasi / Chat
                </span>
              </motion.button>
              <motion.a
                href={CONTACT_INFO.phone.link}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-blue-500 hover:bg-blue-600 rounded-full shadow-lg flex items-center gap-3 pr-5 pl-4 py-3 group w-max"
                whileHover={{ scale: 1.05, x: -5 }}
              >
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <FaPhone className="text-white text-lg" />
                </div>
                <span className="text-white font-semibold text-sm">
                  Panggilan Darurat
                </span>
              </motion.a>
              <motion.a
                href="#jadwal"
                onClick={() => setIsOpen(false)}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 }}
                className="bg-purple-500 hover:bg-purple-600 rounded-full shadow-lg flex items-center gap-3 pr-5 pl-4 py-3 group w-max"
                whileHover={{ scale: 1.05, x: -5 }}
              >
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <FaCalendar className="text-white text-lg" />
                </div>
                <span className="text-white font-semibold text-sm">
                  Lihat Jadwal
                </span>
              </motion.a>
            </motion.div>
          )}
        </AnimatePresence>
        {/* Main Toggle Button */}
        <motion.button
          onClick={() => {
            setIsOpen(!isOpen);
            setShowConsultForm(false);
          }}
          className={`w-16 h-16 ${
            isOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
          } rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 relative`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {/* Pulse Ring */}
          {!isOpen && (
            <motion.div
              className="absolute inset-0 bg-green-400 rounded-full"
              initial={{ scale: 1, opacity: 0.5 }}
              animate={{ scale: 1.5, opacity: 0 }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 0.5 }}
            />
          )}
          
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <FaTimes className="text-white text-3xl" />
              </motion.div>
            ) : (
              <motion.div
                key="whatsapp"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <FaWhatsapp className="text-white text-3xl" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </div>
  );
}
