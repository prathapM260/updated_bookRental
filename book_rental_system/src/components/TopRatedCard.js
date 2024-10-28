// src/components/TopRatedCard.js

import React from 'react';
import useStore from '../useStore';
const TopRatedCard = ({ book }) => {
 
  return (
    <div className="flex-none w-64 h-96 bg-primary-200 shadow-lg rounded-lg m-4 overflow-hidden">
      <img src={book.image} alt={book.title} className="w-full h-2/3 object-cover" />
      <div className="p-2 bg-transparent text-center mt-6">
        <p className="text-black">{book.author}</p>
        <p className="text-black">Rating: {book.rating}</p>
      </div>
    </div>
  );
};

export default TopRatedCard;
