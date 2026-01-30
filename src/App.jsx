// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { CartProvider } from './context/CartContext';
import Navbar from './Components/Navbar';
import ScrollToTop from './Components/ScrollToTop';
import Home from './Pages/Home';
import AboutPage from './Pages/AboutPage';
import MenuPage from './Pages/MenuPage';
import ContactPage from './Pages/Contactus';
import CartPage from './Pages/CartPage'; // ← updated name
import Footer from './Components/Footer';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-[#050505]">
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/order-now" element={<CartPage />} /> 

            <Route
              path="*"
              element={
                <div className="min-h-[70vh] flex items-center justify-center text-[#f5f2ed] text-2xl font-bold">
                  404 — Page Not Found
                </div>
              }
            />
          </Routes>

          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
};

export default App;