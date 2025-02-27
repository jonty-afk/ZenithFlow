import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Chaos = ({ walletAddress, balance, connectWallet }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-12 px-6">
      <motion.h1
        className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Zenith Chaos Zone
      </motion.h1>
      <p className="text-gray-400 mb-6 text-sm italic">
        Beta Test: More features coming—earn SOL & $ZF with games!
      </p>
      {!walletAddress && (
        <motion.button
          className="mb-8 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-extrabold rounded-lg shadow-lg hover:from-blue-600 hover:to-purple-600 transition duration-300"
          whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(59, 130, 246, 0.8)" }}
          whileTap={{ scale: 0.95 }}
          onClick={connectWallet}
        >
          Connect Your Wallet to Unleash All Features!
        </motion.button>
      )}

      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
        <Link to="/chaos/genesis-forge">
          <motion.div
            className="bg-gradient-to-r from-blue-900 to-gray-800 p-6 rounded-xl shadow-lg border border-blue-500/50 hover:border-blue-400 transition duration-300 relative overflow-hidden"
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(59, 130, 246, 0.7)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, borderColor: ["#3b82f6", "#8b5cf6", "#3b82f6"] }}
            transition={{ duration: 0.6, borderColor: { duration: 1.5, repeat: Infinity } }}
          >
            <div className="absolute inset-0 bg-blue-500/10 animate-pulse"></div>
            <h2 className="text-2xl font-extrabold text-blue-300 mb-2 relative z-10 drop-shadow-md">
              $ZF Genesis Forge
            </h2>
            <p className="text-gray-200 relative z-10 font-semibold">
              Evolve drones with $ZF power!
            </p>
          </motion.div>
        </Link>

        <Link to="/chaos/echo-chamber">
          <motion.div
            className="bg-gradient-to-r from-purple-900 to-gray-800 p-6 rounded-xl shadow-lg border border-purple-500/50 hover:border-purple-400 transition duration-300 relative overflow-hidden"
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(147, 51, 234, 0.7)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, borderColor: ["#9333ea", "#d8b4fe", "#9333ea"] }}
            transition={{ duration: 0.6, borderColor: { duration: 1.5, repeat: Infinity } }}
          >
            <div className="absolute inset-0 bg-purple-500/10 animate-pulse"></div>
            <h2 className="text-2xl font-extrabold text-purple-300 mb-2 relative z-10 drop-shadow-md">
              $ZF Echo Chamber
            </h2>
            <p className="text-gray-200 relative z-10 font-semibold">
              Unleash $ZF soundwaves!
            </p>
          </motion.div>
        </Link>

        <Link to="/chaos/zenith-wheel">
          <motion.div
            className="bg-gradient-to-r from-red-900 to-gray-800 p-6 rounded-xl shadow-lg border border-red-500/50 hover:border-red-400 transition duration-300 relative overflow-hidden"
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(239, 68, 68, 0.7)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, borderColor: ["#ef4444", "#f87171", "#ef4444"] }}
            transition={{ duration: 0.6, borderColor: { duration: 1.5, repeat: Infinity } }}
          >
            <div className="absolute inset-0 bg-red-500/10 animate-pulse"></div>
            <h2 className="text-2xl font-extrabold text-red-300 mb-2 relative z-10 drop-shadow-md">
              $ZF Zenith Portal
            </h2>
            <p className="text-gray-200 relative z-10 font-semibold">
              Rip open $ZF riches!
            </p>
          </motion.div>
        </Link>

        <Link to="/chaos/coin-vortex">
          <motion.div
            className="bg-gradient-to-r from-cyan-900 to-gray-800 p-6 rounded-xl shadow-lg border border-cyan-500/50 hover:border-cyan-400 transition duration-300 relative overflow-hidden"
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(6, 182, 212, 0.7)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0, borderColor: ["#06b6d4", "#22d3ee", "#06b6d4"] }}
            transition={{ duration: 0.6, borderColor: { duration: 1.5, repeat: Infinity } }}
          >
            <div className="absolute inset-0 bg-cyan-500/10 animate-pulse"></div>
            <h2 className="text-2xl font-extrabold text-cyan-300 mb-2 relative z-10 drop-shadow-md">
              $ZF Coin Vortex
            </h2>
            <p className="text-gray-200 relative z-10 font-semibold">
              Spin up $ZF energy!
            </p>
          </motion.div>
        </Link>

        <Link to="/chaos/whisperer">
          <motion.div
            className="bg-gradient-to-r from-green-900/50 to-gray-800/50 p-6 rounded-xl shadow-lg border border-green-500/30 hover:border-green-500 transition duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(34, 197, 94, 0.5)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-green-400 mb-2">Wallet Whisperer</h2>
            <p className="text-gray-300">Sassy truths from your wallet.</p>
          </motion.div>
        </Link>

        <Link to="/chaos/time-capsule">
          <motion.div
            className="bg-gradient-to-r from-yellow-900/50 to-gray-800/50 p-6 rounded-xl shadow-lg border border-yellow-500/30 hover:border-yellow-500 transition duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(234, 179, 8, 0.5)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <h2 className="text-2xl font-bold text-yellow-400 mb-2">Time Capsule</h2>
            <p className="text-gray-300">Lock a secret for the future.</p>
          </motion.div>
        </Link>
      </div>
    </div>
  );
};

export default Chaos;