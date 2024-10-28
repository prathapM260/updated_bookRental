// src/useUserStore.js
import create from 'zustand';
import { persist } from 'zustand/middleware';

// Define the user store
const useStore = create(
  persist(
    (set) => ({
      user: null, // Initial state for user data
      setUser: (userData) => set({ user: userData }), // Function to set user data
      clearUser: () => set({ user: null }) // Function to clear user data
    }),
    {
      name: 'user-storage', // Name of the localStorage key
      getStorage: () => localStorage, // Specify the storage type
    }
  )
);

export default useStore;
