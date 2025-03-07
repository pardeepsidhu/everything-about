"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import WorldMap from "@/components/ui/world-map";
import { cn } from "@/lib/utils";

export default function JoinMission({ theme }) {
  return (
    <div
      className={cn(
        "relative w-full h-[50vh] flex items-center justify-center transition-colors duration-500 overflow-hidden p-3",
        theme === "dark" ? "bg-black" : "bg-gray-100"
      )}
    >
  

      {/* Glassmorphic Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={`absolute ${theme === "light" ? "bg-gray-400" : "bg-white/10"} flex flex-col items-center justify-center p-8 rounded-2xl shadow-lg backdrop-blur-xl border border-white/20 text-white m-2`}

      >
        {/* Gradient Heading */}
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-cyan-400 to-yellow-400">
          Join Our Mission
        </h2>

        <p className="mt-3 text-lg opacity-80 text-center max-w-md">
          Help us reimagine the future of hiring in the tech industry.
        </p>
        
        {/* Call-to-Action Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 flex items-center gap-2 px-6 py-3 text-lg font-semibold rounded-full transition-all duration-300 bg-gradient-to-r from-pink-500 via-cyan-400 to-yellow-400 text-white shadow-lg hover:shadow-xl"
        >
          Start Here
          <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
        </motion.button>
      </motion.div>
    </div>
  );
}
