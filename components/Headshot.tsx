'use client';
import { fadeIn, zoomIn } from '@/lib/motion';
import Image from 'next/image';
import { MotionDiv } from './Motion';

interface HeadShotProps {
  path: string;
}
const dotArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
export const HeadShot = ({ path }: HeadShotProps) => (
  <MotionDiv className='relative my-10 min-h-[340px] w-full flex-1 md:min-h-[400px] lg:min-h-[500px] '>
    <div className='flex min-h-[280px] items-end justify-end  md:min-h-[340px] lg:min-h-[400px] '>
      <div className='flex max-w-[220px] flex-row flex-wrap justify-evenly gap-16'>
        {dotArray.map((dot, index) => (
          <div key={index} className='mt-2 h-6 w-6 rounded-full bg-dot'></div>
        ))}
      </div>
    </div>
    <MotionDiv
      // variants={zoomIn(0.4, 0.5)}
      variants={fadeIn('left', 'tween', 0.2, 0.75)}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.2 }}
      className='absolute left-[20%] top-0 -translate-x-1/4 -translate-y-1/2 transform md:left-[40%]'
    >
      <div className='md:hidden'>
        <Image src={path} alt='headshot' width={250} height={300} />
      </div>
      <div className='hidden md:block'>
        <Image src={path} alt='headshot' width={400} height={400} />
      </div>
    </MotionDiv>
  </MotionDiv>
);
