import React from "react";

import Tab from "@/app/components/Tab";
import { CardCourse } from "@/app/components/Card";

import { courses } from "@/app/constants/content/courses";

function Courses() {
  return (
    <section id="c-courses" className="c-courses">
      <div className="container mx-auto">
        <Tab></Tab>
        <div className="pt-7 space-y-7">
          <p className="text-base font-semibold">COURSES ({courses.length})</p>

          <div className="grid grid-cols-3 gap-6">
            {courses.map((course) => {
              return <CardCourse key={course.uuid} {...course}></CardCourse>;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Courses;
