import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Presentation, Clock4, ChevronRight } from "lucide-react";

import { PATH } from "@/app/constants/config/path";

function HeroCourse() {
  return (
    <section
      id="c-hero--course"
      className="c-hero c-hero--course pt-16 pb-32 bg-[#FCFAF5]"
    >
      <Image
        priority
        alt="zorahealth"
        src={PATH.image.concat("page/course/line.png")}
        width={1280}
        height={200}
        className="w-full h-auto"
      ></Image>
      <div className="container mx-auto">
        <div className="space-y-8">
          <div className="space-y-7">
            <div className="flex items-center gap-x-2">
              <span className="font-medium text-xs flex gap-x-1 items-center">
                <Presentation className="w-4 h-4"></Presentation> 16 Lessons
              </span>
              <span className="font-medium text-xs flex gap-x-1 items-center">
                <Clock4 className="w-4 h-4"></Clock4> 3h 28m
              </span>
            </div>
            <h1 className="font-ppeditorial text-5xl lg:text-[84px] leading-[120%] lg:leading-[100%]">
              {/* this might use dynamic value. save for later */}
              IVF - In Vitro Fertilization
            </h1>
          </div>

          <p className="text-base">
            The most complex fertility treatment, this course will help you do
            it right the first time
          </p>

          <div className="space-y-3">
            <Link href={"/"}>
              <button className="bg-[#D75555] text-base px-6 py-4 rounded-lg font-medium text-white">
                Start Learning
              </button>
            </Link>
            <Link
              href={"/"}
              className="font-medium text-xs flex gap-x-1 items-center"
            >
              Buy This Course <ChevronRight className="w-4 h-4"></ChevronRight>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroCourse;
