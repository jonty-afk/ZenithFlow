import React from "react";
import { motion } from "framer-motion";

const Dashboard = ({ walletBalance, stakedAmount, stakingRewards }) => {
  return (
    <div className="text-center flex flex-col items-center justify-center px-6">
      <motion.h1
        className="text-4xl font-bold text-white mt-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Your ZenithFlow Dashboard
      </motion.h1>
      <p className="text-gray-300 mt-3 text-lg max-w-xl">
        Track your wallet and staking all in one place.
      </p>
      <div className="mt-8 max-w-2xl w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          className="bg-gray-800 p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold text-blue-400 mb-2">
            Wallet Balance
          </h3>
          <p className="text-gray-200 text-2xl">
            {walletBalance !== null ? `${walletBalance} SOL` : "Connect wallet to see"}
          </p>
        </motion.div>
        <motion.div
          className="bg-gray-800 p-6 rounded-lg shadow-md"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-semibold text-purple-400 mb-2">
            Staking Stats
          </h3>
          <p className="text-gray-200">
            Staked: {stakedAmount.toFixed(2)} $ZF
          </p>
          <p className="text-gray-200">
            Rewards: {stakingRewards.toFixed(6)} SOL
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;