import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const contactInputVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'float-label-input relative w-full',
        description: '',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface ContactInputFieldProps
  extends React.HtmlHTMLAttributes<HTMLDivElement>,
    VariantProps<typeof contactInputVariants> {
  inputLabel: string;
  inputType?: 'input' | 'textarea';
  inputProperties?: React.InputHTMLAttributes<HTMLInputElement>; //id and name is required
  texAreaProperties?: React.InputHTMLAttributes<HTMLTextAreaElement>; //id and name is required
}

const ContactInputField = React.forwardRef<
  HTMLButtonElement,
  ContactInputFieldProps
>(
  ({
    inputType = 'input',
    inputLabel,
    inputProperties,
    className,
    variant,
    texAreaProperties,
    ...rest
  }) => {
    return (
      <div
        {...rest}
        className={cn(contactInputVariants({ variant, className }))}
      >
        {inputType === 'input' ? (
          <>
            <input
              type={inputProperties?.type ?? 'text'}
              id={inputProperties?.name ?? 'name'}
              name={inputProperties?.name ?? 'name'}
              placeholder=' '
              className=' focus:shadow-outline block w-full  appearance-none rounded-md border border-gray-500 bg-transparent px-5  py-3 text-xl  leading-normal text-white autofill:!bg-transparent focus:border-brand focus:outline-none'
              onChange={inputProperties?.onChange}
            />
            <label
              htmlFor={inputProperties?.name ?? 'name'}
              className='pointer-events-none  absolute left-0 top-3 bg-transparent px-5 text-xl   text-[#9B9B9B] transition duration-200 ease-in-out'
            >
              {inputLabel}
            </label>
          </>
        ) : (
          <>
            <textarea
              id={texAreaProperties?.name ?? 'name'}
              placeholder=' '
              name={inputProperties?.name ?? 'name'}
              className='focus:shadow-outline block min-h-[160px] w-full appearance-none rounded-md border  border-gray-500 bg-transparent px-5 py-3 text-xl  leading-normal text-white  first-letter:w-full autofill:!bg-transparent focus:border-brand focus:outline-none'
            />
            <label
              htmlFor={texAreaProperties?.name ?? 'name'}
              className='pointer-events-none absolute left-0 top-3 bg-transparent px-5 text-xl text-[#9B9B9B] transition duration-200 ease-in-out'
            >
              {inputLabel}
            </label>
          </>
        )}
      </div>
    );
  }
);
ContactInputField.displayName = 'ContactInputField';

export { ContactInputField, contactInputVariants };
