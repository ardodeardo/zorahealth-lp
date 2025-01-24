import React from "react";

import { CardGeneric } from "@/app/components/Card";

import { lessons } from "@/app/constants/content/lessons";

function Lessons() {
  return (
    <section id="c-lessons" className="c-lessons">
      <div className="container mx-auto">
        <div className="pt-7 space-y-7">
          <p className="text-base font-semibold">
            POPULAR LESSONS ({lessons.length})
          </p>

          <div className="grid lg:grid-cols-2 gap-6">
            {lessons.map((lesson) => {
              return (
                <CardGeneric
                  key={lesson.uuid}
                  type="lesson"
                  content={lesson}
                ></CardGeneric>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Lessons;
