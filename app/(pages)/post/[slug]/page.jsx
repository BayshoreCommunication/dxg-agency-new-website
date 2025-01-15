// "use client";
// import { useParams } from "next/navigation";
// import Client from "./page.client";
// import { useEffect, useState } from "react";
// import { generateMetadata } from "./page.client";
// export const metadata = generateMetadata();
// const Page = () => {
//   const [data, setData] = useState([]);
//   const { slug } = useParams();
//   useEffect(() => {
//     fetch("https://backend-dxgwebsite.vercel.app/site/blog", {
//       cache: "force-cache",
//       // next: { revalidate: 3600 },
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         //console.log(data.data);
//         setData(data.data.find((post: any) => post.slug === slug));
//       });
//   }, [slug]);
//
//   return <Client post={data} />;
// };
//
// export default Page;
import parse from "html-react-parser";
import Image from "next/image";
import BlogWideCard from "@/components/BlogCard/BlogWideCard";
import postData from "./_getPost";
import getAllBlogPost from "@/lib/GetAllBlogPost";
import { MotionDiv } from "@/components/Motion";
import { fadeIn, staggerContainer } from "@/lib/motion";
import MotionEffect from "@/components/Animation/MotionEffect";
import PostBody from "./postBody";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const posts = await postData;
  //console.log(posts);
  const blogDetails = posts?.data?.find((post) => post.slug === slug);

  return {
    title: blogDetails?.title,
    description: blogDetails?.metaDescription,
    openGraph: {
      title: blogDetails?.title,
      description: `${blogDetails?.metaDescription}...`,
      images: [blogDetails?.featuredImage?.image?.url],
      url: `https://www.dxg.agency/post/${blogDetails?.slug}`,
      type: "article",
      site_name: "Digital Xperience Group",
    },
  };
}
const Client = async ({ params }) => {
  const { slug } = await params;

  const posts = await postData;
  let post;
  if (posts?.data) {
    post = posts?.data?.find((post) => post?.slug === slug);
  }

  return <PostBody post={post} />;
};
export default Client;
