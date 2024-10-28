// import React from 'react';

// const topRatedBooks = [
//   {
//     id: 1,
//     title: 'Book Title 1',
//     author: 'Author 1',
//     rating: 4.5,
//     image: 'https://via.placeholder.com/150',
//   },
//   {
//     id: 2,
//     title: 'Book Title 2',
//     author: 'Author 2',
//     rating: 4.7,
//     image: 'https://via.placeholder.com/150',
//   },
//   {
//     id: 3,
//     title: 'Book Title 3',
//     author: 'Author 3',
//     rating: 5.5,
//     image: 'https://via.placeholder.com/150',
//   },
//   {
//     id: 4,
//     title: 'Book Title 4',
//     author: 'Author 4',
//     rating: 5.7,
//     image: 'https://via.placeholder.com/150',
//   },
//   {
//     id: 5,
//     title: 'Book Title 5',
//     author: 'Author 5',
//     rating: 4.5,
//     image: 'https://via.placeholder.com/150',
//   },
//   {
//     id: 6,
//     title: 'Book Title 6',
//     author: 'Author 6',
//     rating: 3.7,
//     image: 'https://via.placeholder.com/150',
//   },
//   {
//     id: 7,
//     title: 'Book Title 7',
//     author: 'Author 7',
//     rating: 4.8,
//     image: 'https://via.placeholder.com/150',
//   },
//   {
//     id: 8,
//     title: 'Book Title 8',
//     author: 'Author 8',
//     rating: 4.9,
//     image: 'https://via.placeholder.com/150',
//   },
// ];

// const TopRatedSection = () => {
//   return (
//     <div id="topRatedSection" className="flex flex-col items-center mt-16 bg-gradient-to-b from-blue-500 to-white py-10 shadow-md">
//       <div className="container mx-auto">
//         <h2 className="text-4xl mb-8 text-white text-center">Top Rated Books</h2>
//         <div className="overflow-x-auto">
//           <div className="flex space-x-4">
//             {topRatedBooks.map((book) => (
//               <div key={book.id}
//                 className="flex-shrink-0 bg-white rounded-lg overflow-hidden shadow-md cursor-pointer w-52 h-70"> {/* Adjusted height */}
//                 <img src={book.image} alt={book.title} className="w-full h-[300px] object-cover rounded-md shadow-md" /> {/* Adjusted height */}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TopRatedSection;


// import React from 'react';

// const topRatedBooks = [
//   {
//     id: 1,
//     title: 'Book Title 1',
//     author: 'Author 1',
//     rating: 4.5,
//     image: 'https://via.placeholder.com/150',
//   },
//   {
//     id: 2,
//     title: 'Book Title 2',
//     author: 'Author 2',
//     rating: 4.7,
//     image: 'https://via.placeholder.com/150',
//   },
//   {
//     id: 3,
//     title: 'Book Title 3',
//     author: 'Author 3',
//     rating: 5.5,
//     image: 'https://via.placeholder.com/150',
//   },
//   {
//     id: 4,
//     title: 'Book Title 4',
//     author: 'Author 4',
//     rating: 5.7,
//     image: 'https://via.placeholder.com/150',
//   },
//   {
//     id: 5,
//     title: 'Book Title 5',
//     author: 'Author 5',
//     rating: 4.5,
//     image: 'https://via.placeholder.com/150',
//   },
//   {
//     id: 6,
//     title: 'Book Title 6',
//     author: 'Author 6',
//     rating: 3.7,
//     image: 'https://via.placeholder.com/150',
//   },
//   {
//     id: 7,
//     title: 'Book Title 7',
//     author: 'Author 7',
//     rating: 4.8,
//     image: 'https://via.placeholder.com/150',
//   },
//   {
//     id: 8,
//     title: 'Book Title 8',
//     author: 'Author 8',
//     rating: 4.9,
//     image: 'https://via.placeholder.com/150',
//   },
// ];

// const TopRatedSection = () => {
//   return (
//     <div id="topRatedSection" className="flex flex-col items-center mt-16 bg-gradient-to-r from-gray-300 to-white py-10 shadow-md">
//       <div className="container mx-auto">
//         <h2 className="text-4xl mb-8 text-black  font-bold text-center">Top Rated Books</h2>
//         <div className="overflow-x-auto scrollbar-hidden">
//           <div className="flex space-x-4">
//             {topRatedBooks.map((book) => (
//               <div key={book.id}
//                 className="flex-shrink-0 bg-white rounded-lg overflow-hidden shadow-md cursor-pointer w-52 h-70"> {/* Adjusted height */}
//                 <img src={book.image} alt={book.title} className="w-full h-[300px] object-cover rounded-md shadow-md" /> {/* Adjusted height */}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TopRatedSection;




import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const TopRatedSection = () => {
  const [topRatedBooks, setTopRatedBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTopRatedBooks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/top-rated');
        setTopRatedBooks(response.data);
        console.log("Data fetched", response);
      } catch (error) {
        console.error('Failed to fetch top-rated books:', error);
      }
    };

    fetchTopRatedBooks();
  }, []);

  const handleBookClick = (id) => {
    navigate(`/book/${id}`);
  };

  return (
    <div id="topRatedSection" className="flex flex-col items-center mt-0 py-10 shadow-md bg-gradient-to-b from-primary via-[#ffffff] to-white  dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 dark:text-white text-black">
      <div className="container mx-auto">
        <h2 className="text-4xl mb-8 font-bold text-center dark:text-white text-black">Top Rated Books</h2>
        <div className="overflow-x-auto scrollbar-hidden w-full">
          <div className="flex space-x-4 w-max">
            {topRatedBooks.map((book) => (
              <div
                key={book._id}
                className="flex-shrink-0 bg-white dark:bg-gray-800 dark:text-white rounded-lg overflow-hidden shadow-md cursor-pointer w-52 h-70"
                onClick={() => handleBookClick(book._id)}
              >
                <img src={book.image_url} alt={book.name} className="w-full h-[300px] object-cover rounded-md shadow-md" />
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        .scrollbar-hidden::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hidden {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </div>
  );
};

export default TopRatedSection;
