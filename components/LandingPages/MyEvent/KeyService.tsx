// "use client";
// import React, { useState } from "react";
// import Image from "next/image";
// import { SERVICE_DATA } from "@/config/data";
// import { Icons } from "@/components/Icons";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";

// import { fadeIn, staggerContainer } from "@/lib/motion";
// import MaxWidthWrapper from "@/components/MaxWidthWrapper";
// import { MotionDiv } from "@/components/Motion";
// import { Paragraph, Title } from "@/components/Typography";
// import { BottomToTop } from "@/components/Animation";
// import ScrollMotionEffect from "../Shared/motion/ScrollMotionEffect";

// const infos = {
//   title: "Our Process",
//   description:
//     "The Successful Process ™ methodology outlines our team's process to create a successful project plan for supporting your event. We focus on transparent and proactive communication through our project management platform to ensure you, as the client, have visibility into all tasks and expectations for completion.",
// };

// const delay = 0.5;
// const iconVariants = {
//   hidden: { x: -50, opacity: 0 },
//   visible: { x: 0, opacity: 1 },
// };

// const keyServiceData = [
//   {
//     img: "/landing-pages/my-event/corporate-events.jpg",
//     title: "Innovative Solutions",
//     desc: `Our planning process is thorough and collaborative, involving state-of-the-art technology and innovative solutions to meet and exceed your expectations. With us, you're not just hosting an event but crafting an experience.`,
//   },
//   {
//     img: "/landing-pages/my-event/corporate-events.jpg",
//     // img: "/landing-pages/my-event/personal-celebrations.jpg",
//     title: "Expert Team",
//     desc: `Our planning process is thorough and collaborative, involving state-of-the-art technology and innovative solutions to meet and exceed your expectations. With us, you're not just hosting an event but crafting an experience.`,
//   },
//   {
//     img: "/landing-pages/my-event/corporate-events.jpg",
//     // img: "/landing-pages/my-event/custom-event-solutions.jpg",
//     title: "Customer Satisfaction",
//     desc: `Our planning process is thorough and collaborative, involving state-of-the-art technology and innovative solutions to meet and exceed your expectations. With us, you're not just hosting an event but crafting an experience.`,
//   },
// ];
// export default function KeyService() {
//   // Set activeIndex to accept either a number or null
//   const [activeIndex, setActiveIndex] = useState<number | null>(null);

//   return (
//     <div className="md:mb10 mb-6 bg-black lg:mb-20">
//       <MaxWidthWrapper>
//         <MotionDiv
//           variants={staggerContainer(0.2, 0.1)}
//           initial="hidden"
//           whileInView="show"
//           viewport={{ once: false, amount: 0.25 }}
//         >
//           <div className="flex flex-col  items-center py-10">
//             <Title text={infos.title} />
//             <Paragraph
//               className="text-center md:max-w-4xl"
//               key={0}
//               text={infos.description}
//             />
//           </div>
//           {/* Key Services Card */}
//           <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
//             {keyServiceData.map((item, index) => (
//               <div
//                 key={index}
//                 className="group relative overflow-hidden duration-500"
//                 onMouseEnter={() => setActiveIndex(index)}
//               >
//                 <ScrollMotionEffect effect="fade-up" duration="2000">
//                   {" "}
//                   <div>
//                     <div>
//                       <Image
//                         src={item.img}
//                         alt={item.title}
//                         width={540}
//                         height={380}
//                       />
//                     </div>
//                     <div
//                       className={`absolute bottom-0 flex w-full items-center justify-center bg-black/70 p-6 text-white duration-300 ${
//                         activeIndex === index
//                           ? "invisible opacity-0"
//                           : "visible opacity-100"
//                       }`}
//                     >
//                       <div>
//                         <h3 className="text-center text-xl font-semibold md:text-2xl">
//                           {item.title}
//                         </h3>
//                       </div>
//                     </div>
//                     <div
//                       className={`absolute bottom-0 flex w-full items-center justify-center bg-black/70 p-6 text-white duration-500 ${
//                         activeIndex === index
//                           ? "visible top-0 opacity-100"
//                           : "invisible top-full opacity-0"
//                       }`}
//                     >
//                       <div>
//                         <h3 className="text-center text-xl font-semibold md:text-2xl">
//                           {item.title}
//                         </h3>
//                         <p className="mt-4 text-center text-base opacity-70 2xl:text-xl">
//                           {item.desc}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </ScrollMotionEffect>
//               </div>
//             ))}
//           </div>
//         </MotionDiv>
//       </MaxWidthWrapper>
//     </div>
//   );
// }
"use client";
import React, { useState } from "react";
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
import ScrollMotionEffect from "../Shared/motion/ScrollMotionEffect";

const infos = {
  title: "Our Process",
  description:
    "The Successful Process ™ methodology outlines our team's process to create a successful project plan for supporting your event. We focus on transparent and proactive communication through our project management platform to ensure you, as the client, have visibility into all tasks and expectations for completion.",
};

const delay = 0.5;
const iconVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

export default function KeyService() {
  // Set activeIndex to accept either a number or null
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className=" bg-[#111617] md:py-10 py-6 lg:py-20">
      <MaxWidthWrapper>
        <MotionDiv
          variants={staggerContainer(0.2, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <div className="grid grid-cols-1 gap-6 lg:gap-10 md:grid-cols-2">
            <div className="flex flex-col text-center  lg:items-start ">
              <Title text={infos.title} className="text-center lg:text-start" />
              <Paragraph
                className="text-center lg:text-start md:max-w-4xl"
                key={0}
                text={infos.description}
              />
            </div>
            <div>
              <ScrollMotionEffect effect="fade-left" duration="1000">
                <div>
                  <Image
                    src="/landing-pages/client-success-story/successful-process-main.png"
                    alt="Event Platforms"
                    width={1920} // adjust as needed
                    height={1080} // adjust as needed
                    className="w-full h-auto max-w-2xl "
                  />
                </div>
              </ScrollMotionEffect>
            </div>
          </div>
        </MotionDiv>
      </MaxWidthWrapper>
    </div>
  );
}
