import React from "react";
// import { Icons } from "@/components/Icons";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
// import { OutlineTextStyle } from "@/components/TextStyle";
import BannerImage from "@/public/events/eventsSectionBg.png";
// import { MotionDiv, MotionP } from "@/components/Motion";
// import NumberAnimation from "@/components/NumberAnimation";
// import { fadeIn, staggerContainer, zoomIn } from "@/lib/motion";
// import { TypingText } from "@/components/CustomTexts";

export const BannerSection = () => {
  return (
    <div className="events-banner-container">
      <div
        className="banner-background flex h-[400px] items-center sm:h-[780px]"
        style={{
          backgroundImage: `url(${BannerImage.src})`,
        }}
      >
        <MaxWidthWrapper>
          <div className="justify-center leading-[45px] sm:justify-start sm:leading-[120px]">
            <p className="text-[16px] font-normal text-white sm:text-lg">
              September 12th - 14th
            </p>
            <h1 className="flex-none text-[45px] font-bold uppercase text-white sm:text-[120px]">
              SEPC SOUTHERN
            </h1>
            {/* <div className='w-10 bg-[#D8D8D8] p-5'>
            <p className='text-lg text-white'>
              20
              <br />
              24
            </p>
          </div> */}
            <h1 className="flex-none text-[45px] font-bold uppercase text-white sm:text-[120px]">
              INNOVATIONS 2024
            </h1>
            <p className="text-[16px] font-normal text-white sm:text-lg">
              Vendor Booth - Audio Visual Order Page
            </p>
          </div>
        </MaxWidthWrapper>
      </div>
    </div>
  );
};

export default BannerSection;
