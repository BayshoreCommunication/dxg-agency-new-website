import React from 'react';
import { cn } from '@/lib/utils';
import { MotionP, MotionH2 } from '../Motion';
import { fadeIn, textVariant2 } from '@/lib/motion';
interface TypographyProps {
  text: string;
  className?: string;
}

const Typography: React.FC<TypographyProps> = ({ text, className }) => {
  return <span className={className}>{text}</span>;
};

export const H1: React.FC<TypographyProps> = ({ text, className }) => {
  const firstWord = text.split(' ')[0];
  return (
    <h1
      className={cn('mb-6 text-4xl font-bold leading-10 text-white', className)}
    >
      <Typography
        text={firstWord}
        className='border-b border-b-brand text-brand'
      />{' '}
      {text
        .split(' ')
        .filter((_, index) => index !== 0)
        .join(' ')}
    </h1>
  );
};

export const H2: React.FC<TypographyProps> = ({ text }) => {
  return (
    <h2 className='text-3xl font-semibold leading-10 text-brand'>{text}</h2>
  );
};

export const H3: React.FC<TypographyProps> = ({ text }) => {
  return (
    <h3 className='text-2xl font-semibold leading-10 text-brand'>{text}</h3>
  );
};

export const H4: React.FC<TypographyProps> = ({ text, className }) => {
  return (
    <h4
      className={cn('text-xl font-semibold leading-10 text-brand', className)}
    >
      {text}
    </h4>
  );
};

export const H5: React.FC<TypographyProps> = ({ text }) => {
  return (
    <h5 className='text-lg font-semibold leading-10 text-brand'>{text}</h5>
  );
};

export const H6: React.FC<TypographyProps> = ({ text }) => {
  return (
    <h6 className='text-base font-semibold leading-10 text-brand'>{text}</h6>
  );
};

export const P: React.FC<TypographyProps> = ({ text, className }) => {
  return (
    <p
      className={cn(
        'mb-3  text-base font-medium leading-[27px] tracking-[0.18px] text-white',
        className
      )}
    >
      {text}
    </p>
  );
};

export const Title = ({ text, className }: TypographyProps) => (
  <MotionH2
    variants={textVariant2}
    initial='hidden'
    whileInView='show'
    viewport={{ once: false, amount: 0.25 }}
    className={cn('mb-6 text-4xl font-bold leading-10 text-white', className)}
  >
    <Typography
      text={text.split(' ')[0]}
      className='border-b border-b-brand text-brand'
    />{' '}
    {text
      .split(' ')
      .filter((_, index) => index !== 0)
      .join(' ')}
  </MotionH2>
);

export const Paragraph = ({ text, className }: TypographyProps) => (
  <MotionP
    variants={fadeIn('right', 'spring', 0.5, 0.75)}
    initial='hidden'
    whileInView='show'
    viewport={{ once: false, amount: 0.25 }}
    className={cn(
      'mb-3 text-base font-medium leading-[27px] tracking-[0.18px] text-white',
      className
    )}
  >
    {text}
  </MotionP>
);
