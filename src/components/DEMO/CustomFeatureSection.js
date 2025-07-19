"use client";
import { motion } from "framer-motion";
import { Store, BarChart3, Bell, Truck, ShoppingCart, Clock, TrendingUp, Shield } from "lucide-react";

const sellerFeatures = [
  {
    title: "Wider Reach",
    description: "List your shop online and get orders from across Warangal — no extra effort.",
    icon: Store,
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    title: "Live Dashboard",
    description: "Accept orders, update stock, and track delivery status — all in one place.",
    icon: BarChart3,
    color: "text-green-600",
    bgColor: "bg-green-50"
  },
  {
    title: "Instant Alerts",
    description: "Get notified instantly when an order is placed. Prepare. Pack. Done.",
    icon: Bell,
    color: "text-purple-600",
    bgColor: "bg-purple-50"
  },
  {
    title: "Smart Delivery",
    description: "Our delivery partners pick up orders once you confirm. Focus on quality.",
    icon: Truck,
    color: "text-orange-600",
    bgColor: "bg-orange-50"
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Customer Places Order",
    description: "Customer selects products from your online store and pays via UPI.",
    icon: ShoppingCart,
    color: "text-blue-600"
  },
  {
    step: "02",
    title: "Seller Prepares Order",
    description: "You receive notification in your dashboard. Accept and pack the order.",
    icon: Store,
    color: "text-green-600"
  },
  {
    step: "03",
    title: "Delivery Partner Arrives",
    description: "A delivery agent is auto-assigned and picks up from your shop.",
    icon: Truck,
    color: "text-purple-600"
  },
  {
    step: "04",
    title: "Order Delivered",
    description: "Package reaches customer. Dashboard shows completion & earnings.",
    icon: TrendingUp,
    color: "text-orange-600"
  },
];

const sellerBeliefs = [
  {
    title: "Your Shop. Your Rules.",
    description: "You decide pricing, offers, and what goes live — complete control in your hands.",
    icon: Shield,
    color: "text-indigo-600"
  },
  {
    title: "Built for Warangal",
    description: "Our mission is to digitally empower local sellers, not big chains.",
    icon: Store,
    color: "text-green-600"
  },
  {
    title: "Transparent Growth",
    description: "Track performance, top-selling items, and repeat customers — all live.",
    icon: BarChart3,
    color: "text-blue-600"
  },
  {
    title: "From Local to Legendary",
    description: "Start hyperlocal, grow city-wide. We'll help you scale.",
    icon: TrendingUp,
    color: "text-purple-600"
  },
];

const container = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const CustomSellerSection = () => {
  return (
    <motion.div
      className="min-h-screen bg-gray-50 py-24 px-6 md:px-16 lg:px-24"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Header */}
      <motion.div variants={item} className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
          For <span className="font-medium text-blue-600">Sellers</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Transform your local business with our comprehensive seller platform
        </p>
      </motion.div>

      {/* Seller Features */}
      <motion.div variants={item} className="max-w-6xl mx-auto mb-24">
        <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-12 text-center tracking-tight">
          Powerful Features for Your Business
        </h3>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {sellerFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl border border-gray-100 p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <Icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3 tracking-tight">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* How It Works */}
      <motion.div variants={item} className="max-w-6xl mx-auto mb-24">
        <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-12 text-center tracking-tight">
          How It Works
        </h3>
        <div className="relative">
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {howItWorks.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  variants={item}
                  className="relative"
                >
                  <div className="bg-white rounded-2xl border border-gray-100 p-6 text-center hover:shadow-md transition-all duration-300">
                    <div className={`w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                      <Icon className={`w-6 h-6 ${step.color}`} />
                    </div>
                    <div className="text-sm font-bold text-gray-400 mb-2">
                      {step.step}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 tracking-tight">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Enhanced connecting line */}
                  {index < howItWorks.length - 1 && (
                    <>
                      <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 transform -translate-y-1/2 z-10"></div>
                      <div className="hidden lg:block absolute top-1/2 -right-2 w-2 h-2 bg-gray-400 rounded-full transform -translate-y-1/2 z-20"></div>
                    </>
                  )}
                </motion.div>
              );
            })}
          </div>
          
          {/* Continuous flow line for larger screens */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-200 to-transparent transform -translate-y-1/2 -z-10"></div>
        </div>
      </motion.div>

      {/* Seller Beliefs */}
      <motion.div variants={item} className="max-w-6xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-12 text-center tracking-tight">
          Why Choose Zefaza
        </h3>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {sellerBeliefs.map((belief, index) => {
            const Icon = belief.icon;
            return (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl border border-gray-100 p-6 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className={`w-6 h-6 ${belief.color}`} />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3 tracking-tight">
                  {belief.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {belief.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        variants={item}
        className="text-center mt-20"
      >
        <div className="max-w-2xl mx-auto bg-white rounded-3xl border border-gray-100 p-12 shadow-sm">
          <h3 className="text-2xl font-light text-gray-900 mb-4 tracking-tight">
            Ready to Transform Your Business?
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Join thousands of local sellers who are already growing with Zefaza
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors shadow-sm">
            Become a Seller
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default CustomSellerSection;
