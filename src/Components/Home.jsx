import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Resume from "../assets/images/Resume.pdf"; 
import Typewriter from 'typewriter-effect';

const Home = () => {
  return (
    <section className="flex justify-center items-center  h-[700px] p-4">
      <motion.div
        className="w-full  max-w-[1200px] px-4 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-white text-5xl md:text-7x lg:text-8xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Hello, I'm Luqman.
          
          <br />
          <Typewriter
  options={{
    strings: ["UI designer &",'Frontend Developer', ],
    autoStart: true,
    loop: true,
  }}
/>
          
        </motion.h1>
        <motion.div
          className='text-xl  text-white max-[550px]:flex-col  flex gap-5 justify-center mt-7'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className='py-2 px-8 max-[700px]:px-4 max-[550px]:w-full border rounded-md hover:bg-white hover:text-black transition'
            >
              Contact Us
            </motion.button>
          </Link>
          <motion.a
            href={Resume} // Link to the imported Resume file
            download="Luqman_Resume.pdf" // Specify the downloaded file name
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className='py-2 px-8 max-[700px]:px-4 border rounded-md hover:bg-white hover:text-black transition text-center'
          >
            Download Resume
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;

