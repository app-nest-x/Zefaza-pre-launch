// "use client";

// import { motion } from "framer-motion";
// import { Star } from "lucide-react";
// import Image from "next/image";

// const CustomAboutSection = () => {
//   const containerVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: [0.4, 0, 0.2, 1],
//         staggerChildren: 0.1,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
//     },
//   };

//   return (
//     <motion.div
//       className="min-h-screen bg-gray-200 flex flex-col items-center justify-start p-6 relative overflow-hidden"
//       variants={containerVariants}
//       initial="hidden"
//       animate="visible"
//       id="about"
//     >
//       {/* Decorative SVG Background */}
//       <svg
//         className="absolute inset-0 opacity-10"
//         viewBox="0 0 1440 720"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           d="M0 360C200 500 400 200 720 360C1040 520 1240 220 1440 360"
//           stroke="white"
//           strokeWidth="2"
//           strokeOpacity="0.3"
//         />
//         <circle cx="200" cy="100" r="50" fill="white" fillOpacity="0.2" />
//         <circle cx="1240" cy="600" r="70" fill="white" fillOpacity="0.2" />
//       </svg>

//       {/* === About Header === */}
//       <div className="max-w-6xl w-full flex flex-col items-center justify-center gap-6 p-6 relative z-10">
//         <motion.div variants={itemVariants} className="text-center">
//           <h1 className="text-5xl font-extrabold text-black mb-4">About Us</h1>
//           <p className="text-lg text-black max-w-2xl mx-auto">
//             We are not just building products — we’re shaping experiences that
//             solve real-world problems, combining creativity with cutting-edge
//             tech.
//           </p>
//         </motion.div>

//         {/* === About Card Layout === */}
//         <motion.div
//           className="shadow-2xl rounded-2xl w-[1160px] h-[720px] flex items-center justify-center flex-col gap-6 p-8 bg-white/5 backdrop-blur-sm"
//           variants={itemVariants}
//         >
//           {/* Top */}
//           <motion.div
//             className=" w-[600px] shadow-2xl h-1/3 flex flex-col gap-4 p-6 items-center justify-center"
//             variants={itemVariants}
//           >
//             <motion.div
//               className="shadow-2xl w-20 h-1/3 flex items-center justify-center"
//               whileHover={{ scale: 1.1 }}
//               transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
//             >
//               <Image
//                 src={"/logo.svg"}
//                 alt="Logo for zefaza"
//                 width={100}
//                 height={100}
//               />
//             </motion.div>
//             <motion.div
//               className="bg-white rounded-2xl w-full h-2/3 flex items-center justify-center shadow-2xl"
//               whileHover={{ scale: 1.05 }}
//               transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
//             >
//               <p className="text-black text-lg font-bold ">
//                 "Empowering Progress Through Innovation"
//               </p>
//             </motion.div>
//           </motion.div>

//           {/* Bottom */}
//           <motion.div
//             className="w-full h-2/3 flex p-8 gap-12 items-end relative"
//             variants={itemVariants}
//           >
//             <div className="flex gap-12 items-end relative left-[75px] top-5">
//               {[
//                 {
//                   rotate: 45,
//                   bottom: 16,
//                   left: 16,
//                   title: "Innovative Team",
//                   src: "/custom/innovative.png",
//                 },
//                 {
//                   rotate: 60,
//                   bottom: 156,
//                   right: 12,
//                   title: "Reliable Solution",
//                   src: "/custom/reliable.png",
//                 },
//                 {
//                   rotate: 0,
//                   bottom: 240,
//                   title: "Cutting Edge tech",
//                   src: "/custom/smart.png",
//                 },
//                 {
//                   rotate: -60,
//                   bottom: 156,
//                   left: 12,
//                   title: "Customer Centric",
//                   src: "/custom/build.png",
//                 },
//                 {
//                   rotate: 45,
//                   bottom: 16,
//                   right: 32,
//                   title: "Growth Oriented",
//                   src: "/custom/grow.png",
//                 },
//               ].map((style, index) => (
//                 <motion.div
//                   key={index}
//                   className="w-[140px] h-[140px] flex items-center justify-center flex-col gap-1"
//                   style={{
//                     transform: `rotate(${style.rotate}deg)`,
//                     position: "relative",
//                     bottom: `${style.bottom}px`,
//                     left: style.left ? `${style.left}px` : undefined,
//                     right: style.right ? `${style.right}px` : undefined,
//                   }}
//                   whileHover={{ scale: 1.1, rotate: style.rotate + 10 }}
//                   transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
//                 >
//                   <div className="bg-white w-full h-2/3 rounded-md">
//                     <Image
//                       src={style.src}
//                       alt="Logo of Zefaza"
//                       width={110}
//                       height={110}
//                       className="relative left-3"
//                     />
//                   </div>
//                   <div className="w-full h-1/3 rounded-md bg-gray-300 font-semibold flex items-center justify-center text-center px-2">
//                     {style.title}
//                   </div>
//                 </motion.div>
//               ))}
//               <motion.div
//                 className="bg-white rounded-md h-[100px] w-[220px] flex items-center justify-center shadow-2xl"
//                 style={{ position: "relative", right: "600px", bottom: "30px" }}
//                 whileHover={{ scale: 1.05 }}
//                 transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
//               >
//                 <p className="text-black text-xl font-bold">
//                   Trusted by Customers
//                 </p>
//               </motion.div>
//             </div>
//           </motion.div>
//         </motion.div>
//       </div>
//     </motion.div>
//   );
// };

// export default CustomAboutSection;
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const aboutFeatures = [
  {
    title: "Innovative Minds",
    description: "Our team thrives on solving problems with bold, fresh ideas.",
    image: "/custom/innovative.png",
  },
  {
    title: "Reliable Solutions",
    description: "We build dependable systems that scale with your business.",
    image: "/custom/reliable.png",
  },
  {
    title: "Smart Technology",
    description:
      "We utilize cutting-edge tech to deliver future-ready products.",
    image: "/custom/smart.png",
  },
  {
    title: "Built for Users",
    description: "Everything we design starts with the user in mind.",
    image: "/custom/build.png",
  },
  {
    title: "Growth Driven",
    description: "We align innovation with growth for long-term success.",
    image: "/custom/grow.png",
  },
];

const CustomAboutSection = () => {
  return (
    <section
      className="w-full min-h-screen bg-white dark:bg-black py-20 px-6 md:px-16 lg:px-24"
      id="about"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          About Us
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
          At Zefaza, we craft impactful digital solutions that merge design,
          innovation, and strategy into seamless user experiences.
        </p>
      </motion.div>

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-800 shadow-xl rounded-3xl p-10 max-w-6xl mx-auto"
      >
        {/* Logo and Tagline */}
        <div className="flex flex-col items-center justify-center mb-12">
          <Image src="/logo.svg" alt="Zefaza Logo" width={80} height={80} />
          <p className="text-xl font-semibold text-center mt-4 text-gray-800 dark:text-gray-200">
            “Empowering Progress Through Innovation”
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {aboutFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 mb-4">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300 text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <div className="bg-blue-600 hover:bg-blue-700 transition text-white px-6 py-3 rounded-full font-medium shadow-md">
            Trusted by 100+ customers worldwide
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CustomAboutSection;
