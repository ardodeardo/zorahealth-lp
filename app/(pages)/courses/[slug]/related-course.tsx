import React from "react";

import { CardCourse } from "@/app/components/Card";
import { Button } from "@/app/components/Button";

import { courses } from "@/app/constants/content/courses";

function RelatedCourse() {
  return (
    <section id="c-related-courses" className="c-related-courses py-12">
      <div className="container mx-auto">
        <div className="pt-7 space-y-7">
          <h3 className="font-ppeditorial text-[32px]">
            Other courses you might like
          </h3>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {courses.map((course) => {
              return <CardCourse key={course.uuid} {...course}></CardCourse>;
            })}
          </div>
        </div>

        <div className="w-min mx-auto mt-12">
          <Button type="button">Explore All Courses</Button>
        </div>
      </div>
    </section>
  );
}

export default RelatedCourse;
