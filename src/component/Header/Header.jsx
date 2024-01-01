import React, { useEffect, useState } from 'react';
import icon from "../../assets/icon/icon.svg";
import "./Header.css";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);

    const btn = document.querySelector('#mobile-menu button');
    const menu = document.querySelector('#mobile-menu-content');

    btn.addEventListener('click', () => {
      if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
      } else {
        menu.classList.add('hidden');
      }
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerClassName = `site-header w-100${isScrolled ? ' position-fixed site-header-scrolled' : ''}`;

  return (
    <header className={headerClassName}>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center me-5">
              <a href="/" className="text-white text-2xl font-bold ">
                <img src={icon} width={100} height={80} style={{ margin: '-10px' }} />
              </a>
            </div>
            <div className="hidden lg:flex w-full justify-center">
              <ul className="flex items-center space-x-6 w-full justify-between">
                <li><a href="#" className="text-white hover:text-gray-300">Solution</a></li>
                <li><a href="#" className="text-white hover:text-gray-300">News and Insights</a></li>
                <li><a href="#" className="text-white hover:text-gray-300">About Us</a></li>
                <li><a href="#" className="text-white hover:text-gray-300">Contact Us</a></li>
                <div className='lg:flex space-x-2'>
                  <li><a href="#" title="Sign In" target="_self" className="custom-button">Sign In</a></li>
                  <li><a href="#" title="Join Us" target="_self" className="custom-button">Join Us</a></li>
                </div>
              </ul>
            </div>
            <div className="lg:hidden" id="mobile-menu">
              <button className="block lg:hidden rounded-md p-2 text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-white" aria-label="Toggle navigation">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className="hidden bg-black" id="mobile-menu-content">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-4">
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">Solution</a>
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">News and Insights</a>
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">About Us</a>
          <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">Contact Us</a>
          <div className='space-y-2 flex flex-col'>
            <a href="#" title="Sign In" target="_self" className="custom-button">Sign In</a>
            <a href="#" title="Join Us" target="_self" className="custom-button">Join Us</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
