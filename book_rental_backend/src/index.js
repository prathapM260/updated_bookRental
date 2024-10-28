// src/index.js

const express = require('express');
const mongoose = require('mongoose');
const categoriesRouter = require('./routes/categoryRoutes');
const bookRoutes = require('./routes/bookRoutes');
const AdventureRouter = require('./routes/AdventureRoutes');
const indiBookRoutes = require('./routes/IndiBookRoutes'); // Import the new routes
const similarBooksRouter = require('./routes/similarBooks');
const cartRouter=require('./routes/cart');
const topRatedRoutes = require('./routes/topRatedRoutes');
const authRoutes = require('./routes/authRoutes.js');
const wishlistRoutes = require('./routes/wishlistRoutes'); // Import the wishlist routes

require('dotenv').config(); // Load environment variables
//new Major Extension
const searchRoutes = require('./routes/searchRoutes'); // Import the search routes

//major exension
const { mongoURI } = require('./config/db'); // Correct import
const cors = require('cors'); 
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(mongoURI, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes
//major Project Extension routes

app.use('/api/search', searchRoutes);    // Use the search routes

//major Project Extension routes

app.use('/api/books', bookRoutes); // Endpoint to fetch books
app.use('/api/categories', categoriesRouter); // Endpoint to fetch categories
app.use('/api/Adventure', AdventureRouter); // Correct usage of AdventureRouter
app.use('/api/book', indiBookRoutes); // Use the new individual book routes
app.use('/api/similar-books', similarBooksRouter); 
app.use('/api/cart',cartRouter);
app.use('/api/wishlist', wishlistRoutes); // Use the wishlist routes

app.use('/api/user',authRoutes)

app.use('/api/top-rated', topRatedRoutes); // Use the new top-rated routes

// Start server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
