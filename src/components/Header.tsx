import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const settingsRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
    if (settingsRef.current && !settingsRef.current.contains(event.target as Node)) {
      setIsSettingsOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen || isSettingsOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }
  }, [isMenuOpen, isSettingsOpen]);

  const navigate = useNavigate();

  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="flex items-center" ref={menuRef}>
        <button
          onClick={toggleMenu}
          className="mr-4 focus:outline-none focus:ring"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        <h1 onClick={() => navigate('/')} className="text-xl font-bold">Crypto Wallet</h1>
      </div>
      <div className="relative" ref={settingsRef}>
        <button
          onClick={toggleSettings}
          className="focus:outline-none focus:ring"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 1v2m0 18v2m9-10h-2m-16 0H1m16.071 8.071l-1.414-1.414m-11.314 0l-1.414 1.414M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </button>
        {isSettingsOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-50">
            <a href="#" className="block px-4 py-2 hover:bg-gray-200">FAQ</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-200">About Us</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-200">Privacy Policy</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-200">Terms & Condition</a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-200">Logout</a>
          </div>
        )}
      </div>
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-48 bg-white text-black rounded-md shadow-lg z-50">
          <a href="/" className="block px-4 py-2 hover:bg-gray-200">Wallet</a>
          <a href="/account" className="block px-4 py-2 hover:bg-gray-200">Account</a>
        </div>
      )}
    </header>
  );
};

export default Header;
