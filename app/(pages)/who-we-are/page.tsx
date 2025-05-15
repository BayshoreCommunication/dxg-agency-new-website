import { BreadCrumb } from "@/components/Breadcrumb";
import React from "react";
import Testimonial from "@/components/LandingPages/Shared/Testimonial";
import NewsLetter from "@/components/NewsLetter";
import Image from "next/image";
import WhoWeAreBanner from "@/public/who-we-are/who-we-are-banner.jpg";
import WhoWeAreBannerInfo from "@/public/who-we-are/who-we-are-info.png";
import { MotionDiv, MotionP } from "@/components/Motion";
import { fadeIn, staggerContainer, zoomIn } from "@/lib/motion";

export default function WhoWeAre() {
  return (
    <div className="bg-black">
      <BreadCrumb
        buttonTitle="Book an appointment"
        description="Digital Xperience Group Agency (DXG), a pioneering division of WLJ Consulting, is a premier partner in transforming events into unforgettable experiences. Our roots are firmly planted in the event hospitality industry, where we pride ourselves on elevating the production quality and experience of in-person, virtual, and hybrid events."
        titleProps={{
          coloredText: "WHO",
          postText: "WE ARE",
          variant: "caps",
          texAlign: "text-left",
        }}
      />

      <div className="">
        {/* Zoom-in effect on the large image */}
        <MotionDiv
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.3 }}
        >
          <Image
            quality={100}
            src={WhoWeAreBanner}
            alt="Who We Are - DXG"
            className="w-full"
          />
        </MotionDiv>
      </div>

      <div className="container px-8  m-auto py-9 lg:py-16">
        <MotionDiv
          variants={staggerContainer(0.2, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="grid grid-cols-12 items-center gap-2 lg:gap-12 xl:gap-16"
        >
          <div className=" col-span-12  lg:col-span-7">
            <MotionP
              variants={fadeIn("up", "spring", 0.2, 1)}
              className="mb-4 text-justify text-base font-normal leading-[30px] tracking-[0.18px] text-white lg:mb-10"
            >
              {` Our diverse team of audiovisual technical producers, directors,
              project managers, engineers, technicians, and creatives brings a
              collective wealth of experience to your event. We've orchestrated
              the marvel of audiovisuals for many notable events, pushing the
              boundaries of what's possible in event production.`}
            </MotionP>
            <MotionP
              variants={fadeIn("up", "spring", 0.3, 1)}
              className="font-font-normal mb-4 text-justify  text-base leading-[30px] tracking-[0.18px] text-white lg:mb-10"
            >
              At DXG, our approach is to intimately understand your event&apos;s
              objectives and forge a connection between your content and your
              audience. Whether through immersive experiences, captivating
              visuals, or interactive elements, we ensure that every aspect of
              your event resonates with attendees.
            </MotionP>
            <MotionP
              variants={fadeIn("up", "spring", 0.4, 1)}
              className=" lg:mb-10font-font-normal mb-4 text-justify text-base leading-[30px] tracking-[0.18px] text-white"
            >
              We stay at the forefront of technology, harnessing innovative
              solutions to enhance engagement and streamline production. Our
              outcome-focused strategy is designed to deliver measurable
              results, turning your vision into a dynamic reality that leaves a
              lasting impression.
            </MotionP>
          </div>
          <MotionDiv
            variants={zoomIn(0.5, 1)}
            className=" col-span-12 lg:col-span-5"
          >
            <Image
              src={WhoWeAreBannerInfo}
              alt="Who We are Information"
              className="w-full"
            />
          </MotionDiv>
        </MotionDiv>
      </div>

      <div className="bg-black overflow-hidden">
        <Testimonial />
      </div>
      <div className="bg-black">
        <NewsLetter />
      </div>
    </div>
  );
}
