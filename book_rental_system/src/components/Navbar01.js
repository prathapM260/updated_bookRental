import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { FaBars } from 'react-icons/fa';

const Menu = [
  { id: 1, name: 'Home', link: '/' },
  { id: 2, name: 'Trending', link: 'trending' },
  { id: 3, name: 'New Arrivals', link: 'newarrivalbooks' },
  { id: 4, name: 'Top Rated', link: 'topRatedSection' },
  { id: 5, name: 'Recommendation', link: 'recommendations' },
  { id: 6, name: 'Authors', link: 'authorSection' },
  { id: 7, name: 'Contact Us', link: 'footer' },
  { id: 8, name: 'About Us', link: 'footer' },
  { id: 9, name: 'FAQs', link: 'faqs' },
];

const Navbar01 = ({ showMenu, toggleMenu }) => {
  return (
    <div className="mt-16 shadow-md"> {/* Added shadow for better view */}
      {/* Hamburger menu for mobile */}
      <div className="sm:hidden">

        {showMenu && (
          <ul className="absolute items-center justify-center z-10 top-full right-0 mt-2 bg-white dark:bg-gray-900 rounded-lg shadow-lg py-2 w-[250px] space-y-2">
            {Menu.map((menu) => (
              <li
                key={menu.id}
                className="px-4 py-2 rounded-md text-sm justify-center text-black dark:text-white hover:bg-primary hover:shadow-lg transition-all duration-200 cursor-pointer"
              >
                {menu.name === 'Home' ? (
                  <a href={menu.link}>{menu.name}</a>
                ) : (
                  <ScrollLink
                    to={menu.link}
                    smooth={true}
                    duration={500}
                    className="block cursor-pointer justify-center"
                    onClick={toggleMenu}
                  >
                    {menu.name}
                  </ScrollLink>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Add Genres menu for desktop */}
      <ul className="items-center justify-center hidden sm:flex gap-4 mx-auto mt-4 dark:bg-slate-400 shadow-md rounded-lg p-2">
        {Menu.map((menu) => (
          <li
            key={menu.id}
            className="px-4 py-2 items-center justify-center rounded-md text-sm text-black dark:text-black hover:bg-primary hover:shadow-lg transition-all duration-200 cursor-pointer"
          >
            {menu.name === 'Home' ? (
              <a href={menu.link}>{menu.name}</a>
            ) : (
              <ScrollLink
                to={menu.link}
                smooth={true}
                duration={500}
                className="block cursor-pointer justify-center"
              >
                {menu.name}
              </ScrollLink>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar01;
