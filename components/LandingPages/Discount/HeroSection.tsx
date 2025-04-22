import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import React from "react";
import { FaCamera } from "react-icons/fa";
import ScrollMotionEffect from "../Shared/motion/ScrollMotionEffect";

const HeroSection = () => {
  return (
    <div
      className="w-full  bg-cover bg-center"
      style={{
        backgroundImage: `url('/landing-pages/discount/discount-bg.jpg')`,
      }}
    >
      <MaxWidthWrapper>
        <div className="flex min-h-[85vh]  items-center justify-center gap-2 py-8 md:py-10 lg:gap-3 lg:py-20">
          <ScrollMotionEffect effect="fade-right" duration="2000">
            <h1 className="max-w-5xl bg-[#2DC6F5] px-4 py-24 text-center text-5xl font-bold text-white md:text-6xl lg:text-9xl">
              10%
            </h1>
          </ScrollMotionEffect>
          <div>
            <ScrollMotionEffect effect="fade-left" duration="1000">
              <h2 className="max-w-5xl text-start text-5xl font-bold text-white md:text-6xl lg:text-8xl">
                Exclusive <br />
                Offer
              </h2>
              <h3 className="mt-4 max-w-5xl text-start text-2xl font-medium uppercase text-white md:text-4xl lg:text-6xl">
                On your <br /> next event
              </h3>
            </ScrollMotionEffect>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default HeroSection;
