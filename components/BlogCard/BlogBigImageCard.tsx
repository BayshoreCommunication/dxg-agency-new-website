import React from "react";
import Image from "next/image";
// import { Button } from "../ui/button";
// import { formatTimestamp } from "@/lib/utils";
import LazyDescription from "./LazyDescription.client";
import image from "@/public/bgFooter.png";
import parse from "html-react-parser";

interface BlogBigImageCardProps {
  id: number;
  date: number;
  title: string;
  image: string;
  description: string;
  tag: string[];
  body: string;
}

export const BlogBigImageCard: React.FC<BlogBigImageCardProps> = ({
  id,
  date,
  title,
  image,
  description,
  tag,
  body,
}) => {
  const postDate = (date: string) => {
    const formattedDate: string = new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return formattedDate;
  };

  return (
    <div className="w-full text-white">
      <div className="imageEntryAnimation relative h-[220px] w-full bg-red-200 md:h-[445px]">
        {/* Added animation class here */}
        <Image
          src={`${image}`}
          alt={title}
          fill
          style={{
            objectFit: "fill",
            width: "100%",
          }}
        />
      </div>
      <p className="text-light mt-3">{date}</p>
      <h4 className="text mb-3 text-xl font-bold text-brand">{title}</h4>
      {/* <div key={index} className="lazyTextElement">
        {parse(htmlElement.outerHTML)}
      </div> */}
    </div>
  );
};
