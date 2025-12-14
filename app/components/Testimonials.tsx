'use client';
import { TESTIMONIALS } from '@/app/lib/constants';
import { FaStar, FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import AnimatedSection from './AnimatedSection';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  
  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);
  
  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => {
      if (newDirection === 1) {
        return prevIndex === TESTIMONIALS.length - 1 ? 0 : prevIndex + 1;
      } else {
        return prevIndex === 0 ? TESTIMONIALS.length - 1 : prevIndex - 1;
      }
    });
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };
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

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={{
                  enter: (direction: number) => ({
                    x: direction > 0 ? 1000 : -1000,
                    opacity: 0,
                  }),
                  center: {
                    zIndex: 1,
                    x: 0,
                    opacity: 1,
                  },
                  exit: (direction: number) => ({
                    zIndex: 0,
                    x: direction < 0 ? 1000 : -1000,
                    opacity: 0,
                  }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1);
                  }
                }}
                className="w-full"
              >
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
                  {/* Quote Icon */}
                  <motion.div 
                    className="mb-6"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring' }}
                  >
                    <FaQuoteLeft className="text-5xl text-blue-200" />
                  </motion.div>
                  
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(TESTIMONIALS[currentIndex].rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + i * 0.1 }}
                      >
                        <FaStar className="text-yellow-400 text-xl" />
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Text */}
                  <motion.p 
                    className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8 italic"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    &ldquo;{TESTIMONIALS[currentIndex].text}&rdquo;
                  </motion.p>
                  
                  {/* Author */}
                  <motion.div 
                    className="flex items-center gap-4 pt-6 border-t border-gray-200"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                      {TESTIMONIALS[currentIndex].initial}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-lg">{TESTIMONIALS[currentIndex].name}</p>
                      <p className="text-sm text-gray-600">{TESTIMONIALS[currentIndex].role}</p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Navigation Buttons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              onClick={() => paginate(-1)}
              className="w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaChevronLeft />
            </motion.button>
            
            {/* Dots Indicator */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className="group"
                >
                  <div 
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'w-8 bg-blue-600' 
                        : 'w-2 bg-gray-300 group-hover:bg-blue-400'
                    }`}
                  />
                </button>
              ))}
            </div>
            
            <motion.button
              onClick={() => paginate(1)}
              className="w-12 h-12 rounded-full bg-white shadow-lg hover:shadow-xl flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaChevronRight />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
