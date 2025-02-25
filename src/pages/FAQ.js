import React from "react";
import { motion } from "framer-motion";

const FAQ = () => {
  return (
    <div className="text-center flex flex-col items-center justify-center px-6">
      <motion.h1
        className="text-4xl font-bold text-white"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        FAQ
      </motion.h1>
      <p className="text-gray-400 mt-4 max-w-2xl">
        Got questions? We’ve got answers.
      </p>
      <div className="mt-12 max-w-4xl w-full">
        <motion.div
          className="bg-gray-800 p-6 rounded-lg shadow-md mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-lg font-semibold text-blue-400">What is ZenithFlow?</h3>
          <p className="text-gray-400 mt-2">
            A DeFi platform on Solana offering staking and passive rewards.
          </p>
        </motion.div>
        <motion.div
          className="bg-gray-800 p-6 rounded-lg shadow-md mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold text-blue-400">How do I earn rewards?</h3>
          <p className="text-gray-400 mt-2">
            Simply hold $ZF tokens in your wallet to earn Solana rewards.
          </p>
        </motion.div>
        <motion.div
          className="bg-gray-800 p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-lg font-semibold text-blue-400">Where can I buy $ZF?</h3>
          <p className="text-gray-400 mt-2">
            Stay tuned for our presale and exchange listings!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;