// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import {jwtDecode} from 'jwt-decode';
// // import useStore from '../useStore'; // Assuming useStore is for user state management

// // const CartPage = () => {
// //   const [cartItems, setCartItems] = useState([]);
// //   const user1 = useStore((state) => state.user);

// //   useEffect(() => {
// //     const fetchCartItems = async () => {
// //       if (user1) {
// //         try {
// //           const decoded = jwtDecode(user1.token);
// //           const userId = decoded.user.id;
          
// //           const response = await axios.get(`http://localhost:5000/api/cart/${userId}`);
// //           setCartItems(response.data.items); // Assuming response.data.items contains the cart items
// //         } catch (error) {
// //           console.error("Error decoding token or fetching cart items:", error);
// //         }
// //       }
// //     };

// //     fetchCartItems();
// //   }, [user1]);

// //   return (
// //     <div>
// //       <h2>My Cart</h2>
// //       {cartItems.length === 0 ? (
// //         <p>Your cart is empty.</p>
// //       ) : (
// //         <ul>
// //           {cartItems.map((item) => (
// //             <li key={item._id}>
// //               <h3>{item.name}</h3>
// //               <p>Author: {item.author}</p>
// //               <img src={item.image_url} alt={item.name} style={{ maxWidth: '100px' }} />
// //             </li>
// //           ))}
// //         </ul>
// //       )}
// //     </div>
// //   );
// // };

// // export default CartPage;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { jwtDecode } from 'jwt-decode';
// import useStore from '../useStore'; // Assuming useStore is for user state management

// const CartPage = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const user1 = useStore((state) => state.user);

//   useEffect(() => {
//     const fetchCartItems = async () => {
//       if (user1) {
//         try {
//           const decoded = jwtDecode(user1.token);
//           const userId = decoded.user.id;

//           const response = await axios.get(`http://localhost:5000/api/cart/${userId}`);
//           setCartItems(response.data.items); // Assuming response.data.items contains the cart items
//         } catch (error) {
//           console.error("Error decoding token or fetching cart items:", error);
//         }
//       }
//     };

//     fetchCartItems();
//   }, [user1]);

//   return (
//     <div className="container mx-auto py-[80px] mt-[220px] md:mt-8 bg-gray-200">
//       <h2 className="text-3xl font-semibold text-center mb-4">My Cart</h2>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
//           {cartItems.map((item) => (
//             <div key={item._id} className="flex items-center p-4 bg-white shadow-md rounded-md overflow-hidden w-[330px]">
//               <div className="flex-shrink-0">
//                 <img src={item.image_url} alt={item.name} className="w-[140px] h-52 object-cover rounded-md shadow-md" />
//               </div>
//               <div className="ml-4 flex-1 w-[150px]">
//                 <h3 className="text-lg font-semibold overflow-hidden">{item.name}</h3>
//                 <p className="text-sm text-gray-600">Author: {item.author}</p>
//                 <p className="mt-2">{item.description}</p>
//                 <div className="mt-4 flex ">
//                   <button className="bg-green-300 text-white px-[10px] py-[5px] rounded-md shadow-md hover:bg-primary-dark">
//                     Rent
//                   </button>
//                   <button className="bg-red-300 text-white px-[10px] py-[5px] rounded-md shadow-md hover:bg-primary-dark">
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CartPage;





import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import useStore from '../useStore'; // Assuming useStore is for user state management
import { FaArrowLeft } from 'react-icons/fa'; // Import an arrow icon (or any other icon you prefer)

const CartPage = () => {
  const navigate = useNavigate(); // Initialize navigate for navigation
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state for fetch
  const [error, setError] = useState(null); // Error state for fetch
  const user1 = useStore((state) => state.user);

  useEffect(() => {
    const fetchCartItems = async () => {
      if (user1) {
        try {
          const decoded = jwtDecode(user1.token);
          const userId = decoded.user.id;

          const response = await axios.get(`https://updated-bookrental-2.onrender.com/api/cart/${userId}`);
          setCartItems(response.data.items); // Assuming response.data.items contains the cart items
        } catch (error) {
          console.error("Error decoding token or fetching cart items:", error);
          setError("Failed to load cart items.");
        } finally {
          setLoading(false); // Stop loading regardless of success or failure
        }
      } else {
        setLoading(false); // Stop loading if user1 is not defined
      }
    };

    fetchCartItems();
  }, [user1]);

  // Function to remove item from cart
  const handleRemove = async (itemId) => {
    if (user1) {
      try {
        const decoded = jwtDecode(user1.token);
        const userId = decoded.user.id;

        // Send request to remove the item
        await axios.post(`https://updated-bookrental-2.onrender.com/api/cart/remove`, { userId, itemId });

        // Update local state to reflect the removed item
        setCartItems((prevItems) => prevItems.filter(item => item._id !== itemId));
      } catch (error) {
        console.error("Error removing item from cart:", error);
        setError("Failed to remove item from cart.");
      }
    }
  };

  // Render loading state or error message
  if (loading) {
    return <div className="text-center">Loading cart items...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600">{error}</div>;
  }

  return (
    <div className="p-6 pt-10 py-[90px] mt-[300px] items-center md:mt-8 bg-gray-200 relative">
      <button 
        onClick={() => navigate(-1)} // Navigate to the previous page using navigate
        className="absolute top-4 left-4 mt-4 bg-gray-300 text-gray-800 px-4 py-2 flex rounded-md shadow-md hover:bg-gray-400"
      >
        <FaArrowLeft className="mr-2 mt-1.5" /> {/* Arrow icon */}
        Back
      </button>
      <h2 className="text-3xl font-semibold text-center mb-4">My Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {cartItems.map((item) => (
            <div key={item._id} className="flex items-center p-4 bg-white shadow-md rounded-md overflow-hidden w-[330px]">
              <div className="flex-shrink-0">
                <img src={item.image_url} alt={item.name} className="w-[140px] h-52 object-cover rounded-md shadow-md" />
              </div>
              <div className="ml-4 flex-1 w-[150px]">
                <h3 className="text-lg font-semibold overflow-hidden">{item.name}</h3>
                <p className="text-sm text-gray-600">Author: {item.author}</p>
                <p className="mt-2">{item.description}</p>
                <div className="mt-4 gap-1 flex ">
                  <button className="bg-green-500 text-white px-[10px] py-[5px] rounded-md shadow-md hover:bg-primary-dark">
                    Rent
                  </button>
                  <button 
                    onClick={() => handleRemove(item._id)} // Call handleRemove on click
                    className="bg-red-500 text-white px-[10px] py-[5px] rounded-md shadow-md hover:bg-primary-dark"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
