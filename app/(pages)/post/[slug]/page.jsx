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
import postData from "./_getPost.js";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const posts = await postData;
  const blogDetails = posts.data?.find((post) => post.slug === slug);

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
  const post = posts.data?.find((post) => post.slug === slug);
  const postDate = (date) => {
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return formattedDate;
  };

  if (post === undefined)
    return (
      <div
        className="w-[90%] relative m-auto h-full flex flex-col gap-20 justify-center items-center pt-28"
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

  return (
    <div className="px-2.5 md:px-28">
      <div className="bg-black mx-auto w-full ">
        <h1 className="pt-4 text-2xl font-bold text-white">{post.title}</h1>
        <hr className="mb-4 h-2 border-gray-500" />
        <div className="flex flex-col gap-4 lg:flex-row">
          <div className="w-full py-2 lg:w-8/12">
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
          </div>
          <div
            className="w-full p-2 lg:w-4/12"
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
        </div>
      </div>
    </div>
    // <h1>hi</h1>
  );
};
export default Client;
