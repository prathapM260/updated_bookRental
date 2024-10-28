// src/sections/HomeSection.js
import React from 'react';
import useStore from '../useStore';
const HomeSection = () => {
   
    
    return (
        <section id="home" className="p-4 bg-white">
            <h2 className="text-3xl font-bold mb-4">Welcome to the Book Rental System</h2>
            <p>Discover a wide range of books available for rent. Explore our collections and find your next great read.</p>
        </section>
    );
};

export default HomeSection;
