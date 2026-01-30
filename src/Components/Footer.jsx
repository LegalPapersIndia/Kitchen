import React from 'react';
import { motion } from 'framer-motion';
import { FiInstagram, FiFacebook, FiTwitter, FiYoutube } from 'react-icons/fi';

const Footer = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  const socialLinks = [
    { icon: FiInstagram, href: '#', label: 'Instagram' },
    { icon: FiFacebook, href: '#', label: 'Facebook' },
    { icon: FiTwitter, href: '#', label: 'Twitter' },
    { icon: FiYoutube, href: '#', label: 'YouTube' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Events', href: '#events' },
    { name: 'Locations', href: '#locations' },
  ];

  return (
    <footer className="bg-[#050505] text-[#c9c5bd] pt-16 pb-8 border-t border-[#1a1a1c]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          
          {/* Brand & Tagline */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h3 className="text-3xl font-black tracking-[0.18em] text-[#f5f2ed] mb-4">
              LPI<span className="text-[#b44a1f]">KITCHEN</span>
            </h3>
            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              Where tradition meets bold flavors. Crafting unforgettable Indian dining experiences with passion and soul.
            </p>
            
            {/* Social Icons */}
            <div className="flex space-x-5">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.2, y: -3 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  className="text-[#8c2f0e] hover:text-[#b44a1f] transition-colors text-2xl"
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="md:ml-8">
            <h4 className="text-lg font-bold uppercase tracking-wider text-[#f5f2ed] mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-[#b44a1f] transition-colors hover:pl-2 duration-300 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h4 className="text-lg font-bold uppercase tracking-wider text-[#f5f2ed] mb-6">Contact Us</h4>
            <address className="not-italic text-sm space-y-3">
              <p>LPI Kitchen Headquarters</p>
              <p> Delhi </p>
              <p className="mt-4">
                <a href="tel:+915224567890" className="hover:text-[#b44a1f] transition-colors">
                  +91 522 456 7890
                </a>
              </p>
              <p>
                <a href="mailto:hello@lpikitchen.com" className="hover:text-[#b44a1f] transition-colors">
                  hello@lpikitchen.com
                </a>
              </p>
            </address>
          </motion.div>

          {/* Newsletter */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <h4 className="text-lg font-bold uppercase tracking-wider text-[#f5f2ed] mb-6">Stay Updated</h4>
            <p className="text-sm mb-4">
              Subscribe for exclusive offers, new menu launches, and events.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="px-5 py-3 bg-[#0a0a0c] border border-[#1a1a1c] rounded-full text-sm focus:outline-none focus:border-[#b44a1f] transition-colors w-full"
                required
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="px-6 py-3 bg-[#8c2f0e] hover:bg-[#b44a1f] text-[#f5f2ed] font-semibold rounded-full transition-colors whitespace-nowrap"
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="pt-10 border-t border-[#1a1a1c] text-center text-sm flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p>© {new Date().getFullYear()} LPI Kitchen. All rights reserved.</p>
          
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#privacy" className="hover:text-[#b44a1f] transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-[#b44a1f] transition-colors">Terms of Service</a>
            <a href="#contact" className="hover:text-[#b44a1f] transition-colors">Contact</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;