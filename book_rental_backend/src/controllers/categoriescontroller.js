
const Book = require('../models/Book');
const Category = require('../models/Category');

// GET all categories
const getAllCates = async (req, res) => {
  try {
    const categories = await Category.find(); // Fetch all categories from MongoDB
    console.log('Categories fetched:', categories); // Log categories fetched
    res.json(categories);
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ message: error });
  }
}

// Create categories based on genres
const addCate = async (req, res) => {
  try {

    const { name, description  } = req.body;
    const newcate = await Category.create({ name, description });
    console.log('Category created:', newcate);
    res.json({ message: `${name} category created successfully` });

  } catch (error) {
    console.error('Error creating categories from genres:', error);
    res.status(500).json({ message: 'Failed to create categories from genres' });
  }
}

module.exports = {
    getAllCates,
    addCate
}
