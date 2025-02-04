"use client";

// import SupportCard from '../Cards/SupportCard';
import MaxWidthWrapper from "../MaxWidthWrapper";
import { Paragraph, Title } from "../Typography";
// import { Button } from '../ui/button';
// import Link from 'next/link';
// import { BottomToTop } from '../Animation';
import { exploreWorlds } from "@/config/data";
// import SupportCardTwo from '../Cards/SupportCardTwo';
import { useState } from "react";
import { MotionDiv } from "../Motion";
import { staggerContainer } from "@/lib/motion";
import ExploreCard from "../Cards/ExploreCard";
import SupportCardMobile from "../Cards/SupportCardMobile";
const infos = {
  title: "Who We Support - 3 P’s of Partnership",
  description: `Our core teams have an average of 15+ years of experience with backgrounds in live events, virtual and hybrid corporate events, broadcast, and entertainment & performances. With this experience, we are a sought-after resource and view ourselves as the missing piece to your puzzle. At DXG Agency, we support`,
};

export default function WeSupport() {
  const [active, setActive] = useState(0);
  return (
    <div className="mb-10 mt-4 bg-black md:h-[820px] xl:h-[876px] ">
      <MaxWidthWrapper>
        <div className="flex flex-col  items-end py-5 md:py-10 ">
          <div className=" md:max-w-3xl">
            <Title text={infos.title} />
            <Paragraph text={infos.description} className="text-left" />
          </div>

          {/* <BottomToTop>
            <Button
              asChild
              variant={'outline'}
              className='rounded-full border-brand bg-transparent px-7 text-brand hover:bg-brand hover:text-white capsule-hover capsule-button'
            >
              <h1>Read More</h1>
            </Button>
          </BottomToTop> */}
        </div>
        <div className="md:hidden">
          <div className="skew-y-6">
            {exploreWorlds.map((world, index) => (
              <SupportCardMobile
                key={world.id}
                {...world}
                index={index}
                active={active}
                handleCardHover={setActive}
              />
            ))}
          </div>
        </div>
        <div
          className={` mx-auto hidden min-h-[500px] w-full skew-y-6 flex-col md:flex `}
        >
          <MotionDiv
            variants={staggerContainer(0.2, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className=" flex   flex-col gap-6 lg:flex-row md:pb-28"
          >
            {exploreWorlds.map((world, index) => (
              <ExploreCard
                key={world.id}
                {...world}
                index={index}
                active={active}
                handleCardHover={setActive}
              />
            ))}
          </MotionDiv>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
