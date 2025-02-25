import React from "react";
import { motion } from "framer-motion";

const Tokenomics = () => {
  return (
    <div className="text-center flex flex-col items-center justify-center px-6">
      <motion.h1
        className="text-4xl font-bold text-white"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Tokenomics
      </motion.h1>
      <p className="text-gray-400 mt-4 max-w-2xl">
        ZenithFlow ($ZF) is designed to reward holders and fuel a thriving ecosystem. Here’s how it works.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl">
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-blue-400">Total Supply</h3>
          <p className="text-gray-400 mt-2">1,000,000,000 $ZF</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-blue-400">Distribution</h3>
          <p className="text-gray-400 mt-2">
            50% Community, 20% Team, 20% Development, 10% Marketing
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-blue-400">Utility</h3>
          <p className="text-gray-400 mt-2">
            Staking, governance, and transaction fee discounts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;