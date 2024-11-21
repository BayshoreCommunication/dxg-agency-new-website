'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Icons } from '../Icons';
import { Button } from '../ui/button';
import { P } from '../Typography';
import { MotionDiv } from '../Motion';

// export default function SupportCard() {
//   return (
//     <div
//       className={` my-10 flex h-[450px] w-[100px]  flex-col  items-center justify-around rounded-bl-full rounded-br-full rounded-tl-full rounded-tr-full bg-cover bg-center bg-no-repeat group-hover:w-[450px] group-hover:rounded-e-[80px]
//       group-hover:rounded-r-[80px]
//       group-hover:rounded-bl-[80px]
//       group-hover:rounded-br-[80px] group-hover:rounded-tl-[80px] group-hover:rounded-tr-[80px]
// `}
//       style={{
//         backgroundImage: `linear-gradient(rgba(45, 198, 245, 0.3), rgba(45, 198, 245, 0)), url('/support/production.png')`,
//       }}
//     >
//       <div className='-rotate-90 group-hover:hidden'>
//         <h1 className='py-4 text-3xl font-bold uppercase text-white'>
//           Production
//         </h1>
//       </div>
//       <div className='hidden transform flex-col items-center justify-center px-10 group-hover:flex'>
//         <div>
//           <Icons.monitor className='h-12 w-12 text-white' />
//         </div>
//         <h1 className='py-4 text-3xl font-bold uppercase text-white'>
//           Production
//         </h1>
//         <p className='text-base text-white'>
//           With the average experience of our team members being ten-plus years
//           in the event space, DXG is a sought-after resource by event planners,
//           event production companies, and event platforms.
//         </p>
//         <div className='mt-10'>
//           <Button
//             variant='outline'
//             className='rounded-full border-brand bg-transparent text-brand '
//           >
//             <Link href='/'>Learn More</Link>
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }

interface SupportCardProps {
  data: {
    id: number;
    title: string;
    imgUrl: string;
    description: string;
  };
}

export default function SupportCard({ data }: SupportCardProps) {
  const [activeCard, setActiveCard] = useState(0);

  const handleCardHover = (cardNo: number) => {
    setActiveCard(cardNo);
  };

  return (
    <div
      className={`option relative min-w-[60px] max-w-[800px] cursor-pointer overflow-hidden ${
        activeCard === data.id ? 'card-active' : ''
      }`}
      style={{
        backgroundImage: `linear-gradient(rgba(45, 198, 245, 0.6), rgba(45, 198, 245, 0)), url('/support/production2.png')`,
        transition: '0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95)',
        backgroundSize: 'auto 100%',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
      }}
      onMouseEnter={() => handleCardHover(data.id)}
      onMouseLeave={() => handleCardHover(0)}
    >
      <div className='label'>
        <div className='title'>
          {' '}
          <h1 className='text-3xl font-extrabold uppercase text-white'>
            {data.title}
          </h1>
        </div>
        <MotionDiv className='content flex flex-col items-center justify-center'>
          <div className='card-icon'>
            <Icons.monitor className='h-12 w-12 text-white' />
          </div>
          <h1 className=' py-4 text-3xl font-bold uppercase text-white'>
            {data.title}
          </h1>
          <P className=' desc px-20 text-center' text={data.description} />

          <div className='mt-10'>
            <Button
              variant='outline'
              className='rounded-full border-brand bg-transparent text-brand'
            >
              <Link href='/'>Learn More</Link>
            </Button>
          </div>
        </MotionDiv>
      </div>
    </div>
  );
}
