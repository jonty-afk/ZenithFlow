import React from "react";
import { motion } from "framer-motion";

const Roadmap = () => {
  return (
    <div className="text-center flex flex-col items-center justify-center px-6">
      <motion.h1
        className="text-4xl font-bold text-white"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Roadmap
      </motion.h1>
      <p className="text-gray-400 mt-4 max-w-2xl">
        Our journey to revolutionize DeFi on Solana.
      </p>
      <div className="mt-12 max-w-4xl w-full">
        <div className="relative">
          <div className="absolute h-full w-1 bg-blue-400 left-1/2 transform -translate-x-1/2"></div>
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-md mb-8 relative z-10"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-semibold text-blue-400">Q1 2025</h3>
            <p className="text-gray-400 mt-2">Launch website and token presale.</p>
          </motion.div>
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-md mb-8 relative z-10"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-blue-400">Q2 2025</h3>
            <p className="text-gray-400 mt-2">Staking platform release.</p>
          </motion.div>
          <motion.div
            className="bg-gray-800 p-6 rounded-lg shadow-md relative z-10"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-lg font-semibold text-blue-400">Q3 2025</h3>
            <p className="text-gray-400 mt-2">Expand partnerships and governance features.</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;