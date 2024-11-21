'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Playfair_Display } from 'next/font/google';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import ServiceTabContent from './ServiceTabContent';
// import ScrollMotionEffect from '../motion/ScrollMotionEffect';

const playfair = Playfair_Display({ subsets: ['latin'] });

const ServiceTabSection = () => {
  const [activeTab, setActiveTab] = useState('event-planning');

  const tabsItem = [
    {
      key: 'event-planning',
      title: 'Event Planning',
      content: `  <ol className='relative ms-3 max-w-2xl  border-s border-gray-200'>
              <li className='mb-10 ms-6'>
                <span className='absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#2DC6F5] ring-2 ring-[#2DC6F5]  '>
                  <span>1</span>
                </span>
                <div className=' ms-3'>
                  <h3 className='mb-1 text-lg font-semibold text-white '>
                    Make A Good Plan
                  </h3>
                  <p className='text-base font-normal text-white opacity-60'>
                    Register your personal data in customer service and take
                    coffee before entering the room
                  </p>
                </div>
              </li>
              <li className='mb-10 ms-6'>
                <span className='absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#2DC6F5] ring-2 ring-[#2DC6F5]  '>
                  <span>2</span>
                </span>
                <div className=' ms-3'>
                  <h3 className='mb-1 text-lg font-semibold text-white '>
                    Providing Insights
                  </h3>
                  <p className='text-base font-normal text-white opacity-60'>
                    Many early researchers are challanged by aspect of the
                    design and implementation of research studies as well the
                    efective dissemination ...
                  </p>
                </div>
              </li>
              <li className='mb-10 ms-6'>
                <span className='absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#2DC6F5] ring-2 ring-[#2DC6F5]  '>
                  <span>3</span>
                </span>
                <div className=' ms-3'>
                  <h3 className='mb-1 text-lg font-semibold text-white '>
                    Creative Solutions
                  </h3>
                  <p className='text-base font-normal text-white opacity-60'>
                    Register your personal data in customer service and take
                    food before entering the room
                  </p>
                </div>
              </li>
              <li className=' ms-6'>
                <span className='absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#2DC6F5] ring-2 ring-[#2DC6F5]  '>
                  <span>4</span>
                </span>
                <div className=' ms-3'>
                  <h3 className='mb-1 text-lg font-semibold text-white '>
                    Leveraging
                  </h3>
                  <p className='text-base font-normal text-white opacity-60'>
                    Research encompasses a cariety of investigative methods used
                    to add context and insight to the design process
                  </p>
                </div>
              </li>
            </ol>`,
    },
    {
      key: 'event-production',
      title: 'Event Production',
      content: `  <ol className='relative ms-3 max-w-2xl  border-s border-gray-200'>
              <li className='mb-10 ms-6'>
                <span className='absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#2DC6F5] ring-2 ring-[#2DC6F5]  '>
                  <span>1</span>
                </span>
                <div className=' ms-3'>
                  <h3 className='mb-1 text-lg font-semibold text-white '>
                    Make A Good Plan
                  </h3>
                  <p className='text-base font-normal text-white opacity-60'>
                    Register your personal data in customer service and take
                    coffee before entering the room
                  </p>
                </div>
              </li>
              <li className='mb-10 ms-6'>
                <span className='absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#2DC6F5] ring-2 ring-[#2DC6F5]  '>
                  <span>2</span>
                </span>
                <div className=' ms-3'>
                  <h3 className='mb-1 text-lg font-semibold text-white '>
                    Providing Insights
                  </h3>
                  <p className='text-base font-normal text-white opacity-60'>
                    Many early researchers are challanged by aspect of the
                    design and implementation of research studies as well the
                    efective dissemination ...
                  </p>
                </div>
              </li>
              <li className='mb-10 ms-6'>
                <span className='absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#2DC6F5] ring-2 ring-[#2DC6F5]  '>
                  <span>3</span>
                </span>
                <div className=' ms-3'>
                  <h3 className='mb-1 text-lg font-semibold text-white '>
                    Creative Solutions
                  </h3>
                  <p className='text-base font-normal text-white opacity-60'>
                    Register your personal data in customer service and take
                    food before entering the room
                  </p>
                </div>
              </li>
              <li className=' ms-6'>
                <span className='absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#2DC6F5] ring-2 ring-[#2DC6F5]  '>
                  <span>4</span>
                </span>
                <div className=' ms-3'>
                  <h3 className='mb-1 text-lg font-semibold text-white '>
                    Leveraging
                  </h3>
                  <p className='text-base font-normal text-white opacity-60'>
                    Research encompasses a cariety of investigative methods used
                    to add context and insight to the design process
                  </p>
                </div>
              </li>
            </ol>`,
    },
    {
      key: 'event-platforms',
      title: 'Event Platforms',
      content: `  <ol className='relative ms-3 max-w-2xl  border-s border-gray-200'>
              <li className='mb-10 ms-6'>
                <span className='absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#2DC6F5] ring-2 ring-[#2DC6F5]  '>
                  <span>1</span>
                </span>
                <div className=' ms-3'>
                  <h3 className='mb-1 text-lg font-semibold text-white '>
                    Make A Good Plan
                  </h3>
                  <p className='text-base font-normal text-white opacity-60'>
                    Register your personal data in customer service and take
                    coffee before entering the room
                  </p>
                </div>
              </li>
              <li className='mb-10 ms-6'>
                <span className='absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#2DC6F5] ring-2 ring-[#2DC6F5]  '>
                  <span>2</span>
                </span>
                <div className=' ms-3'>
                  <h3 className='mb-1 text-lg font-semibold text-white '>
                    Providing Insights
                  </h3>
                  <p className='text-base font-normal text-white opacity-60'>
                    Many early researchers are challanged by aspect of the
                    design and implementation of research studies as well the
                    efective dissemination ...
                  </p>
                </div>
              </li>
              <li className='mb-10 ms-6'>
                <span className='absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#2DC6F5] ring-2 ring-[#2DC6F5]  '>
                  <span>3</span>
                </span>
                <div className=' ms-3'>
                  <h3 className='mb-1 text-lg font-semibold text-white '>
                    Creative Solutions
                  </h3>
                  <p className='text-base font-normal text-white opacity-60'>
                    Register your personal data in customer service and take
                    food before entering the room
                  </p>
                </div>
              </li>
              <li className=' ms-6'>
                <span className='absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-[#2DC6F5] ring-2 ring-[#2DC6F5]  '>
                  <span>4</span>
                </span>
                <div className=' ms-3'>
                  <h3 className='mb-1 text-lg font-semibold text-white '>
                    Leveraging
                  </h3>
                  <p className='text-base font-normal text-white opacity-60'>
                    Research encompasses a cariety of investigative methods used
                    to add context and insight to the design process
                  </p>
                </div>
              </li>
            </ol>`,
    },
  ];

  return (
    <div className=''>
      {/* <ScrollMotionEffect effect='fade-up' duration='2000'> */}
      <div className=' flex w-full border-b-4 border-white border-opacity-20 text-center text-base font-medium  text-white'>
        {tabsItem.map((tab, index) => (
          <div key={tab?.key} className=' -mb-1 flex flex-wrap'>
            <button
              className={`border-b-4 border-transparent p-4 text-lg   hover:border-white hover:text-white md:text-2xl ${
                activeTab === tab?.key
                  ? 'border-white text-white'
                  : 'text-gray-500'
              }`}
              onClick={() => setActiveTab(tab?.key)}
            >
              {tab?.title}
            </button>
            {activeTab === tab?.key && (
              <motion.div
                // className='absolute bottom-0 left-0 right-0 h-[2px] bg-primary'
                layoutId='underline'
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </div>
        ))}
      </div>
      {/* </ScrollMotionEffect> */}

      <motion.div
        key={activeTab}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <ServiceTabContent activeTab={activeTab} data={tabsItem} />
      </motion.div>
    </div>
  );
};

export default ServiceTabSection;
