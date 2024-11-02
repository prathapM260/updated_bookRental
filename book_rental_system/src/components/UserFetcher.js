// src/components/UserFetcher.js

import  { useEffect } from 'react';
import useStore from '../useStore';

const UserFetcher = () => {
  const setUser = useStore(state => state.setUser);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('https://updated-bookrental-2.onrender.com/api/user');
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error('Failed to fetch user:', error);
      }
    };

    fetchUser();
  }, [setUser]);

  return null;
};

export default UserFetcher;
