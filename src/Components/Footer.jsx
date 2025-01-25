import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="text-white flex justify-center body-font bg-slate-950">
      <div className="container w-[90%] px-5 gap-8 mt-10 flex justify-between  max-[1050px]:flex-col">
        {/* About Section */}
        <motion.div
          className="w-[40%] flex-shrink-0 max-[1000px]:w-[70%]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeIn}
        >
          <h1 className="text-xl font-bold">Explore My Work</h1>
          <p className="mt-8 text-md font-semibold text-white">
            Welcome to my digital portfolio, where creativity and code converge
            to create stunning web projects. Incorporating a Portfolio Showcase,
            this website comes alive, showcasing my projects like stars in the
            night sky.
          </p>
        </motion.div>
          <div className="w-[70% " id="dd">
        {/* Links Section */}
        <div className="flex-grow flex  max-[500px]:flex-col  " id="kk">
          {/* Discover Section */}
          <motion.div
            className=" "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            variants={fadeIn}
          >
            <h2 className="title-font text-white tracking-widest text-lg font-bold mb-3">
              Discover
            </h2>
            <nav className="list-none mb-10 flex flex-col gap-3">
              <li>
                <Link className="text-white">Web Development Portfolio</Link>
              </li>
              <li>
                <Link className="text-white">Creative Web Projects</Link>
              </li>
              <li>
                <Link className="text-white">Recent Web Work</Link>
              </li>
            </nav>
          </motion.div>

          {/* Explore Section */}
          <motion.div
            className=" "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            variants={fadeIn}
          >
            <h2 className="title-font text-white tracking-widest text-lg font-bold mb-3">
              Explore
            </h2>
            <nav className="list-none mb-10 flex flex-col gap-3">
              <li>
                <Link className="text-white">Exciting Web Apps</Link>
              </li>
              <li>
                <Link className="text-white">Creative Website Designs</Link>
              </li>
              <li>
                <Link className="text-white">E-commerce Solutions</Link>
              </li>
            </nav>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            className="lg:w-1/4 md:w-1/2 w-full "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            variants={fadeIn}
          >
            <h2 className="title-font text-white tracking-widest text-lg font-bold mb-3">
              Contact
            </h2>
            <nav className="list-none mb-10 flex flex-col gap-3">
              <li>
                <Link className="text-white">Whatsapp</Link>
              </li>
              <li>
                <Link className="text-white">Support 24/7</Link>
              </li>
            </nav>
          </motion.div>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
