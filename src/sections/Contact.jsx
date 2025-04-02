// src/sections/Contact.jsx
import React from "react";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-gray-900 text-white py-16 px-4"
    >
      <div className="max-w-5xl mx-auto">
        {/* Resume Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <div className="text-center">
            <img
              src="/Pocket Resume.gif"
              alt="Resume Preview"
              className="w-40 h-40 sm:w-60 sm:h-60 mx-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="text-center">
            <h2 className="text-2xl sm:text-4xl font-semibold mb-4">Resume</h2>
            <a
              href="/path-to-resume.pdf"
              download
              className="inline-block bg-blue-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg shadow-md hover:bg-blue-600 transition"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center mt-16">
         
          <h1 className="text-2xl sm:text-3xl font-bold mb-4">Contact</h1>
          <p className="text-sm sm:text-base mb-4">📞 Get in Touch</p>
          <p className="text-sm sm:text-base mb-4">
            Have a question or want to work together? I'd love to hear from you.
            Feel free to reach out to me via email or phone. I'm always open to
            new opportunities and collaborations.
          </p>
          <div className="flex flex-col sm:flex-row sm:justify-center gap-4">
            <a
              href="mailto:srivar63@outlook.com"
              className="text-blue-400 hover:underline"
            >
              Email: srivar63@outlook.com
            </a>
            <a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              LinkedIn: LinkedIn Profile
            </a>
            <a
              href="https://github.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              GitHub: GitHub Profile
            </a>
          </div>
        </div>
      </div>
      <div className="pt-5 text-center">
        <hr className="border-gray-700" />
        <h1 className="mt-4">Arunkumar@2025</h1>
      </div>
    </section>
  );
}

export default Contact;
