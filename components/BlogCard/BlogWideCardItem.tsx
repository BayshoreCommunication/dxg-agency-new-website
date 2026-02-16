'use client';
import parse from 'html-react-parser';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';

interface BlogWideCardItemProps {
  _id: string;
  createdAt: string;
  title: string;
  body: string;
  slug: string;
  featuredImage: {
    image: {
      url: string;
    };
    altText: string;
  };
}

const BlogWideCardItem: React.FC<BlogWideCardItemProps> = ({
  _id,
  createdAt,
  title,
  body,
  slug,
  featuredImage,
}) => {
  const router = useRouter();

  const postDate = (date: string) => {
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    return formattedDate;
  };

  const handleClick = () => {
    if (slug) {
      router.push(`/post/${slug}`);
    }
  };

  return (
    <div
      className="flex w-full gap-4 text-white cursor-pointer hover:opacity-90 transition-opacity relative z-30"
      onClick={handleClick}
    >
      {/* Adjusted for equal height */}
      <div
        className="relative flex-shrink-0"
        style={{ flexBasis: 'calc(38% - 1rem)' }}
      >
        <div style={{ paddingTop: '100%' }}></div>
        <Image
          src={`${featuredImage?.image?.url}`}
          alt={`${featuredImage?.altText}`}
          fill
          sizes=""
          quality={100}
          className="absolute left-0 top-0 object-cover"
          loading="lazy"
          blurDataURL={`${featuredImage?.image?.url}`}
          placeholder="blur"
        />
      </div>
      <div className="flex flex-grow flex-col justify-center">
        {/* Adjusted for vertical center alignment */}
        <p className="text-xs">{postDate(createdAt)}</p>
        <h4 className="line-clamp-1 text-lg font-bold text-brand">{title}</h4>
        <div className="line-clamp-2 h-11 text-sm">{parse(body)}</div>
        <div className="mt-2 flex flex-wrap gap-2">
          <Button
            variant={'outline'}
            className={`blogButton m-0 mt-2 box-border rounded-full rounded-l-full rounded-r-full border-2 border-white bg-transparent`}
          >
            Read More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlogWideCardItem;
