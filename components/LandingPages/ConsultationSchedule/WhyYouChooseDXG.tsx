'use client';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import React, { useState } from 'react';
import { FaArrowRightLong, FaPlay } from 'react-icons/fa6';
import Image from 'next/image';
import { FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import ScrollMotionEffect from '../Shared/motion/ScrollMotionEffect';

const WhyYouChooseDXG = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
    }
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div
      className='w-full bg-cover bg-center py-8 md:py-10 lg:py-20'
      style={{
        backgroundImage: `url('/landing-pages/consultation-schedule/why-choose-dxg-bg.jpg')`,
      }}
    >
      <MaxWidthWrapper>
        {/* Mobile */}
        <div className='flex flex-col gap-4 lg:hidden'>
          {/* Video Section */}
          <div
            className='mx-auto w-full  bg-cover bg-center'
            style={{
              backgroundImage: `url('/landing-pages/consultation-schedule/dxg-poster-bg.png')`,
            }}
          >
            <div className='flex flex-col items-center justify-center p-8 text-white md:p-12 lg:p-16'>
              <p className='font-semibold uppercase text-white opacity-60'>
                Special Show
              </p>
              <h4 className='my-4 text-center text-4xl font-bold md:text-5xl'>
                Why You <br /> Choose DXG
              </h4>
              <p className='text-center text-base font-semibold text-white opacity-70 md:text-lg'>
                At the core of our ethos, we believe that the essence of our
                work transcends the boundaries of what we do and how we do it.
                Its about who we do it with, for, and why we do it.
              </p>

              {/* Play Button with Pulse Animation */}
              <div className='mb-5 mt-5 cursor-pointer' onClick={toggleModal}>
                <div className='relative flex h-24 w-24 items-center justify-center'>
                  {/* Outer Pulsing Circle */}
                  <div className='absolute inset-0 h-full w-full animate-pulse rounded-full bg-white/40 p-5 '></div>

                  {/* Inner Button */}
                  <div className='flex items-center justify-center rounded-full bg-white/40 p-5'>
                    <FaPlay className='text-3xl text-white' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Card */}
          <div className='flex  flex-col items-center justify-center rounded-sm bg-[#141414] p-4 text-white md:p-8 lg:p-9'>
            <Image
              src='/landing-pages/consultation-schedule/stress-free-planning-icon.png'
              alt=''
              width={60}
              height={60}
            ></Image>
            <h4 className=' my-3 text-xl font-medium md:text-2xl'>
              Stress-free planning
            </h4>
            <p className='text-center text-base opacity-75'>
              At the core of our ethos, we believe that the essence of our work
              transcends the boundaries of what we do and how we do it. Its
              about who we do it with, for, and why we do it.{' '}
            </p>
          </div>
          <div className='flex  flex-col items-center justify-center rounded-sm bg-[#141414] p-4 text-white md:p-8 lg:p-9'>
            <Image
              src='/landing-pages/consultation-schedule/tailored-solutions-icon.png'
              alt=''
              width={60}
              height={60}
            ></Image>
            <h4 className=' my-3 text-xl font-medium md:text-2xl'>
              Tailored solutions
            </h4>
            <p className='text-center text-base opacity-75'>
              At the core of our ethos, we believe that the essence of our work
              transcends the boundaries of what we do and how we do it. Its
              about who we do it with, for, and why we do it.{' '}
            </p>
          </div>
          <div className='flex flex-col  '>
            <div className=' flex  flex-col items-center justify-center rounded-sm bg-[#141414] p-4 text-white md:p-8 lg:p-9'>
              <Image
                src='/landing-pages/consultation-schedule/experienced-team-icon.png'
                alt=''
                width={60}
                height={60}
              ></Image>
              <h4 className=' my-3 text-xl font-medium md:text-2xl'>
                Experienced team
              </h4>
              <p className='text-center text-base opacity-75'>
                At the core of our ethos, we believe that the essence of our
                work transcends the boundaries of what we do and how we do it.
                Its about who we do it with, for, and why we do it.{' '}
              </p>
            </div>
            <Link
              href='#'
              className=' mt-4 flex  items-center justify-center gap-1 bg-[#F57141] p-3 text-white'
            >
              <FaArrowRightLong size={24} />
              <p>Join the Gig</p>
            </Link>
          </div>
        </div>

        {/* Desktop */}
        <div className='relative hidden lg:block'>
          {/* Video Section */}
          <ScrollMotionEffect effect='zoom-in' duration='1000'>
            <div
              className='mx-auto w-full bg-cover bg-center lg:w-[55%] 2xl:w-[60%]'
              style={{
                backgroundImage: `url('/landing-pages/consultation-schedule/dxg-poster-bg.png')`,
              }}
            >
              <div className='flex flex-col items-center justify-center p-8 text-white md:p-12 lg:p-16'>
                <p className='font-semibold uppercase text-white opacity-60'>
                  Special Show
                </p>
                <h4 className='my-4 text-center text-5xl font-bold'>
                  Why You <br /> Choose DXG
                </h4>
                <p className='max-w-lg text-center text-lg font-semibold text-white opacity-70'>
                  At the core of our ethos, we believe that the essence of our
                  work transcends the boundaries of what we do and how we do it.
                  Its about who we do it with, for, and why we do it.
                </p>

                {/* Play Button with Pulse Animation */}
                <div className='my-16 cursor-pointer' onClick={toggleModal}>
                  <div className='relative flex h-24 w-24 items-center justify-center'>
                    {/* Outer Pulsing Circle */}
                    <div className='absolute inset-0 h-full w-full animate-pulse rounded-full bg-white/40 p-5 '></div>

                    {/* Inner Button */}
                    <div className='flex items-center justify-center rounded-full bg-white/40 p-5'>
                      <FaPlay className='text-3xl text-white' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollMotionEffect>

          {/* Card */}

          <div className='absolute top-[20%] lg:-left-[8%] lg:w-[320px] xl:-left-[6%] xl:w-[350px] 2xl:left-0 2xl:w-[490px]'>
            <ScrollMotionEffect effect='fade-right' duration='2000'>
              {' '}
              <div className='flex flex-col items-center justify-center rounded-sm bg-[#141414] p-4 text-white md:p-8 lg:p-9'>
                <Image
                  src='/landing-pages/consultation-schedule/stress-free-planning-icon.png'
                  alt=''
                  width={60}
                  height={60}
                ></Image>
                <h4 className=' my-3 text-xl font-medium md:text-2xl'>
                  Stress-free planning
                </h4>
                <p className='text-center text-base opacity-75'>
                  At the core of our ethos, we believe that the essence of our
                  work transcends the boundaries of what we do and how we do it.
                  Its about who we do it with, for, and why we do it.{' '}
                </p>
              </div>
            </ScrollMotionEffect>
          </div>
          <div className='absolute top-[10%]  lg:-right-[8%] lg:w-[320px]  xl:-right-[6%] xl:w-[350px] 2xl:right-0 2xl:w-[490px]'>
            <ScrollMotionEffect effect='fade-left' duration='2000'>
              <div className='flex flex-col items-center justify-center rounded-sm bg-[#141414] p-4 text-white md:p-8 lg:p-9'>
                <Image
                  src='/landing-pages/consultation-schedule/tailored-solutions-icon.png'
                  alt=''
                  width={60}
                  height={60}
                ></Image>
                <h4 className=' my-3 text-xl font-medium md:text-2xl'>
                  Tailored solutions
                </h4>
                <p className='text-center text-base opacity-75'>
                  At the core of our ethos, we believe that the essence of our
                  work transcends the boundaries of what we do and how we do it.
                  Its about who we do it with, for, and why we do it.{' '}
                </p>
              </div>
            </ScrollMotionEffect>
          </div>
          <ScrollMotionEffect effect='fade-up' duration='2000'>
            {' '}
            <div className='relative flex items-start justify-center gap-4 md:gap-16 lg:bottom-14  xl:bottom-16 2xl:gap-6'>
              <div className=' flex flex-col items-center justify-center rounded-sm bg-[#141414] p-4 text-white md:p-8 lg:w-[320px] lg:p-9 xl:w-[350px] 2xl:w-[490px]'>
                <Image
                  src='/landing-pages/consultation-schedule/experienced-team-icon.png'
                  alt=''
                  width={60}
                  height={60}
                ></Image>
                <h4 className=' my-3 text-xl font-medium md:text-2xl'>
                  Experienced team
                </h4>
                <p className='text-center text-base opacity-75'>
                  At the core of our ethos, we believe that the essence of our
                  work transcends the boundaries of what we do and how we do it.
                  Its about who we do it with, for, and why we do it.{' '}
                </p>
              </div>
              <Link
                href='#'
                className=' mt-10 flex flex-col gap-2 bg-[#F57141] p-6 text-white'
              >
                <FaArrowRightLong size={24} />
                <p>Join the Gig</p>
              </Link>
            </div>
          </ScrollMotionEffect>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div
            className='fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black bg-opacity-50'
            onClick={handleBackdropClick}
            aria-hidden='true'
          >
            <div className='relative w-full max-w-3xl p-4'>
              <ScrollMotionEffect effect='fade-up' duration='2000'>
                <div className='relative rounded-lg bg-slate-900'>
                  <div className='flex items-center justify-between border-gray-800 p-4 md:p-5'>
                    <button
                      onClick={toggleModal}
                      type='button'
                      className='ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900'
                    >
                      <FaTimes className='h-4 w-4' />
                    </button>
                  </div>
                  <div className='!mt-0 space-y-4 p-4 !pt-0 md:p-6'>
                    <div className='overflow-hidden rounded-xl'>
                      {' '}
                      <div className='h-[180px] w-full md:h-[250px] lg:h-[400px]'>
                        <iframe
                          width='100%'
                          height='100%'
                          src='https://www.youtube.com/embed/qQxkulWxZ3c?si=MYJ8NHuoswTw_BJ_' // Replace with your video URL
                          title='Video player'
                          frameBorder='0'
                          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                          allowFullScreen
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollMotionEffect>
            </div>
          </div>
        )}
      </MaxWidthWrapper>
    </div>
  );
};

export default WhyYouChooseDXG;
