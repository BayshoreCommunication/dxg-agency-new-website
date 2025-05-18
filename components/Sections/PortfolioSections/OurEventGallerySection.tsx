"use client";
import React, { useState } from "react";
import Image from "next/image";

import { fadeIn, staggerContainer } from "@/lib/motion";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { MotionDiv } from "@/components/Motion";
import { Paragraph, Title } from "@/components/Typography";
import ScrollMotionEffect from "@/components/LandingPages/Shared/motion/ScrollMotionEffect";

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

const EventGalleryData = Array.from({ length: 98 }, (_, i) => ({
  id: i + 1,
  img: `/landing-pages/our-portfolio/event-${i + 1}.jpg`,
}));

export default function OurEventGallerySection() {
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {EventGalleryData.map((item) => (
              <ScrollMotionEffect
                effect="fade-up"
                duration="2000"
                key={item.id}
              >
                <div className="relative w-full aspect-[4/3] rounded-md overflow-hidden">
                  <Image
                    src={item.img}
                    alt={`Event ${item.id}`}
                    fill
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    className="hover:scale-105 duration-500"
                    priority
                  />
                </div>
              </ScrollMotionEffect>
            ))}
          </div>
        </MotionDiv>
      </MaxWidthWrapper>
    </div>
  );
}
