import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^\+?\d{10,13}$/.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Enter a valid phone number';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Pre-fill WhatsApp message
    const whatsappMessage = encodeURIComponent(
      `Hello LPI Kitchen Team!\n\n` +
      `Name: ${formData.name}\n` +
      `Phone: ${formData.phone}\n` +
      `Email: ${formData.email || 'Not provided'}\n\n` +
      `Message:\n${formData.message}\n\n` +
      `Looking forward to your reply!`
    );

    const phone = '917505266931'; // ← your WhatsApp number
    window.open(`https://wa.me/${phone}?text=${whatsappMessage}`, '_blank');

    // Optional: show success message
    setSubmitted(true);
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
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
          className="text-center mb-16 md:mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-[0.15em] mb-6">
            Contact <span className="text-[#b44a1f]">Us</span>
          </h1>
          <div className="w-32 h-1 mx-auto bg-gradient-to-r from-[#8c2f0e]/70 to-[#b44a1f]/50 rounded-full mb-6" />
          <p className="text-lg md:text-xl text-[#c9c5bd] max-w-3xl mx-auto">
            We're just a message away! Reach out for orders, queries, feedback, or partnerships.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Contact Info + Map */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="space-y-10"
          >
            <div className="bg-[#0a0a0c]/80 backdrop-blur-sm p-8 rounded-2xl border border-[#1a1a1c] shadow-xl">
              <h2 className="text-3xl font-bold text-[#b44a1f] mb-6">Get in Touch</h2>

              <div className="space-y-6 text-[#c9c5bd]">
                <div className="flex items-start">
                  <span className="text-[#b44a1f] text-2xl mr-4">📞</span>
                  <div>
                    <p className="font-semibold">Phone / WhatsApp</p>
                    <a href="tel:+917505266931" className="hover:text-[#b44a1f] transition-colors">
                      +91 75052 66931
                    </a>
                    <p className="text-sm text-[#a1a1aa] mt-1">(Fastest response via WhatsApp)</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-[#b44a1f] text-2xl mr-4">✉️</span>
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href="mailto:hello@lpikitchen.com" className="hover:text-[#b44a1f] transition-colors">
                      hello@lpikitchen.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-[#b44a1f] text-2xl mr-4">📍</span>
                  <div>
                    <p className="font-semibold">Cloud Kitchen Location</p>
                    <p className="leading-relaxed">
                       Delhi, Delhi , India, 201301<br />
                      (Delivery across Delhi & nearby areas)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="rounded-2xl overflow-hidden border border-[#1a1a1c] shadow-2xl h-80 md:h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.123456789!2d80.923456789!3d26.856789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd0f12345678%3A0xabcdef1234567890!2sAliganj%2C%20Lucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1698765432100!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="LPI Kitchen Location Map"
              ></iframe>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-[#0a0a0c]/80 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-[#1a1a1c] shadow-xl"
          >
            <h2 className="text-3xl font-bold text-[#b44a1f] mb-8">Send Us a Message</h2>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-10"
              >
                <div className="text-6xl mb-4">✅</div>
                <h3 className="text-2xl font-bold mb-3">Message Sent!</h3>
                <p className="text-[#c9c5bd]">
                  We've received your message. You'll hear back soon via WhatsApp.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-3 bg-[#b44a1f] hover:bg-[#d16a2f] rounded-lg text-white font-semibold"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-[#111113] border ${errors.name ? 'border-red-500' : 'border-[#1a1a1c]'} rounded-lg focus:outline-none focus:border-[#b44a1f] transition-colors`}
                    placeholder="Your name"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number (WhatsApp) *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-[#111113] border ${errors.phone ? 'border-red-500' : 'border-[#1a1a1c]'} rounded-lg focus:outline-none focus:border-[#b44a1f] transition-colors`}
                    placeholder="+91 75052 66931"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email (optional)</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#111113] border border-[#1a1a1c] rounded-lg focus:outline-none focus:border-[#b44a1f] transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Your Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`w-full px-4 py-3 bg-[#111113] border ${errors.message ? 'border-red-500' : 'border-[#1a1a1c]'} rounded-lg focus:outline-none focus:border-[#b44a1f] transition-colors resize-none`}
                    placeholder="How can we help you today? (order query, feedback, partnership...)"
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-[#8c2f0e] to-[#b44a1f] hover:from-[#b44a1f] hover:to-[#8c2f0e] text-white font-bold uppercase tracking-wider rounded-xl shadow-lg shadow-[#b44a1f]/30 transition-all"
                >
                  Send via WhatsApp
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Quick Contact Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-xl text-[#c9c5bd] mb-6">
            Prefer instant reply? Message us directly on WhatsApp
          </p>
          <a
            href="https://wa.me/917505266931"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-bold text-lg rounded-full shadow-2xl transition-all"
          >
            <span className="text-2xl mr-3">💬</span> Chat on WhatsApp Now
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;