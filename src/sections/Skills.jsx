import { motion } from "framer-motion";

const skills = [
  { name: "HTML5", level: 90 },
  { name: "CSS3", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "React.js", level: 85 },
  { name: "Node.js", level: 75 },
  { name: "Express.js", level: 80 },
  { name: "MongoDB", level: 70 },
  { name: "Tailwind CSS", level: 90 },
  { name: "VS Code", level: 95 },
  { name: "Git", level: 85 },
  { name: "GitHub", level: 90 },
  { name: "Postman", level: 80 },
  { name: "Netlify", level: 75 },
  { name: "Render", level: 70 },
];

const SkillItem = ({ name, level }) => {
  return (
    <motion.div
      className="flex flex-col items-center p-4 rounded-lg shadow-lg text-center w-full sm:w-[150px] bg-gray-800"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      whileHover={{ scale: 1.1 }}
    >
      <motion.h3
        className="text-lg font-medium mb-2 text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {name}
      </motion.h3>
      <motion.div
        className="h-2 rounded-full w-full bg-blue-500"
        initial={{ width: 0 }}
        animate={{ width: `${level}%` }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      <span className="text-sm block mt-2 text-gray-400">{level}%</span>
    </motion.div>
  );
};

const SkillsSection = () => {
  return (
    <section id="skills" className="p-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          className="text-xl font-bold text-center mb-6 pt-5 pb-5"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          My Skills & Tools
        </motion.h2>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {skills.map((skill, index) => (
            <SkillItem key={index} name={skill.name} level={skill.level} />
          ))}
        </motion.div>
      </motion.div>
  
    </section>
  );
};

export default SkillsSection;
