'use client';
import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {
  IoArrowBack,
  IoArrowForward,
  IoArrowForwardOutline,
} from 'react-icons/io5';
import Image from 'next/image';
import Link from 'next/link';
import ScrollMotionEffect from '../Shared/motion/ScrollMotionEffect';

const successfulEventsData = [
  {
    img: '/landing-pages/client-success-story/successful-event-1.jpg',
    category: 'Music TREND',
    title: 'Innovative Solutions',
  },
  {
    img: '/landing-pages/client-success-story/successful-event-2.jpg',
    category: 'Music TREND',
    title: 'Expert Team',
  },
  {
    img: '/landing-pages/client-success-story/successful-event-3.jpg',
    category: 'Music TREND',
    title: 'Customer Satisfaction',
  },
  {
    img: '/landing-pages/client-success-story/successful-event-1.jpg',
    category: 'Music TREND',
    title: 'Innovative Solutions',
  },
  {
    img: '/landing-pages/client-success-story/successful-event-2.jpg',
    category: 'Music TREND',
    title: 'Expert Team',
  },
  {
    img: '/landing-pages/client-success-story/successful-event-3.jpg',
    category: 'Music TREND',
    title: 'Customer Satisfaction',
  },
];

const OurSuccessfulEventsSlider: React.FC = () => {
  return (
    <div className=''>
      <div className=''>
        <Swiper
          // slidesPerView={3}
          // spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[Pagination]}
          className='mySwiper'
        >
          <div className='relative z-10 grid grid-cols-1 gap-8 lg:grid-cols-3'>
            {successfulEventsData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className='group max-w-xl pb-10 duration-300 md:pb-20'>
                  <div>
                    {' '}
                    <ScrollMotionEffect effect='fade-up' duration='1000'>
                      <Image
                        src={item.img}
                        alt={item.title}
                        width={720}
                        height={400}
                        className='w-full'
                      ></Image>
                      <div className='flex items-center justify-between bg-white p-5'>
                        <div>
                          <p className='font-bold uppercase  opacity-70'>
                            {item.category}
                          </p>
                          <h4 className='text-xl font-semibold md:text-2xl'>
                            {item.title}
                          </h4>
                        </div>
                        <Link
                          href='#'
                          className='bg-[#C7C7C7] p-3 duration-300 group-hover:bg-[#1FB1E9] group-hover:text-white'
                        >
                          <IoArrowForward className='text-2xl' />
                        </Link>
                      </div>
                    </ScrollMotionEffect>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
        {/* Bottom Dot Pagination */}
      </div>
    </div>
  );
};

export default OurSuccessfulEventsSlider;
