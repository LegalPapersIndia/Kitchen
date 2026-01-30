// src/Pages/CartPage.jsx
import React, { useContext, useState } from 'react';
import { motion } from 'framer-motion';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { cartItems, removeItem, updateQuantity, subtotal, clearCart } = useContext(CartContext);

  const [specialInstructions, setSpecialInstructions] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');

  // ────────────────────────────────────────────────
  // Delivery Charge Logic
  // ────────────────────────────────────────────────
  const deliveryCharge = subtotal >= 250 ? 0 : 100;
  const grandTotal = subtotal + deliveryCharge;

  // Basic NCR pin code validation
  const isNCRPinCode = (pin) => {
    if (!pin || pin.length !== 6 || !/^\d{6}$/.test(pin)) return false;
    const prefixes = ['110', '121', '122', '201', '203'];
    return prefixes.some((prefix) => pin.startsWith(prefix));
  };

  const pinError =
    pinCode && !isNCRPinCode(pinCode)
      ? 'We currently deliver only in Delhi NCR (Noida, Greater Noida, Ghaziabad, Gurgaon, Faridabad, Delhi). Please enter a valid NCR PIN code.'
      : '';

  const isNameValid = customerName.trim().length >= 2;
  const isPhoneValid = /^\d{10}$/.test(whatsappNumber.trim());

  const isOrderButtonDisabled =
    cartItems.length === 0 ||
    !isNameValid ||
    !isPhoneValid ||
    !deliveryAddress.trim() ||
    !pinCode.trim() ||
    !isNCRPinCode(pinCode);

  const handleWhatsAppOrder = () => {
    if (isOrderButtonDisabled) return;

    const orderSummary = cartItems
      .map(
        (item) =>
          `${item.quantity} × ${item.name} - ${item.price} = ₹${
            parseFloat(item.price.replace('₹', '').trim()) * item.quantity
          }`
      )
      .join('\n');

    const message = encodeURIComponent(
      `Hello LPI Kitchen Team!\n\n` +
        `Order Details:\n` +
        `${orderSummary}\n\n` +
        `Subtotal: ₹${subtotal.toFixed(2)}\n` +
        `Delivery Charge: ₹${deliveryCharge}\n` +
        `Final Amount: ₹${grandTotal.toFixed(2)}\n\n` +
        `Customer Name: ${customerName.trim()}\n` +
        `WhatsApp/Phone Number: ${whatsappNumber.trim()}\n\n` +
        `Delivery Address:\n${deliveryAddress.trim()}\nPIN: ${pinCode}\n\n` +
        `Special Instructions / Notes:\n${specialInstructions.trim() || 'None'}\n\n` +
        `Please confirm the order. Thank you!`
    );

    const phone = '917505266931';
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Empty Cart View
  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-[#050505] text-[#f5f2ed] flex items-center justify-center pt-24 px-5">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center p-10 bg-[#0a0a0c]/90 backdrop-blur-md rounded-2xl border border-[#1a1a1c] max-w-md w-full shadow-2xl"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-[#b44a1f]">Cart is Empty</h2>
          <p className="text-[#c9c5bd] mb-10 text-lg">
            Looks like you haven't added anything yet. Let's find something tasty!
          </p>
          <Link
            to="/menu"
            className="inline-block px-10 py-5 bg-gradient-to-r from-[#8c2f0e] to-[#b44a1f] hover:from-[#b44a1f] hover:to-[#8c2f0e] rounded-xl text-white font-bold uppercase tracking-wider shadow-xl transition-all duration-300"
          >
            Browse Menu
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-[#f5f2ed] pt-24 pb-20 px-5 sm:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black uppercase tracking-wide text-center mb-12 text-white"
        >
          Your <span className="text-[#b44a1f]">Cart</span>
        </motion.h1>

        {/* Cart Items */}
        <div className="space-y-6 mb-12">
          {cartItems.map((item) => (
            <motion.div
              key={item.name}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-[#0a0a0c]/90 backdrop-blur-md p-5 sm:p-6 rounded-2xl border border-[#1a1a1c] hover:border-[#b44a1f]/50 transition-all shadow-lg"
            >
              <div className="flex items-center gap-5 mb-4 sm:mb-0 flex-1">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg border border-[#1a1a1c]"
                />
                <div className="flex-1">
                  <h3 className="font-bold text-xl md:text-2xl">{item.name}</h3>
                  <p className="text-[#b44a1f] font-semibold text-lg">{item.price}</p>
                </div>
              </div>

              <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-6">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => updateQuantity(item.name, -1)}
                    className="w-12 h-12 bg-[#1a1a1c] hover:bg-[#b44a1f]/30 rounded-full flex items-center justify-center text-2xl font-bold text-white transition-colors"
                  >
                    −
                  </button>
                  <span className="text-2xl font-bold w-10 text-center">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.name, 1)}
                    className="w-12 h-12 bg-[#1a1a1c] hover:bg-[#b44a1f]/30 rounded-full flex items-center justify-center text-2xl font-bold text-white transition-colors"
                  >
                    +
                  </button>
                </div>

                <button
                  onClick={() => removeItem(item.name)}
                  className="text-red-500 hover:text-red-400 font-medium text-lg px-4 py-2"
                >
                  Remove
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary & Checkout Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#0a0a0c]/90 backdrop-blur-md p-6 sm:p-10 rounded-2xl border border-[#1a1a1c] shadow-2xl"
        >
          {/* Pricing Breakdown */}
          <div className="space-y-4 mb-8 text-lg">
            <div className="flex justify-between items-center">
              <span className="text-white">Subtotal</span>
              <span className="text-white">₹{subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-white">Delivery Charge</span>
              <span className={deliveryCharge === 0 ? 'text-green-400' : 'text-[#b44a1f]'}>
                {deliveryCharge === 0 ? 'FREE' : `₹${deliveryCharge}`}
              </span>
            </div>

            <div className="flex justify-between items-center text-2xl md:text-3xl font-black pt-4 border-t border-[#1a1a1c]">
              <span className="text-white">Grand Total</span>
              <span className="text-[#b44a1f]">₹{grandTotal.toFixed(2)}</span>
            </div>

            {deliveryCharge > 0 && (
              <p className="text-sm text-[#c9c5bd] mt-2">
                Add ₹{ (250 - subtotal).toFixed(0) } more for free delivery!
              </p>
            )}
          </div>

          {/* Customer Details + Address + PIN */}
          <div className="mb-8 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xl font-bold text-[#e8e3db] mb-3">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Full Name"
                  className={`w-full p-4 bg-[#111113] border rounded-xl text-white placeholder-gray-500 focus:outline-none ${
                    customerName.trim() && customerName.trim().length < 2
                      ? 'border-red-600 focus:border-red-500'
                      : 'border-[#1a1a1c] focus:border-[#b44a1f]'
                  }`}
                />
              </div>

              <div>
                <label className="block text-xl font-bold text-[#e8e3db] mb-3">
                  WhatsApp Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  maxLength={10}
                  value={whatsappNumber}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, '');
                    setWhatsappNumber(val);
                  }}
                  placeholder="10-digit number (without +91)"
                  className={`w-full p-4 bg-[#111113] border rounded-xl text-white placeholder-gray-500 focus:outline-none ${
                    whatsappNumber && !/^\d{10}$/.test(whatsappNumber)
                      ? 'border-red-600 focus:border-red-500'
                      : 'border-[#1a1a1c] focus:border-[#b44a1f]'
                  }`}
                />
              </div>
            </div>

            <div>
              <label className="block text-xl font-bold text-[#e8e3db] mb-3">
                Delivery Address <span className="text-red-500">*</span>
              </label>
              <textarea
                value={deliveryAddress}
                onChange={(e) => setDeliveryAddress(e.target.value)}
                placeholder="House/Flat no, Street, Sector/Area, Landmark, City"
                className="w-full h-28 p-4 bg-[#111113] border border-[#1a1a1c] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#b44a1f] resize-none"
              />
            </div>

            <div>
              <label className="block text-xl font-bold text-[#e8e3db] mb-3">
                PIN Code <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                maxLength={6}
                value={pinCode}
                onChange={(e) => {
                  const val = e.target.value.replace(/\D/g, '');
                  setPinCode(val);
                }}
                placeholder="e.g. 201301"
                className={`w-full sm:w-1/3 p-4 bg-[#111113] border rounded-xl text-white placeholder-gray-500 focus:outline-none ${
                  pinError ? 'border-red-600 focus:border-red-500' : 'border-[#1a1a1c] focus:border-[#b44a1f]'
                }`}
              />
              {pinError && <p className="mt-2 text-red-500 text-sm">{pinError}</p>}
              <p className="mt-1 text-[#a1a1aa] text-sm">
                We currently deliver only in Delhi NCR regions.
              </p>
            </div>
          </div>

          {/* Special Instructions */}
          <div className="mb-8">
            <label className="block text-xl font-bold text-[#e8e3db] mb-3">
              Special Instructions / Notes
            </label>
            <textarea
              value={specialInstructions}
              onChange={(e) => setSpecialInstructions(e.target.value)}
              placeholder="e.g., less spicy, no onion, extra gravy, deliver after 8 PM, call before arrival, etc."
              className="w-full h-32 p-4 bg-[#111113] border border-[#1a1a1c] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#b44a1f] resize-none"
            />
          </div>

          {/* Order Button */}
          <motion.button
            whileHover={{ scale: isOrderButtonDisabled ? 1 : 1.03 }}
            whileTap={{ scale: isOrderButtonDisabled ? 1 : 0.97 }}
            onClick={handleWhatsAppOrder}
            disabled={isOrderButtonDisabled}
            className={`w-full py-6 font-bold text-xl md:text-2xl uppercase tracking-wider rounded-xl shadow-2xl transition-all duration-300 ${
              isOrderButtonDisabled
                ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-[#8c2f0e] to-[#b44a1f] hover:from-[#b44a1f] hover:to-[#8c2f0e] text-white shadow-[#b44a1f]/50'
            }`}
          >
            {isOrderButtonDisabled ? 'Complete All Required Fields to Order' : 'Order Now via WhatsApp'}
          </motion.button>

          {/* Clear Cart */}
          <button
            onClick={clearCart}
            className="mt-6 text-[#c9c5bd] hover:text-white underline text-center w-full block text-lg"
          >
            Clear Cart
          </button>
        </motion.div>

        {/* Back Link */}
        <div className="text-center mt-12">
          <Link
            to="/menu"
            className="text-[#b44a1f] hover:text-[#ea580c] font-medium text-lg underline"
          >
            ← Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;