import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const teamMembers = [
  {
    name: 'Chef Aarav Singh',
    role: 'Founder & Head Chef',
    desc: '18+ years perfecting Awadhi & North Indian flavors. Crafts every recipe to travel flawlessly — arrives hot, aromatic, and full of soul.',
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=800',
  },
  {
    name: 'Priya Mehra',
    role: 'Culinary & Quality Lead',
    desc: 'Master of spice balance and consistency. Ensures every sealed box delivers the exact same bold, authentic taste across Delhi and beyond.',
    image: 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&q=80&w=800',
  },
  {
    name: 'Rahul Verma',
    role: 'Operations & Delivery Lead',
    desc: 'Obsessed with timing, packaging, and logistics. Makes sure your order leaves steaming hot and arrives fast — every single time.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800',
  },
];

const AboutPage = () => {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <div className="bg-[#050505] text-[#fefce8] selection:bg-orange-500 selection:text-white overflow-x-hidden">
      
      {/* ── CINEMATIC HERO ────────────────────────────────────── */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Dynamic Background */}
        <motion.div 
          style={{ y: yParallax }}
          className="absolute inset-0 z-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80')] bg-cover bg-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-[#050505] z-10" />
        
        <div className="relative z-20 text-center px-6">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="block text-orange-500 uppercase font-bold text-sm mb-6 tracking-widest"
          >
            Est. 2022 • Delhi • Delivery-First
          </motion.span>
          <motion.h1 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none"
          >
            LPI <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">KITCHEN</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-8 text-xl md:text-2xl text-stone-300 font-light max-w-3xl mx-auto italic"
          >
            "Awadhi soul, modern delivery — hot, fresh, and full of flavor at your doorstep."
          </motion.p>
        </div>
      </section>

      {/* ── OUR JOURNEY ───────────────────────────────────────── */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            whileInView="visible"
            initial="hidden"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-600/10 blur-[100px]" />
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              Born for <span className="text-orange-500">Delivery</span>
            </h2>
            <div className="space-y-6 text-stone-400 text-lg leading-relaxed">
              <p>
                Started in 2022 as a single cloud kitchen in Delhi with one mission: bring restaurant-level Awadhi & Indian flavors straight to your home — no dine-in, no compromise.
              </p>
              <p>
                We built everything around delivery: leak-proof, heat-retaining packaging, lightning prep-to-door timing, and recipes that taste incredible even after 30–45 minutes on the road. 
                From humble biryanis and rolls to full thalis and curries — our growth came from one obsession: making every order feel like it came from a royal kitchen.
              </p>
            </div>
            
            <div className="mt-12 flex gap-12 border-t border-white/10 pt-10">
              <div>
                <p className="text-4xl font-black text-orange-500">50K+</p>
                <p className="text-sm uppercase tracking-widest text-stone-500">Orders Delivered</p>
              </div>
              <div>
                <p className="text-4xl font-black text-orange-500">4.8</p>
                <p className="text-sm uppercase tracking-widest text-stone-500">Avg Rating</p>
              </div>
              <div>
                <p className="text-4xl font-black text-orange-500">5+</p>
                <p className="text-sm uppercase tracking-widest text-stone-500">Cities Served</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative order-1 lg:order-2"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80&w=1000" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-[3s]"
                alt="Cloud kitchen team preparing sealed delivery orders"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-orange-600/90 p-6 rounded-xl shadow-xl hidden md:block">
              <p className="text-white font-black text-xl italic">"Hot on arrival. Every time."</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── THE TEAM ───────────────────────────────────────────── */}
      <section className="py-32 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-black uppercase mb-4 tracking-tighter">The Delivery Dream Team</h2>
            <div className="h-1 w-24 bg-orange-600 mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="group relative bg-zinc-900/50 border border-white/5 rounded-2xl p-6 hover:bg-zinc-800/70 transition-all overflow-hidden"
              >
                <div className="absolute inset-0 bg-orange-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10">
                  <div className="aspect-square mb-6 overflow-hidden rounded-xl">
                    <img 
                      src={member.image} 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100" 
                      alt={member.name} 
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                  <p className="text-orange-500 text-sm font-bold uppercase tracking-widest mb-4">{member.role}</p>
                  <p className="text-stone-400 leading-relaxed text-sm">{member.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED TESTIMONIAL ──────────────────────────────── */}
      <section className="py-32 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-zinc-900 to-black p-10 md:p-16 rounded-[2.5rem] border border-orange-500/20 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-15 pointer-events-none" />
            
            <span className="text-7xl text-orange-500 font-serif opacity-30 mb-6 block">“</span>
            <h2 className="text-2xl md:text-4xl font-medium leading-tight mb-10">
              "Butter chicken arrived steaming hot, creamy, smoky — packaging was perfect, no spills, taste was next level. Fast delivery too. <span className="text-orange-500 underline underline-offset-8 decoration-2">LPI Kitchen is now my default order!</span>"
            </h2>
            <div className="flex items-center justify-center gap-4">
              <div className="w-14 h-14 rounded-full bg-orange-600 flex items-center justify-center font-bold text-black text-xl">RM</div>
              <div className="text-left">
                <p className="font-bold uppercase tracking-widest text-base">Rahul Mehra</p>
                <p className="text-stone-500 text-sm">Noida • Frequent Customer</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;