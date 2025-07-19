"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { name: "Features", href: "#features" },
  { name: "For Sellers", href: "#sellers" },
  { name: "For Services", href: "#services" },
  { name: "About", href: "#about" },
];

const CustomNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const containerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
    },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1],
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div
      className="flex w-full relative top-7 justify-center items-center z-40"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="bg-white/90 backdrop-blur-sm border border-gray-200 p-4 rounded-lg w-full max-w-6xl mx-4 flex items-center justify-between md:gap-8">
        {}
        <motion.div
          className="font-extrabold text-2xl text-black"
          variants={itemVariants}
        >
          ZEFAZA
        </motion.div>

        {}
        <motion.div className="hidden md:flex md:gap-6" variants={itemVariants}>
          {navLinks.map(({ name, href }) => (
            <motion.div
              key={name}
              variants={itemVariants}
              whileHover={{ scale: 1.05, color: "#000000" }}
              transition={{ duration: 0.3 }}
            >
              <Link
                href={href}
                className="text-gray-700 hover:text-black text-sm font-medium"
              >
                {name}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {}
        <motion.div className="hidden md:flex md:gap-4" variants={itemVariants}>
          {/* <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="outline"
              className="text-black border-gray-300 hover:bg-gray-100 hover:text-black text-sm"
            >
              Sign In
            </Button>
          </motion.div> */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-gradient-to-r from-orange-500 to-red-500 text-white hover:opacity-90 text-sm">
              Request Demo
            </Button>
          </motion.div>
        </motion.div>

        {}
        <motion.div
          className="md:hidden"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            className="text-black"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </motion.div>
      </div>

      {}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-20 w-full max-w-6xl mx-4 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg p-4 flex flex-col items-center gap-4 md:hidden z-30"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            {navLinks.map(({ name, href }) => (
              <motion.div
                key={name}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <Link
                  href={href}
                  className="text-gray-700 hover:text-black text-base font-medium"
                  onClick={toggleMenu}
                >
                  {name}
                </Link>
              </motion.div>
            ))}

            <motion.div
              className="flex flex-col gap-4 w-full"
              variants={itemVariants}
            >
              {/* <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  className="w-full text-black border-gray-300 hover:bg-gray-100 hover:text-black text-base"
                  onClick={toggleMenu}
                >
                  Sign In
                </Button>
              </motion.div> */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white hover:opacity-90 text-base"
                  onClick={toggleMenu}
                >
                  Request Demo
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {}
      <svg
        className="absolute top-0 left-0 w-full h-12 opacity-10 -z-10"
        viewBox="0 0 1440 48"
        fill="none"
        xmlns="http:
      >
        <path
          d="M0 24C200 40 400 8 720 24C1040 40 1240 8 1440 24"
          stroke="gray"
          strokeWidth="2"
          strokeOpacity="0.3"
        />
      </svg>
    </motion.div>
  );
};

export default CustomNavbar;

