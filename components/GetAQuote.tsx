import React from 'react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
export default function GetAQuote() {
  return (
    <>
      <div className='py-0 md:py-16 '>
        <div
          className=''
          style={{
            backgroundColor: 'rgb(45,198,245)',
            padding: '3%',
            borderRadius: '6px',
          }}
        >
          <div className='col-span-2 mt-5 md:ml-2 md:mt-0'>
            <h1 className='text-center text-2xl font-semibold capitalize text-white md:text-center md:text-3xl'>
              Get a Quote
            </h1>
            <br></br>
            <br></br>
            <Input className='mb-4' placeholder='Name' />
            <Input className='mb-4' placeholder='Email' />
            <Button className='subscribe-hover w-full bg-slate-800'>
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
