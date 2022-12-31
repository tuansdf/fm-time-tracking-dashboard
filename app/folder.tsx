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
      className={
        "relative flex w-full flex-col overflow-hidden rounded-2xl " +
        containerClassName
      }
    >
      <div className="relative -top-4 mx-6 flex h-20 items-center justify-center self-end">
        <Image src={iconSrc} alt="" />
      </div>

      <div className="z-10 -mt-10 rounded-2xl bg-dark-blue p-6 text-white xl:flex-col xl:items-start xl:p-8">
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
