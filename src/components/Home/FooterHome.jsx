"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Github, Twitter, Instagram, Mail } from "lucide-react";

export default function HomeFooter() {
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
    <motion.footer
      className="bg-gradient-to-t from-black to-gray-800 text-white py-12 relative overflow-hidden rounded-t-4xl w-full"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="relative top-13 md:top-10">
        {/* Decorative SVG Wave */}
        <svg
          className="absolute top-0 w-full h-24 opacity-20"
          viewBox="0 0 1440 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 50C200 80 400 20 720 50C1040 80 1240 20 1440 50"
            stroke="white"
            strokeWidth="2"
            fill="none"
          />
        </svg>

        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="text-3xl font-extrabold">
              ZEFAZA Industries Pvt. Ltd.
            </h2>
            <p className="text-sm text-gray-300">
              Empowering innovation with cutting-edge solutions. Join us in
              shaping the future.
            </p>
          </motion.div>

          {/* Quick Links with <Link /> */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.3 }}>
                <Link
                  href="/pre-launching"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  About
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.3 }}>
                <Link
                  href="/pre-launching"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Sellers
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.3 }}>
                <Link
                  href="/pre-launching"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Services
                </Link>
              </motion.li>
              <motion.li whileHover={{ x: 5 }} transition={{ duration: 0.3 }}>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Home
                </Link>
              </motion.li>
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <p className="text-sm text-gray-300">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white text-black border-gray-300 focus:border-white"
              />
              <Button
                className="bg-white text-black hover:bg-gray-200 transition-colors duration-300"
                onClick={() => alert("Subscribed!")}
              >
                <motion.span
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                >
                  Subscribe
                </motion.span>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Social Icons */}
        <motion.div
          className="mt-8 flex justify-center gap-6"
          variants={itemVariants}
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <Github className="h-6 w-6 text-gray-300 hover:text-white" />
          </motion.a>
          <motion.a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <Twitter className="h-6 w-6 text-gray-300 hover:text-white" />
          </motion.a>
          <motion.a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <Instagram className="h-6 w-6 text-gray-300 hover:text-white" />
          </motion.a>
          <motion.a
            href="mailto:info@example.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <Mail className="h-6 w-6 text-gray-300 hover:text-white" />
          </motion.a>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="mt-8 text-center text-sm text-gray-300"
          variants={itemVariants}
        >
          &copy; {new Date().getFullYear()} ZEFAZA. All rights reserved.
        </motion.div>
      </div>
    </motion.footer>
  );
}
