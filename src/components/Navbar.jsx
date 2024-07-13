import React, { useEffect, useState } from 'react';
import Profile from "/dprofile.png";
import { FaHome, FaBriefcase, FaProjectDiagram, FaGraduationCap, FaBars } from 'react-icons/fa';
import { useScroll } from '../../context/ScrollProvider';
import { FaX } from 'react-icons/fa6';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { homeRef, workExpRef, projectsRef, educationRef, contactRef, scrollTo } = useScroll();


  const navLinks = [
    { name: 'Home', icon: <FaHome />, ref: homeRef },
    { name: 'Work Exp', icon: <FaBriefcase />, ref: workExpRef },
    { name: 'Projects', icon: <FaProjectDiagram />, ref: projectsRef },
    { name: 'Education', icon: <FaGraduationCap />, ref: educationRef },
  ];


  return (
    <nav className={`sticky top-0 bg-gray-800 p-4 z-50 shadow-md`}>
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-white font-bold text-xl">
            <img src={Profile} alt="profile" className='h-12 w-12 object-cover rounded-full' />
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {!isOpen ? <FaBars size={24} /> : <FaX size={22} />}
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="bg-gray-700 rounded-full px-4 py-1 flex items-center">
            {navLinks.map((link, index) => (
              <a
                key={index}
                // href={`#${link.name.toLowerCase()}`}
                onClick={() => scrollTo(link.ref)}
                className="text-white px-6 py-2 rounded-full hover:bg-blue-500 hover:bg-opacity-50 transition duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
        <button className="bg-blue-500 hidden md:flex text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300">
            Resume
          </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden mt-4">
          <div className=" rounded-lg p-2 flex flex-col items-center">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={`#${link.name.toLowerCase()}`}
                className="text-white px-4 py-2 w-full text-center rounded-md hover:bg-blue-500 hover:bg-opacity-50 transition duration-300 flex items-center justify-center space-x-2"
              >
                {link.icon}
                <span>{link.name}</span>
              </a>
            ))}
            <button className="bg-blue-500 text-white px-4 py-2 w-full mt-2 rounded-md hover:bg-blue-600 transition duration-300">
              Resume
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;