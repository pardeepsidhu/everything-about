'use client';

import { RainbowButton } from "@/components/magicui/rainbow-button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail } from "lucide-react";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const cards = [
  {
    intro: "Everything AI 2.0",
    title: "2024",
    description: "Launched Everything AI 2.0 with advanced AI-powered analytics, customizable insights, and expanded user features.",
    details: [
      { title: "50K+", desc: "Users" },
      { title: "98%", desc: "Accuracy" },
      { title: "2x faster", desc: "Processing" },
    ],
    image: "https://www.everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2F2024.jpg&w=1400&q=75",
  },
  {
    intro: "ML Integration",
    title: "2023",
    description: "Introduced personalized machine learning models for users, enhancing prediction accuracy by 30%. Everything AI also launched its first integration with popular CRM tools, allowing seamless data sharing.",
    details: [
      { title: "+30%", desc: "Accuracy" },
      { title: "15+", desc: "Integrations" },
      { title: "25K+", desc: "Users" },
    ],
    image: "https://www.everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2F2023.jpg&w=1400&q=75",
  },
  {
    intro: "The Beginning",
    title: "2022",
    description: "Everything AI was officially launched! Released initial AI-powered automation features for data processing and visualization, setting a foundation for growth in intelligent data solutions.",
    details: [
      { title: "10+", desc: "Features" },
      { title: "1M+", desc: "Data Processed" },
      { title: "1K+", desc: "Clients" },
    ],
    image: "https://www.everythingtalent.ai/_next/image?url=%2Fassets%2Fabout-us%2F2022.jpg&w=1400&q=75",
  },
];

export default function OurJourney({ theme }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  const textColor = theme === 'dark' ? 'text-white' : 'text-gray-900';
  const subTextColor = theme === 'dark' ? 'text-gray-400' : 'text-gray-600';
  const cardBg = theme === 'dark' ? 'bg-gray-900' : 'bg-white';
  const buttonBg = theme === 'dark' ? 'bg-white text-black' : 'bg-black text-white';

  return (
    <section className={`${theme === 'dark' ? 'bg-black' : 'bg-gray-100'} min-h-screen py-12 px-4 sm:px-6 md:px-12 lg:px-24`}>
      {/* Heading Section */}
      <div className="text-center mb-10 sm:mb-12">
        <h4 className={`text-sm sm:text-md font-medium ${subTextColor}`}>Our Values & Milestones</h4>
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 via-cyan-500 to-yellow-500 bg-clip-text text-transparent">
          Our Journey
        </h2>
        <p className={`mt-3 sm:mt-4 text-sm sm:text-base ${subTextColor} max-w-2xl mx-auto`}>
          Explore the milestones that have shaped our path to innovation, where every step brings us closer to transforming the future.
        </p>
        <div className="mt-5 sm:mt-6 flex justify-center ">
          <div className="p-0.5 rounded-lg bg-gradient-to-r from-pink-500 via-cyan-500 to-yellow-500">
          <RainbowButton className={`${buttonBg} px-5 sm:px-6 py-2 sm:py-3 rounded-lg shadow-lg flex items-center transition-transform duration-500  ease-in-out hover:scale-103`}>
          Subscribe to Updates &nbsp;<Mail className="mr-2 h-5 w-5" /> 
          </RainbowButton>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div ref={ref} className="space-y-8 sm:space-y-10 md:space-y-12 relative overflow-hidden p-4 sm:p-6">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative p-1 rounded-2xl bg-gradient-to-r from-pink-500 via-cyan-500 to-yellow-500"
          >
            <div className={`${cardBg} p-6 sm:p-8 md:p-10 rounded-2xl shadow-xl transition-transform duration-500 ease-in-out hover:scale-105`}>
              {/* Grid Layout for Left & Right Side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
                {/* Left Content */}
                <div className="space-y-3 sm:space-y-4">
                  <p className="text-xs sm:text-sm text-cyan-500 uppercase tracking-wider">{card.intro}</p>
                  <h3 className={`text-lg sm:text-xl md:text-2xl font-semibold ${textColor}`}>{card.title}</h3>
                  <p className={`text-sm sm:text-base ${subTextColor}`}>{card.description}</p>
                  <div className="space-y-2 sm:space-y-3">
                    {card.details.map((detail, i) => (
                      <div key={i} className="p-[2px] rounded-lg bg-gradient-to-r from-pink-500 via-cyan-500 to-yellow-500">
                        <Card className="p-3 sm:p-4 bg-white dark:bg-gray-800 shadow-md rounded-lg transition-transform duration-500 ease-in-out hover:scale-105">
                          <CardContent>
                            <h4 className={`text-sm sm:text-lg font-medium ${subTextColor}`}>{detail.title}</h4>
                            <p className={`text-xs sm:text-sm ${subTextColor}`}>{detail.desc}</p>
                          </CardContent>
                        </Card>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Image */}
                <motion.div
                  className="w-full h-56 sm:h-64 md:h-80 rounded-xl justify-center align-middle flex items-center overflow-hidden shadow-lg transition-transform duration-500 ease-in-out hover:scale-105"
                  style={{ transform: `translateY(${scrollYProgress.current * -50}px)` }}
                >
                  <Image
                    src={card.image}
                    alt={card.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
    </section>
  );
}
