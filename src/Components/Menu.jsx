// src/Components/Menu.jsx
import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { CartContext } from '../context/CartContext';
import { menuSections } from '../data/menuData';

const Menu = () => {
  const { addToCart } = useContext(CartContext);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  return (
    <section id="menu" className="py-24 bg-[#050505] text-[#f5f2ed]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-[0.15em] mb-6">
            Our <span className="text-[#b44a1f]">Menu</span>
          </h1>
          <div className="w-32 h-0.5 mx-auto bg-gradient-to-r from-[#8c2f0e]/60 to-[#b44a1f]/40 rounded-full mb-8" />
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-[#c9c5bd]">
            Freshly prepared, hygienically packed Indian favorites — delivered hot & tasty to your doorstep.
          </p>
        </motion.div>

        {menuSections.map((section, index) => (
          <motion.div
            key={section.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="mb-24"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wider mb-12 text-center text-[#b44a1f]">
              {section.title}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {section.items.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05, y: -8 }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-[#0a0a0c]/90 backdrop-blur-md rounded-2xl overflow-hidden shadow-2xl hover:shadow-[#b44a1f]/40 transition-all duration-400 border border-[#1a1a1c] hover:border-[#b44a1f]/60 group relative"
                >
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-[#b44a1f] transition-colors">{item.name}</h3>
                    <p className="text-[#c9c5bd] text-base mb-5 leading-relaxed">{item.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-[#b44a1f] font-extrabold text-2xl">{item.price}</span>

                      {/* + Add to Cart Button */}
                      <motion.button
                        whileHover={{ scale: 1.15, rotate: 90 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => addToCart(item)}
                        className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-xl shadow-green-700/40 hover:shadow-green-600/60 transition-all duration-300"
                        aria-label={`Add ${item.name} to cart`}
                      >
                        +
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Menu;