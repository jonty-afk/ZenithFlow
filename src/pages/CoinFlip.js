import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CoinVortex = ({ walletAddress, balance }) => {
  const [hasZF, setHasZF] = useState(false);
  const [spinning, setSpinning] = useState(false);
  const [energy, setEnergy] = useState(0);

  useEffect(() => {
    if (walletAddress && balance) {
      setHasZF(true); // Full pre-launch version
    } else {
      setHasZF(false);
      setEnergy(0);
    }
  }, [walletAddress, balance]);

  const spinVortex = () => {
    if (!hasZF || spinning) return;
    setSpinning(true);
    setTimeout(() => {
      setEnergy((prev) => prev + Math.floor(Math.random() * 20) + 10); // Random 10-30 energy
      setSpinning(false);
    }, 4000); // 4s vortex
  };

  const coinVariants = {
    spin: {
      rotateY: [0, 1440], // 4 spins
      scale: [1, 1.5, 0.5, 2],
      transition: { duration: 4, ease: "easeInOut" }
    },
    idle: { rotateY: 0, scale: 1 }
  };

  const orbVariants = {
    animate: {
      x: [0, Math.random() * 800 - 400],
      y: [0, Math.random() * 600 - 300],
      opacity: [0, 1, 0],
      transition: { duration: 2.5, ease: "easeOut" }
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-12 px-6 relative overflow-hidden">
      <motion.h1
        className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-500 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        $ZF Coin Vortex
      </motion.h1>
      <motion.div
        className="w-full max-w-3xl bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-xl shadow-2xl border border-cyan-500/50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-cyan-300 mb-4 drop-shadow-md">What It Does</h2>
        <p className="text-gray-200 mb-6 font-medium">
          Spins a vortex of $ZF energy—pre-launch power-ups for holders. Get ready for takeoff!
        </p>

        <h2 className="text-3xl font-bold text-cyan-300 mb-4 drop-shadow-md">How It Works</h2>
        <p className="text-gray-200 mb-6 font-medium">
          Connect your wallet to spin—unleash $ZF energy orbs that store power for launch. Non-holders see a still coin—$ZF coming soon!
        </p>

        <h2 className="text-3xl font-bold text-cyan-300 mb-4 drop-shadow-md">Try It Out</h2>
        <div className="relative w-full h-64 flex items-center justify-center">
          <motion.div
            className="w-48 h-48 rounded-full bg-gradient-to-br from-cyan-600 to-teal-500 shadow-2xl relative z-10"
            variants={coinVariants}
            animate={spinning ? "spin" : "idle"}
          >
            <div className="absolute w-56 h-56 bg-cyan-500/30 rounded-full animate-pulse"></div>
            <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-white drop-shadow-md">
              $ZF
            </span>
          </motion.div>
          {spinning && (
            <>
              <motion.div className="absolute w-6 h-6 bg-cyan-400 rounded-full" variants={orbVariants} animate="animate" style={{ top: "10%", left: "20%" }} />
              <motion.div className="absolute w-6 h-6 bg-teal-400 rounded-full" variants={orbVariants} animate="animate" style={{ top: "30%", right: "10%" }} />
              <motion.div className="absolute w-6 h-6 bg-cyan-300 rounded-full" variants={orbVariants} animate="animate" style={{ bottom: "15%", left: "15%" }} />
              <motion.div className="absolute w-6 h-6 bg-teal-300 rounded-full" variants={orbVariants} animate="animate" style={{ bottom: "25%", right: "20%" }} />
            </>
          )}
        </div>
        <motion.button
          className="mt-6 px-8 py-3 bg-gradient-to-r from-cyan-500 to-teal-500 text-white font-extrabold rounded-lg shadow-lg hover:from-cyan-600 hover:to-teal-600 transition duration-300"
          whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(6, 182, 212, 0.8)" }}
          whileTap={{ scale: 0.95 }}
          onClick={spinVortex}
          disabled={spinning || !hasZF}
        >
          Spin the Vortex
        </motion.button>
        <p className="text-2xl text-cyan-200 font-semibold mt-4 drop-shadow-sm">
          {hasZF ? `${energy} $ZF Energy Stored!` : "Coin Dormant"}
        </p>
        {hasZF && (
          <motion.p
            className="text-xl text-cyan-400 font-bold mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            $ZF Pre-Launch Power-Up!
          </motion.p>
        )}
        <p className="text-gray-300 mt-2 text-sm">
          {hasZF ? "Store energy for $ZF launch—spin to power up!" : "Connect wallet for $ZF pre-launch power!"}
        </p>
      </motion.div>
      {spinning && (
        <motion.div
          className="fixed inset-0 bg-black/30 z-50 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 0.5 }}
        />
      )}
    </div>
  );
};

export default CoinVortex;