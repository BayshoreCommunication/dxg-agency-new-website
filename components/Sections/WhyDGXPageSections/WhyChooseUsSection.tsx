import { MotionDiv, MotionH1, MotionH2, MotionP } from "@/components/Motion";
import meeting from "@/public/why-dxg/service.png";
import presentation from "@/public/why-dxg/process.png";
import experience from "@/public/why-dxg/experience.png";

import Image from "next/image";
import { fadeIn, slideIn, staggerContainer, zoomIn } from "@/lib/motion";
import NumberAnimation from "@/components/NumberAnimation";

export const WhyChooseUsSection = () => {
  return (
    <div className="bg-black py-10 ">
      {/* <MaxWidthWrapper> */}
      <MotionDiv
        variants={staggerContainer(0.2, 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="container m-auto px-2.5 md:px-28"
      >
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Images */}
          <div className="flex w-full items-end gap-4">
            <MotionDiv variants={zoomIn(0.2, 0.5)} className="relative w-1/2">
              <Image
                src={presentation}
                width={316}
                height={432}
                alt="Presentation"
                className="rounded-3xl"
              />
            </MotionDiv>
            <div className="relative flex w-1/2 flex-col gap-4">
              <MotionDiv
                variants={fadeIn("down", "tween", 0.2, 1)}
                className="absolute right-4 top-[-16px] flex h-16 w-12 flex-col items-center justify-center bg-brand md:right-10 md:top-[-24px] md:h-14 md:w-12"
              >
                <h2 className="md:text-md text-center font-bold leading-none text-white">
                  20+
                </h2>

                <h2 className="md:text-md text-center font-light leading-none text-white">
                  Years
                </h2>
              </MotionDiv>
              <MotionDiv variants={zoomIn(0.3, 0.5)}>
                <Image
                  src={meeting}
                  width={315}
                  height={182}
                  alt="Meeting"
                  className="rounded-3xl"
                />
              </MotionDiv>
              <MotionDiv variants={zoomIn(0.4, 0.5)}>
                <Image
                  src={experience}
                  width={315}
                  height={182}
                  alt="Experience"
                  className="rounded-3xl"
                />
              </MotionDiv>
            </div>
          </div>
          {/* Texts */}
          <div className="w-full">
            <MotionP
              variants={fadeIn("up", "tween", 0.2, 0.5)}
              className="text-brand"
            >
              Why Choose Us
            </MotionP>
            <MotionH2
              variants={fadeIn("up", "tween", 0.3, 0.5)}
              className="text-2xl font-bold text-white"
            >
              Take Your Business to the Next Level
            </MotionH2>
            <MotionP
              variants={fadeIn("up", "tween", 0.4, 0.5)}
              className="text-white"
            >
              <span className="mt-4 flex w-full gap-4">
                We ensure an unparalleled fusion of experience, innovation, and
                dedication. With core teams boasting an average of 20+ years in
                live events, virtual and hybrid corporate events, broadcast, and
                entertainment, DXG brings a depth of knowledge that is
                unmatched. We aren&apos;t just event specialists; we consider
                ourselves the missing piece to your event puzzle. DXG excels in
                Production Management, Audiovisual Technology, Event Platform
                Services, Event Experience Design, Graphics & Animation, and
                Video Production & Photography. DXG&apos;s expertise lies not
                only in the technical aspects but also in crafting immersive
                experiences that resonate with your audience, ensuring your
                event leaves a lasting impression.
              </span>
            </MotionP>
            <div className="mt-4 flex w-full gap-4">
              <MotionDiv
                variants={fadeIn("up", "tween", 0.4, 1)}
                className="flex h-[120px] w-1/3 flex-col items-center justify-center rounded-s-2xl border-b-2 border-l-2 border-t-2 border-brand bg-header"
              >
                <NumberAnimation
                  className="text-2xl md:text-3xl"
                  value={5000}
                  incrementPlus={100}
                  duration={100}
                />
                <p className="text-[10px] font-light text-white md:text-base">
                  Project Complete
                </p>
              </MotionDiv>
              <MotionDiv
                variants={fadeIn("up", "tween", 0.5, 1)}
                className="flex h-[120px] w-1/3 flex-col items-center justify-center border-b-2 border-t-2 border-brand bg-header"
              >
                <NumberAnimation
                  className="text-2xl md:text-3xl"
                  value={500}
                  incrementPlus={10}
                  duration={100}
                />
                <p className="text-[10px] font-light text-white md:text-base">
                  Client Happy
                </p>
              </MotionDiv>
              <MotionDiv
                variants={fadeIn("up", "tween", 0.6, 1)}
                className="flex h-[120px] w-1/3 flex-col items-center justify-center rounded-e-2xl border-b-2 border-r-2 border-t-2 border-brand bg-header"
              >
                <NumberAnimation
                  className="text-2xl md:text-3xl"
                  value={5}
                  incrementPlus={1}
                  duration={500}
                />
                <p className="text-[10px] font-light text-white md:text-base">
                  Project Running
                </p>
              </MotionDiv>
            </div>
          </div>
        </div>
      </MotionDiv>
      {/* </MaxWidthWrapper> */}
    </div>
  );
};
