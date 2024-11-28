"use client";
import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { IoArrowBack, IoArrowForwardOutline } from "react-icons/io5";

const HomeSilderSection: React.FC = () => {
  // Refs for navigation buttons
  const prevButtonRef = useRef<HTMLButtonElement | null>(null);
  const nextButtonRef = useRef<HTMLButtonElement | null>(null);
  const swiperRef = useRef<any>(null);

  useEffect(() => {
    if (swiperRef.current) {
      // Attach the navigation buttons to Swiper when it’s initialized
      swiperRef.current.params.navigation.prevEl = prevButtonRef.current;
      swiperRef.current.params.navigation.nextEl = nextButtonRef.current;
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <div className="">
      <div className="">
        <Swiper
          cssMode={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="mySwiper"
        >
          {[1, 2, 3, 4, 5].map((el, index) => (
            <SwiperSlide key={index}>
              <div className="">
                <h2 className=" text-2xl uppercase text-white md:text-4xl lg:text-6xl">
                  OUR CLIENT <br />
                  <span className="text-[#2DC6F5]">BEAUTIFUL</span> <br />
                  EVENT
                </h2>
                <p className="mt-4 text-base font-normal text-white opacity-70 md:text-xl">
                  Our planning process is thorough and collaborative, involving
                  state-of-the-art technology and innovative solutions to meet
                  and exceed your expectations. With us, you are not just
                  hosting an event but crafting an experience.
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="mt-10 flex items-center gap-x-10">
          <button
            ref={prevButtonRef}
            className="cursor-pointer bg-[#2D2D2D] p-4 text-white duration-300 hover:bg-[#2DC6F5] hover:text-black"
          >
            <IoArrowBack className="text-2xl" />
          </button>
          <button
            ref={nextButtonRef}
            className="cursor-pointer bg-[#2D2D2D] p-4 text-white duration-300 hover:bg-[#2DC6F5] hover:text-black"
          >
            <IoArrowForwardOutline className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeSilderSection;
