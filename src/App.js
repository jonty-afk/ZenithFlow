import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PublicKey, Connection, clusterApiUrl } from "@solana/web3.js";
import Home from "./pages/Home";
import About from "./pages/About";
import Tokenomics from "./pages/Tokenomics";
import Roadmap from "./pages/Roadmap";
import FAQ from "./pages/FAQ";
import Staking from "./pages/Staking";
import Dashboard from "./pages/Dashboard";
import Chaos from "./pages/Chaos";
import GenesisForge from "./pages/GenesisForge";
import EchoChamber from "./pages/EchoChamber";
import ZenithWheel from "./pages/ZenithWheel";
import Whisperer from "./pages/Whisperer";
import CoinVortex from "./pages/CoinVortex"; // Replace CoinFlip
import TimeCapsule from "./pages/TimeCapsule";

const App = () => {
  const [walletAddress, setWalletAddress] = useState(null);
  const [balance, setBalance] = useState(null);
  const [staked, setStaked] = useState(0);
  const [rewards, setRewards] = useState(0);

  const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

  const connectWallet = async () => {
    try {
      console.log("Attempting to connect wallet...");
      if ("solana" in window) {
        console.log("Solana detected in window!");
        const provider = window.solana;
        console.log("Provider:", provider);
        if (provider.isPhantom) {
          console.log("Phantom detected, connecting...");
          const response = await provider.connect();
          console.log("Response:", response);
          const publicKey = new PublicKey(response.publicKey.toString());
          setWalletAddress(publicKey.toString());
          const balanceInLamports = await connection.getBalance(publicKey);
          const balanceInSOL = balanceInLamports / 1_000_000_000;
          setBalance(balanceInSOL.toFixed(2));
          console.log("Connected to wallet:", publicKey.toString());
        } else {
          alert("Please install Phantom wallet or another Solana-compatible wallet!");
        }
      } else {
        alert("No Solana wallet found! Install Phantom or another wallet extension.");
      }
    } catch (error) {
      console.error("Wallet connection failed:", error);
      alert("Failed to connect wallet. Check your wallet extension and try again.");
    }
  };

  const disconnectWallet = async () => {
    if ("solana" in window && window.solana.isConnected) {
      await window.solana.disconnect();
      setWalletAddress(null);
      setBalance(null);
      console.log("Wallet disconnected");
    }
  };

  return (
    <Router>
      <div className="bg-gradient-to-r from-black via-gray-900 to-black text-white min-h-screen flex flex-col relative overflow-hidden">
        <div className="absolute inset-0 -z-10 animate-pulse bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl opacity-20"></div>

        <nav className="flex justify-between items-center p-6 bg-gray-900 shadow-md fixed top-0 left-0 w-full z-10">
          <div className="flex items-center">
            <motion.svg
              className="w-8 h-8 mr-2"
              viewBox="0 0 24 24"
              fill="none"
              stroke="url(#grad)"
              strokeWidth="2"
              whileHover={{ scale: 1.1 }}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: "#60a5fa" }} />
                  <stop offset="100%" style={{ stopColor: "#a78bfa" }} />
                </linearGradient>
              </defs>
              <path d="M12 2L2 9.5V21h20V9.5L12 2zM12 6l6 5v4h-12v-4l6-5z" />
            </motion.svg>
            <motion.h1
              className="text-2xl font-extrabold tracking-wide !text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 whitespace-nowrap overflow-hidden max-w-[250px] truncate"
              whileHover={{ scale: 1.05, x: 5 }}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              ZenithFlow
            </motion.h1>
          </div>
          <div className="flex items-center space-x-6">
            <Link to="/" className="hover:text-blue-400 transition duration-300">Home</Link>
            <Link to="/dashboard" className="hover:text-blue-400 transition duration-300">Dashboard</Link>
            <Link to="/about" className="hover:text-blue-400 transition duration-300">About</Link>
            <Link to="/tokenomics" className="hover:text-blue-400 transition duration-300">Tokenomics</Link>
            <Link to="/roadmap" className="hover:text-blue-400 transition duration-300">Roadmap</Link>
            <Link to="/staking" className="hover:text-blue-400 transition duration-300">Staking</Link>
            <Link to="/faq" className="hover:text-blue-400 transition duration-300">FAQ</Link>
            <motion.a
              href="https://x.com/Zenith_Flow_"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 bg-black rounded-full border border-blue-500 hover:bg-gray-800 transition duration-300"
              whileHover={{ scale: 1.2, rotate: 3, boxShadow: "0 0 10px rgba(59, 130, 246, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </motion.a>
            <motion.button
              className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
              whileHover={{ scale: 1.05, boxShadow: "0 0 10px rgba(59, 130, 246, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              onClick={walletAddress ? disconnectWallet : connectWallet}
            >
              {walletAddress
                ? `${walletAddress.slice(0, 4)}...${walletAddress.slice(-4)} (${balance ? `${balance} SOL` : "Loading..."})`
                : "Connect Wallet"}
            </motion.button>
          </div>
        </nav>

        <div className="flex-1 px-6 pt-20 pb-10 flex flex-col items-center justify-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard walletBalance={balance} stakedAmount={staked} stakingRewards={rewards} />} />
            <Route path="/about" element={<About />} />
            <Route path="/tokenomics" element={<Tokenomics />} />
            <Route path="/roadmap" element={<Roadmap />} />
            <Route path="/staking" element={<Staking staked={staked} setStaked={setStaked} rewards={rewards} setRewards={setRewards} />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/chaos" element={<Chaos walletAddress={walletAddress} balance={balance} connectWallet={connectWallet} />} />
            <Route path="/chaos/genesis-forge" element={<GenesisForge walletAddress={walletAddress} balance={balance} />} />
            <Route path="/chaos/echo-chamber" element={<EchoChamber walletAddress={walletAddress} balance={balance} />} />
            <Route path="/chaos/zenith-wheel" element={<ZenithWheel walletAddress={walletAddress} balance={balance} />} />
            <Route path="/chaos/whisperer" element={<Whisperer walletAddress={walletAddress} balance={balance} />} />
            <Route path="/chaos/coin-vortex" element={<CoinVortex walletAddress={walletAddress} balance={balance} />} />
            <Route path="/chaos/time-capsule" element={<TimeCapsule walletAddress={walletAddress} balance={balance} />} />
          </Routes>
        </div>

        <footer className="text-center p-4 bg-gray-900 text-gray-400 text-sm">
          © 2025 ZenithFlow. All rights reserved.
        </footer>
      </div>
    </Router>
  );
};

export default App;