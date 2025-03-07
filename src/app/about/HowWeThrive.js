"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { WarpBackground } from "@/components/magicui/warp-background";
import { cn } from "@/lib/utils";
import { Users, Lightbulb, Zap, BarChart, Star, Handshake } from "lucide-react"; // Icons
import { useEffect, useState } from "react";

const thriveCards = [
  { title: "Community-Driven", description: "We build strong connections and foster collaboration within our team.", icon: Users },
  { title: "Innovation First", description: "We encourage creative thinking and novel approaches to challenges.", icon: Lightbulb },
  { title: "Action Oriented", description: "We transform ideas into tangible results through decisive action.", icon: Zap },
  { title: "Continuous Growth", description: "We embrace learning and development as core principles.", icon: BarChart },
  { title: "Excellence Pursuit", description: "We strive for exceptional quality in everything we do.", icon: Star },
  { title: "Shared Success", description: "We celebrate achievements and grow together as one team.", icon: Handshake },
];

const HowWeThrive = ({ theme }) => {
  const [isDark,setIsDark]=useState(theme === "dark")
  useEffect(()=>{
    setIsDark(theme==="dark")
  },[theme])
  return (
    <WarpBackground className={cn(
      "w-full  border-0 rounded-none flex items-center justify-between px-6 md:px-16 py-20 transition-all duration-500",
      isDark ? "bg-black text-white" : "bg-gray-100 text-gray-900"
    )}>
      <div className="flex flex-wrap justify-center items-center w-full">
      
        {/* Left Side - Image */}
        <motion.div 
          className="w-full lg:w-1/2 h-96 lg:h-[500px] relative overflow-hidden rounded-xl shadow-xl"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image 
            src="https://www.everythingtalent.ai/_next/image?url=%2Fassets%2Flanding-page%2Finsight-img-2.jpeg&w=768&q=75" 
            alt="How We Thrive" 
            layout="fill" 
            objectFit="cover"
            className="rounded-xl" 
          />
        </motion.div>

        {/* Right Side - Content */}
        <div className="w-full lg:w-1/2 space-y-6 lg:pl-12 mt-10 lg:mt-0">
          <h2 className="text-3xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-yellow-500">
            How We Thrive
          </h2>
          <p className="text-md font-medium">
            At Everything Talent, we break the norm. Driven by community, we empower individuals to innovate, learn, and push boundaries—fostering shared growth and a relentless pursuit of excellence.
          </p>

          {/* Thrive Cards */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 mt-6">
            {thriveCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div 
                  key={index} 
                  className="group relative w-full sm:w-full rounded-xl shadow-lg p-4 sm:p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-gradient-to-br from-cyan-500 to-yellow-500 text-white flex flex-col items-start"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Icon */}
                  <Icon className="w-8 h-8 text-white group-hover:text-black transition-colors duration-300" />
                  
                  {/* Card Content */}
                  <CardContent className="flex flex-col h-auto text-wrap gap-2 mt-2">
                    <h3 className="text-sm font-semibold group-hover:text-black transition-colors duration-300">
                      {card.title}
                    </h3>
                    <p className="text-xs opacity-80 group-hover:text-black transition-colors duration-300">
                      {card.description}
                    </p>
                  </CardContent>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </WarpBackground>
  );
};

export default HowWeThrive;
