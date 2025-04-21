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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 xl:gap-6">
            {SERVICE_DATA.map((item, index) => {
              return (
                // <MotionDiv
                //   variants={fadeIn("right", "tween", index * 0.2, 0.75)}
                //   key={index}
                //   className={`min-h-[200px] flex-1 justify-center overflow-hidden border border-gray-400 bg-cover bg-center bg-no-repeat md:min-h-[420px]`}
                //   style={{ backgroundImage: `url('${item.image}')` }}
                // ></MotionDiv>

                <div
                  key={index}
                  className="min-h-[280px]  flex-1 justify-center overflow-hidden border border-gray-400 bg-cover bg-center bg-no-repeat  rounded-xl duration-500 md:rounded-[30px]"
                  style={{ backgroundImage: `url('${item.image}')` }}
                >
                  <Link href={`${item.url}`}>
                    <div className="group relative h-full w-full bg-black bg-opacity-50 transition duration-300 hover:bg-sky-700 hover:bg-opacity-80">
                      {/* Before Hover */}
                      <div className="absolute inset-0 z-10 flex h-full w-full items-end justify-between px-6 py-6 xl:px-10 xl:py-10 group-hover:hidden ">
                        <div className="flex items-center justify-between gap-2 w-full">
                          <div>
                            {item.heading.split(";").map((word, idx) => (
                              <h2
                                key={idx}
                                className="font-semibold  md:text-2xl 2xl:text-3xl uppercase text-white"
                              >
                                {word}
                              </h2>
                            ))}
                          </div>
                          <div className="flex justify-center">
                            <Icons.customArrowUp className="h-14 w-14  text-white" />
                          </div>
                        </div>
                      </div>

                      {/* On Hover */}
                      <MotionDiv
                        transition={{
                          duration: 0.4,
                          delay,
                          type: "easeInOut",
                          staggerChildren: 0.5,
                          staggerDirection: -1,
                        }}
                        className="absolute inset-0 z-20 hidden h-full w-full flex-col p-6 lg:p-10 group-hover:flex items-end"
                      >
                        <MotionDiv className=" h-full">
                          <h2 className="font-semibold  md:text-2xl 2xl:text-3xl uppercase text-white">
                            {item.title}
                          </h2>
                          <p
                            className="mt-3 text-base text-white"
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
                          className="flex justify-center pt-5"
                          initial="hidden"
                          animate="visible"
                          variants={iconVariants}
                          transition={{ duration: 0.5 }}
                        >
                          <Icons.customRightArrow className="h-14 w-14 duration-500 text-white" />
                        </MotionDiv>
                      </MotionDiv>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </MotionDiv>
      </MaxWidthWrapper>
    </div>
  );
}
