'use client';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import '@/style/custom.css';
import Image from 'next/image';
import { Icons } from './Icons';

import { TESTIMONIAL_DATA } from '@/config/data';
import { useState } from 'react';
export default function TestimonialSlider() {
  const [bgImage, setBgImage] = useState(`/testimonial/client-2.png`);

  const totalSlides = TESTIMONIAL_DATA.length;

  const updateBgImage = (index: number) => {
    if (index === totalSlides - 1) {
      setBgImage(`/testimonial/client-1.png`);
    } else {
      setBgImage(`/testimonial/client-${index + 2}.png`);
    }
  };

  return (
    <div className='relative mt-28 '>
      <div className='relative mb-0 md:mb-14'>
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          className='mx-auto  md:max-w-xl lg:flex lg:max-w-3xl'
          onSlideChange={(swiper) => {
            updateBgImage(swiper.activeIndex);
          }}
        >
          {TESTIMONIAL_DATA.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className='flex flex-col items-center justify-center md:flex-row'>
                  <div className=' w-60 md:flex-[1.5] lg:flex-1'>
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={292}
                      height={357}
                      className=' object-cover'
                    />
                  </div>
                  <div className='mb-20 mt-10 flex flex-[2] flex-col pl-2 pr-2 md:mb-0 md:mt-0 md:flex-[2] md:pl-6 lg:flex-[2] lg:pl-10'>
                    <Icons.quote className='mb-4 fill-current text-brand' />
                    <p className='text-white'>
                      I am a person who is positive about every aspect of life.
                      There are many things I like to do, to see, and to
                      experience. I like to read, I like to write; I like to
                      think, I like to dream; I like to talk, I like to listen.
                    </p>
                    <h1 className='my-1 text-2xl font-semibold text-white'>
                      {item.name}
                    </h1>
                    <h2 className='font-bold text-brand'>{item.title}</h2>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div className='swiper-button-next '>
          <Icons.rightArrow className='text-2xl text-white' />
        </div>
        <div className='swiper-button-prev '>
          <Icons.leftArrow className='text-white' />
        </div>
      </div>
      <div className='h-66  absolute top-[-20%] w-56 md:top-[-30%] lg:left-[0%] lg:top-[-30%] xl:left-[5%] '>
        <div className='relative'>
          <Image
            src={bgImage}
            alt='testimonial'
            width={292}
            height={357}
            className='object-cover'
          />
          <div className='absolute inset-0 flex items-center justify-center bg-black opacity-60'></div>
        </div>
      </div>
    </div>
  );

  // return (
  //   <div className='relative mt-20'>
  //     <div className='relative mb-20'>
  //       <Swiper
  //         modules={[Navigation]}
  //         navigation={{
  //           nextEl: '.swiper-button-next',
  //           prevEl: '.swiper-button-prev',
  //         }}
  //         className='mx-auto md:max-w-md lg:flex lg:max-w-3xl'
  //         onSlideChange={(swiper) => {
  //           updateBgImage(swiper.activeIndex);
  //         }}
  //       >
  //         {TESTIMONIAL_DATA.map((item, index) => {
  //           return (
  //             <SwiperSlide key={index}>
  //               <div className='flex flex-col items-center justify-center md:flex-row'>
  //                 <div className='relative h-[400px] w-[600px] flex-1'>
  //                   <div className='absolute right-[0%] top-[30%] z-50 w-[200px]'>
  //                     <Image
  //                       src={item.image}
  //                       alt={item.name}
  //                       width={292}
  //                       height={357}
  //                       className='object-cover'
  //                     />
  //                   </div>
  //                   <div className='absolute top-[0%] w-[200px] lg:left-[0%]'>
  //                     <div className='relative'>
  //                       <Image
  //                         src={bgImage}
  //                         alt='testimonial'
  //                         width={292}
  //                         height={357}
  //                         className='object-cover'
  //                       />
  //                       <div className='absolute inset-0 flex items-center justify-center bg-black opacity-60'></div>
  //                     </div>
  //                   </div>
  //                 </div>
  //                 <div className='mb-20 flex flex-[1.5] flex-col pl-2 pr-2 md:mb-0 md:pl-6 lg:pl-10'>
  //                   <Icons.quote className='mb-4 text-brand' />
  //                   <p className='text-white'>
  //                     I am a person who is positive about every aspect of life.
  //                     There are many things I like to do, to see, and to
  //                     experience. I like to read, I like to write; I like to
  //                     think, I like to dream; I like to talk, I like to listen.
  //                   </p>
  //                   <h1 className='my-1 text-2xl font-semibold text-white'>
  //                     {item.name}
  //                   </h1>
  //                   <h2 className='font-bold text-brand'>{item.title}</h2>
  //                 </div>
  //               </div>
  //             </SwiperSlide>
  //           );
  //         })}
  //       </Swiper>

  //       <div className='swiper-button-next '>
  //         <Icons.rightArrow className='text-white' />
  //       </div>
  //       <div className='swiper-button-prev '>
  //         <Icons.leftArrow className='text-white' />
  //       </div>
  //     </div>
  //   </div>
  // );
}
