import CustomAboutSection from "@/components/DEMO/CustomAboutSection";
import CustomAboutSectionformobile from "@/components/DEMO/CustomAboutSectionformobile";
import CustomFeatureSection from "@/components/DEMO/CustomFeatureSection";
import CustomFooter from "@/components/DEMO/CustomFooter";
import HeroForDesktop from "@/components/DEMO/Customhero";
import HeroForMobile from "@/components/DEMO/CustomHeroForMobile";
import CustomNavbar from "@/components/DEMO/CustomNavbar";
import CustomSection from "@/components/DEMO/CustomSection";
import CustomSectionForMobiile from "@/components/DEMO/CustomSectionForMobiile";
import CustomServiceProviderSection from "@/components/DEMO/CustomServiceProviderSection";
import CustomTestimonialForMobile from "@/components/DEMO/CustomTestimonialForMobile";
import CustomtestimonialSection from "@/components/DEMO/CustomtestimonialSection";

const page = () => {
  return (
    <div className="w-full min-h-screen relative bg-gray-200 pl-3 pr-3 flex flex-col gap-5">
      <CustomNavbar />
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
      <div className="md:block">
        <CustomFeatureSection />
      </div>
      <div className="">
        <CustomServiceProviderSection />
      </div>
      <div className="">
        <CustomAboutSection />
      </div>
      {/* <div className="md:hidden">
        <CustomAboutSectionformobile />
      </div> */}
      <div className="hidden md:block">
        <CustomtestimonialSection />
      </div>
      <div className="md:hidden">
        <CustomTestimonialForMobile />
      </div>
      <CustomFooter />
    </div>
  );
};

export default page;
