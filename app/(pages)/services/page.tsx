import { BreadCrumb } from '@/components/Breadcrumb';
import React from 'react';
import Testimonial from '@/components/Testimonial';
import NewsLetter from '@/components/NewsLetter';
import { SERVICES_PAGE_DATA } from '@/config/data';
import { ServiceCard } from '@/components/ServiceCard';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { MotionDiv } from '@/components/Motion';
import { staggerContainer, zoomIn } from '@/lib/motion';
import Link from 'next/link'; // Make sure to import Link from Next.js
import MotionEffect from '@/components/Animation/MotionEffect';

export default function Services() {
  return (
    <div className='bg-black'>
      <BreadCrumb
        buttonTitle='Book an appointment'
        description={`Whether you need us to produce, project manage, or be a complete turnkey partner, DXG Agency has the resources and experience to deliver several solutions that fit your needs.`}
        titleProps={{
          coloredText: 'Our',
          postText: 'Services',
          variant: 'caps',
          texAlign: 'text-left',
        }}
      />
      <MaxWidthWrapper>
        <div className='py-9 lg:py-16'>
          <MotionDiv
            variants={staggerContainer(0.2, 0.1)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.25 }}
            className='grid grid-cols-12 gap-5'
          >
            {SERVICES_PAGE_DATA.map((service) => {
              return (
                <div
                  // variants={zoomIn(service.id * 0.2, 0.5)}
                  key={service.id}
                  className='col-span-12 md:col-span-6 lg:col-span-4'
                >
                  <MotionEffect effect='fade-up' duration={1000}>
                    <Link href={service.url}>
                      {/* Add this line */}
                      <ServiceCard
                        cardImage={service.image}
                        captionPosition={service.captionPosition}
                        cardTitle={service.caption}
                      />
                    </Link>
                  </MotionEffect>
                </div>
              );
            })}
          </MotionDiv>
        </div>
      </MaxWidthWrapper>
      <Testimonial />
      <div className='bg-black'>
        <NewsLetter />
      </div>
    </div>
  );
}
