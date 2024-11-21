import { format } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';

interface BlogCardProps {
  data: {
    image: string;
    date: number;
    feature: string;
    title: string;
    description: string;
    link: string;
  };
}

// TIme function extraction.....
const formatDate = (timestamp: number): { day: string; month: string } => {
  const formattedDate = format(new Date(timestamp), 'd MMM');
  const [day, month] = formattedDate.split(' ');
  return { day, month };
};

export const BlogCard: React.FC<BlogCardProps> = ({ data }) => {
  const { image, date, feature, title, description, link } = data;
  const newDate = formatDate(date);

  return (
    <div className='m-4 overflow-hidden bg-white shadow-lg rounded-2xl'>
      <div className=''>
        <Image
          style={{ width: '100%' }}
          width={200}
          height={400}
          src={image}
          alt={`Blog: ${title}`}
          className='object-cover object-center w-full h-48'
        />
      </div>
      <div className='relative p-6'>
        <div className='absolute left-[30px] top-[-30px] flex h-12 w-12 flex-col items-center justify-center bg-brand'>
          <p className='text-sm font-bold text-center text-white'>
            {newDate.day}
          </p>
          <p className='text-sm font-bold text-center text-white'>
            {newDate.month}
          </p>
        </div>
        <div className='mt-4 text-xs font-semibold text-gray-500'>
          {feature}
        </div>
        <h2 className='text-base font-bold text-gray-800'>{title}</h2>
        <p className='mt-2 mb-3 text-xs text-gray-600'>{description}</p>
        <Link href={link} target='_blank' className=''>
          <Button
            variant={'outline'}
            className='rounded-full border-brand px-7 text-brand hover:bg-brand hover:text-white'
          >
            Read more
          </Button>
        </Link>
      </div>
    </div>
  );
};
