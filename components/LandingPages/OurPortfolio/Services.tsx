// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import { staggerContainer } from "@/lib/motion";
// import MaxWidthWrapper from "@/components/MaxWidthWrapper";
// import { MotionDiv } from "@/components/Motion";
// import { Paragraph, Title } from "@/components/Typography";
// import { FaArrowRightLong } from "react-icons/fa6";
// import Link from "next/link";
// import ServiceModal from "./ServiceModal";
// import ScrollMotionEffect from "../Shared/motion/ScrollMotionEffect";

// const infos = {
//   title: "Problems We Solve",
//   description:
//     "Whether you need us to produce, project manage, or be a complete turnkey partner, DXG Agency has the resources and experience to deliver several solutions that fit your needs.",
// };

// const keyServiceData = [
//   {
//     img: "/landing-pages/our-portfolio/production-management.jpg",
//     title: "Production Management",
//     desc: `  <div className='flex flex-col gap-4'>
//               <div className=' flex gap-2 text-white'>
//                 <h5 className=' text-xl !font-medium'>01.</h5>
//                 <div>
//                   <h5 className='mb-2 text-xl !font-medium'>Event Logistics</h5>
//                   <p>
//                     At DXG, we handle every detail to ensure your event runs
//                     smoothly. From coordinating transportation to managing
//                     on-site event flow, our logistics team ensures that
//                     everything is in place, on time, and seamless.
//                   </p>
//                 </div>
//               </div>
//               <div className=' flex gap-2 text-white'>
//                 <h5 className=' text-xl !font-medium'>02.</h5>
//                 <div>
//                   <h5 className='mb-2 text-xl !font-medium'>
//                     Venue Selections
//                   </h5>
//                   <p>
//                     Choosing the right venue is critical to the success of any
//                     event. Whether it's a corporate gala or an intimate
//                     celebration, we provide an extensive list of venues that
//                     align with your event’s theme, size, and budget.
//                   </p>
//                 </div>
//               </div>
//               <div className=' flex gap-2 text-white'>
//                 <h5 className=' text-xl !font-medium'>03.</h5>
//                 <div>
//                   <h5 className='mb-2 text-xl !font-medium'>
//                     Catering Services
//                   </h5>
//                   <p>
//                     Our catering partners are among the best, offering a wide
//                     variety of menu options. Whether you're looking for
//                     gourmet, casual, or themed dining experiences, we ensure
//                     your guests are served delicious and memorable meals.
//                   </p>
//                 </div>
//               </div>
//               <div className=' flex gap-2 text-white'>
//                 <h5 className=' text-xl !font-medium'>04.</h5>
//                 <div>
//                   <h5 className='mb-2 text-xl !font-medium'>
//                     Entertainment and Speakers
//                   </h5>
//                   <p>
//                     We work closely with top entertainers and keynote speakers,
//                     tailoring the experience to fit your event's goals. From
//                     live performances to engaging talks, we curate a lineup that
//                     will captivate your audience.
//                   </p>
//                 </div>
//               </div>
//             </div>`,
//   },
//   {
//     img: "/landing-pages/our-portfolio/audiovisual-technology.jpg",
//     title: "Audiovisual Technology",
//     desc: `  <div className='flex flex-col gap-4'>
//               <div className=' flex gap-2 text-white'>
//                 <h5 className=' text-xl !font-medium'>01.</h5>
//                 <div>
//                   <h5 className='mb-2 text-xl !font-medium'>Event Logistics</h5>
//                   <p>
//                     At DXG, we handle every detail to ensure your event runs
//                     smoothly. From coordinating transportation to managing
//                     on-site event flow, our logistics team ensures that
//                     everything is in place, on time, and seamless.
//                   </p>
//                 </div>
//               </div>
//               <div className=' flex gap-2 text-white'>
//                 <h5 className=' text-xl !font-medium'>02.</h5>
//                 <div>
//                   <h5 className='mb-2 text-xl !font-medium'>
//                     Venue Selections
//                   </h5>
//                   <p>
//                     Choosing the right venue is critical to the success of any
//                     event. Whether it's a corporate gala or an intimate
//                     celebration, we provide an extensive list of venues that
//                     align with your event’s theme, size, and budget.
//                   </p>
//                 </div>
//               </div>
//               <div className=' flex gap-2 text-white'>
//                 <h5 className=' text-xl !font-medium'>03.</h5>
//                 <div>
//                   <h5 className='mb-2 text-xl !font-medium'>
//                     Catering Services
//                   </h5>
//                   <p>
//                     Our catering partners are among the best, offering a wide
//                     variety of menu options. Whether you're looking for
//                     gourmet, casual, or themed dining experiences, we ensure
//                     your guests are served delicious and memorable meals.
//                   </p>
//                 </div>
//               </div>
//               <div className=' flex gap-2 text-white'>
//                 <h5 className=' text-xl !font-medium'>04.</h5>
//                 <div>
//                   <h5 className='mb-2 text-xl !font-medium'>
//                     Entertainment and Speakers
//                   </h5>
//                   <p>
//                     We work closely with top entertainers and keynote speakers,
//                     tailoring the experience to fit your event's goals. From
//                     live performances to engaging talks, we curate a lineup that
//                     will captivate your audience.
//                   </p>
//                 </div>
//               </div>
//             </div>`,
//   },
//   {
//     img: "/landing-pages/our-portfolio/event-platform-services.jpg",
//     title: "Event Platform Services",
//     desc: `  <div className='flex flex-col gap-4'>
//               <div className=' flex gap-2 text-white'>
//                 <h5 className=' text-xl !font-medium'>01.</h5>
//                 <div>
//                   <h5 className='mb-2 text-xl !font-medium'>Event Logistics</h5>
//                   <p>
//                     At DXG, we handle every detail to ensure your event runs
//                     smoothly. From coordinating transportation to managing
//                     on-site event flow, our logistics team ensures that
//                     everything is in place, on time, and seamless.
//                   </p>
//                 </div>
//               </div>
//               <div className=' flex gap-2 text-white'>
//                 <h5 className=' text-xl !font-medium'>02.</h5>
//                 <div>
//                   <h5 className='mb-2 text-xl !font-medium'>
//                     Venue Selections
//                   </h5>
//                   <p>
//                     Choosing the right venue is critical to the success of any
//                     event. Whether it's a corporate gala or an intimate
//                     celebration, we provide an extensive list of venues that
//                     align with your event’s theme, size, and budget.
//                   </p>
//                 </div>
//               </div>
//               <div className=' flex gap-2 text-white'>
//                 <h5 className=' text-xl !font-medium'>03.</h5>
//                 <div>
//                   <h5 className='mb-2 text-xl !font-medium'>
//                     Catering Services
//                   </h5>
//                   <p>
//                     Our catering partners are among the best, offering a wide
//                     variety of menu options. Whether you're looking for
//                     gourmet, casual, or themed dining experiences, we ensure
//                     your guests are served delicious and memorable meals.
//                   </p>
//                 </div>
//               </div>
//               <div className=' flex gap-2 text-white'>
//                 <h5 className=' text-xl !font-medium'>04.</h5>
//                 <div>
//                   <h5 className='mb-2 text-xl !font-medium'>
//                     Entertainment and Speakers
//                   </h5>
//                   <p>
//                     We work closely with top entertainers and keynote speakers,
//                     tailoring the experience to fit your event's goals. From
//                     live performances to engaging talks, we curate a lineup that
//                     will captivate your audience.
//                   </p>
//                 </div>
//               </div>
//             </div>`,
//   },
//   {
//     img: "/landing-pages/our-portfolio/event-experience-design.jpg",
//     title: "Event Experience Design",
//     desc: `  <div className='flex flex-col gap-4'>
//               <div className=' flex gap-2 text-white'>
//                 <h5 className=' text-xl !font-medium'>01.</h5>
//                 <div>
//                   <h5 className='mb-2 text-xl !font-medium'>Event Logistics</h5>
//                   <p>
//                     At DXG, we handle every detail to ensure your event runs
//                     smoothly. From coordinating transportation to managing
//                     on-site event flow, our logistics team ensures that
//                     everything is in place, on time, and seamless.
//                   </p>
//                 </div>
//               </div>
//               <div className=' flex gap-2 text-white'>
//                 <h5 className=' text-xl !font-medium'>02.</h5>
//                 <div>
//                   <h5 className='mb-2 text-xl !font-medium'>
//                     Venue Selections
//                   </h5>
//                   <p>
//                     Choosing the right venue is critical to the success of any
//                     event. Whether it's a corporate gala or an intimate
//                     celebration, we provide an extensive list of venues that
//                     align with your event’s theme, size, and budget.
//                   </p>
//                 </div>
//               </div>
//               <div className=' flex gap-2 text-white'>
//                 <h5 className=' text-xl !font-medium'>03.</h5>
//                 <div>
//                   <h5 className='mb-2 text-xl !font-medium'>
//                     Catering Services
//                   </h5>
//                   <p>
//                     Our catering partners are among the best, offering a wide
//                     variety of menu options. Whether you're looking for
//                     gourmet, casual, or themed dining experiences, we ensure
//                     your guests are served delicious and memorable meals.
//                   </p>
//                 </div>
//               </div>
//               <div className=' flex gap-2 text-white'>
//                 <h5 className=' text-xl !font-medium'>04.</h5>
//                 <div>
//                   <h5 className='mb-2 text-xl !font-medium'>
//                     Entertainment and Speakers
//                   </h5>
//                   <p>
//                     We work closely with top entertainers and keynote speakers,
//                     tailoring the experience to fit your event's goals. From
//                     live performances to engaging talks, we curate a lineup that
//                     will captivate your audience.
//                   </p>
//                 </div>
//               </div>
//             </div>`,
//   },
//   {
//     img: "/landing-pages/our-portfolio/graphics-and-animation.jpg",
//     title: "Graphics & Animation",
//     desc: `  <div className='flex flex-col gap-4'>
//               <div className=' flex gap-2 text-white'>
//                 <h5 className=' text-xl !font-medium'>01.</h5>
//                 <div>
//                   <h5 className='mb-2 text-xl !font-medium'>Event Logistics</h5>
//                   <p>
//                     At DXG, we handle every detail to ensure your event runs
//                     smoothly. From coordinating transportation to managing
//                     on-site event flow, our logistics team ensures that
//                     everything is in place, on time, and seamless.
//                   </p>
//                 </div>
//               </div>
//               <div className=' flex gap-2 text-white'>
//                 <h5 className=' text-xl !font-medium'>02.</h5>
//                 <div>
//                   <h5 className='mb-2 text-xl !font-medium'>
//                     Venue Selections
//                   </h5>
//                   <p>
//                     Choosing the right venue is critical to the success of any
//                     event. Whether it's a corporate gala or an intimate
//                     celebration, we provide an extensive list of venues that
//                     align with your event’s theme, size, and budget.
//                   </p>
//                 </div>
//               </div>
//               <div className=' flex gap-2 text-white'>
//                 <h5 className=' text-xl !font-medium'>03.</h5>
//                 <div>
//                   <h5 className='mb-2 text-xl !font-medium'>
//                     Catering Services
//                   </h5>
//                   <p>
//                     Our catering partners are among the best, offering a wide
//                     variety of menu options. Whether you're looking for
//                     gourmet, casual, or themed dining experiences, we ensure
//                     your guests are served delicious and memorable meals.
//                   </p>
//                 </div>
//               </div>
//               <div className=' flex gap-2 text-white'>
//                 <h5 className=' text-xl !font-medium'>04.</h5>
//                 <div>
//                   <h5 className='mb-2 text-xl !font-medium'>
//                     Entertainment and Speakers
//                   </h5>
//                   <p>
//                     We work closely with top entertainers and keynote speakers,
//                     tailoring the experience to fit your event’s goals. From
//                     live performances to engaging talks, we curate a lineup that
//                     will captivate your audience.
//                   </p>
//                 </div>
//               </div>
//             </div>`,
//   },
//   {
//     img: "/landing-pages/our-portfolio/photography-and-videography.jpg",
//     title: "Photography & Videography",
//     desc: `  <div className='flex flex-col gap-4'>
//               <div className=' flex gap-2 text-white'>
//                 <h5 className=' text-xl !font-medium'>01.</h5>
//                 <div>
//                   <h5 className='mb-2 text-xl !font-medium'>Event Logistics</h5>
//                   <p>
//                     At DXG, we handle every detail to ensure your event runs
//                     smoothly. From coordinating transportation to managing
//                     on-site event flow, our logistics team ensures that
//                     everything is in place, on time, and seamless.
//                   </p>
//                 </div>
//               </div>
//               <div className=' flex gap-2 text-white'>
//                 <h5 className=' text-xl !font-medium'>02.</h5>
//                 <div>
//                   <h5 className='mb-2 text-xl !font-medium'>
//                     Venue Selections
//                   </h5>
//                   <p>
//                     Choosing the right venue is critical to the success of any
//                     event. Whether it's a corporate gala or an intimate
//                     celebration, we provide an extensive list of venues that
//                     align with your event’s theme, size, and budget.
//                   </p>
//                 </div>
//               </div>
//               <div className=' flex gap-2 text-white'>
//                 <h5 className=' text-xl !font-medium'>03.</h5>
//                 <div>
//                   <h5 className='mb-2 text-xl !font-medium'>
//                     Catering Services
//                   </h5>
//                   <p>
//                     Our catering partners are among the best, offering a wide
//                     variety of menu options. Whether you're looking for
//                     gourmet, casual, or themed dining experiences, we ensure
//                     your guests are served delicious and memorable meals.
//                   </p>
//                 </div>
//               </div>
//               <div className=' flex gap-2 text-white'>
//                 <h5 className=' text-xl !font-medium'>04.</h5>
//                 <div>
//                   <h5 className='mb-2 text-xl !font-medium'>
//                     Entertainment and Speakers
//                   </h5>
//                   <p>
//                     We work closely with top entertainers and keynote speakers,
//                     tailoring the experience to fit your event’s goals. From
//                     live performances to engaging talks, we curate a lineup that
//                     will captivate your audience.
//                   </p>
//                 </div>
//               </div>
//             </div>`,
//   },
// ];

