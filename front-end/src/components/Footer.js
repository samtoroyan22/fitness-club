import React from 'react';
import { footer } from '../data';

const Footer = () => {
  const { logo, copyrightText, icons } = footer;

  return( 
    <footer className='bg-neutral-500'>
      <div className='container mx-auto px-4 py-8 md:px-8'>
        <div className='flex justify-between items-center'>
          <a href='/#'>
            <img src={logo} alt='' />
          </a>
          <div className='flex space-x-4'>
            {icons.map((Icon, index) => (
              <a href='https://www.youtube.com/' target='_blank' key={index} rel="noreferrer">
                <Icon className='w-6 h-6 text-white hover:text-gray-300 transition duration-300' />
              </a>
            ))}
          </div>
        </div>
        <p className='text-sm text-neutral-300 mt-4'>{copyrightText}</p>
      </div>
    </footer>
  );
};

export default Footer;
