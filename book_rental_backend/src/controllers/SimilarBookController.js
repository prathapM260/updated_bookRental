// controllers/SimilarBookController.js

const Book = require('../models/Book');

const getSimilarBooksByGenre = async (req, res) => {
  const { id } = req.params; // Assuming id is the book ID for which you want similar books
  try {
    const book = await Book.findById(id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    const similarBooks = await Book.find({ genre: book.genre, _id: { $ne: book._id } });
    res.status(200).json(similarBooks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getSimilarBooksByGenre,
};
