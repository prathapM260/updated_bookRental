import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaBook, FaFilm, FaMusic, FaPaintBrush, FaRunning } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const GenreComp = () => {
  const [genres, setGenres] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [hoveredGenre, setHoveredGenre] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/categories');
        console.log('Fetched genres:', response.data);
        setGenres(response.data);
      } catch (error) {
        console.error('Error fetching genres:', error);
      }
    };

    fetchGenres();
  }, []);

  const genreIcons = {
    'Books': <FaBook size={24} />,
    'Movies': <FaFilm size={24} />,
    'Music': <FaMusic size={24} />,
    'Art': <FaPaintBrush size={24} />,
    'Sports': <FaRunning size={24} />,
  };

  const genreImages = {
    adventure: ['/adventure2.webp', '/adventure-hero.jpg', '/adventure3.jpeg'],
    arts: ['/arts1.webp', '/arts2.jpeg', '/arts3.jpeg'],
    detective: ['/detective1.jpg', '/detective2.jpg', '/detective3.jpg'],
    biography: ['/bio1.jpeg', '/bio2.webp', '/bio3.webp'],
    cooking: ['/cooking1.jpeg', '/cooking2.jpeg'],
    crime: ['/crime1.jpeg', '/crime2.jpg'],
    fantasy: ['/fantasy1.jpeg', '/fantasy2.jpeg', '/fantasy3.jpeg'],
    fiction: ['/fiction1.png', '/fiction2.jpg'],
    history: ['/history1.jpeg', '/history2.jpeg'],
    mystery: ['/mystery1.jpg', '/mystery2.png'],
    motivation: ['/motivation.jpeg', '/motivation2.jpeg', '/motivation3.jpg'],
    personalDevelopment: ['/pd1.jpg', '/pd2.png', '/pd3.avif'],
    thriller: ['/thriller1.jpeg', '/thriller2.jpeg']
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleCategoryClick = (genreName) => {
    navigate(`/category/${genreName}`);
  };

  const handleMouseEnter = (genreName) => {
    setHoveredGenre(genreName);
  };

  const handleMouseLeave = () => {
    setHoveredGenre(null);
  };

  return (
    <div className="mt-[50px] w-full flex space-x-0 bg-gradient-to-t dark:text-white from-primary to-white dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 shadow-lg pl-0 px-0">
      <div className="flex space-x-4 space-y-2 overflow-x-auto w-full mt-[15px] scrollbar-hidden dark:from-gray-700 dark:via-gray-800 dark:to-gray-900">
        {genres.length > 0 ? (
          genres.map((genre) => {
            const images = genreImages[genre.name.toLowerCase()] || [];
            const currentImage = images[currentImageIndex % images.length];

            return (
              <div 
                key={genre.id} 
                className="flex flex-col items-center w-24 relative cursor-pointer" // Adjust width to fit better on mobile
                onClick={() => handleCategoryClick(genre.name)}
                onMouseEnter={() => handleMouseEnter(genre.name)}
                onMouseLeave={handleMouseLeave}
              >
                <div 
                  className={`w-16 h-16 bg-gray-200 rounded-full dark:bg-gray-800 dark:text-white flex items-center justify-center mb-2 overflow-hidden transition-transform duration-300 ease-in-out ${
                    hoveredGenre === genre.name ? 'scale-125' : 'scale-100'
                  }`}
                >
                  {currentImage ? (
                    <img 
                      src={currentImage} 
                      alt={genre.name} 
                      className="object-cover w-full h-full rounded-full"
                    />
                  ) : (
                    genreIcons[genre.name] || <FaBook size={24} />
                  )}
                </div>
                <span className="text-sm text-center">{genre.name}</span>
              </div>
            );
          })
        ) : (
          <div className="px-2 py-1 dark:text-white">No genres available</div>
        )}
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

export default GenreComp;
