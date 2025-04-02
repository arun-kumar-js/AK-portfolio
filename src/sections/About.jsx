// src/sections/About.jsx
import React from "react";

function About() {
  return (
    <section
      id="about"
      className="h-screen bg-gray-100 text-gray-800 flex items-center justify-center"
    >
      <div className="flex flex-col md:flex-row items-center md:items-start max-w-5xl mx-auto">
        <div className="md:w-1/2 flex justify-center md:justify-start">
          <img
            src="/public/coder4.avif"
            alt="About Me"
            className="w-64 h-64 object-cover rounded-full"
          />
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8 text-center md:text-left">
          <h2 className="text-4xl font-semibold">About Me</h2>
          <p className="mt-4 text-xl">
            Hello! I’m Arunkumar, a passionate Full Stack MERN Developer with
            experience in building modern, responsive, and scalable web
            applications. <br /> I specialize in MongoDB, Express.js, React.js,
            and Node.js, crafting dynamic user interfaces and efficient backend
            services.
          </p>
          <p className="mt-4 text-xl">
            I have a strong foundation in HTML, CSS, JavaScript, and React,
            along with expertise in Redux Toolkit, RESTful APIs, and real-time
            features using Socket.io. My development approach focuses on clean
            code, performance optimization, and user-centric design.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
