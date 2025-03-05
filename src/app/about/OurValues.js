"use client";

import Masonry from "react-masonry-css";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Bolt, CheckCircle, Target, TrendingUp, Lightbulb, ShieldCheck, Rocket, Layers, Award, Heart } from "lucide-react";
import { WarpBackground } from "@/components/magicui/warp-background";

const philosophyCards = [
  { id: "01", text: "With us, there are no surprises—just straight talk and genuine commitment.", hashtag: "#HONESTY", color: "bg-pink-500", icon: <CheckCircle className="w-8 h-8 text-white" /> },
  { id: "02", text: "Embrace hard work", hashtag: "#HARDWORK", color: "bg-blue-500", icon: <Bolt className="w-8 h-8 text-white" /> },
  { id: "03", text: "We act with urgency to ensure progress and deliver results efficiently. Every moment matters.", hashtag: "#URGENCY", color: "bg-yellow-500", icon: <Target className="w-8 h-8 text-white" /> },
  { id: "04", text: "Grow 1% every day", hashtag: "#GROWTHMINDSET", color: "bg-green-500", icon: <TrendingUp className="w-8 h-8 text-white" /> },
  { id: "05", text: "We’re here to help you aim higher, break limits, and achieve what others might think impossible.", hashtag: "#ASPIRATION", color: "bg-purple-500", icon: <Rocket className="w-8 h-8 text-white" /> },
  { id: "06", text: "DO HARD THINGS", hashtag: "#RESILIENT", color: "bg-red-500", icon: <ShieldCheck className="w-8 h-8 text-white" /> },
  { id: "07", text: "We value fresh ideas, bold solutions, and the freedom to imagine what’s next.", hashtag: "#CREATIVITY", color: "bg-indigo-500", icon: <Lightbulb className="w-8 h-8 text-white" /> },
  { id: "08", text: "Commit to continuous learning and improvement", hashtag: "#LEARNING", color: "bg-teal-500", icon: <Layers className="w-8 h-8 text-white" /> },
  { id: "09", text: "Build trust through actions, not just words.", hashtag: "#TRUST", color: "bg-orange-500", icon: <Heart className="w-8 h-8 text-white" /> },
  { id: "10", text: "Every project, every solution we create is aimed at contributing to something greater.", hashtag: "#CONTRIBUTION", color: "bg-rose-500", icon: <Award className="w-8 h-8 text-white" /> },
];

const breakpointColumns = {
  default: 4,
  1024: 3,
  768: 2,
  500: 1,
};

const OurValues = ({ theme }) => {
  const isDark = theme === "dark";

  return (
    <WarpBackground  className={`${isDark ? "bg-black text-white" : "bg-gray-100 text-gray-900"} border-0 rounded-none `}>
      <div className={cn("w-full py-24 px-6 md:px-12 transition-all duration-500", isDark ? " text-white" : " text-gray-900","bg-transparent")}>
        {/* Section Header */}
        <div className="text-center space-y-3">
          <p className="text-sm uppercase tracking-widest text-gray-500">Our Value</p>
          <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-blue-500 to-yellow-500">
            Our Philosophy in Action
          </h2>
          <p className="text-lg font-medium max-w-2xl mx-auto">
            At Everything Talent, Bringing Our Values to Life Through Meaningful Actions
          </p>
        </div>

        {/* Masonry Grid Section */}
        <Masonry breakpointCols={breakpointColumns} className="flex w-full mt-12 gap-6" columnClassName="masonry-column">
          {philosophyCards.map((card, index) => (
            <motion.div
              key={card.id}
              className={cn(
                "relative rounded-xl shadow-lg p-6 text-white transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col gap-3",
                card.color
              )}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="border-none bg-transparent">
                <CardContent className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    {card.icon}
                    <span className="text-3xl font-extrabold opacity-70">{card.id}</span>
                  </div>
                  <p className="text-lg">{card.text}</p>
                  <span className="text-sm font-bold opacity-80">{card.hashtag}</span>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Masonry>
      </div>
    </WarpBackground>
  );
};

export default OurValues;
