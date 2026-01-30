// src/context/CartContext.jsx
import { createContext, useState, useMemo, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    // Load from localStorage on initial render
    try {
      const saved = localStorage.getItem('lpi_cart');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error("Failed to parse cart from localStorage", e);
      return [];
    }
  });

  // Save to localStorage whenever cartItems change
  useEffect(() => {
    try {
      localStorage.setItem('lpi_cart', JSON.stringify(cartItems));
    } catch (e) {
      console.error("Failed to save cart", e);
    }
  }, [cartItems]);

  const addToCart = (item) => {
    if (!item || !item.name) {
      console.error('[Cart] Invalid item');
      return;
    }

    console.log('[Cart] addToCart called with:', item.name);

    setCartItems((prev) => {
      const existingIndex = prev.findIndex((i) => i.name === item.name);

      if (existingIndex !== -1) {
        // already hai → quantity badhao
        return prev.map((i, idx) =>
          idx === existingIndex
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      } else {
        // naya item
        return [
          ...prev,
          {
            name: item.name,
            price: item.price || '₹0',
            description: item.description || '',
            image: item.image || '',
            quantity: 1,
          },
        ];
      }
    });
  };

  const updateQuantity = (name, delta) => {
    setCartItems((prev) =>
      prev
        .map((i) =>
          i.name === name
            ? { ...i, quantity: Math.max(1, i.quantity + delta) }
            : i
        )
        .filter((i) => i.quantity > 0)
    );
  };

  const removeItem = (name) => {
    setCartItems((prev) => prev.filter((i) => i.name !== name));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const value = useMemo(
    () => ({
      cartItems,
      addToCart,
      updateQuantity,
      removeItem,
      clearCart,
      totalItems: cartItems.reduce((sum, item) => sum + item.quantity, 0),
      subtotal: cartItems.reduce((sum, item) => {
        const priceNum = parseFloat(String(item.price || '0').replace('₹', '').trim()) || 0;
        return sum + priceNum * item.quantity;
      }, 0),
    }),
    [cartItems]
  );

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};