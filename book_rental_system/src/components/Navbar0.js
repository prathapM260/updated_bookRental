// import React, { useEffect, useRef, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { FaHeart, FaUser, FaShoppingCart } from 'react-icons/fa';
// import { IoMdSearch } from 'react-icons/io';
// import DarkMode from './DarkMode';

// import Book1 from '../Assets/Book1.jpg';
// import SignIn from './Signin';
// import { jwtDecode } from 'jwt-decode'; // Correct import for jwtDecode
// import useWishlistStore from './useWishlist.js';
// import useCartStore from './useCartStore';
// import useStore from '../useStore';

// const Navbar0 = () => {
//   const navigate = useNavigate();
//   const [searchQuery, setSearchQuery] = useState('');
//   const dropdownRef = useRef(null);
//   const [showUserProfile, setShowUserProfile] = useState(false);
//   const [showSignIn, setShowSignIn] = useState(false);
//   const user1 = useStore((state) => state.user);

//   let user = {
//     name: 'John Doe',
//     email: 'john.doe@example.com',
//     avatar: '',
//     designation: '',
//   };

//   if (user1) {
//     try {
//       const decoded = jwtDecode(user1.token);
//       user.name = decoded.user.username;
//       user.email = decoded.user.email;
//       user.designation = decoded.user.designation;
//     } catch (error) {
//       console.error('Error decoding token:', error);
//     }
//   }

//   const handleUserProfileClick = () => {
//     setShowUserProfile(!showUserProfile);
//     setShowSignIn(false);
//   };

//   const handleSignOutClick = () => {
//     setShowUserProfile(false);
//     setShowSignIn(false);
//     navigate('/');
//   };

//   const navigateAndClosePopup = (path) => {
//     setShowUserProfile(false);
//     setShowSignIn(false);
//     navigate(path);
//   };

//   const { fetchCartItems } = useCartStore();
//   const { fetchWishlistItems } = useWishlistStore();

//   const handleNavigateToCart = () => {
//     fetchCartItems();
//     navigate('/cartpage');
//   };

//   const handleNavigateToWishlist = () => {
//     fetchWishlistItems();
//     navigate('/wishlistpage');
//   };

