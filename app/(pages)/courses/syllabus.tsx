import React from "react";
import Image from "next/image";

// components
import Accordion from "@/app/components/Accordion";

// dummy content
import { syllabus } from "@/app/constants/content/syllabus";

import { PATH } from "@/app/constants/config/path";

function Syllabus() {
  return (
    <section id="c-syllabus" className="c-syllabus py-12">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-12 gap-6">
          {/* left */}
          <div className="lg:col-span-8 space-y-32">
            {/* pricing */}
            <div className="flex items-center justify-between">
              <div className="flex items-start gap-x-3 w-3/4 lg:w-auto">
                <Image
                  alt="zorahealth"
                  src={PATH.image.concat(
                    "pages/course/syllabus/verified-badge.svg"
                  )}
                  width={28}
                  height={28}
                  className="min-w-7 min-h-7 mt-0.5"
                ></Image>
                <div className="space-y-3">
                  <p className="text-sm font-medium">
                    &quot;Full refund withind 30 days, no question asked&quot;
                  </p>
                  <p className="text-sm font-medium">Elligible for FSA/HSA</p>
                </div>
              </div>

              <p className="font-ppeditorial text-[32px]">$195</p>
            </div>

            <div className="space-y-7">
              <p className="font-ppeditorial text-[32px]">Course syllabus</p>
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
          </div>

          {/* right */}
          <div className="lg:col-span-4">carousel</div>
        </div>
      </div>
    </section>
  );
}

export default Syllabus;
