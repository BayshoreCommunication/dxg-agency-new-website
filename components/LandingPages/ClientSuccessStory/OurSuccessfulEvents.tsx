import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
// import Link from 'next/link';
import React from "react";
// import { IoArrowForward } from 'react-icons/io5';
import OurSuccessfulEventsSlider from "./OurSuccessfulEventsSlider";

const OurSuccessfulEvents = () => {
  return (
    <div className="bg-black py-3 md:py-10 lg:py-20">
      <MaxWidthWrapper>
        <div>
          <div className="mb-10 max-w-3xl">
            <p className="text-base text-white ">DXG 2024</p>
            <h2 className="mb-6 mt-2 text-5xl font-semibold  text-white">
              Our Successful Events.
            </h2>
            <p className="text-base text-white opacity-70 md:text-xl">
              Our planning process is thorough and collaborative, involving
              state-of-the-art technology and innovative solutions to meet and
              exceed your expectations. With us, you are not just hosting an
              event but crafting an experience.
            </p>
          </div>
          <div className="relative">
            <div className=" absolute -top-[40%] right-0 hidden lg:block">
              <Image
                src="/landing-pages/client-success-story/successful-events-bg.png"
                alt="successful-event"
                width={700}
                height={200}
              ></Image>
            </div>
            {/* Slider Content */}
            <OurSuccessfulEventsSlider />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default OurSuccessfulEvents;
