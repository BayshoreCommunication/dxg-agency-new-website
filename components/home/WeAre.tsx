import React from 'react';
import Image from 'next/image';
import MaxWidthWrapper from '../MaxWidthWrapper';
import { H1, Paragraph, Title } from '../Typography';
import { MotionP } from '../Motion';
import { textContainer } from '@/lib/motion';
import { HeadShot } from '../Headshot';
import { BottomToTop } from '../Animation';
import { Button } from '../ui/button';
import Link from 'next/link';
const infos = {
  title: 'Who We Are',
  description: [
    `Digital Xperience Group Agency (DXG), a pioneering division of WLJ Consulting, is a premier partner in transforming events into unforgettable experiences. Our roots are firmly planted in the event hospitality industry, where we pride ourselves on elevating the production quality and experience of in-person, virtual, and hybrid events.`,

    `Our diverse team of audiovisual technical producers, directors, project managers, engineers, technicians, and creatives brings a collective wealth of experience to your event. We've orchestrated the marvel of audiovisuals for many notable events, pushing the boundaries of what's possible in event production.
`,
  ],
  image: '/ace-jhonson.png',
};

const dotArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function WeAre() {
  return (
    <div className='bg-black'>
      <MaxWidthWrapper>
        <div className='flex flex-col items-center justify-center md:flex-row-reverse'>
          <HeadShot path={infos.image} />
          <div className='flex-1'>
            <Title text={infos.title} />
            {infos.description.map((text, index) => (
              <Paragraph key={index} text={text} />
            ))}
            <BottomToTop>
              <Button
                asChild
                variant={'outline'}
                className='capsule-hover capsule-button rounded-full border-brand bg-transparent px-7 text-brand hover:bg-brand hover:text-white'
              >
                <Link href='/who-we-are'>Read More</Link>
              </Button>
            </BottomToTop>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
