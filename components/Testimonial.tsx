import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import TestimonialSlider from "./TestimonialSlider";
import { Icons } from "./Icons";
import { Paragraph, Title } from "./Typography";
import TestimonialSliderTwo from "./TestimonialSliderTwo";
import HomeTestimonialSlider from "./HomeTestimonialSlider";

const infos = {
  title: "Client Testimonials",
  description:
    "Dive into the transformative experiences of our satisfied clients! Their words paint a vivid picture of the high-quality work we deliver and our dedication to propelling you towards your goals.",
};

function Testimonial() {
  return (
    <div className="bg-differentBackground">
      <MaxWidthWrapper>
        <div className="flex flex-col items-center justify-center">
          <div className="my-10 min-h-[250px] max-w-3xl text-center md:min-h-[120px]">
            <Title className="text-center" text={infos.title} />
            <Paragraph key={0} text={infos.description} />
          </div>

          <div className="relative w-full ">
            {/* <TestimonialSlider /> */}
            <HomeTestimonialSlider />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}

export default Testimonial;
