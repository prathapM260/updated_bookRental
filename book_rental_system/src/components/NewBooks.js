import React, { useState, useEffect } from 'react';
import axios from 'axios';

const NewBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/books?category=Thriller');
        setBooks(response.data);
      } catch (error) {
        console.error('Failed to fetch new arrival books:', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div id="newarrivalbooks" className="flex flex-col items-center mt-16 py-10 shadow-md bg-gray-100 dark:bg-gray-700 dark:text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl mb-8 text-black font-bold text-center">New Arrivals</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {books.map((book) => (
            <div key={book._id} className="bg-white rounded-lg overflow-hidden shadow-md cursor-pointer w-full h-auto">
              <img src={book.image_url} alt={book.name} className="w-full h-[300px] object-cover rounded-md shadow-md" />
              <div className="p-4">
                <h3 className="text-lg font-bold">{book.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewBooks;