// export default function KeyService() {
//   const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
//   const [selectModal, setSelectModal] = useState<number>(0);

//   return (
//     <div className="md:mb10 mb-6 bg-black lg:mb-20">
//       <MaxWidthWrapper>
//         <MotionDiv
//           variants={staggerContainer(0.2, 0.1)}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: false, amount: 0.25 }}
//         >
//           <div className="flex flex-col items-center py-10">
//             <Title text={infos.title} />
//             <Paragraph
//               className="text-center md:max-w-4xl"
//               text={infos.description}
//             />
//           </div>
//           <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
//             {keyServiceData.map((item, index) => (
//               <div
//                 key={index}
//                 className="group relative overflow-hidden rounded-xl duration-500 md:rounded-[30px]"
//                 onClick={() => setSelectModal(index)}
//               >
//                 <ScrollMotionEffect effect="fade-up" duration="2000">
//                   <div>
//                     <Image
//                       src={item.img}
//                       alt={item.title}
//                       width={540}
//                       height={380}
//                       className="w-full"
//                     />
//                     <div className="absolute bottom-0 flex w-full items-center justify-between p-5 md:p-8 2xl:p-10">
//                       <h3 className="max-w-[60%] text-xl font-semibold text-white md:text-2xl 2xl:text-3xl">
//                         {item.title}
//                       </h3>
//                       <button
//                         onClick={() => setIsModalOpen(true)}
//                         className="inline-block rounded-full bg-white bg-opacity-20 p-3 duration-300 hover:bg-[#2DC6F5] group-hover:-rotate-45 group-hover:bg-opacity-100 md:p-4"
//                       >
//                         <FaArrowRightLong className="text-xl text-white group-hover:text-primary 2xl:text-2xl" />
//                       </button>
//                     </div>
//                   </div>
//                 </ScrollMotionEffect>
//               </div>
//             ))}
//           </div>
//         </MotionDiv>
//       </MaxWidthWrapper>
//       <ServiceModal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         data={keyServiceData}
//         selectModal={selectModal}
//       />
//     </div>
//   );
// }

