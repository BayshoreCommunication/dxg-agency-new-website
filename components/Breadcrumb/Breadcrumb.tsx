import { fadeIn, staggerContainer } from '@/lib/motion';
import { ReactElement } from 'react';
import AppointmentBooking from '../AppointmentBooking';
import MaxWidthWrapper from '../MaxWidthWrapper';
import { MotionDiv } from '../Motion';
import { HeaderTextStyle } from '../TextStyle';

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
  isContactUs?: boolean;
}
export const BreadCrumb: React.FC<BreadCrumbProps> = ({
  buttonTitle,
  description,
  titleProps,
  isContactUs,
  customDescription,
  ...rest
}) => {
  return (
    <div
      className='min-h-[200px] bg-differentBackground  bg-[url("/breadcrumb-bg.png")] bg-cover bg-no-repeat md:min-h-[300px]'
      {...rest}
    >
      <MaxWidthWrapper>
        <div className='py-9 xl:py-28'>
          <MotionDiv
            variants={staggerContainer(0.2, 0.1)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.25 }}
            className='flex flex-col items-center justify-center md:flex-row md:justify-between'
          >
            <MotionDiv variants={fadeIn('up', 'tween', 0.2, 1)} className=''>
              <HeaderTextStyle {...titleProps} texAlign='text-center' />
              {isContactUs ? (
                <div className='mt-5 inline-flex h-10 items-center justify-center whitespace-nowrap rounded-full border-2 border-dashed border-brand px-10 py-3 text-xl font-medium capitalize text-brand md:px-14 lg:px-24'>
                  {buttonTitle}
                </div>
              ) : (
                <AppointmentBooking buttonTitle={buttonTitle} />
              )}
            </MotionDiv>

            <MotionDiv
              variants={fadeIn('up', 'tween', 0.2, 1)}
              className='mt-6 md:ml-10 md:mt-0 md:max-w-2xl'
            >
              {description && (
                <p
                  className='text-justify text-base font-medium leading-[27px] tracking-[0.18px] text-white'
                  style={{ textAlign: 'left' }}
                >
                  {description}
                </p>
              )}
              {customDescription && customDescription}
            </MotionDiv>
          </MotionDiv>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
