import HomeNavbar from "@/components/Home/HomeNavbar";
import HomeHero from "@/components/Home/HomeHero";
import AboutSection from "@/components/Home/AboutSection";
import FeaturesSection from "@/components/Home/FeaturesSection";
import HomeFooter from "@/components/Home/FooterHome";
import React from "react";
const page = () => {
  return <div className="min-h-screen w-full bg-white">
      <HomeNavbar />
      <HomeHero />
      <AboutSection />
      <FeaturesSection />
      <HomeFooter />
    </div>;
};
export default page;