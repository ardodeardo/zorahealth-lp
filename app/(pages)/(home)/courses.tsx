import React from "react";
import { Suspense } from "react";

// components
import Tab from "@/app/components/Tab";
import { CardCourse } from "@/app/components/Card";

// dummy content
import { courses } from "@/app/constants/content/courses";

// thumbnails set
import { setOfPattern } from "@/app/constants/thumbnail/pattern";

function Courses() {
  let counter = -1;
  const patternLength = setOfPattern.length;

  return (
    <section id="c-courses" className="c-courses">
      <div className="container mx-auto">
        <Suspense>
          <Tab></Tab>
        </Suspense>
        <div className="pt-7 space-y-7">
          <p className="text-base font-semibold">COURSES ({courses.length})</p>

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
      </div>
    </section>
  );
}

export default Courses;
