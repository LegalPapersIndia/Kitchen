// src/Pages/MenuPage.jsx
import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { CartContext } from '../context/CartContext';
import { menuSections } from "../data/menuData";

const MenuPage = () => {
  const { addToCart } = useContext(CartContext);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  return (
    <div className="bg-[#050505] text-[#f5f2ed] min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16 md:mb-24"
        >
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-[0.15em] mb-6">
            Our <span className="text-[#b44a1f]">Signature Menu</span>
          </h1>
          <div className="w-32 h-1 mx-auto bg-gradient-to-r from-[#8c2f0e]/70 to-[#b44a1f]/50 rounded-full mb-6" />
          <p className="text-lg md:text-xl text-[#c9c5bd] max-w-3xl mx-auto">
            Authentic flavors of India — from crisp South Indian breakfasts to rich North Indian curries and royal desserts.
          </p>
        </motion.div>

        {/* Menu Sections */}
        {menuSections.map((section, sectionIndex) => (
          <motion.section
            key={section.title}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="mb-20 md:mb-32"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wider text-center mb-12 text-[#b44a1f]">
              {section.title}
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {section.items.map((item, i) => (
                <motion.div
                  key={item.name}
                  variants={fadeInUp}
                  className="group relative bg-[#0a0a0c]/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-[#1a1a1c] hover:border-[#b44a1f]/50 transition-all duration-500 shadow-xl hover:shadow-[#b44a1f]/20"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>

                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl md:text-2xl font-bold group-hover:text-[#b44a1f] transition-colors">
                        {item.name}
                      </h3>
                      <span className="text-[#b44a1f] font-bold text-xl whitespace-nowrap ml-3">
                        {item.price}
                      </span>
                    </div>

                    <p className="text-[#c9c5bd] text-base mb-4 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="text-sm text-[#a1a1aa] leading-relaxed mb-6">
                      <span className="font-semibold text-[#e8e3db]">Key Ingredients:</span>{' '}
                      {item.ingredients}
                    </div>

                    {/* + Add to Cart Button */}
                    <motion.button
                      whileHover={{ scale: 1.12, rotate: 90 }}
                      whileTap={{ scale: 0.92 }}
                      onClick={() => addToCart(item)}
                      className="absolute bottom-5 right-5 w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-2xl shadow-green-700/40 hover:shadow-green-600/60 transition-all duration-300 z-10"
                      aria-label={`Add ${item.name} to cart`}
                    >
                      +
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        ))}

        {/* Allergen & Note Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 p-8 bg-[#0a0a0c]/70 backdrop-blur-md rounded-2xl border border-[#1a1a1c] text-center text-[#c9c5bd] text-sm md:text-base"
        >
          <h3 className="text-2xl font-bold text-[#b44a1f] mb-4">Important Notes</h3>
          <p className="mb-4">
            All dishes may contain traces of common allergens including dairy (ghee, cream, yogurt, paneer), nuts (cashews, almonds), gluten (in pooris or certain batters), and spices. Please mention any allergies in your WhatsApp message.
          </p>
          <p className="text-[#a1a1aa]">
            Prices inclusive of taxes. Menu & prices subject to change. Order via WhatsApp for fastest response.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default MenuPage;