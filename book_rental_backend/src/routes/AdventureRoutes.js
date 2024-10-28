// src/routes/AdventureRoutes.js

const express = require('express');
const { getAdventureBooks } = require('../controllers/AdventureControllers');
const router = express.Router();

// Endpoint to fetch Adventure books
router.get('/', getAdventureBooks);

module.exports = router;

