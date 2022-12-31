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
      <div className="z-10 -mt-10 flex items-end justify-between rounded-2xl bg-dark-blue p-6 text-white">
        <div>
          <div className="text-lg font-medium">{title}</div>
          <div className="mt-2 text-3xl font-light">{time}</div>
        </div>

        <div className="flex flex-col items-end gap-6 text-pale-blue">
          <Image src={iconEllipsis} alt="" />
          <div>Last Week - {timeLastWeek}</div>
        </div>
      </div>
    </div>
  );
}
