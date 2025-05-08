import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import TestimonialSliderTwo from "@/components/TestimonialSliderTwo";
import { Paragraph, Title } from "@/components/Typography";
import React from "react";
import HomeLogoLoop from "./HomeLogoLoop";

const infos = {
  title: "Our Clients ",
  description: `The organizations below trusted DXG's expertise, precise execution, and proactive collaboration to elevate their event experience.`,
};

function Testimonial() {
  return (
    <div className="bg-differentBackground py-8 lg:py-14">
      <MaxWidthWrapper>
        <div className="flex flex-col items-center justify-center">
          <div className=" max-w-3xl text-center ">
            <Title className="text-center" text={infos.title} />
            <Paragraph key={0} text={infos.description} />
          </div>

          <div className="relative w-full ">
            {/* <TestimonialSlider /> */}
            {/* <TestimonialSliderTwo /> */}
            <HomeLogoLoop />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

export default Testimonial;
