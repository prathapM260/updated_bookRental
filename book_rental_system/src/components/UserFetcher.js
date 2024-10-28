// src/components/UserFetcher.js

import  { useEffect } from 'react';
import useStore from '../useStore';

const UserFetcher = () => {
  const setUser = useStore(state => state.setUser);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/user');
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
