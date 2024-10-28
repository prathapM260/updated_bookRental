// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Register = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     username: '',
//     password: '',
//     phonenumber: '',
//   });

//   const [error, setError] = useState('');

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(''); // Reset error state
//     try {
//       const response = await axios.post('http://localhost:5000/api/user/signup', formData);
//       console.log("check signup please",response);
//       if (response.status === 201) {
//         // After successful registration, navigate to the home page
//         navigate('/');
//       }
//     } catch (err) {
//       // Handle errors
//       if (err.response && err.response.data) {
//         setError(err.response.data.msg); // Set error message from response
//       } else {
//         setError('An error occurred. Please try again.');
//       }
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="container mx-auto p-4 max-w-md">
//         <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
//         {error && <p className="text-red-500 text-center mb-4">{error}</p>}
//         <form onSubmit={handleSubmit} className="bg-white p-8 border border-gray-300 rounded-md shadow-md">
//           <input
//             type="text"
//             name="name"
//             placeholder="Name"
//             value={formData.name}
//             onChange={handleChange}
//             className="block w-full border border-gray-300 px-3 py-2 rounded-md mb-3 focus:outline-none focus:border-primary"
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             className="block w-full border border-gray-300 px-3 py-2 rounded-md mb-3 focus:outline-none focus:border-primary"
//           />
//           <input
//             type="text"
//             name="username"
//             placeholder="Username"
//             value={formData.username}
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
//           <input
//             type="text"
//             name="phonenumber"
//             placeholder="Phone Number"
//             value={formData.phoneNumber}
//             onChange={handleChange}
//             className="block w-full border border-gray-300 px-3 py-2 rounded-md mb-3 focus:outline-none focus:border-primary"
//           />
//           <button type="submit" className="w-full bg-primary hover:text-black text-black py-2 rounded-md hover:bg-secondary transition-all duration-200">
//             Sign Up
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Register;






import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import SuccessModal from './SuccessModal'; // Import the SuccessModal component

const Register = () => {
  const navigate = useNavigate();
  
  // Predefined roles array
  const roles = {
    1: 'Authors',
    2: 'Writers',
    3: 'Designers',
    4: 'Producers',
    5: 'Publishers',
    6: 'Readers',
    7: 'Customers',
  };

  // State for form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
    phonenumber: '',
    role: '',
    designations: [],
    selectedRoles: [],  // New field for storing selected roles
  });

  const [error, setError] = useState('');
  const [modalVisible, setModalVisible] = useState(false); // State for modal visibility

  // Handle change for text inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle role selection (toggle)
  const handleRoleClick = (role) => {
    setFormData((prevData) => {
      // Toggle role selection
      if (prevData.selectedRoles.includes(role)) {
        return {
          ...prevData,
          selectedRoles: prevData.selectedRoles.filter((selectedRole) => selectedRole !== role),
          designations: prevData.designations.filter((selectedRole) => selectedRole !== role),
        };
      } else {
        return {
          ...prevData,
          selectedRoles: [...prevData.selectedRoles, role],
          designations: [...prevData.designations, role],
        };
      }
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Reset error state

    try {
      const response = await axios.post('http://localhost:5000/api/user/signup', formData);
      if (response.status === 201) {
        setModalVisible(true); // Show the modal on successful signup
      }
    } catch (err) {
      if (err.response && err.response.data) {
        setError(err.response.data.msg); // Set error message from response
      } else {
        setError('An error occurred. Please try again.');
      }
    }
  };

  const handleCloseModal = () => {
    setModalVisible(false); // Hide the modal
  };
  const handleNavigateToSignIn = () => {
    navigate('/signin'); // Navigate to sign-in page
    setModalVisible(false); // Close the modal
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gradient-to-b dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 mt-8">
      <div className="container mx-auto p-4 max-w-md bg-white dark:bg-gray-800 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center dark:text-white">Register</h2>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-8 border border-gray-300 dark:border-gray-700 rounded-md shadow-md">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="block w-full border border-gray-300 dark:border-gray-700 px-3 py-2 rounded-md mb-3 focus:outline-none focus:border-primary dark:bg-gray-700 dark:text-white"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="block w-full border border-gray-300 dark:border-gray-700 px-3 py-2 rounded-md mb-3 focus:outline-none focus:border-primary dark:bg-gray-700 dark:text-white"
          />
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="block w-full border border-gray-300 dark:border-gray-700 px-3 py-2 rounded-md mb-3 focus:outline-none focus:border-primary dark:bg-gray-700 dark:text-white"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="block w-full border border-gray-300 dark:border-gray-700 px-3 py-2 rounded-md mb-3 focus:outline-none focus:border-primary dark:bg-gray-700 dark:text-white"
          />
          <input
            type="text"
            name="phonenumber"
            placeholder="Phone Number"
            value={formData.phonenumber}
            onChange={handleChange}
            className="block w-full border border-gray-300 dark:border-gray-700 px-3 py-2 rounded-md mb-3 focus:outline-none focus:border-primary dark:bg-gray-700 dark:text-white"
          />

          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300">Role:</label>
            <label className="inline-flex items-center mr-4">
              <input
                type="radio"
                name="role"
                value="admin"
                onChange={handleChange}
                className="form-radio h-4 w-4 text-blue-600"
                required
              />
              <span className="ml-2 dark:text-gray-300">Admin</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="role"
                value="user"
                onChange={handleChange}
                className="form-radio h-4 w-4 text-blue-600"
                required
              />
              <span className="ml-2 dark:text-gray-300">User</span>
            </label>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-2">Roles you could possibly be:</label>
            <div className="flex flex-wrap gap-2">
              {Object.entries(roles).map(([key, role]) => (
                <div
                  key={key}
                  className={`cursor-pointer border rounded-md px-2 py-1 transition-all duration-200 
                    ${formData.selectedRoles.includes(role) ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300'}`}
                  onClick={() => handleRoleClick(role)}
                >
                  {role}
                </div>
              ))}
            </div>
          </div>

          <button type="submit" className="w-full bg-primary hover:text-black text-black py-2 rounded-md hover:bg-secondary transition-all duration-200">
            Sign Up
          </button>
<p className="text-center mt-4">
  <span className="text-gray-700 dark:text-gray-300">
    Already have an account?{" "}
    <a 
      href="/signin" 
      className="text-blue-500 hover:text-secondary transition-colors duration-200"
    >
      Sign in
    </a>
  </span>
</p>
        </form>
      </div>
        {/* Success Modal */}
        {modalVisible && (
        <SuccessModal
          message="You have signed up successfully!"
          onClose={handleCloseModal}
          onNavigate={handleNavigateToSignIn}
        />
      )}
    </div>
  );
};

export default Register;
