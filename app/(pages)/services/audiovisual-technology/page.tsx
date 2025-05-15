import GetAQoute from "@/components/GetAQuote";
import Testimonial from "@/components/LandingPages/Shared/Testimonial";
import WhyDxg from "@/components/home/WhyDxg";
import { AudiovisualTechnologyBannerSection } from "@/components/Sections/AudiovisualTechnologyBannerSection";

export default function AudioVisualTechnology() {
  return (
    <div className="bg-black">
      <AudiovisualTechnologyBannerSection />
      <div className="flex flex-col gap-x-16 md:flex-row md:px-28">
        <div className="w-full p-4 md:w-1/2">
          <p
            style={{
              color: "white",
              paddingTop: "4rem",
              paddingBottom: "4rem",
              textAlign: "justify",
            }}
          >
            In event production, the power of cutting-edge audiovisual
            technology cannot be overstated. At DXG, we pride ourselves on
            providing state-of-the-art AV solutions tailored to each event&#39;s
            unique needs. Our inventory includes the latest in sound, lighting,
            video, and LED equipment, ensuring your event is not just seen and
            heard but remembered. Our skilled technicians work closely with you
            to design and implement custom AV setups that enhance your message
            and captivate your audience. From crystal-clear audio systems to
            visually stunning displays, we ensure every technical detail aligns
            perfectly with your vision. With our advanced audiovisual technology
            and expert support, your event will leave a lasting impression,
            engaging attendees and elevating your message beyond mere words.
          </p>
        </div>
        <div className="w-full p-4 md:w-1/2">
          <GetAQoute />
        </div>
      </div>
      <div className="overflow-hidden">
        <Testimonial />
      </div>

      <WhyDxg />
    </div>
  );
}
