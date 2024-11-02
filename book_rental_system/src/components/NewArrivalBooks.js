// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';

// const NewArrivalBooks = () => {
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     const fetchBooks = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/books?category=Thriller');
//         setBooks(response.data);
//       } catch (error) {
//         console.error('Failed to fetch new arrival books:', error);
//       }
//     };

//     fetchBooks();
//   }, []);

//   return (
//     <div  id="newarrivalbooks" className="flex flex-col items-center mt-16 py-10 shadow-md bg-gray-100 dark:bg-gray-700 dark:text-white">
//       <div className="container mx-auto">
//         <h2 className="text-4xl mb-8 text-black font-bold text-center">New Arrivals</h2>
//         <div className="overflow-x-auto scrollbar-hidden">
//           <div className="flex space-x-4">
//             {books.map((book) => (
//               <div key={book._id} className="flex-shrink-0 bg-white rounded-lg overflow-hidden shadow-md cursor-pointer w-52 h-70">
//                 <img src={book.image_url} alt={book.name} className="w-full h-[300px] object-cover rounded-md shadow-md" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <Link to="/newarrivalfullpage">
//         <button className="mt-8 text-black py-2 px-4 rounded border dark:hover:text-black dark:hover:bg-primary dark:text-white border-black">
//           Explore More
//         </button>
//       </Link>
//     </div>
//   );
// };

// export default NewArrivalBooks;







import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';

const NewArrivalBooks = () => {
  const { id: category } = useParams();
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('https://updated-bookrental-2.onrender.com/api/books?category=Thriller');
        setBooks(response.data);
      } catch (err) {
        setError('Failed to fetch new arrival books');
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const handleBookClick = (id) => {
    navigate(`/book/${id}`);
  };

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen">Error: {error}</div>;
  }

  return (
    <div id="newArrivalSection" className="flex flex-col items-center mt-0 py-10 shadow-md bg-gradient-to-b from-primary via-[#ffffff] to-white  dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 dark:text-white text-black">
      <div className="container mx-auto">
        <h2 className="text-4xl mb-8 font-bold text-center dark:text-white text-black">New Arrivals</h2>
        <div className="overflow-x-auto scrollbar-hidden w-full">
          <div className="flex space-x-4 w-max mx-auto">
            {books.map((book) => (
              <div
                key={book._id}
                className="flex-shrink-0 w-52 h-70 cursor-pointer bg-white dark:bg-gray-800 dark:text-white rounded-lg overflow-hidden shadow-md"
                onClick={() => handleBookClick(book._id)}
              >
                <img
                  src={book.image_url}
                  alt={book.name}
                  className="w-full h-[300px] object-cover rounded-md shadow-md"
                />
                <div className="mt-0 p-0 text-center">
                  <h2 className="text-xl font-semibold">{book.name}</h2>
                  <p><strong>Ratings:</strong> {book.ratings}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-8">
          <Link to="/newarrivalfullpage">
            <button className="text-black py-2 px-4 rounded border dark:hover:text-black dark:hover:bg-primary dark:text-white border-black">
              Explore More
            </button>
          </Link>
        </div>
      </div>
      <style jsx>{`
        .scrollbar-hidden::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hidden {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default NewArrivalBooks;
