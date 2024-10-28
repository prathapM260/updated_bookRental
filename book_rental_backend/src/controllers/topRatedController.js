// src/controllers/topRatedController.js
const Book = require('../models/Book');



// Controller function to fetch top-rated books
const getTopRatedBooks = async (req, res) => {
  try {
    // Fetch books with ratings greater than or equal to 4.6 (adjust as needed)
    const topRatedBooks = await Book.find({ ratings: { $gte: 4.6 } });
    res.json(topRatedBooks);
  } catch (err) {
    console.error('Error fetching top rated books:', err);
    res.status(500).json({ error: 'Failed to fetch top rated books' });
  }
};

module.exports = { getTopRatedBooks };
