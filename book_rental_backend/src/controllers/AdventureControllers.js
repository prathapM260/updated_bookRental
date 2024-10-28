// src/controllers/AdventureControllers.js

const Book = require('../models/Book');

// Function to fetch Adventure books
exports.getAdventureBooks = async (req, res) => {
  try {
    const books = await Book.find({ genre: 'Adventure' });
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
