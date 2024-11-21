import { ReactElement } from 'react';
import MaxWidthWrapper from '../MaxWidthWrapper';
import { HeaderTextStyle } from '../TextStyle';
import { Button } from '../ui/button';
import { MotionDiv } from '../Motion';
import { fadeIn, staggerContainer } from '@/lib/motion';
import Link from 'next/link';
type HeaderTextProps = {
  preText?: string;
  coloredText: string;
  postText?: string;
  variant?: 'section' | 'caps';
  texAlign?: 'text-center' | 'text-right' | 'text-left';
};
interface BreadCrumbProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  titleProps: HeaderTextProps;
  buttonTitle: string;
  description?: string;
  customDescription?: ReactElement;
  bgImage: string; // Add this line
}
export const BreadCrumbWithoutButton: React.FC<BreadCrumbProps> = ({
  buttonTitle,
  description,
  titleProps,
  customDescription,
  bgImage, // Add this line
  ...rest
}) => {
  return (
    <div
      style={{ backgroundImage: `url(${bgImage})` }} // Add this line
      className='relative min-h-[300px]  bg-cover bg-no-repeat'
      {...rest}
    >
      <div className=' bg-differentBackground'>
        <MaxWidthWrapper>
          <div className=''>
            <MotionDiv
              variants={staggerContainer(0.2, 0.1)}
              initial='hidden'
              whileInView='show'
              viewport={{ once: false, amount: 0.25 }}
              className='flex min-h-[300px] items-center justify-center'
            >
              <MotionDiv
                variants={fadeIn('right', 'tween', 0.2, 1)}
                className=''
              >
                <HeaderTextStyle {...titleProps} />
                {/* <Button
                asChild
                variant='dashed'
                className='mt-5 rounded-full px-10 py-3 capitalize md:px-14 lg:px-24'
              >
                <Link href='/contact-us'>{buttonTitle}</Link>
              </Button> */}
              </MotionDiv>

              {/* <MotionDiv
              variants={fadeIn('left', 'tween', 0.2, 1)}
              className='mt-6 lg:col-span-5 lg:mt-0 xl:col-span-6'
            >
              {description && (
                <p className='text-justify text-base font-medium leading-[27px] tracking-[0.18px] text-white'>
                  {description}
                </p>
              )}
              {customDescription && customDescription}
            </MotionDiv> */}
            </MotionDiv>
          </div>
        </MaxWidthWrapper>
      </div>
    </div>
  );
};
