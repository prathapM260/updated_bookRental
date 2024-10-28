const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  name: { type: String, required: true },
  image_url: { type: String, required: true },
  ratings: { type: Number, required: true },
  // views: { type: Number, required: true },
  description: { type: String, required: true },
  author: { type: String, required: true },
  genre: { type: String, required: true },
  publication_year: { type: Number, required: true },
  // You can add more fields as needed
});

module.exports = mongoose.model('Book', bookSchema);
