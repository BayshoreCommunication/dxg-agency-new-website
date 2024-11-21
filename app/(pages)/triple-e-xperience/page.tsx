import { BreadCrumb } from "@/components/Breadcrumb";
import React from "react";
import EngageImage from "@/public/triple-e-xperience/dxg-agency-banner-exchange.png";
import EnlightImage from "@/public/triple-e-xperience/dxg-agency-banner-exchange.png";
import ExchangeImage from "@/public/triple-e-xperience/dxg-agency-banner-enlight.png";
import NewsLetter from "@/components/NewsLetter";
import { SectionInformationWithImage } from "@/components/Sections";
// import MaxWidthWrapper from '@/components/MaxWidthWrapper';
// import Script from 'next/script';
// import AppointmentBooking from '@/components/AppointmentBooking';
export default function TripleExperience() {
  return (
    <div className="mb-64 bg-black">
      <BreadCrumb
        buttonTitle="Book an appointment"
        description="When it comes to putting on an event, event organizers and managers need to ensure they have the right partner to deliver what we call The Triple E Xperience™"
        titleProps={{
          preText: "Triple",
          coloredText: "E",
          postText: "Xperience",
          variant: "caps",
          texAlign: "text-left",
        }}
      />
      <SectionInformationWithImage
        className="bg-differentBackground"
        sectionTitle={"Engage"}
        sectionDescription={[
          "Attendees look for interactive elements that make them feel involved and part of the event. This could be through Q&A, Polls, Hands-On Workshops or Icebreakers. The goal is to ensure attendees are not passive observers but active participants.",
        ]}
        sectionImage={EngageImage}
        sectionImageOverlay={""}
      />
      <SectionInformationWithImage
        imagePosition="left"
        sectionTitle={"Exchange"}
        sectionDescription={[
          "One of the primary reasons people attend events is to meet others in their industry with similar interests. Facilitating these connections through social events, networking sessions, and networking tools in an event app can significantly enhance the attendee experience.",
        ]}
        sectionImage={EnlightImage}
        sectionImageOverlay={""}
      />
      <SectionInformationWithImage
        className="bg-differentBackground"
        sectionTitle={"Enlight"}
        sectionDescription={[
          "The content provided during the event should be valuable, relevant, and thought-provoking. Attendees want to learn new things, gain insights and have takeaways that they can apply in their personal or professional lives. The quality of speakers, the relevance of topics, and the content delivery all contribute to the perceived value of the event.",
          "At DXG, we focus on helping make these things happen for your event!",
        ]}
        sectionImage={ExchangeImage}
        sectionImageOverlay={""}
      />
      <div className="mb-[-250px] bg-black">
        <NewsLetter />
      </div>
    </div>
  );
}