"use client";
import React from "react";
import Image from "next/image";
import { SERVICE_DATA } from "@/config/data";
import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { fadeIn, staggerContainer } from "@/lib/motion";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { MotionDiv } from "@/components/Motion";
import { Paragraph, Title } from "@/components/Typography";
import { BottomToTop } from "@/components/Animation";

const infos = {
  title: "Problems We Solve",
  description:
    "Whether you need us to produce, project manage, or be a complete turnkey partner, DXG Agency has the resources and experience to deliver several solutions that fit your needs.",
};

const delay = 0.5;
const iconVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

export default function Services() {
  return (
    <div className="bg-black py-3 md:py-10">
      <MaxWidthWrapper>
        <MotionDiv
          variants={staggerContainer(0.2, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <div className="flex flex-col  items-center py-10">
            <Title text={infos.title} />
            <Paragraph
              className="text-center md:max-w-4xl"
              key={0}
              text={infos.description}
            />
          </div>
          <div>
            {/* <div className="flex flex-col  items-center">
              <h3 className="mb-4 lg:mb-8 text-4xl font-bold leading-10 text-white">
                <span className="border-b border-b-brand text-brand">Core</span>
                 Service
              </h3>
            </div> */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 xl:gap-6">
              {SERVICE_DATA.map((item, index) => {
                return (
                  // <MotionDiv
                  //   variants={fadeIn("right", "tween", index * 0.2, 0.75)}
                  //   key={index}
                  //   className={`min-h-[200px] flex-1 justify-center overflow-hidden border border-gray-400 bg-cover bg-center bg-no-repeat md:min-h-[420px]`}
                  //   style={{ backgroundImage: `url('${item.image}')` }}
                  // ></MotionDiv>

                  <div
                    key={index}
                    className="min-h-[300px] 2xl:min-h-[400px]  flex-1 justify-center overflow-hidden   bg-cover bg-center bg-no-repeat  rounded-xl duration-500 md:rounded-[35px]"
                    style={{ backgroundImage: `url('${item.image}')` }}
                  >
                    <Link href={`${item.url}`}>
                      <div className="group relative h-full w-full bg-black bg-opacity-50 transition duration-300 hover:bg-sky-700 hover:bg-opacity-80">
                        {/* Before Hover */}
                        <div className="absolute inset-0 z-10 flex h-full w-full items-end justify-between px-6 py-6 xl:px-10 xl:py-10 group-hover:hidden ">
                          <div className="flex items-center justify-between gap-2 w-full">
                            <div>
                              {item.heading.split(";").map((word, idx) => (
                                <h2
                                  key={idx}
                                  className="font-semibold  md:text-xl 2xl:text-2xl uppercase text-white"
                                >
                                  {word}
                                </h2>
                              ))}
                            </div>
                            <div className="flex justify-center">
                              <Icons.customArrowUp className="h-14 w-14  text-white" />
                            </div>
                          </div>
                        </div>

                        {/* On Hover */}
                        <MotionDiv
                          transition={{
                            duration: 0.4,
                            delay,
                            type: "easeInOut",
                            staggerChildren: 0.5,
                            staggerDirection: -1,
                          }}
                          className="absolute inset-0 z-20 hidden h-full w-full flex-col p-6 lg:p-10 group-hover:flex items-end"
                        >
                          <MotionDiv className=" h-full">
                            <h2 className="font-semibold text-base  xl:text-xl 2xl:text-2xl uppercase text-white">
                              {item.title}
                            </h2>
                            <p
                              className="mt-3 text-base text-white"
                              style={{
                                wordWrap: "break-word",
                                overflow: "hidden",
                                whiteSpace: "normal",
                                textOverflow: "ellipsis",
                                display: "-webkit-box",
                                WebkitBoxOrient: "vertical",
                                WebkitLineClamp: 15,
                                lineHeight: "18px",
                                textAlign: "left",
                              }}
                            >
                              {item.excerpt}
                            </p>
                          </MotionDiv>
                          <MotionDiv
                            className="flex justify-center pt-4"
                            initial="hidden"
                            animate="visible"
                            variants={iconVariants}
                            transition={{ duration: 0.5 }}
                          >
                            <Icons.customRightArrow className="h-14 w-14 duration-500 text-white" />
                          </MotionDiv>
                        </MotionDiv>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </MotionDiv>
      </MaxWidthWrapper>
    </div>
  );
}
