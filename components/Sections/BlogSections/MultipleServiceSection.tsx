import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { MotionDiv } from '@/components/Motion';
import { MULTIPLE_SERVICE } from '@/config/data';
import Image from 'next/image';
import { fadeIn, staggerContainer } from '@/lib/motion';
export const MultipleServiceSection = () => {
  return (
    <div className='bg-black pb-5 text-white'>
      <MaxWidthWrapper>
        <div className=''>
          <hr className='mb-4 h-2 border-gray-500' />
          <MotionDiv
            variants={staggerContainer(0.2, 0.1)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.25 }}
            className='grid grid-cols-1 gap-5 md:grid-cols-3'
          >
            {MULTIPLE_SERVICE.map((item, index) => {
              return (
                <MotionDiv
                  variants={fadeIn('up', 'tween', index * 0.2, 1)}
                  key={index}
                  className=''
                >
                  <div className='relative h-[300px] w-full'>
                    <Image
                      src={item.image}
                      alt='Meeting Blog'
                      //   width={200}
                      //   height={200}
                      fill
                      style={{
                        objectFit: 'fill',
                        width: '100%',
                      }}
                    />
                  </div>
                  <h4 className='mt-4 line-clamp-2 text-xl font-bold'>
                    {item.title}
                  </h4>
                  <p className='text-light my-4 line-clamp-6 text-justify'>
                    {item.description}
                  </p>
                </MotionDiv>
              );
            })}
          </MotionDiv>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
