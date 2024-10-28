import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MyRentals = () => {
  const [rentals, setRentals] = useState([]);

  useEffect(() => {
    // Fetch rented items from an API or a static data source
    const fetchRentals = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/rentals');
        setRentals(response.data);
      } catch (error) {
        console.error('Error fetching rentals:', error);
      }
    };

    fetchRentals();
  }, []);

  return (
    <div id="myrentals" className=" bg-gray-100 container mx-auto p-4 ">
      <h1 className="text-2xl font-bold mb-4">My Rentals</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {rentals.map((rental) => (
          <div key={rental.id} className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4">
            <img src={rental.image_url} alt={rental.name} className="w-full h-48 object-cover rounded-md" />
            <h2 className="text-xl font-semibold mt-2">{rental.name}</h2>
            <p className="text-gray-600 dark:text-gray-400 mt-1">Author: {rental.author}</p>
            <p className="text-gray-600 dark:text-gray-400 mt-1">Genre: {rental.genre}</p>
            <p className="text-gray-600 dark:text-gray-400 mt-1">Publication Year: {rental.publication_year}</p>
            <p className="text-gray-600 dark:text-gray-400 mt-1">Rented On: {rental.rented_on}</p>
            <p className="text-gray-600 dark:text-gray-400 mt-1">Due Date: {rental.due_date}</p>
            <div className="mt-2 flex justify-between items-center">
              <button className="bg-primary text-white py-1 px-4 rounded-full">Return</button>
              <button className="bg-secondary text-white py-1 px-4 rounded-full">Renew</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyRentals;
