import React from "react";
import { motion } from "framer-motion";

const Roadmap = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center py-12 px-6">
      <motion.h1
        className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        ZenithFlow Roadmap
      </motion.h1>
      <p className="text-gray-400 mb-12 text-lg max-w-2xl text-center">
        $ZF stirs Solana’s core—this is just the dawn. Bigger chaos looms. Stay locked in!
      </p>

      <div className="w-full max-w-4xl space-y-8">
        {/* Phase 1 */}
        <motion.div
          className="bg-gradient-to-r from-blue-900/50 to-gray-800/50 p-6 rounded-xl shadow-lg border border-blue-500/30"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-blue-400 mb-2">Phase 1: Genesis Ignites (Now)</h2>
          <p className="text-gray-300">
            Genesis Forge launches—$ZF’s first spark. Chaos Zone hums with drones and secrets.
          </p>
        </motion.div>

        {/* Phase 2 */}
        <motion.div
          className="bg-gradient-to-r from-purple-900/50 to-gray-800/50 p-6 rounded-xl shadow-lg border border-purple-500/30"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-purple-400 mb-2">Phase 2: Echoes Expand (Q2 2025)</h2>
          <p className="text-gray-300">
            Echo Chamber grows—$ZF powers new soundwaves. Staking whispers begin to stir.
          </p>
        </motion.div>

        {/* Phase 3 */}
        <motion.div
          className="bg-gradient-to-r from-red-900/50 to-gray-800/50 p-6 rounded-xl shadow-lg border border-red-500/30"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-red-400 mb-2">Phase 3: Portal Unleashed (Q3 2025)</h2>
          <p className="text-gray-300">
            Zenith Portal rips open—$ZF staking surges. AI agents tease chaos control.
          </p>
        </motion.div>

        {/* Phase 4 */}
        <motion.div
          className="bg-gradient-to-r from-cyan-900/50 to-gray-800/50 p-6 rounded-xl shadow-lg border border-cyan-500/30"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-cyan-400 mb-2">Phase 4: Vortex Ascends (Q4 2025)</h2>
          <p className="text-gray-300">
            Coin Vortex spins wild—$ZF energy flows. AI agents forge unseen realms.
          </p>
        </motion.div>

        {/* Phase 5 */}
        <motion.div
          className="bg-gradient-to-r from-yellow-900/50 to-gray-800/50 p-6 rounded-xl shadow-lg border border-yellow-500/30"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-2xl font-bold text-yellow-400 mb-2">Phase 5: Chaos Reigns (2026)</h2>
          <p className="text-gray-300">
            $ZF’s grand storm hits—AI agents rule the Chaos Zone. ZenithFlow towers beyond!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Roadmap;