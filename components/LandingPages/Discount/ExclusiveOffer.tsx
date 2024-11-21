import React from 'react';
import ExclusiveOfferSlider from './ExclusiveOfferSlider';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';

const Home: React.FC = () => {
  return (
    <div
      className='w-full  bg-black bg-cover bg-center py-3 md:py-10 lg:py-20'
      style={{
        backgroundImage: `url('/landing-pages/discount/exclusive-offer-bg.png')`,
      }}
    >
      <MaxWidthWrapper className='lg:!pe-0'>
        <div className='mb-10 max-w-3xl'>
          <p className='text-base uppercase text-white'>exclusive</p>
          <h2 className='mb-6 mt-2 text-5xl font-semibold  text-white'>
            Limited <br /> Time Special Offer
          </h2>
        </div>
        <div>
          {/* Slider Content */}
          <ExclusiveOfferSlider />
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Home;
