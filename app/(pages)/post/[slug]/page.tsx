"use client";
import { useParams } from "next/navigation";
import React, { Suspense, useEffect, useMemo, useState } from "react";
// import "./app/globals.css";
import parse from "html-react-parser";
import { MotionDiv } from "@/components/Motion";
import { fadeIn, slideIn, staggerContainer } from "@/lib/motion";
import { BlogBigImageCard } from "@/components/BlogCard";
import Link from "next/link";
import Image from "next/image";
import BlogWideCard from "@/components/BlogCard/BlogWideCard";

const Page = () => {
  const { slug } = useParams();
  const [blogsData, setBlogsData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [post, setPost] = useState<any>({});

  useEffect(() => {
    fetch("https://backend-dxgwebsite.vercel.app/site/blog", {
      cache: "force-cache",
      // next: { revalidate: 3600 },
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log(data.data);
        setPost(data.data.find((post: any) => post.slug === slug));
        setLoading(false);
      });
  }, [slug]);

  const postDate = (date: any) => {
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return formattedDate;
  };

  if (isLoading) return <p>Loading...</p>;
  if (!blogsData) return <p>No profile data</p>;

  //console.log(post);
  return (
    <div className="">
      <div className="bg-black mx-auto w-full px-2.5 md:px-28">
        <h1 className="pt-4 text-2xl font-bold text-white">{post.title}</h1>
        <hr className="mb-4 h-2 border-gray-500" />
        <MotionDiv
          variants={staggerContainer(0.2, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0 }}
          className="flex flex-col gap-4 lg:flex-row"
        >
          <MotionDiv
            variants={slideIn("up", "tween", 0.2, 1)}
            className="w-full py-2 lg:w-9/12"
          >
            <Suspense fallback={<div>Loading...</div>}>
              <div className="w-full text-white">
                <div className="imageEntryAnimation relative h-[220px] w-full bg-red-200 md:h-[445px]">
                  {/* Added animation class here */}
                  <Image
                    src={`${post.featuredImage?.image?.url}`}
                    alt={post.title}
                    fill
                    style={{
                      objectFit: "fill",
                      width: "100%",
                    }}
                    loading="lazy"
                  />
                </div>
                <p className="text-light mt-3">{postDate(post.createdAt)}</p>
                <h4 className="text mb-3 text-xl font-bold text-brand">
                  {post.title}
                </h4>
                <div key={post._id} className="lazyTextElement">
                  {parse(post.body)}
                </div>
              </div>
            </Suspense>
          </MotionDiv>
          <div
            className="w-full p-2 lg:w-3/12"
            style={{
              overflowY: "auto",
              maxHeight: "84vh",
              position: "sticky",
              top: "0",
              overflowX: "hidden",
            }}
          >
            <div className="flex flex-col gap-5">
              <h2 className="mb-3 text-xl font-bold text-brand">
                Recent Posts
              </h2>
              <BlogWideCard className="flex flex-row flex-wrap justify-between gap-5 h-48 " />
            </div>
          </div>
        </MotionDiv>
      </div>
    </div>
    // <h1>hi</h1>
  );
};
export default Page;
