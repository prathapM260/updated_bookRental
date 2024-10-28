// src/cartStore.js

import create from 'zustand';
import axios from 'axios';

const useCartStore = create((set) => ({
  cartItems: [],
  addToCart: (item) => set((state) => ({ cartItems: [...state.cartItems, item] })),
  removeFromCart: (itemId) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item._id !== itemId),
    })),
  clearCart: () => set({ cartItems: [] }),
  setCartItems: (items) => set({ cartItems: items }), // Setter to directly set cart items
}));

export default useCartStore;
