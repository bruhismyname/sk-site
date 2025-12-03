import { FaBaby, FaHeartbeat, FaSyringe, FaUserMd, FaStethoscope, FaHandHoldingHeart, FaProcedures, FaHospital, FaNotesMedical, FaChild, FaFirstAid } from 'react-icons/fa';
import { SERVICES } from '../lib/constants';
import AnimatedSection from './AnimatedSection';
const serviceIcons = [
  FaBaby, FaHeartbeat, FaSyringe, FaUserMd, FaStethoscope, 
  FaHandHoldingHeart, FaProcedures, FaHospital, FaNotesMedical, 
  FaChild, FaFirstAid
];
export default function Services() {
  const featuredServices = SERVICES.slice(0, 3);
  
  return (
    <section id="layanan" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <AnimatedSection variant="fadeUp">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-secondary-900 mb-4">
              Daftar Layanan
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kami menyediakan berbagai layanan kesehatan ibu dan anak dengan fungsi mengutamakan pelayanan pencegahan daripada pengobatan
            </p>
          </div>
        </AnimatedSection>
        {/* Featured Service Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {featuredServices.map((service, index) => {
            const Icon = serviceIcons[index];
            return (
              <AnimatedSection 
                key={index} 
                variant="fadeUp" 
                delay={0.2 + (index * 0.15)}
              >
                <div className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="text-3xl text-primary-500" />
                  </div>
                  {/* Title */}
                  <h3 className="text-xl font-bold text-secondary-900 mb-3">
                    {service.title}
                  </h3>
                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  {/* Button */}
                  <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary-100 text-primary-600 rounded-full font-semibold hover:bg-primary-500 hover:text-white transition-all group-hover:px-8">
                    Reservasi
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
        {/* All Services List */}
        <AnimatedSection variant="fadeIn" delay={0.6}>
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {SERVICES.slice(3).map((service, index) => {
                const Icon = serviceIcons[index + 3];
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all"
                  >
                    <Icon className="text-2xl text-primary-500 mb-3" />
                    <h4 className="font-semibold text-secondary-900 text-sm mb-2">
                      {service.title}
                    </h4>
                    <p className="text-xs text-gray-600 line-clamp-2">
                      {service.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </AnimatedSection>
        {/* CTA Button */}
        <AnimatedSection variant="fadeUp" delay={0.7}>
          <div className="text-center mt-12">
            <a
              href="#kontak"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-primary-500 text-primary-600 rounded-full font-semibold hover:bg-primary-50 transition-all shadow-md"
            >
              Lihat Semua Layanan
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
