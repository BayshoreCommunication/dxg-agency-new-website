"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ServiceTabContent from "./ServiceTabContent";
// import ScrollMotionEffect from '../motion/ScrollMotionEffect';

const playfair = Playfair_Display({ subsets: ["latin"] });

const ServiceTabSection = () => {
  const [activeTab, setActiveTab] = useState("event-planning");

  const tabsItem = [
    {
      key: "event-planning",
      title: "Event Planning",
      image: "/landing-pages/client-success-story/successful-process.png",
    },
    {
      key: "event-production",
      title: "Event Production",
      image: "/landing-pages/client-success-story/successful-process.png",
    },
    {
      key: "event-platforms",
      title: "Event Platforms",
      image: "/landing-pages/client-success-story/successful-process.png",
    },
  ];

  return (
    <div className="">
      {/* <ScrollMotionEffect effect='fade-up' duration='2000'> */}
      <div className=" flex w-full border-b-4 border-white border-opacity-20 text-center text-base font-medium  text-white">
        {tabsItem.map((tab, index) => (
          <div key={tab?.key} className=" -mb-1 flex flex-wrap">
            <button
              className={`border-b-4 border-transparent p-4 text-lg   hover:border-white hover:text-white md:text-2xl ${
                activeTab === tab?.key
                  ? "border-white text-white"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab(tab?.key)}
            >
              {tab?.title}
            </button>
            {activeTab === tab?.key && (
              <motion.div
                // className='absolute bottom-0 left-0 right-0 h-[2px] bg-primary'
                layoutId="underline"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </div>
        ))}
      </div>
      {/* </ScrollMotionEffect> */}

      <motion.div
        key={activeTab}
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <ServiceTabContent activeTab={activeTab} data={tabsItem} />
      </motion.div>
    </div>
  );
};

export default ServiceTabSection;
