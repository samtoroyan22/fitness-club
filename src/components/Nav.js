import React from 'react';
import { Link } from 'react-scroll';
import { nav } from '../data';

const Nav = () => {
  return (
    <nav className='hidden lg:flex'>
      <ul className='flex text-white gap-x-8'>
        {nav.map((item, idx) => (
          <li key={idx}>
            <Link
              to={item.href}
              spy={true}
              smooth={true}
              duration={700}
              className='hover:text-primary-200 hover:cursor-pointer transition'
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
