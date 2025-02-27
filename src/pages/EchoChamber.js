import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const EchoChamber = ({ walletAddress, balance }) => {
  const [hasZF, setHasZF] = useState(false);
  const [echoes, setEchoes] = useState([]);

  useEffect(() => {
    if (walletAddress && balance) {
      setHasZF(true);
      setEchoes([{ x: 0, y: 0, size: 20, color: "#9333ea" }]);
    } else {
      setHasZF(false);
      setEchoes([]);
    }
  }, [walletAddress, balance]);

  useEffect(() => {
    if (hasZF) {
      const interval = setInterval(() => {
        setEchoes((prev) => {
          const newEcho = {
            x: Math.random() * 300 - 150, // Wider range
            y: Math.random() * 200 - 100,
            size: Math.random() * 20 + 10,
            color: Math.random() > 0.5 ? "#9333ea" : "#d8b4fe"
          };
          return prev.length < 20 ? [...prev, newEcho] : prev;
        });
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [hasZF]);

  const echoVariants = {
    animate: {
      scale: [1, 1.2, 1],
      opacity: [0.5, 1, 0.5],
      transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-12 px-6">
      <motion.h1
        className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        $ZF Echo Chamber
      </motion.h1>
      <motion.div
        className="w-full max-w-3xl bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-xl shadow-2xl border border-purple-500/50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-purple-300 mb-4 drop-shadow-md">What It Does</h2>
        <p className="text-gray-200 mb-6 font-medium">
          Unleashes a swarm of $ZF-powered echoes—living soundwaves that multiply and dance, exclusive to $ZF holders. Feel the crypto pulse!
        </p>

        <h2 className="text-3xl font-bold text-purple-300 mb-4 drop-shadow-md">How It Works</h2>
        <p className="text-gray-200 mb-6 font-medium">
          Hold $ZF to awaken the Chamber—spawns echoes that grow, evolve, and hint at future $ZF perks. Non-holders hear only silence.
        </p>

        <h2 className="text-3xl font-bold text-purple-300 mb-4 drop-shadow-md">Try It Out</h2>
        <div className="bg-purple-900/30 p-6 rounded-lg border border-purple-400/20">
          {/* Swarm Area */}
          <div className="relative w-full h-64 overflow-hidden">
            {hasZF ? (
              <>
                {echoes.map((echo, i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-full"
                    style={{ backgroundColor: echo.color, width: echo.size, height: echo.size, left: `calc(50% + ${echo.x}px)`, top: `calc(50% + ${echo.y}px)` }}
                    variants={echoVariants}
                    animate="animate"
                  />
                ))}
                <motion.p
                  className="text-xl text-purple-400 font-bold absolute top-2 left-1/2 transform -translate-x-1/2 z-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  $ZF Holder Exclusive
                </motion.p>
              </>
            ) : (
              <p className="absolute inset-0 flex items-center justify-center text-2xl text-gray-400 z-10">
                Silent Void—Hold $ZF to awaken!
              </p>
            )}
          </div>
          {/* Text Below */}
          <div className="text-center mt-4">
            <p className="text-2xl text-purple-200 font-semibold drop-shadow-sm">
              {hasZF ? `${echoes.length} Echoes Active` : "Chamber Silent"}
            </p>
            <p className="text-gray-300 mt-2 text-sm">
              {hasZF ? "Echoes multiply—$ZF powers the swarm!" : "Join the $ZF elite to ignite the echoes!"}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default EchoChamber;