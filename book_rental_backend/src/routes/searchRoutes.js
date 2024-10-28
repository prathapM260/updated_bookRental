// src/routes/searchRoutes.js

const express = require('express');
const { searchBooks } = require('../controllers/searchController');
const router = express.Router();

// Route for searching books with optional category and search query
router.get('/', searchBooks);

module.exports = router;
