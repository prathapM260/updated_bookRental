// import React, { useEffect, useState } from 'react';
// import Typed from 'typed.js';
// import { jwtDecode } from 'jwt-decode';
// import useStore from '../useStore';

// const genres = [
//   { name: "Adventure", src: "https://assets-cdn.reedsy.com/assets/landing/landing-v2/index/adventure-2871435d32d475f2d3a0ea886e2e1a5f7f36185c92330eb2600f37c5c98db301.svg", background: "bg-gradient-to-r from-green-400 to-green-600" },
//   { name: "Romance", src: "https://assets-cdn.reedsy.com/assets/landing/landing-v2/index/romance-afd7e47bd62e75fcb6d7245ec3c797203dbe352cc75fabfd7235d6f7d44ae97e.svg", background: "bg-gradient-to-r from-red-200 to-white" },
//   { name: "Mystery", src: "https://assets-cdn.reedsy.com/assets/landing/landing-v2/index/mystery-b2c4e96682838a00555a9d83448d99a5cce01ee7f4d32e3bcb86726ff38be69c.svg", background: "bg-gradient-to-r from-gray-200 to-gray-400" },
//   { name: "Self-Help", src: "https://assets-cdn.reedsy.com/assets/landing/landing-v2/index/self-help-fab4ec4ec9f9364fbd0b30fd6c8af2da0c7b8a7f46ec6211f3ff1a3043ef6215.svg", background: "bg-gradient-to-r from-blue-100 to-blue-300" },
// ];

// const IntegratedSection = () => {
//   const user1 = useStore((state) => state.user);
//   const [user, setUser] = useState({ name: '', email: '', avatar: '' });
//   const [currentGenreIndex, setCurrentGenreIndex] = useState(0);

//   useEffect(() => {
//     if (user1 && user1.token) {
//       try {
//         const decoded = jwtDecode(user1.token);
//         setUser({
//           name: decoded.user.username || '',
//           email: decoded.user.email || '',
//           avatar: decoded.user.avatar || '', // Replace with actual user avatar URL
//         });
//         console.log('User ID:', decoded.user.id); // Log user ID once
//       } catch (error) {
//         console.error('Error decoding token:', error);
//       }
//     }
//   }, [user1]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentGenreIndex((prevIndex) => (prevIndex + 1) % genres.length);
//     }, 4000); // Change image every 4 seconds

//     return () => clearInterval(interval);
//   }, []);

//   const currentGenre = genres[currentGenreIndex];

//   useEffect(() => {
//     const options = {
//       strings: genres.map(genre => genre.name),
//       typeSpeed: 100,
//       backSpeed: 100,
//       loop: true,
//       onStringTyped: (arrayPos) => {
//         setCurrentGenreIndex(arrayPos);
//       },
//     };

//     const typed = new Typed('#typed', options);

//     return () => {
//       typed.destroy();
//     };
//   }, []);

//   return (
//     <div className={`flex flex-col justify-center items-center h-screen w-screen dark:bg-gray-900 dark:text-white  ${currentGenre.background}`}>
//       <div className="flex flex-row-reverse flex-grow flex-shrink-0 w-full dark:bg-gray-800">
//         <div className="flex justify-center items-center flex-shrink-0 w-1/2">
//           {genres.map((genre, index) => (
//             <img
//               key={index}
//               className={`w-120 h-auto ${genre === currentGenre ? 'block' : 'hidden'}`}
//               src={genre.src}
//               alt={genre.name}
//             />
//           ))}
//         </div>
//         <div className={`flex flex-col justify-center items-start w-1/2 px-10 pr-7 mt-1 ml-5`}>
//           <h1 className="text-4xl text-center font-bold">
//             Hey {user.name}! ... welcome
//             <br />
//             Let's find books here.
//             <br />
//             <span id="typed" className="text-typed font-bold text-green"></span> books <br />
//             are made
//           </h1>
//           <h3 className="font-bold mt-4 mb-4 text-center">
//             Meet the <span className="font-bold">editor</span>, <span className="font-bold">designer</span> or <span className="font-bold">marketer</span> who can help bring&nbsp;<span className="font-bold">your book</span> to life.
//           </h3>
//           <form className="w-full text-center md:text-left" action="/accounts" method="post">
//             <input type="hidden" name="authenticity_token" value="LtHEog4TE0kEmyoqO7VWPkowcSFCuGngyn2PRBVQh7vp4AuK8gFmctjTvPaCSmf5etHeVw1CzPRNeJ9M1uLZHQ" />
//             <input type="hidden" name="g-recaptcha-response-v3" className="g-recaptcha-response" />
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//               <div className="flex justify-start md:justify-end"></div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default IntegratedSection;










import React, { useEffect, useState } from 'react';
import Typed from 'typed.js';
import { jwtDecode } from 'jwt-decode';
import useStore from '../useStore';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { FaHeart } from 'react-icons/fa';

