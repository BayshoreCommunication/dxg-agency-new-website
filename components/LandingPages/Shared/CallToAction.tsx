import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import ScrollMotionEffect from "./motion/ScrollMotionEffect";

const CallToAction = () => {
  return (
    <div
      className="w-full  bg-cover bg-center"
      style={{
        backgroundImage: `url('/landing-pages/my-event/cta-bg.jpg')`,
      }}
    >
      <MaxWidthWrapper>
        <div className="lg:py-18 flex flex-col items-center justify-center gap-6 py-10 md:py-14 lg:flex-row lg:justify-between">
          <div className="lg:w-[80%] ">
            <ScrollMotionEffect effect="fade-right" duration="2000">
              <h3 className="w-full text-center text-3xl font-bold uppercase text-white lg:text-start">
                Your Event. Our Expertise. Let’s Talk
              </h3>
            </ScrollMotionEffect>
          </div>

          <div className="flex w-full justify-center lg:w-[20%]">
            {" "}
            <div className=" shrink-0">
              <ScrollMotionEffect effect="fade-left" duration="2000">
                <Link
                  href="#"
                  className=" mx-auto shrink-0 rounded-lg bg-[#F5982D] px-8 py-3 text-lg font-bold text-white duration-300 hover:bg-[#2DC6F5]"
                >
                  Schedule My AV Assessment
                </Link>
              </ScrollMotionEffect>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default CallToAction;
