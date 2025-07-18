"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";

export function ThreeDMarqueeDemo() {
  const images = [
    "/custom/trustedByAllImg.jpg",
    "/custom/stepTwoSVG.png",
    "/custom/stepThreeSVG.png",
    "/custom/stepsINZefaza.png",
    "/custom/stepTwoSVG.png",
    "/custom/stepOneSVG.png",
    "/custom/stepFourSVG.png",
    "/custom/smart.png",
    "/custom/signup.png",
    "/custom/reliable.png",
    "/custom/RealTimeOrdersImg.png",
    "/custom/QuickQrSetupImg.png",
    "/custom/stepTwoSVG.png",
    "/custom/NoTechSkillImg.png",
    "/custom/keepmoreimg.jpg",
    "/custom/instantlocalimg.png",
    "/custom/innovative.png",
    "/custom/image.png",
    "/custom/growth.png",
    "/custom/growlocallyimg.png",
    "/custom/fairandclearimg.png",
    "/custom/build.png",
    "/custom/keepmoreimg.jpg",
    "/custom/instantlocalimg.png",
    "/custom/innovative.png",
    "/custom/image.png",
    "/custom/growth.png",
    "/custom/growlocallyimg.png",
    "/custom/fairandclearimg.png",
    "/custom/build.png",
  ];
  return (
    <div className="mx-auto my-10 max-w-7xl rounded-3xl bg-gray-950/5 p-2 ring-1 ring-neutral-700/10 dark:bg-neutral-800">
      <ThreeDMarquee images={images} />
    </div>
  );
}
