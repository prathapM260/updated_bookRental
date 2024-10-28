const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// POST /api/signup - Register a new user
router.post('/signup', authController.signUp);

// POST /api/signin - Authenticate user and get token
router.post('/signin', authController.signIn);
router.get('/users', authController.getAllUsers);


module.exports = router;
