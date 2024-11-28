import NewsLetter from "@/components/NewsLetter";
import { BannerSection } from "@/components/Sections";
import Testimonial from "@/components/Testimonial";
//import Overview from "@/components/home/Overview";
import Services from "@/components/home/Services";
import WeAre from "@/components/home/WeAre";
import WeSupport from "@/components/home/WeSupport";
import WhyDxg from "@/components/home/WhyDxg";
export default function Home() {
  return (
    <div className="overflow-x-hidden bg-black">
      <BannerSection />
      {/* <Overview /> */}
      <WeAre />
      <Services />
      <WeSupport />
      <WhyDxg />
      {/* <OurBlogSection /> */}
      <Testimonial />
      <div className="bg-black">
        <NewsLetter />
      </div>
    </div>
  );
}
