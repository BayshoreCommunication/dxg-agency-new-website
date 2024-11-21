'use client';

import { staggerContainer } from '@/lib/motion';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { MotionDiv } from '@/components/Motion';
import { Paragraph, Title } from '@/components/Typography';
import ContactSection from './ContactSection';
import ScrollMotionEffect from './motion/ScrollMotionEffect';

const infos = {
  title: 'Get In Touch',
  description:
    "Our planning process is thorough and collaborative, involving state-of-the-art technology and innovative solutions to meet and exceed your expectations. With us, you're not just hosting an event but crafting an experience.?",
};

const delay = 0.5;
const iconVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

export default function GetInTouch() {
  return (
    <div className='md:mb10 mb-6 bg-black lg:mb-20'>
      <MaxWidthWrapper>
        <MotionDiv
          variants={staggerContainer(0.2, 0.1)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: false, amount: 0.25 }}
        >
          <div className='flex flex-col  items-center py-10'>
            <Title text={infos.title} />
            <Paragraph
              className='text-center md:max-w-4xl'
              key={0}
              text={infos.description}
            />
          </div>
          {/* GetInTouch */}
          <ScrollMotionEffect effect='fade-up' duration='2000'>
            <div>
              <ContactSection />
            </div>
          </ScrollMotionEffect>
        </MotionDiv>
      </MaxWidthWrapper>
    </div>
  );
}
