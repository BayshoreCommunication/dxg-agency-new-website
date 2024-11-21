import { MotionDiv } from '../Motion';
import { textVariant2 } from '@/lib/motion';
interface MotionDivProps {
  children: React.ReactNode;
}
export const BottomToTop = ({ children }: MotionDivProps) => {
  return (
    <MotionDiv variants={textVariant2} initial='hidden' whileInView='show'>
      {children}
    </MotionDiv>
  );
};
