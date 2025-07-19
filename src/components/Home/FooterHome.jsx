"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Twitter, Linkedin, Github } from "lucide-react";
export default function HomeFooter() {
  const currentYear = new Date().getFullYear();
  const socialLinks = [{
    icon: Twitter,
    href: "https://twitter.com/zefaza",
    label: "Twitter"
  }, {
    icon: Linkedin,
    href: "https://linkedin.com/company/zefaza",
    label: "LinkedIn"
  }, {
    icon: Github,
    href: "https://github.com/zefaza",
    label: "GitHub"
  }, {
    icon: Mail,
    href: "mailto:hello@zefaza.com",
    label: "Email"
  }];
  const links = [{
    name: "About",
    href: "#about"
  }, {
    name: "Features",
    href: "#features"
  }, {
    name: "Contact",
    href: "#contact"
  }, {
    name: "Privacy",
    href: "/privacy"
  }, {
    name: "Terms",
    href: "/terms"
  }];
  return <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {}
          <motion.div className="space-y-4" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true
        }}>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-lg text-gray-900 tracking-tight">
                  Zefaza
                </span>
                <span className="text-xs text-gray-500 -mt-1">
                  Smart Commerce
                </span>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
              Revolutionizing hyperlocal commerce for smart cities. Coming soon to transform how you connect with your local community.
            </p>
          </motion.div>

          {}
          <motion.div className="space-y-4" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.1
        }} viewport={{
          once: true
        }}>
            <h3 className="font-semibold text-gray-900">Quick Links</h3>
            <ul className="space-y-2">
              {links.map(link => <li key={link.name}>
                  <Link href={link.href} className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                    {link.name}
                  </Link>
                </li>)}
            </ul>
          </motion.div>

          {}
          <motion.div className="space-y-4" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} viewport={{
          once: true
        }}>
            <h3 className="font-semibold text-gray-900">Stay Updated</h3>
            <p className="text-gray-600 text-sm">
              Get notified when we launch and receive exclusive updates about our progress.
            </p>
            <div className="flex gap-2">
              <input type="email" placeholder="Enter email" className="flex-1 px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 transition-colors" />
              <button className="px-4 py-2 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors">
                Notify Me
              </button>
            </div>
          </motion.div>
        </div>

        {}
        <motion.div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6,
        delay: 0.3
      }} viewport={{
        once: true
      }}>
          {}
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return <motion.a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center text-gray-600 hover:text-gray-900 hover:border-gray-300 transition-all duration-200" whileHover={{
              scale: 1.05
            }} whileTap={{
              scale: 0.95
            }} initial={{
              opacity: 0,
              y: 10
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.3,
              delay: index * 0.1
            }}>
                  <Icon className="w-4 h-4" />
                </motion.a>;
          })}
          </div>

          {}
          <div className="text-sm text-gray-500">
            © {currentYear} Zefaza Industries Pvt. Ltd. All rights reserved.
          </div>
        </motion.div>
      </div>
    </footer>;
}