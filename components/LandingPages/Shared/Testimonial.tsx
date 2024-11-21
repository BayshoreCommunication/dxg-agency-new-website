import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import TestimonialSliderTwo from '@/components/TestimonialSliderTwo';
import { Paragraph, Title } from '@/components/Typography';
import React from 'react';

const infos = {
  title: 'Client Testimonials',
  description:
    'Dive into the transformative experiences of our satisfied clients! Their words paint a vivid picture of the high-quality work we deliver and our dedication to propelling you towards your goals.',
};

function Testimonial() {
  return (
    <div className='bg-differentBackground'>
      <MaxWidthWrapper>
        <div className='flex flex-col items-center justify-center'>
          <div className='my-10 min-h-[250px] max-w-3xl text-center md:min-h-[120px]'>
            <Title className='text-center' text={infos.title} />
            <Paragraph key={0} text={infos.description} />
          </div>

          <div className='relative w-full '>
            {/* <TestimonialSlider /> */}
            <TestimonialSliderTwo />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

export default Testimonial;
