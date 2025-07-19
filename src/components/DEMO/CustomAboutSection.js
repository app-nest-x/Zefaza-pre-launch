"use client";

import { motion } from "framer-motion";
import { Lightbulb, Shield, Cpu, Users, TrendingUp, Award } from "lucide-react";
const aboutFeatures = [{
  title: "Innovative Minds",
  description: "Our team thrives on solving problems with bold, fresh ideas that push boundaries.",
  icon: Lightbulb,
  color: "text-yellow-600",
  bgColor: "bg-yellow-50"
}, {
  title: "Reliable Solutions",
  description: "We build dependable systems that scale with your business needs.",
  icon: Shield,
  color: "text-green-600",
  bgColor: "bg-green-50"
}, {
  title: "Smart Technology",
  description: "We utilize cutting-edge tech to deliver future-ready products.",
  icon: Cpu,
  color: "text-blue-600",
  bgColor: "bg-blue-50"
}, {
  title: "Built for Users",
  description: "Everything we design starts with the user experience in mind.",
  icon: Users,
  color: "text-purple-600",
  bgColor: "bg-purple-50"
}, {
  title: "Growth Driven",
  description: "We align innovation with growth for sustainable long-term success.",
  icon: TrendingUp,
  color: "text-indigo-600",
  bgColor: "bg-indigo-50"
}, {
  title: "Quality First",
  description: "Every solution we deliver meets the highest standards of excellence.",
  icon: Award,
  color: "text-red-600",
  bgColor: "bg-red-50"
}];
const CustomAboutSection = () => {
  return <section className="w-full min-h-screen bg-white py-24 px-6 md:px-16 lg:px-24" id="about">
      {}
      <motion.div initial={{
      opacity: 0,
      y: 30
    }} whileInView={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.8
    }} viewport={{
      once: true
    }} className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
          About <span className="font-medium">Zefaza</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          We're building the future of hyperlocal commerce by connecting communities, empowering local businesses, and creating meaningful digital experiences.
        </p>
      </motion.div>

      {}
      <motion.div initial={{
      opacity: 0,
      scale: 0.95
    }} whileInView={{
      opacity: 1,
      scale: 1
    }} transition={{
      duration: 0.8
    }} viewport={{
      once: true
    }} className="max-w-6xl mx-auto mb-20">
        <div className="bg-gray-50 rounded-3xl p-12 text-center border border-gray-100">
          <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-6">
            <span className="text-white font-bold text-2xl">Z</span>
          </div>
          <h3 className="text-2xl font-light text-gray-900 mb-4 tracking-tight">
            Our Mission
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            "Empowering local communities through smart technology that makes commerce more accessible, efficient, and meaningful for everyone."
          </p>
        </div>
      </motion.div>

      {}
      <motion.div initial={{
      opacity: 0,
      y: 30
    }} whileInView={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.8,
      delay: 0.2
    }} viewport={{
      once: true
    }} className="max-w-6xl mx-auto">
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {aboutFeatures.map((feature, index) => {
          const Icon = feature.icon;
          return <motion.div key={index} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: index * 0.1,
            duration: 0.6
          }} viewport={{
            once: true
          }} whileHover={{
            y: -5
          }} className="bg-white rounded-2xl border border-gray-100 p-8 text-center hover:shadow-lg transition-all duration-300">
                <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <Icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>;
        })}
        </div>
      </motion.div>

      {}
      <motion.div initial={{
      opacity: 0,
      y: 30
    }} whileInView={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.8,
      delay: 0.4
    }} viewport={{
      once: true
    }} className="mt-24 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="bg-white rounded-2xl border border-gray-100 p-8">
            <div className="text-3xl font-light text-gray-900 mb-2">2024</div>
            <div className="text-gray-600">Founded</div>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 p-8">
            <div className="text-3xl font-light text-gray-900 mb-2">100%</div>
            <div className="text-gray-600">Local Focus</div>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 p-8">
            <div className="text-3xl font-light text-gray-900 mb-2">∞</div>
            <div className="text-gray-600">Possibilities</div>
          </div>
        </div>
      </motion.div>

      {}
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} whileInView={{
      opacity: 1,
      y: 0
    }} transition={{
      delay: 0.6,
      duration: 0.6
    }} viewport={{
      once: true
    }} className="mt-20 text-center">
        <div className="inline-flex items-center bg-black text-white px-8 py-4 rounded-full font-medium shadow-sm">
          <span className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></span>
          Building the Future of Local Commerce
        </div>
      </motion.div>
    </section>;
};
export default CustomAboutSection;