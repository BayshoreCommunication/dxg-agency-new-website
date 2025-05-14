// import { Button } from '@/components/ui/button';
// import { Link } from 'lucide-react';
// import React from 'react';

// const ContactSection = () => {
//   return (
//     <div>
//       <form className='mx-auto w-full max-w-5xl'>
//         <div className='mb-5 flex w-full flex-col gap-5 md:flex-row'>
//           {/* First Name */}
//           <div className=' w-full'>
//             <input
//               className='block w-full rounded-md border border-gray-700 bg-gray-900 p-2.5 py-2.5 pl-5 text-lg text-gray-300 placeholder:text-base focus:border-black focus:ring-black'
//               placeholder='Name'
//               required
//               autoComplete='off'
//               type='text'
//               name='name'
//             />
//             <span className='text-primary'></span>
//           </div>
//           {/* Phone Number */}
//           <div className=' w-full'>
//             <input
//               className='block w-full rounded-md border border-gray-700 bg-gray-900 p-2.5 py-2.5 pl-5 text-lg text-gray-300 placeholder:text-base focus:border-black focus:ring-black'
//               placeholder='Phone'
//               required
//               autoComplete='off'
//               type='text'
//               name='phone'
//             />
//             <span className='text-primary'></span>
//           </div>
//         </div>
//         <div className='mb-5 flex w-full flex-col gap-5 md:flex-row'>
//           {/* Date */}
//           <div className='w-full'>
//             <input
//               className='block w-full rounded-md border border-gray-700 bg-gray-900 p-2.5 py-2.5 pl-5 text-lg text-gray-300 placeholder:text-base '
//               placeholder='Select a date'
//               required
//               autoComplete='off'
//               type='date' // Changed to 'date' type to enable date picker
//               name='date'
//             />
//             <span className='text-white'></span>
//           </div>

//           {/* Event Type */}

//           <div className=' w-full'>
//             <select
//               id='countries'
//               className='block w-full rounded-md border border-gray-700 bg-gray-900 p-2.5 py-3 pl-5 text-lg text-gray-300 placeholder:text-base focus:border-black focus:ring-black'
//               required
//               autoComplete='off'
//               name='caseType'
//             >
//               <option className='text-base' value='' selected>
//                 - Event Type -
//               </option>
//               <option className='text-base' value='auto-accidents'>
//                 Event 1
//               </option>
//               <option className='text-base' value='personal-injury'>
//                 Event 2
//               </option>
//               <option className='text-base' value='slip-and-fall'>
//                 Event 3
//               </option>
//               <option className='text-base' value='medical-malpractice'>
//                 Event 4
//               </option>
//             </select>
//             <span className='text-primary'></span>
//           </div>
//         </div>

//         {/* Email */}
//         <div className='mb-5'>
//           <input
//             className='block w-full rounded-md border border-gray-700 bg-gray-900 p-2.5 py-2.5 pl-5 text-lg text-gray-300 placeholder:text-base focus:border-black focus:ring-black'
//             placeholder="What's your email"
//             required
//             autoComplete='off'
//             type='email'
//             name='email'
//           />
//           <span className='text-primary'></span>
//         </div>

//         {/* Text Area */}
//         <div className='mb-5'>
//           <textarea
//             rows={4}
//             id='message'
//             className='block w-full rounded-md border border-gray-700 bg-gray-900 p-2.5 py-2.5 pl-5 text-lg text-gray-300 placeholder:text-base focus:border-black focus:ring-black'
//             placeholder='Please describe what happened'
//             required
//             autoComplete='off'
//             name='message'
//           />
//           <span className='text-primary'></span>
//         </div>
//         <div className='flex justify-center'>
//           <Button
//             className={`capsule-hover capsule-button w-full max-w-60 rounded-full bg-brand px-5 py-2 font-semibold text-white`}
//             variant='link'
//           >
//             Submit
//           </Button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default ContactSection;
import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";
import React from "react";

