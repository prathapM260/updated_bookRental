import React from 'react';

const authors = [
  {
    id: 1,
    name: 'Vivek Spofford',
    image: 'https://i.pinimg.com/originals/85/8a/ec/858aec951dd6dc4f8311f81fb4760c3f.jpg',
    achievements: 'Grammy award, author of mystery novels.',
    ratings: 5,
    description: 'Loved this seductively suspenseful book with brave characters! Snap Decision is a must-read for lovers of a great plot twist.',
    reviewer: 'Michael Welch'
  },
  {
    id: 2,
    name: 'Mark Philips',
    image: 'https://alchetron.com/cdn/carlos-arias-navarro-7a831570-d29f-4120-9cf5-e45bdda0d56-resize-750.jpg',
    achievements: 'Oscar-winning author of mystery novels.',
    ratings: 5,
    description: 'Famous authors and the best writers of all time. Their must-read literary masterpieces have left a lasting impact and shaped literature twists.',
    reviewer: 'Venkatesh'
  },
  {
    id: 3,
    name: 'Mary Thomas',
    image: 'https://th.bing.com/th/id/OIP.aDDnYE9lhJfWoK-X-FY9EQHaLG?rs=1&pid=ImgDetMain',
    achievements: 'Best-selling author of mystery novels.',
    ratings: 5,
    description: 'Known for horror and suspense novels! Snap Decision is a must-read for lovers of a great plot twist.',
    reviewer: 'Mr. Srinivas'
  },
  // Add more authors as needed
];

const AuthorSection = () => {
  return (
    <div
      id="authorSection"
      className="flex flex-col items-center py-10 shadow-lg bg-gray-100 dark:bg-gradient-to-b dark:from-gray-700 dark:via-gray-800 dark:to-gray-900 text-black dark:text-white"
    >
      <h2 className="text-4xl mb-8 text-black dark:text-white">Featured Authors</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {authors.map(author => (
          <div
            key={author.id}
            className="flex bg-white dark:bg-gray-800 rounded-md cursor-pointer shadow-md overflow-hidden"
          >
            <img src={author.image} alt={author.name} className="w-[150px] h-[200px] object-cover" />
            <div className="p-4 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">{author.name}</h3>
                <div className="flex items-center mt-2">
                  {Array(author.ratings).fill(0).map((_, index) => (
                    <span key={index} className="text-yellow-500">&#9733;</span>
                  ))}
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-300">{author.achievements}</p>
                <p className="mt-2 text-sm text-gray-700 dark:text-gray-200 line-clamp-4">{author.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-8 py-2 px-4 rounded border dark:bg-gray-800 dark:border-gray-700 dark:text-white text-black border-black dark:hover:bg-primary dark:hover:text-black">
        Explore More
      </button>
    </div>
  );
};

export default AuthorSection;
