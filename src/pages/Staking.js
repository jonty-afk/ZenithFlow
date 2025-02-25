import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Staking = ({ staked, setStaked, rewards, setRewards }) => {
  const [stakeAmount, setStakeAmount] = useState("");
  const [animateReward, setAnimateReward] = useState(false);

  useEffect(() => {
    if (staked > 0) {
      const interval = setInterval(() => {
        const baseReward = (staked * 0.0000114) / 24; // ~10% APY hourly
        const bonus = Math.random() < 0.1 ? 0.00005 : 0; // 10% chance of 0.00005 SOL
        setRewards((prev) => prev + baseReward + bonus);
        setAnimateReward(true);
        setTimeout(() => setAnimateReward(false), 500);
      }, 3600000); // Every hour
      return () => clearInterval(interval);
    }
  }, [staked, setRewards]);

  const handleStake = () => {
    if (stakeAmount && !isNaN(stakeAmount) && stakeAmount > 0) {
      const amount = parseFloat(stakeAmount);
      setStaked((prev) => prev + amount);
      setStakeAmount("");
      alert(`Staked ${amount} $ZF! Rewards will grow slowly. (Demo)`);
    } else {
      alert("Enter a valid amount to stake!");
    }
  };

  const handleUnstake = () => {
    if (staked > 0) {
      setStaked(0);
      setRewards(0);
      alert(`Unstaked all ${staked} $ZF! Rewards reset. (Demo)`);
    } else {
      alert("Nothing to unstake!");
    }
  };

  return (
    <div className="text-center flex flex-col items-center justify-center px-6">
      <motion.h1
        className="text-4xl font-bold text-white mt-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Stake Your $ZF
      </motion.h1>
      <p className="text-gray-300 mt-3 text-lg max-w-xl">
        Lock your ZenithFlow tokens to earn SOL rewards.
      </p>
      <motion.div
        className="mt-8 max-w-md w-full bg-gray-800 p-6 rounded-lg shadow-md"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-xl font-semibold text-blue-400 mb-2">
          Staked: {staked.toFixed(2)} $ZF
        </h3>
        <motion.h3
          className="text-xl font-semibold text-purple-400 mb-4"
          animate={animateReward ? { scale: 1.2, color: "#f9e2af" } : { scale: 1, color: "#c084fc" }}
          transition={{ duration: 0.3 }}
        >
          Rewards: {rewards.toFixed(6)} SOL
        </motion.h3>
        <input
          type="number"
          value={stakeAmount}
          onChange={(e) => setStakeAmount(e.target.value)}
          placeholder="Enter $ZF to stake"
          className="w-full p-3 mb-4 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <div className="flex space-x-4">
          <motion.button
            className="flex-1 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg shadow-md hover:from-blue-600 hover:to-purple-600 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleStake}
          >
            Stake Now
          </motion.button>
          <motion.button
            className="flex-1 px-6 py-2 bg-gradient-to-r from-red-500 to-orange-500 text-white font-semibold rounded-lg shadow-md hover:from-red-600 hover:to-orange-600 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleUnstake}
          >
            Unstake All
          </motion.button>
        </div>
      </motion.div>
      <p className="text-gray-400 mt-4 text-sm">
        *Demo mode—rewards simulate ~10% APY with small bonuses!
      </p>
    </div>
  );
};

export default Staking;