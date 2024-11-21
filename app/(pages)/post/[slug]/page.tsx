"use client";

// // pages/post/[slug].tsx
// import { useRouter } from 'next/router';
// import { useEffect, useState, Suspense } from 'react';
// import Header from '@/components/Navbar'; // Adjust the import path as necessary

// import Footer from '@/components/Footer'; // Adjust the import path as necessary
// import { BlogBigImageCard, BlogWideCard } from '@/components/BlogCard';
// import MaxWidthWrapper from '@/components/MaxWidthWrapper';
// import { MotionDiv } from '@/components/Motion';
// import { RECENT_BLOG_POST } from '@/config/data';
// import { fadeIn, slideIn, staggerContainer } from '@/lib/motion';
// import Link from 'next/link';
// import '@/app/globals.css';
// import './myStyle.css';
// import GetAllBlogPost from '@/lib/GetAllBlogPost';
// import parse from 'html-react-parser';

// interface BlogPost {
//   slug: string;
//   title: string;
//   body: string;
//   excerpt: string;
//   featuredImage: {
//     image: {
//       url: string;
//     };
//   };
// }

// interface Metadata {
//   title: string;
//   description: string;
//   openGraph: {
//     title: string;
//     description: string;
//     images: string[];
//     url: string;
//     type: string;
//     site_name: string;
//   };
// }
// // Slugify function to convert title to URL-friendly slug
// function slugify(text: string) {
//   return text
//     .toString()
//     .toLowerCase()
//     .replace(/\s+/g, '-') // Replace spaces with -
//     .replace(/[^\w\-]+/g, '') // Remove all non-word chars
//     .replace(/\-\-+/g, '-') // Replace multiple - with single -
//     .replace(/^-+/, '') // Trim - from start of text
//     .replace(/-+$/, ''); // Trim - from end of text
// }

// export async function generateMetadata({
//   slug,
// }: {
//   slug: string;
// }): Promise<Metadata> {
//   const blogPostData = await GetAllBlogPost();

//   // Find blog post details by slug
//   const blogDetails: BlogPost | undefined = blogPostData?.data?.find(
//     (blogs: BlogPost) => slugify(blogs.slug) === slug
//   );

//   // If no blog is found, return default metadata
//   if (!blogDetails) {
//     return {
//       title: 'Blog not found',
//       description: 'No blog post available.',
//       openGraph: {
//         title: 'Blog not found',
//         description: 'No blog post available.',
//         images: [],
//         url: 'https://www.dxg.agency/post/not-found',
//         type: 'article',
//         site_name: 'Digital Xperience Group',
//       },
//     };
//   }

//   // Parse the blog body and extract description
//   let description: any[] = parse(blogDetails.body) as any[];

//   // Fallback to blogDetails.excerpt if description parsing fails
//   const parsedDescription =
//     description?.[0]?.props?.children?.toString() || blogDetails.excerpt;

//   return {
//     title: blogDetails.title,
//     description: parsedDescription,
//     openGraph: {
//       title: blogDetails.title,
//       description: parsedDescription,
//       images: [blogDetails.featuredImage?.image?.url || ''],
//       url: `https://www.dxg.agency/post/${blogDetails.slug}`,
//       type: 'article',
//       site_name: 'Digital Xperience Group',
//     },
//   };
// }

// // Replace this with your actual data fetching logic
// async function getPostBySlug(slug: string): Promise<Post> {
//   const blogsData = await GetAllBlogPost();
//   const post = blogsData?.data?.find(
//     (post: any) => slugify(post.slug) === slug
//   );
//   return post || null;
// }

// // Define the type for your post
// type Post = {
//   id: number;
//   date: number;
//   title: string;
//   image: string;
//   description: string;
//   tag: string[];
// } | null;

// // Define your CSS here
// const css = `
//   html {
//     background-color: black;
//   }
// `;

// export default function PostPage() {
//   const router = useRouter();
//   const { slug } = router.query;
//   const [post, setPost] = useState<Post | null>(null);

