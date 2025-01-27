import Image from "next/image";
import React from "react";

import { cn } from "@/lib/utils";
import { PATH } from "@/app/constants/config/path";
import type { Expert } from "@/app/interfaces/expert";

interface Props extends React.HTMLAttributes<HTMLDivElement>, Expert {}

function CardExpert(props: Props) {
  const { className, name, roles, image } = props;

  const baseClass =
    "c-card c-card--expert border border-[#EEECE1] bg-white p-4 flex gap-x-3 items-start rounded-lg hover:shadow-md transition-shadow duration-300";

  return (
    <div className={cn(baseClass, className)}>
      <figure className="bg-[#ebebeb] rounded-full">
        <Image
          alt={image.alt}
          src={PATH.image.concat(`pages/course/experts/${image.url}`)}
          width={72}
          height={72}
          className="min-w-[72px] min-h-[72px] rounded-full"
        ></Image>
      </figure>
      <div className="space-y-1">
        <h3 className="text-base font-semibold">{name}</h3>
        <ul>
          {roles.map((role, index) => (
            <li
              key={name.concat(index.toString())}
              className="text-sm font-medium"
            >
              {role}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CardExpert;
