const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const wishlistItemSchema = new Schema({
  name: { type: String, required: true },
  image_url: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String, required: true }
});

const wishlistSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  items: [wishlistItemSchema]
});

const Wishlist = mongoose.model('Wishlist', wishlistSchema);

module.exports = Wishlist;
