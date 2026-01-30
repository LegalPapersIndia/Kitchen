// src/Components/Navbar.jsx
import React, { useContext, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Navbar = () => {
  const { totalItems } = useContext(CartContext);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
        scrolled
          ? 'py-4 bg-[#0f0f11]/95 backdrop-blur-xl border-b border-gray-800/60 shadow-xl'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            whileHover={{ scale: 1.04 }}
            className="relative group"
          >
            <Link to="/">
              <span className="text-3xl md:text-4xl font-black tracking-tight text-white">
                LPI
                <span className="text-[#c2410c] group-hover:text-[#ea580c] transition-colors">
                  KITCHEN
                </span>
              </span>
              <div className="absolute -bottom-1 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-[#c2410c] to-[#fb923c] transition-all duration-500 rounded" />
            </Link>
          </motion.div>

          {/* Desktop Menu + CTAs */}
          <div className="hidden md:flex items-center gap-10 lg:gap-14">
            {navLinks.map((link) => (
              <motion.div
                key={link.name}
                whileHover={{ y: -2 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <Link
                  to={link.path}
                  className={`relative text-sm font-semibold uppercase tracking-wide transition-colors duration-400 ${
                    location.pathname === link.path
                      ? 'text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-0.5 bg-[#c2410c] transition-all duration-500 rounded-full ${
                      location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </Link>
              </motion.div>
            ))}

            {/* Order Now with cart badge */}
            <motion.button
              onClick={() => window.location.href = '/cart'}
              whileHover={{ scale: 1.06, boxShadow: '0 15px 40px -10px rgba(194,65,12,0.4)' }}
              whileTap={{ scale: 0.97 }}
              className="relative px-8 py-3 rounded-full bg-gradient-to-r from-[#c2410c] to-[#ea580c] text-white font-bold text-sm uppercase tracking-wider shadow-lg shadow-[#c2410c]/30 hover:shadow-[#ea580c]/50 transition-all duration-400 overflow-hidden group flex items-center gap-3"
            >
              <span className="relative z-10">Order Now</span>
              {totalItems > 0 && (
                <span className="bg-white/30 text-white text-xs font-bold px-2.5 py-1 rounded-full">
                  {totalItems}
                </span>
              )}
              <motion.span
                className="absolute inset-0 bg-white/20"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.8 }}
              />
            </motion.button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 text-[#c2410c] focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className="w-8 h-8 flex items-center justify-center">
                <motion.div
                  animate={isOpen ? 'open' : 'closed'}
                  variants={{ open: { rotate: 90 }, closed: { rotate: 0 } }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="space-y-1.5">
                    <motion.span
                      className="block w-7 h-0.5 bg-current rounded"
                      variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: 45, y: 6 } }}
                    />
                    <motion.span
                      className="block w-7 h-0.5 bg-current rounded"
                      variants={{ closed: { opacity: 1 }, open: { opacity: 0 } }}
                    />
                    <motion.span
                      className="block w-7 h-0.5 bg-current rounded"
                      variants={{ closed: { rotate: 0, y: 0 }, open: { rotate: -45, y: -6 } }}
                    />
                  </div>
                </motion.div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 180 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-lg z-[9999] flex flex-col items-center justify-center gap-10 md:hidden"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-8 right-8 text-gray-400 hover:text-white text-5xl"
            >
              ×
            </button>

            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.2 }}
              >
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-4xl font-bold uppercase tracking-wider ${
                    location.pathname === link.path ? 'text-[#ea580c]' : 'text-white hover:text-[#ea580c]'
                  } transition-colors`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}

            <div className="flex flex-col gap-6 mt-10 w-4/5 max-w-sm">
              <motion.button
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  window.location.href = '/cart';
                  setIsOpen(false);
                }}
                className="py-5 bg-gradient-to-r from-[#c2410c] to-[#ea580c] text-white font-bold text-xl uppercase tracking-wider rounded-xl shadow-2xl flex items-center justify-center gap-3"
              >
                Order Now
                {totalItems > 0 && (
                  <span className="bg-white/30 px-3 py-1 rounded-full text-sm">
                    {totalItems}
                  </span>
                )}
              </motion.button>

              <motion.button
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  window.open('tel:+917505266931', '_self');
                  setIsOpen(false);
                }}
                className="py-5 bg-transparent border-2 border-gray-600 text-white font-bold text-xl uppercase tracking-wider rounded-xl hover:bg-gray-800/40"
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;