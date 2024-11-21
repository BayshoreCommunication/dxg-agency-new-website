import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { MotionDiv, MotionP } from '@/components/Motion';
import { fadeIn, staggerContainer } from '@/lib/motion';
import Image, { StaticImageData } from 'next/image';

interface SectionInformationWithImageProps
  extends React.HtmlHTMLAttributes<HTMLDivElement> {
  sectionTitle: string;
  sectionDescription: string[];
  sectionImage: StaticImageData;
  sectionImageOverlay: string;
  imagePosition?: 'left' | 'right';
}
export const SectionInformationWithImage: React.FC<
  SectionInformationWithImageProps
> = ({
  sectionTitle,
  sectionDescription,
  sectionImage,
  sectionImageOverlay,
  imagePosition = 'right',
  ...rest
}) => {
  return (
    <div className='bg-black' {...rest}>
      <MaxWidthWrapper>
        <div className=' py-9 lg:py-16'>
          <MotionDiv
            variants={staggerContainer(0.2, 0.1)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.25 }}
            className=' items-center lg:grid lg:grid-cols-12 lg:gap-8 xl:gap-14 '
          >
            <MotionDiv
              variants={fadeIn('right', 'tween', 0.2, 1)}
              className={`${
                imagePosition === 'left' && 'order-last'
              } lg:col-span-5 `}
            >
              <h2 className='mb-3 text-3xl font-semibold capitalize leading-tight text-brand'>
                {sectionTitle}
              </h2>
              {sectionDescription?.map((section, index) => {
                return (
                  <MotionP
                    variants={fadeIn('up', 'spring', index * 0.5, 1)}
                    key={index}
                    className='mb-3 text-justify text-base font-medium leading-[27px] tracking-[0.18px] text-white'
                  >
                    {section}
                  </MotionP>
                );
              })}
            </MotionDiv>

            <MotionDiv
              variants={fadeIn('up', 'tween', 0.2, 1)}
              className='mt-6 lg:col-span-7 lg:mt-0 '
            >
              <Image
                src={sectionImage}
                alt={sectionTitle}
                quality={100}
                style={{ width: '100%' }}
                className='w-full rounded'
              />
            </MotionDiv>
          </MotionDiv>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
