'use client';
import React, { useRef, useState } from 'react';
import { ContactInputField } from '@/components/Contact';
import { Button } from '@/components/ui/button';
import { handleFormSubmit } from '@/actions/actions';
import { object, string } from 'zod';
import { useRouter } from 'next/navigation';

export default function Form() {
  const ref = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const router = useRouter();
  const [isLoading, setIsloading] = useState(false);

  const validateForm = (data: Record<string, string>) => {
    const errors: Record<string, string> = {};
    if (!data.lastName || data.lastName.length < 1) {
      errors.lastName = 'Enter your name';
    }

    if (!data.phone || data.phone.length < 1) {
      errors.phone = 'Enter a number';
    }

    if (!data.email || data.email.length < 1) {
      errors.email = 'Enter a mail';
    }

    if (!data.description || data.description.length < 1) {
      errors.description = 'Enter your message';
    }

    return errors;
  };

  return (
    <form
      ref={ref}
      action={async (FormData) => {
        setIsloading(true);
        const validationErrors = validateForm(formState);
        if (Object.keys(validationErrors).length === 0) {
          setErrors({});
          setFormState({});
          const result = await handleFormSubmit(FormData);
          ref.current?.reset();
          if (result) {
            setTimeout(() => {
              ref.current?.reset();
              router.push('/thank-you');
            }, 1000);
          }
        } else {
          setIsloading(false);
          setErrors(validationErrors);
        }
      }}
    >
      <ContactInputField
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFormState({ ...formState, lastName: e.target.value })
        }
        inputLabel={'Enter Your Name'}
        inputProperties={{ id: 'full-name', name: 'Last Name' }}
      />
      {errors.lastName && (
        <p className='mt-5 text-sm font-semibold text-red-400'>
          *{errors.lastName}
        </p>
      )}
      <ContactInputField
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFormState({ ...formState, phone: e.target.value })
        }
        className='mt-5'
        inputLabel={'Enter Phone Number'}
        inputProperties={{ id: 'phone-number', name: 'Phone' }}
      />
      {errors.phone && (
        <p className='mt-5 text-sm font-semibold text-red-400'>
          *{errors.phone}
        </p>
      )}
      <ContactInputField
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFormState({ ...formState, email: e.target.value })
        }
        className='mt-5'
        inputLabel={'Enter Email'}
        inputProperties={{ id: 'email-address', name: 'Email' }}
      />
      {errors.email && (
        <p className='mt-5 text-sm font-semibold text-red-400'>
          *{errors.email}
        </p>
      )}
      <ContactInputField
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFormState({ ...formState, description: e.target.value })
        }
        className='mt-5'
        inputType='textarea'
        inputLabel={'Message'}
        inputProperties={{ id: 'message', name: 'Description' }}
      />
      {errors.description && (
        <p className='mt-5 text-sm font-semibold text-red-400'>
          *{errors.description}
        </p>
      )}
      <Button
        variant='default'
        type='submit'
        className='mt-5 w-full border-brand bg-brand font-bold text-white hover:border hover:text-brand'
      >
        {isLoading && (
          <svg
            className='-ml-1 mr-3 h-5 w-5 animate-spin text-white'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
          >
            <circle
              className='opacity-25'
              cx='12'
              cy='12'
              r='10'
              stroke='currentColor'
              stroke-width='4'
            ></circle>
            <path
              className='opacity-75'
              fill='currentColor'
              d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
            ></path>
          </svg>
        )}
        SUBMIT
      </Button>
    </form>
  );
}
