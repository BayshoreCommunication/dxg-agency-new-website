"use client";
import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { IoArrowBack, IoArrowForwardOutline } from "react-icons/io5";

const HomeSilderSection: React.FC = () => {
  return (
    <div className="">
      <div className="">
        <div className="">
          <h2 className=" text-2xl uppercase text-white md:text-3xl lg:text-3xl 2xl:text-6xl hidden lg:block">
            It’s More Than An <br />
            <span className="text-[#2DC6F5] ">Event , It’s an</span> <br />
            Experience
          </h2>
          <h2 className=" text-2xl uppercase text-white md:text-3xl lg:text-4xl 2xl:text-6xl lg:hidden">
            It’s More Than An
            <span className="text-[#2DC6F5] pr-3">Event, It’s An</span>
            Experience
          </h2>
          <p className="mt-4 lg:mt-5 text-base lg:text-sm xl:text-base font-normal text-white opacity-70  ">
            {`At DXG, we combine the expertise and experience of our people
                  with innovative solutions that deliver more than just an event
                  but an experience. This combined formula allows your attendees
                  to engage with your content and their colleagues, leaving
                  lasting impressions. From clear audio to dynamic lighting and
                  captivating visuals, every detail is engineered to engage your
                  audience and elevate your message. Our team partners with you
                  from concept to execution to ensure your event isn't just seen
                  and heard but felt. When people remember how an event made
                  them feel, they return and tell others about their experience`}
          </p>
        </div>

        {/* <div className="mt-10 flex items-center gap-x-10">
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
        </div> */}
      </div>
    </div>
  );
};

export default HomeSilderSection;
