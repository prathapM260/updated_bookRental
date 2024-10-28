// src/controllers/bookController.js

const Book = require('../models/Book');
const fs = require('fs');
const path = require('path');

// Controller functions
const getAllBooks =  async (req, res) => {
    const { category } = req.query; // Using req.query to get category from query parameters
  
    try {
        let books = await Book.find();
        if(category) books = await Book.find({ genre: category }); // Assuming 'genre' is the field for category/genre in your Book model
        console.log(category)
        res.status(200).json(books);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
}

// const createBook = async (req, res) => {
//   const { title, author, genre } = req.body;
//   const newBook = new Book({ title, author, genre });

//   try {
//     const savedBook = await newBook.save();
//     res.status(201).json(savedBook);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// };



// Function to load books from JSON files into MongoDB
const loadBooks = async (req, res) => {
  const booksDir = path.join(__dirname, '../books');

  try {
    const files = fs.readdirSync(booksDir);

    for (const file of files) {
      const filePath = path.join(booksDir, file);
      const books = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

      for (const bookData of books) {
        const book = new Book(bookData);
        await book.save();
      }
    }

    res.status(200).json({ message: 'Books loaded successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


//Admin Dashboard Controllers
const createBook = async (req, res) => {
  const { name, image_url, ratings,  description, author, genre, publication_year } = req.body;

  // Create a new Book instance with all the fields......
  const newBook = new Book({
    name,
    image_url,
    ratings,
    // views,
    description,
    author,
    genre,
    publication_year,
  });

  try {
    // Save the new book to the database
    const savedBook = await newBook.save();
    console.log(savedBook);
    res.status(201).json(savedBook); // Respond with the saved book data
  } catch (err) {
    res.status(400).json({ message: err.message }); // Respond with error if any
  }
};


// Delete a book by its name
const deleteBookByName = async (req, res) => {
  const { name } = req.params; // Extract book name from URL parameters

  try {
    // Find the book by name and delete it
    const deletedBook = await Book.findOneAndDelete({ name });

    // If the book was not found, return an error response
    if (!deletedBook) {
      return res.status(404).json({ message: "Book not found" });
    }

    // Return a success message when the book is deleted
    res.status(200).json({ message: "Book deleted successfully", book: deletedBook });
  } catch (err) {
    res.status(500).json({ message: "Error deleting book", error: err.message });
  }
};


module.exports = {
    getAllBooks,
    createBook,
    loadBooks,
    deleteBookByName
}

