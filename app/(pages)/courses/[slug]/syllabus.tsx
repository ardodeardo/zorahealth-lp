import React from "react";

// components
import Accordion from "@/app/components/Accordion";

// dummy content
import { syllabus } from "@/app/constants/content/syllabus";

function Syllabus() {
  return (
    <div id="c-syllabus" className="c-syllabus space-y-7">
      <h3 className="font-ppeditorial text-[32px]">Course syllabus</h3>
      <div className="grid gap-6">
        {syllabus.map((syllabus, index) => {
          // set lesson 1 and 2 default open for example only
          const defaultOpen = (arg: number) => (arg > 1 ? false : true);

          return (
            <Accordion
              key={syllabus.uuid}
              idx={index}
              expanded={defaultOpen(index)}
              content={syllabus}
            ></Accordion>
          );
        })}
      </div>
    </div>
  );
}

export default Syllabus;
