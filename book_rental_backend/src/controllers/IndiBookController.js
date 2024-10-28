// src/controllers/IndiBookController.js

const Book = require('../models/Book');

// Controller functions
const getBookById = async (req, res) => {
  const { id } = req.params;
  console.log(`Fetching book with ID: ${id}`); // Add this line
  
  try {
    const book = await Book.findById(id);
    if (!book) {
      console.log('Book not found'); // Add this line
      return res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json(book);
  } catch (err) {
    console.error(err); // Add this line
    res.status(500).json({ error: err.message });
  }
};

const updateBookById = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  
  try {
    const book = await Book.findByIdAndUpdate(id, updates, { new: true });
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteBookById = async (req, res) => {
  const { id } = req.params;
  
  try {
    const book = await Book.findByIdAndDelete(id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json({ message: 'Book deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getBookById,
  updateBookById,
  deleteBookById,
};
