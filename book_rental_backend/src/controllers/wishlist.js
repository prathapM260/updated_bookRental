const Wishlist = require("../models/Wishlist");

// Add a book to the wishlist
exports.addToWishlist = async (req, res) => {
  const { userId, name, image_url, author, genre } = req.body;
  console.log("Request body:", req.body);

  try {
    // Find or create the user's wishlist
    let wishlist = await Wishlist.findOneAndUpdate(
      { userId },
      { $setOnInsert: { userId, items: [] } },
      { new: true, upsert: true }
    );

    // Check if the book is already in the wishlist
    const bookExists = wishlist.items.some(
      (item) => item.name === name && item.author === author
    );

    if (bookExists) {
      return res.status(400).json({ message: 'Book already in wishlist' });
    }

    // Add the book to the wishlist
    wishlist.items.push({ name, image_url, author, genre });
    await wishlist.save();

    return res.status(200).json({ message: 'Book added to wishlist successfully', wishlist });
  } catch (error) {
    console.error('Error adding book to wishlist:', error);
    return res.status(500).json({ message: 'Failed to add book to wishlist' });
  }
};

// Get the wishlist for a user
exports.getWishlist = async (req, res) => {
  const { userId } = req.params;

  try {
    const wishlist = await Wishlist.findOne({ userId });

    if (!wishlist || wishlist.items.length === 0) {
      return res.status(404).json({ message: 'Wishlist is empty' });
    }

    return res.status(200).json(wishlist);
  } catch (error) {
    console.error('Error retrieving wishlist:', error);
    return res.status(500).json({ message: 'Failed to retrieve wishlist' });
  }
};

// Remove a book from the wishlist
exports.removeFromWishlist = async (req, res) => {
  const { userId, itemId } = req.body;

  try {
    const wishlist = await Wishlist.findOne({ userId });

    if (!wishlist) {
      return res.status(404).json({ message: 'Wishlist not found' });
    }

    // Remove the item from the wishlist
    const updatedItems = wishlist.items.filter(
      (item) => item._id.toString() !== itemId
    );

    // Check if any item was actually removed
    if (updatedItems.length === wishlist.items.length) {
      return res.status(404).json({ message: 'Item not found in wishlist' });
    }

    wishlist.items = updatedItems;
    await wishlist.save();

    return res.status(200).json({
      message: 'Item removed from wishlist successfully',
      wishlist,
    });
  } catch (error) {
    console.error('Error removing item from wishlist:', error);
    return res.status(500).json({ message: 'Failed to remove item from wishlist' });
  }
};
