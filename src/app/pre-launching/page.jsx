"use client";

import CustomAboutSection from "@/components/DEMO/CustomAboutSection";
import CustomAboutSectionformobile from "@/components/DEMO/CustomAboutSectionformobile";
import CustomFeatureSection from "@/components/DEMO/CustomFeatureSection";
import PreLaunchFooter from "@/components/DEMO/CustomFooter";
import HeroForDesktop from "@/components/DEMO/Customhero";
import HeroForMobile from "@/components/DEMO/CustomHeroForMobile";
import CustomSection from "@/components/DEMO/CustomSection";
import CustomSectionForMobiile from "@/components/DEMO/CustomSectionForMobiile";
import CustomServiceProviderSection from "@/components/DEMO/CustomServiceProviderSection";
import CustomTestimonialForMobile from "@/components/DEMO/CustomTestimonialForMobile";
import CustomtestimonialSection from "@/components/DEMO/CustomtestimonialSection";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const page = () => {
  return (
    <div className="w-full min-h-screen bg-white">
      {/* Back to Home Button */}
      <motion.div 
        className="fixed top-6 left-6 z-50"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Link href="/">
          <motion.div
            className="flex items-center space-x-2 bg-white/90 backdrop-blur-sm border border-gray-200 px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, x: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft className="w-4 h-4 text-gray-700" />
            <span className="text-sm font-medium text-gray-700">Back to Home</span>
          </motion.div>
        </Link>
      </motion.div>
      
      <div className="hidden md:block">
        <HeroForDesktop />
      </div>
      <div className="md:hidden">
        <HeroForMobile />
      </div>
      
      <div className="hidden md:block">
        <CustomSection />
      </div>
      <div className="md:hidden">
        <CustomSectionForMobiile />
      </div>
      
      <CustomFeatureSection />
      <CustomServiceProviderSection />
      <CustomAboutSection />
      
      <div className="hidden md:block">
        <CustomtestimonialSection />
      </div>
      <div className="md:hidden">
        <CustomTestimonialForMobile />
      </div>
      
      <PreLaunchFooter />
    </div>
  );
};

export default page;
