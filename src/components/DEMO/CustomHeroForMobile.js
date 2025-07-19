"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Zap,
  Shield,
  Smartphone,
  Users,
  Package,
  Headphones,
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
      className="relative z-10 w-full max-w-7xl mx-auto px-4 py-16 text-center bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-sm border border-gray-100 min-h-screen flex flex-col justify-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Mobile Platform Layout */}
      <motion.div
        className="relative w-full h-[280px] flex items-center justify-center mb-8"
        variants={itemVariants}
      >
        {/* Center Logo */}
        <motion.div
          className="relative w-24 h-24 bg-white rounded-2xl flex items-center justify-center shadow-lg z-20 border border-gray-200"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Image src={"/logo.svg"} alt="Zefaza logo" width={80} height={80} />
          
          {/* Pulse ring */}
          <motion.div
            className="absolute inset-0 rounded-2xl border-2 border-blue-200"
            animate={{ scale: [1, 1.3, 1], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* Top Icons */}
        <motion.div
          className="absolute top-2 left-16 w-12 h-12 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl flex items-center justify-center shadow-sm border border-blue-200"
          whileHover={{ scale: 1.1, y: -3 }}
          transition={{ duration: 0.3 }}
        >
          <Zap className="w-6 h-6 text-blue-600" />
        </motion.div>

        <motion.div
          className="absolute top-2 right-16 w-12 h-12 bg-gradient-to-br from-green-50 to-green-100 rounded-xl flex items-center justify-center shadow-sm border border-green-200"
          whileHover={{ scale: 1.1, y: -3 }}
          transition={{ duration: 0.3 }}
        >
          <Shield className="w-6 h-6 text-green-600" />
        </motion.div>

        {/* Bottom Icons */}
        <motion.div
          className="absolute bottom-2 left-16 w-12 h-12 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl flex items-center justify-center shadow-sm border border-purple-200"
          whileHover={{ scale: 1.1, y: -3 }}
          transition={{ duration: 0.3 }}
        >
          <Smartphone className="w-6 h-6 text-purple-600" />
        </motion.div>

        <motion.div
          className="absolute bottom-2 right-16 w-12 h-12 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl flex items-center justify-center shadow-sm border border-orange-200"
          whileHover={{ scale: 1.1, y: -3 }}
          transition={{ duration: 0.3 }}
        >
          <Users className="w-6 h-6 text-orange-600" />
        </motion.div>

        {/* Side Icons */}
        <motion.div
          className="absolute left-2 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl flex items-center justify-center shadow-sm border border-indigo-200"
          whileHover={{ scale: 1.1, x: 3 }}
          transition={{ duration: 0.3 }}
        >
          <Package className="w-7 h-7 text-indigo-600" />
        </motion.div>

        <motion.div
          className="absolute right-2 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl flex items-center justify-center shadow-sm border border-pink-200"
          whileHover={{ scale: 1.1, x: -3 }}
          transition={{ duration: 0.3 }}
        >
          <Headphones className="w-7 h-7 text-pink-600" />
        </motion.div>

        {/* Mobile Connecting Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
          {/* Simplified lines for mobile */}
          <motion.line
            x1="30%" y1="25%" x2="50%" y2="50%"
            stroke="#3B82F6"
            strokeWidth="1.5"
            strokeDasharray="3,3"
            strokeOpacity="0.6"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          <motion.line
            x1="70%" y1="25%" x2="50%" y2="50%"
            stroke="#10B981"
            strokeWidth="1.5"
            strokeDasharray="3,3"
            strokeOpacity="0.6"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          />
          <motion.line
            x1="30%" y1="75%" x2="50%" y2="50%"
            stroke="#8B5CF6"
            strokeWidth="1.5"
            strokeDasharray="3,3"
            strokeOpacity="0.6"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          />
          <motion.line
            x1="70%" y1="75%" x2="50%" y2="50%"
            stroke="#F59E0B"
            strokeWidth="1.5"
            strokeDasharray="3,3"
            strokeOpacity="0.6"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
          />
          <motion.line
            x1="15%" y1="50%" x2="50%" y2="50%"
            stroke="#6366F1"
            strokeWidth="1.5"
            strokeDasharray="3,3"
            strokeOpacity="0.6"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 1.3 }}
          />
          <motion.line
            x1="85%" y1="50%" x2="50%" y2="50%"
            stroke="#EC4899"
            strokeWidth="1.5"
            strokeDasharray="3,3"
            strokeOpacity="0.6"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          />

          {/* Connection dots */}
          <motion.circle
            cx="40%" cy="37%" r="2"
            fill="#3B82F6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 1.8 }}
          />
          <motion.circle
            cx="60%" cy="37%" r="2"
            fill="#10B981"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 2 }}
          />
          <motion.circle
            cx="40%" cy="63%" r="2"
            fill="#8B5CF6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 2.2 }}
          />
          <motion.circle
            cx="60%" cy="63%" r="2"
            fill="#F59E0B"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 2.4 }}
          />
        </svg>
      </motion.div>

      {/* Platform Title */}
      <motion.div variants={itemVariants} className="mb-8 px-4">
        <motion.h1 
          className="text-3xl md:text-4xl font-light text-gray-900 mb-4 tracking-tight"
          variants={itemVariants}
        >
          All-in-One <span className="font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Platform</span>
        </motion.h1>
        <motion.p 
          className="text-lg text-gray-600 leading-relaxed"
          variants={itemVariants}
        >
          Connecting local businesses, service providers, and customers in one unified ecosystem
        </motion.p>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        className="flex flex-col gap-4 px-4"
        variants={itemVariants}
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 py-3 text-lg font-medium rounded-full shadow-lg">
            Join Pre-Launch
          </Button>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button 
            variant="outline" 
            className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 py-3 text-lg font-medium rounded-full"
          >
            Learn More
          </Button>
        </motion.div>
      </motion.div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
        <motion.div
          className="absolute -top-16 -left-16 w-32 h-32 bg-blue-100 rounded-full opacity-15 blur-2xl"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-16 -right-16 w-40 h-40 bg-purple-100 rounded-full opacity-15 blur-2xl"
          animate={{
            scale: [1.15, 1, 1.15],
            opacity: [0.25, 0.15, 0.25],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>
    </motion.section>
  );
}
