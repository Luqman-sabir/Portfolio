import React from "react";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandRedux } from "react-icons/tb";
import { SiSanity } from "react-icons/si";

const skills = [
  {
    name: "HTML",
    color: "bg-orange-500",
    description: "Proficient in creating semantic and accessible markup.",
  },
  {
    name: "CSS",
    color: "bg-blue-500",
    description: "Experienced in crafting responsive and modern UI designs.",
  },
  {
    name: "JavaScript",
    color: "bg-yellow-500",
    description: "Skilled in dynamic and interactive web development.",
  },
  {
    name: "React",
    color: "bg-cyan-500",
    description: "Expertise in building scalable and interactive UIs.",
  },
  {
    name: "Redux",
    color: "bg-purple-500",
    description: "Proficient in managing application state efficiently.",
  },
  {
    name: "Sanity.io",
    color: "bg-green-500",
    description: "Skilled in creating headless CMS for modern web apps.",
  },
];

const Skills = () => {
  return (
    <section className="flex flex-col items-center bg-slate-950 justify-center p-8 text-white">
      {/* Heading */}
      <motion.div
        className="w-[90%]  "
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">My Skills</h1>
        <p className="text-lg md:text-xl text-gray-300 mb-10">
          Here are some of the technologies and tools I specialize in.
        </p>
      </motion.div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full md:w-[90%]">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className={`flex  flex-col items-center text-center p-6 rounded-lg shadow-lg ${skill.color} bg-opacity-90`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            // transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <div className="text-5xl mb-4">
              {skill.name === "React" && <FaReact />}
              {skill.name === "CSS" && <FaCss3 />}
              {skill.name === "HTML" && <FaHtml5 />}
              {skill.name === "JavaScript" && <IoLogoJavascript />}
              {skill.name === "Redux " && <TbBrandRedux />

              }

              {skill.name === "Sanity.io  " && <SiSanity className="" />}
            </div>
            <h2 className="text-xl font-bold mb-2">{skill.name}</h2>
            <p className="text-sm md:text-base text-white">
              {skill.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      {/* <motion.div
        className="mt-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: skills.length * 0.2, duration: 1 }}
      >
        <a
          href="/projects"
          className="inline-block py-3 px-6 bg-teal-500 hover:bg-teal-600 rounded-md text-white text-lg font-medium transition"
        >
          See My Projects
        </a>
      </motion.div> */}
    </section>
  );
};

export default Skills;
