// src/pages/BooksPage.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Searchbar from './searchbar';

const BooksPage = () => {
    const [books, setBooks] = useState([]);  // State to store the books

    // Function to fetch books from the backend with search and category filters
    const fetchBooks = async (searchTerm = '', category = '') => {
        try {
            const response = await axios.get('/api/search', {
                params: {
                    search: searchTerm,
                    category: category
                }
            });
            setBooks(response.data);  // Set the books from the response
        } catch (err) {
            console.error(err);
        }
    };

    // Fetch books when the component mounts
    useEffect(() => {
        fetchBooks();
    }, []);  // Empty dependency array to fetch books on initial load

    return (
        <div>
            {/* Render the SearchBar component and pass fetchBooks as onSearch prop */}
            {/* <Searchbar onSearch={fetchBooks} /> */}

            <div className="book-list">
                {books.map(book => (
                    <div key={book._id} className="book-item">
                        <h3>{book.title}</h3>
                        <p>Author: {book.author}</p>
                        <p>Genre: {book.genre}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BooksPage;
