"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";

import Image from "next/image";
import { Icons } from "@/components/Icons";
import ScrollMotionEffect from "../Shared/motion/ScrollMotionEffect";

const WhyYouChooseDXG = () => {
  const WHY_DXG_DATA = [
    {
      title: "Our Process",
      description: `The process of choosing a partner to work with is challenging however clients recognize that we view them as more than just another customer. Our client management tools allows for transparency in task management.
`,
    },
    {
      title: "Our Services",
      description: `Our approach is service with a smile. We love what we do, the people who help us do it and the purpose of why we do it. We focus on making our clients raving fans of their investment in us.
`,
    },
    {
      title: "Our Mission",
      description: `Our missions is simple. To help your event be a success. With this we focus on your goals and manage them through "The Success Process" methodology.
`,
    },
    {
      title: "Our Experience",
      description: `Though established in 2018. Our core team has worked together since 2006. We have done thousands of live events and hundreds of digital events in our careers which is why the "pivot" or evolution as we like to say was not a challenge for us and helped our company grow during what for most was a challenging time.
`,
    },
  ];

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

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            <div className="h-full">
              <ScrollMotionEffect effect="fade-up" duration="2000">
                <div className="flex  flex-col items-center justify-center rounded-sm bg-[#141414] p-4 text-white md:p-4 lg:p-5 h-full h-auto lg:min-h-[350px] xl:min-h-[300px]">
                  <Icons.repeat className="h-12 w-12 text-brand" />
                  <h3 className="mt-2 text-xl font-bold uppercase">
                    Our <span className="outline-text text-brand">Process</span>
                  </h3>
                  <p className="mt-2 text-sm text-gray-300 text-center">
                    {WHY_DXG_DATA[0].description}
                  </p>
                </div>
              </ScrollMotionEffect>
            </div>

            <div className="h-full lg:mt-8">
              <ScrollMotionEffect effect="fade-up" duration="2000">
                <div className="flex  flex-col items-center justify-center rounded-sm bg-[#141414] p-4 text-white md:p-4 lg:p-5 h-full h-auto lg:min-h-[350px] xl:min-h-[300px]">
                  <Icons.happyFace className=" h-12 w-12 text-brand" />
                  <h3 className="mt-2 text-xl font-bold uppercase">
                    Our <span className="outline-text text-brand">Service</span>
                  </h3>
                  <p className="mt-2 text-sm text-gray-300 text-center">
                    {WHY_DXG_DATA[1].description}
                  </p>
                </div>
              </ScrollMotionEffect>
            </div>

            <div className="h-full lg:mt-8">
              <ScrollMotionEffect effect="fade-up" duration="2000">
                <div className="flex  flex-col items-center justify-center rounded-sm bg-[#141414] p-4 text-white md:p-4 lg:p-5 h-full h-auto lg:min-h-[350px] xl:min-h-[300px]">
                  <Image
                    src="/mission.png"
                    width={48}
                    height={48}
                    alt="mission"
                  />
                  <h3 className="mt-2 text-xl font-bold uppercase">
                    Our <span className="outline-text text-brand">Mission</span>
                  </h3>
                  <p className="mt-2 text-sm text-gray-300 text-center">
                    {WHY_DXG_DATA[2].description}
                  </p>
                </div>
              </ScrollMotionEffect>
            </div>

            <div className="h-full">
              <ScrollMotionEffect effect="fade-up" duration="2000">
                <div className="flex  flex-col items-center justify-center rounded-sm bg-[#141414] p-4 text-white md:p-4 lg:p-5 h-full h-auto lg:min-h-[350px] xl:min-h-[300px]">
                  <Image
                    src="/experience.png"
                    width={48}
                    height={48}
                    alt="experience"
                  />
                  <h3 className="mt-2 text-xl font-bold uppercase">
                    Our{" "}
                    <span className="outline-text text-brand">Experience</span>
                  </h3>
                  <p className="mt-2 text-sm text-gray-300 text-center">
                    {WHY_DXG_DATA[3].description}
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
