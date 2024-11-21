import { BlogCard } from '@/components/BlogCard';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { HeaderTextStyle } from '@/components/TextStyle';
import { BlogData } from '@/config/data';
import OurBlogSlider from '@/components/home/OurBlogSlider';
import { P, Paragraph, Title } from '@/components/Typography';
import { MotionDiv } from '@/components/Motion';
import { fadeIn, staggerContainer } from '@/lib/motion';

const infos = {
  title: 'Our Blog',
  description:
    'With the average experience of our team members being ten-plus years in the event space, DXG is a sought-after resource by event planners, event production companies, and event platforms.',
};

export const OurBlogSection = () => {
  return (
    <div className='bg-black '>
      <MotionDiv
        variants={staggerContainer(0.2, 0.1)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
      >
        <div className='flex items-center justify-center'>
          <div className=' max-w-3xl text-center md:mt-10'>
            <Title text={infos.title} />
            <Paragraph key={0} text={infos.description} />
          </div>
        </div>
        <div className='md:hidden'>
          <OurBlogSlider />
        </div>
        <div className='hidden md:flex'>
          <div className='container'>
            <div className='flex flex-col items-center justify-center'>
              <div className=''>
                <div className=' grid grid-cols-1 gap-4 md:grid-cols-3'>
                  {BlogData.map((item, index) => {
                    return (
                      <MotionDiv
                        variants={fadeIn('right', 'tween', index * 0.2, 0.75)}
                        key={index}
                      >
                        <BlogCard data={item} />
                      </MotionDiv>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </MotionDiv>
    </div>
  );
};
