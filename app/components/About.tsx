import { FaCheckCircle, FaAward, FaUserMd, FaCertificate, FaGraduationCap, FaCalendarCheck } from 'react-icons/fa';
import { SITE_CONFIG, PROFILE } from '../lib/constants';
import AnimatedSection from './AnimatedSection';
export default function About() {
  const credentials = [
    {
      icon: FaCertificate,
      label: 'STR',
      value: PROFILE.str,
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-500',
    },
    {
      icon: FaCertificate,
      label: 'SIPB',
      value: PROFILE.sipb,
      bgColor: 'bg-green-50',
      iconColor: 'text-green-500',
    },
    {
      icon: FaGraduationCap,
      label: 'Pendidikan',
      value: PROFILE.education,
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-500',
    },
    {
      icon: FaCalendarCheck,
      label: 'Pengalaman',
      value: `Sejak ${SITE_CONFIG.foundedYear}`,
      bgColor: 'bg-pink-50',
      iconColor: 'text-pink-500',
    },
  ];
  return (
    <section id="tentang" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <AnimatedSection variant="fadeUp">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Tentang Kami
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Bidan profesional yang berpengalaman dan terpercaya
            </p>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-6 rounded-full" />
          </div>
        </AnimatedSection>
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-16">
          {/* Left Content - Image */}
          <AnimatedSection variant="slideLeft" delay={0.2}>
            <div className="relative">
              <div className="relative bg-gradient-to-br from-blue-50 to-purple-100 rounded-3xl overflow-hidden shadow-xl aspect-square">
                {/* Placeholder Image */}
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <FaUserMd className="text-8xl text-blue-600 mx-auto mb-4" />
                    <p className="text-xl font-semibold text-gray-900">{SITE_CONFIG.fullName}</p>
                    <p className="text-sm text-gray-600 mt-2">Bidan Profesional</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <FaCheckCircle className="text-2xl text-green-500" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Berpengalaman</p>
                    <p className="font-bold text-gray-900">{PROFILE.experienceYears}+ Tahun</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
          {/* Right Content */}
          <AnimatedSection variant="slideRight" delay={0.2}>
            <div className="space-y-6">
              <div className="inline-block">
                <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
                  Profil Bidan
                </span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 leading-tight">
                {SITE_CONFIG.tagline}
              </h3>
              {/* About Paragraphs */}
              <div className="space-y-4">
                {PROFILE.about.map((paragraph, index) => (
                  <p key={index} className="text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
        {/* Credentials Grid - 2x2 */}
        <div className="max-w-6xl mx-auto mb-16">
          <AnimatedSection variant="fadeUp" delay={0.3}>
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Kredensial & Sertifikasi
            </h3>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {credentials.map((credential, index) => {
              const Icon = credential.icon;
              return (
                <AnimatedSection 
                  key={index} 
                  variant="fadeUp" 
                  delay={0.4 + (index * 0.1)}
                >
                  <div className={`${credential.bgColor} p-6 rounded-xl shadow-md hover:shadow-lg transition-all`}>
                    <Icon className={`text-3xl ${credential.iconColor} mb-3`} />
                    <p className="text-sm text-gray-600 mb-1">{credential.label}</p>
                    <p className="font-bold text-gray-900 break-all text-sm">
                      {credential.value}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
        {/* Stats Bar - 3 columns */}
        <div className="max-w-6xl mx-auto">
          <AnimatedSection variant="scaleUp" delay={0.5}>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 shadow-xl">
              <div className="grid md:grid-cols-3 gap-8 text-center text-white">
                {PROFILE.stats.map((stat, index) => (
                  <div key={index} className="space-y-2">
                    <p className="text-4xl md:text-5xl font-bold">{stat.value}</p>
                    <p className="text-lg md:text-xl opacity-90">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
