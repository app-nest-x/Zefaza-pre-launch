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
      className="relative z-10 w-full max-w-7xl mx-auto px-4 py-20 text-center bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-sm border border-gray-100"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      id="home"
    >
      {/* Floating Platform Icons */}
      <motion.div
        className="relative w-full h-[400px] flex items-center justify-center"
        variants={itemVariants}
      >
        {/* Center Logo */}
        <motion.div
          className="relative w-32 h-32 bg-white rounded-3xl flex items-center justify-center shadow-lg z-20 border border-gray-200"
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        >
          <Image src={"/logo.svg"} alt="Zefaza logo" width={120} height={120} />
          
          {/* Pulse rings */}
          <motion.div
            className="absolute inset-0 rounded-3xl border-2 border-blue-200"
            animate={{ scale: [1, 1.2, 1], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute inset-0 rounded-3xl border-2 border-purple-200"
            animate={{ scale: [1, 1.4, 1], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
        </motion.div>

        {/* Innovation Icon - Top Left */}
        <motion.div
          className="absolute top-4 left-32 w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center shadow-sm border border-blue-200"
          whileHover={{ scale: 1.1, y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <Zap className="w-8 h-8 text-blue-600" />
        </motion.div>

        {/* Security Icon - Top Right */}
        <motion.div
          className="absolute top-4 right-32 w-16 h-16 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl flex items-center justify-center shadow-sm border border-green-200"
          whileHover={{ scale: 1.1, y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <Shield className="w-8 h-8 text-green-600" />
        </motion.div>

        {/* Mobile Experience - Bottom Left */}
        <motion.div
          className="absolute bottom-4 left-32 w-16 h-16 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl flex items-center justify-center shadow-sm border border-purple-200"
          whileHover={{ scale: 1.1, y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <Smartphone className="w-8 h-8 text-purple-600" />
        </motion.div>

        {/* Community - Bottom Right */}
        <motion.div
          className="absolute bottom-4 right-32 w-16 h-16 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl flex items-center justify-center shadow-sm border border-orange-200"
          whileHover={{ scale: 1.1, y: -5 }}
          transition={{ duration: 0.3 }}
        >
          <Users className="w-8 h-8 text-orange-600" />
        </motion.div>

        {/* Products Hub - Left */}
        <motion.div
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl flex items-center justify-center shadow-sm border border-indigo-200"
          whileHover={{ scale: 1.1, x: 5 }}
          transition={{ duration: 0.3 }}
        >
          <Package className="w-10 h-10 text-indigo-600" />
        </motion.div>

        {/* Services Hub - Right */}
        <motion.div
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl flex items-center justify-center shadow-sm border border-pink-200"
          whileHover={{ scale: 1.1, x: -5 }}
          transition={{ duration: 0.3 }}
        >
          <Headphones className="w-10 h-10 text-pink-600" />
        </motion.div>

        {/* Enhanced Connecting Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
          {/* Lines to center - matching actual icon positions */}
          <motion.line
            x1="20%" y1="12%" x2="50%" y2="50%"
            stroke="url(#gradient1)"
            strokeWidth="2"
            strokeDasharray="5,5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          />
          <motion.line
            x1="80%" y1="12%" x2="50%" y2="50%"
            stroke="url(#gradient2)"
            strokeWidth="2"
            strokeDasharray="5,5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.7 }}
          />
          <motion.line
            x1="20%" y1="88%" x2="50%" y2="50%"
            stroke="url(#gradient3)"
            strokeWidth="2"
            strokeDasharray="5,5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.9 }}
          />
          <motion.line
            x1="80%" y1="88%" x2="50%" y2="50%"
            stroke="url(#gradient4)"
            strokeWidth="2"
            strokeDasharray="5,5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 1.1 }}
          />
          <motion.line
            x1="8%" y1="50%" x2="50%" y2="50%"
            stroke="url(#gradient5)"
            strokeWidth="2"
            strokeDasharray="5,5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 1.3 }}
          />
          <motion.line
            x1="92%" y1="50%" x2="50%" y2="50%"
            stroke="url(#gradient6)"
            strokeWidth="2"
            strokeDasharray="5,5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 1.5 }}
          />

          {/* Gradient definitions */}
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="gradient5" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366F1" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#6366F1" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="gradient6" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#EC4899" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#EC4899" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {/* Connection dots - positioned at midpoints */}
          <motion.circle
            cx="35%" cy="31%" r="3"
            fill="#3B82F6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 1.8 }}
          />
          <motion.circle
            cx="65%" cy="31%" r="3"
            fill="#10B981"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 2 }}
          />
          <motion.circle
            cx="35%" cy="69%" r="3"
            fill="#8B5CF6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 2.2 }}
          />
          <motion.circle
            cx="65%" cy="69%" r="3"
            fill="#F59E0B"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 2.4 }}
          />
          <motion.circle
            cx="29%" cy="50%" r="3"
            fill="#6366F1"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 2.6 }}
          />
          <motion.circle
            cx="71%" cy="50%" r="3"
            fill="#EC4899"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3, delay: 2.8 }}
          />
        </svg>
      </motion.div>

      {/* Platform Title */}
      <motion.div variants={itemVariants} className="mt-8 mb-6">
        <motion.h1 
          className="text-4xl md:text-6xl font-light text-gray-900 mb-4 tracking-tight"
          variants={itemVariants}
        >
          All-in-One <span className="font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Platform</span>
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          Connecting local businesses, service providers, and customers in one unified ecosystem
        </motion.p>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        variants={itemVariants}
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:opacity-90 px-8 py-3 text-lg font-medium rounded-full shadow-lg">
            Join Pre-Launch
          </Button>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button 
            variant="outline" 
            className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-lg font-medium rounded-full"
          >
            Learn More
          </Button>
        </motion.div>
      </motion.div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
        <motion.div
          className="absolute -top-24 -left-24 w-48 h-48 bg-blue-100 rounded-full opacity-20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-24 -right-24 w-64 h-64 bg-purple-100 rounded-full opacity-20 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>
    </motion.section>
  );
}
