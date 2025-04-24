import React from "react";
import parse from "html-react-parser";
import Image from "next/image";

// interface ServiceTabProps {
//   activeTab: any;
//   data: any;
// }

const ServiceTabContent = ({
  activeTab,
  data,
}: {
  activeTab: string;
  data: { key: string; title: string; image: string }[];
}) => {
  const tabData = data.find((el) => el.key === activeTab);

  if (!tabData) return null;

  return (
    <div>
      <div className="mt-8 grid grid-cols-1 md:mt-10">
        <div>
          <Image
            src={tabData.image}
            alt={tabData.title}
            width={1920} // adjust as needed
            height={1080} // adjust as needed
            className="w-full h-auto max-w-xl "
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceTabContent;
