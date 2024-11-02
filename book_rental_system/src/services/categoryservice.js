import axios from 'axios';

const API_URL = 'https://updated-bookrental-2.onrender.com/api/categories';

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
