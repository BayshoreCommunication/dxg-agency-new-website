"use client";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles

import "swiper/css";
import "swiper/css/navigation";

import "@/style/custom.css";

// import Link from 'next/link';
import { Icons } from "../Icons";
// import { Button } from '../ui/button';

// data array obejct type
interface Data {
  title: string;
  description: string;
  image: string;
  icon: string;
  href: string;
}

// slider props type
interface SliderProps {
  data: Data[];
}

export default function OverviewSlider({ data }: SliderProps) {
  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay, Navigation]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="h-[500px]"
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
      >
        {data.map((item, index) => {
          return (
            <SwiperSlide
              key={index}
              className="bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url('${item.image}')` }}
            >
              <div
                className={`group flex h-full flex-col  items-center justify-center  bg-sky-700 bg-opacity-50`}
              >
                <div className="relative text-white">
                  {item.icon === "man" && <Icons.man className="h-20 w-20" />}
                  {item.icon === "media" && (
                    <Icons.media className="h-20 w-20" />
                  )}
                  {item.icon === "monitor" && (
                    <Icons.monitor className="h-20 w-20" />
                  )}
                </div>
                <div className="px-5 py-5 text-center">
                  <h2 className="py-2 text-2xl font-bold uppercase text-white text-center">
                    {item.title}
                  </h2>
                  <p className="text-base text-white">{item.description}</p>

                  {/* <div className='mt-6 h-20'>
                    <Button
                      className=' rounded-full bg-white text-sky-400  hover:bg-white '
                      asChild
                    >
                      <Link href={item.href}>Read More</Link>
                    </Button>
                  </div> */}
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="swiper-button-next">
        <Icons.rightArrow className=" text-white" />
      </div>
      <div className="swiper-button-prev">
        <Icons.leftArrow className=" text-white" />
      </div>
    </div>
  );
}
