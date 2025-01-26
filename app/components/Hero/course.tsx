import React from "react";
import Link from "next/link";
import Image from "next/image";

// components
import { Button } from "@/app/components/Button";
import { Presentation, Clock4, ChevronRight } from "lucide-react";

// others
import { PATH } from "@/app/constants/config/path";

interface Props {
  context: {
    title: string;
  };
}

function HeroCourse(props: Props) {
  const { context } = props;
  const { title } = context;

  return (
    <section
      id="c-hero--course"
      className="c-hero c-hero--course pt-16 pb-32 bg-[#FCFAF5]"
    >
      <Image
        priority
        alt="zorahealth"
        src={PATH.image.concat("pages/course/hero/line.png")}
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
              {title}
            </h1>
          </div>

          <p className="text-base">
            The most complex fertility treatment, this course will help you do
            it right the first time.
          </p>

          <div className="space-y-3">
            <Link href={"/"}>
              <Button>Start Learning</Button>
            </Link>
            <Link
              href={"/"}
              className="font-medium text-xs flex gap-x-1 items-center hover:underline underline-offset-2"
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
