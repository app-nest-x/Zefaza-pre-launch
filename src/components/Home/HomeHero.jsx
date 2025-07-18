"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative bg-white min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden">
      {/* Blurred Gradient Background Blob */}
      <motion.div
        className="absolute -top-24 -left-32 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-indigo-200 to-pink-100 opacity-50 blur-3xl z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1.2 }}
      />

      <motion.div
        className="relative z-10 w-full max-w-4xl text-center space-y-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-5xl sm:text-6xl font-extrabold text-gray-900 leading-tight"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Discover the Future with{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
            ZEFAZA
          </span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          A hyperlocal platform connecting you with trusted sellers, essential
          services, and experiences that matter — all in one place.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <Link href="/pre-launching">
            <button className="px-8 py-3 bg-black text-white hover:bg-gray-900 rounded-full text-base font-medium transition duration-300">
              Visit Pre-Launching
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
