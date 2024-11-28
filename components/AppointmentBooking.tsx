"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Icons } from "./Icons";
import { SITECONFIG } from "@/config/site";

interface AppointmentBookingProps {
  buttonTitle: string;
}

const AppointmentBooking: React.FC<AppointmentBookingProps> = ({
  buttonTitle,
}) => {
  const [isIframeVisible] = useState(false);

  const renderIframe = () => {
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
    const url = SITECONFIG.appointmentBookingUrl;
    const JSElement = document.createElement("iframe");
    const width = window.innerWidth <= 1024 ? "90%" : "1100px";
    JSElement.src = url;
    JSElement.setAttribute(
      "style",
      `width: ${width}; height: 500px; position: fixed; top: 100px; left: 0; right: 0; margin: 0 auto; background: #fff; border: 1px solid #30c6f5; border-radius: 24px;`
    );
    document.getElementById("embed")!.appendChild(JSElement);
  };

  const closeIframe = () => {
    const embed = document.getElementById("embed")!;
    const iframe = embed.getElementsByTagName("iframe")[0];
    iframe.remove();
    embed.style.display = "none";
    document.getElementsByTagName("body")[0].style.overflow = "";
  };

  const handleButtonClick = () => {
    renderIframe();
    document.getElementById("embed")!.style.display = "block";
  };

  return (
    <>
      <Button
        variant="dashed"
        className="mt-5 rounded-full px-10 py-3 capitalize md:px-14 lg:px-24"
        onClick={handleButtonClick}
      >
        {buttonTitle}
      </Button>
      <div
        id="embed"
        style={{
          display: isIframeVisible ? "block" : "none",
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          background: "rgba(0,0,0,0.4)",
          zIndex: 1000,
        }}
      >
        <Button
          className="absolute left-[75%] top-[120px] z-[32] rounded-full bg-brand"
          size="icon"
          onClick={closeIframe}
        >
          <Icons.cancel className="h-8 w-8" />
        </Button>
      </div>
    </>
  );
};

export default AppointmentBooking;
