import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex top-0 left-0 flex items-center justify-between w-full bg-blue-600 text-white px-8 py-4 z-10 shadow-md">
      {/* Logo and Title */}
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

      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-6 text-sm font-medium">
        {["Home", "About", "Projects", "Skills", "certificates", "Contact"].map(
          (item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-yellow-400 transition-colors"
              >
                {item}
              </a>
            </li>
          )
        )}
      </ul>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "✖" : "⋮"}
      </button>

      {/* Mobile Dropdown Menu */}
      <div
        className={`absolute top-16 right-4 w-40 bg-blue-700 rounded-lg shadow-lg md:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col space-y-2 p-4">
          {["Home", "About", "Projects", "Skills","certificates", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="block py-2 px-4 text-white hover:bg-blue-500 rounded-md "
                onClick={() => setIsOpen(false)} // Close menu on click
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
