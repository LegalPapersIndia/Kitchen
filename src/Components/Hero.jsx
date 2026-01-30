import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80", // Steaming biryani in delivery box
    title: "Hot & Fresh Delivery",
    subtitle: "Authentic Indian flavors packed to arrive perfect every time",
  },
  {
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80", // Packed rolls / wraps ready for delivery
    title: "Crave Delivered Fast",
    subtitle: "Rolls, biryanis & more — ready in minutes, at your doorstep",
  },
  {
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80", // Appetizing pizza / fusion delivery shot
    title: "Your Favorites, Anywhere",
    subtitle: "Bold tastes, generous portions — delivered hot & fresh",
  },
  {
    image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&q=80",
    title: "Comfort in Every Box",
    subtitle: "Family meals or midnight cravings — we bring it to you",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Faster change: 5 seconds for better engagement

    return () => clearInterval(interval);
  }, []);

  const fadeVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1.4 } },
    exit: { opacity: 0, transition: { duration: 0.9 } },
  };

  return (
    <section className="relative h-screen min-h-[680px] overflow-hidden">
      {/* Background Slides */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          variants={fadeVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="absolute inset-0"
        >
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${slides[currentSlide].image})`,
            }}
          >
            {/* Stronger overlay for delivery focus + text pop */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/50 via-[#050505]/70 to-[#050505]/90" />
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 sm:px-10 lg:px-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-[0.06em] mb-6 text-[#f5f2ed] drop-shadow-2xl leading-tight">
              {slides[currentSlide].title.split(' ').map((word, i) => (
                <span key={i}>
                  {word}{' '}
                  {' '}
                </span>
              ))}
            </h1>

            <p className="text-xl sm:text-2xl md:text-3xl font-light text-[#d1cdc3] mb-10 md:mb-14 tracking-wide drop-shadow-lg max-w-3xl mx-auto">
              {slides[currentSlide].subtitle}
            </p>

            {/* Stronger Delivery CTAs */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.a
                href="/menu"
                whileHover={{ scale: 1.06, y: -4 }}
                whileTap={{ scale: 0.96 }}
                className="px-12 py-5 bg-gradient-to-r from-[#8c2f0e] to-[#b44a1f] hover:from-[#b44a1f] hover:to-[#8c2f0e] text-[#f5f2ed] font-bold text-xl uppercase tracking-[0.12em] rounded-full shadow-2xl shadow-[#b44a1f]/40 transition-all duration-400 border border-[#b44a1f]/50 hover:border-[#f5f2ed]/30"
              >
                Order Now
              </motion.a>

              <motion.a
                href="/track" // or /contact or aggregator track link
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="px-12 py-5 bg-transparent border-2 border-[#b44a1f]/70 text-[#f5f2ed] hover:bg-[#b44a1f]/20 font-bold text-xl uppercase tracking-[0.12em] rounded-full transition-all duration-400 shadow-lg hover:shadow-[#b44a1f]/40"
              >
                Track Order
              </motion.a>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Slide Dots */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-5">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-4 h-4 rounded-full transition-all duration-600 ${
                currentSlide === index
                  ? 'bg-[#b44a1f] scale-125 shadow-xl shadow-[#b44a1f]/60'
                  : 'bg-[#c9c5bd]/50 hover:bg-[#c9c5bd]/80'
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;