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
          {/* Desktop view */}
          <div className="flex flex-col lg:flex-row h-full overflow-hidden lg:hidden ">
            {keyServiceData.map((item, index) => (
              <div
                key={index}
                className={`group relative flex-1 transition-all duration-500 overflow-hidden `}

                // Remove this to keep one always active
                // onMouseLeave={() => setActiveIndex(null)}
              >
                <ScrollMotionEffect effect="fade-up" duration="2000">
                  {/* Mobile view */}
                  <div className="w-full relative">
                    <Image
                      src={item.activeImg}
                      alt={item.title}
                      width={1920}
                      height={1080}
                      className="w-full"
                    />
                  </div>
                </ScrollMotionEffect>
              </div>
            ))}
          </div>
          {/* Desktop view */}
          <div className="hidden lg:flex flex-col lg:flex-row h-full overflow-hidden">
            {keyServiceData.map((item, index) => (
              <div
                key={index}
                className={`group relative flex-1 transition-all duration-500 overflow-hidden ${
                  activeIndex === index
                    ? "lg:flex-[4.5] xl:flex[3]"
                    : "lg:flex-[1] xl:flex-[2]"
                }`}
                onMouseEnter={() => setActiveIndex(index)}
                // Remove this to keep one always active
                // onMouseLeave={() => setActiveIndex(null)}
              >
                <ScrollMotionEffect effect="fade-up" duration="2000">
                  {/* Mobile view */}
                  <div className="block lg:hidden h-[460px] w-full relative">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      sizes="100vw"
                      className="object-cover"
                      style={{
                        objectFit: "cover",
                        objectPosition: "center",
                        backgroundRepeat: "no-repeat",
                      }}
                    />
                  </div>

                  {/* Desktop view */}
                  <div
                    className="hidden lg:block h-[400px] w-full transition-all duration-500 ease-in-out  bg-no-repeat "
                    style={{
                      backgroundImage: `url('${
                        activeIndex === index ? item.activeImg : item.img
                      }')`,
                    }}
                  />
                </ScrollMotionEffect>
              </div>
            ))}
          </div>
        </MotionDiv>
      </MaxWidthWrapper>
    </div>
  );
}
