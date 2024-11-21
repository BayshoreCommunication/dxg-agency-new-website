import ExclusiveOffer from '@/components/LandingPages/Discount/ExclusiveOffer';
import HeroSection from '@/components/LandingPages/Discount/HeroSection';
import LimitedTimeOffer from '@/components/LandingPages/Discount/LimitedTimeOffer';
import CallToAction from '@/components/LandingPages/Shared/CallToAction';
import NewsLetter from '@/components/NewsLetter';

const page = () => {
  return (
    <div>
      {/* Components */}
      <HeroSection />
      <ExclusiveOffer />
      <NewsLetter />
      <CallToAction />
      <LimitedTimeOffer />
    </div>
  );
};

export default page;
