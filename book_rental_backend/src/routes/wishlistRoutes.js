// routes/wishlistRoutes.js
const express = require('express');
const router = express.Router();
const wishlistController = require('../controllers/wishlist');

router.post('/add', wishlistController.addToWishlist);
router.get('/:userId', wishlistController.getWishlist);
router.post('/remove', wishlistController.removeFromWishlist); // Route for removing an item from the wishlist

module.exports = router;
