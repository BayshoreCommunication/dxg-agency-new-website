import Link from 'next/link';

type AS = 'link' | 'button';

interface CapsuleButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  href?: string;
  as?: AS;
}
export const CapsuleButton: React.FC<CapsuleButtonProps> = ({
  title,
  href = '/contact-us',
  as = 'button',
  ...rest
}) => {
  if (as === 'link') {
    return (
      <Link href={href}>
        <button
          className='capsule-hover capsule-button rounded-full bg-brand px-5 py-2 font-semibold text-white'
          {...rest}
        >
          {title}
        </button>
      </Link>
    );
  }
  <button
    className='rounded-full bg-brand px-5 py-2 font-semibold text-white'
    {...rest}
  >
    {title}
  </button>;
};
