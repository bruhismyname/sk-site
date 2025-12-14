'use client';
import { FaBaby, FaHeartbeat, FaSyringe, FaUserMd, FaStethoscope, FaHandHoldingHeart, FaProcedures, FaHospital, FaNotesMedical, FaChild, FaFirstAid, FaArrowRight, FaTimes, FaInfoCircle } from 'react-icons/fa';
import { SERVICES } from '../lib/constants';
import AnimatedSection from './AnimatedSection';
import { motion } from 'framer-motion';
import { useState } from 'react';
const serviceIcons = [
  FaBaby, FaHeartbeat, FaSyringe, FaUserMd, FaStethoscope, 
  FaHandHoldingHeart, FaProcedures, FaHospital, FaNotesMedical, 
  FaChild, FaFirstAid
];
export default function Services() {
  const featuredServices = SERVICES.slice(0, 3);
  const [activeCard, setActiveCard] = useState<number | null>(null);
  
  // Logic toggle untuk mobile yang lebih baik daripada hover
  const toggleCard = (index: number) => {
    setActiveCard(activeCard === index ? null : index);
  };
  
  return (
    <section id="layanan" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <AnimatedSection variant="fadeUp">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary-900 mb-4">
              Daftar Layanan
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kami menyediakan berbagai layanan kesehatan ibu dan anak dengan pendekatan preventif dan kekeluargaan
            </p>
          </div>
        </AnimatedSection>
        {/* Featured Service Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {featuredServices.map((service, index) => {
            const Icon = serviceIcons[index];
            const isFlipped = activeCard === index;
            
            return (
              <AnimatedSection 
                key={index} 
                variant="fadeUp" 
                delay={0.2 + (index * 0.15)}
              >
                <div className="perspective-1000 h-[420px]">
                  <motion.div
                    className="relative w-full h-full preserve-3d"
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
                  >
                    {/* Front Side */}
                    <div className="absolute inset-0 backface-hidden bg-white rounded-3xl p-8 shadow-lg flex flex-col items-center text-center border border-gray-100">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center mb-6 shadow-sm">
                        <Icon className="text-4xl text-blue-600" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                        {service.description}
                      </p>
                      
                      {/* Button Explicit untuk Mobile Friendly */}
                      <button 
                        onClick={() => toggleCard(index)}
                        className="w-full py-3 px-6 rounded-xl bg-blue-50 text-blue-600 font-semibold flex items-center justify-center gap-2 hover:bg-blue-100 transition-colors group"
                      >
                        <FaInfoCircle />
                        <span>Lihat Detail</span>
                        <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                    {/* Back Side */}
                    <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 shadow-2xl text-white flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-start mb-6">
                          <Icon className="text-4xl opacity-80" />
                          <button 
                            onClick={() => toggleCard(index)}
                            className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                          >
                            <FaTimes />
                          </button>
                        </div>
                        
                        <h3 className="text-2xl font-bold mb-4">
                          {service.title}
                        </h3>
                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <span className="bg-green-400 p-1 rounded-full mt-1"></span>
                            <p className="text-sm opacity-90 leading-relaxed">Pelayanan profesional sesuai standar kebidanan</p>
                          </div>
                          <div className="flex items-start gap-3">
                            <span className="bg-green-400 p-1 rounded-full mt-1"></span>
                            <p className="text-sm opacity-90 leading-relaxed">Peralatan steril dan modern</p>
                          </div>
                          <div className="flex items-start gap-3">
                            <span className="bg-green-400 p-1 rounded-full mt-1"></span>
                            <p className="text-sm opacity-90 leading-relaxed">Konsultasi komprehensif</p>
                          </div>
                        </div>
                      </div>
                      
                      <a 
                        href="#kontak"
                        className="w-full bg-white text-blue-600 px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition-all flex items-center justify-center gap-2 shadow-lg"
                      >
                        Reservasi
                        <FaArrowRight />
                      </a>
                    </div>
                  </motion.div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
        {/* All Services List */}
        <AnimatedSection variant="fadeIn" delay={0.6}>
          <div className="max-w-6xl mx-auto">
            <h3 className="text-xl font-bold text-gray-800 mb-6 px-2 border-l-4 border-blue-500">Layanan Lainnya</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {SERVICES.slice(3).map((service, index) => {
                const Icon = serviceIcons[index + 3];
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-md hover:border-blue-200 transition-all group cursor-default"
                  >
                    <div className="flex items-start gap-4">
                        <div className="bg-blue-50 p-3 rounded-lg group-hover:bg-blue-100 transition-colors">
                            <Icon className="text-xl text-primary-600" />
                        </div>
                        <div>
                            <h4 className="font-bold text-secondary-900 text-sm mb-1 group-hover:text-blue-600 transition-colors">
                            {service.title}
                            </h4>
                            <p className="text-xs text-gray-500 leading-relaxed">
                            {service.description}
                            </p>
                        </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
