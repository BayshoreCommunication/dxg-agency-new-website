import React from 'react';

const ClientMap = () => {
  const mapStyle = {
    border: 0,
    filter: 'grayscale(100%) invert(100%)',
  };
  return (
    <div className='w'>
      <div className='relative h-[600px] w-full'>
        <iframe
          className='absolute left-0 top-0 h-full w-full bg-slate-500'
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25753.041103557516!2d-86.7095192318535!3d36.21203168324632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886469d0b7c096ff%3A0x3ac9507e8aa057bb!2sGaylord%20Opryland%20Resort%20%26%20Convention%20Center!5e0!3m2!1sen!2sbd!4v1723736652919!5m2!1sen!2sbd'
          width='600'
          height='450'
          style={mapStyle}
          loading='lazy'
        ></iframe>
      </div>
    </div>
  );
};

export default ClientMap;
