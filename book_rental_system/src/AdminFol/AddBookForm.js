import React, { useState } from "react";
import axios from "axios";

const AddBookForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    image_url: "",
    ratings: "",
    views: "",
    description: "",
    author: "",
    genre: "",
    publication_year: "",
  });
  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
      setFormData({ ...formData, image_url: imageUrl });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/books/create", formData); // Adjust API endpoint as needed
      alert("Book added successfully!");
      setFormData({
        name: "",
        image_url: "",
        ratings: "",
        views: "",
        description: "",
        author: "",
        genre: "",
        publication_year: "",
      });
      setImagePreview(null);
    } catch (error) {
      console.error("Error adding book:", error);
      alert("Failed to add book.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md space-y-4 dark:bg-gray-800 dark:text-white md:max-w-2xl lg:max-w-3xl"
    >
      <div>
        <label className="block text-gray-700 font-semibold dark:text-gray-200">
          Book Name:
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700 font-semibold dark:text-gray-200">
          Cover Image:
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          required
        />
      </div>
      {imagePreview && (
        <div className="mb-4">
          <img
            src={imagePreview}
            alt="Cover Preview"
            className="w-full h-auto rounded-md mt-2"
          />
        </div>
      )}
      <div>
        <label className="block text-gray-700 font-semibold dark:text-gray-200">
          Ratings:
        </label>
        <input
          type="number"
          name="ratings"
          value={formData.ratings}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          required
          min="0"
          max="5"
          step="0.1"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-semibold dark:text-gray-200">
          Description:
        </label>
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700 font-semibold dark:text-gray-200">
          Author:
        </label>
        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700 font-semibold dark:text-gray-200">
          Genre:
        </label>
        <input
          type="text"
          name="genre"
          value={formData.genre}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700 font-semibold dark:text-gray-200">
          Publication Year:
        </label>
        <input
          type="number"
          name="publication_year"
          value={formData.publication_year}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          required
          min="1000"
          max={new Date().getFullYear()}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300 dark:bg-blue-500 dark:hover:bg-blue-600"
      >
        Create Book
      </button>
    </form>
  );
};

export default AddBookForm;
