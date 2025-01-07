// import '@/style/custom.css';
import { IconName, Icons } from "../Icons";

interface MethodCardProps {
  title: string;
  icon: IconName;
  description: string;
  image: string;
  index: number;
}
export const MethodCard: React.FC<MethodCardProps> = ({
  title,
  icon,
  description,
  image,
  index,
}) => {
  const titleArray = title.split(" ");
  const SelectedIcon = Icons[icon];
  return (
    <div
      className={`${
        index === 2 || index === 3 ? "mt-10" : ""
      } relative h-[400px] w-[320px]  overflow-hidden rounded-3xl bg-cover bg-center shadow-md transition-all duration-300   xl:w-[300px]`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 rounded-md bg-black opacity-50"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center ">
        <div className="flex flex-1 flex-col items-center justify-center hover:bg-brand hover:bg-opacity-30">
          <SelectedIcon />
          <h2 className="my-3 text-center text-2xl font-bold uppercase text-white">
            {titleArray[0]}{" "}
            <span className="outline-with-shaddow text-2xl font-bold uppercase text-white">
              {titleArray[1]}
            </span>
          </h2>
          <p className="px-2 text-center text-white">{description}</p>
        </div>
      </div>
    </div>
  );
};
