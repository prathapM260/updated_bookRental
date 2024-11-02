import create from 'zustand';

const useWishlistStore = create((set) => ({
  wishlistItems: [],
  
  fetchWishlistItems: async (userId) => {
    try {
      const response = await fetch(`your_api_endpoint/${userId}/wishlist`);
      if (!response.ok) {
        throw new Error('Failed to fetch wishlist items');
      }
      const data = await response.json();
      set({ wishlistItems: data.items });
    } catch (error) {
      console.error('Error fetching wishlist items:', error);
    }
  },

  addToWishlist: async (userId, item) => {
    try {
      const response = await fetch(`https://updated-bookrental-2.onrender.com/api/wishlist/add/${userId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
      });
      if (!response.ok) {
        throw new Error('Failed to add item to wishlist');
      }
      const data = await response.json();
      set((state) => ({
        wishlistItems: [...state.wishlistItems, data.item],
      }));
    } catch (error) {
      console.error('Error adding item to wishlist:', error);
    }
  },
  
  removeFromWishlist: async (userId, itemId) => {
    try {
      const response = await fetch(`your_api_endpoint/${userId}/wishlist/remove`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ itemId }),
      });
      if (!response.ok) {
        throw new Error('Failed to remove item from wishlist');
      }
      set((state) => ({
        wishlistItems: state.wishlistItems.filter((item) => item._id !== itemId),
      }));
    } catch (error) {
      console.error('Error removing item from wishlist:', error);
    }
  },

  clearWishlist: () => {
    set({ wishlistItems: [] });
  },
}));

export default useWishlistStore;
