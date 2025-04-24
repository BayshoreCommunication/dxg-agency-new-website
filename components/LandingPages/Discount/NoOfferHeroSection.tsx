import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import React from "react";
import { FaCamera } from "react-icons/fa";
import ScrollMotionEffect from "../Shared/motion/ScrollMotionEffect";

const NoOfferHeroSection = () => {
  return (
    <div
      className="w-full  bg-cover bg-center"
      style={{
        backgroundImage: `url('/landing-pages/discount/discount-bg.jpg')`,
      }}
    >
      <MaxWidthWrapper>
        <div className="flex min-h-[85vh]  items-center justify-center gap-2 py-8 md:py-10 lg:gap-3 lg:py-20">
          <h2 className=" text-5xl font-bold text-white md:text-6xl lg:text-8xl text-center">
            Sorry! <br /> Right now we don{"'"}t have any discount offer.
          </h2>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default NoOfferHeroSection;
