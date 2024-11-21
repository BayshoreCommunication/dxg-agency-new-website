import { Button } from '@/components/ui/button';
import { Link } from 'lucide-react';
import React from 'react';

const ContactSection = () => {
  return (
    <div>
      <form className='mx-auto w-full max-w-5xl'>
        <div className='mb-5 flex w-full flex-col gap-5 md:flex-row'>
          {/* First Name */}
          <div className=' w-full'>
            <input
              className='block w-full rounded-md border border-gray-700 bg-gray-900 p-2.5 py-2.5 pl-5 text-lg text-gray-500 placeholder:text-base focus:border-black focus:ring-black'
              placeholder='Name'
              required
              autoComplete='off'
              type='text'
              name='name'
            />
            <span className='text-primary'></span>
          </div>
          {/* Phone Number */}
          <div className=' w-full'>
            <input
              className='block w-full rounded-md border border-gray-700 bg-gray-900 p-2.5 py-2.5 pl-5 text-lg text-gray-500 placeholder:text-base focus:border-black focus:ring-black'
              placeholder='Phone'
              required
              autoComplete='off'
              type='text'
              name='phone'
            />
            <span className='text-primary'></span>
          </div>
        </div>
        <div className='mb-5 flex w-full flex-col gap-5 md:flex-row'>
          {/* Date */}
          <div className='w-full'>
            <input
              className='block w-full rounded-md border border-gray-700 bg-gray-900 p-2.5 py-2.5 pl-5 text-lg text-gray-500 placeholder:text-base '
              placeholder='Select a date'
              required
              autoComplete='off'
              type='date' // Changed to 'date' type to enable date picker
              name='date'
            />
            <span className='text-white'></span>
          </div>

          {/* Event Type */}

          <div className=' w-full'>
            <select
              id='countries'
              className='block w-full rounded-md border border-gray-700 bg-gray-900 p-2.5 py-3 pl-5 text-lg text-gray-500 placeholder:text-base focus:border-black focus:ring-black'
              required
              autoComplete='off'
              name='caseType'
            >
              <option className='text-base' value='' selected>
                - Event Type -
              </option>
              <option className='text-base' value='auto-accidents'>
                Event 1
              </option>
              <option className='text-base' value='personal-injury'>
                Event 2
              </option>
              <option className='text-base' value='slip-and-fall'>
                Event 3
              </option>
              <option className='text-base' value='medical-malpractice'>
                Event 4
              </option>
            </select>
            <span className='text-primary'></span>
          </div>
        </div>

        {/* Email */}
        <div className='mb-5'>
          <input
            className='block w-full rounded-md border border-gray-700 bg-gray-900 p-2.5 py-2.5 pl-5 text-lg text-gray-500 placeholder:text-base focus:border-black focus:ring-black'
            placeholder="What's your email"
            required
            autoComplete='off'
            type='email'
            name='email'
          />
          <span className='text-primary'></span>
        </div>

        {/* Text Area */}
        <div className='mb-5'>
          <textarea
            rows={4}
            id='message'
            className='block w-full rounded-md border border-gray-700 bg-gray-900 p-2.5 py-2.5 pl-5 text-lg text-gray-500 placeholder:text-base focus:border-black focus:ring-black'
            placeholder='Please describe what happened'
            required
            autoComplete='off'
            name='message'
          />
          <span className='text-primary'></span>
        </div>
        <div className='flex justify-center'>
          <Button
            className={`capsule-hover capsule-button w-full max-w-60 rounded-full bg-brand px-5 py-2 font-semibold text-white`}
            variant='link'
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactSection;
