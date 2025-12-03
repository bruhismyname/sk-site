import { LOCATION } from '@/app/lib/constants';
import { FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';
import AnimatedSection from './AnimatedSection';
export default function Location() {
  return (
    <section id="lokasi" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <AnimatedSection variant="fadeUp">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Lokasi Praktik
            </h2>
            <p className="text-lg text-gray-600">
              Kunjungi kami di lokasi praktik
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-6 rounded-full" />
          </div>
        </AnimatedSection>
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Address Card */}
          <AnimatedSection variant="slideLeft" delay={0.2}>
            <div className="bg-gradient-to-br from-blue-50 to-pink-50 p-8 rounded-xl shadow-lg h-full">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                  <FaMapMarkerAlt className="text-3xl text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Alamat Lengkap
              </h3>
              <div className="space-y-3 text-center mb-8">
                <p className="text-lg font-semibold text-gray-800">{LOCATION.address}</p>
                <p className="text-gray-700">{LOCATION.subdistrict}</p>
                <p className="text-gray-700">{LOCATION.district}</p>
                <p className="text-gray-700">{LOCATION.province} {LOCATION.postalCode}</p>
              </div>
              <a
                href={LOCATION.mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105 w-full"
              >
                <span>Buka di Google Maps</span>
                <FaExternalLinkAlt />
              </a>
            </div>
          </AnimatedSection>
          {/* Map Embed */}
          <AnimatedSection variant="fadeIn" delay={0.4}>
            <div className="rounded-xl overflow-hidden shadow-lg h-[400px] lg:h-full">
              <iframe
                src={LOCATION.mapsEmbed}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Praktik Bidan Shofiastuti K"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