const ContactSection = () => {
  return (
    <div>
      <form className="mx-auto w-full max-w-5xl">
        <div className="mb-5 flex w-full flex-col gap-5 md:flex-row">
          {/* Name */}
          <div className="w-full">
            <input
              className="block w-full rounded-md border border-gray-700 bg-gray-900 p-2.5 py-2.5 pl-5 text-lg text-gray-300 placeholder:text-base focus:border-black focus:ring-black"
              placeholder="Name"
              required
              autoComplete="off"
              type="text"
              name="name"
            />
            <span className="text-primary"></span>
          </div>
          {/* Phone Number */}
          <div className="w-full">
            <input
              className="block w-full rounded-md border border-gray-700 bg-gray-900 p-2.5 py-2.5 pl-5 text-lg text-gray-300 placeholder:text-base focus:border-black focus:ring-black"
              placeholder="Phone"
              required
              autoComplete="off"
              type="text"
              name="phone"
            />
            <span className="text-primary"></span>
          </div>
        </div>

        <div className="mb-5 flex w-full flex-col gap-5 md:flex-row">
          {/* Date */}
          {/* <div className="w-full">
            <input
              className="block w-full rounded-md border border-gray-700 bg-gray-900 p-2.5 py-2.5 pl-5 text-lg text-gray-300 placeholder:text-base"
              placeholder="Select a date"
              required
              autoComplete="off"
              type="date"
              name="date"
            />
            <span className="text-white"></span>
          </div> */}
          <div className="relative w-full">
            <input
              className="block w-full rounded-md border border-gray-700 bg-gray-900 p-2.5 py-2.5 pl-5 pr-15 text-lg text-gray-300 placeholder:text-base focus:border-black focus:ring-black"
              placeholder="Select a date"
              required
              autoComplete="off"
              type="date"
              name="date"
              style={{
                colorScheme: "dark",
                WebkitAppearance: "none",
              }}
            />
            {/* Custom Calendar Icon */}

            <span className="text-white"></span>
          </div>

          {/* Event Type */}
          <div className="relative w-full">
            <select
              className="block w-full appearance-none rounded-md border border-gray-700 bg-gray-900 p-2.5 py-3 pl-5 pr-10 text-lg text-gray-300 focus:border-black focus:ring-black"
              required
              autoComplete="off"
              name="caseType"
            >
              <option value="" selected>
                Event Type -
              </option>
              <option value="conference">Conference / Convention</option>
              <option value="corporate-meeting">
                Corporate Meeting / Town Hall
              </option>
              <option value="product-launch">
                Product Launch / Brand Activation
              </option>
              <option value="trade-show">Trade Show / Expo Booth</option>
              <option value="awards-show">Awards Show / Gala</option>
              <option value="virtual-event">Virtual or Hybrid Event</option>
              <option value="training">Training / Workshop / Seminar</option>
              <option value="fundraiser">Fundraiser / Nonprofit Event</option>
              <option value="broadcast">
                Broadcast / Livestream Production
              </option>
              <option value="concert">Concert / Performance / Festival</option>
              <option value="other">Other (Please Specify)</option>
            </select>

            {/* Custom arrow */}
            <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>

            <span className="text-primary"></span>
          </div>
        </div>

        {/* Email */}
        <div className="mb-5">
          <input
            className="block w-full rounded-md border border-gray-700 bg-gray-900 p-2.5 py-2.5 pl-5 text-lg text-gray-300 placeholder:text-base focus:border-black focus:ring-black"
            placeholder="Email address"
            required
            autoComplete="off"
            type="email"
            name="email"
          />
          <span className="text-primary"></span>
        </div>

        {/* Message */}
        <div className="mb-5">
          <textarea
            rows={4}
            className="block w-full rounded-md border border-gray-700 bg-gray-900 p-2.5 py-2.5 pl-5 text-lg text-gray-300 placeholder:text-base focus:border-black focus:ring-black"
            placeholder="Tell us more about your event"
            required
            autoComplete="off"
            name="message"
          />
          <span className="text-primary"></span>
        </div>

        {/* File Upload */}
        <div className="mb-8">
          <label className="mb-2 block text-base font-medium text-gray-300">
            Attach a document (PDF, Word, etc.)
          </label>
          <input
            className="block w-full cursor-pointer rounded-md border border-gray-700 bg-gray-900 text-gray-300 file:mr-4 file:rounded-md file:border-0 file:bg-brand file:px-4 file:py-2 file:text-white file:font-semibold hover:file:cursor-pointer focus:outline-none"
            type="file"
            name="attachment"
            accept=".pdf,.doc,.docx,.txt,.rtf"
          />
          <span className="text-primary"></span>
        </div>

        {/* Submit */}
        <div className="flex justify-center">
          <Button
            className="capsule-hover capsule-button w-full max-w-60 rounded-full bg-brand px-5 py-2 font-semibold text-white"
            variant="link"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactSection;
