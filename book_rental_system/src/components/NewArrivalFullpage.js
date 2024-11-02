import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'aos/dist/aos.css';

const NewArrivalFullpage = () => {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const response = await axios.get('https://updated-bookrental-2.onrender.com/api/books?category=Thriller');
        setBooks(response.data);
      } catch (error) {
        console.error('Failed to fetch all new arrival books:', error);
      }
    };

    fetchAllBooks();
  }, []);

  const handleBookClick = (bookId) => {
    navigate(`/book/${bookId}`);
  };

  return (
    <div data-aos="fade-up" className="container mx-auto mt-16 py-10">
      <h2 className="text-4xl mb-8 font-bold text-center">All New Arrival Books</h2>
      <div className="grid grid-cols-4 gap-4">
        {books.map((book) => (
          <div
            key={book._id}
            className="flex-shrink-0 bg-white rounded-lg overflow-hidden shadow-md cursor-pointer"
            onClick={() => handleBookClick(book._id)}
          >
            <img src={book.image_url} alt={book.name} className="w-full h-[300px] object-cover rounded-md shadow-md" />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-2">{book.name}</h3>
              <p className="text-sm text-gray-500">{book.author}</p>
              <p className="text-sm text-gray-500">{book.genre}</p>
              <p className="text-sm text-gray-500">{book.publication_year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivalFullpage;
