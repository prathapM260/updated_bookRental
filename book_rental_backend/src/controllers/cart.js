const Cart = require('../models/cart');

exports.addToCart = async (req, res) => {
  const { userId, name, image_url, author, genre } = req.body;
  console.log("Req body",req.body);

  try {
    // Find the cart for the user
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      // If cart doesn't exist, create a new one
      cart = new Cart({
        userId,
        items: []
      });
    }

    // Check if the book is already in the cart
    const itemIndex = cart.items.findIndex(item => item.name === name && item.author === author);

    if (itemIndex > -1) {
      // If book is already in the cart, you can update quantity or other properties if needed
      return res.status(400).json({ message: 'Book already in cart' });
    } else {
      // If book is not in the cart, add it
      cart.items.push({
        name,
        image_url,
        author,
        genre
      });
    }

    // Save the cart
    await cart.save();

    res.status(200).json({ message: 'Book added to cart successfully', cart });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

exports.getCart = async (req, res) => {
  const { userId } = req.params;

  try {
    // Find the cart for the user
    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    res.status(200).json(cart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};



// New function to remove item from cart
exports.removeFromCart = async (req, res) => {
  const { userId, itemId } = req.body;

  try {
    // Find the cart for the user
    const cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    // Remove the item from the cart
    cart.items = cart.items.filter(item => item._id.toString() !== itemId);
    await cart.save();

    res.status(200).json({ message: 'Item removed from cart successfully', cart });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};