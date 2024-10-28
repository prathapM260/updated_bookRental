import axios from 'axios';

const API_URL = 'http://localhost:5000/api/categories';

export const fetchCategories = async () => {
  try {
    const response = await axios.get(API_URL);
    console.log("checking if api is working or not",response);
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
};
