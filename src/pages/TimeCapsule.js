import React, { useState } from "react";
import { motion } from "framer-motion";

const TimeCapsule = ({ walletAddress, balance }) => {
  const [message, setMessage] = useState("");

  const lockCapsule = () => {
    if (!walletAddress || !balance) {
      alert("Connect your wallet on Home to lock a capsule!");
      return;
    }
    if (!message) {
      alert("Write a message to lock away!");
      return;
    }
    alert(`Capsule locked with "${message}" until 2026! (Demo)`);
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-12 px-6">
      <motion.h1
        className="text-5xl font-extrabold text-yellow-400 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Solana Time Capsule
      </motion.h1>
      <motion.div
        className="w-full max-w-3xl bg-gray-800 p-8 rounded-xl shadow-lg border border-yellow-500/30"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-yellow-300 mb-4">What It Does</h2>
        <p className="text-gray-300 mb-6">Seal a message or $ZF in a Solana time-lock—unlocks in the future.</p>
        
        <h2 className="text-3xl font-bold text-yellow-300 mb-4">How It Works</h2>
        <p className="text-gray-300 mb-6">Enter your thoughts, lock them with your wallet—stored on-chain (demo for now) until 2026.</p>
        
        <h2 className="text-3xl font-bold text-yellow-300 mb-4">Try It Out</h2>
        <div className="bg-yellow-900/20 p-4 rounded-lg">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message for 2026..."
            className="w-full p-3 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 mb-4"
          />
          <button
            className="px-6 py-2 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition duration-300"
            onClick={lockCapsule}
          >
            Lock Capsule
          </button>
          <p className="text-gray-400 mt-2 text-sm">Seal it away—future you will thank you!</p>
        </div>
      </motion.div>
    </div>
  );
};

export default TimeCapsule;