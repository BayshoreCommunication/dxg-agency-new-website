import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";
import ServiceTabSection from "./ServiceTabSection";
import ScrollMotionEffect from "../Shared/motion/ScrollMotionEffect";
import Image from "next/image";

const WorkProcess = () => {
  return (
    <div className="bg-[#111617] py-8 md:py-10 lg:py-20">
      <MaxWidthWrapper>
        <div className="grid grid-cols-1 gap-6 lg:gap-10 md:grid-cols-2">
          <div>
            <ScrollMotionEffect effect="fade-right" duration="2000">
              <h2 className="mb-4 mt-2 text-3xl uppercase text-white md:mb-6 md:text-4xl lg:text-6xl">
                THERE IS A METHOD TO THE MADNESS.
              </h2>
              <p className="text-base text-white opacity-70 md:text-xl">
                Finding success is not an accident. It takes a well thought out
                collaborative plan that when executed properly leads to
                achieving the results that everyone not only hoped for but
                planned and prepared for. DXG methodology to keeping happy
                customer lies in The Successful Process Methodology.
              </p>
            </ScrollMotionEffect>
          </div>
          <div className="flex flex-col gap-10">
            <ScrollMotionEffect effect="fade-left" duration="1000">
              {/* tabs */}
              {/* <ServiceTabSection />
               */}
              <div>
                <Image
                  src="/landing-pages/client-success-story/successful-process-main.png"
                  alt="Event Platforms"
                  width={1920} // adjust as needed
                  height={1080} // adjust as needed
                  className="w-full h-auto max-w-2xl "
                />
              </div>
            </ScrollMotionEffect>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default WorkProcess;
