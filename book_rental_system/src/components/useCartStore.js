// import create from 'zustand';

// const useCartStore = create((set) => ({
//   cartItems: [],
//   fetchCartItems: async (userId) => {
//     try {
//       // Fetch cart items from API
//       const response = await fetch(`your_api_endpoint/${userId}/cart`);
//       if (!response.ok) {
//         throw new Error('Failed to fetch cart items');
//       }
//       const data = await response.json();
//       set({ cartItems: data.items }); // Update cartItems in state
//     } catch (error) {
//       console.error('Error fetching cart items:', error);
//     }
//   },
//   removeFromCart: (itemId) => {
//     // Remove item from cart logic
//   },
//   clearCart: () => {
//     // Clear cart logic
//   },
// }));

//export default useCartStore;

// import create from 'zustand';

// const useCartStore = create((set) => ({
//   cartItems: [], // Initialize as an empty array

//   fetchCartItems: async (userId) => {
//     try {
//       const response = await fetch(`your_api_endpoint/${userId}/cart`);
//       if (!response.ok) {
//         throw new Error('Failed to fetch cart items');
//       }
//       const data = await response.json();
//       set({ cartItems: data.items || [] }); // Initialize cartItems as an array
//     } catch (error) {
//       console.error('Error fetching cart items:', error);
//     }
//   },

//   addToCart: (item) => set((state) => ({
//     cartItems: [...state.cartItems, item], // Add new item to cartItems array
//   })),

//   removeFromCart: (itemId) => set((state) => ({
//     cartItems: state.cartItems.filter((item) => item._id !== itemId), // Remove item from cartItems array
//   })),

//   clearCart: () => set({ cartItems: [] }), // Clear cartItems by setting it to an empty array
// }));

// export default useCartStore;



import create from 'zustand';

const useCartStore = create((set) => ({
  cartItems: [],
  fetchCartItems: async (userId) => {
    try {
      // Fetch cart items from API
      const response = await fetch(`your_api_endpoint/${userId}/cart`);
      if (!response.ok) {
        throw new Error('Failed to fetch cart items');
      }
      const data = await response.json();
      set({ cartItems: data.items }); // Update cartItems in state
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  },

  
  addToCart: async (userId, item) => {
    try {
      const response = await fetch(`your_api_endpoint/${userId}/cart/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
      });
      if (!response.ok) {
        throw new Error('Failed to add item to cart');
      }
      const data = await response.json();
      set((state) => ({
        cartItems: [...state.cartItems, data.item],
      }));
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  },
  removeFromCart: (itemId) => {
    // Remove item from cart logic
  },
  clearCart: () => {
    // Clear cart logic
  },
}));

export default useCartStore;
