import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen p-6 bg-slate-950 text-white">
      <motion.div
        className="w-[90%] "
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Page Heading */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Me</h1>
        <p className="text-lg md:text-xl text-gray-300 mb-10">
          I'd love to hear from you! Whether you have a question, a project idea, or just want to say hi, feel free to reach out.
        </p>

        {/* Contact Form */}
        <form
          action="https://formspree.io/f/xkgoglvp" 
          method="POST"
          className="space-y-6"
        >
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-left text-gray-300 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full p-3 bg-gray-800  text-white rounded-md border border-gray-700 focus:ring-2 focus:ring-[#3A9DCA] focus:outline-none"
              placeholder="Your Name"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-left text-gray-300 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full p-3 bg-gray-800 text-white rounded-md border border-gray-700 focus:ring-2 focus:ring-[#3A9DCA] focus:outline-none"
              placeholder="Your Email"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-left text-gray-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              required
              className="w-full p-3 bg-gray-800 text-white rounded-md border border-gray-700 focus:ring-2 focus:ring-[#3A9DCA] focus:outline-none"
              placeholder="Your Message"
            ></textarea>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 bg-[#3A9DCA]  rounded-md text-white text-lg font-medium transition"
          >
            Send Message
          </motion.button>
        </form>

        {/* Contact Info */}
        <div className="mt-10 text-gray-300">
          <p>
            Or email me directly at: <span className="text-[#3A9DCA]">luqmansabir415@gmail.com</span>
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
