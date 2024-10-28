import React, { useState } from "react";
import AddBookForm from "./AddBookForm";
import axios from "axios";

const MainAdmin = () => {
  const [deleteName, setDeleteName] = useState("");
  const [scrollToAdd, setScrollToAdd] = useState(false);
  const [scrollToDelete, setScrollToDelete] = useState(false);

  const handleDeleteChange = (e) => {
    setDeleteName(e.target.value);
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      await axios.delete(`http://localhost:5000/api/books/delete/${deleteName}`);
      alert("Book deleted successfully!");
      setDeleteName("");
    } catch (error) {
      console.error("Error deleting book:", error);
      alert("Failed to delete book.");
    }
  };

  const handleScroll = (section) => {
    if (section === "add") {
      setScrollToAdd(true);
      setScrollToDelete(false);
      setTimeout(() => {
        document.getElementById("addBookForm").scrollIntoView({ behavior: "smooth" });
        setScrollToAdd(false);
      }, 100);
    } else if (section === "delete") {
      setScrollToDelete(true);
      setScrollToAdd(false);
      setTimeout(() => {
        document.getElementById("deleteBookForm").scrollIntoView({ behavior: "smooth" });
        setScrollToDelete(false);
      }, 100);
    }
  };

  return (
    <div className=" mt-[75px] w-full bg-primary/40 dark:bg-gray-900 dark:text-white"> 
      <h1 className="text-3xl font-bold text-center mt-4 mb-10">Admin Dashboard</h1>

      <div className="flex justify-center space-x-4 mb-10">
        <button
          onClick={() => handleScroll("add")}
          className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300 dark:bg-green-600 dark:hover:bg-green-700"
        >
          Add Book
        </button>
        <button
          onClick={() => handleScroll("delete")}
          className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300 dark:bg-red-600 dark:hover:bg-red-700"
        >
          Delete Book
        </button>
      </div>

      <div className="flex flex-col items-center space-y-10">
        {/** Add Book Form Section */}
        <div id="addBookForm" className="w-full max-w-xl bg-white p-6 shadow-md rounded-md dark:bg-gray-800">
          <h2 className="text-2xl font-semibold mb-6 dark:text-gray-200">Add New Book</h2>
          <AddBookForm />
        </div>

        {/** Delete Book Section */}
        <div id="deleteBookForm" className="w-full max-w-xl bg-white p-6 shadow-md rounded-md dark:bg-gray-800">
          <h2 className="text-2xl font-semibold mb-6 dark:text-gray-200">Delete Book</h2>
          <form onSubmit={handleDelete}>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-200">Book Name to Delete</label>
              <input
                type="text"
                name="deleteName"
                value={deleteName}
                onChange={handleDeleteChange}
                className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition duration-300 dark:bg-red-500 dark:hover:bg-red-600"
            >
              Delete Book
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MainAdmin;
