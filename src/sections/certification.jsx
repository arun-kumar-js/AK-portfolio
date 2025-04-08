import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


export const certifications = [
  {
    title: "MERN Full Stack Course Completion Certificate",
    image: "images/fullstack.png",
    description:
      "Completion certificate for the MERN Full Stack Development course, showcasing skills in MongoDB, React, Node.js, and Express.",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
    url: "https://drive.google.com/file/d/1ypcDhmSUV2EUZwBZm1vte4uiBUZhcqTI/view?usp=drive_link",
  },
  {
    title: "HTML, CSS, TailwindCSS Proficiency Certificate",
    image: "/images/html.png",
    description:
      "Certificate awarded for excellence in HTML and creating structured web layouts.",
    technologies: ["HTML", "CSS", "TailwindCSS"],
    url: "https://drive.google.com/file/d/1bIoPBZkC3O256htOONwlTmgPBCIR6H8t/view?usp=drive_link",
  },
  {
    title: "Database Certification",
    image: "/images/database.png",
    description:
      "Recognition of skills in MongoDB, focusing on database design and management for web applications.",
    technologies: ["MongoDB", "MYSQL"],
    url: "https://drive.google.com/file/d/1Xz3QuG9x46p-UQE3Wdt7_VgH0hvQz8s8/view?usp=drive_link",
  },
  {
    title: "Node.js Certification",
    image: "/images/node.png",
    description:
      "Certified skills in Node.js for server-side development and API integration.",
    technologies: ["Node.js", "Express.js", "React.js"],
    url: "https://drive.google.com/file/d/1ai9mzib8n2swlIeiGaQNt_SjI8oSkwDd/view?usp=drive_link",
  },
  {
    title: "React.js Certification",
    image: "/images/reactjs.png",
    description:
      "Certificate of excellence in React.js, specializing in component-based UI development.",
    technologies: ["HTML", "TailwindCSS", "React.js"],
    url: "https://drive.google.com/file/d/1JuJjwtDm8qnfjphkd9AHlC5Z3qYkKUSt/view?usp=drive_link",
  },
  {
    title: "JavaScript Certification",
    image: "/images/adv js.png",
    description:
      "Certification for JavaScript programming, covering ES6 features and DOM manipulation.",
    technologies: ["JavaScript", "TailwindCSS", "React"],
    url: "https://drive.google.com/file/d/1-VXUKgDnMELwqJRGKlSIY7LDkuhl6a-d/view?usp=drive_link",
  },
];

const Certification = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-16 px-4 text-white bg-black " id="certificates ">
      <h2 className="mb-16 text-center text-4xl font-bold">Certifications</h2>
      <div className="max-w-5xl mx-auto flex flex-col items-center space-y-16">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row items-center gap-6 w-full"
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
          >
            <div className="flex justify-center w-full sm:w-64">
              <a href={cert.url} target="_blank" rel="noopener noreferrer">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="rounded-lg shadow-md transition duration-300 w-full max-w-[250px]"
                />
              </a>
            </div>
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-2xl font-semibold mb-2">{cert.title}</h3>
              <p className="text-stone-400 mb-3">{cert.description}</p>
              <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                {cert.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="bg-stone-800 text-stone-300 px-3 py-1 rounded text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    
    </section>
  );
};

export default Certification;