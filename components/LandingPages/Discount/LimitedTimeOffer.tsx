import React from 'react';
import OfferCountdown from './OfferCountdown';
import ScrollMotionEffect from '../Shared/motion/ScrollMotionEffect';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';

const LimitedTimeOffer = () => {
  return (
    <div className=' bg-[#111617] py-8 md:py-10 lg:py-20'>
      <MaxWidthWrapper>
        <div>
          <div className=' mb-8 flex flex-col items-center justify-center gap-2'>
            <ScrollMotionEffect effect='fade-right' duration='1000'>
              <h2 className='text-2xl text-white md:text-5xl'>
                This Offer <span className='text-[#F93B3B]'>Ends</span> Soon!
              </h2>
            </ScrollMotionEffect>
            <ScrollMotionEffect effect='fade-right' duration='2000'>
              <p className='text-center text-base text-white opacity-70 md:text-xl'>
                Take advantage of exclusive savings before time runs out!
              </p>
            </ScrollMotionEffect>
          </div>
          <ScrollMotionEffect effect='fade-up' duration='2000'>
            <OfferCountdown />
          </ScrollMotionEffect>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default LimitedTimeOffer;
