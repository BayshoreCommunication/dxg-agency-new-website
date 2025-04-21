"use client";
import React from "react";
import Image from "next/image";
import { SERVICE_DATA } from "@/config/data";
import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { fadeIn, staggerContainer } from "@/lib/motion";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { MotionDiv } from "@/components/Motion";
import { Paragraph, Title } from "@/components/Typography";
import { BottomToTop } from "@/components/Animation";

const infos = {
  title: "Problems We Solve",
  description:
    "Whether you need us to produce, project manage, or be a complete turnkey partner, DXG Agency has the resources and experience to deliver several solutions that fit your needs.",
};

const delay = 0.5;
const iconVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

export default function Services() {
  return (
    <div className="bg-black py-3 md:py-10">
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
          <div className="flex flex-col md:flex-row">
            {SERVICE_DATA.map((item, index) => {
              return (
                <MotionDiv
                  variants={fadeIn("right", "tween", index * 0.2, 0.75)}
                  key={index}
                  className={`min-h-[200px] flex-1 justify-center overflow-hidden border border-gray-400 bg-cover bg-center bg-no-repeat md:min-h-[420px]`}
                  style={{ backgroundImage: `url('${item.image}')` }}
                >
                  <Link href={`${item.url}`}>
                    <div
                      className={`group relative  bg-black bg-opacity-50 transition delay-100 animate-in hover:bg-sky-700 hover:bg-opacity-80`}
                    >
                      <div className="flex flex-row items-center justify-between px-10 group-hover:hidden md:flex-col ">
                        <div className="flex min-h-[200px] transform flex-col items-start justify-center md:min-h-[420px] md:-rotate-90 ">
                          {item.heading.split(";").map((word, index) => {
                            return (
                              <div key={index} className="">
                                <h2 className="text-xl font-bold uppercase text-white">
                                  {word}
                                </h2>
                              </div>
                            );
                          })}
                        </div>
                        <div className="flex justify-center">
                          <Icons.customArrowUp className="flex h-20 w-20  items-center justify-center  pb-5 text-white" />
                        </div>
                      </div>

                      <MotionDiv
                        transition={{
                          duration: 0.4,
                          delay,
                          type: "easeInOut",
                          staggerChildren: 0.5,
                          staggerDirection: -1,
                        }}
                        className="fadeInAnimation hidden  flex-row px-5 group-hover:flex md:flex-col"
                      >
                        <MotionDiv className="min-h-[300px] pt-10 md:min-h-[420px]">
                          <h2 className="text-xl font-bold uppercase text-white">
                            {item.title}
                          </h2>
                          <p
                            className=" mt-3 h-full text-base text-white"
                            style={{
                              wordWrap: "break-word",
                              overflow: "hidden",
                              whiteSpace: "normal",
                              textOverflow: "ellipsis",
                              display: "-webkit-box",
                              WebkitBoxOrient: "vertical",
                              WebkitLineClamp: 15,
                              lineHeight: "18px",
                              textAlign: "left",
                            }}
                          >
                            {item.excerpt}
                          </p>
                        </MotionDiv>
                        <MotionDiv
                          className="flex justify-center pt-12 md:pt-0"
                          initial="hidden"
                          animate="visible"
                          variants={iconVariants}
                          transition={{ duration: 0.5 }}
                        >
                          <Icons.customRightArrow className="h-20 w-20  pb-5 text-white " />
                        </MotionDiv>
                      </MotionDiv>
                    </div>
                  </Link>
                </MotionDiv>
              );
            })}
          </div>
        </MotionDiv>
      </MaxWidthWrapper>
    </div>
  );
}
