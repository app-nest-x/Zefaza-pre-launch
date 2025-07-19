"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowRight, CheckCircle, Play, Users, TrendingUp, Shield } from "lucide-react";

export default function HeroSection() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
      setEmail("");
    }
  };

  const stats = [
    { icon: Users, number: "10K+", label: "Early Adopters" },
    { icon: TrendingUp, number: "95%", label: "Local Coverage" },
    { icon: Shield, number: "100%", label: "Verified Sellers" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-16 overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-gray-100 rounded-full opacity-50"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-40 right-20 w-24 h-24 bg-gray-200 rounded-full opacity-30"
          animate={{
            y: [0, 15, 0],
            x: [0, -8, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div
          className="absolute top-1/2 right-10 w-16 h-16 bg-gray-150 rounded-full opacity-40"
          animate={{
            y: [0, -10, 0],
            x: [0, 5, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Pre-launch badge */}
        <motion.div
          className="inline-flex items-center px-4 py-2 rounded-full bg-black text-white text-sm font-medium mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
          Coming Soon • Pre-Launch Phase
        </motion.div>

        {/* Main headline */}
        <motion.h1
          className="text-5xl md:text-7xl font-light text-gray-900 mb-6 tracking-tight leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          The Future of
          <br />
          <span className="font-medium gradient-text">Smart Commerce</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Zefaza is revolutionizing hyperlocal commerce by connecting you with trusted sellers, essential services, and experiences in your area.
        </motion.p>

        {/* Features preview */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {["Hyperlocal Discovery", "Trusted Sellers", "Smart Delivery", "Real-time Orders"].map((feature, index) => (
            <div
              key={feature}
              className="flex items-center space-x-2 bg-white rounded-full px-4 py-2 shadow-sm border border-gray-100"
            >
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span className="text-sm font-medium text-gray-700">{feature}</span>
            </div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="text-center">
                <div className="flex justify-center mb-2">
                  <Icon className="w-6 h-6 text-gray-600" />
                </div>
                <div className="text-2xl font-semibold text-gray-900 mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Email signup and demo button */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <form onSubmit={handleSubscribe} className="flex gap-3 flex-1 max-w-md">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:border-gray-400 transition-colors bg-white text-gray-900"
              required
            />
            <motion.button
              type="submit"
              className="bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors flex items-center space-x-2 whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isSubscribed}
            >
              {isSubscribed ? (
                <>
                  <CheckCircle className="w-4 h-4" />
                  <span>Joined!</span>
                </>
              ) : (
                <>
                  <span>Join Waitlist</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </motion.button>
          </form>
          
          <motion.button
            className="flex items-center space-x-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-full font-medium hover:bg-gray-50 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Play className="w-4 h-4" />
            <span>Watch Demo</span>
          </motion.button>
        </motion.div>

        <motion.p
          className="text-sm text-gray-500 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          Be the first to know when we launch. No spam, ever.
        </motion.p>
      </div>

      {/* Scroll indicator - positioned outside the main content */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.8 }}
      >
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
