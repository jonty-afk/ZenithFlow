import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Whisperer = ({ walletAddress, balance }) => {
  const [whisper, setWhisper] = useState("Wallet vibes incoming...");
  const whispers = [
    "Nice moves, legend!",
    "You call that a stake?",
    "HODL or bust, fam!",
    "Moon’s closer than you think!",
    "Wallet’s looking thicc!",
  ];

  useEffect(() => {
    if (!walletAddress || !balance) {
      setWhisper("Connect on Home to hear me!");
    } else {
      setWhisper(whispers[Math.floor(Math.random() * whispers.length)]);
    }
  }, [walletAddress, balance]);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-12 px-6">
      <motion.h1
        className="text-5xl font-extrabold text-green-400 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Wallet Whisperer
      </motion.h1>
      <motion.div
        className="w-full max-w-3xl bg-gray-800 p-8 rounded-xl shadow-lg border border-green-500/30"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-green-300 mb-4">What It Does</h2>
        <p className="text-gray-300 mb-6">A sassy AI that roasts or cheers your wallet moves—your crypto sidekick.</p>
        
        <h2 className="text-3xl font-bold text-green-300 mb-4">How It Works</h2>
        <p className="text-gray-300 mb-6">Watches your SOL balance and staking, then drops random quips—sass or hype, it’s all love.</p>
        
        <h2 className="text-3xl font-bold text-green-300 mb-4">Try It Out</h2>
        <div className="bg-green-900/20 p-4 rounded-lg">
          <p className="text-2xl text-white italic">{whisper}</p>
          <p className="text-gray-400 mt-2 text-sm">It’s got attitude—connect to hear more!</p>
        </div>
      </motion.div>
    </div>
  );
};

export default Whisperer;