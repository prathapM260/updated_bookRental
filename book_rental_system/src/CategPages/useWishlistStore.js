import create from 'zustand';

const useWishlistStore = create((set) => ({
  wishlistItems: [],

  // Function to fetch wishlist items
  fetchWishlistItems: async (userId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/wishlist/${userId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch wishlist items');
      }
      const data = await response.json();
      set({ wishlistItems: data.items }); // Update wishlistItems in state
    } catch (error) {
      console.error('Error fetching wishlist items:', error);
    }
  },

  // Function to add an item to the wishlist
  addToWishlist: (item) =>
    set((state) => ({ wishlistItems: [...state.wishlistItems, item] })),

  // Function to remove an item from the wishlist
  removeFromWishlist: (itemId) =>
    set((state) => ({
      wishlistItems: state.wishlistItems.filter((item) => item._id !== itemId),
    })),

  // Function to clear the wishlist
  clearWishlist: () => set({ wishlistItems: [] }),

  // Setter to directly set wishlist items
  setWishlistItems: (items) => set({ wishlistItems: items }),
}));

export default useWishlistStore;
