import { FaClock, FaMapMarkerAlt, FaCalendarAlt, FaPhoneAlt, FaHome } from 'react-icons/fa';
import { SCHEDULE, LOCATION, CONTACT_INFO } from '../lib/constants';
import AnimatedSection from './AnimatedSection';
export default function Schedule() {
  return (
    <section id="jadwal" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <AnimatedSection variant="fadeUp">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Jadwal Praktik
            </h2>
            <p className="text-lg text-gray-600">
              Kami siap melayani Anda sesuai dengan jadwal yang telah ditentukan
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-6 rounded-full" />
          </div>
        </AnimatedSection>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Jadwal Praktik Card */}
            <AnimatedSection variant="slideLeft" delay={0.2}>
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center">
                    <FaClock className="text-2xl text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Praktik Harian
                  </h3>
                </div>
                <div className="space-y-4 mb-6">
                  {SCHEDULE.praktik.map((item, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <FaClock className="text-blue-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{item.label}</p>
                        <p className="text-gray-600 text-sm">{item.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="border-t border-gray-200 pt-6">
                  <p className="text-sm text-gray-600 font-semibold mb-3">Home Visit:</p>
                  <div className="space-y-3">
                    {SCHEDULE.homeVisit.map((item, index) => (
                      <div key={index} className="flex items-center gap-3 text-sm">
                        <FaHome className="text-blue-600" />
                        <span className="text-gray-700">
                          <strong>{item.label}:</strong> {item.time}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
            {/* Jadwal Posyandu Card */}
            <AnimatedSection variant="slideRight" delay={0.2}>
              <div className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl p-8 shadow-lg text-white h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                    <FaCalendarAlt className="text-2xl text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">
                    Posyandu Rutin
                  </h3>
                </div>
                <p className="text-white/90 mb-6">
                  {SCHEDULE.posyandu.description}
                </p>
                {/* Date Badges */}
                <div className="mb-6">
                  <p className="text-sm font-semibold mb-3">Setiap Tanggal:</p>
                  <div className="flex flex-wrap gap-3">
                    {SCHEDULE.posyandu.dates.map((date, index) => (
                      <div
                        key={index}
                        className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center font-bold text-xl hover:bg-white/30 transition-all"
                      >
                        {date}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                  <div className="flex items-start gap-3">
                    <FaMapMarkerAlt className="mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold mb-1">Lokasi Posyandu</p>
                      <p className="text-sm text-white/90">
                        {LOCATION.address}, {LOCATION.subdistrict}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
          {/* Emergency Contact Banner */}
          <AnimatedSection variant="scaleUp" delay={0.4}>
            <div className="bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl p-8 shadow-xl text-white text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <FaPhoneAlt className="text-2xl" />
                </div>
                <h4 className="text-2xl font-bold">Layanan Darurat {SCHEDULE.emergency.available}</h4>
              </div>
              <p className="text-white/90 mb-6">
                Untuk keadaan darurat, Anda dapat menghubungi kami kapan saja
              </p>
              <a
                href={`tel:+62${SCHEDULE.emergency.phone.replace(/^0/, '').replace(/\D/g, '')}`}
                className="inline-flex items-center gap-2 bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg"
              >
                <FaPhoneAlt />
                {SCHEDULE.emergency.phone}
              </a>
              <p className="text-sm text-white/80 mt-4">
                Atau hubungi via WhatsApp di nomor yang sama
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
