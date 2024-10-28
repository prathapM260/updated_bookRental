import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const SearchComponents = () => {
  const [filteredBooks, setFilteredBooks] = useState([]);
  const location = useLocation();

  const searchText = location.state?.searchText || ''; // Get searchText from state

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        // Send a GET request to the backend search API with the search query
        const response = await axios.get('http://localhost:5000/api/search', {
          params: {
            search: searchText, // This can be name, genre, or author
          },
        });

        // Set the filtered books based on the response
        setFilteredBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    if (searchText) {
      fetchBooks(); // Fetch books only when there is a search query
    }
  }, [searchText]);

  return (
    <div className="container mx-auto mt-16 py-10">
      <h2 className="text-4xl mb-8 font-bold text-center">Search Results for "{searchText}"</h2>
      {filteredBooks.length === 0 ? (
        <p className="text-center text-lg">No books found.</p>
      ) : (
        <div className="grid grid-cols-4 gap-4">
          {filteredBooks.map((book) => (
            <div key={book._id} className="flex-shrink-0 bg-white rounded-lg overflow-hidden shadow-md">
              <img
                src={book.image_url}
                alt={book.name}
                className="w-full h-[300px] object-cover rounded-md shadow-md"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">{book.name}</h3>
                <p className="text-sm text-gray-500">{book.author}</p>
                <p className="text-sm text-gray-500">{book.genre}</p>
                <p className="text-sm text-gray-500">{book.publication_year}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchComponents;
