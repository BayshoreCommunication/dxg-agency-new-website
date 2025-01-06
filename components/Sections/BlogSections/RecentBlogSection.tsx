"use client";
import React, { Suspense } from "react";
import { MotionDiv } from "@/components/Motion";
import { staggerContainer } from "@/lib/motion";
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

      <div className=" mt-2 rounded-2xl border border-gray-500 p-2 md:mt-4 md:p-4 min-h-96">
        <div
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
              className="flex flex-col flex-wrap gap-y-5 gap-x-20 justify-between  md:flex-row"
              linkClassName="lg:w-[44%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
