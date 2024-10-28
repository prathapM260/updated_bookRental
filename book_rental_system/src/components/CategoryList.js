import React, { useEffect, useState } from 'react';
import { fetchCategories } from '../services/categoryservice';

const CategoryList = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    getCategories();
  }, []);

  if (loading) return <p>Loading categories...</p>;
  if (error) return <p>Error loading categories: {error.message}</p>;

  return (
    <div data-aos="fade-up">
      <h2>Book Categories</h2>
      <ul>
        {categories.map(category => (
          <li data-aos="fade-up"
           key={category._id}>
            <h3>{category.name}</h3>
            <p>{category.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
