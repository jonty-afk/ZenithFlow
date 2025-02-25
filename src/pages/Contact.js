import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="text-center flex flex-col items-center justify-center px-6">
      <motion.h1
        className="text-4xl font-bold text-white"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Us
      </motion.h1>
      <p className="text-gray-400 mt-4 max-w-2xl">
        Have questions or want to collaborate? Get in touch with the ZenithFlow team.
      </p>
      <motion.div
        className="mt-12 max-w-lg w-full bg-gray-800 p-6 rounded-lg shadow-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <form>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 mb-4 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 mb-4 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 mb-4 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows="4"
          ></textarea>
          <button
            type="submit"
            className="w-full px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;