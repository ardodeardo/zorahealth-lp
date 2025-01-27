import React from "react";
import Link from "next/link";
import Image from "next/image";

// components
import { Eye } from "lucide-react";
import type { Course } from "@/app/interfaces/course";

// others
import { PATH } from "@/app/constants/config/path";

interface Props {
  thumbnail: string;
  content: Course;
}

function CardCourse(props: Props) {
  const { thumbnail, content } = props;
  const { slug, title, description, experts, view } = content;

  return (
    <Link
      href={"/courses/".concat(slug)}
      className="c-card c-card--course relative bg-[#FCFAF5] rounded-lg hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
    >
      <div>
        <figure className="pt-6">
          <Image
            alt={"zorahealth"}
            src={PATH.image.concat(`common/pattern/${thumbnail}`)}
            width={384}
            height={116}
            className="w-full h-auto"
          ></Image>
        </figure>

        <div className="space-y-6 px-8 mb-12">
          <h3 className="font-ppeditorial text-[40px]">{title}</h3>
          <p className="text-sm">{description}</p>

          {/* 
              assuming of; 
              - experts length always more than 2 items
              - then only need only view the first 2 item, 
              - and show the rest in number
              - no need to loop
            */}
          {experts.length > 2 && (
            <p>
              Featuring experts from <br />
              <span className="text-sm font-semibold">
                {`${experts[0]}, ${experts[1]}, +${experts.length - 2} more`}
              </span>
            </p>
          )}
        </div>
      </div>

      {view > 0 && (
        <div className="flex justify-end">
          <div className="rounded-tl-lg rounded-br-lg bg-[#F6F1E2] p-3 min-w-[142px] h-12 grid place-items-center">
            <div className="flex items-center gap-x-1">
              <Eye className="w-6 h-6 text-[#BDB18C]"></Eye>
              <span className="text-sm text-[#BDB18C] font-semibold">
                {view}K
              </span>
            </div>
          </div>
        </div>
      )}
    </Link>
  );
}

export default CardCourse;
