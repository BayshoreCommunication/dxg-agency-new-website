import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Icons } from '../Icons';
import { Button } from '../ui/button';
import OverviewSlider from './OverviewSlider';
import { P } from '../Typography';
import MaxWidthWrapper from '../MaxWidthWrapper';
import { MotionDiv } from '../Motion';
import { fadeIn, staggerContainer } from '@/lib/motion';
import ProposalForm from '../ProposalForm';

const data = [
  {
    title: 'Engage',
    description:
      ' Attendees look for interactive elements that make them feel involved and part of the event. This could be through Q&A, Polls, Hands-On Workshops or Icebreakers. The goal is to ensure attendees are not passive observers but active participants.',
    image: '/banner/dxg-agency-banner-engage.png',
    icon: 'man',
    href: '/triple-e-xperience',
  },
  {
    title: 'Exchange',
    description:
      'One of the primary reasons people attend events is to meet others in their industry with similar interests. Facilitating these connections through social events, networking sessions, and networking tools in an event app can significantly enhance the attendee experience.',
    image: '/banner/dxg-agency-banner-exchange.png',
    icon: 'media',
    href: '/triple-e-xperience',
  },
  {
    title: 'Enlight',
    description:
      'The content provided during the event should be valuable, relevant, and thought-provoking. Attendees want to learn new things, gain insights and have takeaways that they can apply in their personal or professional lives. The quality of speakers, the relevance of topics, and the content delivery all contribute to the perceived value of the event.',
    image: '/banner/dxg-agency-banner-enlight.png',
    icon: 'monitor',
    href: '/triple-e-xperience',
  },
];

export default function Overview() {
  return (
    <div>
      <div className='md:hidden'>
        <OverviewSlider data={data} />
      </div>
      <MaxWidthWrapper>
        <MotionDiv
          variants={staggerContainer(0.2, 0.1)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: false, amount: 0.25 }}
          className='hidden md:flex'
        >
          {data.map((item, index) => {
            return (
              <MotionDiv
                variants={fadeIn('right', 'tween', index * 0.2, 1)}
                key={index}
                className=' glowing-border  max-h-[600px] w-full bg-cover bg-center bg-no-repeat'
                style={{ backgroundImage: `url('${item.image}')` }}
              >
                <div
                  className={`group flex h-full flex-col items-center justify-start bg-black bg-opacity-50 py-12  hover:bg-sky-700 hover:bg-opacity-60`}
                >
                  <div className='relative mt-10 text-sky-500 group-hover:text-white'>
                    {item.icon === 'man' && <Icons.man className='h-20 w-20' />}
                    {item.icon === 'media' && (
                      <Icons.media className='h-20 w-20' />
                    )}
                    {item.icon === 'monitor' && (
                      <Icons.monitor className='h-20 w-20' />
                    )}
                  </div>
                  <div className='px-10 py-5 text-center'>
                    <h2 className='py-2 text-2xl font-bold uppercase text-white text-center'>
                      {item.title}
                    </h2>
                    <P className='text-white' text={item.description} />

                    <div className='mt-6 h-20'>
                      <Button
                        className='capsule-hover capsule-button hidden rounded-full bg-brand  px-5 py-2 font-semibold text-white hover:bg-white group-hover:inline-flex'
                        asChild
                      >
                        <Link href={item.href}>Read More</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </MotionDiv>
            );
          })}
        </MotionDiv>
      </MaxWidthWrapper>
    </div>
  );
}
