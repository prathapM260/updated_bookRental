import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

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

const NavbarMenu = ({ toggleMenu }) => (
  <>
    {Menu.map((menu) => (
      <li
        key={menu.id}
        className="px-4 py-2 rounded-md text-sm text-black dark:text-black hover:bg-primary hover:shadow-lg transition-all duration-200 cursor-pointer"
      >
        {menu.name === 'Home' ? (
          <a href={menu.link}>{menu.name}</a>
        ) : (
          <ScrollLink
            to={menu.link}
            smooth={true}
            duration={500}
            className="block cursor-pointer"
            onClick={toggleMenu}
          >
            {menu.name}
          </ScrollLink>
        )}
      </li>
    ))}
  </>
);

export default NavbarMenu;
