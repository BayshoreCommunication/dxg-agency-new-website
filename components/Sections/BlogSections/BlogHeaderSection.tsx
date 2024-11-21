import { BreadCrumb } from '@/components/Breadcrumb';

export const BlogHeaderSection = () => {
  return (
    <BreadCrumb
      titleProps={{
        coloredText: 'our',
        postText: 'blog',
        texAlign: 'text-left',
        variant: 'caps',
      }}
      buttonTitle='Book An Appointment'
      description='At DXG, we&#39;re more than just event planners. We&#39;re dream weavers, experience architects, and memory makers. We believe every event is a blank canvas, waiting to be transformed into a masterpiece. Whether it&#39;s a corporate gala under the stars, a product launch that electrifies the room, we pour our hearts and expertise into crafting unforgettable moments.'
    />
  );
};
