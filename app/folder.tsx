import Image from "next/image";

import iconEllipsis from "/public/images/icon-ellipsis.svg";

interface IProps {
  iconSrc: any;
  title: string;
  timeframes: ITimeframes;
  selectedCategory: "daily" | "weekly" | "monthly";
  containerClassName?: string;
}

interface ITimeframes {
  daily: ITimeframe;
  weekly: ITimeframe;
  monthly: ITimeframe;
}
interface ITimeframe {
  current: number;
  previous: number;
}

export default function Folder({
  iconSrc,
  title,
  containerClassName,
  selectedCategory,
  timeframes,
}: IProps) {
  return (
    <div
      className={"relative rounded-t-2xl rounded-b-3xl " + containerClassName}
    >
      <div className="absolute top-0 right-0 mx-6 flex aspect-square h-20 items-center justify-center overflow-hidden">
        <Image src={iconSrc} alt="" className="absolute right-0 mb-6" />
      </div>

      <div className="relative mt-10 cursor-pointer rounded-2xl bg-dark-blue p-6 text-white transition-opacity hover:opacity-90 xl:mt-11 xl:flex-col xl:items-start xl:p-8">
        <div className="flex w-full items-baseline justify-between">
          <div className="text-lg font-medium">{title}</div>
          <Image src={iconEllipsis} alt="" />
        </div>

        <div className="mt-2 flex items-baseline justify-between xl:mt-8 xl:flex-col">
          <div className="text-3xl font-light xl:text-6xl">
            {timeframes[selectedCategory]?.current}hrs
          </div>
          <div className="text-pale-blue xl:mt-4">
            Last Week - {timeframes[selectedCategory]?.previous}hrs
          </div>
        </div>
      </div>
    </div>
  );
}
