"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const CustomAboutSection = () => {
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
    <motion.div
      className="min-h-screen bg-gray-200 flex flex-col items-center justify-start px-4 py-12 md:p-6 relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      id="about"
    >
      {/* SVG Background */}
      <svg
        className="absolute inset-0 opacity-10"
        viewBox="0 0 1440 720"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 360C200 500 400 200 720 360C1040 520 1240 220 1440 360"
          stroke="white"
          strokeWidth="2"
          strokeOpacity="0.3"
        />
        <circle cx="200" cy="100" r="50" fill="white" fillOpacity="0.2" />
        <circle cx="1240" cy="600" r="70" fill="white" fillOpacity="0.2" />
      </svg>

      {/* Header */}
      <div className="max-w-6xl w-full flex flex-col items-center justify-center gap-6 p-4 relative z-10">
        <motion.div variants={itemVariants} className="text-center">
          <h1 className="text-3xl md:text-5xl font-extrabold text-black mb-4">
            About Us
          </h1>
          <p className="text-base md:text-lg text-black max-w-2xl mx-auto">
            We are not just building products — we’re shaping experiences that
            solve real-world problems, combining creativity with cutting-edge
            tech.
          </p>
        </motion.div>

        {/* Main Card */}
        <motion.div
          className="shadow-2xl rounded-2xl w-full max-w-6xl flex flex-col items-center justify-center gap-6 p-6 md:p-8 bg-white/5 backdrop-blur-sm"
          variants={itemVariants}
        >
          {/* Top Section */}
          <motion.div
            className="w-full max-w-lg shadow-2xl flex flex-col gap-4 p-4 items-center justify-center"
            variants={itemVariants}
          >
            <motion.div
              className="shadow-2xl w-20 h-20 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={"/logo.svg"}
                alt="Logo for zefaza"
                width={100}
                height={100}
              />
            </motion.div>
            <motion.div
              className="bg-white rounded-2xl w-full flex items-center justify-center shadow-2xl p-4"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-black text-base md:text-lg font-bold text-center">
                "Empowering Progress Through Innovation"
              </p>
            </motion.div>
          </motion.div>

          {/* Bottom Section */}
          <motion.div
            className="w-full flex flex-wrap justify-center md:justify-between items-center gap-6 relative"
            variants={itemVariants}
          >
            {[
              {
                rotate: 45,
                bottom: 16,
                title: "Innovative Team",
                src: "/logo.svg",
              },
              {
                rotate: 60,
                bottom: 156,
                title: "Reliable Solution",
                src: "/logo.svg",
              },
              {
                rotate: 0,
                bottom: 240,
                title: "Cutting Edge Tech",
                src: "/logo.svg",
              },
              {
                rotate: -60,
                bottom: 156,
                title: "Customer Centric",
                src: "/logo.svg",
              },
              {
                rotate: 45,
                bottom: 16,
                title: "Growth Oriented",
                src: "/logo.svg",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="w-[120px] md:w-[140px] h-[140px] flex flex-col items-center justify-center gap-2 relative"
                whileHover={{ scale: 1.1, rotate: item.rotate + 10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white w-full h-2/3 rounded-md flex items-center justify-center">
                  <Image
                    src={item.src}
                    alt={item.title}
                    width={90}
                    height={90}
                    className="object-contain"
                  />
                </div>
                <div className="w-full h-1/3 rounded-md bg-gray-300 text-xs md:text-sm font-semibold flex items-center justify-center text-center px-2">
                  {item.title}
                </div>
              </motion.div>
            ))}

            <motion.div
              className="bg-white rounded-md h-[80px] w-full md:w-[220px] flex items-center justify-center shadow-2xl mt-4 md:mt-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-black text-base md:text-xl font-bold text-center">
                Trusted by Customers
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CustomAboutSection;
