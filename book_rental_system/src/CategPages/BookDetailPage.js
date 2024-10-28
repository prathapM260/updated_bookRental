import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';  // Include useNavigate hook

const NewArrivalBooks = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();  // Initialize useNavigate hook

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

  // Handler to navigate to book detail page
  const handleNavigateToBookDetail = (bookId) => {
    navigate(`/books/${bookId}`);  // Navigate to BookDetailPage with the book ID
  };

  return (
    <div id="newarrivalbooks" className="flex flex-col items-center mt-16 py-10 shadow-md bg-gray-100 dark:bg-gray-700 dark:text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl mb-8 text-black font-bold text-center">New Arrivals</h2>
        <div className="overflow-x-auto scrollbar-hidden">
          <div className="flex space-x-4">
            {books.map((book) => (
              <div
                key={book._id}
                onClick={() => handleNavigateToBookDetail(book._id)}  // Add onClick to handle navigation
                className="flex-shrink-0 bg-white rounded-lg overflow-hidden shadow-md cursor-pointer w-52 h-70"
              >
                <img
                  src={book.image_url}
                  alt={book.name}
                  className="w-full h-[300px] object-cover rounded-md shadow-md"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    
        <button className="mt-8 text-black py-2 px-4 rounded border dark:hover:text-black dark:hover:bg-primary dark:text-white border-black">
          Explore More
        </button>
      
    </div>
  );
};

export default NewArrivalBooks;
