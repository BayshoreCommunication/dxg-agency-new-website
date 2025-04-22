"use client";
import React, { useState } from "react";
import Image from "next/image";

import { fadeIn, staggerContainer } from "@/lib/motion";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { MotionDiv } from "@/components/Motion";
import { Paragraph, Title } from "@/components/Typography";
import ScrollMotionEffect from "../Shared/motion/ScrollMotionEffect";

const infos = {
  title: "Our Event Gallery",
  description:
    "Relive the highlights of our past events! Each image tells the story of our commitment to creating unforgettable experiences.",
};

const delay = 0.5;
const iconVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

const keyServiceData = [
  {
    activeImg: "/landing-pages/our-portfolio/hublot.jpg",
    img: "/landing-pages/our-portfolio/hublot-2.jpg",
    title: "Hublot",
    subtitle: "New Product Launch",
    desc: `Hublot proudly unveils its latest product, a stunning fusion of modern innovation and timeless elegance. This new timepiece showcases the brand’s commitment to pushing the boundaries of craftsmanship and design. Featuring cutting-edge technology, meticulous attention to detail, and the signature bold aesthetics that Hublot is known for, this watch embodies the perfect blend of style and precision. `,
  },
  {
    activeImg: "/landing-pages/our-portfolio/savannah-nguyen.jpg",
    img: "/landing-pages/our-portfolio/savannah-nguyen-2.jpg",
    title: "Savannah Nguyen",
    subtitle: "New Product Launch",
    desc: `Hublot proudly unveils its latest product, a stunning fusion of modern innovation and timeless elegance. This new timepiece showcases the brand’s commitment to pushing the boundaries of craftsmanship and design. Featuring cutting-edge technology, meticulous attention to detail, and the signature bold aesthetics that Hublot is known for, this watch embodies the perfect blend of style and precision. `,
  },
  {
    activeImg: "/landing-pages/our-portfolio/annette-black.jpg",
    img: "/landing-pages/our-portfolio/annette-black-2.jpg",
    title: "Annette Black",
    subtitle: "New Product Launch",
    desc: `Hublot proudly unveils its latest product, a stunning fusion of modern innovation and timeless elegance. This new timepiece showcases the brand’s commitment to pushing the boundaries of craftsmanship and design. Featuring cutting-edge technology, meticulous attention to detail, and the signature bold aesthetics that Hublot is known for, this watch embodies the perfect blend of style and precision. `,
  },
  {
    activeImg: "/landing-pages/our-portfolio/robert-fox.jpg",
    img: "/landing-pages/our-portfolio/robert-fox-2.jpg",
    title: "Robert Fox",
    subtitle: "New Product Launch",
    desc: `Hublot proudly unveils its latest product, a stunning fusion of modern innovation and timeless elegance. This new timepiece showcases the brand’s commitment to pushing the boundaries of craftsmanship and design. Featuring cutting-edge technology, meticulous attention to detail, and the signature bold aesthetics that Hublot is known for, this watch embodies the perfect blend of style and precision. `,
  },
  {
    activeImg: "/landing-pages/our-portfolio/floyd-miles.jpg",
    img: "/landing-pages/our-portfolio/floyd-miles-2.jpg",
    title: "Floyd Miles",
    subtitle: "New Product Launch",
    desc: `Hublot proudly unveils its latest product, a stunning fusion of modern innovation and timeless elegance. This new timepiece showcases the brand’s commitment to pushing the boundaries of craftsmanship and design. Featuring cutting-edge technology, meticulous attention to detail, and the signature bold aesthetics that Hublot is known for, this watch embodies the perfect blend of style and precision. `,
  },
];

export default function OurEventGallery() {
  // Set activeIndex to accept either a number or null
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  return (
    <div className="md:mb10 mb-6 bg-black lg:mb-20">
      <MaxWidthWrapper>
        <MotionDiv
          variants={staggerContainer(0.2, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <div className="flex flex-col  items-center py-10">
            <Title text={infos.title} />
            <Paragraph
              className="text-center md:max-w-4xl"
              key={0}
              text={infos.description}
            />
          </div>
          {/* Our Event Gallery */}

          {/* Key Services Card */}
          <div className="flex h-full flex-col items-stretch overflow-hidden lg:max-h-[400px] lg:flex-row">
            {keyServiceData.map((item, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden duration-500 ${
                  activeIndex === index ? "h-full w-[100%] max-w-2xl" : ""
                }`}
                onMouseEnter={() => setActiveIndex(index)}
              >
                <ScrollMotionEffect effect="fade-up" duration="2000">
                  <div>
                    {/* mobile */}
                    <div className="block max-h-[400px] lg:hidden">
                      <Image
                        // src={item.img}
                        src={item.img}
                        alt={item.title}
                        width={295}
                        height={460}
                        className=" w-full bg-cover"
                      />
                    </div>
                    {/* desktop */}

                    <div className="hidden lg:block">
                      <Image
                        // src={item.img}
                        src={activeIndex === index ? item.activeImg : item.img}
                        alt={item.title}
                        width={activeIndex === index ? 740 : 295}
                        height={460}
                        className={`${activeIndex === index ? " w-full " : ""}`}
                      />
                    </div>

                    <div
                      className={`absolute bottom-0 flex w-full items-start justify-start bg-black/40 p-4 text-white duration-500 ${
                        activeIndex === index ? "pb-9" : ""
                      }`}
                    >
                      <div>
                        <h3 className="mb-1 text-start text-lg font-medium 2xl:text-xl">
                          {item.title}
                        </h3>
                        <p className="font-light text-white opacity-70">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                    {/* <div
                      className={`absolute bottom-0 flex w-full items-start justify-start bg-black/40 p-6 text-white duration-500 ${
                        activeIndex === index
                          ? 'visible top-0 opacity-100'
                          : 'invisible top-full opacity-0'
                      }`}
                    >
                      <div>
                        <h3 className='text-start text-xl font-semibold md:text-2xl'>
                          {item.title}
                        </h3>
                        <p className='font-light text-white opacity-70'>
                          {item.subtitle}
                        </p>
                        <p className='mt-2 text-start text-base opacity-70 2xl:text-xl'>
                          {item.desc}
                        </p>
                      </div>
                    </div> */}
                  </div>
                </ScrollMotionEffect>
              </div>
            ))}
          </div>
          {/* <div className='flex justify-center'>
            <Button
              className={`capsule-hover capsule-button w-full max-w-60 rounded-full bg-brand px-5 py-2 font-semibold text-white`}
              variant='link'
            >
              Submit
            </Button>
          </div> */}
        </MotionDiv>
      </MaxWidthWrapper>
    </div>
  );
}
