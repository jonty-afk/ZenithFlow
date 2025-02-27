import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const ZenithWheel = ({ walletAddress, balance }) => {
  const [hasZF, setHasZF] = useState(false);
  const [spinning, setSpinning] = useState(false);
  const [prize, setPrize] = useState(null);
  const prizes = ["1 SOL", "20 $ZF", "Triple Stake", "Nada", "Rare $ZF Shard"];

  useEffect(() => {
    if (walletAddress && balance) {
      setHasZF(true); // Full $ZF version
    } else {
      setHasZF(false);
      setPrize(null);
    }
  }, [walletAddress, balance]);

  const spinWheel = () => {
    if (!hasZF || spinning) return;
    setSpinning(true);
    setTimeout(() => {
      const randomPrize = prizes[Math.floor(Math.random() * prizes.length)];
      setPrize(randomPrize);
      setSpinning(false);
    }, 5000); // 5s epic spin
  };

  const wheelVariants = {
    spin: {
      rotate: [0, 1440], // 4 full spins
      scale: [1, 1.2, 0.8, 1.5],
      transition: { duration: 5, ease: "easeInOut" }
    },
    idle: { rotate: 0, scale: 1 }
  };

  const trailVariants = {
    animate: {
      x: [0, Math.random() * 1000 - 500],
      y: [0, Math.random() * 600 - 300],
      opacity: [0, 1, 0],
      transition: { duration: 2, repeat: Infinity, ease: "easeOut" }
    }
  };

  const shardVariants = {
    animate: {
      y: [0, 800],
      opacity: [1, 0],
      transition: { duration: 3, ease: "easeIn" }
    }
  };

  const prizeVariants = {
    reveal: {
      scale: [0, 2, 1],
      opacity: [0, 1],
      transition: { duration: 1, delay: 5.2 }
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-12 px-6 relative overflow-hidden">
      <motion.h1
        className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-500 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        $ZF Zenith Portal
      </motion.h1>
      <motion.div
        className="w-full max-w-3xl bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-xl shadow-2xl border border-red-500/50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-red-300 mb-4 drop-shadow-md">What It Does</h2>
        <p className="text-gray-200 mb-6 font-medium">
          Tears open a cosmic portal—spins for $ZF-powered loot, exclusive to holders. Brace for the chaos!
        </p>

        <h2 className="text-3xl font-bold text-red-300 mb-4 drop-shadow-md">How It Works</h2>
        <p className="text-gray-200 mb-6 font-medium">
          Hold $ZF to spin—unleash a vortex of light and $ZF shards, revealing epic prizes. Non-holders see a dormant gate. Future spins bring real rewards!
        </p>

        <h2 className="text-3xl font-bold text-red-300 mb-4 drop-shadow-md">Try It Out</h2>
        <div className="relative w-full h-64 flex items-center justify-center">
          <motion.div
            className="w-56 h-56 rounded-full bg-gradient-to-br from-red-600 to-pink-600 shadow-2xl relative flex items-center justify-center z-10"
            variants={wheelVariants}
            animate={spinning ? "spin" : "idle"}
          >
            {prizes.map((p, i) => (
              <motion.div
                key={i}
                className="absolute text-sm text-white font-bold transform"
                style={{
                  transform: `rotate(${i * 72}deg) translateY(-100px)`,
                  textShadow: "0 0 10px rgba(255, 255, 255, 0.9)"
                }}
              >
                {p}
              </motion.div>
            ))}
            <div className="absolute w-64 h-64 bg-red-500/30 rounded-full animate-pulse"></div>
          </motion.div>
          {spinning && (
            <>
              {/* Full-screen light trails */}
              <motion.div className="absolute w-4 h-4 bg-red-400 rounded-full" variants={trailVariants} animate="animate" style={{ top: "10%", left: "20%" }} />
              <motion.div className="absolute w-4 h-4 bg-pink-400 rounded-full" variants={trailVariants} animate="animate" style={{ top: "30%", right: "10%" }} />
              <motion.div className="absolute w-4 h-4 bg-red-300 rounded-full" variants={trailVariants} animate="animate" style={{ bottom: "15%", left: "15%" }} />
              <motion.div className="absolute w-4 h-4 bg-pink-300 rounded-full" variants={trailVariants} animate="animate" style={{ bottom: "25%", right: "20%" }} />
              {/* $ZF shards raining */}
              <motion.div className="absolute w-6 h-6 bg-yellow-400 clip-path-pentagon" variants={shardVariants} animate="animate" style={{ top: "-10%", left: "30%" }} />
              <motion.div className="absolute w-6 h-6 bg-yellow-300 clip-path-pentagon" variants={shardVariants} animate="animate" style={{ top: "-20%", right: "40%" }} />
              <motion.div className="absolute w-6 h-6 bg-yellow-400 clip-path-pentagon" variants={shardVariants} animate="animate" style={{ top: "-15%", left: "60%" }} />
            </>
          )}
          {prize && (
            <motion.p
              className="absolute text-4xl text-red-200 font-extrabold z-20 drop-shadow-lg"
              variants={prizeVariants}
              initial={{ opacity: 0 }}
              animate="reveal"
            >
              {prize}
            </motion.p>
          )}
        </div>
        <motion.button
          className="mt-6 px-8 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white font-extrabold rounded-lg shadow-lg hover:from-red-600 hover:to-pink-600 transition duration-300"
          whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(239, 68, 68, 0.8)" }}
          whileTap={{ scale: 0.95 }}
          onClick={spinWheel}
          disabled={spinning || !hasZF}
        >
          Spin the Portal
        </motion.button>
        <p className="text-gray-300 mt-4 text-sm">
          {hasZF ? "Unleash the $ZF vortex—cosmic loot awaits!" : "Hold $ZF to open the Zenith Portal!"}
        </p>
      </motion.div>

      {/* Full-screen overlay for effects */}
      {spinning && (
        <motion.div
          className="fixed inset-0 bg-black/50 z-50 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 0.5 }}
        />
      )}
    </div>
  );
};

export default ZenithWheel;

// Add this to index.css for the pentagon shape
/*
.clip-path-pentagon {
  clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
}
*/