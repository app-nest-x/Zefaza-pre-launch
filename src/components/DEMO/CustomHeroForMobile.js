"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Lightbulb,
  Shield,
  Store,
  Truck,
  Star,
  Package,
  Headset,
} from "lucide-react";
import Image from "next/image";
export default function HeroForMobile() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
    },
  };

  return (
    <motion.section
      className="relative z-10 w-full max-w-7xl mx-auto px-4 py-20 text-center bg-gray-200 rounded-4xl min-h-screen"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Decorative SVG Background (hidden on mobile) */}
      <svg
        className="absolute inset-0 opacity-10 hidden md:block"
        viewBox="0 0 1440 720"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 360C200 500 400 200 720 360C1040 520 1240 220 1440 360"
          stroke="white"
          strokeWidth="2"
          strokeOpacity="0.3"
        />
        <circle cx="200" cy="100" r="50" fill="white" fillOpacity="0.2" />
        <circle cx="1240" cy="600" r="70" fill="white" fillOpacity="0.2" />
      </svg>

      {/* Icons & Avatars */}
      <motion.div
        className="relative w-full h-[300px] sm:h-[360px] md:h-[500px] flex items-center justify-center"
        variants={itemVariants}
      >
        {/* Center Icon */}
        <motion.div
          className="w-29 h-29 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-2xl z-10"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          {/* <Star className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-400 fill-current" /> */}
          <Image
            src={"/logo.svg"}
            alt="Logo of Zefaza"
            width={150}
            height={150}
          />
        </motion.div>

        {/* Top Left Icon */}
        <motion.div
          className="absolute left-10 -top-4 sm:left-24 sm:-top-6 md:left-52 md:-top-7 w-18 h-18 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-2xl border-2 border-black"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          <Lightbulb className="w-10 h-10 sm:w-8 sm:h-8 text-black shadow-2xl" />
        </motion.div>

        {/* Bottom Left Icon */}
        <motion.div
          className="absolute -bottom-6 left-14 sm:left-32 md:left-72 w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow border-2 border-black"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          <Store className="w-10 h-10 sm:w-8 sm:h-8 text-black" />
        </motion.div>

        {/* Top Right Icon */}
        <motion.div
          className="absolute -top-4 right-10 sm:right-24 md:right-[300px] w-18 h-18 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow border-2 border-black"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          <Shield className="w-10 h-10 sm:w-8 sm:h-8 text-black" />
        </motion.div>

        {/* Bottom Right Icon */}
        <motion.div
          className="absolute -bottom-6 right-16 sm:right-32 md:right-44 w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow border-2 border-black"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          <Truck className="w-10 h-10 sm:w-8 sm:h-8 text-black" />
        </motion.div>

        {/* Avatars */}
        <motion.div
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 w-15 h-15 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-2xl overflow-hidden shadow border-2 border-black"
          whileHover={{ scale: 1.05 }}
        >
          <Package className="w-12 h-12 text-black relative top-1 left-1" />
        </motion.div>

        <motion.div
          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 w-15 h-15 sm:w-28 sm:h-28 md:w-36 md:h-36 rounded-2xl overflow-hidden shadow border-2 border-black"
          whileHover={{ scale: 1.05 }}
        >
          <Headset className="w-12 h-12 text-black relative top-1 left-1" />
        </motion.div>
      </motion.div>

      {/* Heading & CTA */}
      <motion.div className="mt-15 relative top-5 sm:mt-12" variants={itemVariants}>
        <h1 className="sm:text-4xl md:text-6xl font-extrabold text-black text-5xl mb-4  leading-tight">
          All-in-one <br /> Platform
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-900 font-bold max-w-xl mx-auto mb-6 px-2">
          Zefaza is a modern, all-in-one platform designed to perfectly fit your
          business needs
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3 }}
        >
          <Button className="rounded-full px-6 sm:px-8 py-3 sm:py-4 text-white bg-gradient-to-r from-orange-500 to-red-500 hover:opacity-90 text-sm sm:text-base md:text-lg">
            Request a Demo
          </Button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
