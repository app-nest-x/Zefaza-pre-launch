"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Lightbulb,
  Shield,
  Store,
  Truck,
  Package,
  Headset,
} from "lucide-react";
import Image from "next/image";

export default function HeroForDesktop() {
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
      className="relative z-10 w-full max-w-7xl mx-auto px-4 py-20 text-center bg-gray-200 rounded-4xl"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      id="home"
    >
      {/* Decorative SVG Background */}
      <svg
        className="absolute inset-0 opacity-10"
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

      {/* Floating Icons */}
      <motion.div
        className="relative w-full h-[300px] flex items-center justify-center"
        variants={itemVariants}
      >
        {/* Center Icon */}
        <motion.div
          className="w-30 h-30 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-md z-10 border-4 border-black"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* <Star className="w-10 h-10 text-yellow-400 fill-current" /> */}
          <Image src={"/logo.svg"} alt="Zefaza logo" width={250} height={250} />
        </motion.div>

        {/* Top Left Icon */}
        <motion.div
          className="absolute -top-7 left-52 w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-2xl border-3 border-black"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        >
          <Lightbulb className="w-15 h-15 text-black " />
        </motion.div>
        {/* Connecting Lines */}
        <motion.div
          className="h-0.25 w-28 absolute bottom-72 left-72 z-10 bg-gray-500"
          variants={itemVariants}
        />
        <motion.div
          className="h-3 w-3 absolute bottom-70.5 left-100 z-20 bg-white rounded-full"
          variants={itemVariants}
        />
        <motion.div
          className="h-0.25 w-41 absolute bottom-56 left-95 rotate-50 z-10 bg-gray-500"
          variants={itemVariants}
        />

        {/* Bottom Left Icon */}
        <motion.div
          className="absolute -bottom-10 left-70 w-25 h-25 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow border-3 border-black"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        >
          <Store className="w-18 h-18 text-black" />
        </motion.div>
        {/* Connecting Lines */}
        <motion.div
          className="h-0.25 w-20 absolute bottom-2 left-95 z-10 bg-gray-500"
          variants={itemVariants}
        />
        <motion.div
          className="h-3 w-3 absolute bottom-0.5 left-114 z-20 bg-white rounded-full"
          variants={itemVariants}
        />
        <motion.div
          className="h-0.25 w-48 absolute bottom-20 left-105 -rotate-55 z-10 bg-gray-500"
          variants={itemVariants}
        />

        {/* Left Avatar */}
        <motion.div
          className="absolute left-2 top-1/2 transform -translate-y-1/2 w-36 h-36 rounded-2xl overflow-hidden shadow border-3 border-black "
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        >
          <Package className="w-full h-full" />
        </motion.div>
        {/* Connecting Line */}
        <motion.div
          className="h-0.25 w-110 absolute bottom-40 left-38.5 z-10 bg-gray-500"
          variants={itemVariants}
        />

        {/* Right Avatar */}
        <motion.div
          className="absolute right-2 top-1/2 transform -translate-y-1/2 w-36 h-36 rounded-2xl overflow-hidden shadow border-4 border-black"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        >
          <Headset className="w-30 h-30 relative left-2 top-2" />
        </motion.div>
        {/* Connecting Line */}
        <motion.div
          className="h-0.25 w-106 absolute bottom-40 left-168 z-10 bg-gray-600 "
          variants={itemVariants}
        />

        {/* Top Right Icon */}
        <motion.div
          className="absolute -top-5 right-75 w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow border-3 border-black"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        >
          <Shield className="w-15 h-15 text-black " />
        </motion.div>
        {/* Connecting Lines */}
        <motion.div
          className="h-0.25 w-20 absolute top-3 left-198 z-10 bg-gray-500"
          variants={itemVariants}
        />
        <motion.div
          className="h-3 w-3 absolute top-2 left-195 bg-white rounded-full"
          variants={itemVariants}
        />
        <motion.div
          className="h-0.25 w-37 absolute top-20 left-167 -rotate-55 z-10 bg-gray-500"
          variants={itemVariants}
        />

        {/* Bottom Right Icon */}
        <motion.div
          className="absolute -bottom-10 right-45 w-25 h-25 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow border-3 border-black"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        >
          <Truck className="w-15 h-15 text-black " />
        </motion.div>
        {/* Connecting Lines */}
        <motion.div
          className="h-0.25 w-20 absolute top-73 left-222 z-10 bg-gray-500"
          variants={itemVariants}
        />
        <motion.div
          className="h-3 w-3 absolute top-72 left-222 z-20 bg-white rounded-full"
          variants={itemVariants}
        />
        <motion.div
          className="h-0.25 w-48 absolute top-55 left-185 rotate-55 z-10 bg-gray-500"
          variants={itemVariants}
        />
      </motion.div>

      {/* Heading & CTA */}
      <motion.div className="mt-12" variants={itemVariants}>
        <h1 className="text-4xl md:text-6xl font-extrabold text-black mb-4">
          All-in-one <br /> Platform
        </h1>
        <p className="text-gray-500 font-bold text-2xl max-w-xl mx-auto mb-6">
          Zefaza is a modern, all-in-one platform designed to perfectly fit your
          business needs
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        >
          <Button className="rounded-full px-8 py-4 text-white bg-gradient-to-r from-orange-500 to-red-500 hover:opacity-90 text-lg">
            Request a Demo
          </Button>
          <div className="bg-white text-2xl font-bold w-[235px]  relative left-130 top-55 p-1 rounded-lg">
            How Zefaza Works ?
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
