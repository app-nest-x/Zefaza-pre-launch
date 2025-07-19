"use client";

import { motion } from "framer-motion";
import { MapPin, Shield, Zap, Users, Heart, Smartphone } from "lucide-react";
const features = [{
  icon: MapPin,
  title: "Hyperlocal Discovery",
  description: "Find sellers, services, and experiences within your neighborhood with precision mapping technology.",
  color: "from-blue-50 to-indigo-50",
  iconColor: "text-blue-600"
}, {
  icon: Shield,
  title: "Trusted Verification",
  description: "Every seller is thoroughly verified to ensure quality, safety, and reliability for your peace of mind.",
  color: "from-green-50 to-emerald-50",
  iconColor: "text-green-600"
}, {
  icon: Zap,
  title: "Instant Connection",
  description: "Connect with local businesses instantly through our smart matching algorithm and real-time communication.",
  color: "from-yellow-50 to-amber-50",
  iconColor: "text-yellow-600"
}, {
  icon: Users,
  title: "Community Driven",
  description: "Build meaningful connections with your local community through shared commerce experiences.",
  color: "from-purple-50 to-violet-50",
  iconColor: "text-purple-600"
}, {
  icon: Heart,
  title: "Support Local",
  description: "Empower local businesses and contribute to your community's economic growth with every purchase.",
  color: "from-red-50 to-pink-50",
  iconColor: "text-red-600"
}, {
  icon: Smartphone,
  title: "Mobile First",
  description: "Experience seamless commerce on any device with our responsive, mobile-optimized platform.",
  color: "from-gray-50 to-slate-50",
  iconColor: "text-gray-600"
}];
export default function FeaturesSection() {
  return <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {}
        <motion.div className="text-center mb-20" initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} viewport={{
        once: true
      }}>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            Built for the
            <span className="font-medium gradient-text"> Modern World</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Zefaza combines cutting-edge technology with human-centered design to create the ultimate local commerce experience.
          </p>
        </motion.div>

        {}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
          const Icon = feature.icon;
          return <motion.div key={feature.title} className={`relative group p-8 rounded-2xl bg-gradient-to-br ${feature.color} border border-gray-100 hover:shadow-lg transition-all duration-300`} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: index * 0.1
          }} viewport={{
            once: true
          }} whileHover={{
            y: -5
          }}>
                {}
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-white shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className={`w-6 h-6 ${feature.iconColor}`} />
                </div>

                {}
                <h3 className="text-xl font-semibold text-gray-900 mb-3 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent to-white/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>;
        })}
        </div>

        {}
        <motion.div className="text-center mt-16" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.3
      }} viewport={{
        once: true
      }}>
          <p className="text-lg text-gray-600 mb-6">
            Ready to experience the future of local commerce?
          </p>
          <motion.button className="inline-flex items-center px-8 py-3 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors shadow-sm" whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }}>
            Join the Revolution
          </motion.button>
        </motion.div>
      </div>
    </section>;
}