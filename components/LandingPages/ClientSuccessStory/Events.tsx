import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import React from "react";
import {
  // IoArrowBack,
  // IoArrowForwardOutline,
  IoLogoInstagram,
} from "react-icons/io5";
import { FaDribbble } from "react-icons/fa6";
import { FaBehance } from "react-icons/fa6";
import Link from "next/link";
import HomeSilderSection from "./HomeSilderSection";
import ScrollMotionEffect from "../Shared/motion/ScrollMotionEffect";

const Events = () => {
  return (
    <div className="bg-[#111617] pt-8 md:pt-10 lg:pt-20">
      <MaxWidthWrapper>
        {/*================ Mobile ========*/}
        <div className="block lg:hidden">
          {/* Single Card */}

          <div
            className="w-full  bg-cover bg-center"
            style={{
              backgroundImage: `url('/landing-pages/client-success-story/event-bg.png')`,
            }}
          >
            <div className="p-4">
              <HomeSilderSection />
            </div>
          </div>
        </div>

        {/*================ Desktop ========*/}
        <div className="hidden lg:block">
          <div className="flex items-stretch">
            {/* Single Card */}
            <div className="relative w-full  overflow-hidden">
              <Image
                src="/landing-pages/client-success-story/event-bg.png"
                alt=""
                width={1920}
                height={600}
                className="w-full "
              ></Image>
              {/* Right-to-Left Overlay */}
              <div className="absolute inset-0 z-10 bg-gradient-to-l from-black/90 via-black/10 to-transparent"></div>

              {/* Social Media */}

              {/* <div className="absolute bottom-0 ">
                <ScrollMotionEffect effect="fade-right" duration="2000">
                  {" "}
                  <div className=" flex w-full items-end gap-3 p-10">
                    <div className=" flex flex-col gap-2">
                      <Link
                        href="#"
                        className="bg-transparent p-4 duration-300 hover:bg-gray-300 hover:bg-opacity-40"
                      >
                        <IoLogoInstagram className="  text-2xl text-white duration-300 " />
                      </Link>
                      <Link
                        href="#"
                        className="bg-transparent p-4 duration-300 hover:bg-gray-300 hover:bg-opacity-40"
                      >
                        {" "}
                        <FaDribbble className="  text-2xl text-white duration-300 " />
                      </Link>
                      <Link
                        href=""
                        className=" bg-gray-300 bg-opacity-40 p-4 duration-300"
                      >
                        {" "}
                        <FaBehance className="  text-2xl text-white " />
                      </Link>
                    </div>
                    <div className="text-white ">
                      <h4 className="mb-1 text-2xl">Hublot</h4>
                      <p>New Product Launch</p>
                    </div>
                  </div>
                </ScrollMotionEffect>
              </div> */}

              <div className="absolute right-5 xl:right-20 top-1/2 z-20  lg:max-w-[590px]  xl:max-w-2xl -translate-y-1/2 transform">
                <ScrollMotionEffect effect="fade-left" duration="2000">
                  {" "}
                  <HomeSilderSection />
                </ScrollMotionEffect>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Events;
