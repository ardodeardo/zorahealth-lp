import React from "react";
import Link from "next/link";

// components
import { Button } from "@/app/components/common/Button";
import { CardCourse } from "@/app/components/Card";

// thumbnails set
import { setOfPattern } from "@/app/constants/thumbnail/pattern";

import type { Course } from "@/app/interfaces/course";

interface Props {
  context: {
    courses: Array<Course>;
  };
}

function RelatedCourse(props: Props) {
  const { context } = props;
  const { courses } = context;

  let counter = -1;
  const patternLength = setOfPattern.length;

  return (
    <section id="c-related-courses" className="c-related-courses py-12">
      <div className="container mx-auto">
        <div className="pt-7 space-y-7">
          <h3 className="font-ppeditorial text-[32px]">
            Other courses you might like
          </h3>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {courses.map((course, index) => {
              // reset counter
              if ((index + 1) % patternLength === 0) {
                counter = -1;
              }

              counter++;

              return (
                <CardCourse
                  key={course.uuid}
                  thumbnail={setOfPattern[counter]}
                  content={course}
                ></CardCourse>
              );
            })}
          </div>
        </div>

        <div className="w-min mx-auto mt-12">
          <Link href={"/"}>
            <Button type="button">Explore All Courses</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default RelatedCourse;
