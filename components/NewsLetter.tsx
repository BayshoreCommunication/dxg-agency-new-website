'use client';

import React, { useRef } from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import ScrollMotionEffect from './LandingPages/Shared/motion/ScrollMotionEffect';
export default function NewsLetter() {
  const ref = useRef<HTMLFormElement>(null);
  return (
    <MaxWidthWrapper>
      <div className='overflow-hidden py-16'>
        <ScrollMotionEffect effect='fade-up' duration='2000'>
          <div
            className='grid grid-cols-1 items-center justify-center rounded-3xl bg-sky-500 px-5 py-8 md:grid-cols-5 md:px-10'
            // style={{ padding: '1.5rem' }}
          >
            <div className='col-span-3'>
              <h2 className='text-center text-2xl font-semibold capitalize text-white md:text-left md:text-3xl'>
                Keep up with industry news and best practices
              </h2>
              <h2 className='line my-1 text-center text-xl capitalize text-white md:text-left md:text-2xl'>
                Subscribe To Our NewsLetter
              </h2>
              <p className='text-center text-sm text-white md:text-left md:text-base'>
                By subscribing to our newsletter, you&apos;re not just signing
                up for updates — you&apos;re joining a community dedicated to
                continuous learning and growth. Each edition is carefully
                curated to bring you the most relevant and impactful
                information, helping you make well-informed decisions and stay
                at the forefront of best practices in the event industry.
              </p>
            </div>
            <div className='col-span-2 mt-5 md:ml-2 md:mt-0'>
              <form
                ref={ref}
                action={async (FormData) => {
                  ref.current?.reset();
                }}
              >
                <Input className='mb-4' placeholder='Name' />
                <Input className='mb-4' placeholder='Email' />
                <Button className='subscribe-hover w-full  text-white'>
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </ScrollMotionEffect>
      </div>
    </MaxWidthWrapper>
  );
}
