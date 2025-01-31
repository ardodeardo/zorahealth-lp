"use client";

import React, { useState } from "react";

// components
import { CardExpert } from "@/app/components/Card";

// dummy content
import { experts } from "@/app/constants/content/experts";

function Experts() {
  const limit = 6;
  const [expand, setExpand] = useState<boolean>(false);

  return (
    <section id="c-experts" className="c-experts py-12 mt-12">
      <div className="container mx-auto">
        <div className="pt-7 space-y-7">
          <h3 className="font-ppeditorial text-[32px]">
            Experts you&apos;ll learn from
          </h3>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {experts.map((expert, index) => {
              return (
                <CardExpert
                  key={expert.uuid}
                  {...expert}
                  className={index + 1 > limit ? (expand ? "" : "hidden") : ""}
                ></CardExpert>
              );
            })}
          </div>

          <div className="w-full flex justify-end">
            <button
              type="button"
              className="block font-semibold text-sm hover:underline underline-offset-2"
              onClick={() => setExpand(!expand)}
            >
              {expand ? "Show less" : <>Show {experts.length - limit} more</>}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experts;
