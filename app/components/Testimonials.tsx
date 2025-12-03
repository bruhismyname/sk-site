import { TESTIMONIALS } from '@/app/lib/constants';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import AnimatedSection from './AnimatedSection';

const testimonials = [
  {
    name: "Ibu Siti",
    role: "Pasien Ibu Hamil",
    text: "Pelayanan yang sangat ramah dan profesional. Bidan Shofi selalu sabar menjelaskan kondisi kehamilan saya. Sangat recommended!",
    rating: 5,
  },
  {
    name: "Ibu Ani",
    role: "Pasien KB",
    text: "Tempatnya nyaman dan bersih. Pelayanan cepat dan tidak perlu antri lama. Bidan Shofi sangat memperhatikan kenyamanan pasien.",
    rating: 5,
  },
  {
    name: "Ibu Rina",
    role: "Pasien Imunisasi",
    text: "Anak saya selalu tenang saat imunisasi di sini. Bidan Shofi sangat lembut dan perhatian kepada anak-anak.",
    rating: 5,
  },
  {
    name: "Ibu Dewi",
    role: "Pasien Posyandu",
    text: "Jadwal posyandu yang teratur dan pelayanan yang memuaskan. Sangat membantu untuk memantau tumbuh kembang anak.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimoni" className="py-16 md:py-24 bg-gradient-to-b from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <AnimatedSection variant="fadeUp">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Testimoni Pasien
            </h2>
            <p className="text-lg text-gray-600">
              Apa kata mereka yang telah merasakan pelayanan kami
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-6 rounded-full" />
          </div>
        </AnimatedSection>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {TESTIMONIALS.map((testimonial, index) => (
            <AnimatedSection 
              key={testimonial.id} 
              variant="scaleUp" 
              delay={0.2 + (index * 0.1)}
            >
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all h-full flex flex-col">
                {/* Quote Icon */}
                <div className="mb-4">
                  <FaQuoteLeft className="text-3xl text-blue-200" />
                </div>
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-sm" />
                  ))}
                </div>
                {/* Text */}
                <p className="text-gray-700 leading-relaxed mb-6 flex-grow italic">
                  "{testimonial.text}"
                </p>
                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
                    {testimonial.initial}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                    <p className="text-xs text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
