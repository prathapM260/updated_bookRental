// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import useStore from '../useStore'; // Import Zustand store

// const SignIn = () => {
//   const navigate = useNavigate();
//  // Get setUser from Zustand store
//  const user11 = useStore((state) => state.user);
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//   });
//   const [error, setError] = useState(''); // State to store error messages

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       console.log('Form Data:', formData); // Log form data to ensure it is correct

//       const response = await fetch('http://localhost:5000/api/signin', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       console.log('Response check:', response);
//       if (!response.ok) {
//         const errorText = await response.text();
//         throw new Error(`Sign-in failed: ${errorText}`);
//       }

//       const data = await response.json();
//       console.log("before ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",data);
//       console.log("before dddddddddd222222333333333333333333333333333333ddd",data.user);
//       // if (data.user) {
//       //   useStore.getState().setUser(data.user);
//       // }
//       console.log('Data display:', user11);
//       // Store user data in Zustand and localStorage
//       navigate('/'); // Navigate to home page after successful sign-in
//     } catch (error) {
//       console.error('Sign-in error:', error);
//       setError(error.message); // Set error message
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="container mx-auto p-4 max-w-md">
//         <h2 className="text-2xl font-bold mb-4 text-center">Sign In</h2>
//         {error && <div className="bg-red-100 text-red-700 p-2 mb-4 rounded">{error}</div>} {/* Display error message */}
//         <form onSubmit={handleSubmit} className="bg-white p-8 border border-gray-300 rounded-md shadow-md">
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             className="block w-full border border-gray-300 px-3 py-2 rounded-md mb-3 focus:outline-none focus:border-primary"
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//             className="block w-full border border-gray-300 px-3 py-2 rounded-md mb-3 focus:outline-none focus:border-primary"
//           />
//           <button
//             type="submit"
//             className="w-full bg-primary hover:text-black text-black py-2 rounded-md hover:bg-secondary transition-all duration-200"
//           >
//             Sign In
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignIn;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useStore from '../useStore'; // Adjust the import path accordingly

const SignIn = () => {
  const navigate = useNavigate();
  const setUser = useStore((state) => state.setUser); // Get setUser from Zustand store
  const user1 = useStore((state) => state.user);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(''); // State to store error messages

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log('Form Data:', formData); // Log form data to ensure it is correct

      const response = await fetch('https://updated-bookrental-2.onrender.com/api/user/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('Response check:', response);
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Sign-in failed: ${errorText}`);
      }

      const data = await response.json();
      console.log('Fetched User Data:', data);

      if (data) {
        setUser(data); // Store user data in Zustand and localStorage
      }
      console.log("user fech in signin", user1);

      navigate('/'); // Navigate to home page after successful sign-in
    } catch (error) {
      setError(error.message); // Set error message
    }
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gradient-to-b dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 mt-8">
      <div className="container mx-auto p-4 max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center dark:text-white">Sign In</h2>
        {error && (
          <div className="bg-red-100 text-red-700 p-2 mb-4 rounded dark:bg-red-200">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-8 border border-gray-300 dark:border-gray-700 rounded-md shadow-md">
          
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="block w-full border border-gray-300 dark:border-gray-700 px-3 py-2 rounded-md focus:outline-none focus:border-primary dark:bg-gray-700 dark:text-white"
            />
          </div>
  
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-1" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="block w-full border border-gray-300 dark:border-gray-700 px-3 py-2 rounded-md focus:outline-none focus:border-primary dark:bg-gray-700 dark:text-white"
            />
          </div>
  
          <button
            type="submit"
            className="w-full bg-primary text-black dark:bg-blue-600 dark:text-white py-2 rounded-md hover:bg-secondary dark:hover:bg-blue-500 transition-all duration-200"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
