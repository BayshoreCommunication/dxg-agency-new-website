"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import parse from "html-react-parser";
import GetAllBlogPost from "@/lib/GetAllBlogPost";
import { MotionDiv } from "../Motion";
import { fadeIn } from "@/lib/motion";
import Link from "next/link";
import { Suspense, useEffect, useMemo, useState } from "react";
import React from "react";
// interface BlogBigImageCardProps {
//   createdAt: number;
//   title: string;
//   featuredImage: string;
//   body: string;
// }

const BlogWideCard = ({
  className,
  linkClassName,
}: {
  className?: string;
  linkClassName?: string;
}) => {
  // const time = formatTimestamp(createdAt);
  const [blogsData, setBlogsData] = useState([]);
  useEffect(() => {
    // setTimeout(() => {
    //   fetch("https://backend-dxgwebsite.vercel.app/site/blog", {
    //     cache: "force-cache",
    //     next: { revalidate: 3600 },
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       setBlogsData(data.data);
    //     });
    // }, 15000000);
    fetch("https://backend-dxgwebsite.vercel.app/site/blog", {
      cache: "force-cache",
      next: { revalidate: 3600 },
    })
      .then((res) => res.json())
      .then((data) => {
        setBlogsData(data.data);
      });
  }, []);

  const postDate = (date: any) => {
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return formattedDate;
  };
  if (blogsData.length === 0)
    return (
      <div
        className="w-[90%] relative m-auto h-[400px] flex flex-col gap-20 justify-center items-center "
        role="status"
      >
        <Image
          src={"/DXG.png"}
          alt="DXG logo"
          height={120}
          width={160}
          quality={100}
        />
        <svg
          aria-hidden="true"
          className=" w-14 h-14  animate-spin  fill-[#3bc9f5]"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
      </div>
    );
  else
    return (
      blogsData && (
        <div className={" " + className}>
          {blogsData
            ?.filter((blog: any) => blog.published === true)
            ?.map((item: any) => {
              return (
                <Link
                  href={`/post/${item.slug}`}
                  key={item._id}
                  // style={{ maxWidth: '100%' }}
                  className={"w-full " + linkClassName}
                >
                  <div className="w-full cursor-pointer">
                    <div className="flex w-full gap-4 text-white">
                      {/* Adjusted for equal height */}
                      <div
                        className="relative flex-shrink-0"
                        style={{ flexBasis: "calc(38% - 1rem)" }}
                      >
                        <div style={{ paddingTop: "100%" }}></div>
                        <Image
                          src={`${item.featuredImage?.image?.url}`}
                          alt={"featuredImage.altText"}
                          fill
                          // sizes=""
                          quality={100}
                          className="absolute left-0 top-0 object-cover"
                          loading="lazy"
                          blurDataURL={`${item.featuredImage?.image?.url}`}
                        />
                      </div>
                      <div className="flex flex-grow flex-col justify-center">
                        {/* Adjusted for vertical center alignment */}
                        <p className="text-xs">{postDate(item.createdAt)}</p>
                        <h4 className="line-clamp-1 text-lg font-bold text-brand">
                          {item.title}
                        </h4>
                        <div className="line-clamp-2 h-11 text-sm">
                          {parse(item.body)}
                        </div>
                        <div className="mt-2 flex flex-wrap gap-2">
                          <Button
                            variant={"outline"}
                            className={`blogButton m-0 mt-2 box-border rounded-full rounded-l-full rounded-r-full border-2 border-white bg-transparent`}
                          >
                            Read More
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>
      )
    );
};

export default BlogWideCard;
