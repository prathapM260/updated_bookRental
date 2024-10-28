// src/routes/IndiBookRoutes.js

const express = require('express');
const {
  getBookById,
  updateBookById,
  deleteBookById,
} = require('../controllers/IndiBookController');

const router = express.Router();

router.get('/:id', getBookById);        // Endpoint to fetch a book by ID
router.put('/:id',updateBookById);     // Endpoint to update a book by ID
router.delete('/:id', deleteBookById);  // Endpoint to delete a book by ID

module.exports = router;
