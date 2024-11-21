import { BreadCrumbWithoutButton } from '@/components/BreadcrumbWithoutButton';

export const EventExperienceDesignBannerSection = () => {
  return (
    <BreadCrumbWithoutButton
      titleProps={{
        coloredText: 'Event Experience',
        postText: 'Design',
        texAlign: 'text-center',
        variant: 'caps',
      }}
      buttonTitle='Book An Appointment'
      description='Demo Digital Xperience Group (DXG), a pioneering division of WLJ Consulting, is a premier partner in transforming events into unforgettable experiences. With our roots firmly planted in the event hospitality industry. We pride ourselves on elevating the digital and production quality of in-person, virtual, and hybrid events.'
      bgImage='/banner/Event%20Experience%20Design_bnr.png' // Add your image URL here
    />
  );
};
