import HeroSection from '@/components/LandingPages/ConsultationSchedule/HeroSection';
import WhyYouChooseDXG from '@/components/LandingPages/ConsultationSchedule/WhyYouChooseDXG';
import CallToAction from '@/components/LandingPages/Shared/CallToAction';
import GetInTouch from '@/components/LandingPages/Shared/GetInTouch';

const page = () => {
  return (
    <div>
      {/* Consultation Schedule Components */}
      <HeroSection />
      <WhyYouChooseDXG />
      <CallToAction />
      <GetInTouch />
    </div>
  );
};

export default page;
