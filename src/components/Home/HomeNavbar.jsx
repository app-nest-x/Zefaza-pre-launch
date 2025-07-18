"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Brand Name + Slogan */}
        <motion.div
          className="flex flex-col leading-tight"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <span className="text-white font-bold text-xl tracking-wide">
            ZEFAZA
          </span>
          <span className="text-sm text-white/60 font-light">
            Smart Commerce for Smart Cities
          </span>
        </motion.div>

        {/* Visit Button (visible on all sizes) */}
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Link href="/pre-launching">
            <button className="px-4 py-2 text-sm font-medium text-black bg-white rounded-lg hover:bg-gray-100 transition duration-300">
              Visit Pre-Launching
            </button>
          </Link>
        </motion.div>

        {/* Mobile Menu Icon (optional) */}
        <button
          className="md:hidden text-white ml-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Empty dropdown placeholder for mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-black border-t border-white/10"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 0, opacity: 0 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
        )}
      </AnimatePresence>
    </header>
  );
}
