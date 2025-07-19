"use client";

import { motion } from "framer-motion";
import { Eye, Zap, Bell, Code, Users, Coins, DollarSign, TrendingUp, UserCheck, Calendar, QrCode, Store } from "lucide-react";
import Image from "next/image";

const features = [
  {
    title: "Instant Local Visibility",
    desc: "Get discovered by nearby customers actively searching for services/products like yours.",
    icon: Eye,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "Quick QR Setup",
    desc: "Custom QR for direct ordering, storefronts, or UPI payments.",
    icon: QrCode,
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    title: "Real-time Orders",
    desc: "Accept orders instantly from your local area with dashboard-style management.",
    icon: Bell,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
  {
    title: "No Technical Skills Needed",
    desc: "We set up everything — no coding required.",
    icon: Code,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
];

const timeline = [
  {
    title: "Used by Local Sellers Like You",
    desc: "From Service Providers to boutique stores — Zefaza empowers everyone.",
    icon: Users,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
  },
  {
    title: "No Middlemen, No Commission",
    desc: "You keep 100% of your earnings — always.",
    icon: Coins,
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    title: "Fair Pricing Plans",
    desc: "Transparent, low-cost plans starting at just ₹39/month.",
    icon: DollarSign,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "We Support Your Growth",
    desc: "We promote your store locally & help you stand out.",
    icon: TrendingUp,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
  },
];

const socialProof = [
  {
    title: "Step 1 : Sign Up & Verify",
    desc: "Create your seller account with phone / email verification.",
    image: "/custom/stepOneSVG.png",
  },
  {
    title: "Step 2 : Add Your Details",
    desc: "Tell us about business, products, location, UPI, timings.",
    image: "/custom/steptwoSVG.png",
  },
  {
    title: "Step 3 : Go live with QR",
    desc: "We generate your QR & digital store instantly.",
    image: "/custom/stepThreeSVG.png",
  },
  {
    title: "Step 4 : Start Receiving orders.",
    desc: "Customers nearby can view your menu and place orders right you.",
    image: "/custom/stepFourSVG.png",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  },
};

export default function CustomSectionMobile() {
  return (
    <motion.section
      className="sm:hidden px-6 py-16 bg-white space-y-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        visible: {
          transition: { staggerChildren: 0.1 },
        },
      }}
      id="features"
    >
      {/* Section 1 – Why Sell on Zefaza */}
      <motion.div
        className="space-y-8"
        variants={itemVariants}
      >
        <h2 className="text-3xl font-light text-gray-900 text-center mb-12 tracking-tight">
          Why Sell on <span className="font-medium text-blue-600">Zefaza</span>?
        </h2>

        {features.map((feature, i) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={i}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -2 }}
            >
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 ${feature.bgColor} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <Icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 tracking-tight">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Section 2 – Built for sellers like you */}
      <motion.div
        className="space-y-8"
        variants={itemVariants}
      >
        <h2 className="text-3xl font-light text-gray-900 text-center mb-12 tracking-tight">
          Built for <span className="font-medium text-green-600">Sellers Like You</span>!
        </h2>

        <div className="space-y-6">
          {timeline.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -2 }}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 ${item.bgColor} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-gray-900 mb-2 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Section 3 – How ZEFAZA Works (keeping images as requested) */}
      <motion.div
        className="space-y-8"
        variants={itemVariants}
      >
        <h2 className="text-3xl font-light text-gray-900 text-center mb-12 tracking-tight">
          How <span className="font-medium text-purple-600">Zefaza</span> Works?
        </h2>
        
        <div className="space-y-6">
          {socialProof.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -2 }}
            >
              <div className="w-full h-48 bg-gray-50 rounded-xl flex items-center justify-center mb-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        className="text-center mt-16"
        variants={itemVariants}
      >
        <div className="bg-blue-50 rounded-2xl border border-blue-100 p-8">
          <h3 className="text-2xl font-light text-gray-900 mb-4 tracking-tight">
            Ready to Start Selling?
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Join thousands of local sellers growing their business with Zefaza
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors shadow-sm">
            Get Started Today
          </button>
        </div>
      </motion.div>
    </motion.section>
  );
}
