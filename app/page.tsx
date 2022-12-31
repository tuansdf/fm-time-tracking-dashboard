import Image from "next/image";
import Folder from "/app/folder";

import iconExercise from "/public/images/icon-exercise.svg";
import iconPlay from "/public/images/icon-play.svg";
import iconSelfCare from "/public/images/icon-self-care.svg";
import iconSocial from "/public/images/icon-social.svg";
import iconStudy from "/public/images/icon-study.svg";
import iconWork from "/public/images/icon-work.svg";
import imageJeremy from "/public/images/image-jeremy.png";

export default function Page() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl bg-dark-blue">
        <div className="flex items-center gap-6 rounded-2xl bg-blue p-8">
          <Image
            src={imageJeremy}
            alt=""
            width={80}
            className="rounded-full border-4 border-white"
          />
          <div>
            <div className="text-lg text-pale-blue">Report for</div>
            <div className="text-3xl font-light text-white">Jeremy Robson</div>
          </div>
        </div>
        <div className="flex items-center justify-between p-6 text-lg text-desaturated-blue">
          <button className="px-2">Daily</button>
          <button className="px-2 text-white">Weekly</button>
          <button className="px-2">Monthly</button>
        </div>
      </div>

      <Folder
        iconSrc={iconWork}
        title="Work"
        time="32hrs"
        timeLastWeek="36hrs"
        containerClassName="bg-light-red-work"
      />
      <Folder
        iconSrc={iconPlay}
        title="Play"
        time="10hrs"
        timeLastWeek="8hrs"
        containerClassName="bg-soft-blue"
      />
      <Folder
        iconSrc={iconStudy}
        title="Study"
        time="4hrs"
        timeLastWeek="7hrs"
        containerClassName="bg-light-red-study"
      />
      <Folder
        iconSrc={iconExercise}
        title="Exercise"
        time="4hrs"
        timeLastWeek="5hrs"
        containerClassName="bg-lime-green"
      />
      <Folder
        iconSrc={iconSocial}
        title="Social"
        time="5hrs"
        timeLastWeek="10hrs"
        containerClassName="bg-violet"
      />
      <Folder
        iconSrc={iconSelfCare}
        title="Self Care"
        time="2hrs"
        timeLastWeek="2hrs"
        containerClassName="bg-soft-orange"
      />
    </div>
  );
}
