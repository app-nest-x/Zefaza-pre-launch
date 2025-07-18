"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const providerFeatures = [
  {
    title: "Digital Visibility",
    description:
      "Customers can instantly find and book your service with one scan — no calls needed.",
    rating: 5,
  },
  {
    title: "Instant Booking Alerts",
    description:
      "As soon as a request is made, you’re notified instantly to act fast — like Rapido.",
    rating: 5,
  },
  {
    title: "Real-Time Dispatch",
    description:
      "Once accepted, you head to the customer's location immediately — no waiting, no delays.",
    rating: 5,
  },
  {
    title: "Zero Commission",
    description:
      "We don’t take a cut. You keep 100% of what you earn. Just via pay-as-you-go .",
    rating: 5,
  },
];

const howServiceWorks = [
  {
    step: "Step 1",
    title: "Customer Books Instantly",
    description:
      "They choose a service provider nearby and book immediately — no scheduling.",
  },
  {
    step: "Step 2",
    title: "You Get Instant Notification",
    description:
      "You receive a real-time alert with job details in your dashboard.",
  },
  {
    step: "Step 3",
    title: "Reach Customer Quickly",
    description:
      "You accept the job and immediately proceed to the customer’s location.",
  },
  {
    step: "Step 4",
    title: "Deliver & Get Paid",
    description:
      "Provide the service, mark it complete, and receive payment instantly.",
  },
];

const providerBeliefs = [
  {
    title: "Be Fast. Be First.",
    description:
      "The fastest responders win more jobs — build your reputation with speed.",
  },
  {
    title: "Local Hero, Digital Power",
    description:
      "With QR + real-time bookings, you're always one tap away from new income.",
  },
  {
    title: "Earn What You Deserve",
    description:
      "No middlemen. No cuts. 100% of your service charges are yours.",
  },
  {
    title: "Join the Movement",
    description:
      "Be a proud part of Warangal’s fastest-growing on-demand service network.",
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

const CustomServiceProviderSection = () => {
  return (
    <motion.div
      className="min-h-screen bg-gray-200 flex flex-col gap-16 px-4 py-16 items-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={container}
      id="services"
    >
      {/* Heading */}
      <motion.h2
        className="text-5xl sm:text-6xl font-extrabold text-center tracking-tight text-black"
        variants={item}
      >
        FOR SERVICE PROVIDERS
      </motion.h2>

      {/* Section 1 - Features */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl">
        {providerFeatures.map((feature, idx) => (
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
          {howServiceWorks.map((step, idx) => (
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

      {/* Section 3 - Beliefs / Vision */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl"
        variants={item}
      >
        {providerBeliefs.map((belief, idx) => (
          <motion.div
            key={idx}
            className="w-full"
            variants={item}
            whileHover={{ scale: 1.05 }}
          >
            <Card className="h-full border border-dashed border-black/20 bg-blue-50">
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

export default CustomServiceProviderSection;
