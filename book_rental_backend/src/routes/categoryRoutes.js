const express = require('express');
const router = express.Router();
const { getAllCates, addCate } = require('../controllers/categoriescontroller');

// GET all categories
router.get('/', getAllCates); 
// Create categories based on genres
router.post('/create-categories', addCate);

module.exports = router;
