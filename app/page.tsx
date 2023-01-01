"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Folder from "/app/folder";
import Option from "/app/option";

import iconExercise from "/public/images/icon-exercise.svg";
import iconPlay from "/public/images/icon-play.svg";
import iconSelfCare from "/public/images/icon-self-care.svg";
import iconSocial from "/public/images/icon-social.svg";
import iconStudy from "/public/images/icon-study.svg";
import iconWork from "/public/images/icon-work.svg";
import imageJeremy from "/public/images/image-jeremy.png";

const decorates = [
  {
    icon: iconWork,
    background: "bg-light-red-work",
  },
  {
    icon: iconPlay,
    background: "bg-soft-blue",
  },
  {
    icon: iconStudy,
    background: "bg-light-red-study",
  },
  {
    icon: iconExercise,
    background: "bg-lime-green",
  },
  {
    icon: iconSocial,
    background: "bg-violet",
  },
  {
    icon: iconSelfCare,
    background: "bg-soft-orange",
  },
];

export default function Page() {
  const [data, setData] = useState(null);
  const [category, setCategory] = useState<"daily" | "weekly" | "monthly">(
    "daily"
  );

  const getData = async () => {
    const res = await fetch("/data.json");
    if (!res.ok) setData(null);
    const data = await res.json();
    setData(data);
  };

  useEffect(() => {
    getData();
  }, []);

  if (!data) {
    return null;
  }

  return (
    <div className="grid gap-6 xl:grid-cols-4 xl:gap-8">
      <div className="row-span-2 flex flex-col rounded-2xl bg-dark-blue">
        <div className="flex flex-1 items-center gap-6 rounded-2xl bg-blue p-8 xl:flex-col xl:items-start">
          <Image
            src={imageJeremy}
            alt=""
            width={80}
            className="rounded-full border-4 border-white"
          />
          <div className="xl:mt-4">
            <div className="text-lg text-pale-blue">Report for</div>
            <div className="text-3xl font-light text-white xl:mt-2 xl:text-5xl">
              Jeremy Robson
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between p-6 text-lg text-desaturated-blue xl:flex-col xl:items-start xl:gap-4">
          <Option
            onClick={() => setCategory("daily")}
            isActive={category === "daily"}
          >
            Daily
          </Option>
          <Option
            onClick={() => setCategory("weekly")}
            isActive={category === "weekly"}
          >
            Weekly
          </Option>
          <Option
            onClick={() => setCategory("monthly")}
            isActive={category === "monthly"}
          >
            Monthly
          </Option>
        </div>
      </div>

      {/* @ts-ignore */}
      {data.map((folder, i) => (
        <Folder
          key={i}
          iconSrc={decorates[i].icon}
          title={folder.title}
          timeframes={folder.timeframes}
          selectedCategory={category}
          containerClassName={decorates[i].background}
        />
      ))}
    </div>
  );
}
