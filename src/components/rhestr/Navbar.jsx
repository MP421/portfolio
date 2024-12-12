import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="flex items-center justify-between w-[80%] mx-auto pt-3">
      <p className="text-2xl font-black">rhestr</p>

      <div className="md:hidden cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </div>

      <ul
        className={`absolute md:static md:flex bg-blue-100/75 backdrop-blur-xl rounded-3xl items-center gap-10 font-bold text-right pr-16 text-md w-1/3 md:w-auto right-0 top-16 md:top-auto md:bg-transparent transition-all duration-300 ${
          isMenuOpen ? 'block' : 'hidden'
        }`}
      >
        <li className="hover:underline">
          <a href="#features" className="">Features</a>
        </li>
        <li className="hover:underline">
          <a href="#install" className="">Install</a>
        </li>
        <li className="hover:underline">
          <a href="#users" className="">Our Users</a>
        </li>
        <li className="hover:underline">
          <a href="#pricing" className="">Pricing</a>
        </li>
        <li className="hover:underline">
          <a href="#faq" className="">Questions</a>
        </li>
        <li className="hover:underline">
          <a href="#newsletter" className="">Get In Touch</a>
        </li>
      </ul>

      <ul className="hidden md:flex items-center gap-6 text-md font-bold">
        <li className="cursor-pointer">Log In</li>
        <li className="cursor-pointer border-2 border-indigo-950 bg-slate-50 py-2 px-4 rounded-md">Sign Up</li>
      </ul>
    </section>
  );
};

export default Navbar;
