import CallToAction from '@/components/LandingPages/Shared/CallToAction';
import HeroSection from '@/components/LandingPages/OurPortfolio/HeroSection';
import OurEventGallery from '@/components/LandingPages/OurPortfolio/OurEventGallery';
import Services from '@/components/LandingPages/OurPortfolio/Services';
import React from 'react';

const page = () => {
  return (
    <div>
      {/* My Events Components */}
      <HeroSection />
      <Services />
      <CallToAction />
      <OurEventGallery />
    </div>
  );
};

export default page;