//   const [blogData, setBlogData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await GetAllBlogPost();
//       setBlogData(data);
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     if (typeof slug === 'string') {
//       getPostBySlug(slug).then((post) => {
//         setPost(post); // post is either a Post object or null
//       });
//     } else {
//       setPost(null); // Reset or handle the state appropriately when slug is not available
//     }
//   }, [slug]);

//   if (!post) {
//     return (
//       <div className='bg-black' style={{ height: '100vh', width: '100vw' }}>
//         <div className='loading-gif'>
//           <img src='/loader.gif' height={300} width={300} />
//         </div>
//       </div>
//     );
//   }

//   return (
//     <>
//       <Header /> {/* Include the Header at the top */}
//       <style>{css}</style>
//       <div className='bg-black'>
//         <MaxWidthWrapper>
//           <h1 className='pt-4 text-2xl font-bold text-white'>{post.title}</h1>
//           <hr className='mb-4 h-2 border-gray-500' />
//           <MotionDiv
//             variants={staggerContainer(0.2, 0.1)}
//             initial='hidden'
//             whileInView='show'
//             viewport={{ once: true, amount: 0 }}
//             className='flex flex-col gap-4 lg:flex-row'
//           >
//             <MotionDiv
//               variants={slideIn('up', 'tween', 0.2, 1)}
//               className='w-full py-2 lg:w-9/12'
//             >
//               <Suspense fallback={<div>Loading...</div>}>
//                 <BlogBigImageCard {...post} />
//               </Suspense>
//             </MotionDiv>
//             <div
//               className='w-full p-2 lg:w-3/12'
//               style={{
//                 overflowY: 'auto',
//                 maxHeight: '84vh',
//                 position: 'sticky',
//                 top: '0',
//                 overflowX: 'hidden',
//               }}
//             >
//               <div className='flex flex-col gap-5'>
//                 <h2 className='text mb-3 text-xl font-bold text-brand'>
//                   Recent Posts
//                 </h2>
//                 {(blogData as any)?.data
//                   ?.filter((blog: any) => blog.published === true)
//                   ?.map((item: any, index: number) => {
//                     return (
//                       <Link href={`/post/${item.slug}`} key={item._id}>
//                         <MotionDiv
//                           variants={fadeIn('up', 'tween', index * 0.2, 1)}
//                           className='w-full cursor-pointer'
//                         >
//                           <BlogWideCard {...item} />
//                         </MotionDiv>
//                       </Link>
//                     );
//                   })}
//               </div>
//             </div>
//           </MotionDiv>
//         </MaxWidthWrapper>
//       </div>
//       <Footer /> {/* Include the Footer at the bottom */}
//     </>
//   );
// }

// pages/post/[slug].tsx

import { useEffect, useState, Suspense, useMemo } from "react";

import { BlogBigImageCard, BlogWideCard } from "@/components/BlogCard";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { MotionDiv } from "@/components/Motion";
import { fadeIn, slideIn, staggerContainer } from "@/lib/motion";
import Link from "next/link";
import "@/app/globals.css";
import GetAllBlogPost from "@/lib/GetAllBlogPost";
import parse from "html-react-parser";
import Head from "next/head"; // Import Head for SEO
import Image from "next/image";
import { useParams } from "next/navigation";
import blogsData from "@/lib/GetAllBlogPost";
import { set } from "date-fns";

// TypeScript Types
interface BlogPost {
  slug: string;
  title: string;
  body: string;
  excerpt: string;
  published: boolean;
  featuredImage: {
    image: {
      url: string;
    };
  };
}

// Slugify function to convert title to URL-friendly slug
const slugify = (text: string): string =>
  text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w\-]+/g, "") // Remove all non-word chars
    .replace(/\-\-+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text

// Fetch post by slug
const getPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  const blogsData = GetAllBlogPost;
  const post = blogsData?.data?.find(
    (post: BlogPost) => slugify(post.slug) === slug
  );
  return post || null;
};

// CSS string for styling
// const css = `
//   html {
//     background-color: black;
//   }
// `;

export default function PostPage() {
  const { slug } = useParams();
  console.log(slug);
  const [post, setPost] = useState<BlogPost | null>(null);
  const [blogData, setBlogData] = useState<BlogPost[] | null>(null);
  setBlogData(blogsData?.data);
  setPost(getPostBySlug(slug));

  // Fetch all blog posts once
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await GetAllBlogPost();
  //     setBlogData(data?.data || null);
  //   };
  //   fetchData();
  // }, []);

  // Fetch specific post by slug
  // useEffect(() => {
  //   if (typeof slug === "string") {
  //     getPostBySlug(slug).then((post) => setPost(post));
  //   }
  // }, [slug]);

  // Memoize recent posts for performance optimization
  // const recentPosts = useMemo(
  //   () =>
  //     blogData
  //       ?.filter((blog) => blog.published)
  //       ?.map((item, index) => (
  //         <Link href={`/post/${item.slug}`} key={item.slug}>
  //           <MotionDiv
  //             variants={fadeIn("up", "tween", index * 0.2, 1)}
  //             className="w-full cursor-pointer"
  //           >
  //             <BlogWideCard />
  //           </MotionDiv>
  //         </Link>
  //       )),
  //   [blogData]
  // );

  if (!post) {
    return (
      <div className="bg-black" style={{ height: "100vh", width: "100vw" }}>
        <div className="loading-gif">
          <Image src="/loader.gif" height={300} width={300} alt="loader" />
        </div>
      </div>
    );
  }

  // Metadata for the current post
  const parsedDescription = (() => {
    const parsedBody = parse(post.body);
    if (Array.isArray(parsedBody)) {
      return parsedBody[0]?.props?.children?.toString() || post.excerpt; // Ensure this is a string
    } else if (typeof parsedBody === "object" && parsedBody !== null) {
      return parsedBody?.props?.children?.toString() || post.excerpt; // Convert to string
    }
    return post.excerpt;
  })();

  // Modify the Cloudinary URL for dynamic resizing
  const resizedImageUrl = post.featuredImage?.image?.url
    ? post.featuredImage.image.url.replace(
        "/upload/",
        "/upload/w_5209,h_2736,q_auto,f_jpg/"
      )
    : "/default-image.jpg";

  const metadata = {
    title: post.title,
    description: parsedDescription,
    ogImage: resizedImageUrl,
    ogUrl: `https://www.dxg.agency/post/${post.slug}`,
    canonicalUrl: `https://www.dxg.agency/post/${post.slug}`, // Canonical URL
  };

  return (
    <section>
      <Head>
        <title>{metadata.title}</title>
        <meta
          name="description"
          content={metadata.description || "Default description"}
        />
        <meta property="og:title" content={metadata.title} />
        <meta
          property="og:description"
          content={metadata.description || "Default description"}
        />
        <meta property="og:image" content={metadata.ogImage} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:url" content={metadata.ogUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Digital Xperience Group" />
        <meta property="og:image:width" content="5209" />
        <meta property="og:image:height" content="2736" />
        <link rel="canonical" href={metadata.canonicalUrl} />{" "}
        {/* Canonical tag */}
      </Head>

      {/* <style>{css}</style> */}
      <div className="bg-black">
        <MaxWidthWrapper>
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
                <BlogBigImageCard {...post} />
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
                <section className="w-full">
                  <BlogWideCard />
                </section>
              </div>
            </div>
          </MotionDiv>
        </MaxWidthWrapper>
      </div>
    </section>
  );
}
