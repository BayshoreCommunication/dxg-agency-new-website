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
        backgroundImage: `url('/landing-pages/our-portfolio/our-portfolio-bg.png')`,
      }}
    >
      <MaxWidthWrapper>
        <div className="flex min-h-[85vh] flex-col items-center justify-center gap-5 py-8 md:py-10 lg:gap-12 lg:py-20">
          <ScrollMotionEffect effect="fade-down-right" duration="2000">
            {" "}
            {/* <h1 className='max-w-5xl text-center text-5xl font-bold text-white md:text-6xl lg:text-8xl'> */}
            <h1 className=" max-w-5xl text-center text-5xl font-bold text-white md:text-6xl lg:text-8xl">
              Explore Our Event{" "}
              <span className="relative">
                Solutions{" "}
                <ScrollMotionEffect effect="fade-up-right" duration="2000">
                  <Image
                    src="/landing-pages/our-portfolio/heading-after.png"
                    alt=""
                    width={400}
                    height={70}
                    className="top-100 absolute right-[10%] w-[60%] lg:w-1/2"
                  ></Image>
                </ScrollMotionEffect>
              </span>
            </h1>
          </ScrollMotionEffect>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default HeroSection;
