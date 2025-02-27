import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-center flex flex-col items-center justify-center px-6">
      <motion.h1
        className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mt-4 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Welcome to ZenithFlow
      </motion.h1>
      <p className="text-gray-300 mt-3 text-lg max-w-xl relative z-10">
        Unleash Wealth on Solana: Stake, Earn, Thrive.
      </p>
      <p className="text-gray-400 mt-2 text-sm relative z-10">
        Discover $ZF Genesis Forge & more in Chaos Zone!
      </p>
      <Link to="/tokenomics">
        <motion.button
          className="mt-6 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg shadow-lg hover:from-blue-600 hover:to-purple-600 transition duration-300 relative z-10"
          whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)" }}
          whileTap={{ scale: 0.95 }}
        >
          Learn More
        </motion.button>
      </Link>
      <Link to="/chaos">
        <motion.button
          className="mt-6 px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-lg hover:from-purple-600 hover:to-pink-600 transition duration-300 relative z-10"
          whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(236, 72, 153, 0.7)" }}
          whileTap={{ scale: 0.95 }}
        >
          Enter the Zenith Zone
        </motion.button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 max-w-5xl relative z-10">
        <div className="bg-gray-800 p-5 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-blue-400">Blazing Fast</h3>
          <p className="text-gray-400 mt-2 text-sm">Solana-speed transactions.</p>
        </div>
        <div className="bg-gray-800 p-5 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-blue-400">Stack & Earn</h3>
          <p className="text-gray-400 mt-2 text-sm">$ZF fuels SOL rewards.</p>
        </div>
        <div className="bg-gray-800 p-5 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-blue-400">We Run DeFi</h3>
          <p className="text-gray-400 mt-2 text-sm">Community-led power.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;