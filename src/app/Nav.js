"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun, Laptop, Menu, X } from "lucide-react";
import { useTheme } from "@/context/theme-context";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Home", link: "/" },
  { name: "Products", link: "/products" },
  { name: "Solutions", link: "/solutions" },
  { name: "Pricing", link: "/pricing" },
  { name: "Blog", link: "/blog" },
  { name: "Support", link: "/support" },
  { name: "About", link: "/about" },
];

export default function Navbar() {
  const { setTheme, theme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-4 flex justify-between items-center backdrop-blur-lg shadow-md 
        ${theme === "dark" ? "bg-black/80 text-white" : "bg-white/80 text-black"}`}
    >
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold">
        <Image src="https://www.everythingtalent.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Facme-logo-dark.d4da7bf2.png&w=48&q=75" height={40} width={40} alt="Logo" />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex space-x-6">
        {navItems.map((item, idx) => (
          <Link
            key={idx}
            href={item.link}
            className={`text-lg font-medium transition-all duration-300 relative 
              ${
                pathname === item.link
                  ? "bg-gradient-to-r from-pink-500 via-cyan-500 to-yellow-500 bg-clip-text text-transparent"
                  : theme === "dark"
                  ? "text-gray-300 hover:text-white"
                  : "text-gray-700 hover:text-black"
              }`}
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Right - Buttons & Mobile Menu */}
      <div className="flex items-center space-x-4">
        {/* Theme Toggle */}
        {/* {added} */}
     {!menuOpen &&   <div className="flex items-center space-x-2 bg-gray-200 dark:bg-gray-800 p-2 rounded-full">
              <Button size="icon" variant="ghost" onClick={() => setTheme("light")}>
                <Sun size={18} />
              </Button>
              <Button size="icon" variant="ghost" onClick={() => setTheme("dark")}>
                <Moon size={18} />
              </Button>
              <Button size="icon" variant="ghost" onClick={() => setTheme("system")}>
                <Laptop size={18} />
              </Button>
            </div> }
        {/* Start a Demo & Login Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
  <Link href="/demo">
    <Button
      variant="outline"
      className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-2 rounded-lg transition-all duration-300"
    >
      Start a Demo
    </Button>
  </Link>
  <Link href="/login">
    <Button
      className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-all duration-300"
    >
      Login
    </Button>
  </Link>
</div>

        {/* Mobile Menu Toggle Button */}
        <button
          className={`lg:hidden transition-colors ${theme === "dark" ? "text-white" : "text-black"}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {!menuOpen && <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3 }}
            className={`fixed top-3   right-0 w-3/4 h-full flex flex-col items-center space-y-6 p-6 z-50 
              shadow-lg `}
          >
            {/* Close Button */}
            <button className="self-end" onClick={() => setMenuOpen(false)}>
              <X size={24} />
            </button>

            {/* Mobile Navigation Links */}
            {navItems.map((item, idx) => (
              <Link
                key={idx}
                href={item.link}
                className={`text-lg p-6 font-medium w-full m-0 text-center py-3 transition-all 
                  ${theme === "dark" ? "bg-black text-white hover:bg-gray-700" : "bg-gray-100 text-black hover:bg-gray-300"}`}
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

              <Link href="/demo"  className={`text-lg font-medium w-full m-0 text-center py-3 transition-all 
                  ${theme === "dark" ? "bg-black text-white hover:bg-gray-700" : "bg-gray-100 text-black hover:bg-gray-300"}`}>
               
                  Start a Demo
    
              </Link>
              <Link href="/login"  className={`rounded-b-lg text-lg font-medium w-full m-0 text-center py-3 transition-all 
                  ${theme === "dark" ? "bg-black text-white hover:bg-gray-700" : "bg-gray-100 text-black hover:bg-gray-300"}`}>
              Login
              </Link>
          

            {/* Theme Toggle (Mobile) */}
           
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
