"use client";

import { motion } from "framer-motion";
import { Eye, QrCode, Bell, Code, Users, Coins, DollarSign, TrendingUp } from "lucide-react";
import Image from "next/image";
const containerVariants = {
  hidden: {
    opacity: 0,
    y: 50
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1],
      staggerChildren: 0.1
    }
  }
};
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1]
    }
  }
};
const leftFeatures = [{
  title: "Instant Local Visibility",
  icon: Eye,
  color: "text-blue-600",
  bgColor: "bg-blue-50"
}, {
  title: "Quick QR Setup",
  icon: QrCode,
  color: "text-green-600",
  bgColor: "bg-green-50"
}, {
  title: "Real-time Orders",
  icon: Bell,
  color: "text-purple-600",
  bgColor: "bg-purple-50"
}, {
  title: "No Technical Skills",
  icon: Code,
  color: "text-orange-600",
  bgColor: "bg-orange-50"
}];
const rightFeatures = [{
  title: "Trusted by Local Sellers",
  icon: Users,
  color: "text-indigo-600",
  bgColor: "bg-indigo-50"
}, {
  title: "Keep 100% Earnings",
  icon: Coins,
  color: "text-green-600",
  bgColor: "bg-green-50"
}, {
  title: "Fair & Clear Pricing",
  icon: DollarSign,
  color: "text-blue-600",
  bgColor: "bg-blue-50"
}, {
  title: "Grow Locally",
  icon: TrendingUp,
  color: "text-purple-600",
  bgColor: "bg-purple-50"
}];
const CustomSection = () => {
  return <motion.div className="hidden md:flex min-h-screen bg-gray-50 flex-col items-center justify-center p-8 relative overflow-hidden" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
    once: true
  }} id="features">
      {}
      <svg className="absolute inset-0 opacity-5" viewBox="0 0 1440 720" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 360C200 500 400 200 720 360C1040 520 1240 220 1440 360" stroke="currentColor" strokeWidth="2" />
        <circle cx="200" cy="100" r="50" fill="currentColor" fillOpacity="0.1" />
        <circle cx="1240" cy="600" r="70" fill="currentColor" fillOpacity="0.1" />
      </svg>

      <div className="relative max-w-7xl w-full flex justify-between items-center">
        {}
        <motion.div className="relative z-20 flex flex-col space-y-8" variants={itemVariants}>
          <motion.div className="bg-white px-6 py-3 rounded-xl shadow-sm border border-gray-100 text-center" variants={itemVariants}>
            <h3 className="text-xl font-semibold text-gray-900 tracking-tight">
              Why Sell On <span className="text-blue-600">Zefaza</span>?
            </h3>
          </motion.div>

          <div className="space-y-6">
            {leftFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return <motion.div key={index} className="relative" variants={itemVariants} whileHover={{
              scale: 1.02,
              x: 10
            }} transition={{
              duration: 0.3
            }}>
                  <div className="w-64 bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 ${feature.bgColor} rounded-xl flex items-center justify-center`}>
                        <Icon className={`w-6 h-6 ${feature.color}`} />
                      </div>
                      <h4 className="font-semibold text-gray-900 tracking-tight">
                        {feature.title}
                      </h4>
                    </div>
                  </div>
                  
                  {}
                  <div className="absolute top-1/2 -right-8 w-8 h-0.5 bg-gradient-to-r from-gray-300 to-transparent transform -translate-y-1/2"></div>
                </motion.div>;
          })}
          </div>
        </motion.div>

        {}
        <motion.div className="relative z-10 flex flex-col items-center" variants={itemVariants}>
          <div className="bg-white px-6 py-3 rounded-xl shadow-sm border border-gray-100 mb-8 text-center">
            <h3 className="text-xl font-semibold text-gray-900 tracking-tight">
              How <span className="text-purple-600">Zefaza</span> Works?
            </h3>
          </div>
          
          <div className="w-96 h-96 bg-white border-2 border-gray-200 rounded-3xl flex items-center justify-center shadow-lg p-8">
            <Image alt="How Zefaza Works" height={400} width={400} src="/custom/StepsINZefaza.png" className="w-full h-full object-contain" />
          </div>
        </motion.div>

        {}
        <motion.div className="relative z-20 flex flex-col space-y-8" variants={itemVariants}>
          <motion.div className="bg-white px-6 py-3 rounded-xl shadow-sm border border-gray-100 text-center" variants={itemVariants}>
            <h3 className="text-xl font-semibold text-gray-900 tracking-tight">
              Built For <span className="text-green-600">Sellers Like You</span>
            </h3>
          </motion.div>

          <div className="space-y-6">
            {rightFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return <motion.div key={index} className="relative" variants={itemVariants} whileHover={{
              scale: 1.02,
              x: -10
            }} transition={{
              duration: 0.3
            }}>
                  <div className="w-64 bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 ${feature.bgColor} rounded-xl flex items-center justify-center`}>
                        <Icon className={`w-6 h-6 ${feature.color}`} />
                      </div>
                      <h4 className="font-semibold text-gray-900 tracking-tight">
                        {feature.title}
                      </h4>
                    </div>
                  </div>
                  
                  {}
                  <div className="absolute top-1/2 -left-8 w-8 h-0.5 bg-gradient-to-l from-gray-300 to-transparent transform -translate-y-1/2"></div>
                </motion.div>;
          })}
          </div>
        </motion.div>
      </div>

      {}
      <motion.div className="absolute inset-0 flex items-center justify-center pointer-events-none" variants={itemVariants}>
        {}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {}
          <div className="absolute -left-48 -top-24 w-32 h-0.5 bg-gradient-to-l from-blue-300 to-transparent transform rotate-12"></div>
          <div className="absolute -left-48 -top-8 w-32 h-0.5 bg-gradient-to-l from-green-300 to-transparent transform rotate-6"></div>
          <div className="absolute -left-48 top-8 w-32 h-0.5 bg-gradient-to-l from-purple-300 to-transparent transform -rotate-6"></div>
          <div className="absolute -left-48 top-24 w-32 h-0.5 bg-gradient-to-l from-orange-300 to-transparent transform -rotate-12"></div>
          
          {}
          <div className="absolute right-16 -top-24 w-32 h-0.5 bg-gradient-to-r from-indigo-300 to-transparent transform -rotate-12"></div>
          <div className="absolute right-16 -top-8 w-32 h-0.5 bg-gradient-to-r from-green-300 to-transparent transform -rotate-6"></div>
          <div className="absolute right-16 top-8 w-32 h-0.5 bg-gradient-to-r from-blue-300 to-transparent transform rotate-6"></div>
          <div className="absolute right-16 top-24 w-32 h-0.5 bg-gradient-to-r from-purple-300 to-transparent transform rotate-12"></div>
        </div>
      </motion.div>
    </motion.div>;
};
export default CustomSection;