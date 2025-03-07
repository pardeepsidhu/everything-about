'use client';

import { motion } from 'framer-motion';
import { Facebook, Linkedin, Twitter, Youtube } from 'lucide-react';
import Image from 'next/image';

export default function Footer({ theme }) {
  const bgColor = theme === 'dark' ? 'bg-black' : 'bg-gray-100';
  const textColor = theme === 'dark' ? 'text-gray-300' : 'text-gray-700';

  const sections = [
    {
      title: 'RESOURCES',
      items: ['Blogs', 'Success Stories', 'Case Studies', 'Whitepapers', 'FAQs', 'Hiring Guides', 'Support'],
    },
    {
      title: 'GET STARTED',
      items: ['Pricing', 'Hiring Solutions', 'Funded Startups', 'Free Trial', 'Contact Support', 'Request Demo', 'Trust'],
    },
    {
      title: 'LEGAL',
      items: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'CCPA Compliance'],
    },
  ];

  return (
    <footer className={`${bgColor} py-10 px-6 md:px-16`}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Logo & Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center md:text-left"
        >
            
          <Image
           src="https://www.everythingtalent.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Facme-logo-dark.d4da7bf2.png&w=256&q=75"
            alt="Logo" 
            height={150}
            width={150}
            className=" mx-auto md:mx-0 mb-2"
             />
          <h2 className="text-2xl font-bold text-blue-500">Everything Talent</h2>
          <p className={`${textColor} mt-1`}>
            Enhancing Hiring with AI-powered assessment and tracking for accurate recruitment
          </p>
        </motion.div>

        {/* Navigation Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-6 text-sm"
        >
          {sections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-gray-400">{section.title}</h4>
              <ul className="mt-2 space-y-2">
                {section.items.map((item) => (
                  <li key={item} className="hover:text-blue-500 transition duration-200 cursor-pointer">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Social Icons */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="flex justify-center md:justify-end gap-4 mt-8"
      >
        <Facebook className="w-6 h-6 text-gray-400 hover:text-blue-500 transition duration-200 cursor-pointer" />
        <Twitter className="w-6 h-6 text-gray-400 hover:text-blue-500 transition duration-200 cursor-pointer" />
        <Youtube className="w-6 h-6 text-gray-400 hover:text-red-500 transition duration-200 cursor-pointer" />
        <Linkedin className="w-6 h-6 text-gray-400 hover:text-red-500 transition duration-200 cursor-pointer" />
      </motion.div>
    </footer>
  );
}