//   return (
//     <div className="fixed top-0 left-0 w-full shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 z-40">
//       <div className="bg-primary/40 py-2">
//         <div className="container flex justify-between items-center mx-auto">
//           <div>
//             <a
//               href="/"
//               className="font-bold text-2xl whitespace-nowrap sm:text-3xl flex gap-2 items-center"
//             >
//               <img src={Book1} alt="1" className="w-10" />
//               <span className="hidden sm:block">Read here</span>
//             </a>
//           </div>
//           <div className="flex items-center gap-4">
//             <div className="relative group">
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 onKeyDown={(e) => {
//                   if (e.key === 'Enter' && searchQuery.trim()) {
//                     navigate('/search', { state: { searchText: searchQuery } });
//                   }
//                 }}
//                 className="w-[300px] sm:w-[200px] group-hover:w-[400px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-2 focus:outline-none focus:border-primary dark:border-gray-500 dark:bg-gray-800"
//               />
//               <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
//             </div>

//             <button onClick={handleNavigateToCart} className="bg-gradient-to-r from-primary to-secondary text-white py-1 px-4 rounded-full flex items-center gap-3 group">
//               <span className="group-hover:block hidden">Order</span>
//               <FaShoppingCart className="text-xl text-white" />
//             </button>

//             <button onClick={handleNavigateToWishlist} className="bg-gradient-to-r from-primary to-secondary text-white py-1 px-4 rounded-full flex items-center gap-3 group">
//               <span className="group-hover:block hidden">Wishlist</span>
//               <FaHeart className="text-xl text-white" />
//             </button>

//             <div className="flex items-center gap-4">
//               <DarkMode />
//               <div className="relative">
//                 <button
//                   onClick={handleUserProfileClick}
//                   className="bg-gradient-to-r from-primary to-secondary text-white py-1 px-4 rounded-full flex items-center gap-3 group"
//                 >
//                   <span className="group-hover:block hidden">Profile</span>
//                   <FaUser className="text-xl text-white" />
//                 </button>

//                 {showUserProfile && (
//                   <div ref={dropdownRef} className="absolute right-0 mt-2 bg-white dark:bg-gray-900 rounded-lg shadow-lg py-2 w-[250px] space-y-2">
//                     {!showSignIn ? (
//                       <ul className="text-black dark:text-white">
//                         <li className="px-4 py-2 text-lg font-semibold">{user.name}</li>
//                         <li className="px-4 py-2">{user.email}</li>
//                         <li className="px-4 py-2">{user.designation}</li>
//                         <li className="px-4 py-2">
//                           <button className="text-red-500" onClick={handleSignOutClick}>Sign Out</button>
//                         </li>
//                       </ul>
//                     ) : (
//                       <SignIn navigateAndClosePopup={navigateAndClosePopup} />
//                     )}
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar0;








import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaBars, FaUser, FaShoppingCart } from 'react-icons/fa';
import { IoMdSearch } from 'react-icons/io';
import DarkMode from './DarkMode';
import Book1 from '../Assets/Book1.jpg';
import SignIn from './Signin';
import { jwtDecode } from 'jwt-decode';
import useCartStore from './useCartStore';
import useStore from '../useStore';

const Navbar0 = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef(null);
  const [showMenu, setShowMenu] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [books, setBooks] = useState([]);
  const [showUserProfile, setShowUserProfile] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const user1 = useStore((state) => state.user);
  const [searchText, setSearchText] = useState('');

  let user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar: '',
    role: '',
  };

  if (user1) {
    try {
      const decoded = jwtDecode(user1.token);
      user.name = decoded.user.username;
      user.email = decoded.user.email;
      user.role = decoded.user.role;
    } catch (error) {
      console.error('Error decoding token:', error);
    }
  }

  // useEffect(() => {
  //   const fetchBooks = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:5000/api/categories');
  //       setBooks(response.data);
  //     } catch (error) {
  //       console.error('Error fetching books:', error);
  //     }
  //   };

  //   fetchBooks();
  // }, []);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!dropdownRef.current?.contains(event.target)) {
        setShowCategories(false);
      }
      if (!event.target.closest('.user-profile') && !event.target.closest('.user-dropdown')) {
        setShowUserProfile(false);
        setShowSignIn(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  const handleUserProfileClick = () => {
    setShowUserProfile(!showUserProfile);
    setShowSignIn(false);
  };

  const handleSignInClick = () => {
    setShowUserProfile(true);
    setShowSignIn(true);
  };

  const handleSignOutClick = () => {
    setShowUserProfile(false);
    setShowSignIn(false);
    navigate('/');
  };

  const navigateAndClosePopup = (path) => {
    setShowUserProfile(false);
    setShowSignIn(false);
    navigate(path);
  };

  const { fetchCartItems } = useCartStore();

  const handleNavigateToCart = () => {
    fetchCartItems();
    navigate('/cartpage');
  };

  const handleSearch = (event) => {
    if (event.key === 'Enter' && searchQuery.trim()) {
      navigate('/search', { state: { searchText: searchQuery } });
    }
  };

  const movetoAdmin = () => {
    navigate('/AdminFol/MainAdmin');
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-gradient-to-b from-primary via-[#ffffff] to-white dark:bg-gray-900 dark:text-white duration-200 mb-3 z-40 mb-1">
      <div className="dark:bg-gray-900 dark:text-white py-2">
        <div className="container flex justify-between items-center mx-auto dark:bg-gray-900 w-full dark:text-white">
          <div>
            <a
              href="/"
              className="font-bold text-2xl whitespace-nowrap flex gap-2 items-center"
            >
              <img src={Book1} alt="Book" className="w-12 h-12 sm:w-[50px] sm:h-auto" />
              <span className="hidden sm:block">Read here</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleSearch}
                className="w-[250px] sm:w-[300px] rounded-full border  border-gray-300 px-2 py-2 focus:outline-none focus:border-primary dark:border-gray-500 dark:bg-gray-800 transition duration-200 ease-in-out hover:scale-105 hover:border-primary" // Increased width for mobile
                />
              <IoMdSearch className="text-gray-500 absolute right-3 top-1/2 -translate-y-1/2" />
            </div>
            <div className="hidden md:flex"> {/* Cart button hidden on mobile screens */}
              <button
                onClick={handleNavigateToCart}
                className="bg-gradient-to-r from-primary to-secondary text-white py-1 px-4 rounded-full flex items-center gap-3 group"
              >
                <span className="group-hover:block hidden">Order</span>
                <FaShoppingCart className="text-xl text-white drop-shadow-sm cursor-pointer" />
              </button>
            </div>
            <div className="flex items-center gap-4">
            <DarkMode className="w-10 h-10 p-1 rounded-full flex items-center justify-center bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-white transition-all duration-200" />
            <div className="relative">
                <div className="flex items-center gap-4 p-1.5 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-full">
                  <button
                    onClick={handleUserProfileClick}
                    className="text-gray-600 px-1 sm:px-2 dark:text-white rounded-full hover:bg-primary dark:hover:bg-gray-800 text-sm sm:text-xl"
                  >
                    <FaUser className="text-lg sm:text-xl" />
                  </button>
                  {user.role === 'admin' && (
                    <div className="ml-1 font-bold">
                      <button
                        onClick={movetoAdmin}
                        className="text-black px-1 sm:px-4 dark:text-white dark:hover:text-black rounded-full hover:bg-primary transition-all duration-200 text-sm sm:text-base"
                        >
                        Admin
                      </button>
                    </div>
                  )}
                </div>

                {showUserProfile && (
                  <div className="absolute right-0 mt-2 w-[250px] bg-white dark:bg-gray-800 dark:text-white rounded-md shadow-lg py-2 z-10 user-profile">
                    {showSignIn ? (
                      <SignIn />
                    ) : (
                      <div className="flex items-center dark:text-white gap-4 px-2">
                        <img
                          src={user.avatar}
                          alt="User"
                          className="w-16 h-16 rounded-full border border-gray-300"
                        />
                        <div>
                          <p className="text-gray-800 dark:text-white font-medium">{user.name}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-300">{user.email}</p>
                        </div>
                      </div>
                    )}
                    <div className="border-t border-gray-200 dark:border-gray-700 dark:text-white mt-4 px-4 py-2">
                      {!showSignIn && (
                        <button
                          onClick={() => navigateAndClosePopup('/signin')}
                          className="block w-full px-4 py-2 rounded-md text-sm text-black dark:text-white hover:bg-primary hover:text-black dark:hover:text-black hover:shadow-lg transition-all duration-200 cursor-pointer"
                        >
                          Sign In
                        </button>
                      )}
                      {!showSignIn && (
                        <button
                          onClick={() => navigateAndClosePopup('/signup')}
                          className="block w-full px-4 py-2 rounded-md text-sm text-black dark:text-white hover:bg-primary hover:text-black dark:hover:text-black hover:shadow-lg transition-all duration-200 cursor-pointer"
                        >
                          Sign Up
                        </button>
                      )}
                      <button
                        onClick={handleSignOutClick}
                        className="block w-full px-4 py-2 rounded-md text-sm text-black dark:text-white hover:bg-primary hover:text-black dark:hover:text-black hover:shadow-lg transition-all duration-200 cursor-pointer"
                      >
                        Sign Out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar0;
