import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 text-center md:text-left">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; 2024 Massage Booking System. All rights reserved.</p>
          </div>
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="/" className="hover:text-light-green">Home</a>
            <a href="#services" className="hover:text-light-green">Services</a>
            <a href="#about-me" className="hover:text-light-green">About</a>
            <a href="#contact" className="hover:text-light-green">Contact</a>
          </div>
          <div className="flex space-x-4">
           
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-light-green">
              <FaInstagram size={24} />
            </a>
           
          </div>
        </div>
        <div className="mt-4 text-center">
          <a href="mailto:your-email@example.com" className="hover:text-light-green">your-email@example.com</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
