"use client";

import { motion } from "framer-motion";

import { fadeIn } from "@/lib/motion";
import { MotionDiv } from "../Motion";
import { Icons } from "../Icons";
// import { Button } from "../ui/button";
// import { P } from "../Typography";
// import Link from "next/link";
// import { zoomIn } from "@/lib/motion";

interface SupportCardProps {
  id: number;
  imgUrl: string;
  title: string;
  description: string;
  index: number;
  active: number;
  handleCardHover: (id: number) => void;
}

const SupportCardMobile = ({
  id,
  imgUrl,
  title,
  description,
  index,
  // active,
  handleCardHover,
}: SupportCardProps) => (
  <MotionDiv
    variants={fadeIn("right", "tween", index * 0.4, 0.75)}
    className={`duration-700  ease-out-flex relative mt-5 flex h-[500px] cursor-pointer items-center justify-center transition-[flex]`}
    style={{
      backgroundImage: `linear-gradient(rgba(45, 198, 245, 0.6), rgba(45, 198, 245, 0)), url(${imgUrl})`,
      transition: "0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95)",
      backgroundSize: "auto 100%",
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      borderRadius: "40px",
    }}
    onMouseEnter={() => handleCardHover(id)}
    onMouseLeave={() => handleCardHover(0)}
  >
    <div className=" flex h-full flex-col items-center justify-center bg-[rgba(0,0,0,0.5)] p-2">
      <motion.div>
        <div className="flex flex-col items-center justify-center">
          <div className="">
            <Icons.monitor className="h-12 w-12 text-white" />
          </div>
          <h2 className=" py-2 text-3xl font-bold uppercase text-white">
            {title}
          </h2>
          <p className=" text-center text-base font-medium leading-[27px] tracking-[0.18px] text-white">
            {description}
          </p>
          {/* <div className='mt-5'>
              <Button
                variant='outline'
                className='rounded-full border-brand bg-transparent text-brand  bg-brand px-5 py-2 font-semibold text-white capsule-hover capsule-button'
              >
                <Link href='/'>Learn More</Link>
              </Button>
            </div> */}
        </div>
      </motion.div>
    </div>
  </MotionDiv>
);

export default SupportCardMobile;
