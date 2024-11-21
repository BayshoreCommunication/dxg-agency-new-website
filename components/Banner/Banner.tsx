import React from 'react';

interface BannerProps {
  bgImage: string;
}

const Banner: React.FC<BannerProps> = ({ bgImage }) => {
  return (
    <div
      style={{ backgroundImage: `url(${bgImage})` }}
      className='w-full min-h-[300px] bg-cover bg-no-repeat'
    >
    </div>
  );
};

export default Banner;
