import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const GenesisForge = ({ walletAddress, balance }) => {
  const [hasZF, setHasZF] = useState(false);
  const [drone, setDrone] = useState({ name: "Inactive Forge", trait: "Buy $ZF to activate!", perk: "" });
  const [day, setDay] = useState(0);

  const droneStages = [
    { name: "Nano Scout", trait: "Stealth Scout", perk: "+5 $ZF Energy" },
    { name: "Pulse Drone", trait: "Energy Harvester", perk: "+0.1 SOL Boost" },
    { name: "Quantum Sentinel", trait: "Cosmic Guardian", perk: "Double $ZF Yield" },
    { name: "Nebula Titan", trait: "Starforge Elite", perk: "Unlock Drone Battles" }
  ];

  useEffect(() => {
    if (walletAddress && balance) {
      setHasZF(true); // Full version—assume $ZF for now
      setDrone(droneStages[0]); // Start with first drone
    } else {
      setHasZF(false);
      setDrone({ name: "Inactive Forge", trait: "Buy $ZF to activate!", perk: "" });
    }
  }, [walletAddress, balance]);

  useEffect(() => {
    if (hasZF) {
      const interval = setInterval(() => {
        setDay((prev) => {
          const newDay = prev + 1;
          if (newDay <= droneStages.length) {
            setDrone(droneStages[newDay - 1]);
          }
          return newDay > droneStages.length ? 1 : newDay;
        });
      }, 5000); // Evolve every 5s
      return () => clearInterval(interval);
    }
  }, [hasZF]);

  const particleVariants = {
    animate: {
      x: [0, 10, -10, 0],
      y: [0, -10, 10, 0],
      opacity: [0, 1, 0],
      transition: { duration: 2, repeat: Infinity, ease: "easeInOut" }
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-12 px-6">
      <motion.h1
        className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        $ZF Genesis Forge
      </motion.h1>
      <motion.div
        className="w-full max-w-3xl bg-gradient-to-b from-gray-800 to-gray-900 p-8 rounded-xl shadow-2xl border border-blue-500/50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-blue-300 mb-4 drop-shadow-md">What It Does</h2>
        <p className="text-gray-200 mb-6 font-medium">
          Forges exclusive $ZF-powered drones—evolving entities that unlock perks and grow stronger over time, only for $ZF holders. Watch your hive grow!
        </p>

        <h2 className="text-3xl font-bold text-blue-300 mb-4 drop-shadow-md">How It Works</h2>
        <p className="text-gray-200 mb-6 font-medium">
          Hold $ZF to activate the Forge—spawns a unique drone that evolves daily, unlocking $ZF perks and future utilities. Non-holders see a dormant core.
        </p>

        <h2 className="text-3xl font-bold text-blue-300 mb-4 drop-shadow-md">Try It Out</h2>
        <div className="bg-blue-900/30 p-6 rounded-lg border border-blue-400/20 relative overflow-hidden">
          <div className="relative w-40 h-40 mx-auto">
            <motion.div
              className="w-40 h-40 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-xl font-bold text-white shadow-lg absolute"
              animate={hasZF ? { scale: [1, 1.1, 1], rotate: [0, 360] } : { scale: 1 }}
              transition={{ duration: 2, repeat: hasZF ? Infinity : 0, ease: "easeInOut" }}
            >
              <div className="absolute w-48 h-48 bg-blue-500/20 rounded-full animate-pulse"></div>
              {hasZF ? (
                <span className="z-10">🤖</span>
              ) : (
                <span className="z-10">🔒</span>
              )}
            </motion.div>
            {hasZF && (
              <>
                <motion.div className="absolute w-4 h-4 bg-blue-400 rounded-full" variants={particleVariants} animate="animate" style={{ top: "10%", left: "20%" }} />
                <motion.div className="absolute w-4 h-4 bg-purple-400 rounded-full" variants={particleVariants} animate="animate" style={{ top: "30%", right: "10%" }} />
                <motion.div className="absolute w-4 h-4 bg-blue-300 rounded-full" variants={particleVariants} animate="animate" style={{ bottom: "15%", left: "15%" }} />
                <motion.div className="absolute w-4 h-4 bg-purple-300 rounded-full" variants={particleVariants} animate="animate" style={{ bottom: "25%", right: "20%" }} />
              </>
            )}
          </div>
          <p className="text-2xl text-blue-200 font-semibold mt-4 drop-shadow-sm">
            {hasZF ? `${drone.name} (Day ${day})` : "Forge Dormant"}
          </p>
          {hasZF && (
            <motion.p
              className="text-xl text-blue-400 font-bold mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              $ZF Holder Exclusive
            </motion.p>
          )}
          <p className="text-gray-100 mt-2 font-medium">
            {hasZF ? `Trait: ${drone.trait}` : "Buy $ZF to activate!"}
          </p>
          <p className="text-gray-100 mt-1 font-medium">
            {hasZF ? `Perk: ${drone.perk}` : "Exclusive to $ZF holders!"}
          </p>
          <p className="text-gray-300 mt-2 text-sm">
            {hasZF ? "Drones evolve daily—your $ZF hive thrives!" : "Join the $ZF elite to spawn your drone!"}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default GenesisForge;