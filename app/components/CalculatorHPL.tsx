'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaBaby, 
  FaCalendarAlt, 
  FaCalculator, 
  FaRedo, 
  FaHeart, 
  FaWhatsapp, 
  FaInfoCircle
} from 'react-icons/fa';
import AnimatedSection from './AnimatedSection';
// --- Logic Helpers ---
interface PregnancyResult {
  hpl: string;
  weeks: number;
  days: number;
  trimester: number;
  progress: number; // 0-100
  babySize: {
    emoji: string;
    text: string;
    desc: string;
  };
}
const getBabySize = (weeks: number) => {
  if (weeks < 4) return { emoji: '✨', text: 'Benih Kecil', desc: 'Pembuahan baru saja terjadi' };
  if (weeks < 8) return { emoji: '🫐', text: 'Seukuran Blueberry', desc: 'Jantung mulai berdetak' };
  if (weeks < 12) return { emoji: '🍋', text: 'Seukuran Lemon', desc: 'Jari-jari mulai terbentuk' };
  if (weeks < 16) return { emoji: '🥑', text: 'Seukuran Alpukat', desc: 'Bisa mulai merasakan gerakan halus' };
  if (weeks < 20) return { emoji: '🍌', text: 'Seukuran Pisang', desc: 'Indra pendengaran mulai aktif' };
  if (weeks < 24) return { emoji: '🌽', text: 'Seukuran Jagung', desc: 'Wajah bayi mulai terbentuk jelas' };
  if (weeks < 28) return { emoji: '🍆', text: 'Seukuran Terong', desc: 'Mata bayi mulai bisa membuka' };
  if (weeks < 32) return { emoji: '🥥', text: 'Seukuran Kelapa', desc: 'Berat badan bertambah pesat' };
  if (weeks < 36) return { emoji: '🍈', text: 'Seukuran Melon', desc: 'Posisi kepala mulai turun' };
  return { emoji: '🍉', text: 'Seukuran Semangka', desc: 'Siap untuk melihat dunia!' };
};
export default function CalculatorHPL() {
  const [hpht, setHpht] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<PregnancyResult | null>(null);
  const calculateHPL = (e: React.FormEvent) => {
    e.preventDefault();
    if (!hpht) return;
    setIsLoading(true);
    setResult(null);
    // Simulasi loading
    setTimeout(() => {
      const lastPeriod = new Date(hpht);
      const today = new Date();
      
      // ✅ PERBAIKAN LOGIC: Metode +280 hari (40 minggu)
      // Ini lebih akurat daripada rumus Naegele manual
      const hplDate = new Date(lastPeriod);
      hplDate.setDate(lastPeriod.getDate() + 280); // 40 minggu × 7 hari
      // Hitung Usia Kehamilan
      const diffTime = today.getTime() - lastPeriod.getTime();
      const diffDaysTotal = Math.floor(diffTime / (1000 * 60 * 60 * 24));
      
      // Validasi: HPHT tidak boleh di masa depan
      if (diffDaysTotal < 0) {
        alert("⚠️ Tanggal HPHT tidak boleh lebih dari hari ini");
        setIsLoading(false);
        return;
      }
      // Validasi: Kehamilan tidak mungkin lebih dari 45 minggu
      if (diffDaysTotal > 315) { // 45 minggu = 315 hari
        alert("⚠️ Tanggal HPHT terlalu lama. Silakan periksa kembali atau konsultasi langsung dengan bidan.");
        setIsLoading(false);
        return;
      }
      const weeks = Math.floor(diffDaysTotal / 7);
      const days = diffDaysTotal % 7;
      // Trimester
      let trimester = 1;
      if (weeks >= 14) trimester = 2;
      if (weeks >= 28) trimester = 3;
      // Progress (cap di 100%)
      const progress = Math.min((weeks / 40) * 100, 100);
      setResult({
        hpl: hplDate.toLocaleDateString('id-ID', { 
          weekday: 'long', 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        }),
        weeks,
        days,
        trimester,
        progress,
        babySize: getBabySize(weeks)
      });
      setIsLoading(false);
    }, 1500);
  };
  const handleConsultation = () => {
    if (!result) return;
    const text = `Halo Bidan Shofi, menurut kalkulator website, usia kandungan saya ${result.weeks} minggu (${result.babySize.text}). HPL tanggal ${result.hpl}. Saya ingin konsultasi lebih lanjut.`;
    window.open(`https://wa.me/6281325631160?text=${encodeURIComponent(text)}`, '_blank');
  };
  return (
    <section className="py-16 bg-gradient-to-b from-white to-pink-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <AnimatedSection variant="scaleUp">
          <div className="max-w-4xl mx-auto">
            {/* Card Container */}
            <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-pink-100 relative">
              
              {/* Decorative Header Background */}
              <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-10" />
              
              <div className="relative z-10 p-6 md:p-10">
                
                {/* Header Title */}
                <div className="text-center mb-10">
                  <span className="inline-block py-1 px-3 rounded-full bg-pink-100 text-pink-600 text-sm font-bold tracking-wide mb-3">
                    FITUR INTERAKTIF
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                    Kalkulator Kehamilan
                  </h2>
                  <p className="text-gray-500">
                    Pantau perkembangan si kecil dan estimasi hari bahagia Bunda
                  </p>
                </div>
                {/* --- STATE 1: INPUT FORM --- */}
                <AnimatePresence mode="wait">
                  {!result && !isLoading && (
                    <motion.form 
                      key="input"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      onSubmit={calculateHPL}
                      className="max-w-lg mx-auto bg-white p-8 rounded-3xl shadow-lg border border-gray-100"
                    >
                      <div className="mb-6">
                        <label className="block text-gray-700 font-bold mb-3 text-lg">
                          Hari Pertama Haid Terakhir (HPHT)
                        </label>
                        <div className="relative group">
                          <FaCalendarAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-pink-400 text-xl group-focus-within:text-pink-600 transition-colors" />
                          <input
                            type="date"
                            value={hpht}
                            onChange={(e) => setHpht(e.target.value)}
                            max={new Date().toISOString().split('T')[0]} // Tidak boleh pilih tanggal masa depan
                            className="w-full pl-12 pr-4 py-4 bg-pink-50/50 border-2 border-pink-100 rounded-2xl focus:border-pink-500 focus:ring-4 focus:ring-pink-200 transition-all outline-none text-gray-700 font-medium text-lg"
                            required
                          />
                        </div>
                        <p className="text-xs text-gray-400 mt-2 ml-1">
                          *Masukkan tanggal hari pertama dari haid terakhir Bunda
                        </p>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white py-4 rounded-2xl font-bold text-lg shadow-xl shadow-pink-200 hover:shadow-2xl transition-all flex items-center justify-center gap-2 group"
                      >
                        <FaCalculator className="group-hover:rotate-12 transition-transform" />
                        Cek Perkembangan Janin
                      </motion.button>
                    </motion.form>
                  )}
                  {/* --- STATE 2: LOADING --- */}
                  {isLoading && (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="flex flex-col items-center justify-center py-12 text-center"
                    >
                      <motion.div
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 1, 0.5] 
                        }}
                        transition={{ 
                          duration: 1, 
                          repeat: Infinity,
                          ease: "easeInOut" 
                        }}
                        className="w-24 h-24 bg-pink-100 rounded-full flex items-center justify-center mb-6"
                      >
                        <FaHeart className="text-5xl text-pink-500" />
                      </motion.div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">Sedang Menganalisis...</h3>
                      <p className="text-gray-500">Menghitung usia kehamilan Bunda</p>
                    </motion.div>
                  )}
                  {/* --- STATE 3: RESULT DASHBOARD --- */}
                  {result && (
                    <motion.div
                      key="result"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-6"
                    >
                      {/* Top Row: Baby Visual & Progress */}
                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Baby Size Card */}
                        <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-3xl p-6 text-white relative overflow-hidden flex flex-col items-center text-center shadow-lg">
                          <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-white/10 rounded-full mr-0 sm:-mr-10 mt-0 sm:-mt-10 blur-2xl" />
                          
                          <p className="text-white/80 font-medium mb-4 uppercase tracking-widest text-xs">Ukuran Janin Saat Ini</p>
                          <motion.div 
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                            className="text-8xl mb-4 filter drop-shadow-xl"
                          >
                            {result.babySize.emoji}
                          </motion.div>
                          <h3 className="text-2xl font-bold mb-1">{result.babySize.text}</h3>
                          <p className="text-white/90 text-sm">{result.babySize.desc}</p>
                        </div>
                        {/* HPL & Detail Card */}
                        <div className="bg-white border-2 border-gray-100 rounded-3xl p-6 shadow-lg flex flex-col justify-center">
                          <div className="mb-6">
                            <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">Hari Perkiraan Lahir</p>
                            <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">
                              {result.hpl}
                            </p>
                          </div>
                          
                          <div className="space-y-4">
                            <div>
                              <div className="flex justify-between text-sm mb-2">
                                <span className="text-gray-600 font-medium">Usia Kehamilan</span>
                                <span className="font-bold text-gray-800">{result.weeks} Minggu {result.days} Hari</span>
                              </div>
                              {/* Progress Bar */}
                              <div className="h-4 bg-gray-100 rounded-full overflow-hidden relative">
                                <motion.div 
                                  initial={{ width: 0 }}
                                  animate={{ width: `${result.progress}%` }}
                                  transition={{ duration: 1.5, ease: "easeOut" }}
                                  className="h-full bg-gradient-to-r from-pink-400 to-purple-500 rounded-full relative"
                                >
                                  <div className="absolute top-0 left-0 w-full h-full bg-white/30 animate-shimmer" />
                                </motion.div>
                              </div>
                              <div className="flex justify-between mt-1 text-xs text-gray-400">
                                <span>0 Minggu</span>
                                <span>40 Minggu</span>
                              </div>
                            </div>
                            
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-lg text-xs font-bold">
                              <FaInfoCircle />
                              Trimester {result.trimester}
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={handleConsultation}
                          className="flex-1 bg-green-500 hover:bg-green-600 text-white py-4 rounded-2xl font-bold shadow-lg shadow-green-200 transition-all flex items-center justify-center gap-2"
                        >
                          <FaWhatsapp className="text-xl" />
                          Konsultasikan Hasil Ini
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setResult(null)}
                          className="px-8 bg-gray-100 hover:bg-gray-200 text-gray-600 py-4 rounded-2xl font-bold transition-all flex items-center justify-center gap-2"
                        >
                          <FaRedo />
                          Hitung Ulang
                        </motion.button>
                      </div>
                      <p className="text-center text-xs text-gray-400 mt-4 max-w-2xl mx-auto">
                        *Perhitungan ini menggunakan estimasi 280 hari (40 minggu) sejak HPHT. Perkembangan janin setiap individu bisa berbeda. Silakan konsultasi langsung dengan Bidan Shofi untuk pemeriksaan medis yang akurat.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
