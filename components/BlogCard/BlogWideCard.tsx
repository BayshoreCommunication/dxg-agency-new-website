import Image from "next/image";
import { Button } from "../ui/button";
import parse from "html-react-parser";
import GetAllBlogPost from "@/lib/GetAllBlogPost";
import { MotionDiv } from "../Motion";
import { fadeIn } from "@/lib/motion";
import Link from "next/link";

// interface BlogBigImageCardProps {
//   createdAt: number;
//   title: string;
//   featuredImage: string;
//   body: string;
// }

export const BlogWideCard = ({
  className,
  cardClassName,
}: {
  className?: string;
  cardClassName?: string;
}) => {
  // const time = formatTimestamp(createdAt);
  const blogsData = GetAllBlogPost;

  console.log(blogsData.data.length);

  const postDate = (date: any) => {
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return formattedDate;
  };
  return (
    <div className={"" + className}>
      {blogsData?.data
        ?.filter((blog: any) => blog.published === true)
        ?.map((item: any, index: number) => {
          return (
            <Link
              href={`/post/${item.slug}`}
              key={item._id}
              // style={{ maxWidth: '100%' }}
              className={"w-full lg:w-[45%]" + cardClassName}
            >
              <MotionDiv
                variants={fadeIn("up", "tween", index * 0.2, 1)}
                className="w-full cursor-pointer"
              >
                <div className="flex w-full items-stretch gap-4 text-white">
                  {/* Adjusted for equal height */}
                  <div
                    className="relative flex-shrink-0"
                    style={{ flexBasis: "calc(38% - 1rem)" }}
                  >
                    <div style={{ paddingTop: "100%" }}></div>
                    <Image
                      src={`${item.featuredImage?.image?.url}`}
                      alt={"featuredImage.altText"}
                      fill
                      content="cover"
                      className="absolute left-0 top-0"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-grow flex-col justify-center">
                    {/* Adjusted for vertical center alignment */}
                    <p className="text-xs">{postDate(item.createdAt)}</p>
                    <h4 className="line-clamp-1 text-lg font-bold text-brand">
                      {item.title}
                    </h4>
                    <div className="line-clamp-2 h-11 text-sm">
                      {parse(item.body)}
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <Button
                        variant={"outline"}
                        className={`blogButton m-0 mt-2 box-border rounded-full rounded-l-full rounded-r-full border-2 border-white bg-transparent`}
                      >
                        Read More
                      </Button>
                    </div>
                  </div>
                </div>
              </MotionDiv>
            </Link>
          );
        })}
    </div>
    // <div> hi</div>
  );
};
