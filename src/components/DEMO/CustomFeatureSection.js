"use client";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const sellerFeatures = [
  {
    title: "Wider Reach",
    description:
      "List your shop online and get orders from across Warangal — no extra effort.",
    rating: 5,
  },
  {
    title: "Live Order Dashboard",
    description:
      "Accept orders, update stock, and track delivery status — all in one place.",
    rating: 5,
  },
  {
    title: "Auto Notifications",
    description:
      "Get notified instantly when an order is placed. Prepare. Pack. Done.",
    rating: 5,
  },
  {
    title: "Seamless Delivery",
    description:
      "Our delivery partners pick up the order once you confirm it. You focus on quality.",
    rating: 5,
  },
];

const howItWorks = [
  {
    step: "Step 1",
    title: "Customer Places Order",
    description:
      "A customer selects products from your online store and pays via UPI.",
  },
  {
    step: "Step 2",
    title: "Seller Prepares Order",
    description:
      "You receive a notification in your Seller Dashboard. You accept and pack the order.",
  },
  {
    step: "Step 3",
    title: "Delivery Partner Arrives",
    description:
      "A delivery agent is auto-assigned and picks up the packed order from your shop.",
  },
  {
    step: "Step 4",
    title: "Order Delivered",
    description:
      "The package reaches the customer, and your dashboard reflects completed delivery & earnings.",
  },
];

const sellerBeliefs = [
  {
    title: "Your Shop. Your Rules.",
    description:
      "You decide pricing, offers, and what goes live — complete control in your hands.",
  },
  {
    title: "Built for Warangal",
    description:
      "Our mission is to digitally empower local sellers, not big chains.",
  },
  {
    title: "Transparent Growth",
    description:
      "Track your performance, top-selling items, and repeat customers — all live.",
  },
  {
    title: "From Local to Legendary",
    description:
      "Start hyperlocal, grow your reputation city-wide. We'll help you scale.",
  },
];

const container = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, staggerChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const CustomSellerSection = () => {
  return (
    <motion.div
      className="min-h-screen bg-gray-200 flex flex-col gap-16 px-4 py-16 items-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={container}
      id="sellers"
    >
      {/* Heading */}
      <motion.h2
        className="text-5xl sm:text-6xl font-extrabold text-center tracking-tight text-black"
        variants={item}
      >
        FOR SELLERS
      </motion.h2>

      {/* Section 1 - Features */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
        {sellerFeatures.map((feature, idx) => (
          <motion.div
            key={idx}
            className="w-full"
            variants={item}
            whileHover={{ scale: 1.05 }}
          >
            <Card className="h-full shadow-md">
              <CardContent className="p-6 flex flex-col gap-4 h-full justify-between">
                <div className="flex gap-1">
                  {[...Array(feature.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Section 2 - How It Works */}
      <motion.div
        className="w-full max-w-5xl bg-gray-100 p-8 rounded-xl border border-gray-300"
        variants={item}
      >
        <h2 className="text-3xl font-extrabold text-center mb-6">
          How It Works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {howItWorks.map((step, idx) => (
            <motion.div key={idx} variants={item}>
              <Card className="h-full">
                <CardContent className="p-6 flex flex-col gap-3">
                  <span className="text-xs font-medium text-gray-500">
                    {step.step}
                  </span>
                  <h3 className="text-lg font-semibold">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Section 3 - Beliefs / Philosophy */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl"
        variants={item}
      >
        {sellerBeliefs.map((belief, idx) => (
          <motion.div
            key={idx}
            className="w-full"
            variants={item}
            whileHover={{ scale: 1.05 }}
          >
            <Card className="h-full border border-dashed border-black/20 bg-yellow-50">
              <CardContent className="p-6 flex flex-col gap-3">
                <h3 className="text-xl font-bold">{belief.title}</h3>
                <p className="text-sm text-gray-700">{belief.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default CustomSellerSection;
