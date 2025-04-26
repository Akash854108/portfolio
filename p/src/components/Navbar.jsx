import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white p-4 sticky top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Portfolio</div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
        <div className={`md:flex space-x-4 ${isOpen ? 'block' : 'hidden'} absolute md:static top-16 left-0 right-0 bg-blue-600 md:bg-transparent p-4 md:p-0`}>
          <a href="#about" className="block md:inline hover:text-blue-200">About</a>
          <a href="#skills" className="block md:inline hover:text-blue-200">Skills</a>
          <a href="#projects" className="block md:inline hover:text-blue-200">Projects</a>
          <a href="#contact" className="block md:inline hover:text-blue-200">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;