import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import React from 'react';
import ServiceTabSection from './ServiceTabSection';
import ScrollMotionEffect from '../Shared/motion/ScrollMotionEffect';

const WorkProcess = () => {
  return (
    <div className='bg-[#111617] py-8 md:py-10 lg:py-20'>
      <MaxWidthWrapper>
        <div className='grid grid-cols-1 gap-12 md:grid-cols-2'>
          <div>
            <ScrollMotionEffect effect='fade-right' duration='2000'>
              <p className='text-base text-[#2DC6F5] md:text-xl'>
                Who We Support - 3 P’s of Partnership
              </p>

              <h2 className='mb-4 mt-2 text-3xl uppercase text-white md:mb-6 md:text-4xl lg:text-6xl'>
                How DXG <br /> resolved them.
              </h2>
              <p className='text-base text-white opacity-70 md:text-xl'>
                Our planning process is thorough and collaborative, involving
                state-of-the-art technology and innovative solutions to meet and
                exceed your expectations. With us, you’re not just hosting an
                event but crafting an experience.
              </p>
            </ScrollMotionEffect>
          </div>
          <div className='flex flex-col gap-10'>
            <ScrollMotionEffect effect='fade-left' duration='1000'>
              {' '}
              <ServiceTabSection />
            </ScrollMotionEffect>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default WorkProcess;
