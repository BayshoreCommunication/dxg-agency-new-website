"use client";
import React, { useState, Suspense } from "react";
import { BlogBigImageCard, BlogWideCard } from "@/components/BlogCard";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { MotionDiv } from "@/components/Motion";
import { RECENT_BLOG_POST } from "@/config/data";
import { fadeIn, slideIn, staggerContainer } from "@/lib/motion";
import Link from "next/link";
import GetAllBlogPost from "@/lib/GetAllBlogPost";

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
    <div className="h-full bg-black" style={{}}>
      <MaxWidthWrapper>
        <h1
          className="pt-4 text-white"
          style={{ fontSize: "2em", fontWeight: "bold" }}
        >
          Recent Blog Post
        </h1>
        {/* <hr className='h-2 mb-4 border-gray-500' /> */}
        <div className=" mt-2 rounded-2xl border border-gray-500 p-2 md:mt-4 md:p-4">
          <MotionDiv
            variants={staggerContainer(0.2, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="flex flex-col gap-4 lg:flex-row "
            style={{ overflow: "hidden", paddingBottom: "2vw" }}
          >
            <MotionDiv
              variants={slideIn("left", "tween", 0.2, 1)}
              className="w-full py-2 lg:w-9/12"
              style={{ display: "none" }}
            >
              <Suspense fallback={<div>Loading...</div>}>
                {/* <BlogBigImageCard {...selectedPost} /> */}
              </Suspense>
            </MotionDiv>
            <div
              className="w-full"
              style={{
                overflowY: "auto",
                maxHeight: "75vh",
                position: "sticky",
                top: "0",
              }}
            >
              {/* <div className="flex flex-col flex-wrap justify-between gap-5 lg:flex-row">
                {blogsData?.data
                  ?.filter((blog: any) => blog.published === true)
                  ?.map((item: any, index: number) => {
                    return (
                      <Link
                        href={`/post/${item.slug}`}
                        key={item._id}
                        // style={{ maxWidth: '100%' }}
                        className="w-full lg:w-[45%]"
                      >
                        <MotionDiv
                          variants={fadeIn("up", "tween", index * 0.2, 1)}
                          className="w-full cursor-pointer"
                        >
                          <BlogWideCard {...item} />
                        </MotionDiv>
                      </Link>
                    );
                  })}
              </div> */}

              <BlogWideCard />
            </div>
          </MotionDiv>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};
