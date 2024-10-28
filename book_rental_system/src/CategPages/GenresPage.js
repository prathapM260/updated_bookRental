// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import { useParams } from 'react-router-dom';

// // const AdventuresPage = () => {
// //   const { id: category } = useParams();
// //   const [books, setBooks] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState('');

// //   useEffect(() => {
// //     const fetchBooks = async () => {
// //       try {
// //         const response = await axios.get(`http://localhost:5000/api/books?category=${category}`);
// //         setBooks(response.data);
// //       } catch (err) {
// //         setError('Failed to fetch Adventure books');
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchBooks();
// //   }, [category]);

// //   if (loading) {
// //     return <div>Loading...</div>;
// //   }

// //   if (error) {
// //     return <div>Error: {error}</div>;
// //   }

// //   return (
// //     <div className="flex flex-col items-center mt-16 bg-gradient-to-l from-orange-200 to-primary py-10 shadow-md">
// //       <h2 className="text-4xl mb-8 text-white">Adventure Books</h2>
// //       <div className="grid grid-cols-5 gap-4">
// //         {books.map((book, index) => (
// //           <div key={index} className="w-52 mb-8">
// //             <img
// //               src={book.image_url}
// //               alt={book.name}
// //               className="w-full h-[300px] rounded-md shadow-md"
// //               onError={(e) => (e.target.style.display = 'none')}
// //             />
// //             <div className="mt-2 text-center">
// //               <h2 className="text-xl font-semibold text-black">{book.name}</h2>
// //               <p className="text-black"><strong>Ratings:</strong> {book.ratings}</p>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default AdventuresPage;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// const GenresPage = () => {
//   const { id: category } = useParams();
//   const [books, setBooks] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchBooks = async () => {
//       try {
//         const response = await axios.get(`http://localhost:5000/api/books?category=${category}`);
//         setBooks(response.data);
//         console.log(response);
//       } catch (err) {
//         setError('Failed to fetch Adventure books');
//       } finally {
//         setLoading(false);
//       }
//     };

    

//     fetchBooks();
//   }, [category]);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

  

//   return (
//     <div className="flex flex-col items-center mt-16 bg-gradient-to-l from-orange-200 to-primary py-10 shadow-md">
//       <h2 className="text-4xl mb-8 text-white">Adventure Books</h2>
//       <div className="grid grid-cols-5 gap-4">
//         {books.map((book, index) => (
//           <div key={index} className="w-52 mb-8">
//             <img
//               src={book.image_url}

//               alt={book.name}
//               className="w-full h-[300px] rounded-md shadow-md"
              
//             />
//             <div className="mt-2 text-center">
//               <h2 className="text-xl font-semibold text-black">{book.name}</h2>
//               <p className="text-black"><strong>Ratings:</strong> {book.ratings}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default GenresPage;




import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa'; // Import FontAwesome arrow icon

const GenresPage = () => {
  const { id: category } = useParams();
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/books?category=${category}`);
        setBooks(response.data);
      } catch (err) {
        setError('Failed to fetch books');
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, [category]);

  const handleBookClick = (id) => {
    navigate(`/book/${id}`);
  };

  const handleBackClick = () => {
    navigate(-1); // Navigate back to the previous page
  };

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen">Error: {error}</div>;
  }

  return (
    <div className="flex flex-col mt-16 items-center bg-white py-10 px-4 md:px-10 border-t-4 border-l-2 border-r-2 border-primary">
      <div className="flex items-center shadow-md w-full max-w-7xl mx-auto">
        <button
          className="text-primary mr-4"
          onClick={handleBackClick}
        >
          <FaArrowLeft className="text-2xl " /> {/* Left Arrow Icon */}
        </button>
        <h2 className="text-4xl text-primary pl-[60px] ml-[390px] items-center font-bold bg-gradient-to-r from-primary to-blue-400 text-transparent bg-clip-text">
          {category}
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-7xl mx-auto mt-6">
        {books.map((book) => (
          <Link key={book._id} to={`/book/${book._id}`} className="flex justify-center">
            <div
              className="w-[230px] mb-8 cursor-pointer flex flex-col items-center bg-white shadow-lg rounded-md border border-gray-200 transition-transform transform hover:scale-105"
              onClick={() => handleBookClick(book._id)}
            >
              <img
                src={book.image_url}
                alt={book.name}
                className="w-full h-[240px] rounded-t-md shadow-md object-cover"
              />
              <div className="mt-1 mb-0 text-center w-full p-4">
                <h2 className="text-xl text-black">{book.name}</h2>
                <p className="text-black"><strong>Ratings:</strong> {book.ratings}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GenresPage;
