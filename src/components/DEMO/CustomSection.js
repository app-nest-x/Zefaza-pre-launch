"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";

const CustomSection = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
    },
  };

  return (
    <motion.div
      className="min-h-screen w-full bg-gray-200 flex items-center justify-center overflow-hidden p-6 relative rounded-2xl"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      id="features"
    >
      {/* Decorative SVG Background */}
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

      <motion.div
        className="relative top-0 right-34 max-w-6xl w-full flex justify-between"
        variants={containerVariants}
      >
        {/* Left Circles */}
        <motion.div
          className="relative top-[760px] right-[5px] z-20 shadow-2xl"
          variants={itemVariants}
        >
          <motion.div variants={itemVariants}>
            <div className="border-2 bg-white w-[260px] font-bold text-2xl bottom-194 rounded-lg relative left-5">
              Why Sell On ZEFAZA ?
            </div>
          </motion.div>
          <motion.div variants={itemVariants}>
            <div className="border-2 bg-white w-[260px] font-bold text-2xl bottom-200 rounded-lg relative left-275 inline">
              Built For Sellers Like You ?
            </div>
          </motion.div>
          {[
            {
              bottom: 780,
              left: 12,
              image: "/custom/instantLocalImg.png",
            },
            {
              bottom: 800,
              left: 200,
              image: "/custom/QuickQrSetupImg.png",
            },
            {
              bottom: 788,
              left: 200,
              image: "/custom/RealTimeOrdersimg.png",
            },
            {
              bottom: 810,
              left: 12,
              image: "/custom/NoTechSkillsImg.png",
            },
          ].map((style, index) => (
            <motion.div
              key={`left-${index}`}
              className="w-[228px] h-[270px]  shadow-2xl rounded-lg flex flex-col items-center justify-center gap-0.5 pt-1 pb-1"
              style={{
                position: "relative",
                bottom: `${style.bottom}px`,
                left: `${style.left}px`,
              }}
              variants={itemVariants}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="bg-gray-100 w-full h-full flex items-center justify-center rounded-2xl">
                <Image
                  src={style.image}
                  alt="Logo of Zefaza"
                  height={120}
                  width={195}
                  className="rounded-2xl"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Right Circles */}
        <motion.div
          className="relative z-20 rotate-180 bottom-210 left-208 shadow-2xl"
          variants={itemVariants}
        >
          {[
            {
              bottom: 780,
              left: 12,
              img: "/custom/trustedByAllImg.jpg",
            },
            {
              bottom: 800,
              left: 200,
              img: "/custom/keepMoreImg.jpg",
            },
            {
              bottom: 795,
              left: 200,
              img: "/custom/FairandClearImg.png",
            },
            {
              bottom: 820,
              left: 12,
              img: "/custom/GrowLocallyImg.png",
            },
          ].map((style, index) => (
            <motion.div
              key={`right-${index}`}
              className="w-[228px] h-[270px] rounded-lg flex items-center justify-center shadow-2xl flex-col gap-0.5 pt-1 pb-1"
              style={{
                position: "relative",
                bottom: `${style.bottom}px`,
                left: `${style.left}px`,
              }}
              variants={itemVariants}
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              <div className="-top-8 -right-7 w-full h-full rounded-2xl relative rotate-180">
                <Image
                  alt="Zefaza Images"
                  src={style.img}
                  width={250}
                  height={250}
                  className="relative bottom-10 left-5"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Middle Section */}
        <motion.div
          className="w-[500px] h-[580px] border-2 border-gray-400 relative flex items-center flex-col p-6 gap-6 bg-white/5 backdrop-blur-sm top-32 right-50 shadow-2xl"
          variants={itemVariants}
        >
          <Image
            alt="Images"
            height={480}
            width={480}
            src="/custom/StepsINZefaza.png"
            className="w-[500px] h-[500px]"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default CustomSection;
