// src/sections/Projects.jsx
import React from "react";

function Projects() {
  return (
    <section id="projects" className="min-h-screen bg-gray-100 text-gray-800">
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-8 lg:px-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            My Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Cards */}
            {[
              {
                imgSrc: "/landin-page.png",
                alt: "Landing Page",
                link: "https://html-css-task-guvi.netlify.app/",
                title: "Landing Page",
                description:
                  "A simple landing page built with HTML and CSS featuring a clean design and responsive layout.",
                tags: ["HTML", "CSS", "Tailwind CSS"],
              },
              {
                imgSrc: "/project-2.png",
                alt: "E-Commerce Website",
                link: "https://starlit-cupcake-cc6d26.netlify.app/",
                title: "E-Commerce Website",
                description:
                  "A simple e-commerce website built with React.js and Tailwind CSS, featuring a responsive layout.",
                tags: [
                  "HTML",
                  "CSS",
                  "Tailwind CSS",
                  "React.js",
                  "Node.js",
                  "Express",
                ],
              },
              {
                imgSrc: "/port.png",
                alt: "Portfolio",
                link: "https://ak-portfolio-1.netlify.app/",
                title: "Portfolio",
                description:
                  "A portfolio website built with React.js and Tailwind CSS, showcasing clean design and responsiveness.",
                tags: ["HTML", "CSS", "Tailwind CSS", "React.js"],
              },
            ].map((project, index) => (
              <div
                key={index}
                className="relative group bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={project.imgSrc}
                  alt={project.alt}
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover rounded-lg group-hover:opacity-0 transition-opacity duration-300"
                />
                <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-70 text-white rounded-lg p-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 border-2 border-yellow-400 px-4 py-2 rounded text-yellow-400 hover:bg-yellow-400 hover:text-gray-800 transition-colors duration-300"
                  >
                    Visit Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div className="container mx-auto px-4 sm:px-8 lg:px-16 mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Landing Page",
              description:
                "This is a simple landing page built with HTML and CSS. It features a clean design and responsive layout.",
              tags: ["HTML", "CSS", "Tailwind CSS"],
            },
            {
              title: "E-Commerce Website",
              description:
                "This is a simple e-commerce website built with React.js and Tailwind CSS. Users can add items to the cart and view their orders. JWT authentication is used for user login and registration. The backend is built with Node.js and Express.payment gateway integrate with rozopay.",
              
              tags: [
                "HTML",
                "CSS",
                "Tailwind CSS",
                "React.js",
                "Node.js",
                "Express",
              ],
            },
            {
              title: "Portfolio",
              description:
                "This is a simple portfolio website built with React.js and Tailwind CSS. It features a clean design and responsive layout. downloadable resume.And also inculde my projects.",
              tags: ["HTML", "CSS", "Tailwind CSS", "React.js"],
            },
          ].map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h1 className="text-2xl font-bold mb-4">{project.title}</h1>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-gray-200 text-gray-800 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
