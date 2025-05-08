"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";

import Image from "next/image";

import ScrollMotionEffect from "../Shared/motion/ScrollMotionEffect";

const WhyYouChooseDXG = () => {
  return (
    <div className="w-full bg-black py-8 md:py-10 lg:py-20">
      <MaxWidthWrapper>
        {/* Desktop */}
        <div className="">
          {/* Video Section */}
          <ScrollMotionEffect effect="zoom-in" duration="1000">
            <div className="">
              <div className="flex flex-col items-center justify-center p-8 text-white md:p-12 lg:p-16">
                <h4 className="my-4 text-center text-5xl font-bold">
                  Why You Choose DXG
                </h4>
                <p className="max-w-4xl text-center text-lg font-semibold text-white opacity-70">
                  At the core of our ethos, we believe that the essence of our
                  work transcends the boundaries of what we do and how we do it.
                  Its about who we do it with, for, and why we do it.
                </p>
              </div>
            </div>
          </ScrollMotionEffect>

          {/* Card */}

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            <div className=" ">
              <ScrollMotionEffect effect="fade-up" duration="2000">
                {" "}
                <div className="flex flex-col items-center justify-center rounded-sm bg-[#141414] p-4 text-white md:p-8 lg:p-9">
                  <Image
                    src="/landing-pages/consultation-schedule/stress-free-planning-icon.png"
                    alt=""
                    width={60}
                    height={60}
                  ></Image>
                  <h4 className=" my-3 text-xl font-medium md:text-2xl">
                    Stress-free planning
                  </h4>
                  <p className="text-center text-base opacity-75">
                    At the core of our ethos, we believe that the essence of our
                    work transcends the boundaries of what we do and how we do
                    it. Its about who we do it with, for, and why we do it.{" "}
                  </p>
                </div>
              </ScrollMotionEffect>
            </div>
            <div className="mt-0 lg:mt-14">
              <ScrollMotionEffect effect="fade-up" duration="2000">
                <div className="flex flex-col items-center justify-center rounded-sm bg-[#141414] p-4 text-white md:p-8 lg:p-9">
                  <Image
                    src="/landing-pages/consultation-schedule/tailored-solutions-icon.png"
                    alt=""
                    width={60}
                    height={60}
                  ></Image>
                  <h4 className=" my-3 text-xl font-medium md:text-2xl">
                    Tailored solutions
                  </h4>
                  <p className="text-center text-base opacity-75">
                    At the core of our ethos, we believe that the essence of our
                    work transcends the boundaries of what we do and how we do
                    it. Its about who we do it with, for, and why we do it.{" "}
                  </p>
                </div>
              </ScrollMotionEffect>
            </div>
            <div className=" ">
              <ScrollMotionEffect effect="fade-up" duration="2000">
                {" "}
                <div className="flex flex-col items-center justify-center rounded-sm bg-[#141414] p-4 text-white md:p-8 lg:p-9">
                  <Image
                    src="/landing-pages/consultation-schedule/experienced-team-icon.png"
                    alt=""
                    width={60}
                    height={60}
                  ></Image>
                  <h4 className=" my-3 text-xl font-medium md:text-2xl">
                    Experienced team
                  </h4>
                  <p className="text-center text-base opacity-75">
                    At the core of our ethos, we believe that the essence of our
                    work transcends the boundaries of what we do and how we do
                    it. Its about who we do it with, for, and why we do it.{" "}
                  </p>
                </div>
              </ScrollMotionEffect>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default WhyYouChooseDXG;
