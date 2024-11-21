"use client";

import Link from "next/link";
import { useState } from "react";
import { Icons } from "../Icons";
import { Button } from "../ui/button";
import { P } from "../Typography";
import { MotionDiv } from "../Motion";
import { fadeIn } from "@/lib/motion";
import Image from "next/image";

interface SupportCardTwoProps {
  id: number;
  imgUrl: string;
  title: string;
  index: number;
  active: number;
  handleClick: (id: number) => void;
}

export default function SupportCardTwo({
  id,
  imgUrl,
  title,
  index,
  active,
  handleClick,
}: SupportCardTwoProps) {
  <MotionDiv
    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
    className={`relative ${
      active === id ? "flex-[10] lg:flex-[3.5]" : "flex-[2] lg:flex-[0.5]"
    } duration-[0.7] ease-out-flex flex h-[700px] min-w-[170px] cursor-pointer items-center justify-center transition-[flex]`}
    onClick={() => handleClick(id)}
  >
    <Image
      src={imgUrl}
      alt="planet-04"
      layout="fill"
      className="absolute h-full w-full rounded-[24px] object-cover"
    />
    {active !== id ? (
      <h3 className="absolute z-0 text-[18px] font-semibold text-white sm:text-[26px] lg:bottom-20 lg:origin-[0,0] lg:rotate-[-90deg]">
        {title}
      </h3>
    ) : (
      <div className="absolute bottom-0 flex w-full flex-col justify-start rounded-b-[24px] bg-[rgba(0,0,0,0.5)] p-8">
        <div
          className={`glassmorphism mb-[16px] flex h-[60px] w-[60px] items-center justify-center rounded-[24px]`}
        ></div>
        <p className="text-[16px] font-normal uppercase leading-[20.16px] text-white">
          Enter Metaverse
        </p>
        <h2 className="mt-[24px] text-[24px] font-semibold text-white sm:text-[32px]">
          {title}
        </h2>
      </div>
    )}
  </MotionDiv>;
}