const genres = [
  { name: "Adventure", src: "https://assets-cdn.reedsy.com/assets/landing/landing-v2/index/adventure-2871435d32d475f2d3a0ea886e2e1a5f7f36185c92330eb2600f37c5c98db301.svg", background: "bg-gradient-to-r from-green-200 to-green-400" },
  { name: "Romance", src: "https://assets-cdn.reedsy.com/assets/landing/landing-v2/index/romance-afd7e47bd62e75fcb6d7245ec3c797203dbe352cc75fabfd7235d6f7d44ae97e.svg", background: "bg-gradient-to-r from-red-200 to-white" },
  { name: "Mystery", src: "https://assets-cdn.reedsy.com/assets/landing/landing-v2/index/mystery-b2c4e96682838a00555a9d83448d99a5cce01ee7f4d32e3bcb86726ff38be69c.svg", background: "bg-gradient-to-r from-gray-200 to-gray-400" },
  { name: "Self-Help", src: "https://assets-cdn.reedsy.com/assets/landing/landing-v2/index/self-help-fab4ec4ec9f9364fbd0b30fd6c8af2da0c7b8a7f46ec6211f3ff1a3043ef6215.svg", background: "bg-gradient-to-r from-blue-100 to-blue-300" },
];

const IntegratedSection = () => {
  const user1 = useStore((state) => state.user);
  const [user, setUser] = useState({ name: '', email: '', avatar: '' });
  const [currentGenreIndex, setCurrentGenreIndex] = useState(0);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    if (user1 && user1.token) {
      try {
        const decoded = jwtDecode(user1.token);
        setUser({
          name: decoded.user.username || '',
          email: decoded.user.email || '',
          avatar: decoded.user.avatar || '',
        });
        console.log('User ID:', decoded.user.id);
      } catch (error) {
        console.error('Error decoding token:', error);
      }
    }
  }, [user1]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGenreIndex((prevIndex) => (prevIndex + 1) % genres.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const currentGenre = genres[currentGenreIndex];

  useEffect(() => {
    const options = {
      strings: genres.map(genre => genre.name),
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
      onStringTyped: (arrayPos) => {
        setCurrentGenreIndex(arrayPos);
      },
    };

    const typed = new Typed('#typed', options);

    return () => {
      typed.destroy();
    };
  }, []);

  // Navigation functions
  const handleNavigateToWishlist = () => {
    navigate('/wishlistpage'); // Navigate to the wishlist page
  };

  const handleNavigateToCart = () => {
    navigate('/cartpage'); // Navigate to the cart page
  };

  return (
    <div className={`flex flex-col justify-center items-center h-[525px] w-screen dark:bg-gray-900 dark:text-white ${currentGenre.background}`}>
      <div className="flex flex-row-reverse flex-grow flex-shrink-0 w-full pl-[55px] dark:bg-gray-800">
        <div className="flex justify-center items-center flex-shrink-0 w-1/2">
          {genres.map((genre, index) => (
            <img
              key={index}
              className={`w-80 h-auto ${genre === currentGenre ? 'block' : 'hidden'}`} // Reduced image width
              src={genre.src}
              alt={genre.name}
            />
          ))}
        </div>
        <div className={`flex flex-col justify-center items-start w-1/2 pl-4 px-3 pb-5 pr-3 ml-2`}>
             <h1 className="text-2xl sm:text-4xl text-center font-semibold mb-4">
                Hey {user.name}! ... welcome
                <br />
                Let's find books here.
                <br />
                <span id="typed" className="text-typed font-semibold text-green"></span> books <br />
                are made
              </h1>

          <h3 className="font-large mt-2 mb-3 text-center">
            Take a look at your wishlist and cart
          </h3>
          <div className="flex justify-center space-x-4 mt-2 border border-gray-500 rounded-lg p-4 w-[300px] sm:w-auto">
            {/* Show buttons only on larger screens */}
            <div className="hidden sm:flex space-x-4">
              <button 
                onClick={handleNavigateToWishlist} 
                className="px-6 py-2 bg-transparent border border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:px-12 hover:text-white shadow-md transition duration-200"
              >
                Wishlist
              </button>
              <button 
                onClick={handleNavigateToCart} 
                className="px-6 py-2 bg-transparent border border-green-600 text-green-600 rounded-full hover:bg-green-600 hover:px-10 hover:text-white shadow-md transition duration-200"
              >
                Cart
              </button>
            </div>

            {/* Show cart and wishlist icons only on smaller screens */}
            <div className="sm:hidden flex space-x-4">
  <button 
    onClick={handleNavigateToWishlist} 
    className="text-blue-600 hover:text-blue-800"
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  </button>
  <button 
    onClick={handleNavigateToCart} 
    className="text-green-600 hover:text-green-800"
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l1.5-6H6.4l-.4-2M7 13l-1.5 6h12.8L17 13M7 13l1.5-6H17m-6 6v6m-4-6v6m4-6h2.5M7 13h4m-2-2h-1.5M9 7H7l.5 2m3-2h2.5M13 9l-1.5-2M7 5h10" />
    </svg>
  </button>
</div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegratedSection;
