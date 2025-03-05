"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BackgroundBeams as Background } from "@/components/ui/background-beams";

const StoryBehindUs = ({ theme }) => {
  const isDark = theme === "dark";

  const cards = [
    {
      title: "AI-Powered",
      description: "Advanced AI/ML algorithms for precise matching.",
    },
    {
      title: "Human-Centric",
      description: "Built by recruiters, for recruiters.",
    },
    {
      title: "Skill Assessment",
      description: "Comprehensive skill evaluation system.",
    },
    {
      title: "Future-Ready",
      description: "Constantly evolving with industry needs.",
    },
  ];

  return (
    <div className={`relative w-full min-h-screen transition-all duration-500 ${isDark ? "bg-black text-white" : "bg-gray-100 text-gray-900"}`}>
      {/* Background Component */}
      <Background theme={theme} className="absolute inset-0 w-full h-full" />

      {/* Main Content */}
      <div className="relative flex flex-col md:flex-row items-center justify-between w-full p-6 md:p-16">
        {/* Left Section */}
        <div className="flex-1 text-start space-y-6 max-w-lg">
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            The Story Behind Us
          </motion.h2>

          <motion.p
            className="text-lg font-medium leading-relaxed"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            It all started with one question: <br />
            <span className="italic font-semibold text-blue-600 dark:text-blue-400">
              What if hiring didn’t have to feel like gambling on a hunch?
            </span>
          </motion.p>

          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-2xl shadow-lg backdrop-blur-lg bg-white/10 dark:bg-black/20 border border-white/20 dark:border-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-sm">{card.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Image (Hidden in Mobile) */}
        <motion.div
          className="hidden md:flex flex-1 justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="https://c0.wallpaperflare.com/preview/811/935/645/adults-analysis-brainstorming-collaboration.jpg"
            alt="Team Working"
            width={600}
            height={700}
            className="rounded-lg shadow-xl"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default StoryBehindUs;
