"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Target, Smile, ShieldCheck, Eye } from "lucide-react";
import { useInView } from "react-intersection-observer";

const sections = [
  {
    id: "Ambition",
    title: "Driven by Ambition",
    subtitle: "Ambition",
    description: "We believe in setting high standards and striving for excellence.",
    img: "https://www.everythingtalent.ai/assets/about-us/ambition.jpg",
    points: ["Goal-Oriented Approach", "Innovation & Creativity", "Relentless Pursuit of Success"],
    icon: Target,
  },
  {
    id: "Satisfaction",
    title: "Partnering for Success",
    subtitle: "Satisfaction",
    description:
      "Your success is our mission, and we're here to fuel it every step of the way by becoming your partner in achieving hiring excellence.",
    img: "https://www.everythingtalent.ai/assets/about-us/some1.avif",
    points: [
      "Dedicated partnership for hiring success",
      "Fuel company growth through talent",
      "Drive tech innovation through matching",
    ],
    icon: Smile,
  },
  {
    id: "Integrity",
    title: "Building Trust in Hiring",
    subtitle: "Integrity",
    description:
      "We believe that trust is the foundation of every great hire. That's why we make it our mission to prioritize clarity and trust at every step of the journey.",
    img: "https://www.everythingtalent.ai/assets/about-us/integrity.webp",
    points: [
      "Build hiring confidence through transparency",
      "Prioritize trust in recruitment process",
      "Foster honest candidate-employer relationships",
    ],
    icon: ShieldCheck,
  },
  {
    id: "Vigilance",
    title: "Security-Driven Solutions",
    subtitle: "Vigilance",
    description:
      "Confidence starts with security, and we are committed to enhancing your experience. Your security is woven into every part of our platform.",
    img: "https://www.everythingtalent.ai/assets/about-us/security.jpg",
    points: [
      "Prioritize end-to-end platform security",
      "Ensure protected recruitment experience",
      "Build confidence through data protection",
    ],
    icon: Eye,
  },
];

export default function SectionContainer({ theme }) {
  const [activeSection, setActiveSection] = useState(sections[0].id);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`relative w-full min-h-screen transition-colors duration-300 ${theme === "dark" ? "bg-black text-white" : "bg-gray-100 text-black"}`}>
      {!isMobile && <Dock theme={theme} activeSection={activeSection} setActiveSection={setActiveSection} />}
      <div className="relative z-10 w-full max-w-5xl mx-auto p-6 space-y-16">
        {isMobile ? (
          sections.map((section) => <ContentSection key={section.id} section={section} />)
        ) : (
          <AnimatePresence mode="wait">
            {sections
              .filter((section) => section.id === activeSection)
              .map((section) => (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  <ContentSection section={section} />
                </motion.div>
              ))}
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}

const ContentSection = ({ section }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col md:flex-row items-center text-center md:text-left gap-8"
    >
      <div  style={{textAlign:"justify"}} className="flex-1 space-y-4">
        <h2 className="text-3xl font-bold">{section.title}</h2>
        <p className="text-lg font-medium text-blue-600 dark:text-blue-400">{section.subtitle}</p>
        <p className="text-sm">{section.description}</p>
        <ul className="list-disc pl-5 space-y-2">
          {section.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
      <div className="flex-1 flex justify-center">
        <Image
          src={section.img}
          alt={section.id}
          width={600}
          height={400}
          className="rounded-lg shadow-lg h-auto md:h-[400px] object-cover"
        />
      </div>
    </motion.div>
  );
};

const Dock = ({ activeSection, setActiveSection ,theme}) => {
  return (
    <div style={{background:'transprent !important'}} className="flex justify-center py-4 bg-transparent backdrop-blur-md bg-opacity-10">
      <div style={{background:'transprent !important'}} className={`flex space-x-4 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}  p-2 rounded-xl shadow-lg`}>
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => setActiveSection(section.id)}
            className={` cursor-pointer px-4 py-2 text-sm font-semibold rounded-lg transition-colors duration-300  ${theme === "dark" ? 
               activeSection === section.id ? "bg-black text-white" : "bg-gray-800 text-black"
               :  activeSection === section.id ? "bg-blue-600 text-white" : "bg-gray-200 text-black"
             }`}
          >
            {section.subtitle}
          </button>
        ))}
      </div>
    </div>
  );
};
