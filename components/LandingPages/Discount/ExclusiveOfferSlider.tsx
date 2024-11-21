'use client';
import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Image from 'next/image';
import ScrollMotionEffect from '../Shared/motion/ScrollMotionEffect';
import { GoArrowDown, GoArrowUp } from 'react-icons/go';
import { ImPower } from 'react-icons/im';
import { motion } from 'framer-motion';

const exclusiveEventData = [
  {
    month: 'January',
    date: 'January, 5',
    title: 'Closeplay: Music of the Spheres - World Tour',
    img: '/landing-pages/discount/exclusive-event-1.jpg',
    img2: '/landing-pages/discount/event-full-1.png',
  },
  {
    month: 'February',
    date: 'February, 15',
    title: 'Closeplay: Music of the Spheres - World Tour',
    img: '/landing-pages/discount/exclusive-event-2.jpg',
    img2: '/landing-pages/discount/event-full-2.png',
  },
  {
    month: 'March',
    date: 'March, 5',
    title: 'Closeplay: Music of the Spheres - World Tour',
    img: '/landing-pages/discount/exclusive-event-1.jpg',
    img2: '/landing-pages/discount/event-full-1.png',
  },
  {
    month: 'April',
    date: 'April, 10',
    title: 'Closeplay: Music of the Spheres - World Tour',
    img: '/landing-pages/discount/exclusive-event-2.jpg',
    img2: '/landing-pages/discount/event-full-2.png',
  },
  {
    month: 'May',
    date: 'May, 9',
    title: 'Closeplay: Music of the Spheres - World Tour',
    img: '/landing-pages/discount/exclusive-event-1.jpg',
    img2: '/landing-pages/discount/event-full-1.png',
  },
  {
    month: 'June',
    date: 'June, 20',
    title: 'Closeplay: Music of the Spheres - World Tour',
    img: '/landing-pages/discount/exclusive-event-2.jpg',
    img2: '/landing-pages/discount/event-full-2.png',
  },
  {
    month: 'July',
    date: 'July, 15',
    title: 'Closeplay: Music of the Spheres - World Tour',
    img: '/landing-pages/discount/exclusive-event-1.jpg',
    img2: '/landing-pages/discount/event-full-1.png',
  },
  {
    month: 'August',
    date: 'August, 10',
    title: 'Closeplay: Music of the Spheres - World Tour',
    img: '/landing-pages/discount/exclusive-event-2.jpg',
    img2: '/landing-pages/discount/event-full-2.png',
  },
  {
    month: 'September',
    date: 'September, 25',
    title: 'Closeplay: Music of the Spheres - World Tour',
    img: '/landing-pages/discount/exclusive-event-1.jpg',
    img2: '/landing-pages/discount/event-full-1.png',
  },
  {
    month: 'October',
    date: 'October, 30',
    title: 'Closeplay: Music of the Spheres - World Tour',
    img: '/landing-pages/discount/exclusive-event-2.jpg',
    img2: '/landing-pages/discount/event-full-2.png',
  },
  {
    month: 'November',
    date: 'November, 5',
    title: 'Closeplay: Music of the Spheres - World Tour',
    img: '/landing-pages/discount/exclusive-event-1.jpg',
    img2: '/landing-pages/discount/event-full-1.png',
  },
  {
    month: 'December',
    date: 'December, 15',
    title: 'Closeplay: Music of the Spheres - World Tour',
    img: '/landing-pages/discount/exclusive-event-2.jpg',
    img2: '/landing-pages/discount/event-full-1.png',
  },
];

const ExclusiveOfferSlider: React.FC = () => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const data = [1, 2, 3, 4];

  const [startIdx, setStartIdx] = useState(0);

  const handleScrollUp = () => {
    setStartIdx((prevIdx) =>
      prevIdx > 0 ? prevIdx - 1 : exclusiveEventData.length - 1
    );
  };

  const handleScrollDown = () => {
    setStartIdx((prevIdx) =>
      prevIdx < exclusiveEventData.length - 1 ? prevIdx + 1 : 0
    );
  };

  return (
    <div className=''>
      <div className=' flex flex-col items-center gap-6 lg:flex-row lg:gap-20'>
        <div className='w-full lg:w-[35%]'>
          {/* Up Btn */}
          <div className='mb-5 w-full text-end'>
            <button
              onClick={handleScrollUp}
              className='ms-auto cursor-pointer  p-2 text-white duration-300 hover:bg-[#2DC6F5] hover:text-black'
            >
              <GoArrowUp className='text-2xl' />
            </button>
          </div>

          {/*Slide content */}
          <div className='relative h-[300px]'>
            <motion.ul
              className='space-y-2'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {exclusiveEventData
                .slice(startIdx, startIdx + 5)
                .map((el, index) => {
                  const isCenter = index === 2;
                  return (
                    <motion.li
                      key={el.month}
                      className={`rounded-md p-4 text-center text-xl ${
                        isCenter
                          ? 'bg-white/10 px-2 py-3 text-2xl font-semibold text-white'
                          : 'text-gray-600'
                      }`}
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -10, opacity: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      {el.month}
                    </motion.li>
                  );
                })}
            </motion.ul>
          </div>
          {/* Down Btn */}
          <div className='mt-5 w-full text-end'>
            <button
              onClick={handleScrollDown}
              className=' cursor-pointer p-2 text-white duration-300 hover:bg-[#2DC6F5] hover:text-black'
            >
              <GoArrowDown className='text-2xl' />
            </button>
          </div>
        </div>

        <motion.div className='grid w-full grid-cols-1  lg:w-[60%] '>
          {exclusiveEventData
            .filter((el, i) => i === startIdx)
            .map((item, index) => (
              <motion.div
                key={startIdx}
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -100, opacity: 0 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
              >
                <div className='group duration-300'>
                  <div className='relative'>
                    {/* Mobile */}
                    <motion.div>
                      <Image
                        src={item.img}
                        alt={item.title}
                        width={700}
                        height={500}
                        className='block w-full lg:hidden'
                      />
                    </motion.div>

                    {/* Desktop */}
                    <motion.div>
                      <Image
                        src={item.img2}
                        alt={item.title}
                        width={700}
                        height={500}
                        className='hidden w-full lg:block'
                      />
                    </motion.div>

                    <div className='absolute bottom-0 w-full p-5 lg:p-10'>
                      <p className='mb-1 uppercase text-white opacity-80'>
                        {item.date}
                      </p>
                      <h4 className='text-xl font-semibold text-white'>
                        {item.title}
                      </h4>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </div>
  );
};

export default ExclusiveOfferSlider;
