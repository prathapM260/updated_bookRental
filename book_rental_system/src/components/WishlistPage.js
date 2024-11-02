import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import useStore from '../useStore';
import { useNavigate } from 'react-router-dom';

const WishlistPage = () => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const user1 = useStore((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchWishlistItems = async () => {
      if (user1) {
        try {
          const decoded = jwtDecode(user1.token);
          const userId = decoded.user.id;
          console.log("Fetching wishlist items for user ID:", userId);
  
          const response = await axios.get(`https://updated-bookrental-2.onrender.com/api/wishlist/${userId}`);
          console.log("Wishlist items response:", response.data);
  
          if (response.data.items) {
            setWishlistItems(response.data.items);
          } else {
            throw new Error("No items found in response.");
          }
        } catch (error) {
          console.error("Error decoding token or fetching wishlist items:", error.response ? error.response.data : error);
          setError("Failed to load wishlist items.");
        } finally {
          setLoading(false);
        }
      } else {
        console.log("No user logged in.");
        setLoading(false);
      }
    };

    fetchWishlistItems();
  }, [user1]);

  const handleRemove = async (itemId) => {
    if (user1) {
      try {
        const decoded = jwtDecode(user1.token);
        const userId = decoded.user.id;

        await axios.post(`https://updated-bookrental-2.onrender.com/api/wishlist/remove`, { userId, itemId });

        setWishlistItems((prevItems) => prevItems.filter(item => item._id !== itemId));
      } catch (error) {
        console.error("Error removing item from wishlist:", error);
        setError("Failed to remove item from wishlist.");
      }
    }
  };

  const handleClearWishlist = async () => {
    if (user1) {
      try {
        const decoded = jwtDecode(user1.token);
        const userId = decoded.user.id;

        await axios.post(`https://updated-bookrental-2.onrender.com/api/wishlist/clear`, { userId });

        setWishlistItems([]);
      } catch (error) {
        console.error("Error clearing wishlist:", error);
        setError("Failed to clear wishlist.");
      }
    }
  };

  const handleBack = () => {
    navigate(-1); 
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">Loading wishlist items...</div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-600">{error}</div>;
  }

  return (
    <div className="p-6 pt-10 py-[90px] mt-[300px] md:mt-8 bg-gray-200 relative">
      <button 
        onClick={handleBack} 
        className="absolute top-4 left-4 mt-4 bg-gray-300 text-gray-800 px-4 py-2 rounded-md shadow-md hover:bg-gray-400"
      >
        ← Back
      </button>
      <h2 className="text-3xl font-semibold text-center mb-4">My Wishlist</h2>
      {wishlistItems.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-4">
            {wishlistItems.map((item) => (
              <div key={item._id} className="flex items-center p-2 bg-white shadow-md rounded-md overflow-hidden w-[330px]">
                <div className="flex-shrink-0">
                  <img src={item.image_url} alt={item.name} className="w-[140px] h-52 object-cover rounded-md shadow-md" />
                </div>
                <div className="ml-2 flex-1 w-[150px]">
                  <h3 className="text-lg font-semibold overflow-hidden">{item.name}</h3>
                  <p className="text-sm text-gray-600">Author: {item.author}</p>
                  <p className="mt-2">{item.description}</p>
                  <div className="mt-4 flex space-x-2">
                    <button className="bg-green-500 text-white px-[10px] py-[5px] rounded-md shadow-md hover:bg-green-600">
                      Rent
                    </button>
                    <button 
                      onClick={() => handleRemove(item._id)}
                      className="bg-red-500 text-white px-[10px] py-[5px] rounded-md shadow-md hover:bg-red-600"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button 
            onClick={handleClearWishlist} 
            className="bg-red-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-600 mb-4"
          >
            Clear Wishlist
          </button>
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
