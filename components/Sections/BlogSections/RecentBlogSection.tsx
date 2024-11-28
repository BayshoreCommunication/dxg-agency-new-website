"use client";
import React, { useState, Suspense } from "react";
import { BlogBigImageCard } from "@/components/BlogCard";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { MotionDiv } from "@/components/Motion";
import { RECENT_BLOG_POST } from "@/config/data";
import { fadeIn, slideIn, staggerContainer } from "@/lib/motion";
import Link from "next/link";
import GetAllBlogPost from "@/lib/GetAllBlogPost";
import BlogWideCard from "@/components/BlogCard/BlogWideCard";

function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    .replace(/\-\-+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
}

export const RecentBlogSection = () => {
  return (
    <div className="h-full bg-black  mx-auto w-full px-2.5 md:px-28" style={{}}>
      <h1
        className="pt-4 text-white"
        style={{ fontSize: "2em", fontWeight: "bold" }}
      >
        Recent Blog Post
      </h1>
      {/* <hr className='h-2 mb-4 border-gray-500' /> */}
      <Suspense
        fallback={
          <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        }
      >
        <div className=" mt-2 rounded-2xl border border-gray-500 p-2 md:mt-4 md:p-4 min-h-96">
          <MotionDiv
            variants={staggerContainer(0.2, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="flex flex-col gap-4 lg:flex-row "
            style={{ overflow: "hidden", paddingBottom: "2vw" }}
          >
            <div
              className="w-full"
              style={{
                overflowY: "auto",
                maxHeight: "75vh",
                position: "sticky",
                top: "0",
              }}
            >
              <BlogWideCard
                className="flex flex-col flex-wrap gap-y-5 gap-x-40 md:flex-row"
                linkClassName="lg:w-[45%]"
              />
            </div>
          </MotionDiv>
        </div>
      </Suspense>
    </div>
  );
};
