"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const features = [
  {
    title: "Instant Local Visibility",
    desc: "Get discovered by nearby customers actively searching for services/products like yours.",
    image: "/custom/instant.png",
  },
  {
    title: "Quick QR Setup",
    desc: "Custom QR for direct ordering, storefronts, or UPI payments.",
    image: "/custom/quick.png",
  },
  {
    title: "Real-time Orders",
    desc: "Accept orders instantly from your local area with dashboard-style management.",
    image: "/custom/real.png",
  },
  {
    title: "No Technical Skills Needed",
    desc: "We set up everything — no coding required.",
    image: "/custom/notech.png",
  },
];

const timeline = [
  {
    title: "Used by Local Sellers Like You",
    desc: "From Service Providers to boutique stores — Zefaza empowers everyone.",
    image: "/custom/trusted.png",
  },
  {
    title: "No Middlemen, No Commission",
    desc: "You keep 100% of your earnings — always.",
    image: "/custom/keep.png",
  },
  {
    title: "Fair Pricing Plans",
    desc: "Transparent, low-cost plans starting at just ₹39/month.",
    image: "/custom/fair.png",
  },
  {
    title: "We Support Your Growth",
    desc: "We promote your store locally & help you stand out.",
    image: "/custom/growth.png",
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
      className="sm:hidden px-4 py-10 bg-white space-y-10"
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
      {/* Section 1 – Feature Boxes */}
      <motion.h2
        className="text-2xl font-bold text-center"
        variants={itemVariants}
      >
        Why Sell on ZEFAZA?
      </motion.h2>

      {features.map((feature, i) => (
        <motion.div
          key={i}
          className="bg-gray-100 rounded-xl p-4 shadow space-y-2"
          variants={itemVariants}
        >
          <div className="w-full h-[160px]  rounded-xl flex items-center justify-center">
            <Image
              src={feature.image}
              alt={feature.title}
              width={240}
              height={240}
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold">{feature.title}</h3>
            <p className="text-sm text-gray-700">{feature.desc}</p>
          </div>
        </motion.div>
      ))}

      {/* Section 2 – How it Works */}
      <motion.h2
        className="text-2xl font-bold text-center pt-6"
        variants={itemVariants}
      >
        Built for sellers like you !
      </motion.h2>

      <motion.div
        className="space-y-6"
        variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
      >
        {timeline.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow-md p-4 space-y-2"
            variants={itemVariants}
          >
            <div className="w-full h-full bg-gray-100 rounded-xl flex items-center justify-center">
              <Image
                src={item.image}
                alt={item.title}
                width={240}
                height={240}
              />
            </div>
            <div>
              <h3 className="font-semibold text-md">{item.title}</h3>
              <p className="text-sm text-gray-700">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* ✅ Section 3 – Social Proof */}
      <motion.h2
        className="text-2xl font-bold text-center pt-6"
        variants={itemVariants}
      >
        How ZEFAZA Works ?
      </motion.h2>
      <motion.div
        className="space-y-6"
        variants={{ visible: { transition: { staggerChildren: 0.3 } } }}
      >
        {socialProof.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow-md p-4 space-y-2"
            variants={itemVariants}
          >
            <div className="w-full h-full bg-gray-100 rounded-xl flex items-center justify-center">
              <Image
                src={item.image}
                alt={item.title}
                width={240}
                height={240}
              />
            </div>
            <div>
              <h3 className="font-semibold text-md">{item.title}</h3>
              <p className="text-sm text-gray-700">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA */}
      <motion.div
        className="bg-yellow-100 rounded-xl p-6 mt-10 text-center space-y-4 shadow-lg"
        variants={itemVariants}
      >
        <p className="text-lg font-semibold text-black">
          Discover Our Vision: Innovate, Connect, Succeed
        </p>
        <button className="px-6 py-2 bg-black text-white rounded-lg font-bold shadow-md">
          Join Us Today
        </button>
      </motion.div>
    </motion.section>
  );
}
