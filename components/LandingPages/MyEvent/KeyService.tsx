'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { SERVICE_DATA } from '@/config/data';
import { Icons } from '@/components/Icons';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

import { fadeIn, staggerContainer } from '@/lib/motion';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { MotionDiv } from '@/components/Motion';
import { Paragraph, Title } from '@/components/Typography';
import { BottomToTop } from '@/components/Animation';
import ScrollMotionEffect from '../Shared/motion/ScrollMotionEffect';

const infos = {
  title: 'Key Service',
  description:
    "Our planning process is thorough and collaborative, involving state-of-the-art technology and innovative solutions to meet and exceed your expectations. With us, you're not just hosting an event but crafting an experience.?",
};

const delay = 0.5;
const iconVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

const keyServiceData = [
  {
    img: '/landing-pages/my-event/corporate-events.jpg',
    title: 'Innovative Solutions',
    desc: `Our planning process is thorough and collaborative, involving state-of-the-art technology and innovative solutions to meet and exceed your expectations. With us, you're not just hosting an event but crafting an experience.`,
  },
  {
    img: '/landing-pages/my-event/personal-celebrations.jpg',
    title: 'Expert Team',
    desc: `Our planning process is thorough and collaborative, involving state-of-the-art technology and innovative solutions to meet and exceed your expectations. With us, you're not just hosting an event but crafting an experience.`,
  },
  {
    img: '/landing-pages/my-event/custom-event-solutions.jpg',
    title: 'Customer Satisfaction',
    desc: `Our planning process is thorough and collaborative, involving state-of-the-art technology and innovative solutions to meet and exceed your expectations. With us, you're not just hosting an event but crafting an experience.`,
  },
];
export default function KeyService() {
  // Set activeIndex to accept either a number or null
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className='md:mb10 mb-6 bg-black lg:mb-20'>
      <MaxWidthWrapper>
        <MotionDiv
          variants={staggerContainer(0.2, 0.1)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: false, amount: 0.25 }}
        >
          <div className='flex flex-col  items-center py-10'>
            <Title text={infos.title} />
            <Paragraph
              className='text-center md:max-w-4xl'
              key={0}
              text={infos.description}
            />
          </div>
          {/* Key Services Card */}
          <div className='grid grid-cols-1 gap-4 md:grid-cols-3'>
            {keyServiceData.map((item, index) => (
              <div
                key={index}
                className='group relative overflow-hidden duration-500'
                onMouseEnter={() => setActiveIndex(index)}
              >
                <ScrollMotionEffect effect='fade-up' duration='2000'>
                  {' '}
                  <div>
                    <div>
                      <Image
                        src={item.img}
                        alt={item.title}
                        width={540}
                        height={380}
                      />
                    </div>
                    <div
                      className={`absolute bottom-0 flex w-full items-center justify-center bg-black/70 p-6 text-white duration-300 ${
                        activeIndex === index
                          ? 'invisible opacity-0'
                          : 'visible opacity-100'
                      }`}
                    >
                      <div>
                        <h3 className='text-center text-xl font-semibold md:text-2xl'>
                          {item.title}
                        </h3>
                      </div>
                    </div>
                    <div
                      className={`absolute bottom-0 flex w-full items-center justify-center bg-black/70 p-6 text-white duration-500 ${
                        activeIndex === index
                          ? 'visible top-0 opacity-100'
                          : 'invisible top-full opacity-0'
                      }`}
                    >
                      <div>
                        <h3 className='text-center text-xl font-semibold md:text-2xl'>
                          {item.title}
                        </h3>
                        <p className='mt-4 text-center text-base opacity-70 2xl:text-xl'>
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </ScrollMotionEffect>
              </div>
            ))}
          </div>
        </MotionDiv>
      </MaxWidthWrapper>
    </div>
  );
}
