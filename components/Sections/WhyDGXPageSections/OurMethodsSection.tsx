import MotionEffect from "@/components/Animation/MotionEffect";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { MethodCard } from "@/components/MethodCard";
import { MotionDiv } from "@/components/Motion";
import { OurMethods } from "@/config/data";
import { fadeIn, staggerContainer } from "@/lib/motion";

export const OurMethodsSection = () => {
  return (
    <div className="bg-black py-10 ">
      {/* <MaxWidthWrapper> */}
      <div className="max-w-[1400px] px-8 m-auto">
        <MotionDiv
          // variants={staggerContainer(0.2, 0.1)}
          // initial='hidden'
          // whileInView='show'
          // viewport={{ once: false, amount: 0.25 }}
          className="grid grid-cols-1 justify-items-center gap-2  md:grid-cols-4 md:gap-8"
        >
          {OurMethods.map((item, index) => {
            return (
              <MotionEffect
                effect="fade-up"
                duration={1000}
                // variants={fadeIn('up', 'tween', index * 0.1, 0.5)}
                key={index}
              >
                <div className="w-full">
                  <MethodCard key={index} {...item} />;
                </div>
              </MotionEffect>
            );
          })}
        </MotionDiv>
      </div>
      {/* </MaxWidthWrapper> */}
    </div>
  );
};
