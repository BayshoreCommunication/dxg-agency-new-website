import React from "react";
import parse from "html-react-parser";

// interface ServiceTabProps {
//   activeTab: any;
//   data: any;
// }

const ServiceTabContent = ({
  activeTab,
  data,
}: {
  activeTab: any;
  data: any;
}) => {
  const tabData = data?.find((el: any, index: any) => el?.key === activeTab);
  return (
    <div>
      <div className="mt-8 grid grid-cols-1 md:mt-10">
        <div>{parse(tabData?.content)}</div>
      </div>
    </div>
  );
};

export default ServiceTabContent;
