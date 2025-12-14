import { 
  FaUserNurse, 
  FaSyringe, 
  FaPills, 
  FaHandHoldingMedical, 
  FaComments, 
  FaHeart, 
  FaStethoscope, 
  FaHome, 
  FaBook, 
  FaBaby 
} from 'react-icons/fa';

// Site Configuration
export const SITE_CONFIG = {
  name: 'Bidan Shofiastuti K',
  fullName: 'Bidan Shofiastuti K, A.Md.Keb',
  tagline: 'Memberikan Pelayanan Kebidanan yang Sayang Ibu dan Anak Secara Profesional',
  description: 'Bidan Shofiastuti K melayani pemeriksaan kehamilan, KB, imunisasi, home visit di Desa Sari, Gajah, Demak. Berpengalaman dan kompeten di bidangnya.',
  domain: 'bidanshofi.my.id',
  foundedYear: 2005,
  currentYear: new Date().getFullYear(),
};
// Profile & Credentials
export const PROFILE = {
  str: 'BC00001342796174',
  sipb: 'NR33212511007366',
  education: 'D3 Kebidanan',
  experienceYears: SITE_CONFIG.currentYear - SITE_CONFIG.foundedYear,
  about: [
    'Bidan Shofiastuti K adalah bidan profesional yang telah melayani masyarakat Desa Sari, Kecamatan Gajah, Kabupaten Demak sejak tahun 2005. Dengan pengalaman lebih dari 20 tahun, kami berkomitmen memberikan pelayanan kebidanan terbaik untuk ibu dan anak.',
    'Dilengkapi dengan STR dan SIPB yang aktif, kami menyediakan berbagai layanan kebidanan mulai dari pemeriksaan kehamilan, KB, imunisasi, hingga layanan home visit untuk kemudahan Anda.'
  ],
  stats: [
    { label: 'Tahun Pengalaman', value: '20+' },
    { label: 'Ibu Terbantu', value: '1000+' },
    { label: 'Pelayanan per Minggu', value: '6 Hari' },
  ]
};
// Services
export const SERVICES = [
  {
    id: 1,
    title: 'Pemeriksaan Kehamilan',
    description: 'Pemeriksaan rutin untuk kesehatan ibu dan janin',
    icon: FaUserNurse,
  },
  {
    id: 2,
    title: 'Imunisasi Bayi & Balita',
    description: 'Imunisasi lengkap sesuai jadwal dari Kemenkes',
    icon: FaSyringe,
  },
  {
    id: 3,
    title: 'KB Suntik',
    description: 'Kontrasepsi suntik 1 bulan dan 3 bulan',
    icon: FaSyringe,
  },
  {
    id: 4,
    title: 'KB Implant',
    description: 'Pemasangan dan pencabutan KB implant',
    icon: FaHandHoldingMedical,
  },
  {
    id: 5,
    title: 'KB Pil',
    description: 'Konsultasi dan pemberian KB pil',
    icon: FaPills,
  },
  {
    id: 6,
    title: 'Konsultasi Ibu & Anak',
    description: 'Konsultasi kesehatan ibu dan tumbuh kembang anak',
    icon: FaComments,
  },
  {
    id: 7,
    title: 'Perawatan Masa Nifas',
    description: 'Perawatan ibu setelah melahirkan',
    icon: FaHeart,
  },
  {
    id: 8,
    title: 'Pemeriksaan Dasar',
    description: 'Cek tekanan darah, berat badan, dan pemeriksaan umum',
    icon: FaStethoscope,
  },
  {
    id: 9,
    title: 'Home Visit',
    description: 'Kunjungan ke rumah untuk pemeriksaan',
    icon: FaHome,
  },
  {
    id: 10,
    title: 'Edukasi Kehamilan',
    description: 'Kelas dan edukasi tentang kehamilan dan persalinan',
    icon: FaBook,
  },
  {
    id: 11,
    title: 'Pijat Bayi / Baby Spa',
    description: 'Pijat bayi untuk stimulasi tumbuh kembang',
    icon: FaBaby,
  },
];
// Schedule
export const SCHEDULE = {
  praktik: [
    { time: '05.30 - 06.00 WIB', label: 'Pagi' },
    { time: '16.00 - 20.00 WIB', label: 'Sore' },
  ],
  homeVisit: [
    { time: '08.00 WIB', label: 'Home Visit Pagi' },
    { time: '15.30 WIB', label: 'Home Visit Sore' },
  ],
  posyandu: {
    dates: [14, 15, 16, 17, 18],
    description: 'Posyandu rutin setiap bulan',
  },
  emergency: {
    phone: '0813-2563-1160',
    available: '24 Jam',
  }
};
// Location
export const LOCATION = {
  address: 'Desa Sari RT 08 RW 03',
  subdistrict: 'Kecamatan Gajah',
  district: 'Kabupaten Demak',
  province: 'Jawa Tengah',
  postalCode: '59571',
  coordinates: {
    lat: -6.878650,
    lng: 110.751087,
  },
  mapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.123!2d110.751087!3d-6.878650!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTInNDMuMSJTIDExMMKwNDUnMDMuOSJF!5e0!3m2!1sen!2sid!4v1234567890',
  mapsLink: 'https://www.google.com/maps?q=-6.878650,110.751087',
};
// Contact Info
export const CONTACT_INFO = {
  whatsapp: {
    number: '0813-2563-1160',
    link: 'https://wa.me/6281325631160',
    linkWithText: 'https://wa.me/6281325631160?text=Halo%20Bidan%20Shofi,%20saya%20ingin%20konsultasi',
  },
  email: {
    address: 'shofiastutik11@gmail.com',
    link: 'mailto:shofiastutik11@gmail.com',
  },
  phone: {
    number: '0813-2563-1160',
    link: 'tel:+6281325631160',
  },
};
// Testimonials
export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Ibu Siti',
    initial: 'S',
    role: 'Pasien Ibu Hamil',
    text: 'Pelayanan yang sangat ramah dan profesional. Bidan Shofi selalu sabar menjelaskan kondisi kehamilan saya. Sangat recommended!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Ibu Ani',
    initial: 'A',
    role: 'Pasien KB',
    text: 'Tempatnya nyaman dan bersih. Pelayanan cepat dan tidak perlu antri lama. Bidan Shofi sangat memperhatikan kenyamanan pasien.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Ibu Rina',
    initial: 'R',
    role: 'Pasien Imunisasi',
    text: 'Anak saya selalu tenang saat imunisasi di sini. Bidan Shofi sangat lembut dan perhatian kepada anak-anak.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Ibu Dewi',
    initial: 'D',
    role: 'Pasien Posyandu',
    text: 'Jadwal posyandu yang teratur dan pelayanan yang memuaskan. Sangat membantu untuk memantau tumbuh kembang anak.',
    rating: 5,
  },
];
// Social Media
export const SOCIAL_MEDIA = {
  whatsapp: CONTACT_INFO.whatsapp.link,
};
// SEO Keywords
export const SEO_KEYWORDS = [
  'bidan desa sari',
  'bidan gajah demak',
  'shofiastuti k',
  'bidan demak',
  'pemeriksaan kehamilan demak',
  'kb demak',
  'imunisasi bayi demak',
  'bidan home visit demak',
  'posyandu desa sari',
  'bidan profesional demak',
];
