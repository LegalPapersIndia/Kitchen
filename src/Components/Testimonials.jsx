import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "Ananya Sharma",
    location: "Noida",
    rating: 5,
    text: "Ordered masala dosa and filter coffee at midnight — arrived hot, crispy, and perfectly packed! The chutneys were fresh, and it tasted just like restaurant quality at home. Super reliable delivery, now my go-to for South Indian cravings.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=987",
  },
  {
    name: "Rahul Mehra",
    location: "Delhi",
    rating: 5,
    text: "Butter chicken & naan combo was creamy, smoky, and full of flavor — no sogginess even after 30 mins delivery. Portions are generous, packaging excellent. Ordered via app and it was spot on. Best North Indian delivery in the area!",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=987",
  },
  {
    name: "Priya Kapoor",
    location: "Ghaziabad",
    rating: 5,
    text: "Shrimp curry arrived perfectly spiced with great coconut flavor — sealed packaging kept everything hot and mess-free. Loved the value for money and quick 25-min delivery. Desserts like gulab jamun were soft and soaked just right. Repeat customer now!",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=987",
  },
  {
    name: "Vikram Singh",
    location: "Gurgaon",
    rating: 5,
    text: "Lamb rogan josh was tender, aromatic, and tasted authentic — better than many restaurants I've tried. Packaging prevented spills, rice was fluffy, and delivery was on time. Great portions at reasonable prices. Highly recommend for home delivery!",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=987",
  },
  {
    name: "Neha Gupta",
    location: "Faridabad",
    rating: 5,
    text: "Paneer butter masala and mango lassi combo was creamy perfection — arrived hot with no leakage. First time ordering, but the taste and hygiene impressed me a lot. Fast delivery and consistent quality. YOUR KITCHEN is now bookmarked!",
    avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?auto=format&fit=crop&q=80&w=987",
  },
];

const Testimonial = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  return (
    <section className="py-24 md:py-32 bg-[#0a0a0c] text-[#f5f2ed] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-[0.12em] mb-6">
            What Our <span className="text-[#b44a1f]">Customers</span> Say
          </h2>
          <div className="w-28 h-0.5 mx-auto bg-gradient-to-r from-[#8c2f0e]/60 to-[#b44a1f]/40 rounded-full mb-8" />
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-[#c9c5bd]">
            Real feedback from happy customers who love our hot, fresh, and perfectly packed deliveries.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              variants={fadeInUp}
              className="bg-[#050505] backdrop-blur-sm p-8 rounded-2xl border border-[#1a1a1c] hover:border-[#b44a1f]/50 transition-all duration-500 group shadow-xl hover:shadow-[#8c2f0e]/30 flex flex-col"
            >
              {/* Quote Icon */}
              <div className="text-6xl text-[#8c2f0e]/30 mb-6 font-serif">“</div>

              {/* Testimonial Text */}
              <p className="text-[#e0dbd2] leading-relaxed mb-8 flex-grow text-lg">
                {testimonial.text}
              </p>

              {/* Author Info */}
              <div className="flex items-center">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#b44a1f]/30 mr-4 group-hover:border-[#b44a1f]/70 transition-all">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-[#8c2f0e] text-sm">{testimonial.location}</p>
                  <div className="flex mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-[#b44a1f] text-xl">★</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Final Call-to-action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16 md:mt-24"
        >
          <p className="text-xl md:text-2xl text-[#c9c5bd] mb-8">
            Ready to taste the difference?
          </p>
          <motion.a
            href="/menu"  // or WhatsApp link / Swiggy page
            whileHover={{ scale: 1.06, y: -4 }}
            whileTap={{ scale: 0.96 }}
            className="inline-block px-12 py-5 bg-gradient-to-r from-[#8c2f0e] to-[#b44a1f] hover:from-[#b44a1f] hover:to-[#8c2f0e] text-[#f5f2ed] font-bold text-xl uppercase tracking-wider rounded-full shadow-2xl shadow-[#b44a1f]/40 transition-all duration-400 border border-[#b44a1f]/50 hover:border-[#f5f2ed]/30"
          >
            Order Now
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;