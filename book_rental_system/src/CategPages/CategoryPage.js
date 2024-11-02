// src/CategPages/AdventurePage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdventuresPage = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('https://updated-bookrental-2.onrender.com/api/categories/adventures');
        setBooks(response.data);
      } catch (err) {
        setError('Failed to fetch Adventure books');
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Adventure Books</h1>
      <ul>
        {books.map((book) => (
          <li key={book._id}>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <p>{book.genre}</p>
            <p>{book.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdventuresPage;
