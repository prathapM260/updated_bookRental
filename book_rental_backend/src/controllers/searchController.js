// src/controllers/searchController.js

const Book = require('../models/Book');

// Controller to handle search and filtering of books
const searchBooks = async (req, res) => {
    const { name, category, search } = req.query; // Getting name, category, and search query from query parameters

    try {
        let query = {}; // Initialize an empty query object

        // If category is present, filter books by category
        if (category) {
            query.genre = category; // Assuming 'genre' is the category field in your Book model
        }

        // If search query is present, filter books by name, author, or genre (case-insensitive)
        if (search) {
            query.$or = [
                { name: { $regex: search, $options: 'i' } },  // Search by name (title)
                { author: { $regex: search, $options: 'i' } }, // Search by author
                { genre: { $regex: search, $options: 'i' } }   // Search by genre
            ];
        }

        // If the name parameter is provided, filter specifically by name
        if (name) {
            query.name = { $regex: name, $options: 'i' }; // Search by name (case-insensitive)
        }

        console.log('MongoDB Query:', JSON.stringify(query, null, 2)); // Log the query

        const books = await Book.find(query); // Query the database with filters
        res.status(200).json(books);
    } catch (err) {
        console.error('Error fetching books:', err); // Log any errors
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    searchBooks
};
