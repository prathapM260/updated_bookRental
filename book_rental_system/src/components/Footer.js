import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  // Function to handle navigation to personal social media links
  const handleSocialMediaClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <footer  className=" bg-gray-300 py-9   dark:bg-black dark:text-white">
      <div  className="container mx-auto h-[200px] flex justify-between items-center px-4">
        {/* Left section: Book rental system details */}
        <div className="w-1/2">
          <h2 className="text-lg font-bold mb-2">Book Rental System</h2>
          <p className="text-black-600 mb-4">
          A book rental system allows users to borrow books for a specified period 
          instead of purchasing them outright. It typically operates through an online platform where
           users can browse a catalog of books, select the ones they want, and rent them for a duration.           </p>
        </div>

        {/* Right section: Social media icons */}
        <div className="flex items-center justify-end w-1/2 space-x-4 ">
          <FaFacebook className="text-3xl text-blue-600 cursor-pointer hover:text-blue-800" onClick={() => handleSocialMediaClick('https://www.facebook.com/yourpage')} />
          <FaTwitter className="text-3xl text-blue-400 cursor-pointer hover:text-blue-600" onClick={() => handleSocialMediaClick('https://twitter.com/yourhandle')} />
          <FaInstagram className="text-3xl text-pink-600 cursor-pointer hover:text-pink-800" onClick={() => handleSocialMediaClick('https://www.instagram.com/youraccount')} />
          <FaLinkedin className="text-3xl text-blue-800 cursor-pointer hover:text-blue-900" onClick={() => handleSocialMediaClick('https://www.linkedin.com/in/m-prathap-98b8b5273')} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
