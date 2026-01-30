import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <section id="about" className="py-20 md:py-32 bg-[#050505] text-[#f5f2ed] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        
        {/* Hero / Intro */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-center mb-20 md:mb-32"
        >
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-[0.15em] mb-6">
            Our <span className="text-[#8c2f0e]">Story</span>
          </h1>
          <div className="w-24 h-0.5 mx-auto bg-gradient-to-r from-[#8c2f0e]/60 to-[#b44a1f]/40 rounded-full mb-8" />
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-[#c9c5bd]">
            At YOUR KITCHEN, we cook for the real world — busy streets, late nights, hungry souls scrolling for comfort. 
            Born from a love of bold Indian flavors and smart delivery, every order is packed with care so it arrives hot, fresh, and full of soul — straight to your door in Uttar Pradesh.
          </p>
        </motion.div>

        {/* History / Journey Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={staggerContainer}
          className="mb-24 md:mb-40"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wider mb-10 text-center md:text-left">
            Our <span className="text-[#b44a1f]">Journey</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeInLeft} className="space-y-6 text-lg leading-relaxed">
              <p>
                Launched in 2022 as a single high-efficiency cloud kitchen in Delhi, we set out to deliver restaurant-quality Indian food without the dine-in overhead. 
                Focused purely on delivery: killer recipes for biryanis, dosas, rolls & thalis, plus rock-solid partnerships with Swiggy, Zomato, and direct WhatsApp orders.
              </p>
              <p>
                We grew rapidly by obsessing over what matters most — leak-proof packaging, lightning-fast prep-to-door timing, and consistent taste every single order. 
                Today we serve multiple cities across Uttar Pradesh, always delivery-first, always making your next meal quick, delicious, and hassle-free.
              </p>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              className="relative rounded-xl overflow-hidden shadow-2xl shadow-[#8c2f0e]/20 border border-[#1a1a1c]"
            >
              <img
                src="https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&q=80&w=2070"
                alt="Busy cloud kitchen team packing hot delivery orders in Delhi"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/70 via-transparent to-transparent" />
            </motion.div>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={staggerContainer}
          className="mb-24 md:mb-40"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wider mb-12 text-center">
            Meet The <span className="text-[#b44a1f]">Core Team</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-10 lg:gap-14">
            {[
              {
                name: 'Aarav Singh',
                role: 'Founder & Head Chef',
                desc: '15+ years mastering flavors. Crafts every recipe to travel perfectly — crispy dosas, juicy biryanis, creamy gravies that shine on arrival.',
              },
              {
                name: 'Priya Mehra',
                role: 'Menu & Quality Lead',
                desc: 'Balances bold spices with precision — guarantees every packed box delivers the same authentic taste and wow factor across UP cities.',
              },
              {
                name: 'Rahul Verma',
                role: 'Operations & Delivery Head',
                desc: 'Masters timing, packaging, and logistics — ensures orders leave hot and arrive on time, every time, rain or shine.',
              },
            ].map((member, i) => (
              <motion.div
                key={member.name}
                variants={fadeInUp}
                className="bg-[#0a0a0c]/80 backdrop-blur-sm p-8 rounded-xl border border-[#1a1a1c] hover:border-[#8c2f0e]/50 transition-all duration-500 group shadow-lg hover:shadow-[#8c2f0e]/20"
              >
                <div className="w-24 h-24 mx-auto mb-6 rounded-full overflow-hidden border-2 border-[#b44a1f]/30 group-hover:border-[#b44a1f]/70 transition-all">
                  <img
                    src={`https://images.unsplash.com/photo-${i === 0 ? '1552058544-f2b08422138a' : i === 1 ? '1494790108377-be9c29b29330' : '1507003211169-0a1dd7228f2d'}?auto=format&fit=crop&q=80`}
                    alt={`${member.name} - ${member.role} at YOUR KITCHEN cloud kitchen`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-center mb-2">{member.name}</h3>
                <p className="text-[#8c2f0e] text-center font-semibold mb-4">{member.role}</p>
                <p className="text-[#c9c5bd] text-center text-sm leading-relaxed">{member.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wider mb-12">
            Why <span className="text-[#b44a1f]">Order From Us</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-10 lg:gap-14">
            {[
              {
                title: 'Delivery-Optimized',
                desc: 'Every dish is crafted & packed to stay hot, fresh & tasty — even after 30–45 min rides across Delhi & NCR cities.',
              },
              {
                title: 'Hygienic & Safe',
                desc: '100% sealed packaging, strict kitchen hygiene, FSSAI certified — peace of mind in every order, every time.',
              },
              {
                title: 'Value + Taste',
                desc: 'Big portions, bold Indian flavors (North & South), pocket-friendly prices — satisfaction without compromise.',
              },
              {
                title: 'Fast & Reliable',
                desc: 'Lightning-fast prep + smart routing — most orders delivered in under 40 mins, tracked easily via app or WhatsApp.',
              },
            ].map((reason, i) => (
              <motion.div
                key={reason.title}
                variants={fadeInUp}
                className="p-10 rounded-xl bg-gradient-to-br from-[#0a0a0c] to-[#111113] border border-[#1a1a1c] hover:border-[#8c2f0e]/60 transition-all duration-500 group shadow-lg hover:shadow-[#8c2f0e]/20"
              >
                <div className="text-5xl mb-6 text-[#8c2f0e] group-hover:text-[#b44a1f] transition-colors">0{i + 1}</div>
                <h3 className="text-2xl font-bold mb-4">{reason.title}</h3>
                <p className="text-[#c9c5bd] leading-relaxed">{reason.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;