import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { MotionDiv, MotionH1, MotionP } from '@/components/Motion';
import { Button } from '@/components/ui/button';
import { SPECIAL_OFFER } from '@/config/data';
import Image from 'next/image';
import { fadeIn, staggerContainer } from '@/lib/motion';
export const CreateAService = () => {
  return (
    <div className='mb-4 bg-black'>
      <MaxWidthWrapper>
        <div className=''>
          <hr className='mb-4 h-2 border-gray-500' />
          <MotionDiv
            variants={staggerContainer(0.2, 0.1)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.25 }}
          >
            {SPECIAL_OFFER.map((item, index) => {
              return (
                <div
                  key={item.id}
                  className='flex flex-col-reverse gap-5 text-white md:flex-row'
                >
                  <div className='w-full md:w-7/12'>
                    <MotionH1
                      variants={fadeIn('right', 'tween', 0.2, 1)}
                      className='mb-2 text-3xl font-bold'
                    >
                      {item.title}
                    </MotionH1>
                    <MotionP
                      variants={fadeIn('right', 'tween', 0.2, 1)}
                      className='text-justify'
                    >
                      {item.description}
                    </MotionP>
                    <div className='mt-5 flex gap-4'>
                      {item.tag.map((tagItem, index) => {
                        return (
                          <MotionDiv
                            variants={fadeIn('up', 'tween', index * 0.1, 1)}
                            key={index}
                          >
                            <Button
                              key={index}
                              variant={'outline'}
                              className='m-0 rounded-full bg-transparent'
                            >
                              {tagItem}
                            </Button>
                          </MotionDiv>
                        );
                      })}
                    </div>
                  </div>
                  <MotionDiv
                    variants={fadeIn('left', 'tween', 0.2, 1)}
                    className='relative h-[360px] w-full md:w-5/12'
                  >
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
                  </MotionDiv>
                </div>
              );
            })}
          </MotionDiv>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
