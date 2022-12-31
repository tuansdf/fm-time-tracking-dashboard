import Image from "next/image";

import iconEllipsis from "/public/images/icon-ellipsis.svg";

interface IProps {
  iconSrc: any;
  title: string;
  time: string;
  timeLastWeek: string;
  containerClassName?: string;
}

export default function Folder({
  iconSrc,
  title,
  time,
  containerClassName,
  timeLastWeek,
}: IProps) {
  return (
    <div
      className={"relative rounded-t-2xl rounded-b-3xl " + containerClassName}
    >
      <div className="absolute top-0 right-0 mx-6 flex aspect-square h-20 items-center justify-center overflow-hidden">
        <Image src={iconSrc} alt="" className="absolute right-0 mb-6" />
      </div>

      <div className="relative z-10 mt-10 rounded-2xl bg-dark-blue p-6 text-white xl:mt-11 xl:flex-col xl:items-start xl:p-8">
        <div className="flex w-full items-baseline justify-between">
          <div className="text-lg font-medium">{title}</div>
          <Image src={iconEllipsis} alt="" />
        </div>

        <div className="mt-2 flex items-baseline justify-between xl:mt-8 xl:flex-col">
          <div className="text-3xl font-light xl:text-6xl">{time}</div>
          <div className="text-pale-blue xl:mt-4">
            Last Week - {timeLastWeek}
          </div>
        </div>
      </div>
    </div>
  );
}
