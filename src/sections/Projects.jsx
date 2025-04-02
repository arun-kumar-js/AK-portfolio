// src/sections/Projects.jsx
import React from "react";

function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-gray-100 text-gray-800 py-16"
    >
      <div className="container mx-auto px-4 sm:px-8 lg:px-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          My Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <div className="relative group bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img
              src="/public/landin-page.png"
              alt="Landing Page"
              className="w-full h-48 sm:h-56 lg:h-64 object-cover rounded-lg group-hover:opacity-0 transition-opacity duration-300"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-70 text-white rounded-lg p-4">
              <h3 className="text-2xl font-bold text-yellow-400 mb-2">
                Landing Page
              </h3>
              <p className="text-center text-sm sm:text-base">
                Responsive Landing Page Built with HTML & CSS
              </p>
              <a
                href="https://html-css-task-guvi.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 border-2 border-yellow-400 px-4 py-2 rounded text-yellow-400 hover:bg-yellow-400 hover:text-gray-800 transition-colors duration-300"
              >
                Visit Project
              </a>
            </div>
          </div>

          {/* Project 2 */}
          {/* Project 2 - E-Commerce Website */}
          <div className="relative group bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
            <img
              src="/public/project-2.png"
              alt="E-Commerce Website"
              className="w-full h-48 sm:h-56 lg:h-64 object-cover rounded-lg group-hover:opacity-0 transition-opacity duration-300"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-70 text-white rounded-lg p-4">
              <h3 className="text-2xl font-bold text-yellow-500 mb-2">
                E-Commerce Website
              </h3>
              <p className="text-center text-sm sm:text-base">
                A full-stack MERN e-commerce platform with user authentication,
                secure payments, and order management.
              </p>
              <ul className="text-sm text-center mt-2">
                <li>✔️ User Authentication (JWT)</li>
                <li>✔️ Add to Cart & Checkout</li>
                <li>✔️ Secure Payments via Stripe</li>
                <li>✔️ Admin Panel for Product Management</li>
              </ul>
              <a
                href="https://starlit-cupcake-cc6d26.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 border-2 border-yellow-500 px-4 py-2 rounded text-yellow-500 hover:bg-yellow-500 hover:text-gray-800 transition-colors duration-300"
              >
                Visit Project
              </a>
            </div>
          </div>

          {/* Project 3 */}
          <div className="relative group bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col items-center">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Project 3</h3>
              <p className="text-gray-600 text-center">
                A description of Project 3.
              </p>
            </div>
            <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-70 text-white rounded-lg p-4">
              <h3 className="text-lg font-bold mb-2">Project 3 Description</h3>
              <a
                href="https://example.com/project-3"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-blue-400 underline hover:text-blue-300"
              >
                Visit Project
              </a>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </section>
  );
}

export default Projects;
