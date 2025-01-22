import GetAQoute from "@/components/GetAQuote";
import Testimonial from "@/components/Testimonial";
import WhyDxg from "@/components/home/WhyDxg";
import { VideoProductionPhotographySection } from "@/components/Sections/VideoProductionPhotographySection";

export default function GraphicsAnimation() {
  return (
    <div className="bg-black">
      <VideoProductionPhotographySection />
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
            Capturing the essence and energy of your event is an art, and at
            DXG, our Photography and Videography services excel in this art. We
            understand that each event is a unique story waiting to be told, and
            our professional photographers and videographers are masters at
            narrating these stories through stunning visuals. With a keen eye
            for detail and a passion for perfection, we document your event as
            it happens and the emotions and moments that define it. From candid
            shots that capture the spirit of the occasion to high-definition
            videos that bring the event&#39;s narrative to life, our visual
            storytelling ensures that the memories of your event endure long
            after the final curtain. Our approach is unobtrusive yet
            comprehensive, ensuring that we capture the essence of your event
            from every angle without disrupting the experience. With our
            photography and videography, your event is not just an occasion but
            a timeless story beautifully preserved.
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
