// bookRoutes.js
// const express = require('express');
// const router = express.Router();
// const Book = require('../models/Book');

// // GET all books
// router.get('/books', async (req, res) => {
//   try {
//     const books = await Book.find();
//     res.json(books);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// });

// module.exports = router;



// src/routes/bookRoutes.js

const express = require('express');
const { loadBooks, getAllBooks,createBook,deleteBookByName } = require('../controllers/bookControllers');
const router = express.Router();

router.get('/load-books', loadBooks);  // Endpoint to load books into MongoDB
router.get('/', getAllBooks);  // Endpoint to fetch books
router.post("/create",createBook);
router.delete("/delete/:name",deleteBookByName)

module.exports = router;
