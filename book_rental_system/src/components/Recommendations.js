import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Recommendations = () => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    // Fetch recommendations from an API or a static data source
    const fetchRecommendations = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/recommendations');
        setRecommendations(response.data);
      } catch (error) {
        console.error('Error fetching recommendations:', error);
      }
    };

    fetchRecommendations();
  }, []);

  return (
    <div id="recommendations" className="container mx-auto p-4 bg-gray-100 dark:bg-gray-900 dark:text-white">
      <h1 className="text-2xl font-bold mb-4">Book Recommendations</h1>
      <p className="mb-4">
        Welcome to our book rental system! Here are some book recommendations for you. Our collection features a variety of genres, including fiction, non-fiction, mystery, adventure, and more. Whether you're looking for a thrilling read or a motivational guide, we've got something for everyone. Rent your favorite books and enjoy reading at your own pace.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {recommendations.map((book) => (
          <div key={book.id} className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4">
            <img src={book.image_url} alt={book.name} className="w-full h-48 object-cover rounded-md" />
            <h2 className="text-xl font-semibold mt-2">{book.name}</h2>
            <p className="text-gray-600 dark:text-gray-400 mt-1">Author: {book.author}</p>
            <p className="text-gray-600 dark:text-gray-400 mt-1">Genre: {book.genre}</p>
            <p className="text-gray-600 dark:text-gray-400 mt-1">Publication Year: {book.publication_year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
