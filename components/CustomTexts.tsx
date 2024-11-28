"use client";

import { textContainer, textVariant2 } from "@/lib/motion";
import { motion } from "framer-motion";
import { MotionH2 } from "./Motion";

interface CustomTextProps {
  preText: string;
  coloredText: string;
  textStyles?: string;
}

export const TypingText = ({
  preText,
  coloredText,
  textStyles,
}: CustomTextProps) => (
  <MotionH2
    variants={textContainer}
    className={`text-5xl font-bold uppercase text-white md:text-6xl ${textStyles}`}
  >
    {Array.from(preText).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}{" "}
    {Array.from(coloredText).map((letter, index) => (
      <motion.span
        className=" outline-with-shaddow uppercase "
        variants={textVariant2}
        key={index}
      >
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </MotionH2>
);
