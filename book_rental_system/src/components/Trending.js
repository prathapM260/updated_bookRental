import React from 'react';

const trendingBooks = [
  {
    id: 1,
    title: 'Trending Book 1',
    author: 'Author A',
    rating: 4.2,
    image: 'https://img1.od-cdn.com/ImageType-400/6645-1/FF5/700/97/%7BFF570097-EF1B-4A7C-9456-17812A141DED%7DImg400.jpg',
  },
  {
    id: 2,
    title: 'Trending Book 2',
    author: 'Author B',
    rating: 4.8,
    image: 'https://ttpl.imgix.net/9789357789783L.jpg',
  },
  {
    id: 3,
    title: 'Trending Book 3',
    author: 'Author C',
    rating: 4.5,
    image: 'https://th.bing.com/th/id/OIP.CnDejmgjk8E7U-KgbiZh6QAAAA?rs=1&pid=ImgDetMain',
  },
  {
    id: 4,
    title: 'Trending Book 4',
    author: 'Author D',
    rating: 4.3,
    image: 'https://images-platform.99static.com/DixuEaqjD3wVuuXfhlSUgXdgi-M=/0x7:1992x1999/fit-in/500x500/projects-files/72/7213/721399/203d4dad-c323-42ba-8d97-fadce7c04159.jpg',
  },
  {
    id: 5,
    title: 'Trending Book 5',
    author: 'Author E',
    rating: 4.7,
    image: 'https://th.bing.com/th/id/OIP.LQqfTc7ELxKW3JlZmL-JiAAAAA?w=419&h=630&rs=1&pid=ImgDetMain',
  },
  {
    id: 6,
    title: 'Trending Book 6',
    author: 'Author F',
    rating: 4.4,
    image: 'https://th.bing.com/th/id/OIP.B-IfEP7GQH8voLHDW1XepwHaJp?w=477&h=621&rs=1&pid=ImgDetMain',
  },
  {
    id: 7,
    title: 'Trending Book 7',
    author: 'Author G',
    rating: 4.6,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 8,
    title: 'Trending Book 8',
    author: 'Author H',
    rating: 4.1,
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 9,
    title: 'Trending Book 9',
    author: 'Author I',
    rating: 4.5,
    image: 'https://via.placeholder.com/150',
  },
];

const TrendingSection = () => {
  const handleBookClick = (id) => {
    console.log(`Book clicked: ${id}`);
    // Add your book click logic here
  };

  return (
    <div id="trending" className="flex flex-col items-center mt-0 py-10 shadow-md bg-gradient-to-b from-primary via-[#ffffff] to-white  dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 dark:text-white text-black">
      <div className="container mx-auto">
        <h2 className="text-4xl mb-8 font-bold text-center dark:text-white text-black">Trending Books</h2>
        <div className="overflow-x-auto scrollbar-hidden w-full">
          <div className="flex space-x-4 w-max">
            {trendingBooks.map((book) => (
              <div
                key={book.id}
                className="flex-shrink-0 bg-white dark:bg-gray-800 dark:text-white rounded-lg overflow-hidden shadow-md cursor-pointer w-52 h-67"
                onClick={() => handleBookClick(book.id)}
              >
                <img src={book.image} alt={book.title} className="w-full h-[300px] object-cover rounded-md shadow-md" />
                <div className="p-2">
                  <p className="text-center mt-0.5 text-black dark:text-white">{book.title}</p>
                  <p className="text-center text-sm text-gray-500 dark:text-gray-300">{book.author}</p>
                  <p className="text-center text-sm text-yellow-500">{`Rating: ${book.rating}`}</p>
                </div>
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

export default TrendingSection;
