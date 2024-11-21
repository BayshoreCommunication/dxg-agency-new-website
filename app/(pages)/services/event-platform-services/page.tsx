import GetAQoute from '@/components/GetAQuote';
import Testimonial from '@/components/Testimonial';
import WhyDxg from '@/components/home/WhyDxg';
import { VirtualHybridEventsSection } from '@/components/Sections/VirtualHybridEventsSection';

export default function VirtualHybridEvents() {
  return (
    <div className='bg-black'>
      <VirtualHybridEventsSection />
      <div className='flex flex-col gap-x-16 md:flex-row md:px-28'>
        <div className='w-full p-4 md:w-1/2'>
          <p
            style={{
              color: 'white',
              paddingTop: '4rem',
              paddingBottom: '4rem',
              textAlign: 'justify',
            }}
          >
            In today&#39;s digital-first world, an event&#39;s success often
            hinges on the robustness and intuitiveness of its digital platform.
            At DXG, our Event Platform Services are designed to bridge the gap
            between physical and digital event experiences. We offer a range of
            digital solutions, from live streaming to session records and
            virtual event platforms for live and on-demand viewing, ensuring
            your event easily reaches a global audience. Our platforms are
            user-friendly, highly interactive, and customizable to suit the
            specific needs of your event. Whether it&#39;s a hybrid conference,
            a virtual seminar, or an online product launch, our platforms
            facilitate seamless engagement, allowing attendees to connect,
            interact, and participate anywhere in the world. We integrate the
            latest digital technology to provide stable, secure, and scalable
            solutions, ensuring that your event is not just a broadcast but a
            fully immersive digital experience.
          </p>
        </div>
        <div className='w-full p-4 md:w-1/2'>
          <GetAQoute />
        </div>
      </div>
      <Testimonial />
      <WhyDxg />
    </div>
  );
}
