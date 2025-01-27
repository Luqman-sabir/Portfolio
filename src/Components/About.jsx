import React from "react";
import { motion } from "framer-motion";
import image from "../assets/images/man.png";
const About = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen p-6 bg-slate-950 text-white">
      <motion.div
        className=" w-[90%] text-cente"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About Me</h1>
        <hr />
        <h1 className="text-2xl mt-5 font-bold mb-3">Personal Information</h1>
        <div className=" flex items-center gap-5 justify-between max-[750px]:items-start max-[750px]:flex-col ">
          <div className="flex flex-col gap-3 text-lg leading-relaxed font-semibold">
            <span>Name : Luqman</span>
            <span>Age : 20</span>
            <span>Address : DHA Phase-7 Lahore Pakistan.</span>
            <span>Email : luqmansabir415@gmail.com</span>
            <span>Contact : 03278868536</span>
          </div>

          {/* Profile Photo */}
          <motion.div
            className="mr-10"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <img
              src={image}
              alt="Profile"
              className="rounded-full max-[750px]:max-w-[250px] max-[750px]:max-h-[250px]  max-w-[280px] max-h-[300px] object-cover  border-4 border-white shadow-lg"
            />
          </motion.div>
        </div>
        <hr className="mt-5" />
        {/* Description */}
        <div className="mt-5">
          <h1 className="text-2xl  font-bold mb-3">Frontend Developer</h1>
          <p className="text-lg md:text-xl leading-relaxed">
            Hello! My name is <span className="font-bold">Luqman</span>, and I
            am a passionate Frontend Developer with a love for crafting
            beautiful, functional, and user-friendly websites. With a strong
            foundation in modern web technologies like{" "}
            <span className="text-teal-400">React</span> and{" "}
            <span className="text-teal-400">Tailwind CSS</span>, I strive to
            bring designs to life and create exceptional user experiences.
          </p>

          <p className="mt-4 text-lg md:text-xl leading-relaxed">
            Outside of coding, I enjoy exploring new technologies, solving
            challenging problems, and continuously learning to improve my
            skills. I'm always excited to collaborate on exciting projects or
            discuss innovative ideas.
          </p>
        </div>
        <hr className="mt-5" />
        {/* Experience */}
        <div className="mt-5">
          <h1 className="text-2xl  font-bold mb-3">Experience</h1>
          {/* <p className="text-lg md:text-xl leading-relaxed">
          Hello! My name is <span className="font-bold">Luqman</span>, and I am a passionate Frontend Developer with a love for crafting beautiful, functional, and user-friendly websites. With a strong foundation in modern web technologies like <span className="text-teal-400">React</span> and <span className="text-teal-400">Tailwind CSS</span>, I strive to bring designs to life and create exceptional user experiences.
        </p> */}

          <p className="mt-4 text-lg md:text-xl leading-relaxed">
            As a front-end developer at Blurred Edo during my internship, I
            focused on Front-End Technologies.  Responsive Web Design  Well
            Commented Code Participating in an internship, I delved into diverse
            projects, mastering remote collaboration, problem-solving, and
            adapting to dynamic work environments, fostering invaluable skills
            for future endeavors. I created a stylish online shopping website
            using rect.js and Tailwind CSS for a great look. Product details are
            sourced from Sanity.io, and I used JavaScript to ensure everything
            runs smoothly. I also added extra features to make the website
            userfriendly and visually appealing.{" "}
          </p>
        </div>
        <hr className="mt-5" />
        {/* Skills Section */}
          {/* <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">My Skills</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-teal-500 text-white rounded-full shadow-md">HTML</span>
              <span className="px-4 py-2 bg-teal-500 text-white rounded-full shadow-md">CSS</span>
              <span className="px-4 py-2 bg-teal-500 text-white rounded-full shadow-md">JavaScript</span>
              <span className="px-4 py-2 bg-teal-500 text-white rounded-full shadow-md">React</span>
              <span className="px-4 py-2 bg-teal-500 text-white rounded-full shadow-md">Tailwind CSS</span>
              <span className="px-4 py-2 bg-teal-500 text-white rounded-full shadow-md">Git</span>
              <span className="px-4 py-2 bg-teal-500 text-white rounded-full shadow-md">Framer Motion</span>
            </div>
          </div> */}

        {/* Call to Action */}
        {/* <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <a
            href="/contact"
            className="inline-block py-3 px-6 bg-teal-500 hover:bg-teal-600 rounded-md text-white text-lg font-medium transition"
          >
            Contact Me
          </a>
        </motion.div> */}
      </motion.div>
    </section>
  );
};

export default About;
