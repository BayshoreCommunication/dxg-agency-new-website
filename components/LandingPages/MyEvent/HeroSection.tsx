import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import React from "react";
import { FaCamera } from "react-icons/fa";
import ScrollMotionEffect from "../Shared/motion/ScrollMotionEffect";
import NumberAnimation from "@/components/NumberAnimation";

const HeroSection = () => {
  return (
    <div
      className="w-full  bg-cover bg-center"
      style={{
        backgroundImage: `url('/landing-pages/my-event/hero-bg.jpg')`,
      }}
    >
      <MaxWidthWrapper>
        <div className="flex flex-col gap-5 py-8 md:py-10 lg:gap-12 lg:py-20">
          <ScrollMotionEffect effect="fade-down" duration="2000">
            {" "}
            <h1 className=" text-3xl  font-semibold text-white md:text-4xl lg:text-6xl xl:text-6xl 2xl:text-8xl xl:font-bold">
              Let{"’"}s{" "}
              <span className=" inline-block bg-[#2DC6F5] px-2  py-1 md:px-8 md:py-5 ">
                <FaCamera className="text-xl md:text-2xl lg:text-2xl xl:text-3xl" />
              </span>{" "}
              Make Your Next AV Production Experience - Easy, Fun, Memorable!
            </h1>
          </ScrollMotionEffect>

          <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-10 lg:gap-16">
            {/*  */}
            <ScrollMotionEffect effect="fade-right" duration="2000">
              <div>
                <Image
                  src="/landing-pages/my-event/hero-img.jpg"
                  alt="hero image"
                  width={820}
                  height={600}
                ></Image>
              </div>
            </ScrollMotionEffect>

            <ScrollMotionEffect effect="fade-left" duration="2000">
              <div>
                <div className="max-w-2xl">
                  <h4 className="relative text-2xl font-bold uppercase text-white before:absolute before:-left-4 before:top-1/2 before:h-6 before:w-1 before:-translate-y-1/2 before:rounded before:bg-[#6FD0FC] before:content-['']">
                    About Us
                  </h4>

                  <p className="mt-4 text-lg text-white opacity-70 md:text-xl">
                    Digital Xperience Group is a premier partner in transforming
                    events into unforgettable experiences, Our roots are firmly
                    planted in the event hospitality industry, where we pride
                    ourselves on elevating the production quality of in-person,
                    virtual and hybrid events.
                  </p>

                  <div className="mt-8 flex flex-wrap items-center gap-4 text-white md:gap-8">
                    <div className="flex items-center gap-3">
                      {/* <p className="text-4xl font-semibold md:text-6xl">25</p> */}
                      <NumberAnimation
                        className="text-4xl font-semibold md:text-6xl w-28 text-white"
                        value={25}
                        incrementPlus={1}
                        duration={200}
                      />
                      <p className="text-sm opacity-70 md:text-base">
                        Years
                        <br /> Experience
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <NumberAnimation
                        className="text-4xl font-semibold md:text-6xl w-48 text-white"
                        value={5000}
                        incrementPlus={100}
                        duration={100}
                      />
                      <p className="text-sm opacity-70 md:text-base">
                        Completed
                        <br /> Projects
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollMotionEffect>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default HeroSection;
