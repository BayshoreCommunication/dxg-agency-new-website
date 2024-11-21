import Events from '@/components/LandingPages/ClientSuccessStory/Events';
import HeroSection from '@/components/LandingPages/ClientSuccessStory/HeroSection';
import OurSuccessfulEvents from '@/components/LandingPages/ClientSuccessStory/OurSuccessfulEvents';
import WorkProcess from '@/components/LandingPages/ClientSuccessStory/WorkProcess';
import CallToAction from '@/components/LandingPages/Shared/CallToAction';
import Testimonial from '@/components/LandingPages/Shared/Testimonial';
import NewsLetter from '@/components/NewsLetter';

const page = () => {
  return (
    <div>
      {/* My Events Components */}
      <HeroSection />
      <Events />
      <WorkProcess />
      <CallToAction />
      <Testimonial />
      <OurSuccessfulEvents />
      <NewsLetter />
    </div>
  );
};

export default page;
