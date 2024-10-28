// src/routes/topRatedRoutes.js
const express = require('express');
const { getTopRatedBooks } = require('../controllers/topRatedController');
const router = express.Router();

// Route to fetch top-rated books
router.get('/', getTopRatedBooks);

module.exports = router;
