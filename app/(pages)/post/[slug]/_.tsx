// import Footer from "@/components/Footer";
// import Navbar from "@/components/Navbar";
// import TailwindIndicator from "@/components/TailwindIndicator";
// import { cn } from "@/lib/utils";
// import { Inter } from "next/font/google";
// import parse from "html-react-parser";
// import "./globals.css";
// import type { Metadata, ResolvingMetadata } from "next";
// import { SITECONFIG } from "@/config/site";

// import "./globals.css";
// // type Props = {
// //   params: Promise<{ id: string }>;
// //   searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
// // };
// // export async function generateMetadata(
// //   { params, searchParams }: Props,
// //   parent: ResolvingMetadata
// // ): Promise<Metadata> {
// //   // read route params
// //   const id = await params;
// //   console.log(id.slug);
// //   const product = await fetch(
// //     "https://backend-dxgwebsite.vercel.app/site/blog",
// //     {
// //       cache: "force-cache",
// //       next: { revalidate: 3600 },
// //     }
// //   ).then((res) => res.json());

// //   const post = product.data.find((post: any) => post.slug === id);
// //   const parsedDescription = (() => {
// //     const parsedBody = parse(post.body);
// //     if (Array.isArray(parsedBody)) {
// //       return parsedBody[0]?.props?.children?.toString() || post.excerpt; // Ensure this is a string
// //     } else if (typeof parsedBody === "object" && parsedBody !== null) {
// //       return parsedBody?.props?.children?.toString() || post.excerpt; // Convert to string
// //     }
// //     return post.excerpt;
// //   })();

// //   // // Modify the Cloudinary URL for dynamic resizing
// //   const resizedImageUrl = post.featuredImage?.image?.url
// //     ? post.featuredImage.image.url.replace(
// //         "/upload/",
// //         "/upload/w_5209,h_2736,q_auto,f_jpg/"
// //       )
// //     : "/default-image.jpg";
// //   return {
// //     title: post.title,
// //     description: parsedDescription || post.metaDescription,
// //     openGraph: {
// //       images: [resizedImageUrl],
// //     },
// //     //ogImage: resizedImageUrl,
// //     //ogUrl: `https://www.dxg.agency/post/${post.slug}`,
// //     //canonicalUrl: `https://www.dxg.agency/post/${post.slug}`, // Canonical URL
// //   };
// // }

// const inter = Inter({ subsets: ["latin"] });

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" className="h-full scroll-smooth bg-black">
//       <body
//         className={cn(
//           "relative h-full overflow-x-hidden font-sans antialiased",
//           inter.className
//         )}
//       >
//         <Navbar />
//         <main className="relative flex min-h-screen flex-col">
//           <div className="flex-1 flex-grow bg-black">{children}</div>
//         </main>
//         <Footer />
//         <TailwindIndicator />
//       </body>
//     </html>
//   );
// }
