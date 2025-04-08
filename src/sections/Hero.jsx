import React from "react";

function Hero() {
  return (
    <>
      <section
        id="home"
        className="h-screen bg-black text-white flex flex-col md:flex-row items-center justify-center"
      >
        {/* Left Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center text-center px-4 md:px-8">
          <div>
            <h1 className="text-4xl md:text-6xl font-extrabold">
              I'm <span className="text-yellow-500">Arunkumar</span>
            </h1>
            <p className="text-lg md:text-2xl mt-4 italic">
              A Full Stack Developer I specialize in building modern,
              user-friendly web applications using React and Node.js
            </p>
          </div>

          <div className="flex space-x-4 mt-4">
            <a
              href="https://github.com/arun-kumar-js"
              className="text-white hover:text-gray-300 hover:scale-110 hover:bg-gray-200 transform transition-transform duration-300 hover:rotate-3"
            >
              <img src="/github-color.svg" className="w-8 h-8" alt="" />
            </a>
            <a
              href="https://www.linkedin.com/in/arunkumar-packiyasamy/"
              className="text-white hover:text-gray-300 hover:scale-110 hover:bg-gray-200 transform transition-transform duration-300 hover:rotate-3"
            >
              <img src="/linkedin-svgrepo-com.svg" alt="" className="w-9 h-9" />
            </a>
            <a
              href="mailto:srivar63@outlook.com"
              className="text-white hover:text-gray-300 hover:scale-110 hover:bg-gray-200 transform transition-transform duration-300 hover:rotate-3"
            >
              <img
                src="/mail-reception-svgrepo-com.svg"
                alt=""
                className="w-9 h-9"
              />
            </a>
          </div>
        </div>
        {/* Right Section */}

        <iframe
          src="https://my.spline.design/robotfollowcursorforlandingpage-82392c53bc684c3830e5a4e858c68a0d/"
          frameborder="0"
          width="100%"
          height="100%"
        ></iframe>
      </section>
    </>
  );
}

export default Hero;
