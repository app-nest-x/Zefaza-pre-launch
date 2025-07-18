import { BentoGridDemo } from "@/components/Home/BentoFirstDemo";
import { BentoGridSecondDemo } from "@/components/Home/BentoSecondDemo";
import { BentoGridThirdDemo } from "@/components/Home/BentoThirdDemo";
import HomeFooter from "@/components/Home/FooterHome";
import HomeHero from "@/components/Home/HomeHero";
import { MacbookScrollDemo } from "@/components/Home/HomeMac";
import HomeNavbar from "@/components/Home/HomeNavbar";
import { TextHoverEffectDemo } from "@/components/Home/HomeTextDemo";
import { ThreeDMarqueeDemo } from "@/components/Home/ThreeDMarqueDemo";
import React from "react";

const page = () => {
  return (
    <div className="bg-gray-100 min-h-screen w-full">
      <HomeNavbar />
      <HomeHero/>
      <div className="hidden md:block">
        <MacbookScrollDemo />
      </div>
      <ThreeDMarqueeDemo />
      {/* <BentoGridThirdDemo /> */}
      <BentoGridDemo />
      <BentoGridSecondDemo />
      <div className="bg-black">
        <TextHoverEffectDemo />
      </div>
      <HomeFooter />
    </div>
  );
};

export default page;
