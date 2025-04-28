import React from 'react';
import { motion } from 'framer-motion';
import Image from "../assets/images/ecom.png"
import Paste from "../assets/images/paste.png"
import Panaverse from "../assets/images/panaverse.png"
import Img from "../assets/images/projectImg.png"
import Estore from "../assets/images/eStore.webp"


// Example project data
const projects = [
  {
    id: 1,
    title: 'Ecommerce Store',
    description: 'Dynamic ecommerce website featuring React.js, Sanity CMS, React-Redux.',
    link: 'https://shop-online-luqmans-projects-c093d7c9.vercel.app/',
    image:Estore
  },
  {
    id: 2,
    title: 'E-commerce App',
    description: 'A modern stylish e-commerce app with Redux Tool kit.',
    link: 'https://dine-mart-seven.vercel.app/',
    image:Image
  },
  {
    id: 3,
    title: 'Panaverse Dao',
    description: 'Presidential Initiative for Artificial Intelligence and Computing.io.',
    link: 'https://panaverse-dao-gold.vercel.app/',
    image: Panaverse, 
  },
  // {
  //   id: 4,
  //   title: 'Personal Project',
  //   description: 'A personal portfolio built with React and Tailwind CSS.',
  //   link: 'https://portfolio-luqmans-projects-c093d7c9.vercel.app/',
  //   image: Img
  // },
  // {
  //   id: 4,
  //   title: 'Paste App',
  //   description: 'A personal portfolio built with React and Tailwind CSS.',
  //   link: 'https://paste-app-ten-theta.vercel.app/',
  //   image: Paste
  // },
  
 
  // {
  //   id: 4,
  //   title: 'Face-Book',
  //   description: 'Presidential Initiative for Artificial Intelligence and Computing.io.',
  //   link: 'https://facebook-login-page-kappa.vercel.app/',
  //   image: Panaverse, 
  // },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <section className="flex flex-col items-center justify-center  p-6 bg-slate-950 text-white">
      <motion.div
        className="w-[90%] "
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6">My Projects</h1>
        <p className="text-lg md:text-xl text-gray-300 mb-10">
          Here are some of the projects I’ve worked on. Click on any project to learn more.
        </p>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col gap-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />
              {/* Project Details */}
              <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                <p className="text-gray-400 mb-4">{project.description}</p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block py-2 px-4 bg-[#3A9DCA]  text-white rounded-md transition"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
