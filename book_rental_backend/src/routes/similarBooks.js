// routes/similarBooks.js

const express = require('express');
const router = express.Router();
const { getSimilarBooksByGenre } = require('../controllers/SimilarBookController');

// Route for fetching similar books
router.get('/:id', getSimilarBooksByGenre); // Use a route like '/api/similar-books/:id' if you want a specific path

module.exports = router;
