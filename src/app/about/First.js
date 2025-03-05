'use client';

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function AboutSection({theme}) {
  // const { theme, systemTheme } = useTheme();
  const [isDark, setIsDark] = useState(theme==="dark");

  // useEffect(() => {
  //   const currentTheme = theme === "system" ? systemTheme : theme;
  //   setIsDark(currentTheme !== "dark");
  // }, [theme, systemTheme]);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Shooting Stars Background */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 ${isDark ? "bg-black" : "bg-gray-100"}`} />
        <div className="stars absolute inset-0" />
      </div>

      {/* Content */}
      <div className={`relative flex flex-col md:flex-row items-center justify-between gap-8 p-8 max-w-5xl mx-auto antialiased transition-colors duration-300 `}>
        {/* Left Content */}
        <div className=" w-full flex-1 space-y-4 relative z-10">
          <p className="text-lg text-gray-800">ABOUT US</p>
          <h1 className={`text-5xl font-bold leading-tight bg-clip-text text-transparent ${isDark ? "bg-gradient-to-b from-blue-400 to-purple-500" : "bg-gradient-to-b from-gray-800 to-gray-400"}`}>
          Shaping the Next Generation of HR Tech Recruitment.
          </h1>
          <p className={`max-w-lg ${isDark ? "text-gray-300" : "text-gray-700"}`}>
          At Everything Talent, we help you launch your recruitment into a new dimension.
          </p>
          <div className="relative inline-block group">
            <Button className="px-6 py-3 text-lg font-medium relative z-10 bg-blue-500 text-white rounded-lg">
              Start For Free Today &rarr;
            </Button>
            <div className="absolute inset-0 border-2 border-transparent rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>

        {/* Right Content with Linear Gradient Border */}
        <div className="relative flex-1 flex justify-center items-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96 before:absolute before:inset-0 before:rounded-lg before:p-[6px] before:bg-gradient-to-r before:from-blue-500 before:via-purple-500 before:to-pink-500 before:content-['']">
            <div className="relative w-full h-full bg-white rounded-lg overflow-hidden">
              <Image
                src="https://www.everythingtalent.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FheroBg2.7b22de17.png&w=640&q=75"
                alt="About Us"
                width={600}
                height={600}
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Multiple shooting star layers with different colors and speeds */}
      <ShootingStars
        starColor={isDark ? "#9E00FF" : "#FFD700"}
        trailColor={isDark ? "#2EB9DF" : "#FFA500"}
        minSpeed={15}
        maxSpeed={35}
        minDelay={1000}
        maxDelay={3000}
      />
      <ShootingStars
        starColor={isDark ? "#FF0099" : "#00BFFF"}
        trailColor={isDark ? "#FFB800" : "#32CD32"}
        minSpeed={10}
        maxSpeed={25}
        minDelay={2000}
        maxDelay={4000}
      />
      <ShootingStars
        starColor={isDark ? "#00FF9E" : "#FF4500"}
        trailColor={isDark ? "#00B8FF" : "#8A2BE2"}
        minSpeed={20}
        maxSpeed={40}
        minDelay={1500}
        maxDelay={3500}
      />

      <style jsx>{`
        .stars {
          background-image: 
            radial-gradient(2px 2px at 20px 30px, ${isDark ? "#eee" : "#444"}, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 40px 70px, ${isDark ? "#fff" : "#666"}, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 50px 160px, ${isDark ? "#ddd" : "#888"}, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 90px 40px, ${isDark ? "#fff" : "#999"}, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 130px 80px, ${isDark ? "#fff" : "#bbb"}, rgba(0,0,0,0)),
            radial-gradient(2px 2px at 160px 120px, ${isDark ? "#ddd" : "#ccc"}, rgba(0,0,0,0));
          background-repeat: repeat;
          background-size: 200px 200px;
          animation: twinkle 5s ease-in-out infinite;
          opacity: 0.5;
        }

        @keyframes twinkle {
          0% { opacity: 0.5; }
          50% { opacity: 0.8; }
          100% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
}
