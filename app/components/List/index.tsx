import React from "react";
import { Eye } from "lucide-react";

import type { Topic } from "@/app/interfaces/topic";

function TopicList(props: Topic) {
  const { slug, title, view } = props;

  return (
    <li className="c-list c-list--decorated flex items-center group">
      {/* line */}
      <span className="block h-[2px] min-w-12 lg:min-w-[104px] bg-[#FFC8AA]"></span>

      <span className="relative z-10 flex items-center gap-x-4 lg:gap-x-6 transform -translate-x-6 lg:-translate-x-[52px] transition-transform ease-in-out group-hover:transform-none">
        {/* circle */}
        <span className="block min-w-10 lg:min-w-20 min-h-10 lg:min-h-20 bg-[#FFC8AA] rounded-full transform transition-transform duration-300 ease-in-out group-hover:scale-110 origin-center"></span>

        {/* text */}
        <a href={"/topics/".concat(slug)} className="flex gap-x-3 items-start">
          <span className=" font-ppeditorial text-2xl md:text-3xl lg:text-[48px]">
            {title}
          </span>
          <span className="flex items-center gap-x-1 lg:py-2">
            <Eye className="w-5 lg:w-6 h-5 lg:h-6"></Eye>
            <span className="font text-sm font-semibold">{view}K</span>
          </span>
        </a>
      </span>
    </li>
  );
}

export default TopicList;
