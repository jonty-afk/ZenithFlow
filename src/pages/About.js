import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="text-center flex flex-col items-center justify-center px-6">
      <motion.h1
        className="text-4xl font-bold text-white"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About ZenithFlow
      </motion.h1>
      <p className="text-gray-400 mt-4 max-w-2xl">
        ZenithFlow is a next-generation DeFi platform built on the Solana blockchain. Our mission is to empower users with fast, secure, and rewarding financial tools in a decentralized world.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-4xl">
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-blue-400">Our Vision</h3>
          <p className="text-gray-400 mt-2">
            To redefine decentralized finance by prioritizing speed, scalability, and community rewards.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-blue-400">Our Team</h3>
          <p className="text-gray-400 mt-2">
            A group of blockchain enthusiasts and developers passionate about the future of finance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;