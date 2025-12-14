import { CONTACT_INFO } from '@/app/lib/constants';
import { FaWhatsapp, FaEnvelope, FaPhone, FaComments } from 'react-icons/fa';
import AnimatedSection from './AnimatedSection';
export default function Contact() {
  const secondaryContacts = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: CONTACT_INFO.email.address,
      link: CONTACT_INFO.email.link,
      description: 'Kirim pertanyaan via email',
      gradient: 'from-blue-500 to-blue-600',
      bgLight: 'bg-blue-50',
      iconColor: 'text-blue-600',
    },
    {
      icon: FaPhone,
      label: 'Telepon Darurat',
      value: CONTACT_INFO.phone.number,
      link: CONTACT_INFO.phone.link,
      description: 'Hubungi untuk kondisi darurat',
      gradient: 'from-pink-500 to-pink-600',
      bgLight: 'bg-pink-50',
      iconColor: 'text-pink-600',
    },
  ];
  return (
    <section id="kontak" className="relative py-16 md:py-24 bg-gradient-to-b from-white via-blue-50 to-purple-50 overflow-hidden">
      {/* Decorative Elements - DIPERBAIKI: Safe positioning */}
      <div className="absolute top-20 right-2 sm:right-10 w-32 sm:w-40 h-32 sm:h-40 bg-blue-200 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-20 left-2 sm:left-10 w-48 sm:w-60 h-48 sm:h-60 bg-purple-200 rounded-full opacity-30 blur-3xl"></div>
      
      {/* Decorative Dots Pattern - Tetap hidden di mobile */}
      <div className="absolute top-32 right-1/4 hidden lg:grid grid-cols-3 gap-2 opacity-20">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="w-2 h-2 bg-blue-600 rounded-full"></div>
        ))}
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <AnimatedSection variant="fadeUp">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
                💬 Hubungi Kami
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Siap Melayani <span className="text-blue-600">24/7</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Jangan ragu untuk menghubungi kami kapan saja. Kami siap membantu kebutuhan kesehatan Anda.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mt-6 rounded-full" />
          </div>
        </AnimatedSection>
        {/* Primary Contact - WhatsApp (Featured) */}
        <div className="max-w-4xl mx-auto mb-12">
          <AnimatedSection variant="scaleUp" delay={0.2}>
            <div className="relative bg-gradient-to-br from-green-500 via-green-600 to-emerald-600 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden">
              {/* Decorative circles inside card - DIPERBAIKI: Safe negative margins */}
              <div className="absolute top-0 right-0 w-32 sm:w-40 h-32 sm:h-40 bg-white/10 rounded-full mr-0 sm:-mr-20 mt-0 sm:-mt-20"></div>
              <div className="absolute bottom-0 left-0 w-24 sm:w-32 h-24 sm:h-32 bg-white/10 rounded-full ml-0 sm:-ml-16 mb-0 sm:-mb-16"></div>
              
              <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                {/* Left: Icon & Info */}
                <div className="text-white">
                  <div className="inline-flex items-center gap-3 mb-6">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                      <FaWhatsapp className="text-4xl text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-white/80">Metode Tercepat</p>
                      <h3 className="text-2xl font-bold">WhatsApp</h3>
                    </div>
                  </div>
                  
                  <p className="text-white/90 text-lg mb-4">
                    Chat langsung dengan kami untuk konsultasi cepat dan reservasi
                  </p>
                  
                  <div className="flex items-center gap-3 p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                    <FaComments className="text-2xl text-white/80 flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="text-xs text-white/70">Nomor WhatsApp</p>
                      <p className="font-bold text-xl break-all">{CONTACT_INFO.whatsapp.number}</p>
                    </div>
                  </div>
                </div>
                {/* Right: CTA Button */}
                <div className="text-center md:text-right">
                  <a
                    href={CONTACT_INFO.whatsapp.linkWithText}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 bg-white text-green-600 px-8 py-5 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
                  >
                    <FaWhatsapp className="text-3xl group-hover:rotate-12 transition-transform" />
                    <div className="text-left">
                      <p className="text-xs text-gray-500">Klik untuk</p>
                      <p className="text-lg">Chat Sekarang</p>
                    </div>
                  </a>
                  
                  <p className="text-white/70 text-sm mt-4">
                    ✓ Respon cepat dalam menit<br/>
                    ✓ Tersedia 24 jam
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
        {/* Secondary Contacts */}
        <div className="max-w-6xl mx-auto">
          <AnimatedSection variant="fadeUp" delay={0.3}>
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Atau Hubungi Via
            </h3>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 gap-8">
            {secondaryContacts.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <AnimatedSection 
                  key={index} 
                  variant="fadeUp" 
                  delay={0.4 + (index * 0.15)}
                >
                  <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    {/* Icon with gradient */}
                    <div className="flex items-start gap-6">
                      <div className={`w-16 h-16 bg-gradient-to-br ${contact.gradient} rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg`}>
                        <Icon className="text-3xl text-white" />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xl font-bold text-gray-900 mb-2">
                          {contact.label}
                        </h4>
                        <p className="text-sm text-gray-600 mb-4">
                          {contact.description}
                        </p>
                        <p className={`${contact.iconColor} font-semibold mb-4 break-all`}>
                          {contact.value}
                        </p>
                        <a
                          href={contact.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center gap-2 bg-gradient-to-r ${contact.gradient} text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all group-hover:gap-3`}
                        >
                          <span>Hubungi</span>
                          <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
        {/* Bottom Info Banner */}
        <div className="max-w-4xl mx-auto mt-12">
          <AnimatedSection variant="fadeUp" delay={0.7}>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 md:p-8 text-center text-white shadow-xl">
              <p className="text-lg md:text-xl font-semibold mb-2">
                📍 Kunjungi Praktik Kami
              </p>
              <p className="text-white/90 mb-4">
                Desa Sari RT 08 RW 03, Kecamatan Gajah, Kabupaten Demak
              </p>
              <a
                href="#lokasi"
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-6 py-3 rounded-full font-semibold transition-all"
              >
                Lihat Peta Lokasi
                <span>→</span>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
