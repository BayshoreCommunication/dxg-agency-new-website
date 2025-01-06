"use client";
import { useParams } from "next/navigation";
import Client from "./page.client";
import { useEffect, useState } from "react";

const Page = () => {
  const [data, setData] = useState([]);
  const { slug } = useParams();
  useEffect(() => {
    fetch("https://backend-dxgwebsite.vercel.app/site/blog", {
      cache: "force-cache",
      // next: { revalidate: 3600 },
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log(data.data);
        setData(data.data.find((post: any) => post.slug === slug));
      });
  }, [slug]);

  return <Client post={data} />;
};

export default Page;
