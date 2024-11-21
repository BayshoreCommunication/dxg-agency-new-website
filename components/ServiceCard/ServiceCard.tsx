
import Image, { StaticImageData } from 'next/image';

interface ServiceProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  cardTitle: string;
  cardImage: StaticImageData;
  captionPosition?: 'top' | 'bottom';
}
export const ServiceCard: React.FC<ServiceProps> = ({
  cardTitle,
  cardImage,
  captionPosition = 'top',
  ...rest
}) => {
  return (
    <div className='relative ' {...rest}>
      <Image src={cardImage} alt={cardTitle} style={{ width: '100%' }} />
      <div className='absolute top-0 h-full w-full bg-black bg-opacity-50'>
        <h2
          className={`absolute left-1/2 ${
            captionPosition === 'top' ? 'top-[10%]' : 'bottom-[10%]'
          } -translate-x-1/2 transform text-center text-4xl font-bold leading-tight text-white`}
        >
          {cardTitle}
        </h2>
      </div>
    </div>
  );
};
