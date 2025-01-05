"use client";
// import { useState } from 'react';
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "@/style/custom.css";

import { BlogData } from "@/config/data";
import { BlogCard } from "../BlogCard";

export default function OurBlogSlider() {
  return (
    <div className="relative">
      <Swiper
        slidesPerView={1.2}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        {BlogData.map((item, index) => {
          const slideStyles = {
            marginLeft: "auto",
            marginRight: "auto",
            width: "80%",
            paddingBottom: "1rem",
          };

          return (
            <SwiperSlide key={index} style={slideStyles}>
              <BlogCard key={index} data={item} />
            </SwiperSlide>
          );
        })}
        <div className="swiper-pagination mb-4 mt-4"></div>
      </Swiper>
    </div>
  );
}
