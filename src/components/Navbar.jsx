import React from "react";

function Navbar() {
  return (
    <nav className="flex flex-wrap items-center justify-between w-full bg-blue-600 text-white px-8 py-4 z-10 shadow-md">
      {/* Logo and title */}
      <div className="flex items-center space-x-4">
        <div className="w-10 h-10">
          <img
            src="/Image 01-04-25 at 2.59 PM.jpg"
            alt="logo"
            className="rounded-full object-cover"
          />
        </div>
        <h1 className="text-xl font-semibold">P. Arunkumar</h1>
      </div>

      {/* Navigation link */}
      <ul className="flex flex-wrap space-x-4 md:space-x-8 text-sm font-medium mt-4 md:mt-0">
        <li>
          <a href="#hero" className="hover:text-yellow-400 transition-colors">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:text-yellow-400 transition-colors">
            About
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-yellow-400 transition-colors">
            Projects
          </a>
        </li>
        <li>
          <a href="#skills" className="hover:text-yellow-400 transition-colors">
            Skills
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-yellow-400 transition-colors">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
